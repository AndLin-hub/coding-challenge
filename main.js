const data = require('./data.json')
console.log(data["data"][0])


const map = new Map()
map.set("revenue",0);
map.set("expense",0);
map.set("sales",0)
map.set("debit",0)

data["data"].forEach((account) =>{
    map.set(account["account_category"], map.get(account["account_category"])+account["total_value"])
    map.set(account["account_type"],map.get(account["account_type"]) + account["total_value"] )
    map.set(account["value_type"],map.get(account["value_type"]) + account["total_value"] )
})

// GPM = Gross Profit Margin
let GPM = map.get("sales") + map.get("debit")
GPM = GPM/map.get("revenue")

// NPM = Net Profit Margin 
let NPM = map.get("revenue") - map.get("expense")
NPM = NPM/map.get("revenue")

console.log("Revenue: $" + map.get("revenue"))
console.log("Expenses: $" + map.get("expense"))
console.log("Gross Profit Margin: "  + GPM )
console.log("Net Profit Margin: " +NPM)
console.log("Working Captial Ratio: " )