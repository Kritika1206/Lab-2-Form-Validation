/* 
    Full Name: Kritika Singh
    StudentID: 100859600  
    Date Completed: March 5, 2023
*/

/* Validation of the first name and checking its length */
export function validateFirst(first)
{
    if (first.length < 2)
    {
        return "<p>The entered first name length is too short.</p>"
    }
    else
    {
        return "<p></p>";
    }
};

/* Validation of the last name and checking its length */
export function validateLast(last)
{
    if (last.length < 2)
    {
        return "<p>The entered last name length is too short.</p>"
    }
    else
    {
        return "<p></p>";
    }
};

/* Validation of the email and checking its length */
export function validateEmail(email)
{
    if (email.length < 8)
    {
        return "<p>The entered email length  is too short.</p>"
    }
    else
    {
        return "<p></p>";
    }
};

/* Validation of the password and confirm password */
export function validatePassword(pass1, pass2)
{
    if (pass1 == pass2)
    {
        return "<p></p>";
    }
    else
    {
        return "<p>The enetered passwords do not match.</p>"
    }

};


