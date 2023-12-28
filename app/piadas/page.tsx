import Link from 'next/link';

export default async function Piadas() {

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm'>
                <h1 className='mb-4 font-extrabold leading-none tracking-tight lg:text-2xl mx-auto text-center'>AS MELHORES PIADAS VOCÊ ENCONTRA AQUI</h1>
                <div className='container py-5 px-5 mx-0 min-w-full flex flex-col items-center'>
                    <table className='min-w-full bg-white'>
                        <thead className='bg-gray-800 text-white'>
                            <tr>
                                <th className='w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm'>título</th>
                                <th className='w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm'>Piada</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-700'>
                            <tr>
                                <td className='w-1/3 text-left py-3 px-4'>Como as ondas do mar cumprimentam umas às outras?</td>
                                <td className='w-1/3 text-left py-3 px-4'>Com um 'oi, tudo bem?'.</td>
                            </tr>
                            <tr>
                                <td className='w-1/3 text-left py-3 px-4'>O que um zero disse para o oito?</td>
                                <td className='w-1/3 text-left py-3 px-4'>'Gosto do seu cinto novo!'</td>
                            </tr>
                            <tr>
                                <td className='w-1/3 text-left py-3 px-4'>Por que o esqueleto não brigou com ninguém?</td>
                                <td className='w-1/3 text-left py-3 px-4'>Porque ele não tem estômago para isso!</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className='mb-4 font-extrabold leading-none tracking-tight lg:text-2xl mx-auto text-center'>QUER MANDAR SUAS PIADAS? É SÓ LOGAR CLICANDO NO BOTÃO ABAIXO</h1>
            </div>
            <Link href='/logado' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Logar
                <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                    <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                </svg>
            </Link>
        </main>
    );
}
