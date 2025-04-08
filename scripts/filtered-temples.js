// hamburger menu
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

// temples array
const temples = [
    {
      templeName: "Aba Nigeria Temple",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah Temple",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah Temple",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam Temple",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C. Temple",
      location: "Kensington, Maryland, USA",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú Temple",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico Temple",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Add more temple objects here...
    {
        templeName: "Cochabamba Bolivia Temple",
        location: "Cochabamba, Bolivia",
        dedicated: "2000, April, 30",
        area: 35500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13721-main.jpg"
      },
      {
        templeName: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27-29",
        area: 53997,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
      },
      {
        templeName: "Stockholm Sweden Temple",
        location: "Stockholm, Sweden",
        dedicated: "1985, July, 2-4",
        area: 31000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/stockholm-sweden-temple/stockholm-sweden-temple-30267-main.jpg"
      },
  ];

// Create each temple card
function createCardTemplate(temple) {
    const templeCard = document.createElement("div");
    templeCard.classList.add("card");

    // Give format for the HTML file
    templeCard.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area}</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    return templeCard;
}

// Filter the temples in "Old, New, Large and Small"
function filterTemples(condition) {
    let filteredTemples = [];

    if (condition == "old") {
        filteredTemples = temples.filter(
            temple => parseInt(temple.dedicated.split(",")[0]) < 1900
        );
    } else if (condition == "new") {
        filteredTemples = temples.filter(
            temple => parseInt(temple.dedicated.split(",")[0]) > 2000
        );
    } else if (condition == "large") {
        filteredTemples = temples.filter(
            temple => temple.area > 9000
        );
    } else if (condition == "small") {
        filteredTemples = temples.filter(
            temple => temple.area < 10000
        );
    } else {
        filteredTemples = temples;
    }

    return filteredTemples;
}

// Display temple cards
function displayTemples(temples) {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";

    temples.forEach(temple => {
        const card = createCardTemplate(temple);
        cardContainer.appendChild(card);
    });
}

// Display filtered images
document.getElementById("old").addEventListener("click", () => {
    const oldTemples = filterTemples("old");
    displayTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", () => {
    const newTemples = filterTemples("new");
    displayTemples(newTemples);
});

document.getElementById("large").addEventListener("click", () => {
    const largeTemples = filterTemples("large");
    displayTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", () => {
    const smallTemples = filterTemples("small");
    displayTemples(smallTemples);
});

document.getElementById("home").addEventListener("click", () => {
    displayTemples(temples);
});

displayTemples(temples);