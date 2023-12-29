import Link from 'next/link'

export default function Home() {

  const estiloDoBackground = {
    backgroundImage: 'url(https://static.vecteezy.com/ti/vetor-gratis/p1/2294580-laugh-emoji-social-media-message-vector-background-copy-space-for-a-text-vetor.jpg)', // Substitua o caminho pela URL da sua imagem
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={estiloDoBackground}>
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-30">
          <h1 className="mb-4 text-4xl text-black font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">GOODVIBES.NET</h1>
          <p className="mb-8 text-lg font-extrabold text-black lg:text-xl sm:px-16 lg:px-48">O SITE QUE OFERECE DIVERSÃO E REFLEXÃO PARA VOCÊ!</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/logado" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Logar
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
    </main>
  )
}
