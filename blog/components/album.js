
import { useState } from "react";
import Image from "next/image";
import style from "styles/album.module.css";
import mdIt from "markdown-it";
const md = mdIt();

function getCoverClass (isOpen) {
	return isOpen ? [style.cover, style.open].join(" ") : style.cover;
}

export default function Album({ data }) {
	const album = data.attributes;
	const cover = album.cover.data.attributes;
	const [isOpen, setOpen] = useState(false);

	return (
		<div className={style.hero}>
			<div className={style.title}>
				{album.author} / {album.name}
			</div>
			<div className={style.subtitle}>
				{album.label}, {album.release_year}
			</div>
			<div 
				className={getCoverClass(isOpen)}
				onClick={() => setOpen(!isOpen)}
			>
				<Image
					src={cover.url}
					alt={cover.alternativeText}
					layout="fill"
					objectFit="cover"
					width="600"
					height="600"
				/>
			</div>
			<div className={style.info}>
				<div
					className={style.player}
					dangerouslySetInnerHTML={{ __html: album.player }}
				/>
				<div
					className={style.description}
					dangerouslySetInnerHTML={{
						__html: md.render(album.description),
					}}
				/>
			</div>
		</div>
	);
}
