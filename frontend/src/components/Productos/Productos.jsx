import { useState } from 'react';
import { Header } from './Header.jsx';
import { ProductList } from './ProductList.jsx';
import style from './Productos.module.css';
import Footer from '../Footer/Footer.jsx';

function Productos() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
  });

  return (
    <>
      <div className={style.container}>
        <Header
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          setShowForm={setShowForm}
        />

        <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />

        {showForm && (
          <div className={style.formContainer}>
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                try {
                  const response = await fetch("https://donatella-plus-backend.vercel.app/api/pedidos", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      nombre: form.nombre,
                      telefono: form.telefono,
                      cart: allProducts,
                      total: total,
                    }),
                  });

                  if (!response.ok) {
                    const errorText = await response.text();
                    console.error("Backend error:", errorText);
                    alert("Error al crear el pedido");
                    return;
                  }

                  const data = await response.json();

                  if (data.url) {
                    // 👉 AQUÍ ABRE STRIPE
                    window.location.href = data.url;
                  } else {
                    alert("No se generó el link de pago");
                  }

                } catch (error) {
                  console.error("Error conexión:", error);
                  alert("Error de conexión con el servidor");
                }
              }}
            >
              <h2>Datos del cliente</h2>

              <input
                type="text"
                placeholder="Nombre"
                value={form.nombre}
                onChange={(e) =>
                  setForm({ ...form, nombre: e.target.value })
                }
                required
              />

              <input
                type="phone"
                placeholder="Teléfono"
                value={form.telefono}
                onChange={(e) =>
                  setForm({ ...form, telefono: e.target.value })
                }
                required
              />

              <input
                type="text"
                placeholder="Producto"
                value={allProducts.map(p => p.nameProduct).join(', ')}
                readOnly
              />

              <input
                type="text"
                placeholder="Precio total"
                value={`$${total.toFixed(2)}`}
                readOnly
              />

              <button type="submit">Pagar</button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancelar
              </button>
            </form>
          </div>
        )}
      </div>

      <div className={style.footer}>
        <Footer />
      </div>
    </>
  );
}

export default Productos;