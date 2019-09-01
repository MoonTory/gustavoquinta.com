import React, { FunctionComponent } from 'react'

import { useWindowDimensions, useSiteAssets } from 'hooks'

interface Props {}

export const Footer: FunctionComponent<Props> = () => {
  const { width } = useWindowDimensions()
  const data = useSiteAssets()

  const defaultMargin = { margin: '0 1rem 0 1rem' }

  return (
    <div className="container has-background-link is-fluid is-marginless has-text-white">
      <div className="columns has-text-centered">
        <div className="column">Section 1</div>
        <div className="column">Section 2</div>
        <div className="column">Section 3</div>
        <div className="column">Section 4</div>
      </div>
      <div className="columns">
        <div
          className={`column ${
            width < 1024 ? 'has-text-centered' : 'has-text-centered'
          }`}
          style={defaultMargin}
        >
          &copy; Gustavo Quinta • {new Date().getFullYear()} • Built with{' '}
          <img
            height="16px"
            width="16px"
            src={data[0].publicURL}
            alt="GatsbyJs"
          />
        </div>
      </div>
    </div>
  )
}
