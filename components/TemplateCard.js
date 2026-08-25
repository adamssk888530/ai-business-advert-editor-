export default function TemplateCard({
  title,
  category,
  image,
  isPremium = false,
}) {
  return (
    <div className="template-card">
      <div className="template-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="template-placeholder">
            Poster Preview
          </div>
        )}

        {isPremium && (
          <span className="premium-badge">
            PREMIUM
          </span>
        )}
      </div>

      <div className="template-info">
        <h3>{title}</h3>
        <p>{category}</p>

        <button className="use-template-button">
          Use Template
        </button>
      </div>
    </div>
  );
}
