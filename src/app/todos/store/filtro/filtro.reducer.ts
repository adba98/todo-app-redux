import { createReducer, on, Action } from '@ngrx/store';
import { filtrosValidos, establecer } from './filtro.actions';

export const estadoInicial: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos>(
  estadoInicial,
  on(establecer, (state, { filtro }) => filtro),
);

export function filtroReducer(state: any, action: Action) {
  return _filtroReducer(state, action);
}
