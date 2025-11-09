// Footer.jsx
export default function Footer() {
    return (
      <footer style={{
        width: "100%",
        textAlign: "center",
        padding: "20px 12px",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        marginTop: 32,
        color: "#6b6b6b",
        background: "#FFF9F4" // soft pastel tone
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ margin: 0, fontSize: 14 }}>
            © 2025 Mystic India Guide. All rights reserved.
          </p>
          <p style={{ margin: "6px 0 0 0", fontSize: 12, opacity: 0.8 }}>
            Prototype by Shreeya Galagali for portfolio and educational purposes.
          </p>
        </div>
      </footer>
    )
  }
  