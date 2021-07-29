class SimpleApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jQuery: props.jQuery
        };
    }

    componentDidMount() {

        let selectOptions;

        this.state.jQuery.ajax({
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

            let country_items = links["country:items"];
            //if (console) console.log(country_items);

            selectOptions = country_items.map((c) =>
                <option key={c.href} value={c.href}>{c.name}</option>
            );
        });

        this.setState({ selectOptions: selectOptions });
    }

    selectCountryChangeHandler(onChangeEvent) {
        let selectCountry = this.state.jQuery(onChangeEvent.target);
        let selectedCountry = selectCountry.val();
        //if (console) console.log(selectedCountry);

        if (/placeholder/gi.test(selectedCountry)) {
            //if (console) console.log("Country not selected");
            this.setState({ selectRegion: null });
        } else {
            //if (console) console.log("Country selected");

            let selectRegionElement = <span>No regions returned from Teleport</span>;
            
            let url =
                selectedCountry.endsWith("/")
                    ? selectedCountry + "admin1_divisions/"
                    : selectedCountry + "/admin1_divisions/";

            this.state.jQuery.ajax({
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

                let a1_items = links["a1:items"];
                //if (console) console.log(a1_items);

                if (Array.isArray(a1_items) && a1_items.length > 0) {

                    let list_of_regions = a1_items.map((c) =>
                        <option key={c.href} value={c.href}>{c.name}</option>
                    );

                    selectRegionElement =
                        (<div>
                            <span className="SimpleApp">Region</span>
                            <select className="SimpleApp">
                                <option>Please select a Region</option>
                                {list_of_regions}
                            </select>
                        </div>);
                }
            });

            this.setState({ selectRegion: selectRegionElement });
        }
    }

    render() {
        return (
            <div>
                <h1>Get list of Countries via Teleport API (Open Data) and populate the Select Element</h1>
                <div>
                    <span className="SimpleApp">Country</span>
                    <select id="selectCountry" onChange={(event) => this.selectCountryChangeHandler(event)} className="SimpleApp">
                        <option key="placeholder" value="placeholder">Please select a country</option>
                        {this.state.selectOptions}
                    </select>
                </div>
                {this.state.selectRegion}
            </div>
        );
    }
}

//For more information please see:
//https://www.pluralsight.com/guides/how-to-use-jquery-inside-a-react-component
ReactDOM.render(
        React.createElement(SimpleApp, { jQuery: jQuery }),
        document.getElementById('root')
    );