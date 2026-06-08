const countriesContainer =
document.getElementById(
    "countriesContainer"
);

const searchInput =
document.getElementById(
    "searchInput"
);

const searchBtn =
document.getElementById(
    "searchBtn"
);

const regionFilter =
document.getElementById(
    "regionFilter"
);

const loading =
document.getElementById(
    "loading"
);

const errorMessage =
document.getElementById(
    "errorMessage"
);

const modal =
document.getElementById(
    "countryModal"
);

const modalBody =
document.getElementById(
    "modalBody"
);

const closeModal =
document.getElementById(
    "closeModal"
);

let allCountries = [];

/* =========================
   LOAD COUNTRIES
========================= */

async function loadCountries(){

    try{

        loading.style.display =
        "block";

        errorMessage.textContent =
        "";

        const response =
        await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,subregion,currencies,languages"
        );

        if(!response.ok){

            throw new Error(
            "Failed to load countries"
            );

        }

        allCountries =
        await response.json();

        allCountries.sort(
        (a,b)=>

        a.name.common.localeCompare(
        b.name.common
        )

        );

        displayCountries(
        allCountries
        );

    }

    catch(error){

        errorMessage.textContent =
        "❌ Unable to load country data.";

        console.error(error);

    }

    finally{

        loading.style.display =
        "none";

    }

}

/* =========================
   DISPLAY COUNTRIES
========================= */

function displayCountries(
countries
){

    countriesContainer.innerHTML =
    "";

    if(countries.length===0){

        countriesContainer.innerHTML =

        `
        <div class="country-card">

            <div class="country-info">

                <h2>
                    No Countries Found
                </h2>

                <p>
                    Try another search.
                </p>

            </div>

        </div>
        `;

        return;

    }

    countries.forEach(
    country=>{

        const currencies =

        country.currencies

        ?

        Object.values(
        country.currencies
        )

        .map(
        c=>c.name
        )

        .join(", ")

        :

        "N/A";

        const languages =

        country.languages

        ?

        Object.values(
        country.languages
        )

        .join(", ")

        :

        "N/A";

        const card =
        document.createElement(
        "div"
        );

        card.className =
        "country-card";

        card.innerHTML =

        `
        <div class="country-badge">
            ${country.region || "Unknown"}
        </div>

        <img
            src="${country.flags?.png}"
            alt="${country.name.common}"
            loading="lazy"
        >

        <div class="country-info">

            <h2>
                ${country.name.common}
            </h2>

            <p>
                <strong>
                    🏛 Capital:
                </strong>

                ${country.capital?.[0] || "N/A"}
            </p>

            <p>
                <strong>
                    👥 Population:
                </strong>

                ${country.population.toLocaleString()}
            </p>

            <p>
                <strong>
                    🌎 Region:
                </strong>

                ${country.region || "N/A"}
            </p>

            <p>
                <strong>
                    📍 Subregion:
                </strong>

                ${country.subregion || "N/A"}
            </p>

            <button
                class="details-btn"
                onclick="
                showCountryDetailsByName(
                '${country.name.common}'
                )
                "
            >
                📖 View Details
            </button>

        </div>
        `;

        countriesContainer.appendChild(
        card
        );

    });

}
/* =========================
   SHOW DETAILS
========================= */

function showCountryDetailsByName(
countryName
){

    const country =
    allCountries.find(

        c =>

        c.name.common ===
        countryName

    );

    if(!country){

        return;

    }

    const currencies =

    country.currencies

    ?

    Object.values(
    country.currencies
    )

    .map(
    c => c.name
    )

    .join(", ")

    :

    "N/A";

    const languages =

    country.languages

    ?

    Object.values(
    country.languages
    )

    .join(", ")

    :

    "N/A";

    modalBody.innerHTML =

    `
    <img
        src="${country.flags?.png}"
        alt="${country.name.common}"
        style="
        width:100%;
        max-height:300px;
        object-fit:cover;
        border-radius:18px;
        margin-bottom:20px;
        "
    >

    <h2>
        🌍 ${country.name.common}
    </h2>

    <p>
        <strong>🏛 Capital:</strong>
        ${country.capital?.[0] || "N/A"}
    </p>

    <p>
        <strong>👥 Population:</strong>
        ${country.population.toLocaleString()}
    </p>

    <p>
        <strong>🌎 Region:</strong>
        ${country.region || "N/A"}
    </p>

    <p>
        <strong>📍 Subregion:</strong>
        ${country.subregion || "N/A"}
    </p>

    <p>
        <strong>💰 Currency:</strong>
        ${currencies}
    </p>

    <p>
        <strong>🗣 Languages:</strong>
        ${languages}
    </p>
    `;

    modal.style.display =
    "flex";

}

/* =========================
   CLOSE MODAL
========================= */

if(closeModal){

    closeModal.addEventListener(

        "click",

        ()=>{

            modal.style.display =
            "none";

        }

    );

}

window.addEventListener(

    "click",

    event=>{

        if(
            event.target === modal
        ){

            modal.style.display =
            "none";

        }

    }

);

/* =========================
   SEARCH
========================= */

function searchCountries(){

    const searchText =

    searchInput.value
    .toLowerCase()
    .trim();

    const region =

    regionFilter.value;

    const filteredCountries =

    allCountries.filter(
    country => {

        const countryName =

        country.name.common
        .toLowerCase();

        const matchesSearch =

        countryName.includes(
        searchText
        );

        const matchesRegion =

        region === "" ||

        country.region ===
        region;

        return (

            matchesSearch &&

            matchesRegion

        );

    });

    displayCountries(
    filteredCountries
    );

}

/* =========================
   EVENTS
========================= */

searchBtn.addEventListener(

    "click",

    searchCountries

);

searchInput.addEventListener(

    "input",

    searchCountries

);

regionFilter.addEventListener(

    "change",

    searchCountries

);

/* =========================
   START
========================= */

loadCountries();