function MaskGuidanceCard({ countyData }) {
    const transmissionNames = [
        "Low",
        "Moderate",
        "Substantial",
        "High",
        "Unknown",
    ];

    const fontColors = [
        "text-green-600",
        "text-blue-700",
        "text-yellow-500",
        "text-red-500",
    ];

    function displayMaskGuidance(cdcTransmissionLevel) {
        if (cdcTransmissionLevel > 1) {
            return "You should wear a mask indoors.";
        }
        return "";
    }

    return (
        <div className="p-5">
            <div className="justify-center w-auto bg-white rounded-lg p-5 shadow-xl">
                <h1
                    className={
                        fontColors[countyData.cdcTransmissionLevel] +
                        " font-bold text-4xl text-center"
                    }
                >
                    {transmissionNames[countyData.cdcTransmissionLevel] +
                        " Transmission"}
                </h1>
                <h2 className="text-center font-bold pt-2">
                    {displayMaskGuidance(countyData.cdcTransmissionLevel)}
                </h2>
            </div>
        </div>
    );
}

export default MaskGuidanceCard;
