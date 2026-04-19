{showForm && (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Nombre"
      value={form.name}
      onChange={(e) => setForm({...form, name: e.target.value})}
      required
    />

    <input
      type="email"
      placeholder="Email"
      value={form.email}
      onChange={(e) => setForm({...form, email: e.target.value})}
      required
    />

    <button type="submit">Pagar</button>
  </form>
)}