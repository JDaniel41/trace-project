function AreaChooser({ stateList, countyList, updateAreaCallback }) {
    console.log(stateList);

    function updateCountyList(stateName) {
        console.log(stateName);
    }

    return (
        <select
            name="states"
            onChange={(e) => updateCountyList(e.target.value)}
        >
            {stateList.map((stateName) => (
                <option value={stateName}>{stateName}</option>
            ))}
        </select>
    );
}

export default AreaChooser;
