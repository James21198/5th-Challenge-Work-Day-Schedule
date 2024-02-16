
$(document).ready(function() {

  var timeDisplayEl = $('#time-display');

  function displayTime() {
    var rightNow = dayjs().format('DD MMM YYYY, hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }


  $('.saveBtn').on('click', function(){
    var value = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');

    localStorage.setItem(hour, value);

    $('.notification').addClass('show');

    setTimeout(function() {
      $('.notification').removeClass('show');
    }, 5000);
  });

  function setData() {
    localStorage.getItem(hour,value);
  }
  
  function scheduleTime() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function() {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      if (blockHour < currentHour) {
        $(this).addClass('past');
      }else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      }else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    })
  }

  $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });


  displayTime();
  setInterval(displayTime, 1000);

})