import { getPiadas, inserirPiada } from '../../lib/infra/piadas';

export async function GET() {
  let piadas;
  try {
    piadas = await getPiadas();
  } catch (error) {
    return Response.json({ error });
  }
  return Response.json({ piadas });
}

export async function POST(request: Request) {
  let piada = await request.json();
  try {
    piada = await inserirPiada(piada);
  }catch(error) {
    return Response.json({ error });
  }  
  return Response.json({ mensagem: "Piada Incluída com sucesso" });
}
