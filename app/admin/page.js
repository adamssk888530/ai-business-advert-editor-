"use client";

import Link from "next/link";

const stats = [
  { title: "Total Users", value: "0", icon: "👥" },
  { title: "Free Users", value: "0", icon: "🆓" },
  { title: "Basic Users", value: "0", icon: "🔵" },
  { title: "Premium Users", value: "0", icon: "🟣" },
];

export default function AdminPage() {
  return (
    <main className="admin-page">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span>AI</span>
          <strong>Business Advert Editor</strong>
        </div>

        <nav>
          <Link href="/admin">📊 Dashboard</Link>
          <Link href="/admin/users">👥 Users</Link>
          <Link href="/admin/templates">🎨 Templates</Link>
          <Link href="/admin/payments">💳 Payments</Link>
          <Link href="/admin/subscriptions">🔄 Subscriptions</Link>
          <Link href="/admin/settings">⚙️ Settings</Link>
        </nav>

        <Link href="/" className="admin-home">
          ← View Website
        </Link>
      </aside>

      <section className="admin-content">
        <header className="admin-header">
          <div>
            <span className="admin-label">ADMIN PANEL</span>
            <h1>Admin Dashboard</h1>
            <p>
              Manage users, templates, subscriptions and payments.
            </p>
          </div>

          <div className="admin-profile">
            <div className="admin-avatar">A</div>
            <div>
              <strong>Administrator</strong>
              <span>Website Owner</span>
            </div>
          </div>
        </header>

        <section className="admin-stats">
          {stats.map((stat) => (
            <div className="admin-stat-card" key={stat.title}>
              <div className="stat-icon">{stat.icon}</div>
              <span>{stat.title}</span>
              <strong>{stat.value}</strong>
              <small>Current total</small>
            </div>
          ))}
        </section>

        <section className="admin-main-grid">
          <div className="admin-card">
            <div className="admin-card-header">
              <div>
                <h2>Revenue Overview</h2>
                <p>Subscription revenue</p>
              </div>

              <select defaultValue="month">
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>

            <div className="revenue-placeholder">
              <div className="revenue-number">$0.00</div>

              <div className="chart-line">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="chart-days">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <div>
                <h2>Plans</h2>
                <p>User distribution</p>
              </div>
            </div>

            <div className="plan-list">
              <div className="plan-row">
                <span>
                  <i className="plan-dot free-dot"></i>
                  Free
                </span>
                <strong>0</strong>
              </div>

              <div className="plan-row">
                <span>
                  <i className="plan-dot basic-dot"></i>
                  Basic
                </span>
                <strong>0</strong>
              </div>

              <div className="plan-row">
                <span>
                  <i className="plan-dot premium-dot"></i>
                  Premium
                </span>
                <strong>0</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="admin-card recent-users">
          <div className="admin-card-header">
            <div>
              <h2>Recent Users</h2>
              <p>Latest users who joined the platform.</p>
            </div>

            <Link href="/admin/users">
              View All →
            </Link>
          </div>

          <div className="empty-admin">
            <div>👥</div>
            <h3>No users yet</h3>
            <p>
              Users will appear here after they register with Google.
            </p>
          </div>
        </section>

        <section className="admin-quick-actions">
          <h2>Quick Actions</h2>

          <div className="quick-action-grid">
            <Link href="/admin/templates">
              🎨
              <strong>Manage Templates</strong>
              <span>Add or edit poster templates</span>
            </Link>

            <Link href="/admin/users">
              👥
              <strong>Manage Users</strong>
              <span>View and manage user accounts</span>
            </Link>

            <Link href="/admin/payments">
              💳
              <strong>Payments</strong>
              <span>View subscription payments</span>
            </Link>

            <Link href="/admin/settings">
              ⚙️
              <strong>Settings</strong>
              <span>Manage website settings</span>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
