let money,
    time;

money = prompt("That's your budget?");
time = prompt("Insert date in format YYYY-MM-DD");
let mainArticle = prompt("Insert mait article of payment");
let payment = prompt("How much it need?");

var expenses = {
    [mainArticle] : payment
};

const appData = {
    budget: money,
    timeData : time,
    expenses : expenses,
    optionalExpenses : "",
    income : "",
    savings : false
};

