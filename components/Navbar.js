export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-ai">AI</span>
        <span>Business Advert Editor</span>
      </div>

      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#templates">Templates</a>
        <a href="#pricing">Pricing</a>
        <button className="login-button">
          Login with Google
        </button>
      </div>
    </nav>
  );
}
