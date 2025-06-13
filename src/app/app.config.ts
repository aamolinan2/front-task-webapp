import { provideHttpClient } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';



export const appConfig = {
  providers: [provideRouter(routes), provideHttpClient(), importProvidersFrom(MatSnackBarModule)],
};

