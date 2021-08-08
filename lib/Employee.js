class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getName(){
      return this.name.charAt(0).toUpperCase() + this.name.slice(1);;
    }
    getId(){
      return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
      return "Employee";
    }
}
module.exports = Employee;