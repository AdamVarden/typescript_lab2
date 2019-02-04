// A. Create an array of strings
var tasks = [];
console.log("");
// B. Create a function to add a task in to the array, call it `addTask`,
//the function has to accept a string and doesn't have to return anything.
function addTask(task) {
    var y;
    tasks.push(task);
    console.log("=========== NEW TASK ===========");
    console.log('Task "' + task + '" inserted in the list');
    y = tasks.length;
    return y;
}
// C. Create a function to list all tasks, it must show in the console the task.
function listAllTasks() {
    console.log("");
    console.log("START: Items on list");
    console.log("");
    tasks.forEach(function (task) {
        console.log(task);
    });
    console.log("");
    console.log("END: Items on list");
    console.log("");
}
