fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then(function (countries) {
        console.log(countries);

        var countriesHtml = "";
        var totalPopulation = 0;
        var totalArea = 0;

        for (var index in countries ) {
            var country = countries[index];
            const flagUrl = country.flags?.svg;

            countriesHtml += `<tr>
                <td>${+ index +1}</td>
                <td>${ country.name.common }</td>
                <td>${ country.population }</td>
                <td>${ country.region }</td>
                <td>${ country.area }</td>
                <td style="background-image: url(${flagUrl}); background-size: 70px 50px; background-position: center; background-repeat: no-repeat;"></td>
            </tr>`;

            totalPopulation += country.population || 0;
            totalArea += country.area || 0;
        }

            countriesHtml += `<tr>
                <td colspan="2">Total</td>
                <td>${Math.round(totalPopulation)}</td>
                <td></td>
                <td>${Math.round(totalArea)}</td>
                <td></td>
            </tr>`;

        document.querySelector('#countries-table tbody').innerHTML = countriesHtml;
        });

