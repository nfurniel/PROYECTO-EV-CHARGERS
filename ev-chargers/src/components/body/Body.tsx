import './body.css'
import CarouselFadeExample from '../../react-components/CarouselFadeExample.tsx'
import img1 from '../../assets/img-carrusel-1.webp'
import img2 from '../../assets/img-carrusel-2.jpg'
export function Body() {

    return (
        <div className="body-container">
            <CarouselFadeExample />
            <div className="body-img">
                <div className="body-img-izq">
                    <img src={img1} alt="" />
                </div>
                <div className="body-img-der">
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    )
}