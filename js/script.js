$(document).ready(function(){

    $('.btn_get').on('click', function() {
        $('.overlay').addClass('open');
    });

    $('.btn_close').on('click', function() {
        $('.overlay').removeClass('open');
    });

    var weather = $('.weather');

    function getWeather(weather_post) {
        weather.append('<div class="item_post">'+
            '<h3>'+ weather_post.name+'</h3>'+
            '<img src="http://openweathermap.org/img/w/10d.png">'+
            '<p>'+'Temperature: '+weather_post.main.temp+' C'+'</p>'+
            '<p>'+'Preassure: '+weather_post.main.pressure+' hPa'+'</p>'+
            '<p>'+'Weather: '+weather_post.weather[0].description+'</p>'+
            '<p>'+'Humidity: '+weather_post.main.humidity+'%'+'</p>'+
            '<p>'+'Wind: '+weather_post.wind.speed+' km/h'+'</p>'+
            '</div>'
        )
    }

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19',
        success: function(data) {
            console.log(data);
            getWeather(data);
        }
    });

});
