import TelaFrase from "@/app/lib/ui/telaFrase";
import Layout from "@/app/components/layout";

export default async function Formulario_de_frases() {

    return (
        <Layout>
            <main className="flex min-h-screen flex-col items-center justify-between p-10">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                    <h1 className="mb-4 font-extrabold leading-none tracking-tight lg:text-2xl mx-auto text-center">
                        Sistema de envio de frases!
                    </h1>
                    <TelaFrase />
                </div>
            </main>
        </Layout>
    )
}
