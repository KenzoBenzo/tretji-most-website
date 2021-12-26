import { gql } from "graphql-request";

export const PAGE = gql`
	query PageQuery($slug: String!) {
		page(where: { slug: $slug }) {
			blocks {
				__typename
				... on Hero {
					header
					subtitle
					buttonText
					hasForm
					image {
						handle
						height
						width
					}
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
					doubleSectionHeader: header
					body {
						markdown
						html
					}
					reverseSection
					doubleSectionImage: image {
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
`;
