import { useState } from "react";
import {
  Car,
  Calculator,
  ChevronDown,
  DollarSign,
  Calendar,
  Percent,
  TrendingUp,
  Info,
} from "lucide-react";

const DreamCarCalculator = () => {
  // Configuration for ranges
  const rangeConfig = {
    years: { min: 0, max: 20, step: 1, defaultValue: 5 },
    cost: { min: 100000, max: 10000000, step: 50000, defaultValue: 1000000 },
    loanPercent: { min: 0, max: 100, step: 5, defaultValue: 20 },
    savings: { min: 0, max: 10000000, step: 10000, defaultValue: 0 },
    inflation: { min: 0, max: 20, step: 0.5, defaultValue: 7 },
    returnRate: { min: 0, max: 30, step: 0.5, defaultValue: 12 },
  };

  // State using range config
  const [yearsUntilPurchase, setYearsUntilPurchase] = useState(
    rangeConfig.years.defaultValue
  );
  const [currentCarCost, setCurrentCarCost] = useState(
    rangeConfig.cost.defaultValue
  );
  const [loanPercentage, setLoanPercentage] = useState(
    rangeConfig.loanPercent.defaultValue
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
  const futureCost =
    currentCarCost * Math.pow(1 + inflationRate / 100, yearsUntilPurchase);
  const loanAmount = (futureCost * loanPercentage) / 100;
  const downPayment = futureCost - loanAmount;
  const futureValueOfCurrentSavings =
    currentSavings * Math.pow(1 + expectedReturn / 100, yearsUntilPurchase);
  const monthlySavingsRequired =
    ((downPayment - futureValueOfCurrentSavings) * (expectedReturn / 1200)) /
    (Math.pow(1 + expectedReturn / 1200, yearsUntilPurchase * 12) - 1);

  // Format currency with Indian numbering system
  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Crore`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakh`;
    }
    return `₹${amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  // Calculate estimated EMI (simplified calculation)
  const calculateEMI = () => {
    const loanTenure = 5; // 5 years loan tenure
    const interestRate = 8.5; // 8.5% interest rate
    const monthlyRate = interestRate / 1200;
    return (
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure * 12)) /
      (Math.pow(1 + monthlyRate, loanTenure * 12) - 1)
    );
  };

  const emi = calculateEMI();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-26">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
            <Calculator className="h-8 w-8 mr-2 text-blue-600" />
            DREAM CAR PLANNER
          </h1>
          <p className="text-gray-600">
            Calculate how much you need to save to buy your dream car
          </p>
        </div>

        {/* Calculator Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-blue-50 p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Car className="h-6 w-6 mr-2 text-blue-600" />
              Dream Car Planning
            </h2>
            <p className="text-gray-600 mt-1">
              Plan your purchase with our comprehensive calculator
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Years Until Purchase */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                After how many years do you plan to buy your dream car?
                <span className="ml-2 font-semibold text-gray-900">
                  {yearsUntilPurchase}{" "}
                  {yearsUntilPurchase === 1 ? "year" : "years"}
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.years.min}
                max={rangeConfig.years.max}
                step={rangeConfig.years.step}
                value={yearsUntilPurchase}
                onChange={(e) => setYearsUntilPurchase(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Now</span>
                <span>{rangeConfig.years.max} years</span>
              </div>
            </div>

            {/* Current Car Cost */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                Current cost of your dream car
                <span className="ml-2 font-semibold text-gray-900">
                  {formatCurrency(currentCarCost)}
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.cost.min}
                max={rangeConfig.cost.max}
                step={rangeConfig.cost.step}
                value={currentCarCost}
                onChange={(e) => setCurrentCarCost(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{formatCurrency(rangeConfig.cost.min)}</span>
                <span>{formatCurrency(rangeConfig.cost.max)}</span>
              </div>
            </div>

            {/* Loan Percentage */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                <Percent className="h-4 w-4 mr-1" />
                What percentage would you finance with a car loan?
                <span className="ml-2 font-semibold text-gray-900">
                  {loanPercentage}%
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.loanPercent.min}
                max={rangeConfig.loanPercent.max}
                step={rangeConfig.loanPercent.step}
                value={loanPercentage}
                onChange={(e) => setLoanPercentage(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0% (Full payment)</span>
                <span>100% (Full loan)</span>
              </div>
            </div>

            {/* Current Savings */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                Current savings for car purchase
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
              <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                Expected car price inflation rate
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
              <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                <Percent className="h-4 w-4 mr-1" />
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
          <div className="mt-8 bg-blue-50 rounded-lg p-6 mx-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Car className="h-5 w-5 mr-2 text-blue-600" />
              Your Dream Car Plan
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Years until purchase
                  </span>
                  <span className="font-medium">
                    {yearsUntilPurchase}{" "}
                    {yearsUntilPurchase === 1 ? "year" : "years"}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600 flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Future car price
                  </span>
                  <span className="font-medium">
                    {formatCurrency(futureCost)}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600 flex items-center">
                    <Percent className="h-4 w-4 mr-1" />
                    Loan amount ({loanPercentage}%)
                  </span>
                  <span className="font-medium">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600 flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Down payment needed
                  </span>
                  <span className="font-medium">
                    {formatCurrency(downPayment)}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600 flex items-center">
                    <Calculator className="h-4 w-4 mr-1" />
                    Estimated monthly EMI
                  </span>
                  <span className="font-medium">{formatCurrency(emi)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600 flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Monthly savings needed
                  </span>
                  <span className="font-medium text-blue-600">
                    {formatCurrency(Math.abs(monthlySavingsRequired))}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                <Info className="h-4 w-4 mr-2 text-blue-500" />
                Tips for Buying Your Dream Car
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  • Consider total cost of ownership (insurance, maintenance,
                  fuel)
                </li>
                <li>• Compare loan rates from multiple banks</li>
                <li>• A larger down payment reduces your EMI burden</li>
                {yearsUntilPurchase > 3 && (
                  <li>
                    • With {yearsUntilPurchase} years to go, consider equity
                    investments for higher returns
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Car Loan Information
            </h3>
            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex justify-between">
                <span>Typical interest rates</span>
                <span className="font-medium">7.5% - 12% p.a.</span>
              </div>
              <div className="flex justify-between">
                <span>Common tenure</span>
                <span className="font-medium">1-7 years</span>
              </div>
              <div className="flex justify-between">
                <span>Minimum down payment</span>
                <span className="font-medium">15-20%</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Investment Options
            </h3>
            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex justify-between">
                <span>Short-term (1-3 years)</span>
                <span className="font-medium">FDs, Debt Funds</span>
              </div>
              <div className="flex justify-between">
                <span>Medium-term (3-5 years)</span>
                <span className="font-medium">Hybrid Funds</span>
              </div>
              <div className="flex justify-between">
                <span>Long-term (5+ years)</span>
                <span className="font-medium">Equity Funds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              About This Calculator
            </h3>
            <p className="text-gray-600 text-sm">
              Our car purchase calculator helps you plan for your dream vehicle
              by accounting for inflation, loan options, and your current
              savings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Car Buying Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                >
                  <ChevronDown className="h-4 w-4 mr-1" /> Car Loan Comparison
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                >
                  <ChevronDown className="h-4 w-4 mr-1" /> Insurance Calculator
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Need Help?
            </h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
              Talk to a Car Loan Expert
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg text-xs text-yellow-800">
          <p>
            <strong>Disclaimer:</strong> The calculations are estimates based on
            your inputs. Actual car prices, loan rates, and investment returns
            may vary. EMI calculation assumes 8.5% interest rate and 5-year
            tenure for illustration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DreamCarCalculator;
