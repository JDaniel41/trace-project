import axios from "axios";
import { useState, useEffect } from "react";
import MaskGuidanceCard from "./components/MaskGuidanceCard";
import AreaChooser from "./components/AreaChooser";

function App() {
    const [covidApiResponse, setCovidApiResponse] = useState(null);
    const [county, setCounty] = useState(null);
    const [covidState, setCovidState] = useState(null);

    function setCountyAndState(newCounty, newState) {
        setCounty(newCounty);
        setCovidState(newState);
    }

    function renderAreaChooser() {
        const listOfCounties = covidApiResponse.map(
            (result) => result.county + ", " + result.state
        );
        let listOfStates = [];

        covidApiResponse.forEach((result) => {
            if (!listOfStates.includes(result.state)) {
                console.log("PUSHING");
                listOfStates.push(result.state);
            }
        });

        console.log(listOfStates);

        return (
            <AreaChooser
                stateList={listOfStates}
                countyList={listOfCounties}
                updateAreaCallback={setCountyAndState}
            />
        );
    }

    useEffect(() => {
        console.log("Effect");
        axios
            .get(
                "https://api.covidactnow.org/v2/counties.json?apiKey=c76bf315c59f4583be354544cba8c6a6"
            )
            .then((response) => setCovidApiResponse(response.data))
            .catch((error) => console.log(error));
    }, []);

    if (covidApiResponse == null) {
        return <div>Loading...</div>;
    } else {
        return <div>{renderAreaChooser()}</div>;
    }
}

export default App;
