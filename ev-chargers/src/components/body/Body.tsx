import './body.css'
import CarouselFadeExample from '../../react-components/CarouselFadeExample.tsx'
import img1 from '../../assets/img-carrusel-1.jpg'
import img2 from '../../assets/img-carrusel-2.jpg'
import flecha from '../../assets/logo-flecha-abajo.png'
import video from '../../assets/video.mp4'

export function Body() {
    return (
        <div className="body-container">
            <CarouselFadeExample />
            <div className="body-img">
                <div className="body-card">
                    <img src={img1} alt="Cargadores" />
                    <h3>Cargadores</h3>
                    <div className="separator"></div>
                    <p>
                        En Ev Chargers contamos con mas de 5000 puntos de carga repartidos por
                        toda españa gracias a nuestro plan de expansión sostenible.
                    </p>
                </div>
                <div className="body-card">
                    <img src={img2} alt="Medioambiente" />
                    <h3>Medioambiente</h3>
                    <div className="separator"></div>
                    <p>
                        Nuestra empresa esta comprometida 100% con el medioambiente, obteniendo
                        hasta un 90% de nuestra energía de fuentes renovables.
                    </p>
                </div>
                <div id='flecha-abajo'>
                    <img src={flecha} alt="flecha" />
                </div>
            </div>

            <div className="body-section-2">
                {/* este es el tittulo  principal */}
                <div className="title">
                    <h1 id='t-1'>Conoce a fondo <span id='t-2'>Ev Chargers</span></h1>
                </div>
                {/* text-card-1 */}
                <div className="cards-2">
                    <div className="text-body-2">
                        <h2>Innovación y Sostenibilidad</h2>
                        <p className="intro-text">
                            Lideramos la revolución de la movilidad eléctrica con tecnología de vanguardia.
                            Nuestro compromiso es ofrecer soluciones de carga rápidas, seguras y respetuosas
                            con el planeta.
                        </p>

                        <div className="features-list">
                            <div className="feature-item">
                                <div className="feature-text">
                                    <h4>100% Energía Verde</h4>
                                    <p>Suministro garantizado de fuentes renovables.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-text">
                                    <h4>Carga Ultra-Rápida</h4>
                                    <p>Recupera el 80% de batería en 20 minutos.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-text">
                                    <h4>App Inteligente</h4>
                                    <p>Gestiona y reserva tu punto de carga al instante.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <video src={video} autoPlay loop muted width={1000}></video>
                </div>

            </div>
        </div>
    )
}