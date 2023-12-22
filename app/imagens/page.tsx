"use client"

import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

export default function Pagina5() {

    useEffect(() => {
        const collectionID = 928423;
        const galleryContainer = document.querySelector('.gallery-container');
        galleryContainer.innerHTML = "";
        for (let i = 0; i < 18; i++) {
            fetch(`https://source.unsplash.com/collection/${collectionID}/480x480`)
                .then((response) => {
                    let galleryItem = document.createElement('span');
                    galleryItem.classList.add('gallery-item');
                    galleryItem.innerHTML = `<Image src="${response.url}" alt="gallery image"/>`
                    galleryContainer.append(galleryItem);
                })
        }
    }, []);

    return (
        <main>
            <Head>
                <title>Coleção de imagens</title>
            </Head>
            <h1 className="imagem">Se inspire apreciando nossas belas imagens ao redor do mundo!</h1>
            <div className='gallery-container'>
            </div>
        </main>
    );
}
