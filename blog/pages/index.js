import { get } from 'lib/api.js'
import Link from 'next/link'

// Formate date with locale IT
const formatDate = (date) => {
	date = new Date(date)

	return date.toLocaleString('it-IT', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}

// Get a list of headphone emojis based on the album length
const getEmoji = (length) => {
	let emoji = []
	for (let i = 0; i < Math.floor(length / 10); i++) {
		emoji.push('🎧 ')
	}

	return emoji
}

function Albums ({ albums }) {
	return (
    	<ul>
      		{albums.map((album) => (
        		<li key={album.id}>
					<Link href={album.id.toString()}>
						<a>
							{album.attributes.author}
							<span> - </span>
							{album.attributes.name}
							<span>
								postato il {formatDate(album.attributes.publishedAt)}
								|
								ascolto di {album.attributes.length} minuti {getEmoji(album.attributes.length)}
							</span>
						</a>
					</Link>
				</li>
      		))}
    	</ul>
  	)
}

export async function getStaticProps() {
	const res = await get('/albums')
	const json = await res.json()
	const albums = json.data

	return { props: { albums } }
}

export default Albums
