import { createSlice } from "@reduxjs/toolkit";
import type { TodoItem, TodosState } from "../types";
import { toast } from "react-toastify";

const initialState: TodosState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            state.todos.push({
                id: newItem.id,
                name: newItem.name,
                completed: newItem.completed,
            })
        },
        handleEdit: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.editingId ? { ...todo, name: action.payload.inputVal } : todo)
        },
        setEdit: (state, action) => {
            state.todos.map((todo: TodoItem) => {
                if (todo.id === action.payload.id) {
                    if (todo.completed) {
                        toast.error("Task is already done")
                        return;
                    } else {
                        action.payload.setInputVal(todo.name);
                        action.payload.setEditingId(todo.id);
                        action.payload.setIsEditing(true)
                    }
                }
            })
        },
        deleteTask: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        setIsChecked: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: action.payload.checked } : todo)
        }
    }
})

export const todoActions = todoSlice.actions;
