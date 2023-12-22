import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function GET(request: Request) {
    try {
        let hashedPassword = await bcrypt.hash("banana", 10);
        let result = await sql`
            INSERT INTO usuarios (nome, email, senha)
            VALUES ('Andre Palmeiro', 'andrepalmeiro14@gmail.com', ${hashedPassword})
            ON CONFLICT (id) DO NOTHING;
        `;
        hashedPassword = await bcrypt.hash("jujuba", 10);
        result = await sql`
            INSERT INTO usuarios (nome, email, senha)
            VALUES ('Ana Alice Pereira', 'anaalice17@gmail.com', ${hashedPassword})
            ON CONFLICT (id) DO NOTHING;
        `;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
