
var employee = document.getElementById("employee")
$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: "/getEmployee/",
        success: function (result) {
            $.each(result, function (index, value) {
                $('#table').find('tbody').append(
                    '<tr>' +
                    '<td>' + value.employee_id + '</td>' +
                    '<td>' + value.name + '</td>' +
                    '<td>' + value.role + '</td>' +
                    '<td>' + value.email + '</td>' +
                    '<td><button class="btn btn-outline-danger btn-sm" id="' + value._id + '" onclick="delete_fun(\'' + value._id + '\')">delete conferences</button><button class="btn btn-outline-success btn-sm" id="' + value._id + '" onclick="editConference(\'' + value._id + '\')">edit conferences</button><button class="btn btn-outline-info btn-sm" id="' + value._id + '" onclick="addLecturer(\'' + value._id + '\')">add Lecturer</button><button class="btn btn-outline-secondary btn-sm" id="' + value._id + '" onclick="veiwLecturer(\'' + value._id + '\')">view Lecturer</button></td>' +
                    '</tr>'
                );

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

const back = function () {
    window.location.href = "/main"
}

const add_employee = function()
{
  window.location.href = "/add_employee"
}

// function add_func() {
//     id = localStorage.getItem('conference_id')
//     $.ajax({
//         type: 'POST',
//         url: '/addLecturer/' + id,
//         contentType: 'application/json',
//         data: JSON.stringify({
//             "lectureId": lectures.value,
//         }),
//         processData: false,
//         encode: true,
//         success: function (data, textStatus, jQxhr) {
//             location.href = "/lecture";
//         },
//         error: function (jqXhr, textStatus, errorThrown) {
//             console.log(errorThrown);
//         }
//     })
// }
