# Address Cleanup Notes

This document explains how Malaysia WhatsApp Order Parser handles Malaysian customer addresses.

## Current behavior

The parser currently looks for a 5-digit Malaysian postcode and removes it from the final address field.

Example input:

Alamat: No 12, Jalan Mawar 3, Taman Melati, 43000 Kajang, Selangor

Expected output:

Postcode:
43000

Address:
No 12, Jalan Mawar 3, Taman Melati, Kajang, Selangor

## Why address cleanup matters

Malaysian e-commerce sellers often receive customer addresses in inconsistent formats.

Common issues include:

- Postcode mixed inside the address
- City and state written in different positions
- Extra commas or spacing
- Country name added at the end
- Missing postcode
- Customer sends address across multiple lines

## Common Malaysian address patterns

Examples:

No 2A, Jalan 1/2D, Taman Prima Saujana, 43000 Kajang, Selangor

Lot 12761 Kg Nara, Pasir Puteh, 16800 Kelantan

11-AB-62, Apartment D'Perdana Sri Cemerlang, Jln Dusun Raja, 15300 Kota Bharu, Kelantan

No. 7, Jalan BK 5/13b, Bandar Kinrara, 47180 Puchong, Selangor

## Safe cleanup rules

The parser should be conservative.

It should:
- Extract the first valid 5-digit postcode
- Remove the postcode from the final address
- Keep city and state when available
- Keep apartment, lot, road, taman, kampung, and building details
- Avoid guessing missing information
- Avoid deleting useful address parts

## Manual review required

The parser should not fully automate fulfillment decisions.

Sellers should manually check addresses when:
- No postcode is found
- More than one 5-digit number appears
- The address is too short
- The customer uses unclear abbreviations
- City or state seems missing

## Future improvements

Possible future improvements include:

- Missing postcode warning
- Multiple postcode warning
- State name detection
- Extra comma cleanup
- Address confidence score
