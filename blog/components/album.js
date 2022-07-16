import Image from "next/image";
import style from "styles/album.module.css";
import mdIt from "markdown-it";
const md = mdIt();

export default function Album({ data }) {
	const album = data.attributes;
	const cover = album.cover.data.attributes;

	return (
		<div className={style.hero}>
			<div className={style.title}>
				{album.author} / {album.name}
			</div>
			<div className={style.subtitle}>
				{album.label}, {album.release_year}
			</div>
			<div
				style={{
					backgroundColor: album.background_color,
				}}
				className={style.coverWrapper}
			>
				<div className={style.cover}>
					<Image
						src={cover.url}
						alt={cover.alternativeText}
						layout="fill"
						objectFit="cover"
						width="600"
						height="600"
					/>
					{/* <div>
				<img
					className={style.cover}
					src={cover.url}
					alt={cover.alternativeText}
					// width="600"
					// height="600"
				/>
			</div> */}
				</div>
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
