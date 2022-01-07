// Import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clears out any existing data from the table
    tbody.html("");

    // Loops through each object in the data and appends a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Finds the <tbody> tag within the HTML and adds a table row ("tr")
        let row = tbody.append("tr");

        // Loops through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            // Appends data into a table data tag (<td>)
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}