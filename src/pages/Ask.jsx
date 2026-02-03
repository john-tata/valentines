import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Ask() {
  const navigate = useNavigate();
  const yesRef = useRef(null);

  const [scale, setScale] = useState(1);
  const [noPos, setNoPos] = useState({ top: "60%", left: "55%" });

  // NO button runs away
  const moveNo = () => {
    const maxX = window.innerWidth - 100;
const maxY = window.innerHeight - 100;

setNoPos({
  left: Math.random() * maxX + "px",
  top: Math.random() * maxY + "px",
});

  };

  // YES button proximity effect
useEffect(() => {
  if (window.innerWidth < 768) return;

  const handleMouseMove = (e) => {
    if (!yesRef.current) return;

    const rect = yesRef.current.getBoundingClientRect();
    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;

    const distance = Math.hypot(
      e.clientX - buttonX,
      e.clientY - buttonY
    );

    const maxDistance = 300;

    if (distance < maxDistance) {
      setScale(1 + (1 - distance / maxDistance) * 0.6);
    } else {
      setScale(1);
    }
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);


  return (
    <div style={styles.container}>
      <h1>Will you be my Valentine? 💘</h1>

      <button
        ref={yesRef}
        style={{ ...styles.yes, transform: `scale(${scale})` }}
        onClick={() => navigate("/yes")}
      >
        YES 💖
      </button>

      <button
        style={{ ...styles.no, top: noPos.top, left: noPos.left }}
        onMouseEnter={moveNo}
      >
        NO 💀
      </button>
    </div>
  );
}

const styles = {
  container: {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  gap: "30px",
  textAlign: "center",
},
  yes: {
  padding: "20px 45px",
  fontSize: "24px",
  borderRadius: "50px",
  cursor: "pointer",
  transition: "transform 0.15s ease-out",
},
 no: {
  position: "absolute",
  padding: "15px 35px",
  fontSize: "18px",
  borderRadius: "40px",
  background: "#555",
  color: "white",
},

};
