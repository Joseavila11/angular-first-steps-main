import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html'
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {

  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      identificacion: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(10)]],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      pais: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      alert('Formulario enviado exitosamente');
    } else {
      alert('Por favor complete todos los campos');
    }
  }
}
