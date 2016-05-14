$( document ).ready(function(){
    $(".dropdown-button").dropdown({belowOrigin:true}); // for dropdown in navigation bar
    $(".button-collapse").sideNav(); // for side navigation drawer in small screen
    $('select').material_select(); // initialize select element
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    }); // for  datepicker
});

function logout() {
    window.location.href = "login.html"    
}