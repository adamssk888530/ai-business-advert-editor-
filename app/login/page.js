"use client";

import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function LoginPage() {
  async function loginWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  }

  return (
    <main className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <span>AI</span>
        </div>

        <h1>Welcome Back</h1>

        <p>
          Login to AI Business Advert Editor
          <br />
          and start creating professional posters.
        </p>

        <button
          className="google-login-button"
          onClick={loginWithGoogle}
        >
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
