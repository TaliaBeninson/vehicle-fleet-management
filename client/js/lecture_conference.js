// var id;

// $(document).ready(function () {
//   id = localStorage.getItem('conference_id')
//   $.ajax({
//     type: 'GET',
//     url: "/getLecturesConference/" + id,
//     success: function (result) {
//       console.log(result)
//       $.each(result, function (index, value) {
//         if (value[0] !== null && value[0] !== undefined && value[1] !== null && value[1] !== undefined) {
//           $('#table').find('tbody').append(
//             '<tr>' +
//             '<td>' + value[1] + '</td>' +
//             '<td><img src="' + value[2] + '"alt="Image"></td>' +
//             '<td>' + value[3] + '</td>' +
//             '<td><button class="btn btn-outline-danger btn-sm" id="' + value[0] + '" onclick="delete_fun(\'' + value[0] + '\')">delete</button></td>' +
//             '</tr>'
//           );

//           $("button").css({
//             "margin-top": "1px",
//             "margin-left": "15px",
//             "font-size": "10px",
//             "width": "3rem",
//             "height": "1.5rem"
//           });
//         }
//       });

//     },
//     error: function (err) {
//       console.log("err", err);
//     }
//   });
// });

// const back = function () {
//   window.location.href = "/main"
// }


// function delete_fun(_id) {
//   $.ajax({
//     type: 'DELETE', // define the type of HTTP verb we want to use (POST for our form)
//     url: '/lecturer/' + id + '/' + _id,
//     success: function (data, textStatus, jQxhr) {
//       location.reload();
//     },
//     error: function (jqXhr, textStatus, errorThrown) {
//       console.log(errorThrown);
//     }
//   })


// }