import { getImageUrl } from "lib/api";
import Image from "next/image";
import style from "styles/album.module.css";

export default function Album({ data }) {
	const album = data.attributes;
	const cover = album.cover.data.attributes;

	return (
		<div className={style.hero}>
			<div
				className={style.heroContent}
				style={{ backgroundColor: album.background_color }}
			>
				<div className={style.bandInfo}></div>
				<div className={style.image}>
					<Image
						loader={getImageUrl}
						src={cover.url}
						alt={cover.alternativeText}
						layout="responsive"
					/>
				</div>
			</div>
		</div>
	);
}
