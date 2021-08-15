import numeral from "numeral";

function CaseMetrics({ countyData }) {
    return (
        <div>
            <div>
                <h1>
                    {"Case Density: " +
                        numeral(countyData.metrics.caseDensity).format("0,0") +
                        " per 100k population"}
                </h1>
                <h1>
                    {"Estimated Infection Rate: " +
                        countyData.metrics.infectionRate}
                </h1>
                <h1>
                    {"Test Positivity Ratio: " +
                        numeral(countyData.metrics.testPositivityRatio).format(
                            "0%"
                        )}
                </h1>
                <h1>
                    {"ICU Capacity Used: " +
                        numeral(countyData.metrics.icuCapacityRatio).format(
                            "0%"
                        )}
                </h1>
            </div>
        </div>
    );
}

export default CaseMetrics;
