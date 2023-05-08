export default class Validator {
  validateUsername(username) {
    const regex = /^(?![_-])\w*(?<![_-])(?<!\d)$/; // updated regex
    const containsMoreThan3DigitsRegex = /\d{4,}/;
    const invalidStartEndRegex = /^[_-\d]|[_-\d]$/;
    
    return regex.test(username) && !containsMoreThan3DigitsRegex.test(username) && !invalidStartEndRegex.test(username);
  }  
}

  
