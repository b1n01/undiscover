import style from 'styles/nav.module.css'

export default function Nav () {
	return (
		<div className={style.nav}>
			<h1 className={style.title}>Undiscover</h1>
			<ul className={style.options}>
				<li>Mirra</li>
				<li>Info</li>
			</ul>
		</div>
	)
}
