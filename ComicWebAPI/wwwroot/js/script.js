// API URL
let address = 'api/Comics';

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
                    .append('<td colspan="3" align="center">No Comic information</td>');
                // Add table row in table body
                tr.appendTo(tableBody);
            } else {
                // Iterate all JSON rating json present in data
                $.each(data, function (key, item) {
                    // prepare a row with table column with data 
                    const tr = $("<tr></tr>")
                        .append($("<td></td>").text(item.comicName))
                        .append($("<td></td>").text(item.price))
                        .append($("<td></td>").text(item.pages));
                    // Add The table row at the end of table body
                    tr.appendTo(tableBody)
                });
            }
        }
    });
}