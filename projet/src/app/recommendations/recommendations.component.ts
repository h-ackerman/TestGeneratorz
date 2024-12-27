import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Assurez-vous que CommonModule est importé si vous utilisez *ngFor
import { SrvrecomendationService } from '../service/serviceRecomendation/srvrecomendation.service';

@Component({
  selector: 'app-recommendations',  // Le sélecteur du composant
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
  standalone: true,  // Facultatif, si vous utilisez une application basée sur des composants indépendants
  imports: [CommonModule]  // Facultatif, si vous utilisez des directives comme *ngFor
})
export class RecommendationsComponent {
  result1: string | null = null;
  constructor(/*srvRecomendation: SrvrecomendationService */) {
    
  }

  recommendations = {
    "General Code Quality Recommendations": [
      "Use of Optional is recommended to handle null or empty results in a better way.",
      "DRY (Don't Repeat Yourself) principle could be better enforced by creating common methods or utilities for repeated tasks like error handling, searching in database etc."
    ],
    "Security Recommendations": [
      "Avoid returning detailed error messages which might expose sensitive application details.",
      "Ensure that all endpoints of your application are secure and implement proper access controls."
    ],
    "Dependency Management": [
      "Decoupling needed between services and DAO classes for better service orchestration.",
      "Consider to use Dependency Injection to manage dependencies between your classes and improve the modularity of your code."
    ],
    "Clean Code Practices": [
      "Method bodies are quite large. Consider breaking down the methods into smaller parts for better readability and maintainability.",
      "Follow a consistent code style guide - right alignment, naming conventions and include meaningful comments.",
      "Consider using more descriptive method names that clearly communicate what the method does."
    ]
  };
  trackByKey(index: number, item: any): string {
    return item.key;
  }

  // Function to track changes in the values
  trackByItem(index: number, item: string): string {
    return item;
  }
  startScan(): void {
    this.result1=`
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
   this.result1 = 'Scanning...'; // Message temporaire
   this.srvRecomendation.recomendation(path).subscribe({
     next: (response) => {
       this.result1 = response; // Afficher la réponse du backend
     },
     error: (err) => {
       console.error('Erreur:', err);
       this.result1 = 'Une erreur est survenue lors du scan.';
     }
   });*/
 }
 
 
}
