/* eslint-disable no-undef */

const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todo List Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  test("Add todo element", () => {
    const todoLength = all.length;
    add({
      title: "Test",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(todoLength + 1);
  });

  test("Mark todo as complete", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Over due", () => {
    overdueLength = overdue().length;
    add({
      title: "Test over due",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(overdueLength + 1);
  });

  test("Due today", () => {
    dueTodayLength = dueToday().length;
    add({
      title: "Test due today",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueToday().length).toBe(dueTodayLength + 1);
  });

  test("Due later", () => {
    dueLaterLength = dueLater().length;
    add({
      title: "Test due later",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(dueLaterLength + 1);
  });
});
