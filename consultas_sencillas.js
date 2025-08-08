use torneo_deportivo_2025;

// 1. Buscar todas las delegaciones de América del Sur
db.delegaciones.find({continente: "América del Sur"});

// 2. Consultar atletas de Colombia
db.atletas.find({pais: "Colombia"});

// 3. Mostrar atletas que practican judo
db.atletas.find({disciplina_principal: "judo"});

// 4. Listar delegaciones hospedadas en hoteles específicos
db.delegaciones.find({hotel_asignado: "Hotel Internacional Plaza"});

// 5. Buscar atletas masculinos
db.atletas.find({genero: "M"});
