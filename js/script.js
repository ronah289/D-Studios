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