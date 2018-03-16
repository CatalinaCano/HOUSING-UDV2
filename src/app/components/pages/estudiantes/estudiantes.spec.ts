import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EstudiantesComponent } from './estudiantes.component';

describe('Validar que el formulario de crear usuario tenga todos sus campos llenos', () => {
    let component: EstudiantesComponent;
    beforeEach(() => {
        // 0. set up the test environment
        TestBed.configureTestingModule({
            imports: [
                // no more boilerplate code w/ custom providers needed :-)
                HttpClientModule,
                HttpClientTestingModule
            ]
        });
    });


});
