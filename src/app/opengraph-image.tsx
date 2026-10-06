import { ImageResponse } from "next/og";

export const alt = "Cool Media — Gaziantep Dijital Reklam ve Tasarım Ajansı";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0c0d",
          color: "#f4f2ee",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 56, letterSpacing: -2 }}>
          <span style={{ fontWeight: 800 }}>cool</span>
          <span style={{ fontWeight: 200 }}>media</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 128, fontWeight: 800, lineHeight: 0.95, letterSpacing: -5 }}>
          <span>Planla. Başlat.</span>
          <span style={{ color: "#f7c844" }}>Büyüt.</span>
        </div>
        <div style={{ display: "flex", fontSize: 30, opacity: 0.7 }}>Gaziantep&apos;in dijital reklam ve tasarım ajansı · 2017&apos;den beri</div>
      </div>
    ),
    size,
  );
}
