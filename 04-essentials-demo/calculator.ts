type Data = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
}
type Result = {
  year: string;
  amountInvested: number;
  totalWorth: number;
  interestEarned: number;
}
type CalculationResult = Result[] | string

function calculateInvestment(data: Data): CalculationResult {
  const {initialAmount, annualContribution, expectedReturn, duration} = data;
  if (initialAmount < 0){
    return 'Initial investment amount must be 0 or greater.';
  }
  if (duration < 1) {
    return 'Duration must be at least one year.'
  }

  if (expectedReturn < 0){
    return 'Expected return must be at least zero.'
  }

  let total = initialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;

  const annualResults: Result[] = [];

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn);
    totalInterestEarned = total - totalContributions - initialAmount;
    totalContributions = totalContributions + annualContribution;
    total = total + annualContribution;

    annualResults.push({
      year: `Year ${i + 1}`,
      totalWorth: total,
      interestEarned: totalInterestEarned,
      amountInvested: totalContributions
    });
  }
  return annualResults;
}

function printResult(results: CalculationResult): void {
  if ( typeof results === 'string' ) {
    console.log(results);
  } else {
    results.forEach(result => {
      console.log(result.year);
      console.log(`Amount Invested: ${result.amountInvested}`);
      console.log(`Interest Earned: ${result.interestEarned}`);
      console.log(`Total Worth: ${result.totalWorth}`);
    })
  }
}

const data: Data = {
  initialAmount: 5000,
  annualContribution: 1000,
  expectedReturn: 0.08,
  duration: 5
}

const results = calculateInvestment(data);

printResult(results);