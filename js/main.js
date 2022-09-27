let totalMaleta = document.getElementById("totalMaleta");
let precioTotal = 0;
totalMaleta.innerHTML = `${precioTotal} kg`;

let objetos = [
    {
        id: "bufanda",
        precio: 2
    },

    {
        id: "vestido",
        precio: 1
    },
    {
        id: "chaqueta",
        precio: 3
    },
    {
        id: "botas",
        precio: 2
    },
    {
        id: "sudadera",
        precio: 4
    },
    {
        id: "vaquero",
        precio: 5
    },
    {
        id: "shirt",
        precio: 2
    },
    {
        id: "zapatillas",
        precio: 3
    },
    {
        id: "camara",
        precio: 4
    },
    {
        id: "neceser",
        precio: 3
    },
    {
        id: "ipad",
        precio: 2
    },
    {
        id: "guia",
        precio: 1
    },
];

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
};
const allowDrop = (ev) => {
    ev.preventDefault();
};
const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");

    let objetoMaleta = objetos.find(objeto => {
        return objeto.id == data
    });

    precioTotal += objetoMaleta.precio;

    totalMaleta.innerHTML = `${precioTotal}kg`;
};

let variableGlobal = 0;
let carrito = document.getElementById("totalMaleta");
const vaciar = () => {
    variableGlobal = 0;
    carrito.innerHTML = `${variableGlobal}`;
};
