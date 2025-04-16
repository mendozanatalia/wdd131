// PRODUCT NAME
const products = [
    {id: "001", name: "Smart TV Pro"},
    {id: "002", name: "UltraCleaner"},
    {id: "003", name: "Echo Dot 3"},
    {id: "004", name: "BassUltra"},
    {id: "005", name: "Keycaps 360"},
]

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

