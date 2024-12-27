import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { KeycloakService } from './service/keycloak.service';
import { RecommendationsComponent } from './recommendations/recommendations.component';  // Assurez-vous que le chemin est correct
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { provideHttpClient } from '@angular/common/http';


@NgModule({
    imports: [RouterModule.forRoot(appRoutes),BrowserModule,FormsModule, CommonModule],
    exports: [RouterModule],
    providers:[provideHttpClient()
    ]
})
export class AppConfig { }
