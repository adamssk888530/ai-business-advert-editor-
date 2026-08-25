export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f8fc",
        fontFamily: "Arial, sans-serif",
        color: "#111827",
      }}
    >
      <header
        style={{
          height: "72px",
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 7%",
        }}
      >
        <div style={{ fontSize: "22px", fontWeight: "800" }}>
          <span style={{ color: "#2563eb" }}>AI</span>{" "}
          Business Advert Editor
        </div>

        <button
          style={{
            background: "#2563eb",
            color: "#ffffff",
            border: "none",
            padding: "12px 22px",
            borderRadius: "10px",
            fontWeight: "700",
          }}
        >
          Login with Google
        </button>
      </header>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#eef2ff",
            color: "#4f46e5",
            padding: "8px 16px",
            borderRadius: "30px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Professional Business Poster Maker
        </div>

        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            lineHeight: "1.05",
            margin: "0 auto 24px",
            maxWidth: "850px",
            fontWeight: "900",
          }}
        >
          Create Beautiful Business Posters Easily
        </h1>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto 35px",
            fontSize: "19px",
            lineHeight: "1.7",
            color: "#6b7280",
          }}
        >
          Choose a professional template, add your product image,
          price and business details, then create your poster in minutes.
        </p>

        <button
          style={{
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            color: "#ffffff",
            border: "none",
            padding: "16px 30px",
            borderRadius: "12px",
            fontSize: "17px",
            fontWeight: "800",
            cursor: "pointer",
          }}
        >
          Create Your First Poster
        </button>

        <div
          style={{
            marginTop: "70px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            textAlign: "left",
          }}
        >
          {[
            ["🎨", "Professional Templates", "Choose from many business categories."],
            ["🖼️", "Easy Poster Editor", "Change images, text, colors and prices."],
            ["📥", "HD Download", "Download your finished poster easily."],
            ["💼", "For Every Business", "Fashion, food, phones, real estate and more."],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              style={{
                background: "#ffffff",
                padding: "25px",
                borderRadius: "18px",
                border: "1px solid #e5e7eb",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>
                {icon}
              </div>

              <h3 style={{ margin: "0 0 8px", fontSize: "18px" }}>
                {title}
              </h3>

              <p style={{ margin: 0, color: "#6b7280", lineHeight: "1.5" }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          background: "#111827",
          color: "#ffffff",
        }}
      >
        © 2026 AI Business Advert Editor
      </footer>
    </main>
  );
}
