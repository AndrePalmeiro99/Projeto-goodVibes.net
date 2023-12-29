import { sql } from "@vercel/postgres";
import { Frase } from "../domain/frases";

export async function getFrases() {
    try {
        const consulta = await sql<Frase[]>`SELECT * FROM frases ORDER BY texto`;
        return consulta.rows;
    } catch (erro) {
        console.error('Erro na consulta de frases:', erro);
        throw new Error('Erro na consulta de frases.');
    }
}

export async function getFrase(id: string) {
    try {
        const consulta = await sql<Frase[]>`SELECT * FROM frases WHERE id=${id}`;
        return consulta.rows[0];
    } catch (erro) {
        console.error('Erro na consulta de frases:', erro);
        throw new Error('Erro na consulta de frases.');
    }
}

export async function inserirFrase(frase: Frase) {
    try {
        const consulta = await sql<Frase>`
            INSERT INTO frases 
            ("texto")
            VALUES (${frase.texto})
            RETURNING id, texto
        `;
        return consulta.rows[0];
    } catch (erro) {
        console.error('Erro na inclusão da frase:', erro);
        throw new Error('Erro na inclusão da frase.');
    }
}

export async function excluirFrase(id: string) {
    try {
        const consulta = await sql<Frase>`
            DELETE FROM frases 
            WHERE id=${id}
        `;
    } catch (erro) {
        console.error('Erro na exclusão da frase:', erro);
        throw new Error('Erro na exclusão da frase.');
    }
}

export async function editarFrase(frase: Frase) {
    try {
        await sql`UPDATE frases
        SET texto=${frase.texto}  
        WHERE id=${frase.id}
        `;
    } catch (erro) {
        console.error('Erro na edição da frase:', erro);
        throw new Error('Erro na edição da frase.');
    }
}
