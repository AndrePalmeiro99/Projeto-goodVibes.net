import { getFrases, inserirFrase } from '../../lib/infra/frases';

export async function GET() {
  let frases;
  try {
    frases = await getFrases();
  } catch (error) {
    return Response.json({ error });
  }
  return Response.json({ frases });
}

export async function POST(request: Request) {
  let frase = await request.json();
  try {
    frase = await inserirFrase(frase);
  } catch (error) {
    return Response.json({ error });
  }  
  return Response.json({ mensagem: "Frase Incluída com sucesso" });
}
