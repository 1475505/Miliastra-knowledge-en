import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="header">
      <a href="/" className="header-logo">
        <div className="header-logo-icon">MK</div>
        <span>Miliastra KB</span>
      </a>
      <nav className="header-nav">
        <NavLink
          to="/svg"
          className={({ isActive }) => `header-nav-link${isActive ? ' active' : ''}`}
        >
          <span>🗺</span> Visual Maps
        </NavLink>
        <NavLink
          to="/docs"
          className={({ isActive }) => `header-nav-link${isActive ? ' active' : ''}`}
        >
          <span>📄</span> Docs
        </NavLink>
      </nav>
    </header>
  )
}
