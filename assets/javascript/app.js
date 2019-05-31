$(document).ready(function() {
    var topics = [];

    function displayAnime() {

        var j = $(this).data("search");
        console.log(j);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + j + "ayjZ48AUcDTfo640Mk26K6ALTxQaZQKT";

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            var results = response.data;
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                var showDiv = $("<div class='col-md-4'>");

                var rating = results[i].rating;
                var defaultAnimatedSrc = results[i].images.fixed_height_still.url;
                var showImage = $("<img>");
                var p = $("<p>").text("Rating: " + rating);

                showImage.attr("src", staticSrc);
                showImage.addClass("animeGiphy");
                showImage.attr("data-state", "still");
                showImage.attr("data-still", staticSrc);
                showImage.attr("data-animate", defaultAnimatedSrc);
                showDiv.append(j);
                showDiv.append(showImage);
                $("#gifArea").prepend(showDiv);
            }
        });
    }

    $("#addAnime").on("click", function(event) {
        event.preventDefault();
        var newAnime = $("#animeInput").val().trim();
        topics.push(newAnime);
        console.log(topics);
        $("#animeInput").val('');
        displayButtons();
    });

    function displayButtons() {
        $("#myButtons").empty();
        for (var d = 0; d < topics.length; d++) {
            var a = $('<button class="btn btn-primary">');
            a.attr("id", "show");
            a.attr("data-search", topics[i]);
            a.text(topics[i]);
            $("#myButtons").append(a);
        }
    }

    displayButtons();

    $(document).on("click", "show", displayAnime);

    $(document).on("click", ".animeGiphy", pausePlayGifs);


    function pausePlayGifs() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    }
});