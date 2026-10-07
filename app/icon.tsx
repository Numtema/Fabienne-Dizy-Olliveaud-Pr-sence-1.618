import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#171B1C",
          borderRadius: "50%",
          color: "#B6A17C",
          fontSize: 18,
          fontFamily: "serif",
          fontStyle: "italic",
        }}
      >
        ∞
      </div>
    ),
    { ...size }
  );
}
