var seires;

$(document).ready(function () {

  // if (localStorage.getItem('update')) {//If the user clicks Update
  //   var conference_id = localStorage.getItem('conference_id')
  //   document.getElementById("id_field").disabled = "false";//So that they can not change the ID field
  //   $.ajax({
  //     url: "getconference/" + conference_id,
  //     success: function (result) {
  //       document.getElementById("id_field").value = result[0].id
  //       document.getElementById("name").value = result[0].name
  //       document.getElementById("logo_picture").value = result[0].logo_picture
  //       document.getElementById("director").value = result[0].director
  //       var date = new Date(result[0].date);
  //       document.getElementById("date").value = date.toISOString().slice(0, 10)
  //       option = result[0].isSeries
  //       const inputElement = document.getElementById('series_numberDiv');

  //       if (option == "on")
  //         inputElement.style.display = 'block';
  //       $(':radio[value="' + option + '"]').prop('checked', true);
  //       if (option == 'on')
  //         document.getElementById("series_number").value = parseInt(result[0].series_number)
  //       else
  //         document.getElementById("series_number").value = ""

  //     },
  //     error: function (err) {
  //       console.log("err", err);
  //     }
  //   });
  // }
  // else {
  localStorage.clear()//Cleaning the local storage
  // }

});

const back = function () {
  window.location.href = "/main"
}

$(document).ready(function () {
  var id = localStorage.getItem('conference_id')

  $('#submit').click(function () {
    var car_id = $('#car_id').val();
    var name_car = $('#name_car').val();
    var year_car = $('#year_car').val();
    var type_car = $('input[name="choice"]:checked').val();
    var receive_date = $('#receive_date').val();
    var yearRegex = /^(19|20)\d{2}$/


    if (car_id.length == 0)// The field is empty
      $('#car_id-error').text('This field is required');
    else if (car_id.length != 8 && car_id.length != 7)
      $('#car_id-error').text('Please enter a valid number plate');
    else if ($.isNumeric(car_id))
      $('#car_id-error').text('');
    else $('#car_id-error').text('Please do not use special characters');

    if (name_car == null)// The field is empty
      $('#name_car-error').text('This field is required');
    else $('#name_car-error').text('');

    if (year_car == "")// The field is empty
      $('#year_car-error').text('This field is required');
    else if (!yearRegex.test(year_car))// If the URL is invalid, display an error message
      $('#year_car-error').text('Please enter a valid year');
    else $('#year_car-error').text('');

    if (!type_car) 
      $('#type_car-error').text('This field is required');
    else if (type_car != 'Government' && type_car != 'Personal') 
      $('#type_car-error').text('This field is required');
    else $('#type_car-error').text('');
    

    if (receive_date.length == 0)// The field is empty
      $('#receive_date-error').text('This field is required');
    else $('#date-error').text('');
  });
});

function addCon() {
  var car_id = $("#car_id").val();
  // if (localStorage.getItem('update')) {//If you click edit
  //   $.ajax({
  //     type: 'PUT', // HTTP request
  //     url: '/conference/' + id, //url
  //     contentType: 'application/json',
  //     data: JSON.stringify({
  //       "id": $("#id_field").val(),
  //       "name": $("#name").val(),
  //       "logo_picture": $("#logo_picture").val(),
  //       "director": $("#director").val(),
  //       "date": $("#date").val(),
  //       "isSeries": seires,
  //       "series_number": $("#series_number").val(),
  //     }),
  //     processData: false,
  //     encode: true,
  //     success: function (data, textStatus, jQxhr) {//In case of success
  //       localStorage.clear();
  //       location.href = "/main";//Return to the main page

  //     },
  //     error: function (jqXhr, textStatus, errorThrown) {//In case of error
  //       console.log(errorThrown);
  //     }
  //   })
  // }
  // else {

  $.ajax({
    url: "/getVivecleById/" + car_id,
    success: function (result) {
      if (result.length != 0) {
        alert('this Vehicle already exist')
        localStorage.clear()
        // window.location.href = '/main'
      }
      else {
        $.ajax({
          type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
          url: '/vehicle/', // the url where we want to POST
          contentType: 'application/json',
          data: JSON.stringify({
            "car_id": $("#car_id").val(),
            "name_car": $("#name_car").val(),
            "year_car": $("#year_car").val(),
            "type_car": $('input[name="choice"]:checked').val(),
            "receive_date": $("#receive_date").val(),
          }),
          processData: false,
          encode: true,
          success: function (data, textStatus, jQxhr) {
            localStorage.clear()
            location.href = "/main";

          },
          error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
          }
        })

      }
    },
  });
  // }
}