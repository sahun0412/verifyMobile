$(function(){

    var regExp = / /;
    function CountryChange() {
    var countryName = $("#lstCountry").val();
    var flag = $("#flag");

    var mobileTxtBox = $("#txtMobile");
    var error = $("#error");


    if(countryName=="India"){
    flag.attr("src", "../verifyMobile/India.png");
    mobileTxtBox.attr("placeholder", "+91 and 10 digits");
    regExp = /\+91\d{10}/;
    error.html("");
    } else if (countryName=="US"){
    flag.attr("src", "../verifyMobile/us.png");
    mobileTxtBox.attr("placeholder", "+(1)(425) 555-0100");
    regExp = /\+\(1\)\(\d{3}\)\s\d{3}-\d{4}/;
    error.html("");
    } else if(countryName=="UK"){
    flag.attr("src", "../verifyMobile/uk.png")
    mobileTxtBox.attr("placeholder", "+(44)(20) 1256 8888");
    regExp = /\+\(44\)\(\d{2}\)\s\d{4}\s\d{4}/;
    error.html("");
    } else{
    error.html("Please Select Your Country").css("color", "red");
    flag.attr("src", "");
    mobileTxtBox.attr("placeholder", "Country Not Selected");
    }
    }

    function verifyMobile() {
    var mobileNumber = $("#txtMobile").val();
    var mobileError = $("#mobileError");

    if(mobileNumber.match(regExp)){
    $("body").append("<h2>Number Verified succesfully..</h2>").css("text-align", "center");
    }else{
    mobileError.html(`Invalid Number : <b> ${$("#txtMobile").attr("placeholder")}</b>`.fontcolor('red'));
    }
    }


    $("#btnSubmit").on("click", verifyMobile);
    $("#lstCountry").on("change", CountryChange);
    })