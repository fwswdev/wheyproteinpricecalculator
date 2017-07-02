function ComputeWhey(dataIn) {
    dataIn = {}
    dataIn.weightOfTubInLbs = 25;
    dataIn.gramspowderperserving = 30;
    dataIn.price = 25
    dataIn.gramsproteinperserving = 20
    dataIn.caloriesPerServing = 2
    //console.log("test");
    //var p = document.getElementById("inpPrice").value;
    //console.log(p);

    var dataOut = {};

    var tubingrams = (dataIn.weightOfTubInLbs / 2.2046) * 1000;

    dataOut.numServingsPerTub = tubingrams / dataIn.gramspowderperserving;

    dataOut.pricePerScoop = dataIn.price / dataOut.numServingsPerTub;

    dataOut.gramsProteinPerTub = dataOut.numServingsPerTub * dataIn.gramsproteinperserving;

    dataOut.pricePerGramProtein = dataIn.price / dataOut.gramsProteinPerTub;

    dataOut.pricePerCalorie = dataOut.pricePerScoop / dataIn.caloriesPerServing;

    dataOut.totalCaloriesTub = dataIn.caloriesPerServing * dataOut.numServingsPerTub;

    return dataOut
}

function GetFormattedComputation()
{
    dataIn = {}
    dataIn.weightOfTubInLbs = 25;
    dataIn.gramspowderperserving = 30;
    dataIn.price = 25
    dataIn.gramsproteinperserving = 20
    dataIn.caloriesPerServing = 2

    var dataOut = ComputeWhey(dataIn)
    var NEWLINE = " <br> "
    var strOut =
"Grams of Protein Power Per Tub: " + dataOut.gramsProteinPerTub + NEWLINE +
"Number of servings per tub: " + dataOut.numServingsPerTub + NEWLINE +
"Price per scoop:" + dataOut.pricePerScoop + NEWLINE +
"Price per gram of protein: " + dataOut.pricePerGramProtein + NEWLINE +
"Price per Calorie serving: " + dataOut.pricePerCalorie + NEWLINE +
"Total Calories Per Tub: " + dataOut.totalCaloriesTub;
    document.write(strOut);

}