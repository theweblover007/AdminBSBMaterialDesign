$(function () {
    $('#sign_up').validate({
        rules: {
            'terms': {
                required: true
            },
            'confirm': {
                equalTo: '[name="password"]'
            }
        },
        highlight: function (input) {
            console.log(input);
            $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
            $(element).parents('.input-group').append(error);
            $(element).parents('.form-group').append(error);
        }
    });
});

function dualDegreeCheck(degreeSelect){
    console.log(degreeSelect.value);
    console.log("Just changed!");
    if(degreeSelect){
        dualDegreeOptionValue = document.getElementById("dualDegreeOption").value;
        if(degreeSelect.value == dualDegreeOptionValue){
            document.getElementById("dualDegreeDiv").style.display = "";
        }
        else {
            document.getElementById("dualDegreeDiv").style.display = "none";

        }
    }
    else{
        document.getElementById("dualDegreeDiv").style.display = "none";
    }

}
