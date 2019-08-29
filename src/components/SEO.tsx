/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'

import { useSiteMetadata } from 'hooks/useSiteMetadata'

interface Props {
  lang?: string
  meta?: any[]
}

export const SEO: FunctionComponent<Props> = ({ lang, meta }) => {
  const { title, description, author } = useSiteMetadata()

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${author}`}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          name: `author`,
          content: author
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        }
      ].concat(meta ? meta : [])}
    />
  )
}
