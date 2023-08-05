// Initialize variables to store income and expenses
let incomeItems = [];
let expenseItems = [];

// Function to update the display of income and expenses
function updateLists() {
    const incomeList = document.getElementById('incomeList');
    const expenseList = document.getElementById('expenseList');
    const remainingBudget = document.getElementById('remainingBudget');

    incomeList.innerHTML = '';
    expenseList.innerHTML = '';

    // Display income items
    incomeItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.description}: +$${item.amount}`;
        incomeList.appendChild(li);
    });

    // Display expense items
    expenseItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.description}: -$${item.amount}`;
        expenseList.appendChild(li);
    });

    // Calculate and display remaining budget
    const totalIncome = incomeItems.reduce((acc, item) => acc + item.amount, 0);
    const totalExpenses = expenseItems.reduce((acc, item) => acc + item.amount, 0);
    const remainingAmount = totalIncome - totalExpenses;
    remainingBudget.textContent = remainingAmount;
}

// Function to add income or expense items
function addItem() {
    const description = document.getElementById('description').value;
    const amount = +document.getElementById('amount').value;
    const type = document.getElementById('type').value;

    if (!description || isNaN(amount) || amount <= 0) {
        alert('Please enter valid description and amount.');
        return;
    }

    const newItem = { description, amount };

    // Add the new item to the corresponding list
    if (type === 'income') {
        incomeItems.push(newItem);
    } else {
        expenseItems.push(newItem);
    }

    // Clear the input fields
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';

    // Update the display
    updateLists();
}

// Initially, update the display
updateLists();
