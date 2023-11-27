import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia';
import { ConferenciaService } from '../conferencia.service';

@Component({
  selector: 'app-conferencia-list',
  templateUrl: './conferencia-list.component.html',
  styleUrls: ['./conferencia-list.component.css']
})
export class ConferenciaListComponent implements OnInit {

  conferencias: Array<Conferencia> = [];
  selectedConferencia!: Conferencia;
  selected:Boolean = false; 
  constructor(private conferenciaService: ConferenciaService) { }
  getConferencias(): void {
    this.conferenciaService.getConferencias().subscribe((conferencias) => {
      this.conferencias = conferencias;
    });
  }



  onSelected(conferencia: Conferencia): void{
    this.selected = true;
    this.selectedConferencia = conferencia;
  }

  ngOnInit() {
    this.getConferencias();
  }

}
