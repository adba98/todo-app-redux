import { createAction, props } from '@ngrx/store';

export const crear = createAction('[TODO] Crear', props<{ texto: string }>());
export const toogle = createAction(
  '[TODO] Toogle ToDo',
  props<{ id: number }>()
);
export const editar = createAction(
  '[TODO] Editar',
  props<{ id: number; texto: string }>()
);
export const borrar = createAction('[TODO] Borrar', props<{ id: number }>());

export const toogleAll = createAction('[TODO] Toggle All', props<{ completado: boolean }>());
