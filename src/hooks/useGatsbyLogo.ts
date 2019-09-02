import { useStaticQuery, graphql } from 'gatsby'

interface GraphqlFile {
  publicURL?: string
  name?: string
}

export function useGatsbyLogo() {
  const data = useStaticQuery(graphql`
    query GatsbyLogo {
      file(name: { eq: "Gatsby_Monogram" }) {
        publicURL
      }
    }
  `)

  return data.file as GraphqlFile
}
