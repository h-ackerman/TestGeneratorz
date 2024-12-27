import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrvrecomendationService {
private apiUrl = 'http://localhost:8088/scanProject/recomendations'; // URL de l'API backend

  constructor(private http: HttpClient) {}

  // Méthode pour envoyer une requête POST avec FormData
  recomendation(path: string): Observable<string> {
    const formData = new FormData();
    formData.append('path', path); // Ajouter le chemin au body de la requête

    return this.http.post<string>(this.apiUrl, formData, {
      responseType: 'text' as 'json' // Précision pour recevoir une réponse en texte brut
    });
  }
}
