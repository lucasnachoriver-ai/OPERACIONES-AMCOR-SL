async function cargarDatos() {
  const res = await fetch('datos.json');
  const datos = await res.json();
  const tbody = document.querySelector('#tabla tbody');
  const buscador = document.getElementById('buscador');

  function render(filtro = '') {
    tbody.innerHTML = '';
    datos
      .filter(d => d.codigo.includes(filtro))
      .forEach(d => {
        const fila = `<tr>
          <td>${d.codigo}</td>
          <td>${d.estado}</td>
          <td>${d.proveedor}</td>
          <td>${d.transporte}</td>
          <td>${d.fecha}</td>
          <td>${d.terminal}</td>
        </tr>`;
        tbody.innerHTML += fila;
      });
  }

  buscador.addEventListener('input', e => render(e.target.value));
  render();
}

cargarDatos();
