interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export function Login({ isOpen, onClose, onLogin }: LoginProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto overflow-x-hidden bg-black/50 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* Contenido del Modal */}
        <div className="relative bg-white border border-gray-200 rounded-lg shadow-xl p-4 md:p-6">

          {/* Header del Modal */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4 md:pb-5">
            <h3 className="text-xl font-semibold text-gray-900">
              Inciar Sesion
            </h3>
            <button
              onClick={onClose} // Usamos la función que viene del Header
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
            >
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* Cuerpo del Modal (Formulario) */}
          <form className="pt-4 md:pt-6" onSubmit={(e) => {
            e.preventDefault();
            onLogin();
            onClose();
          }}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Tu email</label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="nombre@company.com"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Tu contraseña</label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Inciar Sesion
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}