class SimpleApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            TeleportAPI: props.TeleportAPI
        };
    }

    componentDidMount() {

        let selectOptions;

        let country_items = this.state.TeleportAPI.GetCountries();

        if (Array.isArray(country_items) && country_items.length > 0) {
            selectOptions = country_items.map((c) =>
                <option key={c.href} value={c.href}>{c.name}</option>
            );
        }

        this.setState({ selectOptions: selectOptions });
    }

    selectCountryChangeHandler(onChangeEvent) {
        
        let selectedCountry = onChangeEvent.target.value;
        if (console) console.log(selectedCountry);

        if (/placeholder/gi.test(selectedCountry)) {
            //if (console) console.log("Country not selected");
            this.setState({ selectRegion: null });
        } else {
            //if (console) console.log("Country selected");

            let selectRegionElement = <span>No regions returned from Teleport</span>;

            let a1_items = this.state.TeleportAPI.GetAdmin1_Divisions(selectedCountry);

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
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
ReactDOM.render(
        React.createElement(SimpleApp, { TeleportAPI: new TeleportAPIHelper() }),
        document.getElementById('root')
    );