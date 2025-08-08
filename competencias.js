use torneo_deportivo_2025;

// INSERCIÓN DE COMPETENCIAS (15 registros)

db.competencias.insertMany([
    {
        nombre_competencia: "Final Masculina 100m Libre",
        disciplina: "natación",
        categoria: "masculino",
        tipo_competencia: "individual",
        fecha_hora: new Date("2025-07-25T19:30:00Z"),
        ubicacion: "Centro Acuático Nacional",
        fase: "final",
        participantes: [
            { atleta_nombre: "Michael Thompson", pais: "Estados Unidos", carril: 4, tiempo_marca: "47.12s", posicion: 1 },
            { atleta_nombre: "Lucas Silva", pais: "Brasil", carril: 5, tiempo_marca: "47.89s", posicion: 2 },
            { atleta_nombre: "David Chen", pais: "China", carril: 3, tiempo_marca: "48.15s", posicion: 3 }
        ],
        resultados: {
            oro: { atleta_nombre: "Michael Thompson", pais: "Estados Unidos", marca: "47.12s" },
            plata: { atleta_nombre: "Lucas Silva", pais: "Brasil", marca: "47.89s" },
            bronce: { atleta_nombre: "David Chen", pais: "China", marca: "48.15s" }
        },
        record_mundial: false,
        record_torneo: true,
        estado: "finalizada",
        arbitros: ["Juan Carlos Méndez", "Sarah Johnson"],
        clima: "Cubierto"
    },
    {
        nombre_competencia: "Final Femenina Judo 63kg",
        disciplina: "judo",
        categoria: "femenino",
        tipo_competencia: "individual",
        fecha_hora: new Date("2025-07-26T16:45:00Z"),
        ubicacion: "Dojo Principal",
        fase: "final",
        participantes: [
            { atleta_nombre: "Yuki Tanaka", pais: "Japón", tiempo_marca: "Ippon", posicion: 1 },
            { atleta_nombre: "Marie Dubois", pais: "Francia", tiempo_marca: "Waza-ari", posicion: 2 }
        ],
        resultados: {
            oro: { atleta_nombre: "Yuki Tanaka", pais: "Japón", marca: "Ippon" },
            plata: { atleta_nombre: "Marie Dubois", pais: "Francia", marca: "Waza-ari" },
            bronce: null
        },
        record_mundial: false,
        record_torneo: false,
        estado: "finalizada",
        arbitros: ["Hiroshi Yamamoto", "Anna Kowalski"],
        clima: "N/A"
    },
    {
        nombre_competencia: "Maratón Masculino",
        disciplina: "atletismo",
        categoria: "masculino",
        tipo_competencia: "individual",
        fecha_hora: new Date("2025-07-27T07:00:00Z"),
        ubicacion: "Circuito Ciudad",
        fase: "final",
        participantes: [
            { atleta_nombre: "Carlos Andrés Rodríguez", pais: "Colombia", tiempo_marca: "2:08:45", posicion: 1 },
            { atleta_nombre: "Eliud Kipchoge Jr.", pais: "Kenia", tiempo_marca: "2:09:12", posicion: 2 },
            { atleta_nombre: "Hans Schmidt", pais: "Alemania", tiempo_marca: "2:10:33", posicion: 3 }
        ],
        resultados: {
            oro: { atleta_nombre: "Carlos Andrés Rodríguez", pais: "Colombia", marca: "2:08:45" },
            plata: { atleta_nombre: "Eliud Kipchoge Jr.", pais: "Kenia", marca: "2:09:12" },
            bronce: { atleta_nombre: "Hans Schmidt", pais: "Alemania", marca: "2:10:33" }
        },
        record_mundial: false,
        record_torneo: true,
        estado: "finalizada",
        arbitros: ["Roberto Silva", "Michael Johnson"],
        clima: "Soleado, 22°C"
    },
    {
        nombre_competencia: "Final Femenina 200m Libre",
        disciplina: "natación",
        categoria: "femenino",
        tipo_competencia: "individual",
        fecha_hora: new Date("2025-07-26T20:15:00Z"),
        ubicacion: "Centro Acuático Nacional",
        fase: "final",
        participantes: [
            { atleta_nombre: "Emma Wilson", pais: "Australia", tiempo_marca: "1:54.23", posicion: 1 },
            { atleta_nombre: "Federica Pellegrini Jr.", pais: "Italia", tiempo_marca: "1:52.98", posicion: 1 },
            { atleta_nombre: "Sophie Miller", pais: "Reino Unido", tiempo_marca: "1:55.67", posicion: 3 }
        ],
        resultados: {
            oro: { atleta_nombre: "Federica Pellegrini Jr.", pais: "Italia", marca: "1:52.98" },
            plata: { atleta_nombre: "Emma Wilson", pais: "Australia", marca: "1:54.23" },
            bronce: { atleta_nombre: "Sophie Miller", pais: "Reino Unido", marca: "1:55.67" }
        },
        record_mundial: false,
        record_torneo: true,
        estado: "finalizada",
        arbitros: ["Maria González", "Peter Anderson"],
        clima: "Cubierto"
    },
    {
        nombre_competencia: "Semifinal Masculina 100m Planos",
        disciplina: "atletismo",
        categoria: "masculino",
        tipo_competencia: "individual",
        fecha_hora: new Date("2025-07-28T18:30:00Z"),
        ubicacion: "Estadio Olímpico",
        fase: "semifinal",
        participantes: [
            { atleta_nombre: "Usain Powell", pais: "Jamaica", tiempo_marca: "9.72s", posicion: 1 },
            { atleta_nombre: "Michael Thompson", pais: "Estados Unidos", tiempo_marca: "9.85s", posicion: 2 },
            { atleta_nombre: "Carlos Andrés Rodríguez", pais: "Colombia", tiempo_marca: "9.92s", posicion: 3 }
        ],
        resultados: null,
        record_mundial: false,
        record_torneo: false,
        estado: "finalizada",
        arbitros: ["James Wilson", "Ana Santos"],
        clima: "Parcialmente nublado, 24°C"
    },
    {
        nombre_competencia: "Final Masculina Gimnasia Anillas",
        disciplina: "gimnasia",
        categoria: "masculino",
        tipo_competencia: "individual",
        fecha_hora: new Date("2025-07-29T19:00:00Z"),
        ubicacion: "Gimnasio Nacional",
        fase: "final",
        participantes: [
            { atleta_nombre: "David Chen", pais: "China", tiempo_marca: "15.850", posicion: 1 },
            { atleta_nombre: "Hans Schmidt", pais: "Alemania", tiempo_marca: "15.650", posicion: 2 },
            { atleta_nombre: "Lucas Silva", pais: "Brasil", tiempo_marca: "15.450", posicion: 3 }
        ],
        resultados: {
            oro: { atleta_nombre: "David Chen", pais: "China", marca: "15.850" },
            plata: { atleta_nombre: "Hans Schmidt", pais: "Alemania", marca: "15.650" },
            bronce: { atleta_nombre: "Lucas Silva", pais: "Brasil", marca: "15.450" }
        },
        record_mundial: false,
        record_torneo: true,
        estado: "finalizada",
        arbitros: ["Nadia Comaneci", "Li Wei"],
        clima: "Cubierto"
    },
    {
        nombre_competencia: "Final Femenina Tenis Individual",
        disciplina: "tenis",
        categoria: "femenino",
        tipo_competencia: "individual",
        fecha_hora: new Date("2025-07-30T15:30:00Z"),
        ubicacion: "Cancha Central",
        fase: "final",
        participantes: [
            { atleta_nombre: "Isabella García", pais: "España", tiempo_marca: "6-4, 7-5", posicion: 1 },
            { atleta_nombre: "Sophie Miller", pais: "Reino Unido", tiempo_marca: "4-6, 5-7", posicion: 2 }
        ],
        resultados: {
            oro: { atleta_nombre: "Isabella García", pais: "España", marca: "6-4, 7-5" },
            plata: { atleta_nombre: "Sophie Miller", pais: "Reino Unido", marca: "4-6, 5-7" },
            bronce: null
        },
        record_mundial: false,
        record_torneo: false,
        estado: "finalizada",
        arbitros: ["Carlos Ramos", "Eva Asderaki"],
        clima: "Soleado, 28°C"
    },
    {
        nombre_competencia: "Final Masculina Hockey sobre Hielo",
        disciplina: "hockey",
        categoria: "masculino",
        tipo_competencia: "equipo",
        fecha_hora: new Date("2025-07-31T20:00:00Z"),
        ubicacion: "Arena de Hielo",
        fase: "final",
        participantes: [
            { atleta_nombre: "Equipo Canadá", pais: "Canadá", tiempo_marca: "4-2", posicion: 1 },
            { atleta_nombre: "Equipo Estados Unidos", pais: "Estados Unidos", tiempo_marca: "2-4", posicion: 2 }
        ],
        resultados: {
            oro: { atleta_nombre: "Equipo Canadá", pais: "Canadá", marca: "4-2" },
            plata: { atleta_nombre: "Equipo Estados Unidos", pais: "Estados Unidos", marca: "2-4" },
            bronce: null
        },
        record_mundial: false,
        record_torneo: false,
        estado: "finalizada",
        arbitros: ["Mike Smith", "David Wilson"],
        clima: "Cubierto"
    },
    {
        nombre_competencia: "Clasificatoria Femenina Ciclismo Ruta",
        disciplina: "ciclismo",
        categoria: "femenino",
        tipo_competencia: "individual",
        fecha_hora: new Date("2025-08-01T09:00:00Z"),
        ubicacion: "Circuito de Montaña",
        fase: "clasificatoria",
        participantes: [
            { atleta_nombre: "Annemiek van Vleuten Jr.", pais: "Países Bajos", tiempo_marca: "3:25:15", posicion: 1 },
            { atleta_nombre: "Isabella García", pais: "España", tiempo_marca: "3:28:45", posicion: 2 },
            { atleta_nombre: "Emma Wilson", pais: "Australia", tiempo_marca: "3:32:10", posicion: 3 }
        ],
        resultados: null,
        record_mundial: false,
        record_torneo: true,
        estado: "finalizada",
        arbitros: ["Tour Official 1", "Tour Official 2"],
        clima: "Ventoso, 20°C"
    },
    {
        nombre_competencia: "Final Masculina Esgrima Espada",
        disciplina: "esgrima",
        categoria: "masculino",
        tipo_competencia: "individual",
        fecha_hora: new Date("2025-08-02T17:45:00Z"),
        ubicacion: "Sala de Esgrima",
        fase: "final",
        participantes: [
            { atleta_nombre: "Hans Schmidt", pais: "Alemania", tiempo_marca: "15-12", posicion: 1 },
            { atleta_nombre: "David Chen", pais: "China", tiempo_marca: "12-15", posicion: 2 }
        ],
        resultados: {
            oro: { atleta_nombre: "Hans Schmidt", pais: "Alemania", marca: "15-12" },
            plata: { atleta_nombre: "David Chen", pais: "China", marca: "12-15" },
            bronce: null
        },
        record_mundial: false,
        record_torneo: false,
        estado: "finalizada",
        arbitros: ["Pierre Dubois", "Elena Rossi"],
        clima: "Cubierto"
    },
    {
        nombre_competencia: "Semifinal Femenina 1500m",
        disciplina: "atletismo",
        categoria: "femenino",
        tipo_competencia: "individual",
        fecha_hora: new Date("2025-08-03T19:15:00Z"),
        ubicacion: "Estadio Olímpico",
        fase: "semifinal",
        participantes: [
            { atleta_nombre: "Sophie Miller", pais: "Reino Unido", tiempo_marca: "3:52.14", posicion: 1 },
            { atleta_nombre: "Emma Wilson", pais: "Australia", tiempo_marca: "3:54.67", posicion: 2 },
            { atleta_nombre: "Isabella García", pais: "España", tiempo_marca: "3:56.23", posicion: 3 }
        ],
        resultados: null,
        record_mundial: false,
        record_torneo: true,
        estado: "finalizada",
        arbitros: ["Sebastian Coe", "Paula Radcliffe"],
        clima: "Lluvioso, 18°C"
    },
    {
        nombre_competencia: "Final Masculina Canoa Slalom",
        disciplina: "canoa",
        categoria: "masculino",
        tipo_competencia: "individual",
        fecha_hora: new Date("2025-08-04T14:30:00Z"),
        ubicacion: "Canal de Aguas Bravas",
        fase: "final",
        participantes: [
            { atleta_nombre: "Hans Schmidt", pais: "Alemania", tiempo_marca: "1:35.24", posicion: 1 },
            { atleta_nombre: "Connor McDavid Jr.", pais: "Canadá", tiempo_marca: "1:36.89", posicion: 2 },
            { atleta_nombre: "Lucas Silva", pais: "Brasil", tiempo_marca: "1:38.45", posicion: 3 }
        ],
        resultados: {
            oro: { atleta_nombre: "Hans Schmidt", pais: "Alemania", marca: "1:35.24" },
            plata: { atleta_nombre: "Connor McDavid Jr.", pais: "Canadá", marca: "1:36.89" },
            bronce: { atleta_nombre: "Lucas Silva", pais: "Brasil", marca: "1:38.45" }
        },
        record_mundial: false,
        record_torneo: true,
        estado: "finalizada",
        arbitros: ["Water Sports Official", "Canoe Judge"],
        clima: "Soleado, 25°C"
    },
    {
        nombre_competencia: "Final Masculina Fútbol",
        disciplina: "fútbol",
        categoria: "masculino",
        tipo_competencia: "equipo",
        fecha_hora: new Date("2025-08-05T20:30:00Z"),
        ubicacion: "Estadio Nacional",
        fase: "final",
        participantes: [
            { atleta_nombre: "Selección Brasil", pais: "Brasil", tiempo_marca: "3-1", posicion: 1 },
            { atleta_nombre: "Selección Colombia", pais: "Colombia", tiempo_marca: "1-3", posicion: 2 }
        ],
        resultados: {
            oro: { atleta_nombre: "Selección Brasil", pais: "Brasil", marca: "3-1" },
            plata: { atleta_nombre: "Selección Colombia", pais: "Colombia", marca: "1-3" },
            bronce: null
        },
        record_mundial: false,
        record_torneo: false,
        estado: "finalizada",
        arbitros: ["FIFA Referee 1", "FIFA Referee 2"],
        clima: "Despejado, 26°C"
    },
    {
        nombre_competencia: "Programada: Final Volleyball Femenino",
        disciplina: "volleyball",
        categoria: "femenino",
        tipo_competencia: "equipo",
        fecha_hora: new Date("2025-08-06T18:00:00Z"),
        ubicacion: "Coliseo de Volleyball",
        fase: "final",
        participantes: [
            { atleta_nombre: "Selección Brasil", pais: "Brasil", tiempo_marca: null, posicion: null },
            { atleta_nombre: "Selección Italia", pais: "Italia", tiempo_marca: null, posicion: null }
        ],
        resultados: null,
        record_mundial: false,
        record_torneo: false,
        estado: "programada",
        arbitros: ["FIVB Official 1", "FIVB Official 2"],
        clima: "Cubierto"
    },
    {
        nombre_competencia: "Programada: Final Atletismo 4x100m Relevo",
        disciplina: "atletismo",
        categoria: "mixto",
        tipo_competencia: "relevo",
        fecha_hora: new Date("2025-08-07T19:45:00Z"),
        ubicacion: "Estadio Olímpico",
        fase: "final",
        participantes: [
            { atleta_nombre: "Relevo Jamaica", pais: "Jamaica", tiempo_marca: null, posicion: null },
            { atleta_nombre: "Relevo Estados Unidos", pais: "Estados Unidos", tiempo_marca: null, posicion: null },
            { atleta_nombre: "Relevo Reino Unido", pais: "Reino Unido", tiempo_marca: null, posicion: null }
        ],
        resultados: null,
        record_mundial: false,
        record_torneo: false,
        estado: "programada",
        arbitros: ["World Athletics Official", "Track Judge"],
        clima: "Por determinar"
    }
]);