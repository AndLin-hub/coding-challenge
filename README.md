## OverView
The repo contained an script to calculate metrics: Revenue, Expenses, Gross Profit Margins, Net Profit Margins, Working Capital Ratio. The main javascript will be runned from the external file "data.json". 

## Calculations

Use the formulas below to calculate your values:

### Revenue

This should be calculated by adding up all the values under `total_value` where the `account_category` field is set to `revenue`

### Expenses

This should be calculated by adding up all the values under `total_value` where the `account_category` field is set to `expense`

### Gross Profit Margin

This is calculated in two steps: first by adding all the `total_value` fields where the `account_type` is set to `sales` and the `value_type` is set to `debit`; then dividing that by the `revenue` value calculated earlier to generate a percentage value.

### Net Profit Margin

This metric is calculated by subtracting the `expenses` value from the `revenue` value and dividing the remainder by `revenue` to calculate a percentage.

### Working Capital Ratio

This is calculated dividing the `assets` by the `liabilities` creating a percentage value where `assets` are calculated by:

- adding the `total_value` from all records where the `account_category` is set to `assets`, the `value_type` is set to `debit`, and the `account_type` is one of `current`, `bank`, or `current_accounts_receivable`
- subtracting the `total_value` from all records where the `account_category` is set to `assets`, the `value_type` is set to `credit`, and the `account_type` is one of `current`, `bank`, or `current_accounts_receivable`

and liabilities are calculated by:

- adding the `total_value` from all records where the `account_category` is set to `liability`, the `value_type` is set to `credit`, and the `account_type` is one of `current` or `current_accounts_payable`
- subtracting the `total_value` from all records where the `account_category` is set to `liability`, the `value_type` is set to `debit`, and the `account_type` is one `current` or `current_accounts_payable`

## Unit Testing
To run the unit test script install Jest using command 
" npm i jest"


## Run main file
The main file can be ran using NodeJS
