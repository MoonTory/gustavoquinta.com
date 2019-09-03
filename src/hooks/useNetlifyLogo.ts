import { useStaticQuery, graphql } from 'gatsby'

interface GraphqlFile {
  publicURL?: string
  name?: string
}

export function useNetlifyLogo() {
  const data = useStaticQuery(graphql`
    query NetlifyLogo {
      file(name: { eq: "Netlify_logo" }) {
        publicURL
      }
    }
  `)

  return data.file as GraphqlFile
}
