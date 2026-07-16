"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };
type Edge = { a: Point; corner: Point; b: Point };

const BASE_RGB = [209, 213, 219] as const; // #D1D5DB
const HOVER_RGB = [37, 99, 235] as const; // #2563EB

const CONNECT_DISTANCE = 260;
const MAX_LINKS_PER_NODE = 2;
const MOUSE_RADIUS = 190;
const BASE_LINE_OPACITY = 0.16;
const BASE_NODE_OPACITY = 0.4;

function getNodeCount(width: number, height: number) {
  const area = width * height;
  const count = Math.round(area / 18000);
  return Math.max(60, Math.min(100, count));
}

function lerpColor(t: number) {
  const r = Math.round(BASE_RGB[0] + (HOVER_RGB[0] - BASE_RGB[0]) * t);
  const g = Math.round(BASE_RGB[1] + (HOVER_RGB[1] - BASE_RGB[1]) * t);
  const b = Math.round(BASE_RGB[2] + (HOVER_RGB[2] - BASE_RGB[2]) * t);
  return `${r}, ${g}, ${b}`;
}

function pointToSegmentDistance(
  px: number,
  py: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lengthSq = dx * dx + dy * dy;
  let t = lengthSq === 0 ? 0 : ((px - x1) * dx + (py - y1) * dy) / lengthSq;
  t = Math.max(0, Math.min(1, t));
  const cx = x1 + t * dx;
  const cy = y1 + t * dy;
  return Math.hypot(px - cx, py - cy);
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let edges: Edge[] = [];
    let nodePoints: Point[] = [];
    let animationId = 0;
    const mouse = { x: -9999, y: -9999 };

    function buildTraces() {
      const count = getNodeCount(width, height);
      const nodes: Point[] = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
      }));

      const edgeKeys = new Set<string>();
      const newEdges: Edge[] = [];

      nodes.forEach((node, i) => {
        const distances = nodes
          .map((other, j) => ({ j, dist: Math.hypot(node.x - other.x, node.y - other.y) }))
          .filter(({ j, dist }) => j !== i && dist <= CONNECT_DISTANCE)
          .sort((x, y) => x.dist - y.dist)
          .slice(0, MAX_LINKS_PER_NODE);

        distances.forEach(({ j }) => {
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (edgeKeys.has(key)) return;
          edgeKeys.add(key);

          const other = nodes[j];
          const corner =
            Math.random() < 0.5
              ? { x: node.x, y: other.y }
              : { x: other.x, y: node.y };

          newEdges.push({ a: node, corner, b: other });
        });
      });

      const pointMap = new Map<string, Point>();
      newEdges.forEach(({ a, corner, b }) => {
        [a, corner, b].forEach((p) => {
          const key = `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
          if (!pointMap.has(key)) pointMap.set(key, p);
        });
      });

      edges = newEdges;
      nodePoints = Array.from(pointMap.values());
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildTraces();
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function proximityBoost(x: number, y: number) {
      const dist = Math.hypot(x - mouse.x, y - mouse.y);
      if (dist >= MOUSE_RADIUS) return 0;
      return 1 - dist / MOUSE_RADIUS;
    }

    function tick() {
      ctx!.clearRect(0, 0, width, height);

      for (const { a, corner, b } of edges) {
        const distA = pointToSegmentDistance(mouse.x, mouse.y, a.x, a.y, corner.x, corner.y);
        const distB = pointToSegmentDistance(mouse.x, mouse.y, corner.x, corner.y, b.x, b.y);

        const boostA = distA >= MOUSE_RADIUS ? 0 : 1 - distA / MOUSE_RADIUS;
        const boostB = distB >= MOUSE_RADIUS ? 0 : 1 - distB / MOUSE_RADIUS;

        const opacityA = BASE_LINE_OPACITY + boostA * 0.75;
        const opacityB = BASE_LINE_OPACITY + boostB * 0.75;
        const widthA = 0.75 + boostA * 2.4;
        const widthB = 0.75 + boostB * 2.4;

        ctx!.strokeStyle = `rgba(${lerpColor(boostA)}, ${opacityA})`;
        ctx!.lineWidth = widthA;
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(corner.x, corner.y);
        ctx!.stroke();

        ctx!.strokeStyle = `rgba(${lerpColor(boostB)}, ${opacityB})`;
        ctx!.lineWidth = widthB;
        ctx!.beginPath();
        ctx!.moveTo(corner.x, corner.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.stroke();
      }

      for (const node of nodePoints) {
        const boost = proximityBoost(node.x, node.y);
        const opacity = BASE_NODE_OPACITY + boost * 0.6;
        const radius = 1.3 + boost * 2.5;

        ctx!.fillStyle = `rgba(${lerpColor(boost)}, ${opacity})`;
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      animationId = requestAnimationFrame(tick);
    }

    resize();
    animationId = requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
