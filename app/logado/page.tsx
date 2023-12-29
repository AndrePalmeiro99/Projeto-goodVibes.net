import Link from 'next/link';
import Layout from '../components/layout';

export default async function Home() {

  const estiloDoBackground = {
    backgroundImage: 'url(https://static.vecteezy.com/ti/vetor-gratis/p1/2294580-laugh-emoji-social-media-message-vector-background-copy-space-for-a-text-vetor.jpg)', // Substitua o caminho pela URL da sua imagem
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-10" style={estiloDoBackground}>
        <div>
          <section className='bg-transparent dark:bg-transparent'>
            <div>
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Bem vindo ao nosso site!</h1>
                <p className="text-lg font-comic-sans text-gray-500 dark:text-gray-400 mb-6">Estamos muito felizes com a sua presença,esperamos que você aproveite cada cantinho desse site!.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                  <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Vamos rir um pouco!</h2>
                  <p className="text-lg font-comic-sans text-gray-500 dark:text-gray-400 mb-4">Que tal rir um pouco? Afinal rir é o melhor remédio,aproveite nossa aba para enviar suas piadas e dar altas gargalhadas com as melhores piadas que nosso site pode oferecer!.</p>
                  <Link href="/logado/piadas" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Vamos rir!
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                  <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Precisa de inspiração?</h2>
                  <p className="text-lg font-comic-sans text-gray-500 dark:text-gray-400 mb-4">Não se preocupe! Nosso site lhe oferece as frases mais inspiradoras que irão te fazer refletir e dar o gás que você precisa para continuar!</p>
                  <Link href="/logado/frases" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Hora de motivar!
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
