import Layout from '../components/layout';

export default async function Home() {
  return (
    <Layout>
      <main className='flex min-h-screen flex-col items-center justify-between p-10 bg-yellow-200'>
        <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm'>
          <section>
            <h1 className='mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>Seja bem-vindo!</h1>
            <p className='font-normal text-center text-gray-700 dark:text-gray-400'>Ficamos felizes em ter você aqui conosco!</p>
            <div className='block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Aproveite ao máximo nosso site!</h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>Agora que você logou, pode aproveitar nosso site rindo de montão ou se inspirando e tendo uma reflexão profunda, você escolhe!</p>
            </div>
            <div>
              <div className='p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Hora de rir!</h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Clique nesse botão ou na aba acima e você será mandado para a página onde contém as melhores piadas, porque rir é o melhor remédio!</p>
                <a href='/logado/piadas' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                  Vamos rir!
                  <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                    <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                  </svg>
                </a>
              </div>
              <div className='p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Quer refletir?</h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Não tem problema! Clicando nesse botão abaixo ou na aba frases motivacionais você será enviado para a página com nossas frases motivacionais que deixará você com extrema inspiração!</p>
                <a href='#' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                  Hora de motivar!
                  <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                    <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
