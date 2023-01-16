import { useState } from 'react'
import { images } from '../../images/data-img'
import './Carousel.css'

export default function Carousel() {

    const [current, setCurrent] = useState(0);

    function nextSlide() {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    function prevSlide() {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }
    return (
        <div>
            <h2>Project 1: Carousel</h2>
            <div className="slider">
                <div className="left-arrow" onClick={prevSlide}>
                    ⬅
                </div>
                <div className="right-arrow" onClick={nextSlide}>
                    ⮕
                </div>
                {images.map(
                    (image, index) =>
                        current === index && (
                            <div key={image} className="slide">
                                <img src={image} alt="images" />
                            </div>
                        )
                )}
            </div>
        </div>
    )
}