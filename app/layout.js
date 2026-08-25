import "./globals.css";

export const metadata = {
  title: "AI Business Advert Editor",
  description: "Create professional business posters easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
