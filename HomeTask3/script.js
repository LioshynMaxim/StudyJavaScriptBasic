let money = prompt("That's your budget?");
let mainArticle = prompt("Insert mait article of payment");
let payment = prompt("How much it need?");

var expenses = {
    [mainArticle]: payment
};

var optionalExpenses = {
};

const appData = {
    budget: money,
    timeData: "time",
    expenses: expenses,
    optionalExpenses: optionalExpenses,
    income: "",
    savings: false
};


function detectDayBudget() {
    console.log(+money / 30);
}

function detectLevel() {
    console.log(expenses[mainArticle]);
}

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        optionalExpenses[i] = prompt("Insert mait article of payment");
    }
}

detectDayBudget();
detectLevel();
chooseOptExpenses();
console.log(appData);