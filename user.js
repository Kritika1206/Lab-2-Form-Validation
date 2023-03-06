/* 
    Full Name: Kritika Singh
    StudentID: 100859600  
    Date Completed: March 5, 2023

    Class to create new user 
*/

export class User
{
    constructor(firstName, lastName, username, email, password)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    displayUser()
    {
         return `Name: ${this.firstName}${this.lastName}
         Email: ${this.email}
         Password: ${this.password}`
    }
}