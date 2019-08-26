import React, { FunctionComponent, PropsWithChildren, Fragment } from 'react'

interface Props {}

export const Layout: FunctionComponent<PropsWithChildren<Props>> = ({
  children
}) => {
  return <Fragment>{children}</Fragment>
}
