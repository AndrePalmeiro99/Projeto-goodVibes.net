import TelaFrase from "@/app/lib/ui/telaFrase";
import Layout from "@/app/components/layout";

export default async function Formulario_de_frases() {

    const estiloDoBackground = {
        backgroundImage: 'url(https://static.vecteezy.com/ti/vetor-gratis/p1/2294580-laugh-emoji-social-media-message-vector-background-copy-space-for-a-text-vetor.jpg)', // Substitua o caminho pela URL da sua imagem
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };

    return (
        <Layout>
            <main className="flex min-h-screen flex-col items-center justify-between p-10" style={estiloDoBackground}>
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
                    <TelaFrase />
                </div>
            </main>
        </Layout>
    )
}
