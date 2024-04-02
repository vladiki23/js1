fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then(function (countries) {
        console.log(countries);
        const maxElements = 20;

        var lastIndex = 0;
        var countriesHtml = "";
        var counter=0;

        for (var index=lastIndex; index<Object.keys(countries).length;index++) {
            var element = countries[index];
            const flagUrl = element.flags?.svg;
            countriesHtml += `<tr>
          <td>${+index + 1}</td>
          <td>${element.name.common}</td>
          <td>${element.population}</td>
          <td>${element.region}</td>
          <td>${element.area}</td>
          <td style="background-image: url(${flagUrl}); background-size: 70px 50px; background-position: center; background-repeat: no-repeat;">
      </td>
      
        </tr>`;
            lastIndex=index;
            if(maxelements==index) {
                maxelements*2=maxelements continue;
            }
        }
        console.log(Object.keys(countries).length)
        document.querySelector("#countries-table tbody").innerHTML = countriesHtml;
    });