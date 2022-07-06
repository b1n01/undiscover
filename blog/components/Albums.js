import Link from 'next/link'

// Format date based on locale IT
function formatDate(date) {
	date = new Date(date)

	return date.toLocaleString('it-IT', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}

// Get a list of headphone emojis based on the album length
function getEmoji(length) {
	let emoji = []
	for (let i = 0; i < Math.floor(length / 10); i++) {
		emoji.push('🎧 ')
	}

	return emoji
}

export default function Albums({ albums }) {
	return (
    	<ul>
      		{albums.map((album) => (
        		<li key={album.id}>
					<Link href={album.id.toString()}>
						<a>
							<div>{album.attributes.author}<span> - </span>{album.attributes.name}</div>
							<div>
								postato il {formatDate(album.attributes.publishedAt)} |
								ascolto di {album.attributes.length} minuti {getEmoji(album.attributes.length)}
							</div>
						</a>
					</Link>
				</li>
      		))}
    	</ul>
  	)
}
