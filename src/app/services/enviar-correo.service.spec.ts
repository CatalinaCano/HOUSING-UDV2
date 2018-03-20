import { TestBed, inject } from '@angular/core/testing';

import { EnviarCorreoService } from './enviar-correo.service';

describe('EnviarCorreoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnviarCorreoService]
    });
  });

  it('should be created', inject([EnviarCorreoService], (service: EnviarCorreoService) => {
    expect(service).toBeTruthy();
  }));
});
