const Engineer= require('../lib/Engineer');

describe('Engineer class', () => {
    describe('getName', () => {
      it('returns name value', () => {
        const engineer =  new Engineer('James',1,'sample@sample.com','username');
        expect(engineer.getName()).toBe('James');
      });
    });
    
    describe('getId', () => {
      it('returns id value', () => {
        const engineer =  new Engineer('James',1,'sample@sample.com','username');
        expect(engineer.getId()).toBe(1);
      });
    });
    
    describe('getEmail', () => {
      it('returns email value', () => {
        const engineer =  new Engineer('James',1,'sample@sample.com','username');
        expect(engineer.getEmail()).toBe('sample@sample.com');
      });
    });

    describe('getRole', () => {
        it('returns role value', () => {
          const engineer =  new Engineer();
          expect(engineer.getRole()).toBe('Engineer');
        });
    });

    describe('getGithub', () => {
      it('returns github value', () => {
        const engineer =  new Engineer('James',1,'sample@sample.com','username');
        expect(engineer.getGithub()).toBe('username');
      });
    });
});