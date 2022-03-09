
const Employee = require("../lib/Employee");

describe("TEST FOR EMPLOYEE CLASS", ()=> {
    it("Should instantiate and create a employee object", ()=> {
        const emp = new Employee();
        expect(typeof emp).toBe("object")
    });

    it("Should have a name property when instantiated with a name parameter", ()=> {
        const name = "Molly";
        const emp = new Employee(name);
        expect(emp.name).toEqual(name);
    });

    it("Should have a id property when instantiated with a id parameter", ()=> {
        const name = "Molly";
        const id = 10;
        const emp = new Employee(name, id);
        expect(emp.id).toEqual(id);
    });

    it("Should have a email property when instantiated with a email parameter", ()=> {
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com"
        const emp = new Employee(name, id, email);
        expect(emp.email).toEqual(email);
    });


    //test methods
    it("Should return the name of the object when getName method is invoked", ()=> {
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com"
        const emp = new Employee(name, id, email);
        expect(emp.getName()).toEqual(name)
    });

    it("Should return the id of the object when getId method is invoked", ()=> {
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com"
        const emp = new Employee(name, id, email);
        expect(emp.getId()).toEqual(id)
    })

    it("Should return the email of the object when getEmail method is invoked", ()=> {
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com"
        const emp = new Employee(name, id, email);
        expect(emp.getEmail()).toEqual(email)
    })

    it("Should return 'Employee' when the getRole method is called", ()=> {
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com"
        const emp = new Employee(name, id, email);
        expect(emp.getRole()).toEqual("Employee")
    })
})