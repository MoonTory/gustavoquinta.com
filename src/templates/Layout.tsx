import React, { FunctionComponent, PropsWithChildren, Fragment } from 'react'

import { Header, Footer, SEO } from 'components'

interface Props {
  location: Location
}

export const Layout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  ...props
}) => {
  return (
    <Fragment>
      <Header {...props} />
      <main style={{ minHeight: '100vh' }}>{children}</main>
      <Footer />
    </Fragment>
  )
}
