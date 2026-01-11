import './body.css'
export function Body(){

    return(
        <div className="body-container">
            <div className="slider-box">
                <ul>
                    <li>
                        <img src="img-carrusel-1.webp" alt="img1" />
                        <div className='texto'>
                            <h2>Imagen 1</h2>
                            <p>
                                Esto es el texto de la imagen 3
                            </p>
                        </div>
                    </li>
                    <li>
                        <img src="img-carrusel-2.jpg" alt="img2" />
                        <div className='texto'>
                            <h2>Imagen 2</h2>
                            <p>
                                Esto es el texto de la imagen 2
                            </p>
                        </div>
                    </li>
                    <li>
                        <img src="img-carrusel-3.jpg" alt="img3" />
                        <div className='texto'>
                            <h2>Imagen 3</h2>
                            <p>
                                Esto es el texto de la imagen 3
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}