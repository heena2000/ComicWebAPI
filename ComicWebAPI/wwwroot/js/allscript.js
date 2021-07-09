// API URL
let address = '/api/Comics';

// Function to Display Data in Tabular Structure and collect from API
function loadComics() {
    // Generate AJAX request for collecting All Comic Details
    $.ajax({
        type: "GET",
        url: address,
        cache: false,
        success: function (data) {
            // Capture the reference of Table Body present in Home Page
            const tableBody = $("#table_comics");

            $(tableBody).empty(); // Empty the content of Previous Table Body 

            if (data.length == 0) { // If there is no data present
                // Prepare a row for display no data
                const tr = $("<tr></tr>")
                    .append('<td colspan="5" align="center">No Comic information</td>');
                // Add table row in table body
                tr.appendTo(tableBody);
            } else {
                // Iterate all JSON rating json present in data
                console.log(data);
                $.each(data, function (key, item) {
                    // prepare a row with table column with data 
                    const tr = $("<tr></tr>")
                        .append($("<td></td>").text(item.comicName))
                        .append($("<td></td>").text(item.price))
                        .append($("<td></td>").text(item.pages))
                        .append($("<td></td>").append('<button class="btn btn-secondary" data-toggle="modal" data-target="#update">Edit Details</button>')
                            .on("click", function () {
                                // Call fetch Comic Details For getting data for edit the details
                                fetchComic(item.id);
                            })
                        )
                        .append($("<td></td>").append('<button class="btn btn-danger">Delete Details</button>')
                            .on("click", function () {
                                // Call Delete Function For Removing Comic Details 
                                deleteComic(item.id);
                            })
                        );;
                    // Add The table row at the end of table body
                    tr.appendTo(tableBody)
                });
            }
        }
    });
}

// Function used to collect information, call the API for INsertion
function addComic() {
    // Collect Form Details
    let comicname_value = $('#comicname').val();
    let price_value = parseInt($('#price').val());
    let pages_value = parseInt($('#pages').val());

    // Prepare JSON data for storing 
    let comic = {
        comicName: comicname_value,
        price: price_value,
        pages: pages_value
    };

    // Request the API for Insertion
    $.ajax({
        type: "POST",
        url: address,
        data: JSON.stringify(comic),
        contentType: "application/json; charset=utf-8"
    }).done(function (response) {
        // Display the appropriate message 
        $("#result").html("Comic Details are stored");
        // Call to again Load the Data for displaying
        loadComics();
    }).fail(function (xhr, status) {
        // Display the appropriate message 
        $("#result").html("Failure in storing Comic Details");
    });
}

// Function to call API for Updation
function updateComic() {
    // Collect Form Details
    let comicname_value = $('#comicname1').val();
    let price_value = parseInt($('#price1').val());
    let pages_value = parseInt($('#pages1').val());
    let id_value = parseInt($('#id').val());

    // Prpeare JSON Data
    let comic = {
        id: id_value,
        comicName: comicname_value,
        price: price_value,
        pages: pages_value
    };

    // Generate API request for Updating the Record
    $.ajax({
        type: "PUT",
        url: address + "/" + id_value,
        data: JSON.stringify(comic),
        contentType: "application/json; charset=utf-8"
    }).done(function (response) {
        // Display the appropriate message 
        $("#resultUpdate").html("Comic Details are Updated");
        // Call to load details on page
        loadComics();
    }).fail(function (xhr, status) {
        // Display the appropriate message 
        $("#resultUpdate").html("Failure in Updation of Comic Details");
    });
}

// Function to call API for Delete the Record
function deleteComic(id) {
    // Display a confirm message before generating request of delete
    let result = confirm("Are You Sure to Remove Comic Details?");

    if (result) {
        // Generate Request of API for Delete the Rating Details
        $.ajax({
            type: "DELETE",
            url: address + "/" + id,
        }).done(function (response) {
            // Again Load the Table Data for Display
            loadComics();
        });
    }
}

// Function to generate request based upon id
function fetchComic(id) {
    $.ajax({
        type: "GET",
        url: address + "/" + id,
        contentType: "application/json"
    }).done(function (detail) {
        // Update the Form data for edit comic details
        console.log(detail);
        $('#id').val(detail.id);
        $('#comicname1').val(detail.comicName);
        $('#price1').val(detail.price);
        $('#pages1').val(detail.pages);
    });
}