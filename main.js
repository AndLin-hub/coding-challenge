const data = require('./data.json')
console.log(data["data"][0])


const map = new Map()
map.set("revenue",0);
map.set("expense",0);
map.set("sales",0);
map.set("debit",0);

data["data"].forEach((account) =>
     map.set(account["account_category"], map.get(account["account_category"])+account["total_value"])
)

