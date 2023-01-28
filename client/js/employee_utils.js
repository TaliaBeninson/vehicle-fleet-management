$(document).ready(function () {
    $("#name").on("input", function () {
        $("#email").val(this.value + "@mot.gov.il");
    });
});

$(document).ready(function () {
    $('#submit').click(function () {
        var employee_id = $('#employee_id').val();
        console.log("ji")
        var name = $('#name').val();
        var role = $('#role').val();
        var email = $('email').val();
        const onlyCharacters = /^[a-zA-Z]*$/;

        if (employee_id.length == 0)// The field is empty
            $('#employee_id-error').text('This field is required');
        else if (employee_id.length != 9)
            $('#employee_id-error').text('Please enter a valid id number');
        else if ($.isNumeric(employee_id))
            $('#employee_id-error').text('');
        else $('#employee_id-error').text('Please do not use special characters');

        if (name.length == 0)// The field is empty
            $('#name-error').text('This field is required');
        else if (!onlyCharacters.test(name))
            $('#name-error').text('Please do not use special characters');
        else $('#name-error').text('');

        if (role.length == 0)// The field is empty
            $('#role-error').text('This field is required');
        else
            $('#role-error').text('');

        if (email.length == 0)// The field is empty
            $('#email-error').text('This field is required');
        else
            $('#email-error').text('');
    });
});

const back = function () {
    window.location.href = "/main"
}


function add_func() {
    console.log("hi")
  $.ajax({
    type: 'POST',
    url: '/employee/',
    contentType: 'application/json',
    data: JSON.stringify({
      "employee_id": $("#employee_id").val(),
      "name": $("#name").val(),
      "role": $("#role").val(),
      "email": $("#email").val(),
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


