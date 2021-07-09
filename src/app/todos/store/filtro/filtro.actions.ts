import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const establecer = createAction(
  '[Filtro] Establecer Filtro',
  props<{ filtro: filtrosValidos }>()
);

export const cambiar = createAction(
  '[Filtro] Cambiar Filtro',
  props<{ filtro: filtrosValidos }>()
);
