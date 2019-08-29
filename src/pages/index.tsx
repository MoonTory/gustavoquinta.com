import React, { FunctionComponent } from 'react'

import { Layout } from 'templates/Layout'

interface Props {
  location: Location
}

const index: FunctionComponent<Props> = props => {
  return <Layout {...props}>Hello Gatsby.js!</Layout>
}

export default index
