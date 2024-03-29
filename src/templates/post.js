import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default function Template({ data }) {
	const { markdownRemark: post } = data;
	// same as
	// const post = data.markdownRemark;
	return (
		<div>
			<h1>{post.frontmatter.title}</h1>
		</div>
	);
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
			}
		}
	}
`;
