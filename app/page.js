import Navbar from "../components/Navbar";
import PosterEditor from "../components/PosterEditor";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section
        style={{
          padding: "50px 20px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(35px, 6vw, 60px)",
              marginBottom: "15px",
              fontWeight: "900",
            }}
          >
            Create Your Business Poster
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "18px",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            Choose your design, add your product information,
            and create a professional business poster in minutes.
          </p>
        </div>

        <PosterEditor />
      </section>
    </main>
  );
}
