import Layout from 'components/layout'
import 'styles/global.css'

// Override default App, @see https://nextjs.org/docs/advanced-features/custom-app

export default function App({ Component, pageProps }) {
	return (
		<Layout>
  			<Component {...pageProps} />
		</Layout>
	)
}
