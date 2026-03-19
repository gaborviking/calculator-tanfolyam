// Adatok, változók, árak
const designPrice = 250000;

const basePrices = {
    '1-4': 450000,
    '5-9': 950000,
    '10-20': 1500000,
    '20+': 1500000,
};

const contentPrices = {
    '1-4': 80000,
    '5-9': 140000,
    '10-20': 250000,
    '20+': 400000,
}

const multilingualPrices = {
    '1-4': 100000,
    '5-9': 250000,
    '10-20': 400000,
    '20+': 400000,
}

const multiplierValues = {
    overload: 1.15,
    urgent: 1.20,
    uncertainty: 1.10,
    portfolio: 0.9,
    flexible: 0.95,
}

const hardCapMin = 0.85;
const hardCapMax = 1.50;