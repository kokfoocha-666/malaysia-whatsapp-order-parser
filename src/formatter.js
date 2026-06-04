function formatTSV(order) {
  return [
    order.name || "",
    order.phone || "",
    order.postcode || "",
    order.address || ""
  ].join("\t");
}

function formatMultipleTSV(orders) {
  return orders.map(formatTSV).join("\n");
}

module.exports = {
  formatTSV,
  formatMultipleTSV
};
