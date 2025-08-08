# Modelo de Datos - Torneo Deportivo Internacional

## Análisis del Contexto

Para el Torneo Deportivo Internacional de *GlobalSports Union*, he identificado las siguientes entidades principales:

### Entidades Necesarias:
1. **Países/Delegaciones**: Representan a los países participantes con sus delegaciones oficiales
2. **Atletas**: Deportistas individuales que compiten en diferentes disciplinas
3. **Equipos**: Grupos de atletas que compiten juntos en deportes de equipo
4. **Competencias**: Eventos deportivos específicos con resultados y programación
5. **Disciplinas**: Categorías deportivas del torneo

## Colecciones Diseñadas

### 1. Colección `delegaciones`
Almacena información de los países participantes y sus delegaciones oficiales.

**Campos:**
- `_id`: ObjectId (identificador único)
- `pais`: String (nombre del país)
- `codigo_pais`: String (código ISO de 3 letras, ej: "COL", "USA")
- `continente`: String (continente al que pertenece)
- `jefe_delegacion`: Object
  - `nombre`: String
  - `email`: String
  - `telefono`: String
- `total_atletas`: Number (cantidad total de atletas de la delegación)
- `disciplinas_participantes`: Array de String (disciplinas en las que participa)
- `medallas_historicas`: Object
  - `oro`: Number
  - `plata`: Number
  - `bronce`: Number
- `fecha_llegada`: Date
- `hotel_asignado`: String

### 2. Colección `atletas`
Contiene información detallada de todos los deportistas participantes.

**Campos:**
- `_id`: ObjectId (identificador único)
- `nombre_completo`: String
- `fecha_nacimiento`: Date
- `edad`: Number
- `genero`: String ("M" o "F")
- `pais`: String (referencia al país de la delegación)
- `codigo_pais`: String (código ISO del país)
- `disciplina_principal`: String
- `disciplinas_secundarias`: Array de String (disciplinas adicionales)
- `categoria_peso`: String (para deportes como judo, boxeo)
- `record_personal`: Object (récord personal del atleta)
  - `tiempo_distancia`: String
  - `fecha_record`: Date
  - `ubicacion`: String
- `medallas_previas`: Array de Object
  - `torneo`: String
  - `año`: Number
  - `medalla`: String
  - `disciplina`: String
- `equipo_id`: ObjectId (referencia al equipo si aplica)
- `activo`: Boolean (si está activo para competir)
- `lesionado`: Boolean

### 3. Colección `competencias`
Registra todas las competencias programadas y sus resultados.

**Campos:**
- `_id`: ObjectId (identificador único)
- `nombre_competencia`: String
- `disciplina`: String
- `categoria`: String (ej: "masculino", "femenino", "mixto")
- `tipo_competencia`: String ("individual", "equipo", "relevo")
- `fecha_hora`: Date
- `ubicacion`: String (sede de la competencia)
- `fase`: String ("clasificatoria", "semifinal", "final")
- `participantes`: Array de Object
  - `atleta_id`: ObjectId
  - `nombre`: String
  - `pais`: String
  - `tiempo_marca`: String
  - `posicion`: Number
- `resultados`: Object
  - `oro`: Object {atleta_id, nombre, pais, marca}
  - `plata`: Object {atleta_id, nombre, pais, marca}
  - `bronce`: Object {atleta_id, nombre, pais, marca}
- `record_mundial`: Boolean
- `record_torneo`: Boolean
- `estado`: String ("programada", "en_curso", "finalizada", "cancelada")
- `arbitros`: Array de String
- `clima`: String (condiciones climáticas si es relevante)

## Justificación de la Estructura

### Decisiones de Diseño:

1. **Separación de Entidades**: Mantuve las delegaciones, atletas y competencias en colecciones separadas para:
   - Facilitar consultas específicas por tipo de entidad
   - Permitir escalabilidad independiente
   - Simplificar el mantenimiento de datos

2. **Desnormalización Controlada**: 
   - Incluí campos como `pais` y `codigo_pais` en múltiples colecciones para optimizar consultas frecuentes
   - Mantuve subdocumentos para información relacionada (medallas, récords)

3. **Flexibilidad en Disciplinas**:
   - Usé arrays para permitir que atletas participen en múltiples disciplinas
   - Distinguí entre disciplina principal y secundarias

4. **Tipos de Datos Optimizados**:
   - `Date` para fechas y horarios precisos
   - `Boolean` para estados binarios (activo/inactivo, lesionado)
   - `Number` para datos numéricos (edad, cantidad de medallas)
   - `Object` para estructuras complejas anidadas
   - `Array` para listas de elementos relacionados

5. **Escalabilidad**:
   - La estructura permite agregar fácilmente nuevas disciplinas
   - Los IDs permiten referencias entre colecciones sin duplicar datos
   - Los campos de estado permiten manejar diferentes fases del torneo

### Relaciones Entre Colecciones:

- **Delegaciones ↔ Atletas**: Relación uno-a-muchos a través del campo `pais`
- **Atletas ↔ Competencias**: Relación muchos-a-muchos a través del array `participantes`
- **Equipos ↔ Atletas**: Relación uno-a-muchos a través del campo `equipo_id`

Esta estructura permite realizar consultas eficientes tanto simples como complejas, mantiene la integridad de los datos y es fácil de mantener y escalar.