const Employee= require('../lib/Employee');

describe('Employee class', () => {
  describe('getName', () => {
    it('returns name value', () => {
      const employee =  new Employee('James',1,'sample@sample.com');
      expect(employee.getName()).toBe('James');
    });
  });
  
  describe('getId', () => {
    it('returns id value', () => {
      const employee =  new Employee('James',1,'sample@sample.com');
      expect(employee.getId()).toBe(1);
    });
  });
  
  describe('getEmail', () => {
    it('returns email value', () => {
      const employee =  new Employee('James',1,'sample@sample.com');
      expect(employee.getEmail()).toBe('sample@sample.com');
    });
  });

  describe('getRole', () => {
    it('returns role value', () => {
      const employee =  new Employee();
      expect(employee.getRole()).toBe('Employee');
    });
  });

});