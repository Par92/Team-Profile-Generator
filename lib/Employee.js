class Employee {
    constructor(name, id, email, role = "Employee"){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return this.role
    }

    generateHTMLCard(extra){
        return `
        <div class="card card-custom">
            <div class="card-header custom-header">
                <div>${this.name}</div>
                <div>${this.role}</div>
            </div>
            <div class="bottom">
                <ul>
                    <li>ID: ${this.id}</li>
                    <li>Email: ${this.email}</li>
                    ${this.role === "Manager" ? 
                    `<li>Office Number: ${extra}</li>` : 
                    this.role === "Engineer" ? 
                    `<li>Github Account: ${extra}</li>` : 
                    `<li>Alma Mater: ${extra}</li>`
                }
                </ul>
            </div>
        </div>
        `
    }
}

module.exports = Employee;