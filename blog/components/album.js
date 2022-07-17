import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import style from "styles/album.module.css";
import mdIt from "markdown-it";
const md = mdIt();

function getCoverHeight(coverRef, defaultHeight) {
	const [height, setHeight] = useState(defaultHeight);

	useEffect(() => {
		const handleResize = () => {
			const newHeight = coverRef.current.clientWidth;
			setHeight(newHeight)
		}

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	});

	return height;
}

export default function Album({ data }) {
	const album = data.attributes;
	const cover = album.cover.data.attributes;
	const [isOpen, setOpen] = useState(false);

	const coverRef = useRef();
	const defaultHeight = 300;
	const height = getCoverHeight(coverRef, defaultHeight);

	return (
		<div className={style.hero}>
			<div className={style.title}>
				{album.author} / {album.name}
			</div>
			<div className={style.subtitle}>
				{album.label}, {album.release_year}
			</div>
			<div 
				className={style.cover}
				ref={coverRef}
				style={{
					height: isOpen ? height : defaultHeight,
					filter: isOpen ? "grayscale(0)" : "grayscale(1)",
				}}
				onClick={() => setOpen(!isOpen)}
			>
				<Image
					src={cover.url}
					alt={cover.alternativeText}
					layout="fill"
					objectFit="cover"
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
