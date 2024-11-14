# Documentación de la API de Ducks 🦆

#### Este proyecto proporciona una API que permite consumir imágenes aleatorias de "ducks" y obtener imágenes filtradas por número.
#### Esta API consume el servicio externo Random Duck API y expone dos endpoints principales:

- Obtener una imagen de pato aleatoria.
- Obtener imágenes de patos filtradas por número.


## Tabla de Contenidos
- [Requisitos previos](#requisitos-previos)
- [Instalación](#Instalación)
- [Estructura del Proyecto](#estructura-del-Proyecto)
- [Endpoints](#endpoints)
  - [GET /api/ducks/random](#endpoint-random)
  - [GET /api/ducks/number/:number](#endpoint-numero)
- [Consideraciones](#consideraciones)
- [Ejecución](#ejecución)

## Requisitos previos
1. Tener Node.js instalado (versión 16 o superior).
2. Conexión a Internet para consumir el servicio externo.
## Instalación
1. Clona el repositorio

- `git clone https://github.com/OsmanyCruz/API-Ducks-Clean-Code.git`
- `cd API-Ducks-Clean-Code`

2. Instala las dependencias
- `npm install`

## Estructura del Proyecto
~~~
project/
├── src/
│   ├── app/           
│   │   ├── server
│   ├── domain/  
|   |   ├── contracts/
|   |   │── entities/              
│   ├── infrastructure/        
│   │   ├── repositories/
│   ├── interfaces/  
│   │   ├── controllers/
│   │   └── routes/           
│   └── usecases/                
└── package.json

~~~

## Endpoints
### Endpoint Random
- **GET** /api/ducks/random
- Obtiene una imagen de pato aleatoria.

**Request**
- No requiere parámetros.

**Response**
~~~
{
    "url": "https://random-d.uk/api/194.jpg"
}
~~~

**Código de Estado**
- **200**: Imagen generada exitosamente.
- **500**: Internal Server Error: Error al consumir el servicio externo.

### Endpoint numero
- **GET** /api/ducks/number/:number
- Obtiene todas las imágenes de patos cuyo número coincida con el proporcionado.

**Request**
| Parámetro | Tipo   | Requerido | Descripción                  |
|-----------|--------|-----------|------------------------------|
| number    | Number | Sí        | Número para filtrar imágenes |

**Ejemplo**
- **GET** /api/ducks/90

**Response**
~~~
{
    "urls": [
        "https://random-d.uk/api/290.jpg",
        "https://random-d.uk/api/90.jpg",
        "https://random-d.uk/api/190.jpg"
    ]
}
~~~

**Código de Estado**
- **200**: Imágenes generadas exitosamente.
- **500**: Internal Server Error: Error al consumir el servicio externo.

## Consideraciones
- El servicio externo devuelve una lista de números de imágenes disponibles.
- Las imágenes filtradas se generan dinámicamente usando la ruta base https://random-d.uk/api/.
## Ejecución
1. Inicia el servidor:

- `npm start`
2. Accede a la API en:

- `http://localhost:3000`