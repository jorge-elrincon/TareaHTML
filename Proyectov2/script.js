let fecha= new Date()
const html = document.getElementById('hora')
html.innerHTML = `Hoy es ${fecha.toDateString()}.`