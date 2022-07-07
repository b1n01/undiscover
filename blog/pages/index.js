import { get } from 'lib/api'
import Albums from 'components/albums'

export default function Index ({ albums }) {
	return <Albums albums={albums} />
}

export async function getStaticProps() {
	const res = await get('/albums?sort=createdAt:desc')
	const json = await res.json()
	const albums = json.data

	return { props: { albums } }
}
