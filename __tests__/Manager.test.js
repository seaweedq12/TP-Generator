const Manager= require('../lib/Manager');

describe('Manager class', () => {
  describe('getName', () => {
    it('returns name value', () => {
      const manager =  new Manager('James',1,'sample@sample.com',2);
      expect(manager.getName()).toBe('James');
    });
  });
  
  describe('getId', () => {
    it('returns id value', () => {
      const manager =  new Manager('James',1,'sample@sample.com',2);
      expect(manager.getId()).toBe(1);
    });
  });
  
  describe('getEmail', () => {
    it('returns email value', () => {
      const manager =  new Manager('James',1,'sample@sample.com',2);
      expect(manager.getEmail()).toBe('sample@sample.com');
    });
  });

  describe('getRole', () => {
      it('returns role value', () => {
        const manager =  new Manager();
        expect(manager.getRole()).toBe('Manager');
      });
  });

  describe('Office number', () => {
    it('returns school value', () => {
      const manager =  new Manager('James',1,'sample@sample.com',2);
      expect(manager.officenum).toBe(2);
    });
  });
});