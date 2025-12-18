1.// Total number of transactions
db.transactions.countDocuments()
6362620

//Total Fraud Transaction
db.transactions.countDocuments({isFraud :1})
8213

//Total Non Fraud Transactions
db.transactions.countDocuments({isFraud:0})
6354407

// Distinct Fraud Labels
db.transactions.distinct("isFraud")
[ 0, 1 ]

// Descriptive Analysis on Transaction Amount 
db.transactions.aggregate([
  {$group : { _id : null,
						maxAmount : {$max : "$amount"},
						minAmount : {$min : "$amount"},
						avgAmount : {$avg : "$amount"}
						}
	}
])

{
  _id: null,
  maxAmount: 92445516.64,
  minAmount: 0,
  avgAmount: 179861.90354913071
}


// Average Fraud Transaction Amount
db.transactions.aggregate([
  {$match : {isFraud : 1}},
  {$group : {
						_id : null, 
						avgFraudAmount : {$avg : "$amount"}
}}
])

{
  _id: null,
  avgFraudAmount: 1467967.2991403872
}


// Average Non-Fraud Transaction Amnount
db.transactions.aggregate([
  {$match : {isFraud : 0}},
  {$group : {
						_id : null, 
						avgFraudAmount : {$avg : "$amount"}
}}
])

{
  _id: null,
  avgFraudAmount: 178197.04172740743
}

// Highest Fraud Transaction
db.transactions.find({isFraud : 1}).sort({amount : -1}).limit(1)

{
  _id: ObjectId('69431fa8ea7fc39feb0f3a6a'),
  step: 4,
  type: 'TRANSFER',
  amount: 10000000,
  nameOrig: 'C7162498',
  oldbalanceOrg: 12930418.44,
  newbalanceOrig: 2930418.44,
  nameDest: 'C945327594',
  oldbalanceDest: 0,
  newbalanceDest: 0,
  isFraud: 1,
  isFlaggedFraud: 0,
  RiskLevel: 'High',
  balanceDiffOrig: 10000000,
  balanceDiffDest: 0
}


// Lowest Fraud Transaction
db.transactions.find({isFraud : 0}).sort({amount : 1}).limit(1)

{
  _id: ObjectId('69431fc7ea7fc39feb576dc6'),
  step: 332,
  type: 'CASH_OUT',
  amount: 0.01,
  nameOrig: 'C1496340830',
  oldbalanceOrg: 0,
  newbalanceOrig: 0,
  nameDest: 'C554562342',
  oldbalanceDest: 262792.79,
  newbalanceDest: 262792.8,
  isFraud: 0,
  isFlaggedFraud: 0,
  RiskLevel: 'Low',
  balanceDiffOrig: 0,
  balanceDiffDest: 0.010000000009313226
}


// Count Frauds above 500
db.transactions.countDocuments({isFraud : 1,
				amount : {$gt : 500}
})

8161

// Fraud Count Per Step
db.transactions.aggregate([
  { $match: { isFraud: 1 } },
  {
    $group: {
      _id: "$step",
      fraudCount: { $sum: 1 }
    }
  }
])

{
  _id: 155,
  fraudCount: 8
}
{
  _id: 441,
  fraudCount: 10
}
{
  _id: 663,
  fraudCount: 10
}
{
  _id: 398,
  fraudCount: 26
}
{
  _id: 362,
  fraudCount: 20
}
{
  _id: 22,
  fraudCount: 23
}
{
  _id: 131,
  fraudCount: 16
}
Type "it" for more



// Transactions with negative balance difference
db.transactions.countDocuments({balanceDiffOrig : {$lt : 0}})
1399253

// Fraud Transactions by type
db.transactions.aggregate([
{$match : {isFraud : 1}},
  {$group : {
						_id : "$type",
						count : {$sum : 1}}}
])
{
  _id: 'TRANSFER',
  count: 4097
}
{
  _id: 'CASH_OUT',
  count: 4116
}


//Number of fraud with zero balance
db.transactions.aggregate([
  {
    $group: {
      _id: "$isFraud",
      avgAmount: { $avg: "$amount" }
    }
  }
])
{
  _id: 0,
  avgAmount: 178197.04172740743
}
{
  _id: 1,
  avgAmount: 1467967.2991403872
}


// Fraud rate by amount bucket
db.transactions.aggregate([
  {
    $bucket: {
      groupBy: "$amount",
      boundaries: [0, 100, 500, 1000, 5000, 10000],
      default: "Other",
      output: {
        total: { $sum: 1 },
        frauds: { $sum: "$isFraud" }
      }
    }
  },
  {
    $project: {
      fraudRate: { $divide: ["$frauds", "$total"] }
    }
  }
])

{
  _id: 0,
  fraudRate: 0.0012763241863433313
}

{
  _id: 100,
  fraudRate: 0.0005972876115522451
}
{
  _id: 500,
  fraudRate: 0.00008378133072680304
}

{
  _id: 1000,
  fraudRate: 0.00018578727357176033
}
{
  _id: 5000,
  fraudRate: 0.0001987727496268727
}
{
  _id: 'Other',
  fraudRate: 0.001563048778349834
}


/Top 3 origin accounts with most transactions
db.transactions.aggregate([
  { $group: { _id: "$nameOrig", txnCount: { $sum: 1 } } },
  { $sort: { txnCount: -1 } },
  { $limit: 3 }
])

{
  _id: 'C1832548028',
  txnCount: 3
}
{
  _id: 'C1677795071',
  txnCount: 3
}
{
  _id: 'C1976208114',
  txnCount: 3
}




//Fraud count by transaction type
db.transactions.aggregate([
  {
$group : {
				_id : "$type",
			fraudCount : {$sum : "$isFraud"}
}}
])


{
  _id: 'PAYMENT',
  fraudCount: 0
}
{
  _id: 'DEBIT',
  fraudCount: 0
}
{
  _id: 'CASH_OUT',
  fraudCount: 4116
}
{
  _id: 'TRANSFER',
  fraudCount: 4097
}
{
  _id: 'CASH_IN',
  fraudCount: 0
}



// Flagged vs actual fraud comparison
db.transactions.aggregate([
  {$group:{
				_id : null,
				totalFraud : {$sum : "$isFraud"},
				flaggedFraud : {$sum : "$isFlaggedFraud"}
}
}
])

{
  _id: null,
  totalFraud: 8213,
  flaggedFraud: 16
}



// Transaction flagged as fraud but actually non - fraud
db.transactions.countDocuments({
isFlaggedFraud : 1,
isFraud : 0
})


0


//Fraud transactions with zero destination balance before transfer
db.transactions.countDocuments({
  isFraud: 1,
  oldbalanceDest: 0
})

5351

//Steps with at least one fraud transaction
db.transactions.aggregate([
  { $match: { isFraud: 1 } },
  { $group: { _id: "$step" } },
  { $count: "fraudSteps" }
])

{
  fraudSteps: 741
}



// Top 5 destination accounts receiving fraud transactions

db.transactions.aggregate([
  { $match: { isFraud: 1 } },
  {
    $group: {
      _id: "$nameDest",
      fraudTxnCount: { $sum: 1 }
    }
  },
  { $sort: { fraudTxnCount: -1 } },
  { $limit: 5 }
])


{
  _id: 'C475338087',
  fraudTxnCount: 2
}
{
  _id: 'C1780714769',
  fraudTxnCount: 2
}
{
  _id: 'C1827219533',
  fraudTxnCount: 2
}
{
  _id: 'C410033330',
  fraudTxnCount: 2
}
{
  _id: 'C643624257',
  fraudTxnCount: 2
}




// Average balance difference (balanceDiffOrig) for frauds
db.transactions.aggregate([
  { $match: { isFraud: 1 } },
  {
    $group: {
      _id: null,
      avgBalanceDiff: { $avg: "$balanceDiffOrig" }
    }
  }
])

{
  _id: null,
  avgBalanceDiff: 1457274.9738755631
}


// Count of fraud transactions per origin account
db.transactions.aggregate([
  { $match: { isFraud: 1 } },
  {
    $group: {
      _id: "$nameOrig",
      fraudCount: { $sum: 1 }
    }
  },
  { $sort: { fraudCount: -1 } },
  { $limit: 5 }
])


{
  _id: 'C672095034',
  fraudCount: 1
}
{
  _id: 'C660614375',
  fraudCount: 1
}
{
  _id: 'C211624085',
  fraudCount: 1
}
{
  _id: 'C1465621958',
  fraudCount: 1
}
{
  _id: 'C610113599',
  fraudCount: 1
}