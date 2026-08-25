"use client";

import { useRef, useState } from "react";

export default function PosterEditor() {
  const canvasRef = useRef(null);

  const [productName, setProductName] = useState("Premium Product");
  const [price, setPrice] = useState("15,000");
  const [whatsapp, setWhatsapp] = useState("08012345678");
  const [headline, setHeadline] = useState("NEW ARRIVAL");
  const [brandColor, setBrandColor] = useState("#6d28d9");
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const drawPoster = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = 1080;
    canvas.height = 1350;

    // Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Top color area
    ctx.fillStyle = brandColor;
    ctx.fillRect(0, 0, canvas.width, 250);

    // Headline
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 70px Arial";
    ctx.textAlign = "center";
    ctx.fillText(headline.toUpperCase(), 540, 155);

    // Product image
    if (image) {
      const productImage = new Image();

      productImage.onload = () => {
        const maxWidth = 850;
        const maxHeight = 600;

        const ratio = Math.min(
          maxWidth / productImage.width,
          maxHeight / productImage.height
        );

        const width = productImage.width * ratio;
        const height = productImage.height * ratio;

        const x = (canvas.width - width) / 2;
        const y = 300 + (maxHeight - height) / 2;

        ctx.drawImage(productImage, x, y, width, height);

        drawText(ctx);
      };

      productImage.src = image;
    } else {
      ctx.fillStyle = "#f3f4f6";
      ctx.roundRect(90, 330, 900, 500, 30);
      ctx.fill();

      ctx.fillStyle = "#9ca3af";
      ctx.font = "bold 42px Arial";
      ctx.textAlign = "center";
      ctx.fillText("UPLOAD PRODUCT IMAGE", 540, 585);

      drawText(ctx);
    }
  };

  const drawText = (ctx) => {
    // Product name
    ctx.fillStyle = "#111827";
    ctx.font = "bold 62px Arial";
    ctx.textAlign = "center";
    ctx.fillText(productName.toUpperCase(), 540, 930);

    // Price label
    ctx.fillStyle = "#6b7280";
    ctx.font = "30px Arial";
    ctx.fillText("SPECIAL PRICE", 540, 995);

    // Price
    ctx.fillStyle = brandColor;
    ctx.font = "bold 85px Arial";
    ctx.fillText(`₦${price}`, 540, 1085);

    // WhatsApp
    ctx.fillStyle = "#111827";
    ctx.font = "bold 32px Arial";
    ctx.fillText(`ORDER ON WHATSAPP: ${whatsapp}`, 540, 1170);

    // Footer
    ctx.fillStyle = brandColor;
    ctx.fillRect(0, 1240, 1080, 110);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 34px Arial";
    ctx.fillText("AI BUSINESS ADVERT EDITOR", 540, 1308);
  };

  const handleGenerate = () => {
    drawPoster();
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const link = document.createElement("a");

    link.download = "business-poster.png";
    link.href = canvas.toDataURL("image/png");

    link.click();
  };

  return (
    <div className="poster-editor">
      <div className="editor-controls">
        <h2>Create Your Poster</h2>

        <label>Product Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />

        <label>Headline</label>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          placeholder="NEW ARRIVAL"
        />

        <label>Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Premium Shoes"
        />

        <label>Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="15,000"
        />

        <label>WhatsApp Number</label>
        <input
          type="text"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="08012345678"
        />

        <label>Brand Color</label>
        <input
          type="color"
          value={brandColor}
          onChange={(e) => setBrandColor(e.target.value)}
        />

        <button onClick={handleGenerate}>
          Generate Poster
        </button>

        <button onClick={handleDownload}>
          Download Poster
        </button>
      </div>

      <div className="poster-preview">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
