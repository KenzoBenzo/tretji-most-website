import React from "react";
import { PAGE } from "../graphql";
import { request } from "graphql-request";
import * as Blocks from "../components/blocks";

const AboutUsPage = ({ page }) => {
	return (
		<>
			{page.blocks.map((block, index) => {
				const Component = Blocks[block.__typename];
				return <Component key={index} {...block} />;
			})}
		</>
	);
};

export async function getStaticProps() {
	const { page } = await request(
		"https://api-eu-central-1.graphcms.com/v2/ckj65vblcx4gy01xp4m948jkr/master",
		PAGE,
		{
			slug: "about-us",
		}
	);
	return {
		props: {
			page,
		},
	};
}
export default AboutUsPage;
