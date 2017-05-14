function setRatingsImage(rating) {
    var imageLocation = "img/yelp_stars/";
    switch (rating) {
        case 0:
            return imageLocation += "large_0@2x.png";
        case 1:
            return imageLocation += "large_1@2x.png";
        case 1.5:
            return imageLocation += "large_1_half@2x.png";
        case 2:
            return imageLocation += "large_2@2x.png";
        case 2.5:
            return imageLocation += "large_2_half@2x.png";
        case 3:
            return imageLocation += "large_3@2x.png";
        case 3.5:
            return imageLocation += "large_3_half@2x.png";
        case 4:
            return imageLocation += "large_4@2x.png";
        case 4.5:
            return imageLocation += "large_4_half@2x.png";
        case 5:
            return imageLocation += "large_5@2x.png";
    }
}

function setAddress(address) {
    var formattedAddress = address[0];
    for (var i=1; i<address.length; i++) {
        formattedAddress += " • " + address[i];
    }
    return formattedAddress;
}

$(function(){

    var url = "https://hidden-dusk-85106.herokuapp.com/bars";

    $("#theCity").submit(function(e){
        e.preventDefault();
        var arrayOfBars = [];
    	var city = $(".bigSearch").val();
        $('.barList').remove();
        $('.message').html(city + ' bars, <br>' + 'coming right up...');
        $.ajax({
            url:url,
            data: {
                city:city
            }
        }).done(function(bars){
            bars.businesses.forEach(function(bar){
                arrayOfBars.push({'name':bar.name,
                                  'rating':bar.rating,
                                  'review_count':bar.review_count,
                                  'address':bar.location.display_address});
            });
            arrayOfBars.sort(function(a,b){
                return b.rating - a.rating || b.review_count - a.review_count;
            });
            arrayOfBars.forEach(function(item){
                var individualBar = "<div class='barList'>" + 
                                        "<h2 class='barName'>" + item.name + "</h2>" +
                                        "<p class='barAddress'>" + setAddress(item.address) + "</p>" +
                                        "<div class='barRating'>" + "<img src='" + setRatingsImage(item.rating) + "' alt='yelp star rating image'>" + "<p>based on " + item.review_count + " reviews </p>" +
                                        "</div>" +
                                    "</div>";
                $('.message').html('');
                $("#bars").append(individualBar);
            });
        });
    });
});