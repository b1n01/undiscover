import Link from "next/link";
import style from "styles/nav.module.css";

export default function Nav() {
	return (
		<div className={style.nav}>
			<h1 className={style.title}>
				<Link href="/">Undiscover</Link>
			</h1>
			<ul className={style.options}>
				<li>
					<a className={style.link} href="https://mirra.b1n01.com">
						Mirra
					</a>
				</li>
				<li>
					<Link href="info">
						<a className={style.link}>Info</a>
					</Link>
				</li>
			</ul>
		</div>
	);
}
