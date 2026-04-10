import { Component, OnInit } from '@angular/core';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado.component';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button.component'
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css',
})
export class Certificados implements OnInit {

  certificados: Certificado[] = [];

  constructor(private certificadoService: CertificadoService) { }

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;
  }

}
