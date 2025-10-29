import { useState } from "react";

function Home() {
  const [form, setForm] = useState({ nombre: "", telefono: "", precio: 0 });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    try {
      const res = await fetch("http://localhost:3000/api/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        nombre: form.nombre,
        telefono: form.telefono,
        precio: 10 // ejemplo: precio fijo
     }),
         });

      const data = await res.json();

      if (res.ok) {
        setMensaje("💖 ¡Tu pedido fue recibido correctamente!");
        setForm({ nombre: "", telefono: "", precio: 0 });
      
    } else {
        setMensaje("❌ " + data.message);
      }
    } catch (error) {
      setMensaje("⚠️ Error al conectar con el servidor.");
    console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* HERO */}
      <section className="text-center py-20 bg-gradient-to-b from-pink-200 to-[#FFF8F1] w-full">
        <h1 className="text-5xl font-bold text-[#E35D8D]">¡Quiero mi caja de Amor!</h1>
        <p className="text-lg mt-4">
          Porque el verdadero cariño se mide en detalles auténticos. Este año, regala algo delicioso. Regala Donatella.
        </p>
        <button className="mt-6 bg-[#E35D8D] text-white px-8 py-3 rounded-full hover:bg-pink-500 transition">
          Ordenar ahora
        </button>
      </section>

      {/* BANNER */}
      <div className="bg-[#C9A46A] text-white py-3 px-6 text-center w-full">
        <p className="text-lg font-semibold">💝 Obtén 10% en la primera compra</p>
      </div>

      {/* PRODUCTOS */}
      <section className="py-16 w-11/12 md:w-3/4 text-center">
        <h2 className="text-3xl font-bold text-[#E35D8D] mb-8">Edición Especial</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <p>Dona glaseada con sabor a fresa y corazones comestibles.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <p>Rellena de un suave ganache de chocolate semiamargo.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <p>Nuestra clásica con doble capa de sprinkles de colores.</p>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="w-11/12 md:w-1/2 bg-white p-8 rounded-2xl shadow mb-12">
        <h3 className="text-2xl font-semibold text-[#E35D8D] mb-6">Haz tu pedido</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo*"
            value={form.nombre}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono*"
            value={form.telefono}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
            <input
            type="number"
            name="precio"
            placeholder="Precio*"
            value={form.precio}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
            />


          <button
            type="submit"
            className="bg-[#E35D8D] text-white py-3 rounded-full hover:bg-pink-500 transition"
          >
            Pedir
          </button>
        </form>
        {mensaje && <p className="mt-4 text-center text-[#E35D8D]">{mensaje}</p>}
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm border-t w-full">
        <p>© Donatella 2025 todos los derechos reservados.</p>
        <div className="flex justify-center gap-4 mt-2 text-[#E35D8D]">
          <a href="#">Política de privacidad</a>|
          <a href="#">Términos y condiciones</a>|
          <a href="#">Política de calidad</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
