import numeral from "numeral";

function CaseMetrics({ countyData }) {
    return (
        <div className="p-5">
            <div className="bg-white rounded-lg p-5 shadow-xl">
                <h1 className="text-center font-bold text-2xl">
                    Local Case Metrics
                </h1>
                <div className="grid grid-cols-2">
                    <h1 className="text-center">
                        {"Case Density: " +
                            numeral(countyData.metrics.caseDensity).format(
                                "0,0"
                            ) +
                            " per 100k population"}
                    </h1>
                    <h1 className="text-center">
                        {"Estimated Infection Rate: " +
                            countyData.metrics.infectionRate}
                    </h1>
                    <h1 className="text-center">
                        {"Test Positivity Ratio: " +
                            numeral(
                                countyData.metrics.testPositivityRatio
                            ).format("0.0%")}
                    </h1>
                    <h1 className="text-center">
                        {"ICU Capacity Used: " +
                            numeral(countyData.metrics.icuCapacityRatio).format(
                                "0.0%"
                            )}
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default CaseMetrics;
