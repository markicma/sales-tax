var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  for (entry of salesData) {
    var total = 0;

    for (revenue of entry.sales) {
      total += revenue;
    }

    entry["total"] = total

    for (province in taxRates) {
      if (province === entry.province) {
        entry["tax"] = entry.total * ((salesTaxRates[province]));
      }
    }
  }
}

function salesTaxReport(salesData, taxRates) {
  calculateSalesTax(salesData, taxRates);
  var companies = {};

  for (entry of salesData) {
    if (!companies[entry.name]) {
      companies[entry.name] = {
        totalSales: entry.total,
        totalTaxes: entry.tax
      }
    }
    else {
      companies[entry.name].totalSales += entry.total;
      companies[entry.name].totalTaxes += entry.tax;
    }
  }
  return companies;
}

var results = salesTaxReport(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
