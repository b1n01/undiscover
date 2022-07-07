import Nav from 'components/nav'
import style from 'styles/layout.module.css'

export default function Layout({ children }) {
	return (
		<div className={style.wrapper}>
			<Nav />
			{children}
		</div>
	)
}
