/* eslint-disable no-undef */
function todoList() {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    temp = [];
    let i = 0;
    const today = formattedDate(dateToday);

    for (i = 0; i < all.length; i++) {
      if (all[i].dueDate < today) {
        temp.push(all[i]);
      }
    }

    return temp;
  };

  const dueToday = () => {
    temp = [];
    let i = 0;
    const today = formattedDate(dateToday);

    for (i = 0; i < all.length; i++) {
      if (all[i].dueDate === today) {
        temp.push(all[i]);
      }
    }

    return temp;
  };

  const dueLater = () => {
    temp = [];
    let i = 0;
    const today = formattedDate(dateToday);

    for (i = 0; i < all.length; i++) {
      if (all[i].dueDate > today) {
        temp.push(all[i]);
      }
    }

    return temp;
  };

  const toDisplayableList = (list) => {
    let i = 0;
    let string = "";

    for (i = 0; i < list.length; i++) {
      string += "[";

      if (list[i].completed) {
        string += "x";
      } else {
        string += " ";
      }

      string += "] ";
      string += list[i].title;
      const today = formattedDate(dateToday);
      if (list[i].dueDate !== today) {
        string += " ";
        string += list[i].dueDate;
      }

      if (i !== list.length - 1) {
        string += "\n";
      }
    }

    return string;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
}

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");

module.exports = todoList;
