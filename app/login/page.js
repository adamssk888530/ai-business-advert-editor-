"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <span>AI</span>
        </div>

        <h1>Welcome Back</h1>

        <p>
          Login to AI Business Advert Editor
          and start creating professional posters.
        </p>

        <button className="google-login-button">
          <span className="google-icon">G</span>
          Continue with Google
        </button>

        <div className="login-divider">
          <span>Secure Login</span>
        </div>

        <div className="login-info">
          <p>✓ Your posters are saved to your account</p>
          <p>✓ Your subscription is linked to your account</p>
          <p>✓ Free users get 5 posters every month</p>
        </div>

        <Link href="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
