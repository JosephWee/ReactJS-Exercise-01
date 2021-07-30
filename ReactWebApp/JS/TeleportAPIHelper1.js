//For more information please see:
//https://www.pluralsight.com/guides/how-to-use-jquery-inside-a-react-component
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
class TeleportAPIHelper1 {

    constructor() {
    }

    GetCountries() {

        let country_items = null;

        $.ajax({
            method: "GET",
            url: "https://api.teleport.org/api/countries/",
            data: null,
            async: false
        }).done(function (data) {

            //if (console) console.log(data);

            let links = data["_links"];
            //if (console) console.log(links);

            //let linksKeys = Object.keys(links);
            //if (console) console.log(linksKeys);

            country_items = links["country:items"];
            //if (console) console.log(country_items);
        });

        return country_items;
    }

    GetAdmin1_Divisions(country_href) {

        let a1_items = null;

        let url =
            country_href.endsWith("/")
            ? country_href + "admin1_divisions/"
            : country_href + "/admin1_divisions/";

        $.ajax({
            method: "GET",
            url: url,
            data: null,
            async: false
        }).done(function (data) {

            //if (console) console.log(data);

            let links = data["_links"];
            //if (console) console.log(links);

            ////let linksKeys = Object.keys(links);
            ////if (console) console.log(linksKeys);

            a1_items = links["a1:items"];
            //if (console) console.log(a1_items);
        });

        return a1_items;
    }
}