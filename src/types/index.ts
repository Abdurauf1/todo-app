import { store } from "../store/store";

export interface TodoItem {
    id: string;
    name: string;
    completed: boolean;
}

export interface TodosState {
    todos: TodoItem[],
}

export type RootState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;