import { Html, Head, Main, NextScript } from "next/document";

// Override default Document, @see https://nextjs.org/docs/advanced-features/custom-document

export default function Document() {
	return (
		<Html>
			<Head>
				{/* Custom font */}
				<link
					href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
