import { ActionReducerMap } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { filtroReducer } from './filtro/filtro.reducer';
import { filtrosValidos } from './filtro/filtro.actions';
import { todoReducer } from './todos/todo.reducer';

export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer,
};
