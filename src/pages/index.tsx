import React, { FunctionComponent } from 'react'

import { Layout } from 'templates/Layout'
import { SEO } from 'components'

interface Props {
  location: Location
}

const Index: FunctionComponent<Props> = props => {
  return (
    <Layout {...props}>
      <SEO lang="en" headerTitle="Home" />
      Hello Gatsby.js!
    </Layout>
  )
}

export default Index
