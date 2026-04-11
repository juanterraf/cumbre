// ============================================================
// XXIV Cumbre Mundial de Comunicación Política
// Montevideo, 21-22-23 Abril 2026
// data.js — Array completo de eventos
// ============================================================

export const ROOMS = {
  AZUL:       { id: "azul",       label: "Salón Azul",         color: "#38BDF8" },
  CEREMONIAS: { id: "ceremonias", label: "Salón de Ceremonias", color: "#A78BFA" },
  ROJO:       { id: "rojo",       label: "Salón Rojo",         color: "#F87171" },
  DORADO:     { id: "dorado",     label: "Salón Dorado",       color: "#F59E0B" },
  ALL:        { id: "all",        label: "Todos los salones",  color: "#6B7280" },
};

export const DAYS = [
  { id: "2026-04-21", label: "21 Abril", short: "21" },
  { id: "2026-04-22", label: "22 Abril", short: "22" },
  { id: "2026-04-23", label: "23 Abril", short: "23" },
];

// type: "talk" | "panel" | "book" | "break" | "lunch" | "opening"
export const events = [

  // ══════════════════════════════════════════════════════════
  // 21 DE ABRIL
  // ══════════════════════════════════════════════════════════

  {
    id: "210-acred",
    day: "2026-04-21", start: "07:30", end: "08:30",
    speaker: "", country: "", countryEmoji: "",
    title: "Acreditación",
    room: "all", type: "break", description: "Registro y acreditación de asistentes"
  },
  {
    id: "210-apertura",
    day: "2026-04-21", start: "08:30", end: "09:00",
    speaker: "", country: "", countryEmoji: "",
    title: "Apertura oficial",
    room: "all", type: "opening", description: "Ceremonia de apertura de la XXIV Cumbre Mundial de Comunicación Política"
  },

  // 09:00
  {
    id: "211-azul-0900",
    day: "2026-04-21", start: "09:00", end: "09:30",
    speaker: "Antonio Sola", country: "España", countryEmoji: "🇪🇸",
    title: "El poder metabólico de la victoria",
    room: "azul", type: "talk", description: ""
  },

  // 09:30
  {
    id: "211-azul-0930",
    day: "2026-04-21", start: "09:30", end: "10:00",
    speaker: "Daniel Ivoskus", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Matrix presidencial: experiencia Honduras",
    room: "azul", type: "talk", description: ""
  },

  // 10:00
  {
    id: "211-azul-1000",
    day: "2026-04-21", start: "10:00", end: "10:30",
    speaker: "Elena Fernández", country: "México", countryEmoji: "🇲🇽",
    title: "Del algoritmo al metro cuadrado: Cómo se construye confianza en 2027 y 2030",
    room: "azul", type: "talk", description: ""
  },

  // 10:30
  {
    id: "211-azul-1030",
    day: "2026-04-21", start: "10:30", end: "11:00",
    speaker: "Martín Buzzi", country: "Argentina", countryEmoji: "🇦🇷",
    title: "PREDICTOR 3000: comportamiento político con 3.000 puntos de datos",
    room: "azul", type: "talk", description: "Desarrollo tecnológico que predice el comportamiento político de las personas usando 3.000 puntos de datos generados por el dispositivo."
  },

  // COFFEE BREAK 11:00
  {
    id: "211-break-1100",
    day: "2026-04-21", start: "11:00", end: "11:30",
    speaker: "", country: "", countryEmoji: "",
    title: "Coffee Break",
    room: "all", type: "break", description: ""
  },

  // 11:30
  {
    id: "211-azul-1130",
    day: "2026-04-21", start: "11:30", end: "12:00",
    speaker: "Leandro Fagúndez", country: "Uruguay", countryEmoji: "🇺🇾",
    title: "De la pantalla al poder",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "211-cer-1130",
    day: "2026-04-21", start: "11:30", end: "12:00",
    speaker: "Nani Blanco", country: "Brasil", countryEmoji: "🇧🇷",
    title: "Cómo la Generación Z decide, confía y vota",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "211-rojo-1130",
    day: "2026-04-21", start: "11:30", end: "12:00",
    speaker: "Fernanda Vegetti y Leandro Graglia", country: "Argentina", countryEmoji: "🇦🇷",
    title: "La cocina de la consultoría política",
    room: "rojo", type: "book", description: "Presentación de libro"
  },
  {
    id: "211-dorado-1130",
    day: "2026-04-21", start: "11:30", end: "12:00",
    speaker: "Marcelo Esteban de la Cueva Muñoz", country: "Ecuador", countryEmoji: "🇪🇨",
    title: "La crisis como oportunidad: Cómo ganar tus próximas elecciones",
    room: "dorado", type: "talk", description: ""
  },

  // 12:00
  {
    id: "211-azul-1200",
    day: "2026-04-21", start: "12:00", end: "12:30",
    speaker: "Sebastian González Flores", country: "Colombia", countryEmoji: "🇨🇴",
    title: "Un like sí es un voto con Whatidea.io",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "211-cer-1200",
    day: "2026-04-21", start: "12:00", end: "12:30",
    speaker: "Fabricio Vela", country: "Ecuador", countryEmoji: "🇪🇨",
    title: "¿Qué buscamos los periodistas de los voceros? Consejos para no morir en el intento",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "211-rojo-1200",
    day: "2026-04-21", start: "12:00", end: "12:30",
    speaker: "Luis Fernando Martín", country: "Colombia", countryEmoji: "🇨🇴",
    title: "Triada emocional: campañas, elecciones y reputación",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "211-dorado-1200",
    day: "2026-04-21", start: "12:00", end: "12:30",
    speaker: "Marcelo Carignano", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Ideología y guerra de marcos: la política no gana con datos, sino con identidad",
    room: "dorado", type: "talk", description: ""
  },

  // 12:30
  {
    id: "211-azul-1230",
    day: "2026-04-21", start: "12:30", end: "13:00",
    speaker: "Panel Legislativo Uruguay", country: "Uruguay", countryEmoji: "🇺🇾",
    title: "Panel Legislativo Uruguay",
    room: "azul", type: "panel", description: "Modera: Ariel Basile (Argentina 🇦🇷)"
  },
  {
    id: "211-cer-1230",
    day: "2026-04-21", start: "12:30", end: "13:00",
    speaker: "Daniel Agosti", country: "Argentina", countryEmoji: "🇦🇷",
    title: "\"Mosquitos en Islandia\": El clima perdió el control",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "211-rojo-1230",
    day: "2026-04-21", start: "12:30", end: "13:00",
    speaker: "Máximo Reina", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Mensajes para recordar: Cómo preparar entrevistas y debates",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "211-dorado-1230",
    day: "2026-04-21", start: "12:30", end: "13:00",
    speaker: "Miguel Secchi", country: "Argentina", countryEmoji: "🇦🇷",
    title: "El rol de la IA en las campañas digitales",
    room: "dorado", type: "talk", description: ""
  },

  // ALMUERZO 13:00
  {
    id: "211-lunch-1300",
    day: "2026-04-21", start: "13:00", end: "15:00",
    speaker: "", country: "", countryEmoji: "",
    title: "Almuerzo",
    room: "all", type: "lunch", description: ""
  },

  // 15:00
  {
    id: "211-azul-1500",
    day: "2026-04-21", start: "15:00", end: "15:30",
    speaker: "Alejandra Sota", country: "México", countryEmoji: "🇲🇽",
    title: "La estrategia como ancla en medio del ruido digital",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "211-cer-1500",
    day: "2026-04-21", start: "15:00", end: "15:30",
    speaker: "Rayane Moreira", country: "Brasil", countryEmoji: "🇧🇷",
    title: "No es suerte. Es estrategia. Poder y posicionamiento en redes sociales",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "211-rojo-1500",
    day: "2026-04-21", start: "15:00", end: "15:30",
    speaker: "Sebastian Alonso", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Vocerías en red para ordenar la palabra pública",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "211-dorado-1500",
    day: "2026-04-21", start: "15:00", end: "15:30",
    speaker: "Sergio Roulier", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Así somos campeones, ante los medios",
    room: "dorado", type: "talk", description: ""
  },

  // 15:30
  {
    id: "211-azul-1530",
    day: "2026-04-21", start: "15:30", end: "16:00",
    speaker: "Mauro Becerra", country: "Argentina", countryEmoji: "🇦🇷",
    title: "CRISIS: cinco lecciones de comunicación en primera persona",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "211-cer-1530",
    day: "2026-04-21", start: "15:30", end: "16:00",
    speaker: "Carolina Bartel", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Crisis sin anestesia",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "211-rojo-1530",
    day: "2026-04-21", start: "15:30", end: "16:00",
    speaker: "Marco Torres Paz", country: "Perú", countryEmoji: "🇵🇪",
    title: "Nuevas campañas para nuevos electores: el voto millennial",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "211-dorado-1530",
    day: "2026-04-21", start: "15:30", end: "16:00",
    speaker: "Camila Di Lorenzo y Rocío Dios", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Hackear a los electorados: el uso de la tecnología en campañas",
    room: "dorado", type: "talk", description: ""
  },

  // 16:00
  {
    id: "211-azul-1600",
    day: "2026-04-21", start: "16:00", end: "16:30",
    speaker: "Julián Kanarek", country: "Uruguay", countryEmoji: "🇺🇾",
    title: "Democracias dopamínicas",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "211-cer-1600",
    day: "2026-04-21", start: "16:00", end: "16:30",
    speaker: "Gonzalo Antelo", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Noticias Geolocalizadas: Cómo instalar un relato para ganar y gobernar",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "211-rojo-1600",
    day: "2026-04-21", start: "16:00", end: "16:30",
    speaker: "Cynthia Zárate", country: "Paraguay", countryEmoji: "🇵🇾",
    title: "Voces Silenciadas",
    room: "rojo", type: "book", description: "Presentación de libro"
  },
  {
    id: "211-dorado-1600",
    day: "2026-04-21", start: "16:00", end: "16:30",
    speaker: "Fernanda Gómez", country: "México", countryEmoji: "🇲🇽",
    title: "De candidato a ícono: el sistema para construir una identidad política",
    room: "dorado", type: "talk", description: ""
  },

  // 16:30
  {
    id: "211-azul-1630",
    day: "2026-04-21", start: "16:30", end: "17:00",
    speaker: "Samuel Petit", country: "Venezuela", countryEmoji: "🇻🇪",
    title: "Del territorio al algoritmo",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "211-cer-1630",
    day: "2026-04-21", start: "16:30", end: "17:00",
    speaker: "Andrés Elias", country: "México", countryEmoji: "🇲🇽",
    title: "La ciencia del voto",
    room: "ceremonias", type: "book", description: "Presentación de libro"
  },
  {
    id: "211-rojo-1630",
    day: "2026-04-21", start: "16:30", end: "17:00",
    speaker: "Malena Dip", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Boleta Única: cómo comunicar una reforma electoral y convertir complejidad en claridad",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "211-dorado-1630",
    day: "2026-04-21", start: "16:30", end: "17:00",
    speaker: "Maximiliano Coba", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Comunicación política desde la ejecución: cuando las campañas dejan de ser teóricas",
    room: "dorado", type: "talk", description: ""
  },

  // COFFEE BREAK 17:00
  {
    id: "211-break-1700",
    day: "2026-04-21", start: "17:00", end: "17:30",
    speaker: "", country: "", countryEmoji: "",
    title: "Coffee Break",
    room: "all", type: "break", description: ""
  },

  // 17:30
  {
    id: "211-azul-1730",
    day: "2026-04-21", start: "17:30", end: "18:00",
    speaker: "Nidia Paulino Valdéz", country: "República Dominicana", countryEmoji: "🇩🇴",
    title: "Mucho discurso y poco barrio. ¿Figurar o ganar?",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "211-cer-1730",
    day: "2026-04-21", start: "17:30", end: "18:00",
    speaker: "Majo Torres", country: "Ecuador", countryEmoji: "🇪🇨",
    title: "De invisible a MARCA POLÍTICA",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "211-rojo-1730",
    day: "2026-04-21", start: "17:30", end: "18:00",
    speaker: "Milagros Faggiani", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Construí tu marca política desde el legislativo",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "211-dorado-1730",
    day: "2026-04-21", start: "17:30", end: "18:00",
    speaker: "Aarón Alejos Flores / Sebastian Diaz", country: "Perú / Colombia", countryEmoji: "🇵🇪🇨🇴",
    title: "Media Training para líderes políticos en la era digital / No todos los políticos pueden protagonizar la misma película",
    room: "dorado", type: "talk", description: ""
  },

  // 18:00
  {
    id: "211-azul-1800",
    day: "2026-04-21", start: "18:00", end: "18:30",
    speaker: "Daniel González", country: "Uruguay", countryEmoji: "🇺🇾",
    title: "De últimos a primeros: la historia real de una campaña",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "211-cer-1800",
    day: "2026-04-21", start: "18:00", end: "18:30",
    speaker: "Martín Yeza", country: "Argentina", countryEmoji: "🇦🇷",
    title: "El Quinto Poder",
    room: "ceremonias", type: "book", description: "Presentación de libro"
  },
  {
    id: "211-rojo-1800",
    day: "2026-04-21", start: "18:00", end: "18:30",
    speaker: "Jimena Chabrux", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Los outsiders y el síndrome del último iPhone: Del hype al poder",
    room: "rojo", type: "talk", description: "Atención, legitimidad y gobernabilidad en la era del scroll infinito"
  },
  {
    id: "211-dorado-1800",
    day: "2026-04-21", start: "18:00", end: "18:30",
    speaker: "Alejandro Di Toto / Dario León Mendiondo", country: "Argentina / Uruguay", countryEmoji: "🇦🇷🇺🇾",
    title: "Atrapar a los dispersos / La Guerra Mediática Digital",
    room: "dorado", type: "talk", description: "Desafíos de la comunicación política en tiempos de scrolling / Disputa por las conciencias, soberanía algorítmica e inteligencia artificial"
  },

  // 18:30
  {
    id: "211-azul-1830",
    day: "2026-04-21", start: "18:30", end: "19:00",
    speaker: "Mario Riorda", country: "Argentina", countryEmoji: "🇦🇷",
    title: "La comunicación más difícil del mundo",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "211-cer-1830",
    day: "2026-04-21", start: "18:30", end: "19:00",
    speaker: "Mauricio Vázquez", country: "Argentina", countryEmoji: "🇦🇷",
    title: "\"El llano\": Amenaza, purgatorio o extinción",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "211-rojo-1830",
    day: "2026-04-21", start: "18:30", end: "19:00",
    speaker: "Pedro De La Torre", country: "Colombia", countryEmoji: "🇨🇴",
    title: "Pedro De La Torre",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "211-dorado-1830",
    day: "2026-04-21", start: "18:30", end: "19:00",
    speaker: "Lucas Teves / Ruth Cabral", country: "Argentina / Paraguay", countryEmoji: "🇦🇷🇵🇾",
    title: "Para ganar hay que embarrarse, territorio en gobiernos locales / Método E3: Estudio, Estrategia y Ejecución",
    room: "dorado", type: "talk", description: "Caso práctico de territorio en gobiernos locales"
  },

  // ══════════════════════════════════════════════════════════
  // 22 DE ABRIL
  // ══════════════════════════════════════════════════════════

  // 09:00
  {
    id: "222-azul-0900",
    day: "2026-04-22", start: "09:00", end: "09:30",
    speaker: "Fabian Cardozo", country: "Uruguay", countryEmoji: "🇺🇾",
    title: "Pepe Mujica: Una comunicación planificadamente improvisada",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "222-cer-0900",
    day: "2026-04-22", start: "09:00", end: "09:30",
    speaker: "Samantha Olmedo", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Redes antisociales: la pasarela de los candidatos latinoamericanos",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "222-rojo-0900",
    day: "2026-04-22", start: "09:00", end: "09:30",
    speaker: "Carlos Marino", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Carlos Marino",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "222-dorado-0900",
    day: "2026-04-22", start: "09:00", end: "09:30",
    speaker: "Brenyer Medina", country: "Venezuela", countryEmoji: "🇻🇪",
    title: "Política de Cristal: ¿Por qué la razón ya no gana elecciones?",
    room: "dorado", type: "talk", description: ""
  },

  // 09:30
  {
    id: "222-azul-0930",
    day: "2026-04-22", start: "09:30", end: "10:00",
    speaker: "Alfredo Serrano", country: "España", countryEmoji: "🇪🇸",
    title: "El gol que me falta",
    room: "azul", type: "book", description: "Presentación de libro"
  },
  {
    id: "222-cer-0930",
    day: "2026-04-22", start: "09:30", end: "10:00",
    speaker: "Gabriel Enriquez", country: "Argentina", countryEmoji: "🇦🇷",
    title: "De antenas a algoritmos: Evolución en la relación de poder entre gobiernos y medios",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "222-rojo-0930",
    day: "2026-04-22", start: "09:30", end: "10:00",
    speaker: "Jorge Borgongoni", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Los 7 errores que más caro le cuestan a un gobierno (aunque esté haciendo las cosas bien)",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "222-dorado-0930",
    day: "2026-04-22", start: "09:30", end: "10:00",
    speaker: "Oriana Bonazzola / Ángel Montenegro", country: "Argentina / Perú", countryEmoji: "🇦🇷🇵🇪",
    title: "Del triunfo electoral al poder real / De la exclusión a la victoria electoral",
    room: "dorado", type: "talk", description: "Comunicación estratégica para gobiernos y legisladores"
  },

  // 10:00
  {
    id: "222-azul-1000",
    day: "2026-04-22", start: "10:00", end: "10:30",
    speaker: "Salvador Cacho", country: "México", countryEmoji: "🇲🇽",
    title: "Comunicando en tiempos de la post verdad",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "222-cer-1000",
    day: "2026-04-22", start: "10:00", end: "10:30",
    speaker: "Shila Vilker y Julian Libonatti", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Tecnopopulistas: Los nuevos dueños de la democracia",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "222-rojo-1000",
    day: "2026-04-22", start: "10:00", end: "10:30",
    speaker: "Elliot Coen", country: "Costa Rica", countryEmoji: "🇨🇷",
    title: "Son las personas ¡Estúpido!",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "222-dorado-1000",
    day: "2026-04-22", start: "10:00", end: "10:30",
    speaker: "Georgina Paolini / Yessenia Casanova", country: "Argentina / Perú", countryEmoji: "🇦🇷🇵🇪",
    title: "La IA no siempre sirve / El efecto prisma: cómo la IA refracta el poder político",
    room: "dorado", type: "talk", description: "Una mirada estratégica sobre el uso de la IA en comunicación política"
  },

  // 10:30
  {
    id: "222-azul-1030",
    day: "2026-04-22", start: "10:30", end: "11:00",
    speaker: "Leandro Fagúndez + invitados", country: "Uruguay", countryEmoji: "🇺🇾",
    title: "Presentación de libro: \"De la pantalla al Poder\"",
    room: "azul", type: "book", description: "Invitados: Daniel Ivoskus, Carolina Cosse, Felipe Schipani, Martha Hernández y Daniel González. Modera: Federico de la Fuente."
  },
  {
    id: "222-cer-1030",
    day: "2026-04-22", start: "10:30", end: "11:00",
    speaker: "Gustavo Zuñiga", country: "México", countryEmoji: "🇲🇽",
    title: "Impactar en redes para ganar poder",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "222-rojo-1030",
    day: "2026-04-22", start: "10:30", end: "11:00",
    speaker: "Marcos Doudtchitzky", country: "Argentina", countryEmoji: "🇦🇷",
    title: "¿Nervios alterados? Conflicto mundial y geopolítica en la opinión pública latinoamericana",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "222-dorado-1030",
    day: "2026-04-22", start: "10:30", end: "11:00",
    speaker: "Diego Furnari / Lorena Britez", country: "Argentina / Paraguay", countryEmoji: "🇦🇷🇵🇾",
    title: "Del dato al relato: el método DyC / Votos que suman",
    room: "dorado", type: "talk", description: "La clave para una campaña política exitosa y accesible"
  },

  // COFFEE BREAK 11:00
  {
    id: "222-break-1100",
    day: "2026-04-22", start: "11:00", end: "11:30",
    speaker: "", country: "", countryEmoji: "",
    title: "Coffee Break",
    room: "all", type: "break", description: ""
  },

  // 11:30
  {
    id: "222-azul-1130",
    day: "2026-04-22", start: "11:30", end: "12:00",
    speaker: "José Norte", country: "Argentina", countryEmoji: "🇦🇷",
    title: "El algoritmo mató al olfato político",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "222-cer-1130",
    day: "2026-04-22", start: "11:30", end: "12:00",
    speaker: "Lucia Bonetto Cornatosky", country: "Argentina", countryEmoji: "🇦🇷",
    title: "De cero a cien: cuando los equipos hacen la diferencia",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "222-rojo-1130",
    day: "2026-04-22", start: "11:30", end: "12:00",
    speaker: "Juana Josefina Domínguez", country: "República Dominicana", countryEmoji: "🇩🇴",
    title: "La Iglesia Católica en la Política Latinoamericana",
    room: "rojo", type: "book", description: "Presentación de libro"
  },
  {
    id: "222-dorado-1130",
    day: "2026-04-22", start: "11:30", end: "12:00",
    speaker: "Conrado Cifuentes / Alfredo Mattos", country: "México / Argentina", countryEmoji: "🇲🇽🇦🇷",
    title: "Izquierda vs Derecha: El rumbo de las ideologías / Del IQ al EQ: Inteligencia emocional en la era digital",
    room: "dorado", type: "talk", description: ""
  },

  // 12:00
  {
    id: "222-azul-1200",
    day: "2026-04-22", start: "12:00", end: "12:30",
    speaker: "Vania de Dios", country: "México", countryEmoji: "🇲🇽",
    title: "Ellas para ganar y el buen gobierno",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "222-cer-1200",
    day: "2026-04-22", start: "12:00", end: "12:30",
    speaker: "Lola Blasco", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Si no contás tu historia la IA lo va a hacer por vos",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "222-rojo-1200",
    day: "2026-04-22", start: "12:00", end: "12:30",
    speaker: "Panel ASACOP", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Argentina en tiempo real: lo que está pasando... y lo que todavía no",
    room: "rojo", type: "panel", description: "Pablo Pérez Paladino, Leandro Graglia, Samantha Olmedo, Shila Vilker"
  },
  {
    id: "222-dorado-1200",
    day: "2026-04-22", start: "12:00", end: "12:30",
    speaker: "Maximiliano Mosdien y Octavio Diosque", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Blindaje, erosión y clamor: cómo se construye poder desde la comunicación LADO B",
    room: "dorado", type: "talk", description: ""
  },

  // 12:30
  {
    id: "222-azul-1230",
    day: "2026-04-22", start: "12:30", end: "13:00",
    speaker: "Panel Presidenciable Uruguay", country: "Uruguay", countryEmoji: "🇺🇾",
    title: "Panel Presidenciable de Uruguay",
    room: "azul", type: "panel", description: "Luis Lacalle Herrera, Julio María Sanguinetti. Modera: Leandro Fagúndez"
  },
  {
    id: "222-cer-1230",
    day: "2026-04-22", start: "12:30", end: "13:00",
    speaker: "Camilo Severino", country: "Ecuador", countryEmoji: "🇪🇨",
    title: "Campañas cortas",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "222-rojo-1230",
    day: "2026-04-22", start: "12:30", end: "13:00",
    speaker: "Rubén Erazo", country: "Colombia", countryEmoji: "🇨🇴",
    title: "No hay cama pa tanta gente: cartografía del poder en la selva política colombiana",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "222-dorado-1230",
    day: "2026-04-22", start: "12:30", end: "13:00",
    speaker: "Manuel Montas", country: "República Dominicana", countryEmoji: "🇩🇴",
    title: "Narcopolítica",
    room: "dorado", type: "talk", description: ""
  },

  // ALMUERZO 13:00
  {
    id: "222-lunch-1300",
    day: "2026-04-22", start: "13:00", end: "15:00",
    speaker: "", country: "", countryEmoji: "",
    title: "Almuerzo",
    room: "all", type: "lunch", description: ""
  },

  // 15:00
  {
    id: "222-azul-1500",
    day: "2026-04-22", start: "15:00", end: "15:30",
    speaker: "Alejandro Zavala", country: "Ecuador", countryEmoji: "🇪🇨",
    title: "Campañas políticas en la era de la IA: ¿quién pondrá los próximos presidentes en el mundo?",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "222-cer-1500",
    day: "2026-04-22", start: "15:00", end: "15:30",
    speaker: "Mariano Berro", country: "Uruguay", countryEmoji: "🇺🇾",
    title: "Cuando la comunicación ya no alcanza: La construcción del liderazgo como base del poder político",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "222-rojo-1500",
    day: "2026-04-22", start: "15:00", end: "15:30",
    speaker: "Sebastian Guerrini", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Marcas que cuentan historias",
    room: "rojo", type: "book", description: "Presentación de libro"
  },
  {
    id: "222-dorado-1500",
    day: "2026-04-22", start: "15:00", end: "15:30",
    speaker: "Roque Cantoia / Gabriela Pérez Carreta", country: "Argentina", countryEmoji: "🇦🇷",
    title: "¿Dónde están tus votantes? / Pelear o morir: Desafíos estratégicos en las Defensorías del Pueblo",
    room: "dorado", type: "talk", description: "Investigación electoral entre IA y algoritmos"
  },

  // 15:30
  {
    id: "222-azul-1530",
    day: "2026-04-22", start: "15:30", end: "16:00",
    speaker: "Panel Starperpack", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Starperpack para hacer un presidente",
    room: "azul", type: "panel", description: "Daniel Vico, Facundo Moreno, Iael Gueler, Tomás Antonelli"
  },
  {
    id: "222-cer-1530",
    day: "2026-04-22", start: "15:30", end: "16:00",
    speaker: "Renata Reyes", country: "México", countryEmoji: "🇲🇽",
    title: "No es el algoritmo, eres tú",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "222-rojo-1530",
    day: "2026-04-22", start: "15:30", end: "16:00",
    speaker: "Ana Belén Marín", country: "Ecuador", countryEmoji: "🇪🇨",
    title: "El punto G de la victoria: gestionar-ganar-gobernar",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "222-dorado-1530",
    day: "2026-04-22", start: "15:30", end: "16:00",
    speaker: "Antonio Aguilar", country: "Colombia", countryEmoji: "🇨🇴",
    title: "Saludos no son votos",
    room: "dorado", type: "talk", description: ""
  },

  // 16:00
  {
    id: "222-azul-1600",
    day: "2026-04-22", start: "16:00", end: "16:30",
    speaker: "Sebastian García y Juan Manuel Maresca", country: "Argentina", countryEmoji: "🇦🇷",
    title: "La Máquina de Comunicación Territorial (MCT) en el mundo de los agentes de IA",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "222-cer-1600",
    day: "2026-04-22", start: "16:00", end: "16:30",
    speaker: "Giovanni Berroa", country: "Perú", countryEmoji: "🇵🇪",
    title: "¿Orden o caos? Cómo la estrategia digital construye tu imagen",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "222-rojo-1600",
    day: "2026-04-22", start: "16:00", end: "16:30",
    speaker: "Panel Comunicación política brasileña", country: "Brasil", countryEmoji: "🇧🇷",
    title: "Panel: Comunicación política brasileña",
    room: "rojo", type: "panel", description: "Alberto Lage, Juarez Guedes, Mariana Bonjour. Moderación: Celso Lamounier"
  },
  {
    id: "222-dorado-1600",
    day: "2026-04-22", start: "16:00", end: "16:30",
    speaker: "Diego Magni", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Democrac I.A. Artificial: Herramientas para Dominar",
    room: "dorado", type: "talk", description: ""
  },

  // 16:30
  {
    id: "222-azul-1630",
    day: "2026-04-22", start: "16:30", end: "17:00",
    speaker: "Beto Rentería", country: "México", countryEmoji: "🇲🇽",
    title: "¿Qué será de los consultores? La IA y el nuevo ADN de la consultoría",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "222-cer-1630",
    day: "2026-04-22", start: "16:30", end: "17:00",
    speaker: "Leandro Graglia", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Gobierno inteligente: ordenar la gestión, construir apoyo político",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "222-rojo-1630",
    day: "2026-04-22", start: "16:30", end: "17:00",
    speaker: "Pedro Donoso", country: "Ecuador", countryEmoji: "🇪🇨",
    title: "Crisis reputacional: ¿cómo atravesar una situación de mínimo control y máximo riesgo?",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "222-dorado-1630",
    day: "2026-04-22", start: "16:30", end: "17:00",
    speaker: "Erika Valencia", country: "Perú", countryEmoji: "🇵🇪",
    title: "Arquitectura Digital de Campaña",
    room: "dorado", type: "talk", description: ""
  },

  // COFFEE BREAK 17:00
  {
    id: "222-break-1700",
    day: "2026-04-22", start: "17:00", end: "17:30",
    speaker: "", country: "", countryEmoji: "",
    title: "Coffee Break",
    room: "all", type: "break", description: ""
  },

  // 17:30
  {
    id: "222-azul-1730",
    day: "2026-04-22", start: "17:30", end: "18:00",
    speaker: "Jorge Imhof", country: "Argentina", countryEmoji: "🇦🇷",
    title: "El que conecta gana: Conexión real en la era artificial",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "222-cer-1730",
    day: "2026-04-22", start: "17:30", end: "18:00",
    speaker: "Isaac Hernández", country: "España", countryEmoji: "🇪🇸",
    title: "Neuromarketing político: el poder de conectar con el electorado del siglo XXI",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "222-rojo-1730",
    day: "2026-04-22", start: "17:30", end: "18:00",
    speaker: "Miguel Batista", country: "Panamá", countryEmoji: "🇵🇦",
    title: "Miguel Batista",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "222-dorado-1730",
    day: "2026-04-22", start: "17:30", end: "18:00",
    speaker: "Mariana Angerosa", country: "Argentina", countryEmoji: "🇦🇷",
    title: "¿Quién los asesora? 10 consejos para futuros asesores",
    room: "dorado", type: "talk", description: ""
  },

  // 18:00
  {
    id: "222-azul-1800",
    day: "2026-04-22", start: "18:00", end: "18:30",
    speaker: "Mario Rodríguez", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Territorio mata digital",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "222-cer-1800",
    day: "2026-04-22", start: "18:00", end: "18:30",
    speaker: "Luis Toty Medina", country: "Venezuela", countryEmoji: "🇻🇪",
    title: "Claves para ganar las municipales de Paraguay 2026",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "222-rojo-1800",
    day: "2026-04-22", start: "18:00", end: "18:30",
    speaker: "Sebastian Lezcano", country: "Argentina", countryEmoji: "🇦🇷",
    title: "El fin del usuario libre: cómo la IA y los algoritmos programan lo que pensamos y consumimos",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "222-dorado-1800",
    day: "2026-04-22", start: "18:00", end: "18:30",
    speaker: "Juan Pablo Sansur y Jair Guadarrama", country: "Ecuador", countryEmoji: "🇪🇨",
    title: "Ecuador: El Estado en cuidados intensivos",
    room: "dorado", type: "talk", description: ""
  },

  // 18:30
  {
    id: "222-azul-1830",
    day: "2026-04-22", start: "18:30", end: "19:00",
    speaker: "Daniela Aruj", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Marca Política: el abismo entre el relato y la realidad",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "222-cer-1830",
    day: "2026-04-22", start: "18:30", end: "19:00",
    speaker: "Panel Creatividad y estrategia en Brasil", country: "Brasil", countryEmoji: "🇧🇷",
    title: "Panel: Creatividad y estrategia en Brasil",
    room: "ceremonias", type: "panel", description: "Nani Blanco, Ricardo Amado, Robert Willian Valporto. Moderación: Celso Lamounier"
  },
  {
    id: "222-rojo-1830",
    day: "2026-04-22", start: "18:30", end: "19:00",
    speaker: "Lucio Guberman", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Popularidad y Jugadas Políticas en Campañas electorales",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "222-dorado-1830",
    day: "2026-04-22", start: "18:30", end: "19:00",
    speaker: "Luis Aguilar Campos / Ramiro Morillo", country: "Venezuela / Ecuador", countryEmoji: "🇻🇪🇪🇨",
    title: "¿Cómo hacer viral a un político desconocido sin matarlo en el intento? / Pueblo chico, comunicación grande",
    room: "dorado", type: "talk", description: "Disrupción estratégica en ciudades de hasta 150 mil habitantes"
  },

  // ══════════════════════════════════════════════════════════
  // 23 DE ABRIL
  // ══════════════════════════════════════════════════════════

  // 09:00
  {
    id: "223-azul-0900",
    day: "2026-04-23", start: "09:00", end: "09:30",
    speaker: "Daniela Barbieri", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Daniela Barbieri",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "223-cer-0900",
    day: "2026-04-23", start: "09:00", end: "09:30",
    speaker: "Marina Raffaelli", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Urana político: identidad y poder",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "223-rojo-0900",
    day: "2026-04-23", start: "09:00", end: "09:30",
    speaker: "Ana Celia Casaoprieto", country: "México", countryEmoji: "🇲🇽",
    title: "No Way Back",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "223-dorado-0900",
    day: "2026-04-23", start: "09:00", end: "09:30",
    speaker: "Freddy Serrano", country: "Colombia", countryEmoji: "🇨🇴",
    title: "Aquí nadie se queda en visto",
    room: "dorado", type: "talk", description: ""
  },

  // 09:30
  {
    id: "223-azul-0930",
    day: "2026-04-23", start: "09:30", end: "10:00",
    speaker: "Rossana Chahla y Pablo Fernando Haro", country: "Argentina", countryEmoji: "🇦🇷",
    title: "La comunicación de la intendente TikToker",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "223-cer-0930",
    day: "2026-04-23", start: "09:30", end: "10:00",
    speaker: "Julio Pizetti", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Encender la campaña: El modelo ROME para la era algorítmica",
    room: "ceremonias", type: "book", description: "Presentación de libro"
  },
  {
    id: "223-rojo-0930",
    day: "2026-04-23", start: "09:30", end: "10:00",
    speaker: "Javier Pizzolito", country: "Argentina", countryEmoji: "🇦🇷",
    title: "El arte de improvisar lo planificado",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "223-dorado-0930",
    day: "2026-04-23", start: "09:30", end: "10:00",
    speaker: "Eduardo Auccalla", country: "Perú", countryEmoji: "🇵🇪",
    title: "Cerebros, datos y gargantas",
    room: "dorado", type: "talk", description: ""
  },

  // 10:00
  {
    id: "223-azul-1000",
    day: "2026-04-23", start: "10:00", end: "10:30",
    speaker: "Marcus Vinicius", country: "Brasil", countryEmoji: "🇧🇷",
    title: "Brasil y Portugal frente a frente: lo que uno enseña al otro en campañas digitales",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "223-cer-1000",
    day: "2026-04-23", start: "10:00", end: "10:30",
    speaker: "Arley Dario Bastidas", country: "Colombia", countryEmoji: "🇨🇴",
    title: "El nuevo orden emocional: neurociencia y arqueología para ganar",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "223-rojo-1000",
    day: "2026-04-23", start: "10:00", end: "10:30",
    speaker: "Paco Hidalgo", country: "Ecuador", countryEmoji: "🇪🇨",
    title: "Polarización y erosión democrática en Ecuador: claves estratégicas para una salida institucional",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "223-dorado-1000",
    day: "2026-04-23", start: "10:00", end: "10:30",
    speaker: "Andrés Rojas y Rodrigo Toro", country: "Colombia", countryEmoji: "🇨🇴",
    title: "Algoritmo vs Maquinarias: Contenido y calle para enfrentar la polarización",
    room: "dorado", type: "talk", description: ""
  },

  // 10:30
  {
    id: "223-azul-1030",
    day: "2026-04-23", start: "10:30", end: "11:00",
    speaker: "Gabriel Slavinsky", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Oratoria en tiempos de M13rd4",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "223-cer-1030",
    day: "2026-04-23", start: "10:30", end: "11:00",
    speaker: "Pablo Pérez-Paladino", country: "Argentina", countryEmoji: "🇦🇷",
    title: "La ilusión del dato: crisis de las encuestas y nuevo termómetro digital del poder",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "223-rojo-1030",
    day: "2026-04-23", start: "10:30", end: "11:00",
    speaker: "Fernando Trejo", country: "México", countryEmoji: "🇲🇽",
    title: "Método Impacto: Estrategia Digital para Campañas Políticas",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "223-dorado-1030",
    day: "2026-04-23", start: "10:30", end: "11:00",
    speaker: "Estefania Herrera", country: "Venezuela", countryEmoji: "🇻🇪",
    title: "Del Poder al Contenido: Construye Cercanía y Emoción en Campaña",
    room: "dorado", type: "talk", description: ""
  },

  // COFFEE BREAK 11:00
  {
    id: "223-break-1100",
    day: "2026-04-23", start: "11:00", end: "11:30",
    speaker: "", country: "", countryEmoji: "",
    title: "Coffee Break",
    room: "all", type: "break", description: ""
  },

  // 11:30
  {
    id: "223-azul-1130",
    day: "2026-04-23", start: "11:30", end: "12:00",
    speaker: "Lani Pastor", country: "Honduras", countryEmoji: "🇭🇳",
    title: "Conectar antes de convencer",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "223-cer-1130",
    day: "2026-04-23", start: "11:30", end: "12:00",
    speaker: "Maxi Constantinis", country: "Argentina", countryEmoji: "🇦🇷",
    title: "¿Por qué los políticos no invierten en tecnología?",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "223-rojo-1130",
    day: "2026-04-23", start: "11:30", end: "12:00",
    speaker: "Diego Mota", country: "Uruguay", countryEmoji: "🇺🇾",
    title: "Inteligencia Artificial y Comunicación Política: cuando la tecnología toma el poder",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "223-dorado-1130",
    day: "2026-04-23", start: "11:30", end: "12:00",
    speaker: "Catalina Vitelli", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Sin palabras: el mensaje oculto de los gestos",
    room: "dorado", type: "talk", description: ""
  },

  // 12:00
  {
    id: "223-azul-1200",
    day: "2026-04-23", start: "12:00", end: "12:30",
    speaker: "Héctor Venegas", country: "Perú", countryEmoji: "🇵🇪",
    title: "Tácticas digitales que todo político debe tener",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "223-cer-1200",
    day: "2026-04-23", start: "12:00", end: "12:30",
    speaker: "Panel Rotary Uruguay", country: "Uruguay", countryEmoji: "🇺🇾",
    title: "Rotary: la marca que transforma",
    room: "ceremonias", type: "panel", description: "Gustavo Verta, Graciela Fernandez, Walter Ojero, Olga Sánchez, Sasha Marroig"
  },
  {
    id: "223-rojo-1200",
    day: "2026-04-23", start: "12:00", end: "12:30",
    speaker: "Ariel Bordadisco", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Desafíos ante la desconexión entre la tarea legislativa y la ciudadanía",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "223-dorado-1200",
    day: "2026-04-23", start: "12:00", end: "12:30",
    speaker: "Tiago Giansily", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Discapacidad: la agenda que la comunicación política todavía no sabe contar",
    room: "dorado", type: "talk", description: ""
  },

  // 12:30
  {
    id: "223-azul-1230",
    day: "2026-04-23", start: "12:30", end: "13:00",
    speaker: "Panel Presidenciable de Partidos", country: "Uruguay", countryEmoji: "🇺🇾",
    title: "Panel Presidenciable de Partidos",
    room: "azul", type: "panel", description: "Fernando Pereira, Álvaro Delgado, Andrés Ojeda, Pablo Mieres y Manini Ríos. Modera: Leandro Fagúndez"
  },
  {
    id: "223-cer-1230",
    day: "2026-04-23", start: "12:30", end: "13:00",
    speaker: "Darlan Campos", country: "Brasil", countryEmoji: "🇧🇷",
    title: "La Fórmula Brasileña: Estrategia, Mensaje y Comunicación Política",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "223-rojo-1230",
    day: "2026-04-23", start: "12:30", end: "13:00",
    speaker: "Panel ACOPOL", country: "Colombia", countryEmoji: "🇨🇴",
    title: "El próximo presidente de Colombia",
    room: "rojo", type: "panel", description: "Rubén Erazo, Ángel David Vega y Carlos Julián León"
  },
  {
    id: "223-dorado-1230",
    day: "2026-04-23", start: "12:30", end: "13:00",
    speaker: "Alberto Rivera", country: "México", countryEmoji: "🇲🇽",
    title: "Así se juega el poder: Estrategias, símbolos y verdades del arte político",
    room: "dorado", type: "book", description: "Presentación de libro"
  },

  // ALMUERZO 13:00
  {
    id: "223-lunch-1300",
    day: "2026-04-23", start: "13:00", end: "15:00",
    speaker: "", country: "", countryEmoji: "",
    title: "Almuerzo",
    room: "all", type: "lunch", description: ""
  },

  // 15:00
  {
    id: "223-azul-1500",
    day: "2026-04-23", start: "15:00", end: "15:30",
    speaker: "Celso Lamounier", country: "Brasil", countryEmoji: "🇧🇷",
    title: "De Brasil al mundo: ecos de la comunicación política brasileña en América Latina",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "223-cer-1500",
    day: "2026-04-23", start: "15:00", end: "15:30",
    speaker: "Marcello Natale", country: "Brasil", countryEmoji: "🇧🇷",
    title: "El Algoritmo de los Sueños: Política, frustración y deseo en la era de las redes",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "223-rojo-1500",
    day: "2026-04-23", start: "15:00", end: "15:30",
    speaker: "Arnoldo Wiens", country: "Paraguay", countryEmoji: "🇵🇾",
    title: "Liderar con visión de futuro",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "223-dorado-1500",
    day: "2026-04-23", start: "15:00", end: "15:30",
    speaker: "Julián León / Paco Avila", country: "Colombia / Honduras", countryEmoji: "🇨🇴🇭🇳",
    title: "La política como el fútbol: estrategia política en la cancha electoral / De la calle al algoritmo",
    room: "dorado", type: "talk", description: ""
  },

  // 15:30
  {
    id: "223-azul-1530",
    day: "2026-04-23", start: "15:30", end: "16:00",
    speaker: "Lucia Milans y Paola Arjona", country: "Uruguay", countryEmoji: "🇺🇾",
    title: "La diplomacia que nadie ve: Cómo comunicar la acción internacional de las ciudades",
    room: "azul", type: "talk", description: "El caso de Montevideo"
  },
  {
    id: "223-cer-1530",
    day: "2026-04-23", start: "15:30", end: "16:00",
    speaker: "Andrés Carmona", country: "Colombia", countryEmoji: "🇨🇴",
    title: "Gana la batalla mediática en la era de las Fake News",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "223-rojo-1530",
    day: "2026-04-23", start: "15:30", end: "16:00",
    speaker: "Ricardo Gamundi", country: "México", countryEmoji: "🇲🇽",
    title: "Datos que cuentan historias, historias que ganan elecciones",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "223-dorado-1530",
    day: "2026-04-23", start: "15:30", end: "16:00",
    speaker: "Dana Córdoba", country: "Argentina", countryEmoji: "🇦🇷",
    title: "El joven de 23 años que quería ser intendente: desafíos y potencias de una generación que se anima",
    room: "dorado", type: "talk", description: ""
  },

  // 16:00
  {
    id: "223-azul-1600",
    day: "2026-04-23", start: "16:00", end: "16:30",
    speaker: "Hugo Haime", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Qué tenemos en la cabeza cuando votamos: análisis de sentimientos electorales",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "223-cer-1600",
    day: "2026-04-23", start: "16:00", end: "16:30",
    speaker: "Andrés Chiarello", country: "Argentina", countryEmoji: "🇦🇷",
    title: "La Estrategia en Campañas electorales",
    room: "ceremonias", type: "talk", description: ""
  },
  {
    id: "223-rojo-1600",
    day: "2026-04-23", start: "16:00", end: "16:30",
    speaker: "Ildefonso Aguirre", country: "México", countryEmoji: "🇲🇽",
    title: "Datos que cuentan historias, historias que ganan elecciones",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "223-dorado-1600",
    day: "2026-04-23", start: "16:00", end: "16:30",
    speaker: "Renato Villaverde", country: "Perú", countryEmoji: "🇵🇪",
    title: "¿Más o Mejor Pauta? Aprende el ciclo en la campaña digital",
    room: "dorado", type: "talk", description: ""
  },

  // 16:30
  {
    id: "223-azul-1630",
    day: "2026-04-23", start: "16:30", end: "17:00",
    speaker: "Kif Nava", country: "México", countryEmoji: "🇲🇽",
    title: "Primero gana la percepción",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "223-cer-1630",
    day: "2026-04-23", start: "16:30", end: "17:00",
    speaker: "Panel Electoral Brasil", country: "Brasil", countryEmoji: "🇧🇷",
    title: "Panel: El panorama electoral en Brasil",
    room: "ceremonias", type: "panel", description: "Gil Castillo, Darlan Campos, Marcello Natale, Juarez Guedes"
  },
  {
    id: "223-rojo-1630",
    day: "2026-04-23", start: "16:30", end: "17:00",
    speaker: "Julian Bojorquez", country: "México", countryEmoji: "🇲🇽",
    title: "Inteligencia Artificial Generativa aplicada en la Comunicación Social y en Campaña Electoral",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "223-dorado-1630",
    day: "2026-04-23", start: "16:30", end: "17:00",
    speaker: "Nadia Brizuela", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Universo Compol II: El surgimiento o el renacimiento de la política",
    room: "dorado", type: "book", description: "Presentación de libro"
  },

  // COFFEE BREAK 17:00
  {
    id: "223-break-1700",
    day: "2026-04-23", start: "17:00", end: "17:30",
    speaker: "", country: "", countryEmoji: "",
    title: "Coffee Break",
    room: "all", type: "break", description: ""
  },

  // 17:30
  {
    id: "223-azul-1730",
    day: "2026-04-23", start: "17:30", end: "18:00",
    speaker: "Marco Sifuentes", country: "México", countryEmoji: "🇲🇽",
    title: "Ganar y punto",
    room: "azul", type: "talk", description: ""
  },
  {
    id: "223-cer-1730",
    day: "2026-04-23", start: "17:30", end: "18:00",
    speaker: "Fernando Menéndez", country: "Argentina", countryEmoji: "🇦🇷",
    title: "Confianza y liderazgo en la comunicación política actual",
    room: "ceremonias", type: "talk", description: "No es lo que decís: es quién sos cuando hablás"
  },
  {
    id: "223-rojo-1730",
    day: "2026-04-23", start: "17:30", end: "18:00",
    speaker: "Amel Richardson", country: "República Dominicana", countryEmoji: "🇩🇴",
    title: "La Esquina Municipal Smart y Real",
    room: "rojo", type: "talk", description: ""
  },
  {
    id: "223-dorado-1730",
    day: "2026-04-23", start: "17:30", end: "18:00",
    speaker: "Emir Vásquez", country: "Ecuador", countryEmoji: "🇪🇨",
    title: "Estrategia, Poder y Guerra: Dominio Territorial en Tiempo Real con Inteligencia Artificial",
    room: "dorado", type: "talk", description: ""
  },

];

// ── Helpers ────────────────────────────────────────────────
export const getEventsByDay = (day) =>
  events.filter(e => e.day === day);

export const getEventsByDayAndRoom = (day, room) =>
  events.filter(e => e.day === day && (e.room === room || e.room === "all"));

export const getTalks = () =>
  events.filter(e => !["break", "lunch", "opening"].includes(e.type));

export const getCountries = () =>
  [...new Set(
    events
      .filter(e => e.country)
      .flatMap(e => e.country.split(" / "))
  )].sort();
