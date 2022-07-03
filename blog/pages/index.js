import { get } from 'lib/api.js'

function Albums ({ albums }) {
	return (
    	<ul>
      		{albums.map((album) => (
        		<li>{album.attributes.name} | {album.id}</li>
      		))}
    	</ul>
  	)
}

export async function getStaticProps() {
	const res = await get('/albums')
	const albums = (await res.json()).data

	return { props: { albums } }
}

export default Albums
