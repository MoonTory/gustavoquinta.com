import React, { FunctionComponent } from 'react'

import { useWindowDimensions } from 'hooks/useWindowDimensions'
import { useSiteAssets } from 'hooks/useSiteAssets'

interface Props {}

export const Footer: FunctionComponent<Props> = () => {
  const { width } = useWindowDimensions()
  const data = useSiteAssets()

  console.log('data', data)

  // Default margin style for footer's second level.
  const marginStyle = { margin: '0 1rem 0 1rem' }

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
          className={`column ${width < 1024 ? 'has-text-centered' : ''}`}
          style={marginStyle}
        >
          Copyright &copy; {new Date().getFullYear()} - Gustavo Quinta
        </div>
        <div
          className={`column ${
            width < 1024 ? 'has-text-centered' : 'has-text-right'
          }`}
          style={marginStyle}
        >
          Made with{' '}
          <img
            height="20px"
            width="15px"
            src={data[0].publicURL}
            alt="GatsbyJs"
          />
        </div>
      </div>
    </div>
  )
}
