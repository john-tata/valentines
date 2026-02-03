import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Yes() {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
    });
  }, []);

  return (
  <div className="yes-page">
    <div className="card">
      <h1>YAYYY 💕</h1>
      <p>You’re officially my Valentine 🥰</p>

      <img
        src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
        alt="celebration"
        style={{ width: "220px", marginTop: "15px" }}
      />
    </div>
  </div>
);
}
