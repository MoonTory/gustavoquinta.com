import React, { FunctionComponent, PropsWithChildren, Fragment } from 'react'

import { SEO } from 'components/SEO'
import { Header } from './Header'

interface Props {}

export const Layout: FunctionComponent<PropsWithChildren<Props>> = ({
  children
}) => {
  return (
    <Fragment>
      <SEO lang="en" title="Gustavo Quinta | MoonTory" />
      <Header />
      {children}
    </Fragment>
  )
}
