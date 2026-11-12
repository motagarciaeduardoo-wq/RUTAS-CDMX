// Rutas CDMX — datos verificados (nov 2026)
// Fuentes: STC Metro, Metrobús, STE, RTP, SEMOVI/SICT, Milenio, Wikipedia (Trolebús/RTP).
// NO es el catálogo interno completo de la app de Muse (48 rutas): ese código
// no se puede exportar. Esto es lo que se pudo verificar en fuentes públicas.
// Si una ruta no está aquí, agrégala en Comunidad. No inventes horarios.
const ROUTES = [
 // METRO $5
 {id:"m1",net:"Metro",name:"Línea 1",from:"Observatorio",to:"Pantitlán",price:5,hours:"05:00–24:00",stops:["Observatorio","Tacuba","Cuitláhuac","Insurgentes","Bellas Artes","Pino Suárez","San Lázaro","Oceanía","Pantitlán"],src:"STC Metro"},
 {id:"m2",net:"Metro",name:"Línea 2",from:"Cuatro Caminos",to:"Tasqueña",price:5,hours:"05:00–24:00",stops:["Cuatro Caminos","Tacuba","Hidalgo","Bellas Artes","Pino Suárez","Chabacano","General Anaya","Tasqueña"],src:"STC Metro"},
 {id:"m3",net:"Metro",name:"Línea 3",from:"Indios Verdes",to:"Universidad",price:5,hours:"05:00–24:00",stops:["Indios Verdes","La Raza","Hidalgo","Juárez","Balderas","Coyoacán","Copilco","Universidad"],src:"STC Metro"},
 {id:"m4",net:"Metro",name:"Línea 4",from:"Martín Carrera",to:"Santa Anita",price:5,hours:"05:00–24:00",stops:["Martín Carrera","Bondojito","Consulado","Morelos","Candelaria","Santa Anita"],src:"STC Metro"},
 {id:"m5",net:"Metro",name:"Línea 5",from:"Politécnico",to:"Pantitlán",price:5,hours:"05:00–24:00",stops:["Politécnico","Instituto del Petróleo","La Raza","Oceanía","Pantitlán"],src:"STC Metro"},
 {id:"m6",net:"Metro",name:"Línea 6",from:"El Rosario",to:"Martín Carrera",price:5,hours:"05:00–24:00",stops:["El Rosario","Tezozómoc","Instituto del Petróleo","Martín Carrera"],src:"STC Metro"},
 {id:"m7",net:"Metro",name:"Línea 7",from:"El Rosario",to:"Barranca del Muerto",price:5,hours:"05:00–24:00",stops:["El Rosario","Mixcoac","Auditorio","Barranca del Muerto"],src:"STC Metro"},
 {id:"m8",net:"Metro",name:"Línea 8",from:"Garibaldi",to:"Constitución de 1917",price:5,hours:"05:00–24:00",stops:["Garibaldi","Bellas Artes","Salto del Agua","Chabacano","Santa Anita","Escuadrón 201","Iztapalapa","Cerro de la Estrella","UAM-I","Constitución de 1917"],src:"STC Metro"},
 {id:"m9",net:"Metro",name:"Línea 9",from:"Tacubaya",to:"Pantitlán",price:5,hours:"05:00–24:00",stops:["Tacubaya","Patriotismo","Chilpancingo","Centro Médico","Chabacano","Jamaica","Mixcoac","Pantitlán"],src:"STC Metro"},
 {id:"ma",net:"Metro",name:"Línea A",from:"Pantitlán",to:"La Paz",price:5,hours:"05:00–24:00",stops:["Pantitlán","Agrícola Oriental","Canal de San Juan","Tepalcates","Guelatao","Peñón Viejo","Acatitla","Santa Martha","Los Reyes","La Paz"],src:"STC Metro"},
 {id:"mb",net:"Metro",name:"Línea B",from:"Buenavista",to:"Ciudad Azteca",price:5,hours:"05:00–24:00",stops:["Buenavista","Guerrero","San Lázaro","Oceanía","Villa de Aragón","Ciudad Azteca"],src:"STC Metro"},
 {id:"m12",net:"Metro",name:"Línea 12",from:"Mixcoac",to:"Tláhuac",price:5,hours:"05:00–24:00",stops:["Mixcoac","Zapata","Coyoacán","Eje Central","Parque de los Venados","Tláhuac"],src:"STC Metro"},
 // METROBÚS $6 (L4 aeropuerto $30)
 {id:"mb1",net:"Metrobús",name:"Línea 1",from:"Indios Verdes",to:"El Caminero",price:6,hours:"04:30–24:00",stops:["Indios Verdes","La Raza","Hidalgo","Insurgentes","El Caminero"],src:"Metrobús"},
 {id:"mb2",net:"Metrobús",name:"Línea 2",from:"Tepalcates",to:"Tacubaya",price:6,hours:"04:30–24:00",stops:["Tepalcates","Coyuya","Mixcoac","Tacubaya"],src:"Metrobús"},
 {id:"mb3",net:"Metrobús",name:"Línea 3",from:"Tenayuca",to:"Pueblo Santa Cruz Atoyac",price:6,hours:"04:30–24:00",stops:["Tenayuca","La Raza","Hidalgo","Pueblo Santa Cruz Atoyac"],src:"Metrobús"},
 {id:"mb4",net:"Metrobús",name:"Línea 4",from:"San Lázaro",to:"AICM T1 y T2",price:30,hours:"04:30–24:00",stops:["San Lázaro","AICM Terminal 1","AICM Terminal 2"],src:"Metrobús"},
 {id:"mb5",net:"Metrobús",name:"Línea 5",from:"Río de los Remedios",to:"Preparatoria 1",price:6,hours:"04:30–24:00",stops:["Río de los Remedios","Preparatoria 1"],src:"Metrobús"},
 {id:"mb6",net:"Metrobús",name:"Línea 6",from:"Villa de Aragón",to:"El Rosario",price:6,hours:"04:30–24:00",stops:["Villa de Aragón","El Rosario"],src:"Metrobús"},
 {id:"mb7",net:"Metrobús",name:"Línea 7",from:"Indios Verdes",to:"Campo Marte",price:6,hours:"04:30–24:00",stops:["Indios Verdes","Campo Marte"],src:"Metrobús"},
 // TROLEBÚS $4 (1-9), $7 (10-14). Línea 0: terminales por confirmar.
 {id:"t0",net:"Trolebús",name:"Línea 0 «El Chapulín»",from:"Poniente (Av. Revolución)",to:"Sur poniente",price:7,hours:"05:00–24:00",stops:["Av. Revolución","Circuito Interior"],src:"STE / GCDMX 09-06-2026",note:"Terminales exactas por confirmar"},
 {id:"t1",net:"Trolebús",name:"Línea 1",from:"Central del Norte",to:"Central del Sur",price:4,hours:"05:00–24:00",stops:["Central del Norte","Eje Central","Central del Sur"],src:"STE"},
 {id:"t2",net:"Trolebús",name:"Línea 2",from:"Chapultepec",to:"Pantitlán",price:4,hours:"05:00–24:00",stops:["Chapultepec","Pantitlán"],src:"STE"},
 {id:"t3",net:"Trolebús",name:"Línea 3",from:"San Andrés Tetepilco",to:"Mixcoac",price:4,hours:"05:00–24:00",stops:["San Andrés Tetepilco","Mixcoac"],src:"STE"},
 {id:"t4",net:"Trolebús",name:"Línea 4",from:"Boulevard Puerto Aéreo",to:"El Rosario",price:4,hours:"05:00–24:00",stops:["Boulevard Puerto Aéreo","El Rosario"],src:"STE"},
 {id:"t5",net:"Trolebús",name:"Línea 5",from:"San Felipe de Jesús",to:"La Diana",price:4,hours:"05:00–24:00",stops:["San Felipe de Jesús","La Diana"],src:"STE"},
 {id:"t6",net:"Trolebús",name:"Línea 6",from:"El Rosario",to:"Chapultepec",price:4,hours:"05:00–24:00",stops:["El Rosario","Chapultepec"],src:"STE"},
 {id:"t7",net:"Trolebús",name:"Línea 7",from:"Ciudad Universitaria",to:"CETRAM Periférico Oriente",price:4,hours:"05:00–24:00",stops:["Ciudad Universitaria","CETRAM Periférico Oriente"],src:"STE"},
 {id:"t8",net:"Trolebús",name:"Línea 8",from:"Circuito Politécnico",to:"Circuito Politécnico",price:4,hours:"05:00–24:00",stops:["Circuito Politécnico"],src:"STE"},
 {id:"t9",net:"Trolebús",name:"Línea 9",from:"Villa de Cortés",to:"Tepalcates",price:4,hours:"05:00–24:00",stops:["Villa de Cortés","Tepalcates"],src:"STE"},
 {id:"t10",net:"Trolebús",name:"Línea 10",from:"Constitución de 1917",to:"Santa Marta",price:7,hours:"05:00–24:00",stops:["Constitución de 1917","Santa Marta"],src:"STE"},
 {id:"t11",net:"Trolebús",name:"Línea 11",from:"Santa Marta",to:"Chalco",price:7,hours:"05:00–24:00",stops:["Santa Marta","Chalco"],src:"STE"},
 {id:"t12",net:"Trolebús",name:"Línea 12",from:"Perisur",to:"Tasqueña",price:7,hours:"05:00–24:00",stops:["Perisur","Tasqueña"],src:"STE"},
 {id:"t13",net:"Trolebús",name:"Línea 13",from:"Constitución de 1917",to:"Mixcoac",price:7,hours:"05:00–24:00",stops:["Constitución de 1917","Eje 8 Sur","Mixcoac"],src:"STE"},
 {id:"t14",net:"Trolebús",name:"Línea 14 «Animales Silvestres»",from:"CETRAM Universidad",to:"CETRAM Huipulco",price:7,hours:"05:00–24:00",stops:["CETRAM Universidad","Estadio Azteca","CETRAM Huipulco"],src:"STE / GCDMX 09-06-2026"},
 // CABLEBÚS $7, TREN LIGERO $3, INSURGENTE $15-$100
 {id:"c1",net:"Cablebús",name:"Línea 1",from:"Indios Verdes",to:"Cuautepec / Tlalpexco",price:7,hours:"05:00–23:00",stops:["Indios Verdes","Cuautepec","Tlalpexco"],src:"SEMOVI"},
 {id:"c2",net:"Cablebús",name:"Línea 2",from:"Constitución de 1917",to:"Santa Marta",price:7,hours:"05:00–23:00",stops:["Constitución de 1917","Santa Marta"],src:"SEMOVI"},
 {id:"c3",net:"Cablebús",name:"Línea 3",from:"Los Pinos / Constituyentes",to:"Vasco de Quiroga",price:7,hours:"05:00–23:00",stops:["Los Pinos","Constituyentes","Vasco de Quiroga"],src:"SEMOVI"},
 {id:"tl",net:"Tren Ligero",name:"Tren Ligero «El Ajolote»",from:"Tasqueña",to:"Xochimilco",price:3,hours:"05:00–24:00",stops:["Tasqueña","Xochimilco"],src:"STE"},
 {id:"ins",net:"El Insurgente",name:"El Insurgente",from:"Zinacantepec",to:"Santa Fe",price:15,hours:"06:00–23:00",stops:["Zinacantepec","Santa Fe"],src:"SICT",note:"Costo $15–$100 según tramo"},
 // RTP: ordinario $2, expreso $4, Ecobús $5, Nochebús $7
 {id:"r34a",net:"RTP",name:"34-A",from:"Metro Balderas",to:"Centro Comercial Santa Fe",price:5,hours:"05:00–24:00",stops:["Metro Balderas","Centro Comercial Santa Fe"],src:"RTP"},
 {id:"r34b",net:"RTP",name:"34-B",from:"Parque de la Bombilla",to:"Centro Comercial Santa Fe",price:5,hours:"05:00–24:00",stops:["Parque de la Bombilla","Centro Comercial Santa Fe"],src:"RTP"},
 {id:"r47a",net:"RTP",name:"47-A",from:"Alameda Oriente",to:"Xochimilco / Bosque de Nativitas",price:4,hours:"05:00–23:53",stops:["Alameda Oriente","Xochimilco","Bosque de Nativitas"],src:"RTP"},
 {id:"r57a",net:"RTP",name:"57-A",from:"Toreo (Cuatro Caminos)",to:"Metro Constitución de 1917",price:4,hours:"05:00–24:00",stops:["Toreo","Periférico","Constitución de 1917"],src:"RTP"},
 {id:"r165a",net:"RTP",name:"165-A",from:"Ejército de Oriente",to:"Metro Constitución de 1917",price:5,hours:"05:00–24:00",stops:["Ejército de Oriente","Constitución de 1917"],src:"RTP"},
];
// Alertas reales sacadas de la app (getlivefeed, 12 nov 2026, Iztapalapa)
const ALERTS = [
 {title:"Bloqueo en Av. Reforma 50, San Lorenzo Tezonco",place:"Av. Reforma 50, Col. San Lorenzo Tezonco",cat:"cierre",date:"11 de noviembre, 11:00 horas",src:"Grupo Milenio",url:"https://www.milenio.com/comunidad/trafico-cdmx-hoy-11-noviembre-8-bloqueos-4-marchas-lista-afectaciones",summary:"Bloqueo a las 11:00 horas en Av. Reforma 50, en Iztapalapa, según el reporte matutino del C5."},
 {title:"Peregrinación por Calzada Ignacio Zaragoza",place:"Calzada Ignacio Zaragoza",cat:"marcha",date:"11/11/2026 07:19",src:"adn40",url:"https://www.adn40.mx/ciudad/2026-11-11/manifestaciones-y-bloqueos-en-las-calles-de-cdmx-provocan-trafico-hoy-11-de-noviembre/?outputType=amp",summary:"Paso de la peregrinación de Tlaxcala por Calzada Ignacio Zaragoza, en Iztapalapa, con afectación a vialidades."}
];
