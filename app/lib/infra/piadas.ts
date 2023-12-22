import { sql } from "@vercel/postgres";
import { Piada } from "../domain/piadas";

export async function getPiadas() {
    try {
        const consulta = await sql<Piada[]>`SELECT * FROM piadas ORDER BY nome`;
        return consulta.rows;
    } catch (erro) {
        console.error('Erro na consulta de piadas:', erro);
        throw new Error('Erro na consulta de piadas.');
    }
}

export async function getPiada(id: string) {
    try {
        const consulta = await sql<Piada[]>`SELECT * FROM piadas WHERE id=${id}`;
        return consulta.rows[0];
    } catch (erro) {
        console.error('Erro na consulta de piadas:', erro);
        throw new Error('Erro na consulta de piadas.');
    }
}

export async function inserirPiada(piada: Piada) {
    try {
        const consulta = await sql<Piada>`
            INSERT INTO piada 
            ("titulo", "descricao")
            VALUES (${piada.titulo}, ${piada.descricao})
            RETURNING id, titulo, descricao
        `;
        return consulta.rows[0];
    } catch (erro) {
        console.error('Erro na inclusão da piada:', erro);
        throw new Error('Erro na inclusão da piada.');
    }
}

export async function excluirPiada(id: string) {
    try {
        const consulta = await sql<Piada>`
            DELETE FROM piadas 
            WHERE id=${id}
        `;
    } catch (erro) {
        console.error('Erro na exclusão da piada:', erro);
        throw new Error('Erro na exclusão da piada.');
    }
}

export async function editarPiada(piada: Piada) {
    try {
        await sql`UPDATE piadas
        SET titulo=${piada.titulo},  
        descricao=${piada.titulo},
        WHERE id=${piada.id}
        `;
    } catch (erro) {
        console.error('Erro na edição da piada:', erro);
        throw new Error('Erro na edição da piada.');
    }
}
