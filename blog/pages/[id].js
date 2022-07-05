import { get } from 'lib/api.js'

function Album ({ album }) {
	return <p>Here an album {album.attributes.name}</p>
}

export async function getStaticPaths() {
	const res = await get('/albums')
	const albums = (await res.json()).data
	
	const paths = albums.map((album) => ({
		params: { id: album.id.toString() },
  	}))
	
  	// { fallback: false } means other routes should 404
  	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  	const res = await get(`/albums/${params.id}`)
  	const album = (await res.json()).data

  	return { props: { album } }
}

export default Album
