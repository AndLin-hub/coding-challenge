const func = require('./main')
const data = require('./dataTest.json')
const map = func.MappingOut(data)
const GPM = func.CalculateGPM(map)
const WCR = func.CalculateWCR(map)
const NPM = func.CalculateNPM(map)

test("Properly acquire revenue",()=>{
    expect(map.get("revenue")).toBe(85000)
})

test("Properly acquire expenses",()=>{
    expect(map.get("expense")).toBe(52700)
})

test("Properly acquire Gross Profit Margin",()=>{
    expect(GPM).toBe(Math.floor((2700/85000)*100))
})

test("Properly acquire assets debit",()=>{
    expect(map.get("assetsdebitcurrent") +map.get("assetsdebitbank") + map.get("assetsdebitcurrent_accounts_receivable")).toBe(12000)
})

test("Properly acquire assets credit",()=>{
    expect(map.get("assetscreditcurrent") +map.get("assetscreditbank") + map.get("assetscreditcurrent_accounts_receivable")).toBe(7000)
})

test("Properly acquire assets",()=>{
    let assetsDebit = map.get("assetsdebitcurrent") +map.get("assetsdebitbank") + map.get("assetsdebitcurrent_accounts_receivable")
    let assetsCredit = map.get("assetscreditcurrent") +map.get("assetscreditbank") + map.get("assetscreditcurrent_accounts_receivable")
    let assets = assetsDebit - assetsCredit
    expect(assets).toBe(5000)
})

test("Properly acquire liability debit",()=>{
    expect(map.get("liabilitydebitcurrent") +map.get("liabilitydebitbank") + map.get("liabilitydebitcurrent_accounts_receivable")).toBe(12000)
})

test("Properly acquire liability credit",()=>{
    expect(map.get("liabilitycreditcurrent") +map.get("liabilitycreditbank") + map.get("liabilitycreditcurrent_accounts_receivable")).toBe(7000)
})

test("Properly acquire liability",()=>{
    let liabilityDebit = map.get("liabilitydebitcurrent") +map.get("liabilitydebitbank") + map.get("liabilitydebitcurrent_accounts_receivable")
    let liabilityCredit = map.get("liabilitycreditcurrent") +map.get("liabilitycreditbank") + map.get("liabilitycreditcurrent_accounts_receivable")
    let liability = liabilityDebit - liabilityCredit
    expect(liability).toBe(5000)
})

test("Properly acquire Net Profit Margin",()=>{
    expect(NPM).toBe(38)
})

test("Properly acquire Working Cost Ratio",()=>{
    expect(WCR).toBe(100)
})

