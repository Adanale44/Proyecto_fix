import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="text-center py-28">
        <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">
          Gratuito para la comunidad de ETEC UBA
        </span>

        <h1 className="text-5xl font-bold mt-6">
          Organiza Torneos Escolares de Forma{" "}
          <span className="text-blue-600">Simple y Moderna</span>
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 mt-6 text-lg">
          Bienvenidos a Fixturem, una aplicación diseñada para gestionar torneos 
          escolares de forma rápida, sencilla y eficiente.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/register"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Comenzar Ahora
          </a>
          <a
            href="#features"
            className="px-6 py-3 bg-white border rounded-lg hover:bg-gray-100"
          >
            Saber Más
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <h2 className="text-center text-3xl font-bold mb-12">
          ¿Qué hace especial a Fixturem?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          {[
            ["🏆", "Creación Rápida de Torneos"],
            ["📅", "Fixtures Automáticos"],
            ["👥", "Gestión de Inscripciones"],
            ["🔔", "Notificaciones en Tiempo Real"],
            ["⚡", "Interfaz Intuitiva"],
            ["💙", "100% Gratuito"],
          ].map(([icon, title]) => (
            <div
              key={title}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6 text-center">Sobre Fixturem</h2>
          <p className="text-gray-700 leading-relaxed">
            Fixturem es un sistema web creado para facilitar la organización
            de torneos en la comunidad ETEC UBA. Permite gestionar equipos,
            generar fixtures automáticos, recibir notificaciones y administrar
            torneos sin complicaciones.
          </p>
        </div>
      </section>
    </div>
  );
}
