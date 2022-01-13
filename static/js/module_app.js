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

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    
    // Check to see if a date was entered and filter the data using that date.
    if (date) {
        // Apply 'filter' to the table data to only keep the rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered date
    // NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
};

// Execute the handleClick() function when the button with an id of filter-btn is clicked.
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);