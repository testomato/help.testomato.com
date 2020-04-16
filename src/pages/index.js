import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
	{
		title: <>Testomato</>,
		description: (
			<>
				Get basic information about Testomato application and functions.
			</>
		),
		link: "/docs/index"
	},
	{
		title: <>REST API</>,
		description: (
			<>
				Our REST API provides simple interfaces for accessing basic Testomato functionality.
			</>
		),
		link: "/docs/api/introduction"
	},

	{
		title: <>Contact Support</>,
		description: (
			<>
				Need more information? Please do not hesitate to contact us
				at <a href="mailto:support@testomato.com">support@testomato.com</a>
			</>
		),
	}
];

function Feature({title, description, link}) {
	return (
		<div className={classnames('col col--4', styles.feature)}>
			<h3>{title}</h3>
			<p>{description}</p>

			{link && (<div className={styles.buttons}>
				<Link
					className={classnames(
						'button button--outline button--secondary button--lg',
						styles.getStarted,
					)}
					to={useBaseUrl(link)}>{title}</Link>
			</div>)}
		</div>
	);
}

function Home() {
	const context = useDocusaurusContext();
	const {siteConfig = {}} = context;
	return (
		<Layout
			title={`Welcome to ${siteConfig.title} Help & Docs`}
			description="Description will go into a meta tag in <head />">
			<header className={classnames('hero hero--primary', styles.heroBanner)}>
				<div className="container">
          <img src="img/logo.svg" alt=""/>
					<h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
				</div>
			</header>
			<main>
				{features && features.length && (
					<section className={styles.features}>
						<div className="container">
							<div className="row">
								{features.map(({title, description, link}) => (
									<Feature
										key={title}
										title={title}
										link={link}
										description={description}
									/>
								))}
							</div>
						</div>
					</section>
				)}
			</main>
		</Layout>
	);
}

export default Home;