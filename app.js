var countries= [];
var lastIndex = 0;
fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then(function (countries) {
        console.log(countries);
        this.countries=countries;
        click();
    });
    function click() {
        const maxElements = 20;

        var countriesHtml = "";
        var counter=0;

        for (var index=this.lastIndex; index<Object.keys(this.countries).length;index++) {
            var element = this.countries[index];
            const flagUrl = element.flags?.svg;
            countriesHtml += `<tr>
          <td>${+index + 1}</td>
          <td>${element.name.common}</td>
          <td>${element.population}</td>
          <td>${element.region}</td>
          <td>${element.area}</td>
          <td style="background-image: url(${flagUrl}); background-size: 70px 50px; background-position: center; background-repeat: no-repeat;"></td>
      
        </tr>`;
            this.lastIndex=index;
            counter++;
            if(maxElements==counter) {
                this.lastIndex++;
                counter=0;
                document.querySelector("#countries-table tbody").innerHTML+=countriesHtml;
                return;
            }
        }
    }