import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App.jsx";
import { input } from "@testing-library/user-event/dist/cjs/event/input.js";


describe("<App />", () => {
    test("should have an h1 element", () => {
        render(<App />)
        expect(screen.getByRole("heading", {level: 1})).toBeDefined();      
    });

    test("h1 element should have the title 'To Do List' ", () => {
        render(<App />)     
        expect(screen.getByRole("heading", {level: 1})).toHaveTextContent("To Do List")
    });

    test("should render child components", () => {
        render(<App />)
        const taskInput = screen.getByRole("textbox")
        expect(taskInput).toBeInTheDocument()

        const taskList = screen.getByRole("list")
        expect(taskList).toBeInTheDocument()

        const pendingTaskCounter = screen.getByRole("heading", {level: 5})
        expect(pendingTaskCounter).toBeInTheDocument()
    });

    test("initial value of input must be an empty string", () => {
        render(<App />)
        const taskInput = screen.getByRole("textbox");
        expect(taskInput.value).toEqual("");
    });

    test("should change value from UI", () => {

        const newTask = "Llevar el perro al veterinario";
        render(<App />)
        const taskInput = screen.getByRole("textbox");
        const userTaskEntering = fireEvent.change(taskInput, {target: {value: newTask}})
        expect(taskInput.value).not.toEqual("");
        expect(taskInput.value).toEqual(newTask)
    });

    
});