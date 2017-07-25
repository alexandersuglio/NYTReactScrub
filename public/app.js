$(document).ready(function() {

    $('#showIt').on("click", function() {

        $('#articlesHere').empty();
        $.getJSON("/articles", function(data) {

            for (var k = 0; k < data.length; k++) {

                $('#articlesHere').append("<div class='articleBody' id=" + data[k]._id + "> <h1>" + data[k].title + "</h1>" + "<p> Written by: " + data[k].author + "<p> <p>Summary: " + data[k].summary + "</p><button class='delete'> Delete from List </button></div>");

            };

        });

    });

    $('#scrape').on('click', function() {

        $.getJSON('/scrape');

    });

        $(document).on('click', '.delete', function() {


        var id = $(this).parent().attr('id');
        console.log(id);

       $.getJSON('/articles/delete/'+ id);


    });


});