import { useStaticQuery, graphql } from 'gatsby'

interface GraphqlFile {
  publicURL?: string
  name?: string
}

export function useLogo() {
  const data = useStaticQuery(graphql`
    query Lgoo {
      file(name: { eq: "MoonTory_logo" }) {
        publicURL
      }
    }
  `)

  return data.file as GraphqlFile
}
