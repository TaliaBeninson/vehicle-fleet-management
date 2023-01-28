

$(document).ready(function () {
    $.ajax({
      url: "/getvehicles",
      success: function (result) {
        localStorage.removeItem('update'); //clear loclahost
        $.each(result, function (index, value) {
            $('#table').find('tbody').append(
              '<tr>' +
              '<td style="display:block;float:left"><button class="btn btn-outline-danger btn-sm" id="' + value._id + '" onclick="delete_fun(\'' + value._id + '\')">delete conferences</button><button class="btn btn-outline-success btn-sm" id="' + value._id + '" onclick="editConference(\'' + value._id + '\')">edit conferences</button><button class="btn btn-outline-info btn-sm" id="' + value._id + '" onclick="addLecturer(\'' + value._id + '\')">add Lecturer</button><button class="btn btn-outline-secondary btn-sm" id="' + value._id + '" onclick="veiwLecturer(\'' + value._id + '\')">view Lecturer</button></td>'+
              '<td></td>'+
              '<td style="text-align:right"> <img style="display:table-cell;margin:auto" src="' + value.picture + '"alt="Image"></td>'+
              '<td>' + 
              '<span >תאריך קבלה:</span>' + value.receive_date.slice(0, value.receive_date.indexOf("T")) + "<br>" + "<br>" +
              '<span>טסט הבא :</span>' + value.next_test_date.slice(0, value.next_test_date.indexOf("T")) + "<br>" + "<br>" +
              '<span>טיפול הבא :</span>' + value.next_check_date.slice(0, value.next_check_date.indexOf("T")) +'</td>'+ "<br>"+
              '<td>' + 
              'מספר רכב: ' + value.car_id + "<br>" +"<br>" +
              'שם הרכב: ' + value.name_car + "(" + value.year_car +")" + "<br>" + "<br>" +
              'סוג הרכב: ' + value.type_car +
               '</td>'+
              '</tr>'
            );
            $('#table').find('tbody').append("<br>");

          $("button").css({
            "margin-top": "1px",
            "margin-left": "15px",
            "font-size": "10px",
            "width": "7rem",
            "height": "1.5rem"

          });
        });
      },

      error: function (err) {
        console.log("err", err);
      }
    });
      
  });

  
//   function sortDate() {
//     var rows = $("#table tbody tr").detach(); // Get the rows of the table
//     rows.sort(function (a, b) {// Sort the rows by date
//       var dateA = $(a).find("td:nth-child(5)").text();// Get the dates
//       var dateB = $(b).find("td:nth-child(5)").text();
//       dateA = new Date(dateA);// Convert the dates to Date objects
//       dateB = new Date(dateB);
//       if (dateA > dateB) {// Compare the dates
//         return -1;
//       }
//       if (dateA < dateB) {
//         return 1;
//       }
//       return 0;
//     });
//     $("#table tbody").append(rows);// Append the sorted rows back to the table
//   }

//   function sortName() {
//     var rows = $("#table tbody tr").detach();// Get the rows of the table
//     rows.sort(function (a, b) {// Sort the rows by name
//       var nameA = $(a).find("td:nth-child(2)").text();// Get the names
//       var nameB = $(b).find("td:nth-child(2)").text();
//       if (nameA < nameB) {// Compare the names
//         return -1;
//       }
//       if (nameA > nameB) {
//         return 1;
//       }
//       return 0;
//     });
//     $("#table tbody").append(rows);// Append the sorted rows back to the table
//   }

//   $(document).ready(function () {
//     $("#select-button").change(function () {// Bind the change event to the select element
//       var selected = $(this).val();// Get the value of the selected option
//       if (selected == 1) {
//         sortDate()
//       }
//       if (selected == 2) {
//         sortName()
//       }
//     });
//   });
  
//   const delete_fun = function(id) {//If you click Delete 
//     $.ajax({
//       url: "/conference/"+id,
//       type: 'DELETE', 
//       success: function (result) {
//         location.reload();//Page refresh
//       },
//       error: function (err) {
//         console.log("err", err);
//       }
//     });
 
//   }


//   function editConference(id){
//     localStorage.setItem('conference_id', id)
//     localStorage.setItem('update', true)
//     window.location.href="/add_conference"
//   }

//   function veiwLecturer(id){//if clicks view the lecturs of the conference
//     localStorage.setItem("conference_id", id)
//     location.href = "/lecture";
// }

// function addLecturer(id){//if clicks to add the lecturs of the conference
//   localStorage.setItem('conference_id', id)
//   $("#dialog").dialog("open");
// }

const add_vehicle = function()
{
  window.location.href = "/add_vehicle"
}

// const add_lecture = function()
// {
//   window.location.href = "/add_lecture"
// }