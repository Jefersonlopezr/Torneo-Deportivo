# Torneo Deportivo Internacional 2025

**Estudiante:** [Jeferson Lopez]

## Descripción del Proyecto

Este proyecto implementa una base de datos NoSQL en MongoDB para gestionar toda la información del **Torneo Deportivo Internacional 2025** organizado por *GlobalSports Union*. 

La base de datos permite almacenar y consultar información sobre:
- 🌍 Delegaciones de países participantes (15 países de todos los continentes)
- 🏃‍♂️ Atletas individuales con sus datos personales y logros
- 🏆 Disciplinas deportivas y categorías
- 📊 Historial de medallas y récords

## Estructura de la Base de Datos

### Colecciones Principales:

1. **`delegaciones`**: Información de los países participantes, jefes de delegación, atletas totales, disciplinas, historial de medallas y logística.

2. **`atletas`**: Datos detallados de cada deportista incluyendo información personal, disciplinas que practica, récords personales y logros previos.

## Archivos del Repositorio

| Archivo | Descripción |
|---------|-------------|
| `README.md` | Documentación principal del proyecto |
| `modelo_de_datos.md` | Análisis detallado del diseño de colecciones y campos |
| `inserciones.js` | Script con datos de prueba (15 delegaciones y atletas) |
| `consultas_sencillas.js` | 5 consultas básicas sin operadores complejos |
| `consultas_operadores.js` | 12 consultas avanzadas usando operadores MongoDB |

## Instrucciones de Ejecución

### Opción 1: MongoDB Compass
1. Abrir MongoDB Compass
2. Conectarse a tu instancia local o MongoDB Atlas
3. Crear nueva base de datos llamada `torneo_deportivo_2025`
4. En la pestaña de consultas (_Mongosh_), copiar y ejecutar cada script en orden:
   ```javascript
   // Primero ejecutar:
   load('inserciones.js')
   
   // Luego las consultas:
   load('consultas_sencillas.js')
   load('consultas_operadores.js')
   ```

### Opción 2: MongoDB Shell (mongosh)
1. Abrir terminal y conectar a MongoDB:
   ```bash
   mongosh
   ```
2. Cargar y ejecutar los scripts:
   ```javascript
   load('ruta/al/archivo/inserciones.js')
   load('ruta/al/archivo/consultas_sencillas.js')
   load('ruta/al/archivo/consultas_operadores.js')
   ```

### Opción 3: MongoDB Atlas (Cloud)
1. Acceder a MongoDB Atlas
2. Ir a Collections > Browse Collections
3. Crear la base de datos `torneo_deportivo_2025`
4. Usar el shell integrado para ejecutar los scripts

## Consultas Implementadas

### Consultas Sencillas (5)
- Delegaciones por continente
- Atletas por país
- Atletas por disciplina
- Delegaciones por hotel
- Atletas por género

### Consultas con Operadores (12)
Incluyen uso de operadores como:
- **Comparación**: `$gt`, `$lt`, `$gte`, `$lte`, `$eq`, `$ne`
- **Lógicos**: `$and`, `$or`
- **Arrays**: `$in`, `$nin`
- **Campos anidados**: Consultas en subdocumentos
- **Arrays complejos**: Búsqueda en arrays de objetos

## Características Destacadas

✅ **Modelo flexible**: Soporta múltiples disciplinas por atleta  
✅ **Datos realistas**: 15 países de todos los continentes con datos coherentes  
✅ **Consultas variadas**: Desde básicas hasta complejas con operadores  
✅ **Escalabilidad**: Estructura preparada para agregar más colecciones  
✅ **Documentación completa**: Cada decisión de diseño justificada  

## Tecnologías Utilizadas

- **Base de datos**: MongoDB 7.0+
- **Lenguaje**: JavaScript (MongoDB Shell)
- **Modelo**: NoSQL orientado a documentos

## Contacto

Si tienes dudas sobre la implementación o quieres sugerir mejoras, no dudes en contactarme.

---
*Proyecto desarrollado como parte del taller de MongoDB - Bases de Datos MondoDBI*