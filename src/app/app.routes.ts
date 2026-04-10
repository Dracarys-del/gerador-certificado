import { Routes } from '@angular/router';
import { Certificados } from './pages/certificados/certificados.component';
import { CertificadoForm } from './pages/certificado-form/certificado-form.component';
import { CertificadoComponent } from './pages/certificado/certificado.component';

export const routes: Routes = [
  {
    path: "",
    component: Certificados
  },
  {
    path: "certificados/novo",
    component: CertificadoForm
  },
  {
    path: "certificados/:id",
    component: CertificadoComponent
  }
];
