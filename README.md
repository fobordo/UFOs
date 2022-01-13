# UFO Analysis

## Overview
The purpose of the UFO analysis was to analyze a [JavaScript file](/static/js/data.js) containing data on UFO sightings around the world. JavaScript was used to display the data as a table and create filtering capabilities to further drill down into the data. An HTML page was created to display this filterable table, as well as an article on UFO sightings. CSS and Bootstrap were used to style and format the page.

## Results
Users can use the new webpage by entering text into any of the Filter Search boxes in order to filter the data by date, city, state, country, or shape. 

When the webpage is first accessed, there are no filters on the data, as seen in the screenshot below:
![Table Unfiltered](/README_Images/Unfiltered.png) 

To filter by date, for example, a user could enter any date into the input box below the "Enter Date" label. When a date is entered into the Filter Search, such as "1/5/2010," and the user clicks anywhere outside of the text box, the table will automatically filter the data to the entered date:
![Table Filtered by Date](/README_Images/Filtered_Date.png)

However, if the value entered does not exist within the dataset, the table return no data because no value exists within its dataset to filter to. For example, if a user were to input the date "1/5/2025," the table would return completely empty:
![Table Filtered by Non-Existant Data](/README_Images/Filtered_Empty.png)

To filter by multiple criteria, a user could do so by entering values into multiple search boxes. For example, if a user wanted to filter by both a date (i.e. "1/5/2010") and a city (i.e. "rockwell"), the user could enter both the date and city in the respective search boxes, then click anywhere outside of the text boxes, and the table would filter the data to the entered date and city:
![Table Filtered by Multiple](/README_Images/Filtered_Multiple.png)

## Summary
A drawback of this new design is that people visiting the website might not know which dates, cities, states, countries, and shapes are available in the data. As such, a filter that takes in any random user input isn't best for this scenario. Instead, the following modifications could be made for further development:
1. Instead of taking in user input to filter, the filter could have a dropdown menu containing all of the unique values available in the data set for each filter option. This way, users will have full visibility of what data they can filter down to, and easily select the items they want to filter the data to.
2. An even further modification to a dropdown menu would be one that contains multiple checkbox filters of the unique values available in the data set. In this case, users would be able to filter by multiple dates, cities, states, counries, and shapes.
3. The general search function could be added as a separate function on the webpage, and serve as a search box that takes in user input so users could search for any text they desire.