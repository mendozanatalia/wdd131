// hamburger menu
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

// PRODUCTS ---------------------------------------------------
// products array
const products = [
    {
        productName: "Christmas Tree",
        price: "30 Bs.",
        material: "Wool 100% Acrylic",
        category: "Plushies",
        imageUrl: "images/arboles-navidad.webp"
    },
    {
        productName: "Flower Earrings",
        price: "25 Bs.",
        material: "Stainless steel, Gold-Plated Copper Wire and Beads",
        category: "Jewelry",
        imageUrl: "images/aretes-margarita.webp"
    },
    {
        productName: "Murano Earrings",
        price: "25 Bs.",
        material: "Stainless steel, Gold-Plated Copper Wire and Beads",
        category: "Jewelry",
        imageUrl: "images/aretes-murano.webp"
    },
    {
        productName: "Baby Grogu",
        price: "30 Bs.",
        material: "Polar Wool 100% Polyester",
        category: "Plushies",
        imageUrl: "images/babygrogu.webp"
    },
    {
      productName: "Post-It",
      price: "10 Bs.",
      material: "Paper",
      category: "Notebooks",
      imageUrl: "images/porta-postit.webp"
    },
    {
        productName: "Mini Whale",
        price: "10 Bs.",
        material: "Wool 100% Acrylic",
        category: "Plushies",
        imageUrl: "images/ballenita.webp"
    },
    {
        productName: "Panda",
        price: "25 Bs.",
        material: "Polar Wool 100% Polyester",
        category: "Plushies",
        imageUrl: "images/panda.webp"
    },
    {
        productName: "Mini Chicken",
        price: "20 Bs.",
        material: "Polar Wool 100% Polyester",
        category: "Plushies",
        imageUrl: "images/pollito.webp"
    },
    {
        productName: "Daily Planner",
        price: "40 Bs.",
        material: "Paper, Wire-o",
        category: "Notebooks",
        imageUrl: "images/planner-diario.webp"
    },
    {
        productName: "Photo Album",
        price: "35 Bs.",
        material: "Paper",
        category: "Notebooks",
        imageUrl: "images/portafotos.webp"
    },
];

// Create each product card
function createCardTemplate(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("card");

    // Give format for the HTML file
    productCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.productName}" loading="lazy">
        <h3>${product.productName}</h3>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Material:</strong> ${product.material}</p>
    `;
    return productCard;
}

// Filter the products in "Jewelry", "Plushies" and "Notebooks"
function filterProducts(condition) {
    let filteredProducts = [];

    if (condition == "Plushies") {
        filteredProducts = products.filter(
            product => product.category == "Plushies"
        );
    } else if (condition == "Jewelry") {
        filteredProducts = products.filter(
            product => product.category == "Jewelry"
        );
    } else if (condition == "Notebooks") {
        filteredProducts = products.filter(
            product => product.category == "Notebooks"
        );
    } else {
        filteredProducts = products;
    }

    return filteredProducts;
}

// Display temple cards
function displayProducts(products) {
    const cardContainer = document.querySelector(".gallery");
    cardContainer.innerHTML = "";

    products.forEach(product => {
        const card = createCardTemplate(product);
        cardContainer.appendChild(card);
    });
}


// Display filtered images
document.getElementById("plushies").addEventListener("click", () => {
    const plushiesProducts = filterProducts("Plushies");
    displayProducts(plushiesProducts);
    document.querySelector(".tab-title").textContent = `Plushies (${plushiesProducts.length})`;
});

document.getElementById("jewelry").addEventListener("click", () => {
    const jewelryProducts = filterProducts("Jewelry");
    displayProducts(jewelryProducts);
    document.querySelector(".tab-title").textContent = `Jewelry (${jewelryProducts.length})`;
});

document.getElementById("notebooks").addEventListener("click", () => {
    const notebookProducts = filterProducts("Notebooks");
    displayProducts(notebookProducts);
    document.querySelector(".tab-title").textContent = `Notebooks (${notebookProducts.length})`;
});

document.getElementById("all").addEventListener("click", () => {
    displayProducts(products);
    document.querySelector(".tab-title").textContent = `All Products (${products.length})`;
});

displayProducts(products);