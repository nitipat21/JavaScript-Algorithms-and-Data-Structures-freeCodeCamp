function checkCashRegister(price, cash, cid) {
  // store change amount
  let change = cash - price;

  // clone cid
  let cidClone = JSON.parse(JSON.stringify(cid));

  // create variable to store total cid
  let totalCID = 0;

  // create spend array to track how much each currency is spent
  const spendArray = [];

  // array of each currency unit
  const currency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  
  // sum cid
  for (let i = 0; i < cidClone.length; i++) {
    totalCID += cidClone[i][1]; 
  }

  // check if sum cid less than change
  if (totalCID < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else {
    // loop though cid array to look up the biggest unit that can be used
    for (let j = cidClone.length; j > 0; j--) {
      // create temp array and variable to store how much it spent
      let tempArray = [cidClone[j - 1][0]];
      let spend = 0;

      // while loop until the currency unit is too big for change
      while (currency[j - 1] <= change && cidClone[j - 1][1]> 0) {
        cidClone[j - 1][1] -= currency[j - 1]
        cidClone[j - 1][1] = cidClone[j - 1][1].toFixed(2)
        change -= currency[j - 1]
        change = change.toFixed(2)
        spend += 1;
        
        // break the loop if change it all
        if (change === 0) {
          break;
        }
      }
      // store spend amount to temp array and then store to spend array
      tempArray.push(spend * currency[j - 1]);
      spendArray.push(tempArray);
    }

    // check if out of loop but still have some change left
    if (change > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []} 
    }

    // check if spend all of cid
    if ((cash - price) - (totalCID) == 0) { 
      return {status: "CLOSED", change: cid}
    } else {
      // filter only currency unit that is spent
      let filterUsed = spendArray.filter(item => item[1] > 0);
      
      return {status: "OPEN", change: [...filterUsed]}
    }
  }
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
