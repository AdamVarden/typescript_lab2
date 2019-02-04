// A. Create an array of strings
let tasks: Array<string> = [];
console.log("");

// B. Create a function to add a task in to the array, call it `addTask`,
//the function has to accept a string and doesn't have to return anything.
function addTask(task: string): number {
    let y: number;
    tasks.push(task);
    console.log("=========== NEW TASK ===========");
    console.log('Task "'+task+'" inserted in the list');
    y=tasks.length;
    return y;
    }