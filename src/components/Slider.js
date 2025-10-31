import React, { useState, useEffect } from "react";

const images = [
    'https://s4.afisha.ru/mediastorage/62/d1/da2b0810e19c40e0ab76fa58d162.jpg',
    'https://thumbs.dfs.ivi.ru/storage0/contents/d/3/cb359e5712417994c4a2ac58bacf47.jpg',
    'https://cdn-ksvod.kyivstar.ua/content/HLS/VOD/IMAGE5/6803760d64f4429560f95ce6/IMAGE_2_3_XL.jpg'
];

function Slider() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                // Используем функциональный вызов для обновления state
                setIndex(prev => (prev + 1) % images.length);
                setFade(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const next = () => {
        setFade(false);
        setTimeout(() => {
            setIndex(prev => (prev + 1) % images.length);
            setFade(true);
        }, 500);
    };

    const prev = () => {
        setFade(false);
        setTimeout(() => {
            setIndex(prev => (prev - 1 + images.length) % images.length);
            setFade(true);
        }, 500);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <img
                src={images[index]}
                alt="slide"
                style={{
                    width: '300px',
                    borderRadius: '8px',
                    transition: 'opacity 0.5s ease-in-out',
                    opacity: fade ? 1 : 0,
                    position: 'relative',
                    maxWidth: '800px',
                    height: '500px'
                }}
            />
            <div>
                <button onClick={prev}>Предыдущий</button>
                <button onClick={next}>Следующий</button>
            </div>
        </div>
    );
}

export default Slider;
