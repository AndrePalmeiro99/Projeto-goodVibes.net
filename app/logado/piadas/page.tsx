import TelaPiada from "@/app/lib/ui/telaPiada";
import Layout from "@/app/components/layout";

export default async function Piada() {

    return (
        <Layout>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                    <h1 className="mb-4 font-extrabold leading-none tracking-tight lg:text-2xl">
                        Sistema de envio de piadas!
                    </h1>
                    <TelaPiada />
                </div>
            </main>
        </Layout>
    )
}