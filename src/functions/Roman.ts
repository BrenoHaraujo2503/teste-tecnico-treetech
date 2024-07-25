const RomanNumbers = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
} as Record<string, number>

const letters = Object.keys(RomanNumbers)
const values = Object.values(RomanNumbers)

export function toRoman(value: number) {
  let romano = ""
  if (value > 0 && value < 4000) {
    for (let i = 0; i < letters.length; i++) {
      if (values[i] <= value) {
        if (value.toString()[0] === "4") {
          romano += letters[i] + letters[i - 1]
          value -= values[i - 1] - values[i]
        } else if (value.toString()[0] === "9") {
          romano += letters[i + 1] + letters[i - 1]
          value -= values[i - 1] - values[i + 1]
        } else {
          romano += letters[i]
          value -= values[i]
        }
        i--
      }
    }
  } else {
    return ''
  }
  return romano
}

export function toDecimal(value: string) {
  let decimal = 0;

  for (let i = 0; i < value.length; i++) {
    const nextValue = RomanNumbers[value[i + 1]];

    if (nextValue && RomanNumbers[value[i]] < nextValue) {
      decimal -= RomanNumbers[value[i]];
    } else {
      decimal += RomanNumbers[value[i]];
    }
  }

  return decimal;
}
