import React from 'react';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Redirect to={useBaseUrl('/introduction')}/>
	);
}
