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
  console.log('data', data)
  return data.allFile.nodes as SiteAssets[]
}
