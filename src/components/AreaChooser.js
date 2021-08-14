import { useState } from "react";

function AreaChooser({ stateList, countyList, updateAreaCallback }) {
    const [stateName, setStateName] = useState(null);
    const [countiesDisplayed, setCountiesDisplayed] = useState([]);
    console.log(stateList);

    function updateCountyList(stateName) {
        setStateName(stateName);

        let counties = [];

        countyList.forEach((element) => {
            if (element.includes(stateName)) {
                counties.push(element.slice(0, -5));
            }
        });

        setCountiesDisplayed(counties);
    }

    return (
        <div>
            <select
                name="states"
                onChange={(e) => updateCountyList(e.target.value)}
            >
                {stateList.map((stateName) => (
                    <option value={stateName}>{stateName}</option>
                ))}
            </select>

            <select
                name="counties"
                onChange={(e) => updateAreaCallback(e.target.value, stateName)}
            >
                {countiesDisplayed.map((county) => (
                    <option value={county}>{county}</option>
                ))}
            </select>
        </div>
    );
}

export default AreaChooser;
