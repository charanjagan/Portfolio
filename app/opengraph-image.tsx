import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = "Charan Jagan | AI & Data Engineer | Purdue MS ECE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f8fa",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(10,132,255,0.35), transparent 45%), radial-gradient(circle at 85% 30%, rgba(175,82,222,0.28), transparent 45%), radial-gradient(circle at 60% 90%, rgba(255,45,146,0.22), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 1040,
            padding: "64px 72px",
            borderRadius: 48,
            background: "rgba(255,255,255,0.62)",
            border: "2px solid rgba(255,255,255,0.7)",
            boxShadow: "0 20px 50px rgba(31,41,55,0.16)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontFamily: "monospace",
              color: "#18181b",
            }}
          >
            charan<span style={{ color: "#0A84FF" }}>.</span>jagan
          </div>
          <div
            style={{
              marginTop: 36,
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -3,
              color: "#18181b",
            }}
          >
            {profile.name}
          </div>
          <div style={{ marginTop: 12, fontSize: 38, color: "#52525b" }}>
            {profile.role}
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 44 }}>
            {["AI & Data Engineer", "MS ECE @ Purdue University"].map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "12px 28px",
                  borderRadius: 999,
                  fontSize: 26,
                  fontWeight: 600,
                  color: "#ffffff",
                  backgroundImage: "linear-gradient(90deg, #0A84FF, #5E5CE6)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
