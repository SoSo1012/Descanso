//--------------------------------- funcion dormir bien ------------------------------------------

function dorBien() {

  var title = "<h5><b>Benefecios de dormir</b></h5>";

  var bien = [
    "1.Mejora el estado de ánimo",
    "2.Previene la ansiedad y la depresión",
    "3.Potencia la memoria",
    "4.Estimula la síntesis de músculos",
    "5.Potencia la reparación de órganos y tejidos",
    "6.Mejora las habilidades mentales",
    "7.Aumenta el rendimiento físico y mental",
    "8.Disminuye el cansancio",
    "9.Reduce la irritabilidad",
    "10.Ayuda a perder peso",
    "11.Aumenta la creatividad",
    "12.Reduce la presión arterial",
    "13.Previene enfermedades cardiovasculares",
    "14.Reduce el riesgo de sufrir cáncer",
  ];

  var txtbien = "<ul>";

  for (count = 0; count < bien.length; count++) {
    txtbien = txtbien + "<li>" + bien[count] + "</li>";
  }
  txtbien = txtbien + "</ul>";

  document.getElementById("dorcontent").innerHTML = title + txtbien;
}

//--------------------------------- funcion rutina ------------------------------------------

function rut() {

  var title = "<h5><b>Rutina para dormir bien</b></h5>";

  var ru= [
    "Irse a la cama y despertar a la misma hora todos los días",
    "Evitar la <b>cafeína</b>, especialmente por la tarde y noche",
    "Evitar la nicotina",
    "Evitar las bebidas alcohólicas antes de acostarse",
    "Evitar comidas y bebidas pesadas por la noche",
    "No tomar siestas después de las 3 de la tarde",
    "Relajarse antes de acostarse, por ejemplo, tomando un baño, leyendo o escuchando música suave",
    "Mantener su dormitorio con una temperatura fresca",
    "Deshacerse de distracciones como ruidos, luces brillantes y el televisor o computadora en el dormitorio. Además, no se sienta tentado de usar su teléfono o tableta justo antes de acostarse",
    "Obtener suficiente sol durante el día",
    "Consulte a un médico si tiene problemas constantes para dormir. Usted puede tener un trastorno del sueño, como insomnio o apnea del sueño. En algunos casos, su médico puede sugerir usar medicamentos para dormir disponibles con o sin receta médica. En otros casos, puede solicitar un estudio del sueño para diagnosticar el problema",
  ];

  var txtRu = "<ul>";

  for (count = 0; count < ru.length; count++) {
    txtRu = txtRu + "<li>" + ru[count] + "</li>";
  }
  txtRu = txtRu + "</ul>";

  document.getElementById("dorcontent").innerHTML = title + txtRu;
}
//--------------------------------- funcion habitos ------------------------------------------

function habInformation() {

  var title = "<h5><b>¿Cuántas horas tenemos que dormir?</b></h5>";

  var habitos = [

    "La respuesta a esta pregunta no es sencilla, ya que no solo depende de la edad de la persona, sino que cada uno de nosotros necesita unas horas mínimas de sueño para sentirse renovado y con energías al día siguiente. De todos modos, la OMS publicó unas indicaciones con las horas recomendadas de sueño para cada grupo demográfico en función de la edad. Los adultos deben dormir entre 7 y 9 horas cada día, aunque algunos pueden tener suficiente con algo menos. Los adolescentes, que engloba a las personas de entre 10 y 17 años, deben dormir entre 8 horas y media y 9 horas y media cada día. Los niños en edad escolar, es decir, de 5 a 10 años, necesitan entre 10 y 11 horas de sueño para garantizar un correcto desarrollo tanto mental como corporal. Los niños en edad preescolar, desde los 3 hasta los 5 años, necesitan todavía más: entre 11 y 12 horas de sueño. Los recién nacidos, desde el nacimiento hasta aproximadamente los 3 años, requieren entre 16 y 18 horas de sueño diarias. Poner esfuerzos en respetar estos horarios de sueño es el primer paso para conseguir un sueño reparador y evitar los problemas de salud que hemos visto antes. Una vez empiecen a respetarse, las indicaciones y hábitos que presentaremos a continuación serán mucho más efectivas."
];

  var txtHabi = "<ul>";

  for (count = 0; count < habitos.length; count++) {
    txtHabi = txtHabi + "<li>" + habitos[count] + "</li>";
  }
  txtHabi = txtHabi + "</ul>";

  document.getElementById("dorcontent").innerHTML = title + txtHabi;
}
