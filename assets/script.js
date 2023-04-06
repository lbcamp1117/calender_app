const timeNow = dayjs();
console.log(timeNow);
// Date in header
$("#currentDay").text(timeNow.format("dddd, MMMM DD YYYY, hh:mm"));

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
    var currentHour = dayjs().hour()
    var colorkey = "" 
    var hourdisplay = ""
 for(var i = 9; i <= 18; i++) {
    if(currentHour >i) {
        colorkey = "past";
    }
    else if(currentHour === i) {
        colorkey = "present";
    }
    else {
        colorkey = "future";
    }
    if (i < 12){
        hourdisplay = i + " AM";
    }
    else if (i === 12){
        hourdisplay = i + " PM";
    }
    else {
        hourdisplay = i - 12 + " PM";
    }
    var timeBlock = $("<div>").addClass("row time-block").attr("id", i);
var textdiv = $("<textarea>").addClass("col-8 col-md-10 description " + colorkey).attr("rows", "3").val(localStorage.getItem(i));
    var hourdiv = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(hourdisplay);
    var icon = $("<i>").addClass("fas fa-save");
    var btn = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("id", i).on("click", function () { 
        var hourID = $(this).attr("id");
        var userInput = $(this).siblings(".description").val();
        localStorage.setItem(hourID, userInput);
    });
    $(".container-fluid").append(timeBlock.append(hourdiv,textdiv,btn.append(icon)));
 }
    // TODO: Add a listener for click events on the save button.
 
});
