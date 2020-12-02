function telephoneCheck(str) {
  return str.match(/^(1\s?)?([2-9][0-9]{2}|\([2-9][0-9]{2}\))[\s-]?[2-9][0-9]{2}[\s-]?[0-9]{4}$/) ? true : false;
}
