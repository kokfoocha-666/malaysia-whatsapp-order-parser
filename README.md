# Malaysia WhatsApp Order Parser

A lightweight parser for Malaysian e-commerce sellers to convert unstructured WhatsApp / ManyChat customer order messages into clean Excel or Google Sheets rows.

## Why this exists

Many small e-commerce sellers in Malaysia collect orders through WhatsApp, Messenger, or ManyChat. Customer messages are often inconsistent, making manual order entry slow and error-prone.

This tool helps convert messy customer messages into a simple tab-separated format:

Name | Phone | Postcode | Address

## Features

- Extract customer name
- Normalize Malaysian phone numbers from +60 / 60 to local 01 format
- Add apostrophe before phone numbers for Excel compatibility
- Extract 5-digit Malaysian postcode
- Remove postcode from the final address
- Format output for Excel / Google Sheets
- Useful for COD order workflows

## Example

Input:

Nama: Mohd Fahmi Harith
Nombor Telefon: +60173212230
Alamat: D2 13-16 Savanna Executive Suites, Jalan BBLS 2, Southville City 43800 Dengkil Selangor

Output:

Mohd Fahmi Harith    '0173212230    43800    D2 13-16 Savanna Executive Suites, Jalan BBLS 2, Southville City Dengkil Selangor

## Run tests

npm test

## Documentation

- [Google Sheets Workflow](docs/google-sheets.md)
- [ManyChat Workflow Example](docs/manychat-workflow.md)
- [Address Cleanup Notes](docs/address-cleanup.md)

## Roadmap

- Better address cleanup
- Google Sheets export example
- ManyChat webhook example
- CLI support

## License

MIT
