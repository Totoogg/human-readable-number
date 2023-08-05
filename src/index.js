module.exports = function toReadable (number) {
  let stringNumber = '' + number;
  let result = '';
  let hundredNumber = '';
  let remainder = '';

  if (stringNumber.length === 1) {
    result = `${oneNumber(stringNumber)}`
  } else if (stringNumber.length === 2) {

    if (number < 20) {
        result = `${twoNumber(stringNumber)}`
    } else if (number % 10 === 0) {
        result = `${dozens(stringNumber[0])}`
    } else {
        result = `${dozens(stringNumber[0])} ${oneNumber(stringNumber[1])}`
    }

  } else {

    remainder = stringNumber.slice(1);

    if (remainder < 20) {

        if (remainder === '00') {
            hundredNumber = ''
        } else if (remainder < 10) {
            hundredNumber = `${oneNumber(remainder)}`
        } else {
            hundredNumber = `${twoNumber(remainder)}`
        }
        
    } else if (remainder % 10 === 0) {
        hundredNumber = `${dozens(remainder[0])}`
    } else {
        hundredNumber = `${dozens(remainder[0])} ${oneNumber(remainder[1])}`
    }

    result = `${oneNumber(stringNumber[0])} hundred ${hundredNumber}`
  }


  function oneNumber(number) {
    switch(+number) {
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        default: return 'nine';
    }
  }

  function twoNumber(number) {
    switch(+number) {
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        default: return 'nineteen';
    }
  }

  function dozens(number) {
    switch(+number) {
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        default: return 'ninety';
    }
  }
  


  return result.trim();
}
