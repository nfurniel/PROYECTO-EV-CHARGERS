import Carousel from 'react-bootstrap/Carousel';
import './CarouselCustom.css';
import img1 from '../assets/img-carrusel-1.jpg';
import img2 from '../assets/img-carrusel-2.jpg';
import img3 from '../assets/img-carrusel-3.jpg';

function CarouselFadeExample() {
  return (
    <Carousel fade controls={false} indicators={false} interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img1}
          alt="Primera slide"
        />
        <Carousel.Caption>
          <h1 className="hero-title">Carga. Conecta. Reserva</h1>
          <p className="hero-subtitle">Acelerando la transición hacia un planeta más limpio</p>
          <a href="#" className="hero-btn">Mas información</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img2}
          alt="Segunda slide"
        />
        <Carousel.Caption>
          <h1 className="hero-title">Carga. Conecta. Reserva</h1>
          <p className="hero-subtitle">Acelerando la transición hacia un planeta más limpio</p>
          <a href="#" className="hero-btn">Mas información</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img3}
          alt="Tercera slide"
        />
        <Carousel.Caption>
          <h1 className="hero-title">Carga. Conecta. Reserva</h1>
          <p className="hero-subtitle">Acelerando la transición hacia un planeta más limpio</p>
          <a href="#" className="hero-btn">Mas información</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
