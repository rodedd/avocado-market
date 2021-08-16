/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// const url = "https://platzi-avo.vercel.app/api/avo";
//web api
//conectarnos al server
//utilizando promesas
// window
//   .fetch(url)
//   //procesar la respuesta y convertirla en JSON
//   .then(respuesta => respuesta.json())
//   // JSON -> Data -> renderizar info al browser
//   .then(responseJson => {
//     const allItems = [];
//     responseJson.data.forEach(item => {
//       //crear imagen
//       const image = document.createElement('img');
      
//       //crear titulo
//       const title = document.createElement('h2');
      
//       //crear precio
//       const price = document.createElement('div');
      
//       const container = document.createElement('div');
//       container.append(image, title, price);

//       allItems.push(container);
//     })
//     document.body.append(...allItems);
//   });

const urlBase = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

//Intl Api (Internacionalización) -- para formatear el precio 
//Esta api es del navegador

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD'
  }).format(price);

  return newPrice;
}

//Web Api Avocado
//utilizando async / await
const fetchData = async () => {
  //conectarnos al server y obtener la respuesta
  const response = await fetch(`${urlBase}/api/avo`);
  //procesar la respuesta y convertirla en JSON
  const responseJson = await response.json();
  const allItems = [];

  // JSON -> data -> renderizar info al browser
  responseJson.data.forEach(item => {
    //crear imagen
    const imagen = document.createElement('img');
    imagen.src = `${urlBase}${item.image}`;
    imagen.className = ""
    
    //crear titulo
    const titulo = document.createElement('h2');
    titulo.textContent = item.name;
    titulo.className = ""

    //crear precio
    const precio = document.createElement('div');
    precio.textContent = formatPrice(item.price);
    precio.className = ""

    //iconos
    const iconoCorazon = document.createElement('span');
    iconoCorazon.className = 'material-icons md-36'
    iconoCorazon.textContent = 'favorite_border';
    const iconoAgregar = document.createElement('span');
    iconoAgregar.className = 'material-icons md-36 orange600'
    iconoAgregar.textContent = 'add';

    //contenedor para los iconos
    const iconos = document.createElement('div');
    iconos.className = 'icons-container'
    iconos.append(iconoCorazon, iconoAgregar);

    // Creamos un contenedor del título y el precio
    const precioYTitulo = document.createElement('div')
    precioYTitulo.appendChild(titulo);
    precioYTitulo.appendChild(precio);
    precioYTitulo.className = "";
    
    const container = document.createElement('div');
    container.className = "card";
    container.append(iconos, imagen, precioYTitulo);

    allItems.push(container);
  })
  appNode.append(...allItems);
};

fetchData();
