"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const BASE_LINE_COLOR = "147, 197, 253"; // #93C5FD
const BASE_NODE_COLOR = "96, 165, 250"; // #60A5FA
const LINK_DISTANCE = 140;
const MOUSE_RADIUS = 180;
const BASE_NODE_OPACITY = 0.35;
const BASE_LINE_OPACITY = 0.15;

function getNodeCount(width: number, height: number) {
  const area = width * height;
  const count = Math.round(area / 18000);
  return Math.max(60, Math.min(100, count));
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
    let nodes: Node[] = [];
    let animationId = 0;
    const mouse = { x: -9999, y: -9999 };

    function createNodes() {
      const count = getNodeCount(width, height);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
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
      createNodes();
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
      const dx = x - mouse.x;
      const dy = y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist >= MOUSE_RADIUS) return 0;
      return 1 - dist / MOUSE_RADIUS;
    }

    function tick() {
      ctx!.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= LINK_DISTANCE) continue;

          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const boost = proximityBoost(midX, midY);
          const falloff = 1 - dist / LINK_DISTANCE;

          const opacity = BASE_LINE_OPACITY * falloff + boost * 0.55 * falloff;
          const lineWidth = 0.6 + boost * 1.8;

          ctx!.strokeStyle = `rgba(${BASE_LINE_COLOR}, ${opacity})`;
          ctx!.lineWidth = lineWidth;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.stroke();
        }
      }

      for (const node of nodes) {
        const boost = proximityBoost(node.x, node.y);
        const opacity = BASE_NODE_OPACITY + boost * 0.6;
        const radius = 1.4 + boost * 2.2;

        ctx!.fillStyle = `rgba(${BASE_NODE_COLOR}, ${opacity})`;
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
