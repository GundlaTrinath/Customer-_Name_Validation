function validateInput(){
    var fn = document.forms["form"]["fname"].value;
    var ln = document.forms["form"]["lname"].value;
    var add = document.forms["form"]["address"].value;
    var ci = document.forms["form"]["city"].value;
    var ste = document.forms["form"]["state"].value;
    var zip = document.forms["form"]["zipcode"].value;
    var ph = document.forms["form"]["mobile"].value;
    var ma= document.forms["form"]["uid"].value;

    if(fn == null||fn == "") {
        alert("First name cannot be blank");
        return false;
    }

    else if(ln == null || ln == "") {
        alert("Last Name cannot be blank");
        return false;
    }
    else if(add == null || add == "") {
        alert("Address cannot be blank");
        return false;
    }
    else if(ci == null || ci == "") {
        alert("Enter the City Name");
        return false;
    }
    else if(ste == null || ste == "") {
        alert("Enter State according to city");
        return false;
    }
    else if(zip == null || zip == "") {
        alert("Enter Zipcode/Pincode");
        return false;
    }
    else if(ph == null || ph == "") {
        alert("Enter valid Mobile number");
        return false;
    }
    else if(ma == null || ma == "") {
        alert("Enter valid Mail-id");
        return false;
    }
}