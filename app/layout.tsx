import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
	title: "Text Utils",
	description: "WebApp offering a variety of features aimed at manipulating and analyzing text",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased dark max-w-7xl mb-40 flex flex-col md:flex-row mx-4 mt-8 max-sm:mt-0 lg:mx-auto lg:px-3 ${GeistSans.className}`}>
				<main className="flex-auto min-w-0 mt-6 flex flex-col">
					{children}
				</main>
			</body>
		</html>
	);
}
