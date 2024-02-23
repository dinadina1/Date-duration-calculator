let heading = document.createElement("h2");
heading.innerHTML = "Date Duration Calculator";

let span = document.createElement("span");
span.innerHTML = "Enter Date:";

let date = document.createElement("input");
date.setAttribute("type","date");
date.id = "dob";

let button = document.createElement("button");
button.setAttribute("type","submit");
button.className = "btn-primary";
button.innerHTML = "Click me";

button.addEventListener("click",date_data);

document.body.append(heading,span,date,button);

function date_data(){
    let input = document.getElementById("dob").value;
    let input_date = new Date(input);

    let current_date = new Date();

    let millisec_diff = parseInt(current_date.getTime() - input_date.getTime());

    let seconds_diff = Math.floor(millisec_diff/1000);

    let minutes_diff = Math.floor(seconds_diff/60);

    let hours_diff = Math.floor(minutes_diff/60);

    let days_diff = Math.floor(hours_diff/24);

    let years_diff = current_date.getFullYear() - input_date.getFullYear();

    let month_diff = (years_diff*12) + (current_date.getMonth()-input_date.getMonth());

    // Append to the body

    let given_date = document.createElement("p");
    given_date.innerHTML = `Given Date : ${input_date}`;

    let break_line = document.createElement("br");

    let years = document.createElement("p");
    years.innerHTML = `Year : ${years_diff}`;

    let months = document.createElement("p");
    months.innerHTML = `Months : ${month_diff}`;

    let days = document.createElement("p");
    days.innerHTML = `Days : ${days_diff}`;

    let hours = document.createElement("p");
    hours.innerHTML = `Hours : ${hours_diff}`;

    let minutes = document.createElement("p");
    minutes.innerHTML = `Minutes : ${minutes_diff}`;

    let seconds = document.createElement("p");
    seconds.innerHTML = `Seconds : ${seconds_diff}`;

    let milliseconds = document.createElement("p");
    milliseconds.innerHTML = `Milli-seconds : ${millisec_diff}`;


    document.body.append(given_date, break_line, years, months, days, hours, minutes, seconds, milliseconds);
}