function normalizePhone(input) {
  if (!input) return "";

  let phone = input.replace(/[^\d+]/g, "");

  if (phone.startsWith("+60")) {
    phone = "0" + phone.slice(3);
  } else if (phone.startsWith("60")) {
    phone = "0" + phone.slice(2);
  }

  return "'" + phone;
}

function extractPhone(text) {
  const match = text.match(/(\+?60|0)[\d\s-]{8,15}/);
  return match ? normalizePhone(match[0]) : "";
}

function extractPostcode(text) {
  const match = text.match(/\b\d{5}\b/);
  return match ? match[0] : "";
}

function extractName(text) {
  const patterns = [
    /(?:nama|name|full name|nama penuh)\s*[:：]\s*(.+)/i
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[1].trim();
  }

  const lines = text
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);

  return lines[0] || "";
}

function extractAddress(text) {
  const match = text.match(/(?:alamat|address)\s*[:：]\s*([\s\S]+)/i);

  if (match) {
    return match[1]
      .replace(/\b\d{5}\b/, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  return text
    .replace(/\b\d{5}\b/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseOrder(text) {
  return {
    name: extractName(text),
    phone: extractPhone(text),
    postcode: extractPostcode(text),
    address: extractAddress(text)
  };
}

function parseMultipleOrders(text) {
  return text
    .split(/\n\s*\n/)
    .map(block => block.trim())
    .filter(Boolean)
    .map(parseOrder);
}

module.exports = {
  parseOrder,
  parseMultipleOrders,
  normalizePhone,
  extractPhone,
  extractPostcode,
  extractName,
  extractAddress
};
