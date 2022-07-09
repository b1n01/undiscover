import Image from 'next/image'
import style from 'styles/album.module.css'

export default function Album({ data }) {
	const album = data.attributes
	const cover = album.cover.data.attributes
	const coverUrl = process.env.NEXT_PUBLIC_API_ENDPOINT + cover.url
	console.log(coverUrl)

	return (
		<div className={style.hero}>
			<div className={style.info}>
			</div>
			<Image src={coverUrl} alt={cover.alternativeText} layout='fill' />
			<p>Album: {album.name}</p>
		</div>
	)
}
