import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>跳楼机</title>
			</Head>
			<h1>First Post</h1>
			<Link href="/">Back to home</Link>
		</Layout>
	);
}
