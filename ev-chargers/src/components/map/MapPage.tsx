import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapPage.css';

const center = [40.416775, -3.703790];
/*

    He usado react-leaflet porque el api token de google maps no me dejaba usarlo porque me pedia tarjeta de credito y al ponerla todo
    iba bien pero luego me han bloqueado la cuenta 15 dias por seguridad de no se que. Me he estado informando de react-leaflet para poder hacer  
    el mapa bien. En la documentacion que tienen esta todo muy bien explicado y es sencillo de usar


*/
const estacionesCarga = [

    // Todas las latitudes y longitudes las he cogiod del propio google maps porque con leaflet me estaba dando error de forma automatica
    { id: 1, name: 'Estación Centro Wenea', lat: 40.416775, lng: -3.703790, power: '120 kW' },
    { id: 2, name: 'Estación Norte Endesa', lat: 40.450000, lng: -3.700000, power: '50 kW' },
    { id: 3, name: 'Estación Sur Iberdrola', lat: 40.380000, lng: -3.720000, power: '100 kW' },
    { id: 4, name: 'Estación Este FastCharger', lat: 40.425000, lng: -3.650000, power: '150 kW' },
    { id: 5, name: 'Estación Oeste EV Power', lat: 40.410000, lng: -3.750000, power: '75 kW' },
    { id: 6, name: 'Estación Plaza Mayor', lat: 40.414900, lng: -3.707570, power: '80 kW' },
    { id: 7, name: 'Estación Retiro', lat: 40.415400, lng: -3.682900, power: '100 kW' },
];



export function MapPage() {
    const [estacion, setEstacion] = useState(null);
    const [datos, setDatos] = useState({ date: '', user: '', email: '' });

    const seleccionar = (e) => {
        setEstacion(e);
        setDatos({ date: '', user: '', email: '' });
    };

    const actualizar = (e) => {
        const { name, value } = e.target;
        setDatos(prev => ({ ...prev, [name]: value }));
    };

    const confirmar = () => {
        alert(`Reserva confirmada en ${estacion.name}`);
        setEstacion(null);
    };

    const iniciarRuta = () => {
        alert(`Iniciando ruta hacia ${estacion.name}`);
    };

    const cancelar = () => {
        setEstacion(null);
    };

    return (
        <div className="map-container">
            <div className="sidebar">
                <div className="header">
                    <h2>{estacion ? estacion.name : 'Selecciona una estación'}</h2>
                    <div className="status-dot"></div>
                </div>

                {estacion && (
                    <>
                        <div className="reservation-form">
                            <div className="form-title">Reserva</div>
                            <div className="form-content">
                                <input
                                    type="datetime-local"
                                    name="date"
                                    value={datos.date}
                                    onChange={actualizar}
                                    placeholder="Fecha y hora"
                                />
                                <input
                                    type="text"
                                    name="user"
                                    value={datos.user}
                                    onChange={actualizar}
                                    placeholder="Usuario"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={datos.email}
                                    onChange={actualizar}
                                    placeholder="usuario@gmail.com"
                                />
                                <div className="buttons">
                                    <button onClick={confirmar}>Confirmar</button>
                                    <button onClick={cancelar}>Cancelar</button>
                                </div>
                            </div>
                        </div>

                        <div className="distance-info">
                            <span>A 10 minutos de tu localización</span>
                        </div>

                        <div className="route-buttons">
                            <button className="primary" onClick={iniciarRuta}>
                                Comenzar ruta
                            </button>
                            <button className="secondary" onClick={cancelar}>
                                Cancelar
                            </button>
                        </div>

                        <div className="charging-info">
                            <div className="power-section">
                                <div className="power-label">
                                    <span>⚡</span>
                                    <span>Carga rápida</span>
                                </div>
                                <div className="power-value">({estacion.power})</div>
                            </div>
                            <div className="price">
                                <span className="currency">€</span>
                                <span>2.25€ / 100 Km</span>
                            </div>
                        </div>

                        <div className="charging-image">
                            <img
                                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Electric Car Charging"
                            />
                        </div>
                    </>
                )}
            </div>

            <div className="map">
                <MapContainer center={center} zoom={13} style={{ width: '100%', height: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {estacionesCarga.map((station) => (
                        <Marker 
                            key={station.id} 
                            position={[station.lat, station.lng]}
                            eventHandlers={{ click: () => seleccionar(station) }}
                        >
                            <Popup>
                                <div>
                                    <h3 style={{ fontWeight: 'bold', margin: '0 0 4px 0' }}>{station.name}</h3>
                                    <p style={{ fontSize: '12px', margin: 0 }}>⚡ {station.power}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}
