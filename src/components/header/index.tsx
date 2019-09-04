import React, { FunctionComponent, useState } from 'react'
import { Link } from 'gatsby'

import { useLogo } from 'hooks'
import { useNavbarScroll } from './useNavbarScroll'
import './scss/header.scss'

interface Props {
  location: Location
}

export const Header: FunctionComponent<Props> = () => {
  const navElRef = useNavbarScroll()
  const logo = useLogo()
  const [isActive, setIsActive] = useState(false)

  return (
    <nav ref={navElRef} className="navbar is-dark is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              style={{ marginTop: '10px', width: '48px', height: '100%' }}
              src={logo.publicURL}
              className="logo"
            />
            <h1 className="has-text-primary">gustavo quinta</h1>
          </Link>
          <div
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            onClick={() => setIsActive(!isActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Articles
            </Link>
            <Link className="navbar-item" to="/">
              Projects
            </Link>
            <Link className="navbar-item" to="/">
              Resume
            </Link>
            <Link className="navbar-item" to="/">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
