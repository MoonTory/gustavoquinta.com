import React, { FunctionComponent } from 'react'

import { MainLayout } from 'templates/Layout'
import { SEO, Jumbotron } from 'components'

interface Props {
  location: Location
}

const Index: FunctionComponent<Props> = props => {
  return (
    <MainLayout {...props}>
      <SEO lang="en" headerTitle="Home" />
      <Jumbotron title="Medium Title" subTitle="Medium Subtitle" />
      <div className="container has-text-centered">Hello Gatsby.js!</div>
    </MainLayout>
  )
}

export default Index
