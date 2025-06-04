import { useState } from "react";
import { TrendingUp, Calendar, Percent, DollarSign, Info } from "lucide-react";
import FinancialSidebar from "../../Components/Sidebar/FinancialSidebar";

const SIPCalculator = () => {
  // Configuration for ranges
  const rangeConfig = {
    investment: { min: 500, max: 100000, step: 500, defaultValue: 5000 },
    rate: { min: 1, max: 30, step: 0.5, defaultValue: 12 },
    years: { min: 1, max: 30, step: 1, defaultValue: 5 },
  };

  // State using range config
  const [monthlyInvestment, setMonthlyInvestment] = useState(
    rangeConfig.investment.defaultValue
  );
  const [expectedReturn, setExpectedReturn] = useState(
    rangeConfig.rate.defaultValue
  );
  const [investmentDuration, setInvestmentDuration] = useState(
    rangeConfig.years.defaultValue
  );

  // Calculate future value of SIP
  const calculateFutureValue = () => {
    const months = investmentDuration * 12;
    const monthlyRate = expectedReturn / 12 / 100;
    return (
      monthlyInvestment *
      (((Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate)) /
        monthlyRate)
    );
  };

  const futureValue = calculateFutureValue();
  const totalInvestment = monthlyInvestment * investmentDuration * 12;
  const wealthGained = futureValue - totalInvestment;

  // Format currency with Indian numbering system
  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    }
    return `₹${amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  return (
    <div className="flex justify-center items-center gap-5">
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-26">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              SIP CALCULATOR
            </h1>
            <p className="text-gray-600">
              Calculate how much your regular investments can grow over time
            </p>
          </div>

          {/* Calculator Content */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-blue-50 p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
                Systematic Investment Plan Calculator
              </h2>
              <p className="text-gray-600 mt-1">
                Discover the power of regular investing with compounding returns
              </p>
            </div>

            <div className="p-6 space-y-6">
              {/* Monthly Investment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  Monthly Investment Amount
                  <span className="ml-2 font-semibold text-gray-900">
                    {formatCurrency(monthlyInvestment)}
                  </span>
                </label>
                <input
                  type="range"
                  min={rangeConfig.investment.min}
                  max={rangeConfig.investment.max}
                  step={rangeConfig.investment.step}
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{formatCurrency(rangeConfig.investment.min)}</span>
                  <span>{formatCurrency(rangeConfig.investment.max)}</span>
                </div>
              </div>

              {/* Expected Return Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <Percent className="h-4 w-4 mr-1" />
                  Expected Annual Return Rate
                  <span className="ml-2 font-semibold text-gray-900">
                    {expectedReturn}%
                  </span>
                </label>
                <input
                  type="range"
                  min={rangeConfig.rate.min}
                  max={rangeConfig.rate.max}
                  step={rangeConfig.rate.step}
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{rangeConfig.rate.min}%</span>
                  <span>{rangeConfig.rate.max}%</span>
                </div>
              </div>

              {/* Investment Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Investment Duration
                  <span className="ml-2 font-semibold text-gray-900">
                    {investmentDuration}{" "}
                    {investmentDuration === 1 ? "year" : "years"}
                  </span>
                </label>
                <input
                  type="range"
                  min={rangeConfig.years.min}
                  max={rangeConfig.years.max}
                  step={rangeConfig.years.step}
                  value={investmentDuration}
                  onChange={(e) =>
                    setInvestmentDuration(Number(e.target.value))
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{rangeConfig.years.min} year</span>
                  <span>{rangeConfig.years.max} years</span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="mt-8 bg-blue-50 rounded-lg p-6 mx-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Your SIP Investment Results
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600 flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Monthly Investment
                    </span>
                    <span className="font-medium">
                      {formatCurrency(monthlyInvestment)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Investment Period
                    </span>
                    <span className="font-medium">
                      {investmentDuration}{" "}
                      {investmentDuration === 1 ? "year" : "years"}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600 flex items-center">
                      <Percent className="h-4 w-4 mr-1" />
                      Expected Return Rate
                    </span>
                    <span className="font-medium">{expectedReturn}% p.a.</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600 flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Total Amount Invested
                    </span>
                    <span className="font-medium">
                      {formatCurrency(totalInvestment)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      Estimated Returns
                    </span>
                    <span className="font-medium text-green-600">
                      {formatCurrency(wealthGained)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600 flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Total Future Value
                    </span>
                    <span className="font-medium text-blue-600">
                      {formatCurrency(futureValue)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                  <Info className="h-4 w-4 mr-2 text-blue-500" />
                  Investment Insights
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    • Your investment could grow{" "}
                    {(futureValue / totalInvestment - 1).toFixed(1)}x in{" "}
                    {investmentDuration} years
                  </li>
                  <li>
                    • Returns constitute{" "}
                    {((wealthGained / futureValue) * 100).toFixed(1)}% of your
                    total corpus
                  </li>
                  <li>
                    • You're investing a total of{" "}
                    {formatCurrency(totalInvestment)} over {investmentDuration}{" "}
                    years
                  </li>
                  {investmentDuration >= 10 && (
                    <li>
                      • With long-term investing, consider equity funds for
                      potentially higher returns
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* SIP Benefits Section */}
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-blue-50 p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Why Choose SIP?
              </h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">
                  Rupee Cost Averaging
                </h3>
                <p className="text-sm text-gray-600">
                  SIP helps average out purchase costs by buying more units when
                  prices are low and fewer when prices are high.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">
                  Power of Compounding
                </h3>
                <p className="text-sm text-gray-600">
                  Even small amounts invested regularly can grow significantly
                  over time due to compounding returns.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">
                  Financial Discipline
                </h3>
                <p className="text-sm text-gray-600">
                  Automates savings and instills financial discipline by making
                  investing a regular habit.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Flexibility</h3>
                <p className="text-sm text-gray-600">
                  Start with as little as ₹500 per month and increase/decrease
                  amounts as your situation changes.
                </p>
              </div>
            </div>
          </div>

          {/* Suggested Funds */}
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-blue-50 p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Suggested Funds Based on Your Duration
              </h2>
            </div>
            <div className="p-6">
              {investmentDuration < 3 ? (
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Short-Term (1-3 years)
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Consider debt funds or hybrid funds for capital preservation
                    with moderate returns.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ultra Short Duration Funds</li>
                    <li>• Low Duration Funds</li>
                    <li>• Conservative Hybrid Funds</li>
                  </ul>
                </div>
              ) : investmentDuration < 5 ? (
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Medium-Term (3-5 years)
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Balanced advantage or dynamic asset allocation funds can
                    provide better returns while managing risk.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Balanced Advantage Funds</li>
                    <li>• Multi Asset Allocation Funds</li>
                    <li>• Equity Savings Funds</li>
                  </ul>
                </div>
              ) : (
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Long-Term (5+ years)
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Equity funds can potentially deliver higher returns over
                    longer periods, helping beat inflation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Large Cap Funds</li>
                    <li>• Flexi Cap Funds</li>
                    <li>• Index Funds</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg text-xs text-yellow-800">
            <p>
              <strong>Disclaimer:</strong> The calculations are based on the
              inputs provided and assume constant returns. Mutual fund
              investments are subject to market risks. Past performance is not
              indicative of future returns. Please consult with your financial
              advisor before making any investment decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;
