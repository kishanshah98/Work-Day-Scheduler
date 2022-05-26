function doSomethingAboutClickOrSaveButton() {
    var key = $(this).parent().attr("id")
    var userInput = $(this).siblings("textarea").val();
    localStorage.setItem(key, userInput);
  };
  
  $('.saveBtn').on('click', doSomethingAboutClickOrSaveButton);
  
  function updateTimeBlockers() {
    var time = moment().hours();
    $('.time-block').each(function () {
        var blockTime = JSON.parse($(this).attr("id").split("-")[1]);
        if (blockTime < time) {
            $(this).addClass("past");
        } else if (blockTime === time) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
  };
  
  updateTimeBlockers();
  
var interval = setInterval(updateTimeBlockers, 1000);
  $('#hour-9 textarea').val(localStorage.getItem('hour-9'))
  $('#hour-10 textarea').val(localStorage.getItem('hour-10'))
  $('#hour-11 textarea').val(localStorage.getItem('hour-11'))
  $('#hour-12 textarea').val(localStorage.getItem('hour-12'))
  $('#hour-13 textarea').val(localStorage.getItem('hour-13'))
  $('#hour-14 textarea').val(localStorage.getItem('hour-14'))
  $('#hour-15 textarea').val(localStorage.getItem('hour-15'))
  $('#hour-16 textarea').val(localStorage.getItem('hour-16'))
  $('#hour-17 textarea').val(localStorage.getItem('hour-17'))


var timeDisplayElement = $('#currentDay');

var rightNow = moment().format("dddd, MMMM Do");
timeDisplayElement.text(rightNow);

