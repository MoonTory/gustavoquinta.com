import { useStaticQuery, graphql } from 'gatsby'

interface GraphqlFile {
  publicURL?: string
  name?: string
}

export function useGithubLogo() {
  const data = useStaticQuery(graphql`
    query GithubLogo {
      file(name: { eq: "Github_logo" }) {
        publicURL
      }
    }
  `)

  return data.file as GraphqlFile
}
