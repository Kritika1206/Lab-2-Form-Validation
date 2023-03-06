console.log('app.js loaded')
import * as userClass from "./user.js"

(function()
{

// This function includes content for home page
function Home()
{
    
    const navLinkItem = document.createElement("li");
    navLinkItem.classList.add("nav-item");
    const navLink = document.createElement("a");
    navLink.classList.add("nav-link");
    navLink.setAttribute("href", "human-resources.html")
    navLink.innerHTML = 'Human Resources';
    navLinkItem.appendChild(navLink);

    document.querySelectorAll("nav ul li")[3].after(navLinkItem)

    let welcomeMessage = document.getElementById("Title");
    let textElement = document.getElementById("MainBody");
    let footer = document.createElement('footer')
    
    let fixedNav = `<nav class="navbar fixed-bottom navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Fixed bottom</a>
                    </div>
                    </nav>`;
    
    footer.innerHTML = fixedNav;

    // Weelcome message 
    welcomeMessage.textContent = "Welcome to my page!!";
    // Alignment
    welcomeMessage.align = "center";
    // Content of Home page
    textElement.textContent = "This is my lab 2 for WEBD 6201-06. I am a motivated student currently working towards degree in Computing Science from Durham College. With a strong foundation in HTML, CSS, and JavaScript, I am eager to leverage my skills to develop responsive and visually appealing websites and web applications. I am passionate about staying up-to-date with the latest web technologies and design trends and I am committed to continuous learning and growth in this field.";
    // Center alignment
    textElement.align = "center";

}

// This function includes content for the about us page
function AboutUs()
{
    console.log("About Us");

    let DocumentBody = document.body;
    let detailParagraph = document.createElement("detailParagraph");

    // The content of the page which displays the information using table
    let detailParagraphParagraph = `<table id="tableInfo" width="100%">

    <tr>
        <th width="33.3%">
            <h2 style="margin-left: 100px;">RADIO SHOW HOST</h2>
        </th>
        
        <th width="33.3%">
            <h2 style="margin-left: 100px;">PRESIDENT AND FOUNDER OF READERS CLUB</h2>
        </th>

        <th width="33.3%">
            <h2 style="margin-left: 100px;">INTERCULTURAL AMBASSADOR</h2>
        </th>
    </tr>

    <tr>
        <td align="center">
        <img src= "../images/CulterPrism.jpeg" width="350" height="200"></td>
        <td align="center"><img src= "../images/Reading Club.jpg" width="150" height="200"></td>
        <td align="center"><img src= "../images/Intercultural Team.jpeg" width="300" height="200"></td>
    </tr>
    
    <tr>
        <td align="center">
            <h6 style="margin-left: 100px;">

                Riot Radio, Durham College 
                <br/>
                -	Successfully hosting a radio show idea named “Culterprism” with the idea of reverse prism. I speak about Indian 
                culture and try to relate it with other cultures to express similarities. I have been hosting episodes on this show 
                from the last 4 months every week.  <br/>
                -  Link: <a href="https://mydcsa.ca/media-hub/">https://mydcsa.ca/media-hub/</a>

            </h6>
        </td>
        
        <td align="center">
            <h6 style="margin-left: 100px;">

                Readers on the same page, Durham College 
                <br/>
                -	The club is an open invitation for all students who love to read books. Students can exchange books, read books 
                together and/or discuss about their interest in books. This club is in action from last 3 months.  <br/>
                -	Link:  <a href="https://mydcsa.ca/network/rotsp/">https://mydcsa.ca/network/rotsp/</a>

            </h6>
        </td>

        <td align="center">
            <h6 style="margin-left: 100px;">

                Thompson Rivers University, Kamloops 
                <br/>
                The inclusive Intercultural Ambassadors program is designed for on-campus full-time undergraduate students. The 8 
                –10 core student participants in the intercultural peer mentoring program make up the intercultural ambassadors.


            </h6>
        </td>

    </tr>
    </table>`;
     
    detailParagraph.setAttribute("class", "container");

    detailParagraph.innerHTML = detailParagraphParagraph;
    DocumentBody.appendChild(detailParagraph);
}

// This function includes content for the Products page  
function Products()
{
    console.log("Products");

    let DocumentBody = document.body;
    let detailParagraph = document.createElement("detailParagraph");

    // The content of the page which displays the information using table
    let detailParagraphParagraph = `<table id="tableInfo" width="100%">

    <tr>
        <th width="33.3%">
            <h2 style="margin-left: 100px;">The Originals</h2>
        </th>
        
        <th width="33.3%">
            <h2 style="margin-left: 100px;">Ginny & Georgia</h2>
        </th>

        <th width="33.3%">
            <h2 style="margin-left: 100px;">Mismatched</h2>
        </th>
    </tr>

    <tr>
        <td align="center">
        <img src= "./images/The Originals.jpeg" width="200" height="200"></td>
        <td align="center"><img src= "./images/Ginny & Georgia.jpg" width="200" height="200"></td>
        <td align="center"><img src= "./images/Mismatched.jpeg" width="200" height="200"></td>
    </tr>
    
    <tr>
        <td align="center">
            <h6 style="margin-left: 100px;">

                My first favourite TV show is "The Originals". It is a supernatural fantasy drama television series premiered on The CW 
                on October 3, 2013. It is a spin-off of "The Vampire Diaries" and an extension based on its parent series. The series 
                revolves around Klaus Mikaelson, a vampire-werewolf hybrid, and his family as they become engaged in the supernatural 
                politics of New Orleans' French Quarter. The series included five seasons with 20 episodes in each season. My  favourite 
                character from the show is Joseph Morgan as Klaus Mikaelson.

            </h6>
        </td>
        
        <td align="center">
            <h6 style="margin-left: 100px;">

                Ginny Miller, a fifteen-year-old who is more mature than her thirty-year-old mother, Georgia, is the protagonist of
                Ginny & Georgia, which takes place in the fictional New England town of Wellsbury, where Georgia decides to settle down
                with her daughter Ginny and son Austin to give them a better life than she had.

            </h6>
        </td>

        <td align="center">
            <h6 style="margin-left: 100px;">

                Mismatched is a Netflix coming-of-age romance drama web series set in 2020 that is inspired on Sandhya Menon's 2017
                novel When Dimple Met Rishi. Rishi, a traditionalist who believes in traditional courting methods, falls for Dimple, a 
                gamer, and eventually wants to marry her. Rishi Singh Shekhawat (Rohit Saraf) is a young boy who believes 
                in conventional way of dating: meeting in person, being drunk on love, and has gone to Aravalli Institute to locate his
                'Future Wife'. Dimple is driven, and Rishi is enchanted by her and wishes to marry her.

            </h6>
        </td>

    </tr>
    </table>`;
    

    detailParagraph.setAttribute("class", "container"); 
    
    detailParagraph.innerHTML = detailParagraphParagraph;
    DocumentBody.appendChild(detailParagraph);
}

// This function includes content for the Services page    
function Services()
{
    console.log("Services");

    let DocumentBody = document.body;
    let detailParagraph = document.createElement("detailParagraph");

    // The content of the page which displays the information using table
    let detailParagraphParagraph = `
    
    <table id="tableInfo" width="100%">
    <tr>
        <td width="33.3%">
            <h3 style="margin-left: 100px;"> Java Loops Program </h3>
        </td>

        <td width="33.3%">
            <h3 style="margin-left: 100px;> Inheritance in Java </h3>
        </td>

        <td width="33.3%">
            <h3 style="margin-left: 100px;"> C++ Program </h3>
        </td>
    </tr>

    <tr>
        <td align="center">
            <a href = "https://github.com/Kritika1206/Comp-1130-Group-E-Assignment">
                <img src="../images/Java Loops.png" height = 200 />
            </a>
        </td>

        <td align="center">
            <a href = "https://github.com/Kritika1206/comp1130-assignment2">
                <img src="../images/Inheritance.png" height = 200 />
            </a>
        </td>

        <td align="center">
            <a href = "https://github.com/Kritika1206/OOP3200--F2022--Lab4">
                <img src="../images/c++.png" height = 200 />
            </a>
        </td>
    </tr>
    
    <tr>
        <td align="center">
            <h6 style="margin-left: 100px;">
               
            This is the Java project I designed along with students of my class. We used loops to create shapes with 0 and 1. This was really
            interesting because Java is one of my favourite programming languages.
            </h6>
        </td>
        
        <td align="center">
            <h6 style="margin-left: 100px;">
                This is one of my other Java projects where we used the concept of inheritance and multiple classes.
            </h6>
        </td>

        <td align="center">
            <h6 style="margin-left: 100px;">
                This is the C++ program I wrote during my classes and I was quiet impresses by my work because C++ is not one of my favourite langauges.
            </h6>
        </td>
        
    </tr>
    </table>

    <br/>
    <br/>

    <p align="center">
        This line will take you to my Resume!! 
            <a href="https://docs.google.com/document/d/16pw8tm4L5LZSuEv9xwAMphUfkLbd7q56/edit?usp=share_link&ouid=105609093923380733634&rtpof=true&sd=true"> 
                Click Here
            </a>
    </p>`;


    detailParagraph.setAttribute("class", "container"); 
    
    detailParagraph.innerHTML = detailParagraphParagraph;
    DocumentBody.appendChild(detailParagraph);
}
 
// This function includes switch case to use multiple functions and implement them on specific pages
function Start()
{

        // Generating the footer navbar dynamically
        let mainContent = document.querySelector("main");
        console.log(mainContent);

        // Creating the footer
        let footer = document.createElement("footer");
        footer.innerHTML = `        
        <nav class="navbar fixed-bottom text-white navbar-dark bg-dark justify-content-center">
          <p class="my-2"><i class="far fa-copyright"></i>Copyright Kritika Singh 2023</p>
        </nav>
        `;
    
        if (document.getElementsByTagName('main') != null)
        {
            document.body.appendChild(footer);
            console.log(footer);
        }
               
        // Creating new nav  bar including human resources tab
        const navLinkItem = document.createElement("li");
        navLinkItem.classList.add("nav-item");
        const navLink = document.createElement("a");
        navLink.classList.add("nav-link");
        navLink.setAttribute("href", "human-resources.html")
        navLink.innerHTML = 'Human Resources';
        navLinkItem.appendChild(navLink);
        
        // Inserting Human resources into the navigation bar
        document.querySelectorAll("nav ul li")[3].after(navLinkItem)

        // Using switch case
        // It checks the title of the current document and upload the functionality based on the title
        switch (document.title) 
        {

            case "Home":
                Home();
                break;
            
            case "About Us":
                AboutUs();
                break;
            
            case "Product":
                Products();
                break;
            
            case "Services":
                Services();
                break;
            
            default:
                break;         
        }        
}
    window.addEventListener("load", Start);

})();

// importing form validation functions
import * as formValidation from "./form.js"

if ($("#btnRegSubmit"))
{
    $("#btnRegSubmit").click(function (e)
    {
        e.preventDefault();

        // creating a new user
        const unvalidated_user = new userClass.User
        (
            // first name input
            $("#FirstNameInput").val(),
            // last name input
            $("#LastNameInput").val(),
            // email address input
            $("#EmailInput").val(),
            // password input
            $("#PasswordInput").val()
        );
        
        console.log(`User Details: ${unvalidated_user.displayUser()}`)

        // validating the first name input
        $("#first-group").children(".errorMessage").html(formValidation.validateFirst(unvalidated_user.firstName));
        // validating the last name input
        $("#last-group").children(".errorMessage").html(formValidation.validateLast(unvalidated_user.lastName));

        // confirming if both the entered passwords are same
        let error = formValidation.validatePassword(unvalidated_user.password, $("#ConfirmPasswordInput").val());
        $("#pass1-group").children(".errorMessage").html(error);
        $("#pass2-group").children(".errorMessage").html(error);

});
}

if($("#btnRegReset")){
    // binding event handler on click
    $("#btnRegReset").click(function (e) {
        // clearing the form
        $(".errorMessage").html("<p></p>")
    });
};