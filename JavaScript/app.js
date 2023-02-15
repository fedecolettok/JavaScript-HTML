/*const lista = document.getElementById('lista')
console.log(lista) //es recomendable verificar que estamos accediendo a ese elemento en cuestión
const items = document.createElement('li') //hasta ahora solo creamos el elemento 'li', pero como no tiene contenido no se muestra, y además, ese 'li' está "flotando en el aire", pues no le hemos dicho donde posicionarse.
items.textContent = "Item 1" //tenemos creado el primer 'li' de la lista, pero no le hemos dicho a JS dónde debe ir este elemento
lista.appendChild(items) //con appendChild le decimos a JS que coloque el elemento 'items' dentro de 'lista'*/

/* const lista = document.getElementById("lista");
const comidas = ["Pizza", "Hamburguesas", "Empanadas"];
comidas.forEach((item) => {
  const li = document.createElement("li"); //creamos la variable 'li' como el elemento que crearemos: <li>
  li.textContent = item; //le damos el contenido que contendrá cada <li>, que es el ítem
  lista.appendChild(li); //colocamos el hijo <li> dentro del padre <lista>
});*/

//Otra manera de hacer es concatenando las cadenas de strings con las comillas invertidas:

/* const lista = document.getElementById("lista");
const comidas = ["Pizza", "Hamburguesas", "Empanadas"];
comidas.forEach((item) => {
  lista.innerHTML += `<li>${item}</li>`
})*/

/*
//FRAGMENT
const lista = document.getElementById("lista");
const comidas = ["Pizza", "Hamburguesas", "Empanadas"];

const fragment1 = document.createDocumentFragment() //creamos un fragmento 
// const fragment1 = new DocumentFragment(); es otra manera de hacer lo mismo.
// lo que hará este fragment es permitirnos guardar toda el template o nodo de HTML (la lista) dentro de un fragmento del documento.

 
comidas.forEach(platillo => {
   const item = document.createElement('li');
   item.textContent = platillo;
   fragment1.appendChild(item)
}); //hasta ahora no se mostrarán los restultados en la página, pues tenemos armado el fragment "fragment1", pero no lo hemos empujado a la <ul>
lista.appendChild(fragment1) //acá mostramos lo que guardamos en el fragment.
console.log(fragment1) // #document.fragment
*/

/*
   //Insertar Primero
const lista = document.getElementById("lista");
const comidas = ["Pizza", "Hamburguesas", "Empanadas"];
const fragment1 = document.createDocumentFragment();

/* comidas.forEach(element => {
   const li = document.createElement('li');
   li.textContent = element;
   const nodoHijo = fragment1.firstChild
   console.log(element, nodoHijo) //element = "Pizza", "Hamburg" y "Empanadas", y nodoHijo = "null", "Pizza" y "Pizza".
   fragment1.insertBefore(li)
});
lista.appendChild(fragment1) //


comidas.forEach(element => {
const li = document.createElement('li');
li.textContent = element;
const nodoHijo = fragment1.firstChild
fragment1.insertBefore(li, nodoHijo)
});
lista.appendChild(fragment1)
*/

/*
//TEMPLATE
const lista = document.getElementById('lista');
const comidas = ["Pizza", "Hamburguesas", "Empanadas"];
const fragment = document.createDocumentFragment();
/
comidas.forEach(platillo => {
   //creamos los <li>:
   const li = document.createElement('li');
   //agregamos la clase "list" a cada <li>:
   li.classList.add("list");
   //creamos <b>:
   const b = document.createElement('b');
   //agregamos texto a <b>:
   b.textContent = "Nombre: ";
   //creamos <span>:
   const span = document.createElement('span');
   //agregamos clase a <span>
   span.classList.add('text-danger');
   //agregamos texto a <span>:
   span.textContent = platillo;
   //agregamos nodos hijos a <li>:
   li.appendChild(b);
   li.appendChild(span);
   //agregamos <li> al frgament
   fragment.appendChild(li)
});
lista.appendChild(fragment)
*

const template1 = document.getElementById('template-li').content

comidas.forEach(plato => {
   //accedemos al elemento <span> del template y le agregamos el plato
   // template1.querySelector("span").textContent = plato;
   template1.querySelector(".text-danger").textContent = plato;
   //clonamos el elemento plato
   const clone = template1.cloneNode(true)
   //const clone = document.importNode(template1, true);
   //agregamos el elemento plato al fragment
   fragment.appendChild(clone);
})
lista.appendChild(fragment)
*/


/*const btnAumentar = document.querySelector('.btn-info')
const span = document.getElementById('resultados')
let contador = 0

btnAumentar.addEventListener('click', () => {
   contador++;
   span.textContent = contador
})

const btnDisminuir = document.querySelector('.btn-danger')
btnDisminuir.addEventListener('click', () => {
   contador--;
   span.textContent = contador
})*/

//Event delegation
const container = document.querySelector('.container') //accedemos a la seccion donde se encuentran los botones
const span = document.getElementById('resultados')
var contador = 0

container.addEventListener('click', (e) => {
   if(e.target.classList.contains('btn-info')) {
      contador ++
      span.textContent = contador
   } else {
      contador --;
      span.textContent = contador
   } e.stopPropagation()
})