# ManyChat Workflow Example

This document explains how Malaysia WhatsApp Order Parser can fit into a simple WhatsApp / ManyChat order-entry workflow for Malaysian e-commerce sellers.

## Use case

Many Malaysian sellers collect orders through WhatsApp, Messenger, or ManyChat.

Customer messages are often inconsistent. Some customers send complete details in one message, while others send name, phone number, address, size, colour, and COD details separately.

This tool helps sellers convert messy customer order messages into a cleaner format for Excel or Google Sheets.

## Suggested workflow

1. Customer sends order details through WhatsApp or ManyChat.
2. Seller checks whether the order message includes name, phone number, postcode, and address.
3. Seller copies the message into the parser.
4. Parser extracts:
   - Name
   - Phone
   - Postcode
   - Address
5. Parser outputs a tab-separated row.
6. Seller pastes the row into Excel or Google Sheets.
7. Seller manually checks unclear cases before fulfillment.

## Example customer message

Nama: Mohd Fahmi Harith
Nombor Telefon: +60173212230
Alamat: D2 13-16 Savanna Executive Suites, Jalan BBLS 2, Southville City 43800 Dengkil Selangor

## Example parsed output

Mohd Fahmi Harith    '0173212230    43800    D2 13-16 Savanna Executive Suites, Jalan BBLS 2, Southville City Dengkil Selangor

## ManyChat tag idea

A seller may use a tag such as:

havent key in

This tag can mean the customer has submitted an order, but the seller has not entered the order into Excel or Google Sheets yet.

Suggested process:

1. Customer submits order details.
2. ManyChat adds the tag: havent key in.
3. Seller filters conversations by this tag.
4. Seller copies the customer message into the parser.
5. Seller pastes the cleaned output into Google Sheets.
6. Seller removes the tag after the order has been entered.

## Human checking is still required

This parser is designed to reduce repetitive formatting work.

It should not replace human review.

Sellers should manually check:
- Missing phone numbers
- Incomplete addresses
- Wrong postcode
- Unclear colour or size
- Duplicate orders
- COD or payment status

## Future improvements

Possible future improvements include:

- ManyChat webhook example
- Google Sheets API export
- Batch order parsing
- Uncertain field detection
- Missing field warning
