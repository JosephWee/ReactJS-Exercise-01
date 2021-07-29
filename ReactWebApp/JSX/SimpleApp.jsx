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

            if (console) console.log(data);

            let links = data["_links"];
            if (console) console.log(links);

            let linksKeys = Object.keys(links);
            if (console) console.log(linksKeys);

            let country_items = links["country:items"];
            if (console) console.log(country_items);

            selectOptions = country_items.map((c) =>
                <option key={c.href} value={c.href}>{c.name}</option>
            );
        });

        this.setState({ selectOptions: selectOptions });
    }

    render() {
        return (
            <div>
                <h1>Get list of Countries via Teleport API (Open Data) and populate the Select Element</h1>
                <select>
                    {this.state.selectOptions}
                </select>
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