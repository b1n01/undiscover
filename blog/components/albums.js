import Link from "next/link";
import style from "styles/albums.module.css";

// Format date based on locale IT
function formatDate(date) {
	date = new Date(date);

	return date.toLocaleString("it-IT", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

// Get a list of headphone emojis based on the album length
function getEmoji(length) {
	let emoji = [];
	for (let i = 0; i < Math.floor(length / 10); i++) {
		emoji.push("🎧 ");
	}

	return emoji;
}

export default function Albums({ albums }) {
	return (
		<ul className={style.list}>
			{albums.map(({ id, attributes: album }) => (
				<li className={style.album} key={id}>
					<Link href={album.slug}>
						<a className={style.link}>
							<div>
								{album.author}
								<span
									className={style.hyphen}
									style={{
										backgroundColor: album.background_color,
									}}
								></span>
								{album.name}
							</div>
							<div className={style.info}>
								postato il {formatDate(album.publishedAt)} |
								ascolto di {album.length} minuti{" "}
								{getEmoji(album.length)}
							</div>
						</a>
					</Link>
				</li>
			))}
		</ul>
	);
}
