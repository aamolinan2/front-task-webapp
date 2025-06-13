
# Front Task WebApp

Este proyecto es una aplicación de gestión de tareas construida con **Angular 17** utilizando configuración **standalone**, Firebase Hosting para el despliegue y buenas prácticas modernas como arquitectura limpia, lazy loading y protección de rutas.

## 📐 Arquitectura y Organización

El proyecto sigue la estructura modular de Angular standalone:

```
src/
├── app/
│   ├── config/             # Configuración de rutas y guards
│   ├── features/
│   │   ├── auth/           # Módulos y componentes de autenticación
│   │   └── tasks/          # Gestión de tareas (CRUD)
│   ├── core/               # Servicios compartidos
├── environments/           # Configuración de entornos
```

### Componentes principales:
- **LoginComponent**: formulario de autenticación con validación y uso de `sessionStorage`.
- **TasksComponent**: interfaz para crear, listar y marcar tareas como completadas.
- **CreateUserDialogComponent**: modal para registrar nuevos usuarios.

## 🔐 Autenticación y Seguridad

- Autenticación basada en email usando `sessionStorage`.
- `AuthGuard` protege rutas como `/tasks`.
- Al cerrar pestaña, el token se borra automáticamente.
- Previene navegación manual mediante botones de historial del navegador.

## 🧩 Dependencias destacadas

- `@angular/material`: interfaz moderna y accesible.
- `ngx-mask`: control de inputs.
- `rxjs`: gestión reactiva de eventos y servicios.

## 🚀 Scripts importantes

```bash
npm install       # Instala dependencias
npm run start     # Levanta servidor local
npm run build     # Compila para producción
```

## 🔥 Despliegue en Firebase

- Automatizado con CI/CD vía GitHub Actions.
- El directorio de salida `dist/front-task-webapp/browser` se publica.

## 🧪 Buenas prácticas aplicadas

- Uso de `ReactiveFormsModule` y `NgModel` para formularios.
- Validaciones y mensajes amigables.
- Lazy loading en rutas para optimización.
- Rutas protegidas con `canActivate`.
- Uso de `NotificationService` para mensajes globales.

## 📁 Producción vs Desarrollo

- Variables como `apiUrl` están configuradas para cambiar dinámicamente entre entornos.
- Para correr con entorno producción:

```bash
ng serve --configuration=production
```