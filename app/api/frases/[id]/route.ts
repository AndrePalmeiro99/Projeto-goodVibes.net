import { excluirFrase, getFrase, editarFrase } from "@/app/lib/infra/frases";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  let frase;
  try {
    frase = await getFrase(params.id);
  } catch (error) {
    return Response.json({ error });
  }
  return Response.json({ frase });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await excluirFrase(params.id);
  } catch (error) {
    return Response.json({ error });
  }
  return Response.json({ mensagem: "Frase Excluída com sucesso" });
}

export async function PUT(request: Request) {
  let frase = await request.json();
  try {
    frase = await editarFrase(frase);
  } catch(error) {
    return Response.json({ error });
  }  
  return Response.json({ mensagem: "Frase Editada com sucesso" });
}
