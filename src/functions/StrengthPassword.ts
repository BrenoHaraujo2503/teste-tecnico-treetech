export function strengthPasswordCalculator(password: string) {
  let score = 0;

  if (password.length >= 8) {
    score += 2 * (password.length - 8)
  } else {
    score -= 4 * (8 - password.length)
  }

  const REGEX = {
    GET_NUMBERS: /[0-9]/g,
    GET_UPPERCASE: /[A-Z]/g,
    GET_LOWERCASE: /[a-z]/g,
    GET_SYMBOLS: /[^a-zA-Z0-9\s]/g
  } as Record<string, RegExp>

  for (const REGEX_TYPE in REGEX) {
    const matches = password.match(REGEX[REGEX_TYPE]) || []
    const count = matches.length
    if (count == 1) {
      score -= 4
    } else if (count == 0) {
      score -= 8
    }
  }

  const countChars = countPasswordChars(password)
  for (const value of Object.values(countChars)) {
    if (value == 3) {
      score -= 2
    } else if (value == 4) {
      score -= 4
    } else if (value >= 5) {
      score -= 8
    }
  }
  return score  
}

function countPasswordChars(password: string) {
  const chars = {} as Record<string, number>
  for (const char of password) {
    if (!Object.prototype.hasOwnProperty.call(chars, char)) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  return chars
}
