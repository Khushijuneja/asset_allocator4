import { useState } from "react";
import { Sunset, Calculator, ChevronDown } from "lucide-react";

const RetirementCalculator = () => {
  // Configuration for ranges
  const rangeConfig = {
    currentAge: { min: 18, max: 70, step: 1, defaultValue: 25 },
    retirementAge: { min: 40, max: 80, step: 1, defaultValue: 55 },
    lifeExpectancy: { min: 60, max: 100, step: 1, defaultValue: 85 },
    inflationRate: { min: 0, max: 20, step: 0.5, defaultValue: 7 },
    postRetirementReturn: { min: 0, max: 20, step: 0.5, defaultValue: 9 },
    currentMonthlyExpense: {
      min: 0,
      max: 500000,
      step: 1000,
      defaultValue: 30000,
    },
    currentSavings: { min: 0, max: 100000000, step: 10000, defaultValue: 0 },
    existingInvestmentReturn: { min: 0, max: 30, step: 0.5, defaultValue: 0 },
    newInvestmentReturn: { min: 0, max: 30, step: 0.5, defaultValue: 12 },
  };

  // State management
  const [currentAge, setCurrentAge] = useState(
    rangeConfig.currentAge.defaultValue
  );
  const [retirementAge, setRetirementAge] = useState(
    rangeConfig.retirementAge.defaultValue
  );
  const [lifeExpectancy, setLifeExpectancy] = useState(
    rangeConfig.lifeExpectancy.defaultValue
  );
  const [inflationRate, setInflationRate] = useState(
    rangeConfig.inflationRate.defaultValue
  );
  const [postRetirementReturn, setPostRetirementReturn] = useState(
    rangeConfig.postRetirementReturn.defaultValue
  );
  const [currentMonthlyExpense, setCurrentMonthlyExpense] = useState(
    rangeConfig.currentMonthlyExpense.defaultValue
  );
  const [currentSavings, setCurrentSavings] = useState(
    rangeConfig.currentSavings.defaultValue
  );
  const [existingInvestmentReturn, setExistingInvestmentReturn] = useState(
    rangeConfig.existingInvestmentReturn.defaultValue
  );
  const [newInvestmentReturn, setNewInvestmentReturn] = useState(
    rangeConfig.newInvestmentReturn.defaultValue
  );

  // Calculations
  const workingYears = retirementAge - currentAge;
  const retirementYears = lifeExpectancy - retirementAge;

  // Future monthly expense at retirement
  const futureMonthlyExpense =
    currentMonthlyExpense * Math.pow(1 + inflationRate / 100, workingYears);

  // Corpus needed at retirement
  const corpusNeeded =
    futureMonthlyExpense *
    12 *
    ((1 - Math.pow(1 + postRetirementReturn / 100, -retirementYears)) /
      (postRetirementReturn / 100)) *
    (1 + postRetirementReturn / 100);

  // Future value of current savings
  const futureValueOfCurrentSavings =
    currentSavings * Math.pow(1 + existingInvestmentReturn / 100, workingYears);

  // Monthly investment needed
  const monthlyInvestmentNeeded =
    ((corpusNeeded - futureValueOfCurrentSavings) *
      (newInvestmentReturn / 1200)) /
    (Math.pow(1 + newInvestmentReturn / 1200, workingYears * 12) - 1);

  // Format currency with Indian numbering system
  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Crore`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakh`;
    }
    return `₹${amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-26">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
            <Calculator className="h-8 w-8 mr-2 text-amber-600" />
            RETIREMENT PLANNER
          </h1>
          <p className="text-gray-600">
            Plan for your 'golden years' from today!
          </p>
        </div>

        {/* Calculator Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-amber-50 p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Sunset className="h-6 w-6 mr-2 text-amber-600" />
              Retirement Planning
            </h2>
            <p className="text-gray-600 mt-1">
              Calculate the investment needed for a comfortable retirement
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Current Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What is your current age?
                <span className="ml-2 font-semibold text-gray-900">
                  {currentAge} years
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.currentAge.min}
                max={rangeConfig.currentAge.max}
                step={rangeConfig.currentAge.step}
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{rangeConfig.currentAge.min} years</span>
                <span>{rangeConfig.currentAge.max} years</span>
              </div>
            </div>

            {/* Retirement Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                At what age do you wish to retire?
                <span className="ml-2 font-semibold text-gray-900">
                  {retirementAge} years
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.retirementAge.min}
                max={rangeConfig.retirementAge.max}
                step={rangeConfig.retirementAge.step}
                value={retirementAge}
                onChange={(e) => setRetirementAge(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{rangeConfig.retirementAge.min} years</span>
                <span>{rangeConfig.retirementAge.max} years</span>
              </div>
            </div>

            {/* Life Expectancy */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Life expectancy age
                <span className="ml-2 font-semibold text-gray-900">
                  {lifeExpectancy} years
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.lifeExpectancy.min}
                max={rangeConfig.lifeExpectancy.max}
                step={rangeConfig.lifeExpectancy.step}
                value={lifeExpectancy}
                onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{rangeConfig.lifeExpectancy.min} years</span>
                <span>{rangeConfig.lifeExpectancy.max} years</span>
              </div>
            </div>

            {/* Inflation Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Expected inflation rate
                <span className="ml-2 font-semibold text-gray-900">
                  {inflationRate}%
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.inflationRate.min}
                max={rangeConfig.inflationRate.max}
                step={rangeConfig.inflationRate.step}
                value={inflationRate}
                onChange={(e) => setInflationRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{rangeConfig.inflationRate.min}%</span>
                <span>{rangeConfig.inflationRate.max}%</span>
              </div>
            </div>

            {/* Post Retirement Return */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Post retirement interest rate
                <span className="ml-2 font-semibold text-gray-900">
                  {postRetirementReturn}%
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.postRetirementReturn.min}
                max={rangeConfig.postRetirementReturn.max}
                step={rangeConfig.postRetirementReturn.step}
                value={postRetirementReturn}
                onChange={(e) =>
                  setPostRetirementReturn(Number(e.target.value))
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{rangeConfig.postRetirementReturn.min}%</span>
                <span>{rangeConfig.postRetirementReturn.max}%</span>
              </div>
            </div>

            {/* Current Monthly Expense */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                If you were to retire today, monthly amount needed
                <span className="ml-2 font-semibold text-gray-900">
                  {formatCurrency(currentMonthlyExpense)}
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.currentMonthlyExpense.min}
                max={rangeConfig.currentMonthlyExpense.max}
                step={rangeConfig.currentMonthlyExpense.step}
                value={currentMonthlyExpense}
                onChange={(e) =>
                  setCurrentMonthlyExpense(Number(e.target.value))
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹0</span>
                <span>
                  {formatCurrency(rangeConfig.currentMonthlyExpense.max)}
                </span>
              </div>
            </div>

            {/* Current Savings */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Current retirement savings
                <span className="ml-2 font-semibold text-gray-900">
                  {formatCurrency(currentSavings)}
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.currentSavings.min}
                max={rangeConfig.currentSavings.max}
                step={rangeConfig.currentSavings.step}
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹0</span>
                <span>{formatCurrency(rangeConfig.currentSavings.max)}</span>
              </div>
            </div>

            {/* Existing Investment Return */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Return on existing investments
                <span className="ml-2 font-semibold text-gray-900">
                  {existingInvestmentReturn}%
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.existingInvestmentReturn.min}
                max={rangeConfig.existingInvestmentReturn.max}
                step={rangeConfig.existingInvestmentReturn.step}
                value={existingInvestmentReturn}
                onChange={(e) =>
                  setExistingInvestmentReturn(Number(e.target.value))
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{rangeConfig.existingInvestmentReturn.min}%</span>
                <span>{rangeConfig.existingInvestmentReturn.max}%</span>
              </div>
            </div>

            {/* New Investment Return */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Expected return on new investments
                <span className="ml-2 font-semibold text-gray-900">
                  {newInvestmentReturn}%
                </span>
              </label>
              <input
                type="range"
                min={rangeConfig.newInvestmentReturn.min}
                max={rangeConfig.newInvestmentReturn.max}
                step={rangeConfig.newInvestmentReturn.step}
                value={newInvestmentReturn}
                onChange={(e) => setNewInvestmentReturn(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{rangeConfig.newInvestmentReturn.min}%</span>
                <span>{rangeConfig.newInvestmentReturn.max}%</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Your Retirement Plan
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Working years remaining
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {workingYears} years
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Retirement years
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {retirementYears} years
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Future monthly expense at retirement
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {formatCurrency(futureMonthlyExpense)}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Corpus needed at retirement
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {formatCurrency(corpusNeeded)}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Future value of current savings
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {formatCurrency(futureValueOfCurrentSavings)}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Monthly investment needed
                  </h3>
                  <p className="text-2xl font-semibold text-gray-900">
                    {formatCurrency(Math.abs(monthlyInvestmentNeeded))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Us */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              About Retirement Planning
            </h3>
            <p className="text-gray-600 text-sm">
              Retirement planning is crucial for maintaining your lifestyle
              after you stop working. This calculator helps you estimate how
              much you need to save to enjoy your golden years comfortably.
            </p>
          </div>

          {/* Important Links */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Retirement Strategies
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-amber-600 hover:text-amber-800 text-sm flex items-center"
                >
                  <ChevronDown className="h-4 w-4 mr-1" /> Pension Plans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-600 hover:text-amber-800 text-sm flex items-center"
                >
                  <ChevronDown className="h-4 w-4 mr-1" /> Annuity Options
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Need Retirement Advice?
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              Contact our retirement planning specialists
            </p>
            <a
              href="mailto:retirement@financialplanner.com"
              className="text-amber-600 hover:text-amber-800 text-sm"
            >
              retirement@financialplanner.com
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center text-xs text-gray-500">
          *Results are projections based on your inputs. Actual returns may
          vary. This calculator doesn't account for taxes. Consider consulting a
          financial advisor for personalized retirement planning.
        </div>
      </div>
    </div>
  );
};

export default RetirementCalculator;
