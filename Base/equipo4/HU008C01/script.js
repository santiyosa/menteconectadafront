const contactos = [
    { nombre: 'Dariannys Zambrano', categoria: 'frontend', especialidad: 'React' },
    { nombre: 'Sara Alvarez', categoria: 'frontend', especialidad: 'JavaScript' },
    { nombre: 'Sofia Muñoz', categoria: 'backend', especialidad: 'Spring Boot' },
    { nombre: 'Javier Martinez', categoria: 'backend', especialidad: 'Python' },
    { nombre: 'Jose Jesus Vargas', categoria: 'devops', especialidad: 'AWS' },
    { nombre: 'Kevin Balvin', categoria: 'devops', especialidad: 'Azure' },
    { nombre: 'Dilan Villada', categoria: 'devops', especialidad: 'Docker' },
    { nombre: 'Geraldinne Jaramillo', categoria: 'qa', especialidad: 'Selenium' },
    { nombre: 'Mariana Marin', categoria: 'qa', especialidad: 'Jester' },
    { nombre: 'Jhon Castrillon', categoria: 'backend', especialidad: 'Node.js' },

];

const select = document.getElementById('categoria');
const lista = document.getElementById('lista-contactos');
const contador = document.getElementById('contador');

function renderContactos(filtro) {
    lista.innerHTML = '';
    const filtrados = 
    filtro === 'todos' ? contactos : contactos.filter(item => item.categoria === filtro);
    filtrados.forEach(item => {
        const li = document.createElement('li');
        li.className = 'p-4 bg-blue-50 rounded shadow flex flex-col sm:flex-row sm:justify-between';
        li.innerHTML = `<span class="font-semibold">${item.nombre}</span><span class="text-sm text-gray-600">${item.especialidad}</span>`;
        lista.appendChild(li);
    });
    contador.textContent = `Mostrando ${filtrados.length} resultados`;
}


select.addEventListener('change', e => {
    renderContactos(e.target.value);
});

renderContactos('todos');