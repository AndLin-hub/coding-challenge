const data = require('./data.json')
console.log(data["data"][0])


const map = new Map()
map.set("revenue",0)
map.set("expense",0)
map.set("salesdebit",0)
//Assets Debit
map.set("assetsdebitcurrent",0)
map.set("assetsdebitbank",0)
map.set("assetsdebitcurrent_accounts_receivable",0)
//assetss Credit
map.set("assetscreditcurrent",0)
map.set("assetscreditbank",0)
map.set("assetscreditcurrent_accounts_receivable",0)
//Liability Credit
map.set("liabilitycreditcurrent",0)
map.set("liabilitycreditbank",0)
map.set("liabilitycreditcurrent_accounts_receivable",0)
//Liability Debit
map.set("liabilitydebitcurrent",0)
map.set("liabilitydebitbank",0)
map.set("liabilitydebitcurrent_accounts_receivable",0)

data["data"].forEach((account) =>{
    map.set(account["account_category"], map.get(account["account_category"])+account["total_value"])
    map.set(account["account_type"]+account["value_type"],map.get(account["account_type"]+account["value_type"]) + account["total_value"] )
    map.set(account["account_category"]+account["value_type"]+account["account_type"],map.get(account["account_category"]+account["value_type"] +account["account_type"] ) + account["total_value"] )
})

// GPM = Gross Profit Margin
let GPM = map.get("salesdebit") 
GPM = Math.floor((GPM/map.get("revenue"))*100)

// NPM = Net Profit Margin 
let NPM = map.get("revenue") - map.get("expense")
NPM = Math.floor((NPM/map.get("revenue"))*100)

//WCR = Working Capital Ratio
let assetsDebit = map.get("assetsdebitcurrent") +map.get("assetsdebitbank") + map.get("assetsdebitcurrent_accounts_receivable")
let assetsCredit = map.get("assetscreditcurrent") +map.get("assetscreditbank") + map.get("assetscreditcurrent_accounts_receivable")
let liabilityDebit = map.get("liabilitydebitcurrent") +map.get("liabilitydebitbank") + map.get("liabilitydebitcurrent_accounts_receivable")
let liabilityCredit = map.get("liabilitycreditcurrent") +map.get("liabilitycreditbank") + map.get("liabilitycreditcurrent_accounts_receivable")
let assets = assetsDebit - assetsCredit
let liability  = liabilityDebit - liabilityCredit
let WCR = Math.floor((assets/liability) *100)

function commaify(a){
    let temp = a.toString()
    for(let i = temp.length-1;i > 0;i--){
        if((temp.length-1-i)%3==0){
            temp = temp.slice(0,i) + ','  +temp.slice(i,temp.length-1)
        }
    }
    return temp
}



console.log("Revenue: $" + commaify(Math.floor(map.get("revenue"))))
console.log("Expenses: $" + commaify(Math.floor(map.get("expense"))))
console.log("Gross Profit Margin: "  + GPM +"%")
console.log("Net Profit Margin: " + NPM+"%")
console.log("Working Captial Ratio: " + WCR+"%")