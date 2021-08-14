function MaskGuidanceCard({ countyData }) {
    const transmissionNames = [
        "Low",
        "Moderate",
        "Substantial",
        "High",
        "Unknown",
    ];

    if (countyData === null) {
        return <div>Pick a county</div>;
    } else {
        return (
            <div>
                <h1>{countyData.fips}</h1>
                <h1>
                    {transmissionNames[countyData.cdcTransmissionLevel] +
                        " Transmission"}
                </h1>
            </div>
        );
    }
}

export default MaskGuidanceCard;
