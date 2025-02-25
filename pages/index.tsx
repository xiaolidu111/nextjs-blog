import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout.tsx';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{'今天天气好'}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you’ll be building a site like
					this on{' '}
					<a href="https://www.nextjs.cn/learn">
						our Next.js tutorial
					</a>
					.)
				</p>
				<Link href="/posts/first-post">第一个</Link>
			</section>
			<section
				className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
			>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`} legacyBehavior>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

// export async function getStaticProps(context): GetStaticProps {
// 	const allPostsData = getSortedPostsData();
// 	return {
// 		props: {
// 			allPostsData,
// 		},
// 	};
// }
export const getStaticProps: GetStaticProps = async (context) => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};
