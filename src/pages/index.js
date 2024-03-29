import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title='Home' />
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
		<Link to='/page-2/'>Go to page 2</Link>
		<Link to='/page-3/' style={{ marginLeft: '2rem' }}>
			Go to page 3
		</Link>
	</Layout>
);

export default IndexPage;
