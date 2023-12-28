'use client';

import { useEffect, useState } from 'react';
import { Frase } from '../domain/frases';

export default function TelaFrase() {

    const [frases, setFrases] = useState<Frase[]>([]);
    const [frase, setFrase] = useState<Frase>({ id: "", texto: ""});
    const [mensagem, setMensagem] = useState("");

    const handleSelect = async () => {
        const response = await fetch('/api/frases');
        const data = await response.json();
        setFrases(data.frases);
    }

    useEffect(() => {
        handleSelect();
    }, []);

    const handleChange = (event: React.FormEvent<EventTarget>) => {
        let target = event.target as HTMLInputElement;
        const fieldName = target.name;
        const fieldValue = target.value;
        setFrase((objetoAtual) => {
            return { ...objetoAtual, [fieldName]: fieldValue }
        });
        setMensagem("");
    };

    const handleSave = async (event: React.FormEvent<EventTarget>) => {
        if (frase.id.length > 0) {
            await fetch(`/api/frases/${frase.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(frase),
            })
                .then((response) => response.json())
                .then((data) => setMensagem(data.mensagem));
        } else {
            await fetch('/api/frases', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(frase),
            })
                .then((response) => response.json())
                .then((data) => setMensagem(data.mensagem));
        }
        setFrase({ id: "", texto: ""});
        handleSelect();
    }

    const handleEdit = async (event: React.FormEvent<EventTarget>) => {
        let target = event.target as HTMLButtonElement;
        let id = target.value;
        await fetch(`/api/frases/${id}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => setFrase(data.frase));
    }

    const handleDelete = async (event: React.FormEvent<EventTarget>) => {
        let target = event.target as HTMLButtonElement;
        let id = target.value;
        await fetch(`/api/frases/${id}`, {
            method: 'DELETE',
        }).then(response => response.json()).then(data => setMensagem(data.mensagem));
        setFrase({ id: "", texto: ""});
        handleSelect();
    }

    return (
        <div className='flex-1 rounded-lg bg-gray-50 px-4 pb-4 pt-8'>
            <form className="max-w-sm mx-auto">
                <input name='id' value={frase.id} onChange={handleChange} className="invisible" />
                <div className="mb-5">
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Título da frase</label>
                    <input name="titulo" value={frase.texto} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Título" />
                </div>
                <div className="mb-5 flex justify-center items-center">
                    <button onClick={handleSave} className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>
                </div>
            </form>
            <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-2 py-3" role="alert">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                <p>{mensagem}</p>
            </div>
            <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">título</th>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Frase</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {frases &&
                        frases.map((item) =>
                            <tr key={item.id}>
                                <td className="w-1/3 text-left py-3 px-4">{item.texto}</td>
                                <td><button onClick={handleEdit} value={item.id} className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">E</button></td>
                                <td><button onClick={handleDelete} value={item.id} className="bg-gray-800 hover.bg-gray-400 text-white font-bold py-2 px-4 rounded">X</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
