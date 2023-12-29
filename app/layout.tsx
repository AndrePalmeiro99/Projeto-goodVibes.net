import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'GOODVIBES.NET',
    description: 'Projeto desenvolvido com react,next.js e tailwind CSS',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="font-inter">
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link
                            href="/"
                            className="flex items-center space-x-3 rtl:space-x-reverse font-comic-sans"
                        >
                            <img
                                src="https://www.imagensempng.com.br/wp-content/uploads/2021/08/01-44.png"
                                className="h-8"
                                alt="Emoji Rindo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-comic-sans">
                                GOODVIBES.NET
                            </span>
                        </Link>
                        <div
                            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 font-comic-sans"
                            id="navbar-sticky"
                        >
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link
                                        href="/"
                                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-comic-sans"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/piadas"
                                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-comic-sans"
                                    >
                                        Piadas
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/frases"
                                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-comic-sans"
                                    >
                                        Frases motivacionais
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/logado"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-comic-sans"
                                    >
                                        Logar
                                        <svg
                                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <main className="pt-16 font-comic-sans">{children}</main>
            </body>
        </html>
    );
} 
