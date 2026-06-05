# Google Sheets Workflow

The parser outputs tab-separated values, also known as TSV.

This means the output can be copied directly into Google Sheets and will automatically split into separate columns.

## Output columns

The parser is designed for this order-entry format:

Name | Phone | Postcode | Address

## Why phone numbers use an apostrophe

Malaysian phone numbers usually start with 0.

For example:

0173212230

Spreadsheet apps like Google Sheets or Excel may remove the leading 0 if the phone number is treated as a number.

To prevent this, the parser adds an apostrophe before the phone number:

'0173212230

This helps preserve the correct phone number format.

## Example input

Nama: Mohd Fahmi Harith
Nombor Telefon: +60173212230
Alamat: D2 13-16 Savanna Executive Suites, Jalan BBLS 2, Southville City 43800 Dengkil Selangor

## Example output

Mohd Fahmi Harith    '0173212230    43800    D2 13-16 Savanna Executive Suites, Jalan BBLS 2, Southville City Dengkil Selangor

## How to use with Google Sheets

1. Parse the customer order message.
2. Copy the TSV output.
3. Open Google Sheets.
4. Select the first cell in the target row.
5. Paste the output.
6. Check the order manually before fulfillment.

## Notes

This tool is designed to reduce repetitive formatting work.

Sellers should still manually check unclear customer messages before shipping.
