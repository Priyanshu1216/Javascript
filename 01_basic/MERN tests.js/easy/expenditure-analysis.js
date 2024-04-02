/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let newArr = [];
  if (transactions.length == 0) {
    return newArr;
  } else {
    let newObj = {
      category: transactions[0]["category"],
      totalSpent: transactions[0]["price"],
    };
    newArr.push(newObj);
    for (let i = 1; i < transactions.length; i++) {
      let newObj1 = {};
      let added = true;
      newObj1["category"] = transactions[i]["category"];
      newObj1["totalSpent"] = transactions[i]["price"];
      for (let j = 0; j < newArr.length; j++) {
        if (newArr[j]["category"] == newObj1["category"]) {
          newArr[j]["totalSpent"] += newObj1["totalSpent"];
          added = false;
          break;
        }
      }
      if (added) {
        newArr.push(newObj1);
      }
    }
    return newArr;
  }
}

module.exports = calculateTotalSpentByCategory;
