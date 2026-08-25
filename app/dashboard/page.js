"use client";

import Link from "next/link";

export default function DashboardPage() {
  const postersUsed = 0;
  const postersLimit = 5;

  return (
    <main className="dashboard-page">
      <aside className="dashboard-sidebar">
        <div className="dashboard-brand">
          <span>AI</span>
          <strong>Business Advert Editor</strong>
        </div>

        <nav>
          <Link href="/dashboard">🏠 Dashboard</Link>
          <Link href="/templates">🎨 Templates</Link>
          <Link href="/">✏️ Create Poster</Link>
          <Link href="/pricing">💳 Pricing</Link>
        </nav>

        <div className="sidebar-bottom">
          <button>⚙️ Settings</button>
          <button>🚪 Logout</button>
        </div>
      </aside>

      <section className="dashboard-content">
        <header className="dashboard-header">
          <div>
            <p className="welcome-small">Welcome back 👋</p>
            <h1>Your Dashboard</h1>
          </div>

          <div className="user-profile">
            <div className="user-avatar">U</div>
            <div>
              <strong>User</strong>
              <span>Free Plan</span>
            </div>
          </div>
        </header>

        <div className="dashboard-grid">
          <div className="dashboard-stat">
            <span>Current Plan</span>
            <strong>Free</strong>
            <small>Upgrade anytime</small>
          </div>

          <div className="dashboard-stat">
            <span>Posters Used</span>
            <strong>
              {postersUsed}/{postersLimit}
            </strong>
            <small>This month</small>
          </div>

          <div className="dashboard-stat">
            <span>Posters Remaining</span>
            <strong>{postersLimit - postersUsed}</strong>
            <small>Available this month</small>
          </div>

          <div className="dashboard-stat">
            <span>Saved Posters</span>
            <strong>0</strong>
            <small>Your designs</small>
          </div>
        </div>

        <section className="dashboard-create">
          <div>
            <span className="dashboard-badge">
              FREE PLAN
            </span>

            <h2>Create Your Next Poster</h2>

            <p>
              Choose a professional template and create
              your business advert in minutes.
            </p>

            <div className="dashboard-actions">
              <Link href="/templates">
                Browse Templates
              </Link>

              <Link href="/pricing">
                Upgrade Plan
              </Link>
            </div>
          </div>

          <div className="dashboard-preview">
            <div className="preview-label">
              POSTER PREVIEW
            </div>

            <div className="preview-poster">
              <div className="preview-top">
                NEW ARRIVAL
              </div>

              <div className="preview-image">
                PRODUCT IMAGE
              </div>

              <h3>Your Product</h3>

              <strong>₦15,000</strong>

              <p>
                Order now on WhatsApp
              </p>
            </div>
          </div>
        </section>

        <section className="recent-section">
          <div className="section-heading">
            <div>
              <h2>Recent Posters</h2>
              <p>Your latest designs will appear here.</p>
            </div>

            <Link href="/templates">
              View Templates →
            </Link>
          </div>

          <div className="empty-posters">
            <div className="empty-icon">🎨</div>
            <h3>No posters yet</h3>
            <p>
              Create your first professional business
              poster today.
            </p>

            <Link href="/templates">
              Create First Poster
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
