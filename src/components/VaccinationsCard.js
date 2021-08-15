import numeral from "numeral";

function VaccinationsCard({ countyData }) {
    console.log(countyData);
    return (
        <div>
            <div className="bg-white">
                <h1>
                    {"1+ Dose: " +
                        numeral(
                            countyData.metrics.vaccinationsInitiatedRatio
                        ).format("0.0%")}
                </h1>
                <h1>
                    {"Vaccine Series Completed: " +
                        numeral(
                            countyData.metrics.vaccinationsCompletedRatio
                        ).format("0.0%")}
                </h1>
            </div>
        </div>
    );
}

export default VaccinationsCard;
