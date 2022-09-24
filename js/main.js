let totalMaleta = document.getElementById("totalMaleta");
let precioTotal = 0;
totalMaleta.innerHTML = `${precioTotal} kg`;

let objetos = [
    {
        id: "flores",
        precio: 1
    },

    {
        id: "vestido",
        precio: 2
    },
    {
        id: "chaqueta",
        precio: 3
    },
    {
        id: "sandalias",
        precio: 2
    },
    {
        id: "bañador",
        precio: 3
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

