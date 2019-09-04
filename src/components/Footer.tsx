import React, { FunctionComponent } from 'react'

import { useGatsbyLogo, useGithubLogo, useNetlifyLogo } from 'hooks'

interface Props {}

export const Footer: FunctionComponent<Props> = () => {
  const gastbyLogo = useGatsbyLogo()
  const githubLogo = useGithubLogo()
  const netlifyLogo = useNetlifyLogo()
  const defaultMargin = { margin: '0 1rem 0 1rem' }

  return (
    <footer className="container has-background-dark is-fluid is-marginless has-text-white">
      <div className="columns has-text-centered">
        <div className="column">
          <h1 className="is-size-4 has-text-primary">Menu</h1>
        </div>
        <div className="column">
          <h1 className="is-size-4 has-text-primary">Contact</h1>
        </div>
        <div className="column">
          <h1 className="is-size-4 has-text-primary">Social Media</h1>
        </div>
      </div>
      <div className="columns has-background-primary">
        <div
          className="column has-text-centered is-paddingless is-size-5"
          style={defaultMargin}
        >
          &copy; gustavoquinta • {new Date().getFullYear()} • Built with{' '}
          <a href="https://github.com/MoonTory">
            <img height="16px" width="16px" src={gastbyLogo.publicURL} alt="GatsbyJs" />
          </a>{' '}
          • Deployed on{' '}
          <a href="https://netlify.com">
            <img height="16px" width="16px" src={netlifyLogo.publicURL} alt="GatsbyJs" />
          </a>{' '}
          • Open sourced on{' '}
          <a href="https://github.com/MoonTory">
            <img height="16px" width="16px" src={githubLogo.publicURL} alt="GatsbyJs" />
          </a>{' '}
        </div>
      </div>
    </footer>
  )
}
