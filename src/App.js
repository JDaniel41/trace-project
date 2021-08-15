import axios from "axios";
import { useState, useEffect } from "react";
import MaskGuidanceCard from "./components/MaskGuidanceCard";
import AreaChooser from "./components/AreaChooser";
import VaccinationsCard from "./components/VaccinationsCard";
import CaseMetrics from "./components/CaseMetrics";

function App() {
    const [covidApiResponse, setCovidApiResponse] = useState(null);
    const [chosenCountyData, setChosenCountyData] = useState(null);

    function setCountyAndState(countyName, stateName) {
        setChosenCountyData(
            covidApiResponse.find(
                (result) =>
                    result.county === countyName && result.state === stateName
            )
        );
    }

    function renderAreaChooser() {
        const listOfCounties = covidApiResponse.map(
            (result) => result.county + " (" + result.state + ")"
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

    function renderCards() {
        if (!chosenCountyData) return <div></div>;

        return (
            <div className="flex justify-center">
                <div className="w-1/4 ">
                    <MaskGuidanceCard countyData={chosenCountyData} />
                    <VaccinationsCard countyData={chosenCountyData} />
                    <CaseMetrics countyData={chosenCountyData} />
                </div>
            </div>
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
        return (
            <div className="bg-gray-100 h-screen">
                {renderAreaChooser()}
                {renderCards()}
            </div>
        );
    }
}

export default App;
