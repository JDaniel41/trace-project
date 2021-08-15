import numeral from "numeral";

function VaccinationsCard({ countyData }) {
    console.log(countyData);
    return (
        <div className="p-5">
            <div className="bg-white rounded-lg p-5 shadow-xl">
                <h1 className="text-2xl font-bold text-center">
                    Vaccine Information
                </h1>
                <div className="flex justify-around">
                    <h1 className="text-center pt-2">
                        {"1+ Dose: " +
                            numeral(
                                countyData.metrics.vaccinationsInitiatedRatio
                            ).format("0.0%")}
                    </h1>
                    <h1 className="text-center pt-2">
                        {"Fully: " +
                            numeral(
                                countyData.metrics.vaccinationsCompletedRatio
                            ).format("0.0%")}
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default VaccinationsCard;
