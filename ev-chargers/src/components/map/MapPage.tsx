import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 40.416775,
    lng: -3.703790
};

export function MapPage() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "" // Aqui tengo que poner el api key de google maps
    });

    return (
        <div className="flex w-full h-[calc(100vh-90px)]">
            {/* Sidebar */}
            <div className="w-[400px] min-w-[350px] bg-white h-full shadow-xl z-20 flex flex-col p-6 overflow-y-auto">

                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Punto de Carga Wenea</h2>  {/* Intentar modificar pra que el nombre se actualize segun el buscador, 
                    pero parece ser complicado, dejarlo para mas tarde */}
                    <div className="w-4 h-4 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                </div>

                <div className="border border-green-400 rounded-2xl p-5 mb-6 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-3 text-lg font-medium text-gray-700">
                        Reserva
                    </div>
                    {/*  Esta es la parte del formulario de la reserva , No es funcional, solo le pongo datos fictios de momento*/}
                    <div className="space-y-4 mt-2">
                        <div className="flex items-center border rounded-full px-4 py-2 border-gray-400">
                            <span className="mr-3 text-gray-600">📅</span>
                            <div className="w-full text-gray-700 font-medium text-sm">12/11/25 &nbsp; 12:30</div>
                        </div>

                        <div className="flex items-center border rounded-full px-4 py-2 border-gray-400">
                            <span className="mr-3 text-gray-600">👤</span>
                            <div className="w-full text-gray-700 font-medium">Usuario</div>
                        </div>

                        <div className="flex items-center border rounded-full px-4 py-2 border-gray-400">
                            <span className="mr-3 text-gray-600">✉️</span>
                            <div className="w-full text-gray-700 font-medium">usuario@gmail.com</div>
                        </div>

                        <div className="flex gap-3 justify-center pt-2">
                            <button className="px-4 py-1 border border-gray-500 rounded-lg text-gray-600 font-medium hover:bg-gray-100 text-sm">Confirmar</button>
                            <button className="px-4 py-1 border border-gray-500 rounded-lg text-gray-600 font-medium hover:bg-gray-100 text-sm">Cancelar</button>
                        </div>
                    </div>
                </div>

                {/*  Esto tambien son datos ficticios. Tratare de ver si puedo hacer que aparezcan datos reales */}
                <div className="flex items-center mb-4 text-gray-700">
                    <span className="text-xl mr-3">🚗</span>
                    <span className="font-medium">A 10 minutos de tu localización</span>
                </div>

                <div className="flex gap-4 mb-6">
                    <button className="flex-1 py-2 px-4 border border-green-500 text-green-700 font-medium rounded-lg hover:bg-green-50">
                        Comenzar ruta
                    </button>
                    <button className="flex-1 py-2 px-4 border border-gray-400 text-gray-600 font-medium rounded-lg hover:bg-gray-50">
                        Cancelar
                    </button>
                </div>

                <div className="border border-gray-300 rounded-xl p-4 mb-6 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center text-gray-800 font-bold">
                            <span className="material-icons mr-2">⚡</span>
                            Carga rápida
                        </div>
                        <div className="text-gray-600 font-medium">(120 kW)</div>
                    </div>
                    <div className="flex items-center text-gray-800 font-bold">
                        <span className="mr-3 text-xl">€</span>
                        {/* Intentar poner datos reales aqui tambien */}
                        2.25€ / 100 Km
                    </div>
                </div>

                <div className="mt-auto rounded-xl overflow-hidden shadow-md h-48 bg-gray-200">
                    <img
                        src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Electric Car Charging"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>

            {/* Esta es la parte del mapa */}
            <div className="flex-1 h-full bg-gray-100">
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={13}
                    // options={{
                    //     disableDefaultUI: false,
                    //     zoomControl: false,
                    // }}
                    >
                        {/* Intentar tambien poner que el marcador se ponga con el click donde quiera el usuario */}
                        <Marker position={center} />
                    </GoogleMap>
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        Cargando Mapa...
                    </div>
                )}
            </div>
        </div>
    );
}
