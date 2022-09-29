let totalMaleta = document.getElementById("totalMaleta");
let valorTotal = 0;
totalMaleta.innerHTML = `${valorTotal} kg`;

let objetos = [
    {
        id: "bufanda",
        valor: 2
    },

    {
        id: "vestido",
        valor: 1
    },
    {
        id: "chaqueta",
        valor: 3
    },
    {
        id: "botas",
        valor: 2
    },
    {
        id: "sudadera",
        valor: 4
    },
    {
        id: "vaquero",
        valor: 5
    },
    {
        id: "shirt",
        valor: 2
    },
    {
        id: "zapatillas",
        valor: 3
    },
    {
        id: "camara",
        valor: 4
    },
    {
        id: "neceser",
        valor: 3
    },
    {
        id: "ipad",
        valor: 2
    },
    {
        id: "guia",
        valor: 1
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

    valorTotal += objetoMaleta.valor;
    console.log('valor total', valorTotal);
    totalMaleta.innerHTML = `${valorTotal}kg`;
};


let maleta = document.getElementById("totalMaleta");
const vaciar = () => {
    valorTotal = 0;
    // console.log('precio vaciar');
    maleta.innerHTML = `${valorTotal}`;
}

