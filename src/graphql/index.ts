import {gql} from 'graphql-request'

export const HOME_PAGE = gql`
query PageQuery($slug: String!) {
  page(where: { slug: $slug }) {
    blocks {
      __typename
      ... on Hero {
        header
        subtitle
        buttonText
        hasForm
      }
			... on CardSection {
        heading
        cards {
          title
          link
          image {
            handle
            height
            width
          }
        }
      }
      ... on DoubleSection {
        sectionHeader: header
        body {
          markdown
        }
        reverseSection
        image {
          handle
          height
          width
        }
      }
      ... on Event {
        title
        description
        date
        eventStatus
      }
    }
  }
}
`