const {
  parseOrder,
  parseMultipleOrders,
  normalizePhone,
  extractPostcode
} = require("../src/parser");
const { formatTSV } = require("../src/formatter");

describe("normalizePhone", () => {
  it("converts +60 phone number to local format", () => {
    expect(normalizePhone("+60173212230")).toBe("'0173212230");
  });

  it("converts 60 phone number to local format", () => {
    expect(normalizePhone("60173212230")).toBe("'0173212230");
  });

  it("keeps local phone number and adds apostrophe", () => {
    expect(normalizePhone("017-321 2230")).toBe("'0173212230");
  });
});

describe("extractPostcode", () => {
  it("extracts Malaysian postcode", () => {
    expect(extractPostcode("Jalan BBLS 2, 43800 Dengkil Selangor")).toBe("43800");
  });
});

describe("parseOrder", () => {
  it("parses a WhatsApp order message", () => {
    const input = `
Nama: Mohd Fahmi Harith
Nombor Telefon: +60173212230
Alamat: D2 13-16 Savanna Executive Suites, Jalan BBLS 2, Southville City 43800 Dengkil Selangor
`;

    const order = parseOrder(input);

    expect(order.name).toBe("Mohd Fahmi Harith");
    expect(order.phone).toBe("'0173212230");
    expect(order.postcode).toBe("43800");
    expect(order.address).toBe(
      "D2 13-16 Savanna Executive Suites, Jalan BBLS 2, Southville City Dengkil Selangor"
    );
  });

  it("formats order as TSV for Excel", () => {
    const order = {
      name: "Mohd Fahmi Harith",
      phone: "'0173212230",
      postcode: "43800",
      address: "D2 13-16 Savanna Executive Suites"
    };

    expect(formatTSV(order)).toBe(
      "Mohd Fahmi Harith\t'0173212230\t43800\tD2 13-16 Savanna Executive Suites"
    );
  });

  it("parses multiple orders separated by blank lines", () => {
    const input = `
Nama: Ali
Telefon: 0171111222
Alamat: Jalan A 43000 Kajang

Nama: Abu
Telefon: +60182222333
Alamat: Jalan B 40150 Shah Alam
`;

    const orders = parseMultipleOrders(input);

    expect(orders).toHaveLength(2);
    expect(orders[0].name).toBe("Ali");
    expect(orders[1].phone).toBe("'0182222333");
  });
});
