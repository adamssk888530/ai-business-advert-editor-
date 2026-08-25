import Navbar from "../../components/Navbar";
import PricingCard from "../../components/PricingCard";

const plans = [
  {
    name: "Free",
    price: 0,
    posters: "5 posters per month",
    features: [
      "5 posters every month",
      "Basic templates",
      "HD download",
      "Ads included",
    ],
  },
  {
    name: "Basic",
    price: 0.99,
    posters: "30 posters per month",
    features: [
      "30 posters every month",
      "All templates",
      "HD download",
      "No ads",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: 2.99,
    posters: "Unlimited posters",
    features: [
      "Unlimited posters",
      "All templates",
      "HD download",
      "No ads",
      "Brand Kit",
      "Priority support",
    ],
  },
];

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      <section
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 16px",
              borderRadius: "30px",
              background: "#eef2ff",
              color: "#4f46e5",
              fontWeight: "700",
              marginBottom: "15px",
            }}
          >
            Simple & Affordable
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 58px)",
              margin: "0 0 15px",
              fontWeight: "900",
            }}
          >
            Choose Your Plan
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "18px",
              maxWidth: "650px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Create professional business posters with a plan
            that fits your needs.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              posters={plan.posters}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "45px",
            color: "#6b7280",
            fontSize: "14px",
          }}
        >
          Cancel your subscription anytime.
        </div>
      </section>
    </main>
  );
}
