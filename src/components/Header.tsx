import React, { FunctionComponent, useState } from 'react'
import { Link } from 'gatsby'

interface Props {
  location: Location
}

export const Header: FunctionComponent<Props> = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav className="navbar is-link">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </Link>
        <div
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          data-target="navbarExampleTransparentExample"
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        id="navbarExampleTransparentExample"
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <Link className="bd-tw-button button" to="/">
                  <span className="icon">
                    <i className="fab fa-twitter"></i>
                  </span>
                  <span>Tweet</span>
                </Link>
              </p>
              <p className="control">
                <Link className="button is-primary" to="/">
                  <span className="icon">
                    <i className="fas fa-download"></i>
                  </span>
                  <span>Download</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
