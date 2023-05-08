import Validator from '../Validator';

  describe('validateUsername', () => {
    
    let validator;

    beforeEach(() => {
    validator = new Validator();
  });

  describe('validateUsername', () => {
    it('should return true for valid usernames', () => {
      expect(validator.validateUsername('username')).toBe(true);
      expect(validator.validateUsername('user_name')).toBe(true);
    });

    it('should return false for usernames with more than 3 digits in a row', () => {
      expect(validator.validateUsername('user1234')).toBe(false);
      expect(validator.validateUsername('user_1234')).toBe(false);
      expect(validator.validateUsername('user-1234')).toBe(false);
    });

    it('should return false for usernames that start or end with digits, underscore, or dash', () => {
      expect(validator.validateUsername('1user')).toBe(false);
      expect(validator.validateUsername('_user')).toBe(false);
      expect(validator.validateUsername('-user')).toBe(false);
      expect(validator.validateUsername('user1')).toBe(false);
      expect(validator.validateUsername('user_')).toBe(false);
      expect(validator.validateUsername('user-')).toBe(false);
    });
  });
});