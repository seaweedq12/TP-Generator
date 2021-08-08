const Intern= require('../lib/Intern');

describe('Intern class', () => {
  describe('getName', () => {
    it('returns name value', () => {
      const intern =  new Intern('James',1,'sample@sample.com','school');
      expect(intern.getName()).toBe('James');
    });
  });
  
  describe('getId', () => {
    it('returns id value', () => {
      const intern =  new Intern('James',1,'sample@sample.com','school');
      expect(intern.getId()).toBe(1);
    });
  });
  
  describe('getEmail', () => {
    it('returns email value', () => {
      const intern =  new Intern('James',1,'sample@sample.com','school');
      expect(intern.getEmail()).toBe('sample@sample.com');
    });
  });

  describe('getRole', () => {
      it('returns role value', () => {
        const intern =  new Intern();
        expect(intern.getRole()).toBe('Intern');
      });
  });

  describe('getSchool', () => {
    it('returns school value', () => {
      const intern =  new Intern('James',1,'sample@sample.com','school');
      expect(intern.getSchool()).toBe('school');
    });
  });
});