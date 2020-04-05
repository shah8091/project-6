$(document).ready(function () {
    $("#submit").click(function () {
        var city = $("#city").val();
    });

    if (city != '') {
        $.ajax({
            Url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" +
                "$appid=2876d78fa6247f5ace9cb98ff0fe0618",
            method: "get",
            dataType: "jasonp",
            callBack: function (data) {
                console.log(data);
            }



        });

    } else {
        $("#error")
    }
});

