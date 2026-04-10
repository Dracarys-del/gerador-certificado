import { Component, Input } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button.component";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css',
})
export class ItemCertificado {
  @Input() certificadoId: string = '';
  @Input() nomeAluno: string = '';
  @Input() dataEmissao: string = '';

  constructor(private router: Router) {}

  redirecionaCertificado() {
    this.router.navigate(['/certificados', this.certificadoId])
  }
}
