const CLIENT_URL = `http://localhost:5000/`;

Feature('ToDo List Client');

Scenario('Test if I can create a todo', ({ I }) => {
    I.amOnPage(CLIENT_URL);

    I.fillField('.form-control', 'todo list');
    I.click('#create-todo');

    I.waitForText('todo list');
});

Scenario('Test if I can fill the todo', ({ I }) => {
    I.amOnPage(CLIENT_URL);

    I.fillField('.form-control', 'todo list full');
    I.click('#create-todo');

    I.waitForText('todo list full');

    I.click('#todo-body tr:last-child button')
    
    I.waitForText('todo list full ', '#done-body')
}); 