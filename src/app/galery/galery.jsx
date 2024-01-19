"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import ball from "./../../assets/Images/ball-color-court.jpg"
import next from "./../../assets/Images/arrowslider-active.svg"
import "./galery.css"

const Galery = () => {
    const images = [ball, ball, ball]

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
        setCurrentImage(index);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentImage ? 'active' : ''}`}
                    >
                        <Image src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="navigation">
                <button
                    className='navigation-prev'
                    onClick={prevImage}
                >
                    <Image src={next} alt='navigation-prev' width={60} height={60} />
                </button>
                <div className="dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentImage ? 'active' : ''}`}
                            onClick={() => goToImage(index)}
                        />
                    ))}
                </div>
                <button
                    onClick={nextImage}
                    className='n'
                >
                    <Image src={next} alt='navigation-next' width={60} height={60} />
                </button>
            </div>
            <div className="raket__ball-text">
                <h2>Nuestras Raquetas</h2>
                <p>Conoce nuestras raquetas y</p>
                <p> Aprende a jugar Tennis como un profesional</p>
            </div>
        </div>
    );
};

export default Galery;