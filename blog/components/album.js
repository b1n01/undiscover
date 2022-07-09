import Image from "next/image";
import style from "styles/album.module.css";
var md = require("markdown-it")();

export default function Album({ data }) {
	const album = data.attributes;
	const cover = album.cover.data.attributes;

	return (
		<div className={style.hero}>
			<div className={style.info}>
				<div className={style.album}>
					<span>{album.author}</span> <span>/ {album.name}</span>
				</div>
				<div className={style.label}>
					{album.label}, {album.release_year}
				</div>
			</div>
			<div className={style.image}>
				<Image
					src={cover.url}
					alt={cover.alternativeText}
					layout="responsive"
					width="600"
					height="600"
				/>
			</div>
			<div
				className={style.player}
				dangerouslySetInnerHTML={{ __html: album.player }}
			></div>
			<div
				className={style.description}
				dangerouslySetInnerHTML={{
					__html: md.render(album.description),
				}}
			></div>
		</div>
	);
}
