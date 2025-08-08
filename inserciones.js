use torneo_deportivo_2025;

// INSERCIÓN DE DELEGACIONES (15 registros)

db.delegaciones.insertMany([
    {
        pais: "Colombia",
        codigo_pais: "COL",
        continente: "América del Sur",
        jefe_delegacion: {
            nombre: "Carlos Ramírez",
            email: "carlos.ramirez@olympics.col",
            telefono: "+57-301-555-0101"
        },
        total_atletas: 45,
        disciplinas_participantes: ["atletismo", "natación", "ciclismo", "judo", "fútbol"],
        medallas_historicas: { oro: 12, plata: 18, bronce: 25 },
        fecha_llegada: new Date("2025-07-15T08:30:00Z"),
        hotel_asignado: "Hotel Internacional Plaza"
    },
    {
        pais: "Brasil",
        codigo_pais: "BRA",
        continente: "América del Sur",
        jefe_delegacion: {
            nombre: "Ana Santos",
            email: "ana.santos@olympics.bra",
            telefono: "+55-11-555-0202"
        },
        total_atletas: 78,
        disciplinas_participantes: ["atletismo", "natación", "fútbol", "volleyball", "judo"],
        medallas_historicas: { oro: 45, plata: 52, bronce: 41 },
        fecha_llegada: new Date("2025-07-14T14:20:00Z"),
        hotel_asignado: "Grand Hotel Atlántico"
    },
    {
        pais: "Estados Unidos",
        codigo_pais: "USA",
        continente: "América del Norte",
        jefe_delegacion: {
            nombre: "Michael Johnson",
            email: "m.johnson@teamusa.org",
            telefono: "+1-555-555-0303"
        },
        total_atletas: 95,
        disciplinas_participantes: ["atletismo", "natación", "basketball", "tenis", "golf"],
        medallas_historicas: { oro: 156, plata: 134, bronce: 98 },
        fecha_llegada: new Date("2025-07-13T16:45:00Z"),
        hotel_asignado: "Luxury Sports Resort"
    },
    {
        pais: "Japón",
        codigo_pais: "JPN",
        continente: "Asia",
        jefe_delegacion: {
            nombre: "Hiroshi Tanaka",
            email: "h.tanaka@joc.or.jp",
            telefono: "+81-3-555-0404"
        },
        total_atletas: 67,
        disciplinas_participantes: ["judo", "karate", "natación", "gimnasia", "atletismo"],
        medallas_historicas: { oro: 89, plata: 76, bronce: 83 },
        fecha_llegada: new Date("2025-07-16T09:15:00Z"),
        hotel_asignado: "Sakura International Hotel"
    },
    {
        pais: "Francia",
        codigo_pais: "FRA",
        continente: "Europa",
        jefe_delegacion: {
            nombre: "Marie Dubois",
            email: "marie.dubois@franceolympique.fr",
            telefono: "+33-1-555-0505"
        },
        total_atletas: 58,
        disciplinas_participantes: ["esgrima", "ciclismo", "natación", "tenis", "rugby"],
        medallas_historicas: { oro: 67, plata: 71, bronce: 89 },
        fecha_llegada: new Date("2025-07-14T11:30:00Z"),
        hotel_asignado: "Le Grand Hotel International"
    },
    {
        pais: "Australia",
        codigo_pais: "AUS",
        continente: "Oceanía",
        jefe_delegacion: {
            nombre: "David Wilson",
            email: "d.wilson@olympics.org.au",
            telefono: "+61-2-555-0606"
        },
        total_atletas: 52,
        disciplinas_participantes: ["natación", "atletismo", "surf", "rugby", "tenis"],
        medallas_historicas: { oro: 87, plata: 94, bronce: 76 },
        fecha_llegada: new Date("2025-07-15T20:00:00Z"),
        hotel_asignado: "Ocean View Resort"
    },
    {
        pais: "China",
        codigo_pais: "CHN",
        continente: "Asia",
        jefe_delegacion: {
            nombre: "Li Wei",
            email: "li.wei@olympic.cn",
            telefono: "+86-10-555-0707"
        },
        total_atletas: 89,
        disciplinas_participantes: ["gimnasia", "natación", "tenis_mesa", "badminton", "atletismo"],
        medallas_historicas: { oro: 134, plata: 112, bronce: 95 },
        fecha_llegada: new Date("2025-07-13T22:45:00Z"),
        hotel_asignado: "Dragon Palace Hotel"
    },
    {
        pais: "Reino Unido",
        codigo_pais: "GBR",
        continente: "Europa",
        jefe_delegacion: {
            nombre: "James Smith",
            email: "j.smith@teamgb.com",
            telefono: "+44-20-555-0808"
        },
        total_atletas: 71,
        disciplinas_participantes: ["atletismo", "ciclismo", "remo", "vela", "equitación"],
        medallas_historicas: { oro: 98, plata: 87, bronce: 102 },
        fecha_llegada: new Date("2025-07-14T07:30:00Z"),
        hotel_asignado: "Royal Sports Hotel"
    },
    {
        pais: "Alemania",
        codigo_pais: "GER",
        continente: "Europa",
        jefe_delegacion: {
            nombre: "Klaus Mueller",
            email: "k.mueller@dosb.de",
            telefono: "+49-30-555-0909"
        },
        total_atletas: 63,
        disciplinas_participantes: ["atletismo", "natación", "fútbol", "hockey", "canoa"],
        medallas_historicas: { oro: 76, plata: 82, bronce: 91 },
        fecha_llegada: new Date("2025-07-15T13:15:00Z"),
        hotel_asignado: "Heidelberg Sports Complex"
    },
    {
        pais: "España",
        codigo_pais: "ESP",
        continente: "Europa",
        jefe_delegacion: {
            nombre: "Carmen González",
            email: "c.gonzalez@coe.es",
            telefono: "+34-91-555-1010"
        },
        total_atletas: 49,
        disciplinas_participantes: ["tenis", "atletismo", "natación", "basketball", "fútbol"],
        medallas_historicas: { oro: 34, plata: 41, bronce: 67 },
        fecha_llegada: new Date("2025-07-16T15:45:00Z"),
        hotel_asignado: "Casa del Deporte"
    },
    {
        pais: "Kenia",
        codigo_pais: "KEN",
        continente: "África",
        jefe_delegacion: {
            nombre: "Grace Wanjiku",
            email: "g.wanjiku@nock.or.ke",
            telefono: "+254-20-555-1111"
        },
        total_atletas: 28,
        disciplinas_participantes: ["atletismo", "rugby", "volleyball", "boxing"],
        medallas_historicas: { oro: 45, plata: 23, bronce: 18 },
        fecha_llegada: new Date("2025-07-17T10:20:00Z"),
        hotel_asignado: "Safari Lodge Hotel"
    },
    {
        pais: "Jamaica",
        codigo_pais: "JAM",
        continente: "América Central",
        jefe_delegacion: {
            nombre: "Marcus Campbell",
            email: "m.campbell@joa.org.jm",
            telefono: "+1-876-555-1212"
        },
        total_atletas: 22,
        disciplinas_participantes: ["atletismo", "boxing", "natación"],
        medallas_historicas: { oro: 24, plata: 15, bronce: 12 },
        fecha_llegada: new Date("2025-07-16T18:30:00Z"),
        hotel_asignado: "Tropical Paradise Resort"
    },
    {
        pais: "Italia",
        codigo_pais: "ITA",
        continente: "Europa",
        jefe_delegacion: {
            nombre: "Giuseppe Rossi",
            email: "g.rossi@coni.it",
            telefono: "+39-06-555-1313"
        },
        total_atletas: 56,
        disciplinas_participantes: ["atletismo", "natación", "ciclismo", "esgrima", "volleyball"],
        medallas_historicas: { oro: 67, plata: 78, bronce: 84 },
        fecha_llegada: new Date("2025-07-15T12:00:00Z"),
        hotel_asignado: "Villa Olimpica"
    },
    {
        pais: "Canadá",
        codigo_pais: "CAN",
        continente: "América del Norte",
        jefe_delegacion: {
            nombre: "Sarah Thompson",
            email: "s.thompson@olympic.ca",
            telefono: "+1-613-555-1414"
        },
        total_atletas: 61,
        disciplinas_participantes: ["hockey", "atletismo", "natación", "canoa", "ski_acuático"],
        medallas_historicas: { oro: 45, plata: 67, bronce: 78 },
        fecha_llegada: new Date("2025-07-14T19:15:00Z"),
        hotel_asignado: "Maple Leaf Sports Hotel"
    },
    {
        pais: "Países Bajos",
        codigo_pais: "NED",
        continente: "Europa",
        jefe_delegacion: {
            nombre: "Anna van der Berg",
            email: "a.vandenberg@nocnsf.nl",
            telefono: "+31-20-555-1515"
        },
        total_atletas: 38,
        disciplinas_participantes: ["ciclismo", "hockey", "natación", "remo", "vela"],
        medallas_historicas: { oro: 56, plata: 43, bronce: 51 },
        fecha_llegada: new Date("2025-07-17T14:45:00Z"),
        hotel_asignado: "Orange Sports Center"
    }
]);

// INSERCIÓN DE ATLETAS (15 registros)


db.atletas.insertMany([
    {
        nombre_completo: "Carlos Andrés Rodríguez",
        fecha_nacimiento: new Date("1995-03-15T00:00:00Z"),
        edad: 30,
        genero: "M",
        pais: "Colombia",
        codigo_pais: "COL",
        disciplina_principal: "atletismo",
        disciplinas_secundarias: ["maratón", "10000m"],
        categoria_peso: null,
        record_personal: {
            tiempo_distancia: "2:08:45",
            fecha_record: new Date("2024-10-15T00:00:00Z"),
            ubicacion: "Bogotá, Colombia"
        },
        medallas_previas: [
            { torneo: "Sudamericanos 2023", año: 2023, medalla: "oro", disciplina: "maratón" },
            { torneo: "Panamericanos 2022", año: 2022, medalla: "plata", disciplina: "10000m" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    },
    {
        nombre_completo: "Michael Thompson",
        fecha_nacimiento: new Date("1998-07-22T00:00:00Z"),
        edad: 27,
        genero: "M",
        pais: "Estados Unidos",
        codigo_pais: "USA",
        disciplina_principal: "natación",
        disciplinas_secundarias: ["100m libre", "200m libre"],
        categoria_peso: null,
        record_personal: {
            tiempo_distancia: "47.12s",
            fecha_record: new Date("2024-08-20T00:00:00Z"),
            ubicacion: "Los Angeles, USA"
        },
        medallas_previas: [
            { torneo: "Mundial 2023", año: 2023, medalla: "oro", disciplina: "100m libre" },
            { torneo: "Mundial 2023", año: 2023, medalla: "bronce", disciplina: "200m libre" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    },
    {
        nombre_completo: "Yuki Tanaka",
        fecha_nacimiento: new Date("1992-11-08T00:00:00Z"),
        edad: 32,
        genero: "F",
        pais: "Japón",
        codigo_pais: "JPN",
        disciplina_principal: "judo",
        disciplinas_secundarias: [],
        categoria_peso: "63kg",
        record_personal: {
            tiempo_distancia: "Cinturón Negro 6to Dan",
            fecha_record: new Date("2023-05-10T00:00:00Z"),
            ubicacion: "Tokio, Japón"
        },
        medallas_previas: [
            { torneo: "Mundial 2024", año: 2024, medalla: "oro", disciplina: "judo 63kg" },
            { torneo: "Asiáticos 2023", año: 2023, medalla: "oro", disciplina: "judo 63kg" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    },
    {
        nombre_completo: "Marie Dubois",
        fecha_nacimiento: new Date("1996-04-12T00:00:00Z"),
        edad: 29,
        genero: "F",
        pais: "Francia",
        codigo_pais: "FRA",
        disciplina_principal: "esgrima",
        disciplinas_secundarias: ["espada", "florete"],
        categoria_peso: null,
        record_personal: {
            tiempo_distancia: "Ranking Mundial #3",
            fecha_record: new Date("2024-12-01T00:00:00Z"),
            ubicacion: "París, Francia"
        },
        medallas_previas: [
            { torneo: "Europeos 2024", año: 2024, medalla: "plata", disciplina: "esgrima espada" },
            { torneo: "Mundial 2023", año: 2023, medalla: "bronce", disciplina: "esgrima florete" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    },
    {
        nombre_completo: "David Chen",
        fecha_nacimiento: new Date("1999-09-30T00:00:00Z"),
        edad: 26,
        genero: "M",
        pais: "China",
        codigo_pais: "CHN",
        disciplina_principal: "gimnasia",
        disciplinas_secundarias: ["anillas", "barras_paralelas"],
        categoria_peso: null,
        record_personal: {
            tiempo_distancia: "15.850 puntos",
            fecha_record: new Date("2024-06-15T00:00:00Z"),
            ubicacion: "Beijing, China"
        },
        medallas_previas: [
            { torneo: "Asiáticos 2024", año: 2024, medalla: "oro", disciplina: "gimnasia anillas" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    },
    {
        nombre_completo: "Emma Wilson",
        fecha_nacimiento: new Date("1997-12-05T00:00:00Z"),
        edad: 28,
        genero: "F",
        pais: "Australia",
        codigo_pais: "AUS",
        disciplina_principal: "natación",
        disciplinas_secundarias: ["400m libre", "800m libre"],
        categoria_peso: null,
        record_personal: {
            tiempo_distancia: "3:58.42",
            fecha_record: new Date("2024-03-10T00:00:00Z"),
            ubicacion: "Melbourne, Australia"
        },
        medallas_previas: [
            { torneo: "Commonwealth 2022", año: 2022, medalla: "oro", disciplina: "400m libre" },
            { torneo: "Mundial 2023", año: 2023, medalla: "plata", disciplina: "800m libre" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    },
    {
        nombre_completo: "Lucas Silva",
        fecha_nacimiento: new Date("1994-01-20T00:00:00Z"),
        edad: 31,
        genero: "M",
        pais: "Brasil",
        codigo_pais: "BRA",
        disciplina_principal: "fútbol",
        disciplinas_secundarias: [],
        categoria_peso: null,
        record_personal: {
            tiempo_distancia: "45 goles en temporada",
            fecha_record: new Date("2024-05-20T00:00:00Z"),
            ubicacion: "São Paulo, Brasil"
        },
        medallas_previas: [
            { torneo: "Copa América 2021", año: 2021, medalla: "oro", disciplina: "fútbol" },
            { torneo: "Sudamericanos 2023", año: 2023, medalla: "oro", disciplina: "fútbol" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    },
    {
        nombre_completo: "Sophie Miller",
        fecha_nacimiento: new Date("2000-06-18T00:00:00Z"),
        edad: 25,
        genero: "F",
        pais: "Reino Unido",
        codigo_pais: "GBR",
        disciplina_principal: "atletismo",
        disciplinas_secundarias: ["1500m", "5000m"],
        categoria_peso: null,
        record_personal: {
            tiempo_distancia: "3:52.14",
            fecha_record: new Date("2024-07-08T00:00:00Z"),
            ubicacion: "Londres, Reino Unido"
        },
        medallas_previas: [
            { torneo: "Europeos 2022", año: 2022, medalla: "bronce", disciplina: "1500m" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    },
    {
        nombre_completo: "Hans Schmidt",
        fecha_nacimiento: new Date("1993-08-12T00:00:00Z"),
        edad: 32,
        genero: "M",
        pais: "Alemania",
        codigo_pais: "GER",
        disciplina_principal: "canoa",
        disciplinas_secundarias: ["kayak", "canoa_slalom"],
        categoria_peso: null,
        record_personal: {
            tiempo_distancia: "1:35.24",
            fecha_record: new Date("2024-04-22T00:00:00Z"),
            ubicacion: "Munich, Alemania"
        },
        medallas_previas: [
            { torneo: "Mundial 2023", año: 2023, medalla: "plata", disciplina: "canoa slalom" },
            { torneo: "Europeos 2024", año: 2024, medalla: "oro", disciplina: "kayak" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    },
    {
        nombre_completo: "Isabella García",
        fecha_nacimiento: new Date("2001-02-28T00:00:00Z"),
        edad: 24,
        genero: "F",
        pais: "España",
        codigo_pais: "ESP",
        disciplina_principal: "tenis",
        disciplinas_secundarias: ["tenis dobles"],
        categoria_peso: null,
        record_personal: {
            tiempo_distancia: "WTA Ranking #15",
            fecha_record: new Date("2024-09-01T00:00:00Z"),
            ubicacion: "Madrid, España"
        },
        medallas_previas: [
            { torneo: "Europeos 2023", año: 2023, medalla: "bronce", disciplina: "tenis individual" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    },
    {
        nombre_completo: "Eliud Kipchoge Jr.",
        fecha_nacimiento: new Date("2000-12-12T00:00:00Z"),
        edad: 24,
        genero: "M",
        pais: "Kenia",
        codigo_pais: "KEN",
        disciplina_principal: "atletismo",
        disciplinas_secundarias: ["5000m", "10000m", "maratón"],
        categoria_peso: null,
        record_personal: {
            tiempo_distancia: "2:05:30",
            fecha_record: new Date("2024-04-14T00:00:00Z"),
            ubicacion: "Londres, Reino Unido"
        },
        medallas_previas: [
            { torneo: "Mundial 2023", año: 2023, medalla: "oro", disciplina: "10000m" },
            { torneo: "Africanos 2023", año: 2023, medalla: "oro", disciplina: "5000m" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    },
    {
        nombre_completo: "Usain Powell",
        fecha_nacimiento: new Date("1997-08-21T00:00:00Z"),
        edad: 28,
        genero: "M",
        pais: "Jamaica",
        codigo_pais: "JAM",
        disciplina_principal: "atletismo",
        disciplinas_secundarias: ["100m", "200m", "4x100m relevo"],
        categoria_peso: null,
        record_personal: {
            tiempo_distancia: "9.72s",
            fecha_record: new Date("2024-05-15T00:00:00Z"),
            ubicacion: "Kingston, Jamaica"
        },
        medallas_previas: [
            { torneo: "Panamericanos 2023", año: 2023, medalla: "oro", disciplina: "100m" },
            { torneo: "Mundial 2022", año: 2022, medalla: "plata", disciplina: "200m" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    },
    {
        nombre_completo: "Federica Pellegrini Jr.",
        fecha_nacimiento: new Date("2002-08-05T00:00:00Z"),
        edad: 23,
        genero: "F",
        pais: "Italia",
        codigo_pais: "ITA",
        disciplina_principal: "natación",
        disciplinas_secundarias: ["200m libre", "400m libre", "800m libre"],
        categoria_peso: null,
        record_personal: {
            tiempo_distancia: "1:52.98",
            fecha_record: new Date("2024-07-20T00:00:00Z"),
            ubicacion: "Roma, Italia"
        },
        medallas_previas: [
            { torneo: "Europeos 2024", año: 2024, medalla: "oro", disciplina: "200m libre" },
            { torneo: "Mundial 2023", año: 2023, medalla: "plata", disciplina: "400m libre" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    },
    {
        nombre_completo: "Connor McDavid Jr.",
        fecha_nacimiento: new Date("1999-01-13T00:00:00Z"),
        edad: 26,
        genero: "M",
        pais: "Canadá",
        codigo_pais: "CAN",
        disciplina_principal: "hockey",
        disciplinas_secundarias: [],
        categoria_peso: null,
        record_personal: {
            tiempo_distancia: "150 puntos en temporada",
            fecha_record: new Date("2024-04-30T00:00:00Z"),
            ubicacion: "Toronto, Canadá"
        },
        medallas_previas: [
            { torneo: "Mundial 2024", año: 2024, medalla: "oro", disciplina: "hockey sobre hielo" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    },
    {
        nombre_completo: "Annemiek van Vleuten Jr.",
        fecha_nacimiento: new Date("1998-10-08T00:00:00Z"),
        edad: 27,
        genero: "F",
        pais: "Países Bajos",
        codigo_pais: "NED",
        disciplina_principal: "ciclismo",
        disciplinas_secundarias: ["ciclismo ruta", "contrarreloj"],
        categoria_peso: null,
        record_personal: {
            tiempo_distancia: "3h 25m 15s",
            fecha_record: new Date("2024-06-05T00:00:00Z"),
            ubicacion: "Amsterdam, Países Bajos"
        },
        medallas_previas: [
            { torneo: "Europeos 2024", año: 2024, medalla: "oro", disciplina: "ciclismo ruta" },
            { torneo: "Mundial 2023", año: 2023, medalla: "plata", disciplina: "contrarreloj" }
        ],
        equipo_id: null,
        activo: true,
        lesionado: false
    }
]);