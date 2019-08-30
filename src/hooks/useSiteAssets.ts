import { useStaticQuery, graphql } from 'gatsby'

interface SiteAssets {
  publicURL: string
  name: string
}

export function useSiteAssets() {
  const data = useStaticQuery(
    graphql`
      query {
        allFile {
          nodes {
            publicURL
            name
          }
        }
      }
    `
  )
  return data.allFile.nodes as SiteAssets[]
}
