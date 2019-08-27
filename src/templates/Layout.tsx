import React, { FunctionComponent, PropsWithChildren, Fragment } from 'react'

import { Header } from './Header'

interface Props {}

export const Layout: FunctionComponent<PropsWithChildren<Props>> = ({
  children
}) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  )
}
