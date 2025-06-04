import { useState } from "react";
import { Plane, ChevronDown } from "lucide-react";

const DreamVacationCalculator = () => {
  // Configuration for ranges (easily modifiable)
  const rangeConfig = {
    years: { min: 0, max: 30, step: 1, defaultValue: 5 },
    cost: { min: 0, max: 5000000, step: 10000, defaultValue: 100000 },
    savings: { min: 0, max: 1000000, step: 5000, defaultValue: 0 },
    inflation: { min: 0, max: 20, step: 0.5, defaultValue: 7 },
    returnRate: { min: 0, max: 30, step: 0.5, defaultValue: 12 },
  };

  // State using range config
  const [yearsUntilVacation, setYearsUntilVacation] = useState(
    rangeConfig.years.defaultValue
  );
  const [currentTripCost, setCurrentTripCost] = useState(
    rangeConfig.cost.defaultValue
  );
  const [currentSavings, setCurrentSavings] = useState(
    rangeConfig.savings.defaultValue
  );
  const [inflationRate, setInflationRate] = useState(
    rangeConfig.inflation.defaultValue
  );
  const [expectedReturn, setExpectedReturn] = useState(
    rangeConfig.returnRate.defaultValue
  );

  // Calculate future values
  const futureTripCost =
    currentTripCost * Math.pow(1 + inflationRate / 100, yearsUntilVacation);
  const futureValueOfCurrentSavings =
    currentSavings * Math.pow(1 + expectedReturn / 100, yearsUntilVacation);
  const monthlySavingsRequired =
    ((futureTripCost - futureValueOfCurrentSavings) * (expectedReturn / 1200)) /
    (Math.pow(1 + expectedReturn / 1200, yearsUntilVacation * 12) - 1);

  // Format currency with Indian numbering system
  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Crore`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakh`;
    }
    return `₹${Math.round(amount).toLocaleString("en-IN")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-26">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
            <Plane className="h-8 w-8 mr-2 text-blue-600" />
            DREAM VACATION PLANNER
          </h1>
          <p className="text-gray-600">
            Calculate how much you need to save for your perfect getaway
          </p>
        </div>

        {/* Calculator Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-blue-50 p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Plane className="h-6 w-6 mr-2 text-blue-600" />
              Vacation Savings Calculator
            </h2>
            <p className="text-gray-600 mt-1">
              Save enough to travel to your heart's content!
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Years Until Vacation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                After how many years do you wish to take your holiday?
                <span className="ml-2 font-semibold text-gray-900">
                  {yearsUntilVacation} years
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.years.min}
                max={rangeConfig.years.max}
                step={rangeConfig.years.step}
                value={yearsUntilVacation}
                onChange={(e) => setYearsUntilVacation(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{rangeConfig.years.min} year</span>
                <span>{rangeConfig.years.max} years</span>
              </div>
            </div>

            {/* Current Trip Cost */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                How much does this trip cost today?
                <span className="ml-2 font-semibold text-gray-900">
                  {formatCurrency(currentTripCost)}
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.cost.min}
                max={rangeConfig.cost.max}
                step={rangeConfig.cost.step}
                value={currentTripCost}
                onChange={(e) => setCurrentTripCost(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹0</span>
                <span>{formatCurrency(rangeConfig.cost.max)}</span>
              </div>
            </div>

            {/* Current Savings */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                How much money can you set aside now?
                <span className="ml-2 font-semibold text-gray-900">
                  {formatCurrency(currentSavings)}
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.savings.min}
                max={rangeConfig.savings.max}
                step={rangeConfig.savings.step}
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹0</span>
                <span>{formatCurrency(rangeConfig.savings.max)}</span>
              </div>
            </div>

            {/* Inflation Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Expected travel cost inflation rate
                <span className="ml-2 font-semibold text-gray-900">
                  {inflationRate}%
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.inflation.min}
                max={rangeConfig.inflation.max}
                step={rangeConfig.inflation.step}
                value={inflationRate}
                onChange={(e) => setInflationRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{rangeConfig.inflation.min}%</span>
                <span>{rangeConfig.inflation.max}%</span>
              </div>
            </div>

            {/* Expected Return */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Expected return on investments
                <span className="ml-2 font-semibold text-gray-900">
                  {expectedReturn}%
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.returnRate.min}
                max={rangeConfig.returnRate.max}
                step={rangeConfig.returnRate.step}
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{rangeConfig.returnRate.min}%</span>
                <span>{rangeConfig.returnRate.max}%</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Your Vacation Savings Plan
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Future trip cost
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {formatCurrency(futureTripCost)}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Years until vacation
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {yearsUntilVacation} years
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Current savings growth
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {formatCurrency(futureValueOfCurrentSavings)}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Monthly savings needed
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {formatCurrency(Math.abs(monthlySavingsRequired))}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Vacation Planning Tips
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <ChevronDown className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                  <span>
                    Start booking flights 3-6 months in advance for best prices
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                  <span>Consider travel insurance for expensive trips</span>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                  <span>Save 10-15% extra for unexpected expenses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          *Results are projections. Travel costs may vary based on season,
          location, and other factors. Consider setting up automatic transfers
          to reach your savings goal.
        </div>
      </div>
    </div>
  );
};

export default DreamVacationCalculator;
