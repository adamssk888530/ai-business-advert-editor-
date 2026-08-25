import Navbar from "../../components/Navbar";
import TemplateCard from "../../components/TemplateCard";

const templates = [
  { title: "Fashion Sale", category: "Fashion", isPremium: false },
  { title: "Premium Shoes", category: "Shoes", isPremium: false },
  { title: "New Smartphone", category: "Electronics", isPremium: true },
  { title: "Special Food Offer", category: "Food", isPremium: false },
  { title: "Modern House", category: "Real Estate", isPremium: true },
  { title: "Beauty Collection", category: "Beauty", isPremium: true },
  { title: "Car For Sale", category: "Automobile", isPremium: false },
  { title: "Business Services", category: "Services", isPremium: false },
  { title: "Online Store", category: "Shopping", isPremium: false },
  { title: "Special Discount", category: "Promotion", isPremium: true },
  { title: "Hotel Promotion", category: "Hotels", isPremium: true },
  { title: "Education Course", category: "Education", isPremium: false },
];

const categories = [
  "All",
  "Fashion",
  "Shoes",
  "Electronics",
  "Food",
  "Beauty",
  "Real Estate",
  "Automobile",
  "Services",
  "Shopping",
  "Promotion",
  "Hotels",
  "Education",
];

export default function TemplatesPage() {
  return (
    <main>
      <Navbar />

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 20px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              marginBottom: "12px",
              fontWeight: "900",
            }}
          >
            Business Templates
          </h1>

          <p style={{ color: "#6b7280", fontSize: "18px" }}>
            Choose a professional template for your business.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            overflowX: "auto",
            paddingBottom: "20px",
            marginBottom: "30px",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              style={{
                border: "1px solid #dbeafe",
                background: "#ffffff",
                color: "#2563eb",
                padding: "10px 16px",
                borderRadius: "25px",
                whiteSpace: "nowrap",
                fontWeight: "700",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "22px",
          }}
        >
          {templates.map((template) => (
            <TemplateCard
              key={template.title}
              title={template.title}
              category={template.category}
              isPremium={template.isPremium}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
