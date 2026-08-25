export default function PricingCard({
  name,
  price,
  period = "month",
  posters,
  features = [],
  popular = false,
}) {
  return (
    <div className={`pricing-card ${popular ? "popular" : ""}`}>
      {popular && <div className="popular-badge">MOST POPULAR</div>}

      <h3>{name}</h3>

      <div className="pricing-price">
        ${price}
        <span>/{period}</span>
      </div>

      <p className="poster-limit">{posters}</p>

      <ul>
        {features.map((feature) => (
          <li key={feature}>✓ {feature}</li>
        ))}
      </ul>

      <button className="pricing-button">
        {price === 0 ? "Get Started" : "Choose Plan"}
      </button>
    </div>
  );
}
