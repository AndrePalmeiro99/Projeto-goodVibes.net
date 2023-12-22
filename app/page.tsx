import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full justify-between font-mono text-sm">
        <section>
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sobre Nós</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Bem-vindo ao nosso site dedicado a trazer um sorriso ao seu rosto e inspirar seu dia! Aqui, você encontrará uma mistura de piadas engraçadas para alegrar o seu humor e imagens lindas para alimentar a sua alma.</p>
          </div>
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">O que Oferecemos</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Navegue pelas diversas seções do nosso site para descobrir uma coleção única de piadas hilárias que certamente farão você rir ou mergulhe nas profundezas da inspiração com nossas lindas imagens.</p>
          </div>


          <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Junte-se à Diversão!</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Estamos aqui para proporcionar momentos leves e positivos. Sinta-se à vontade para explorar, compartilhar com amigos e familiares, e não se esqueça de dar uma olhada nas atualizações regulares com novas piadas e imagens que certamente iluminarão o seu dia.</p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">O que está esperando?</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Junte-se agora mesmo à nossa turma para se divertir,basta logar...</p>
            <Link href="/logado" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Clicando aqui
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
