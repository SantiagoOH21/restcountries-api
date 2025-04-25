const cardTemplate = function (countriesInfo) {
  return `<div class="card">
              <img id="flag-image" src="${countriesInfo.flag}" alt="${countriesInfo.altFlag}" />
              <h1 class="center">${countriesInfo.countryName}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch("https://restcountries.com/v3.1/all?fields=name,flags,region") //https://restcountries.com/v3.1/all
  .then((res) => res.json())
  .then((countries) => {
    countries.sort((a, b) =>
      a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase())
    );

    countries.forEach((country) => {
      const countryName = country.name.common;
      const flag = country.flags.png;
      const altFlag = country.flags.alt;
      const region = country.region;
      const countriesInfo = { countryName, flag, altFlag, region };
      countriesNode.innerHTML += cardTemplate(countriesInfo);
    });
  })
  .catch((error) => console.error(error));

//region = [Asia,Europe,Africa,Oceania,Americas,Antarctic]
