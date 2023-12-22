import { excluirPiada, getPiada, editarPiada } from "@/app/lib/infra/piadas";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  let piada;
  try {
    piada = await getPiada(params.id);
  } catch (error) {
    return Response.json({ error });
  }
  return Response.json({ piada });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await excluirPiada(params.id);
  } catch (error) {
    return Response.json({ error });
  }
  return Response.json({ mensagem: "Piada Excluída com sucesso" });
}

export async function PUT(request: Request) {
  let piada = await request.json();
  try {
    piada = await editarPiada(piada);
  } catch(error) {
    return Response.json({ error });
  }  
  return Response.json({ mensagem: "Piada Editada com sucesso" });
}