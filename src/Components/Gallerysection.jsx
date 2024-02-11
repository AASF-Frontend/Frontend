import './Gallerysection.css';

import React, { useState, useEffect, useRef } from 'react';

const images = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"];
const delay = 2500;

function Slideshow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {images.map((imageUrl, idx) => (
                    <img
                        className="slide"
                        key={idx}
                        src={imageUrl}
                        alt={`Slide ${idx + 1}`}
                    ></img>
                ))}
            </div>

            <div className="slideshowDots">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default function Gallerysection() {
    return (

        <div className='bg-slate-600 my-[150px] py-8 pb-20' >

            <div className=' max-w-[1300px] w-auto m-auto mt-[120px] flex items-start justify-between ' >
                <div className="galleryText text-[180px] " >
                    GALLERY
                </div>
                <div >
                    <div >
                        <Slideshow />
                    </div>
                </div>
            </div>
        </div>

    );
}



