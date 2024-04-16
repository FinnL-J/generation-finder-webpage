document.getElementById('myForm').addEventListener('submit', function(submit) {
    
    // prevent the form from submitting normally
    submit.preventDefault();

    // get the input date
    var birthDate = new Date(document.getElementById('birthdate').value);

    // get the year
    var birthYear = birthDate.getFullYear();
    
    let minDate = "1928-01-01";
    let maxDate = Date();
    
    ValidateBirthdate();
    
    // Annoying try-catch block that cuts off execution if error is thrown
    try{
        if(!birthDate > minDate || !birthDate < maxDate){
            //bangs for emphasis
            alert('Enter a better birthday, dummy' + '!' + '!' + '!' + '!');
            throw new Error(birthDate + " is not between " + minDate + " and " + maxDate);
        }
    } catch(error){
        console.error("Invalid birthday: ", error.message);
    }
    
    var output;

    // select a string based on the year of birth
    if (birthYear >= 1928 && birthYear <= 1945) {
        output = "You were born in The Silent Generation (Shh!).";
    } else if (birthYear >= 1946 && birthYear <= 1964) {
        output = "You were born in The Baby Boomer Generation! Okay, Boomer...";
    } else if (birthYear >= 1965 && birthYear <= 1980) {
        output = "You were born in Generation X! Radical, dude! Gnarly!";
    } else if (birthYear >= 1981 && birthYear <= 1996) {
        output = "You were born in Generation Y, you are also known as a 'Millenial', sorry!";
    } else if (birthYear >= 1997 && birthYear <= 2012) {
        output = "You were born in Gen Z, congratulations Zoomer!";
    } else if (birthYear >= 2013 && birthYear <= new Date().getFullYear()) {
        output = "You were born in Generation Alpha.";
    } else {
        //code should never be reached
        output = "Hmm, I don't actually know what generation you belong to...";
    }
    
    // display the result
    document.getElementById('output').innerHTML = output;
});

function ValidateBirthdate(){
    var birthdateInput = document.getElementById('birthdate');
    if (birthdateInput.checkValidity()) {
        return true;
    } else {
        document.getElementById('myForm').values.clearAll();
        alert('Please enter a valid birthdate between ' + '1928-01-01' + ', and ' + new Date().toISOString().split('T')[0]);
        return false;
    }
}