import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fabienne Dizy Olliveaud — Présence 1.618";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "#171B1C",
          color: "#FAF8F3",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 22, letterSpacing: "0.25em", textTransform: "uppercase", color: "#B6A17C" }}>
            PRÉSENCE 1.618
          </div>
          <div style={{ fontSize: 24, color: "#8F998E" }}>
            ∞
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, color: "#FAF8F3" }}>
            Fabienne Dizy Olliveaud
          </div>
          <div style={{ fontSize: 44, fontStyle: "italic", color: "#B6A17C" }}>
            Le mouvement vers l’équilibre.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#E5DED1", opacity: 0.8 }}>
          <div>Énergétique · Massage Lemniscate · Radiesthésie · Aromathérapie</div>
          <div>Cabinet & à distance</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
