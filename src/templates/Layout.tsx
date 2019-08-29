import React, { FunctionComponent, PropsWithChildren, Fragment } from 'react'

import { Header, Footer, SEO } from 'components'

interface Props {
  location: Location
}

export const Layout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  ...props
}) => {
  console.log('props', props)
  return (
    <div>
      <SEO lang="en" />
      <Header {...props} />
      <main style={{ minHeight: '100vh' }}>{children}</main>
      <Footer />
    </div>
  )
}
