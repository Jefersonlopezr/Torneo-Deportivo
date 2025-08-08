use torneo_deportivo_2025;

// CONSULTAS CON OPERADORES

// 1. Delegaciones con más de 60 atletas
db.delegaciones.find({total_atletas: {$gt: 60}});

// 2. Atletas con edad entre 25 y 30 años ($gte, $lte, $and)
db.atletas.find({$and: [{edad: {$gte: 25}}, {edad: {$lte: 30}}]});

// 3. Delegaciones que NO son de Europa ($ne)
db.delegaciones.find({continente: {$ne: "Europa"}});

// 4. Delegaciones de países específicos ($in)
db.delegaciones.find({pais: {$in: ["Brasil", "Estados Unidos", "Japón"]}});

// 5. Atletas que NO practican atletismo como disciplina principal ($nin)
db.atletas.find({disciplina_principal: {$nin: ["atletismo"]}});

// 6. Delegaciones con menos de 50 atletas 
db.delegaciones.find({total_atletas: {$lt: 50}});

// 7. Delegaciones de Asia o África 
db.delegaciones.find({$or: [{continente: "Asia"}, {continente: "África"}]});

// 8. Atletas activos y no lesionados ($and, $eq)
db.atletas.find({$and: [{activo: {$eq: true}}, {lesionado: {$eq: false}}]});

// 9. Delegaciones con más de 100 medallas de oro históricamente ($gt - campo anidado)
db.delegaciones.find({"medallas_historicas.oro": {$gt: 100}});

// 10. Atletas que llegaron después del 15 de julio de 2025 (usando referencia por país)
db.delegaciones.find({fecha_llegada: {$gt: new Date("2025-07-15T23:59:59Z")}});


// 11. BONUS: Delegaciones que participan en natación (usando arrays)
db.delegaciones.find({disciplinas_participantes: "natación"});

// 12. BONUS: Atletas con al menos una medalla previa (array no vacío)
db.atletas.find({medallas_previas: {$ne: []}});
