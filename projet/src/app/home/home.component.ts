import { CommonModule } from '@angular/common';
import { Component, input, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
//import { ScanService } from '../service/servicescan/scan.service';



@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  result: string | null = null; // Variable pour stocker le résultat

  
  constructor(/*private scanService: ScanService*/) {
    
  }

  // Méthode appelée au clic sur le bouton
  startScan(): void {
     this.result=`
    Unit tests generated, saved, and processed:
    Python script executed successfully:
    Output folder already exists: F:\\FRO\\all\\hotel\\src\\test\\java\\ma\\hotel
    Found 3 classes in the input file.

    Class 'RoomServiceTest' written to F:\\FRO\\all\\hotel\\src\\test\\java\\ma\\hotel\\RoomServiceTest.java
    Class 'UserServiceTest' written to F:\\FRO\\all\\hotel\\src\\test\\java\\ma\\hotel\\UserServiceTest.java
    Class 'HotelServiceTest' written to F:\\FRO\\all\\hotel\\src\\test\\java\\ma\\hotel\\HotelServiceTest.java

    All classes with imports have been successfully extracted and saved.
  `;/*
    const path = 'F:/FRO/all/hotel'; // Chemin à envoyer
    this.result = 'Scanning...'; // Message temporaire
    this.scanService.scanProject(path).subscribe({
      next: (response) => {
        this.result = response; // Afficher la réponse du backend
      },
      error: (err) => {
        console.error('Erreur:', err);
        this.result = 'Une erreur est survenue lors du scan.';
      }
    });*/
  }
  
  
  
}
  

