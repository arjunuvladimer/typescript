interface employee{
    firstName: string
    lastName: string
}

var customer: employee = {
    firstName:"Arjun",
    lastName:"SN"
}
console.log(customer.firstName)

// Single Interface Inheritance
interface intInherit{
    id:number
}

interface intInherit1 extends intInherit, employee{ 
    // Inheriting the properties from other interface to the new interface
    salary:number|string
}

var customer2: intInherit1= { // Implementing the properties
    firstName:'Arjun',
    lastName:"SN",
    id:123,
    salary:3243
}

// Multiple Interface Inheritance
