async function getUsuarios() {
    const res = await fetch("http://localhost:4000/usuarios");
    const data = await res.json();
    return data;
}

const contenedor = document.getElementById("contenedor");

getUsuarios().then((data) => {
    data.forEach((item) => {
        const article = document.createElement("article");
        article.innerHTML = `
            <img src="${item.image + item.id + ".jpg"}" />
            <h3>${item.name}</h3>
            <p>${item.email}</p>
            <p>${item.pass}</p>
        `;
        contenedor.appendChild(article);
    });
});
