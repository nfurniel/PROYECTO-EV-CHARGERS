import { useState } from 'react';
import './ChargersList.css';

// Son datos simulados
const alertas = [
  { id: 1, tipo: 'fallo', titulo: 'Fallo en Estación Centro', desc: 'Cargador 2 no disponible', hora: '10:30' },
  { id: 2, tipo: 'fallo', titulo: 'Fallo en Estación Plaza Mayor', desc: 'Error de conexión', hora: '11:15' },
  { id: 3, tipo: 'libre', titulo: 'Punto libre en Estación Norte', desc: '3 cargadores disponibles', hora: '11:45' },
  { id: 4, tipo: 'libre', titulo: 'Punto libre en Estación Este', desc: '2 cargadores disponibles', hora: '12:00' },
  { id: 5, tipo: 'recordatorio', titulo: 'Recordatorio de reserva', desc: 'Tu reserva en Centro vence en 2h', hora: '13:30' },
  { id: 6, tipo: 'recordatorio', titulo: 'Recordatorio de reserva', desc: 'Tu reserva en Plaza Mayor vence en 1h', hora: '14:00' },
];

export function ChargersList() {
  const [filtro, setFiltro] = useState('todos');

  const filtradas = filtro === 'todos' ? alertas : alertas.filter(a => a.tipo === filtro);

  return (
    <div className="chargers-container">
      <h1>Alertas y Notificaciones</h1>

      <div className="filters">
        <button
          className={filtro === 'todos' ? 'active' : ''}
          onClick={() => setFiltro('todos')}
        >
          Todas
        </button>
        <button
          className={filtro === 'fallo' ? 'active' : ''}
          onClick={() => setFiltro('fallo')}
        >
          Fallos
        </button>
        <button
          className={filtro === 'libre' ? 'active' : ''}
          onClick={() => setFiltro('libre')}
        >
          Puntos Libres
        </button>
        <button
          className={filtro === 'recordatorio' ? 'active' : ''}
          onClick={() => setFiltro('recordatorio')}
        >
          Recordatorios
        </button>
      </div>

      <div className="alerts-list">
        {filtradas.length > 0 ? (
          filtradas.map(alerta => (
            <div key={alerta.id} className={`alert-card ${alerta.tipo}`}>
              <div className="info">
                <h3>{alerta.titulo}</h3>
                <p>{alerta.desc}</p>
              </div>
              <div className="hora">{alerta.hora}</div>
            </div>
          ))
        ) : (
          <div className="empty">No hay notificaciones</div>
        )}
      </div>
    </div>
  );
}
