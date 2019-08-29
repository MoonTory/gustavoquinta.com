import { useStaticQuery, graphql } from 'gatsby'

interface SiteMetadata {
  title: string
  description: string
  author: string
}

export function useSiteMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  return site.siteMetadata as SiteMetadata
}
