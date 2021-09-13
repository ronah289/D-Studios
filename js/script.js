// user interface
$(document).ready(function(){
$("#design-show").click(function(){
    $("#design-show").hide();
    $("#design-hide").toggle();
});
$("#design-hide").click(function(){
    $("#design-hide").hide();
    $("#design-show").toggle();
});
$("#develop-show").click(function(){
    $("#develop-show").hide();
    $("#develop-hide").toggle();
});
$("#develop-hide").click(function(){
    $("#develop-hide").hide();
    $("#develop-show").toggle();
});
$("#p-management-show").click(function(){
    $("#p-management-show").hide();
    $("#p-management-hide").toggle();
});
$("#p-management-hide").click(function(){
    $("#p-management-hide").hide();
    $("#p-management-show").toggle();
});
});
// backend logic
$(document).ready(function(){
    $("form#contact-form").submit(function(){
        event.preventDefault();
        var personName = $("#person-name").val();
        var userMail = $("#person-email").val();
        var userMessage = $("#user-message").val();

        if((personName != '')&&(userMail !='')&&(userMessage != '')){
            alert(personName+"  Thank You For Your Feedback");
        }
        else{
            alert("Check your entries");
        }
    });
});