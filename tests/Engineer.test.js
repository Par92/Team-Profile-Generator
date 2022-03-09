const Engineer = require("../lib/Engineer");

describe("THIS IS TEST FOR ENGINEER CLASS ", ()=> {
    it("should have a github property when instantiated with the github parameter", ()=> {
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com";
        const github = "mollycodes";

        const emp = new Engineer(name, id, email, github);
        expect(emp.github).toEqual(github);
    })

    it("Should return the github property when getGithub method is invoked", ()=> {
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com";
        const github = "mollycodes";

        const emp = new Engineer(name, id, email, github);
        expect(emp.getGithub()).toEqual(github);
    })

    it("Should return 'Engineer' when the getRole method is invoked", ()=> {
        const name = "Molly";
        const id = 10;
        const email = "molly@mail.com";
        const github = "mollycodes";

        const emp = new Engineer(name, id, email, github);
        expect(emp.getRole()).toEqual("Engineer");
    })
})