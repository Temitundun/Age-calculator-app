function print(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Get input values from the year, month, and day input fields
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value;
    let days = document.getElementById('days').value;

    // Get the current date and extract the current year
    let d = new Date();
    let currentYear = d.getFullYear();

    // Get the elements where error messages will be displayed
    let yearError = document.getElementById('year-error');
    let monthError = document.getElementById('month-error');
    let dayError = document.getElementById('day-error');

    // Clear any previous error messages
    yearError.textContent = '';
    monthError.textContent = '';
    dayError.textContent = '';

    // Initialize a flag to track if there are any errors
    let hasError = false;

    // Check if all fields are empty
    if (!year && !month && !days) {
        // If all fields are empty, show error messages
        yearError.textContent = 'All fields must be filled out.';
        monthError.textContent = 'All fields must be filled out.';
        dayError.textContent = 'All fields must be filled out.';
        hasError = true; // Set the error flag
    } else {
        // Check if the year field is empty or invalid
        if (!year) {
            yearError.textContent = 'Year is required.';
            hasError = true;
        } else if (year.length !== 4 || isNaN(year)) {
            yearError.textContent = 'Year must be a 4-digit number.';
            hasError = true;
        }

        // Check if the month field is empty or invalid
        if (!month) {
            monthError.textContent = 'Month is required.';
            hasError = true;
        } else if (month < 1 || month > 12 || isNaN(month)) {
            monthError.textContent = 'Month must be between 1 and 12.';
            hasError = true;
        }

        // Check if the day field is empty or invalid
        if (!days) {
            dayError.textContent = 'Day is required.';
            hasError = true;
        } else if (days < 1 || days > 31 || isNaN(days)) {
            dayError.textContent = 'Day must be between 1 and 31.';
            hasError = true;
        }
    }

    // If there are any errors, stop the function here
    if (hasError) {
        return;
    }

    // Calculate the age by subtracting the input year from the current year
    let work = currentYear - year;
    document.getElementById('show').innerHTML = work; // Display the calculated age

    // Display the input month and day values
    document.getElementById('inp').textContent = month;
    document.getElementById('inputt').textContent = days;

    // Clear the input fields for the next use
    document.getElementById('year').value = '';
    document.getElementById('month').value = '';
    document.getElementById('days').value = '';
}
