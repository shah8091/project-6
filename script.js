$(document).ready(function () {
    $("#submit").click(function () {
        var city = $("#city").val();
    });

    if (city != '') {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "$APP IDcaf4732cd12e4511a4dd927b83415981",
            type: "get",
            dataType: "jasonp",
            function(data) {
                console.log(data);
            }



        });

    } else {
        $("#error");
    }
});

