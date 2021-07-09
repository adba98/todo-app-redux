import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as action from '../store/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  chkCompletado!: FormControl;
  txtEditar!: FormControl;
  editando!: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtEditar = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe((valor) =>
      this.store.dispatch(action.toogle({ id: this.todo.id }))
    );
  }

  public editar(): void {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  public terminarEdicion(): void {
    this.editando = false;
    if (this.txtEditar.invalid) return;
    if (this.txtEditar.value === this.todo.texto) return;
    this.store.dispatch(
      action.editar({
        id: this.todo.id,
        texto: this.txtEditar.value
      })
    );
  }
  
  public borrar(): void {
    this.store.dispatch(action.borrar({id: this.todo.id}));
  }
}
