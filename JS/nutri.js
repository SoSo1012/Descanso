//--------------------------------- funcion dormir bien ------------------------------------------

function importancia() {
  var title = "<h5><b>¿Por qué es importante nutricirse?</b></h5>";

  var bien = [ "<p>Una dieta pobre puede promover la enfermedad de las encías y la caries dental. Los alimentos ricos en carbohidratos, azúcares y almidones contribuyen enormemente a la producción de ácidos de la placa que se adhiere al esmalte. Eventualmente, estos ácidos pueden causar la destrucción del esmalte formándose una cavidad.Si usted debe ingerir una dieta alta en azúcares o almidones, trate de comerlos durante las comidas en lugar de entre comidas y evite alimentos pegajosos debido a que estos pueden producir más placa. La mayoría de las comidas ya contienen ingredientes que producen ácidos. A menor cantidad de exposición de sus dientes a estos ingredientes, menor cantidad de ataque ácido para el esmalte dental.</p>"
  ];

  var txtbien = "<ul>";

  for (count = 0; count < bien.length; count++) {
    txtbien = txtbien + "<li>" + bien[count] + "</li>";
  }
  txtbien = txtbien + "</ul>";

  document.getElementById("nutricont").innerHTML = title + txtbien;
}

//--------------------------------- funcion carbo ------------------------------------------

function carbo() {
  var title = "<h5><b>Carbohidratos</b></h5>";

  var car = [
    "<p>Los carbohidratos son moléculas de azúcar. Junto con las proteínas y las grasas, los carbohidratos son uno de los tres nutrientes principales que se encuentran en alimentos y bebidas.Su cuerpo descompone los carbohidratos en glucosa. La glucosa, o azúcar en la sangre, es la principal fuente de energía para las células, tejidos y órganos del cuerpo. La glucosa puede usarse inmediatamente o almacenarse en el hígado y los músculos para su uso posterior.</p>",
    "<h5><b>¿Cuáles son los diferentes tipos de carbohidratos?</b></h5>",
    "<b>Azúcares:</b> También se llaman carbohidratos simples porque se encuentran en su forma más básica.Pueden agregarse a los alimentos, como el azúcar en dulces, postres, alimentos procesados y refrescos. También incluyen los tipos de azúcar que se encuentran naturalmente en frutas, verduras y leche",
    "<b>Almidones:</b> Son carbohidratos complejos que están hechos de muchos azúcares simples unidos. Su cuerpo necesita descomponer los almidones en azúcares para usarlos como energía. Los almidones incluyen pan, cereal y pasta. También incluyen ciertas verduras, como papas, guisantes y maíz",
    "<b>Fibra:</b>También es un carbohidrato complejo. Su cuerpo no puede descomponer la mayoría de la fibra, por lo que comer alimentos con fibra puede ayudarle a sentirse lleno y hacer que sea menos probable que coma en exceso. Las dietas altas en fibra tienen otros beneficios para la salud. Pueden ayudar a prevenir problemas estomacales o intestinales, como el estreñimiento. También pueden ayudar a bajar el colesterol y azúcar en la sangre. La fibra se encuentra en muchos alimentos que provienen de plantas, como frutas, verduras, nueces, semillas, frijoles y granos integrales",
    "<h5><b>¿Qué alimentos tienen carbohidratos?</b></h5>",
    "<b>Granos:</b> Como el pan, fideos, pastas, galletas saladas, cereales y arroz",
    "<b>Frutas: </b> Como manzanas, plátanos, bayas, mangos, melones y naranjas",
    "<b>Productos lácteos:</b> Como la leche y el yogurt",
    "<b>Legumbres:</b> Incluyendo frijoles secos, lentejas y guisantes",
    "<b>Bocadillos y dulces: </b> Como pasteles, galletas, dulces y otros postres",
    "Jugos, refrescos, bebidas de frutas, bebidas deportivas y bebidas energéticas con azúcar",
    "<b>Verduras con almidón:</b> Como papas, maíz y guisantes",
    "<p>Algunos alimentos no tienen muchos carbohidratos, como la carne, pescado, pollo, algunos tipos de queso, nueces y aceites.</p>"
  ];

  var txtCar = "<ul>";

  for (count = 0; count < car.length; count++) {
    txtCar = txtCar + "<li>" + car[count] + "</li>";
  }
  txtCar = txtCar + "</ul>";

  document.getElementById("nutricont").innerHTML = title + txtCar;
}
//--------------------------------- funcion ptoteína ------------------------------------------

function prot() {
  var title = "<h5><b>¿Proteínas?</b></h5>";

  var prot = [
    "<p>Las proteínas son moléculas formadas por aminoácidos que están unidos por un tipo de enlaces conocidos como enlaces peptídicos. El orden y la disposición de los aminoácidos dependen del código genético de cada persona. Todas las proteínas están compuestas por:<p>",
    "<li>Carbono<li>",
    "Hidrógeno",
    "Oxígeno",
    "Nitrógeno",
    "La mayoría contiene además azufre y fósforo",
    "<p>Las proteínas suponen aproximadamente la mitad del peso de los tejidos del organismo, y están presentes en todas las células del cuerpo, además de participar en prácticamente todos los procesos biológicos que se producen.</p>",
    "<h5><b>Alimentos ricos en proteínas</b></h5>",
    "<p>Están presentes sobre todo en los alimentos de origen animal como la carne, el pescado, los huevos y la leche. Pero también lo están en alimentos vegetales, como la soja, las legumbres y los cereales, aunque en menor proporción. Su ingesta aporta al organismo 4 kilocalorías por cada gramo de proteína. </p>",
  ];

  var txtProte = "<ul>";

  for (count = 0; count < prot.length; count++) {
    txtProte = txtProte + "<li>" + prot[count] + "</li>";
  }
  txtProte = txtProte + "</ul>";

  document.getElementById("nutricont").innerHTML = title + txtProte;

}

//--------------------------------- frutas y verduras ------------------------------------------

function frut() {
  var title = "<h5><b>Verduras y frutas</b></h5>";

  var ru = [
    "<p>Las frutas y verduras son muy ricas en vitaminas, minerales, hidratos de carbono complejos con fibra vegetal, y contienen cantidades mínimas de grasas que además son siempre insaturadas. Tienen un bajo contenido en calorías y sodio, y carecen de colesterol. En todos los estudios que se han realizado a lo largo del tiempo con diferentes poblaciones, siempre se ha encontrado una alta correlación entre el elevado consumo de frutas y verduras y la baja incidencia de enfermedades cardiovasculares.Desde el punto de vista de la prevención de las enfermedades cardiovasculares, todas las frutas y verduras frescas que consumamos son pocas.</p>",
    "<h5><b>¿Qué elementos se encuentran en las frutas?</b></5>",
    "Las frutas nos aportan agua, vitaminas, minerales, fibra y diferentes compuestos beneficiosos para el organismo.",
    "Por sus antioxidantes, previenen el envejecimiento prematuro de las células, dándote una piel más limpia, joven, suave y sana y mayor calidad de vida.",
    "<h5><b>¿Qué elementos quimicos contienen los vegetales? </b></5>",
    "<p>Minerales: Entre los minerales que más se destacan se encuentran el potasio, el sodio, el magnesio, el calcio y el hierro (especialmente en las verduras). Vitaminas: Fundamentalmente contienen las vitaminas del grupo B y en especial la vitamina C, o sea las que son solubles en agua.</p>"
  ];

  var txtRu = "<ul>";

  for (count = 0; count < ru.length; count++) {
    txtRu = txtRu + "<li>" + ru[count] + "</li>";
  }
  txtRu = txtRu + "</ul>";

  document.getElementById("nutricont").innerHTML = title + txtRu;
}

//--------------------------------- Grasas ------------------------------------------

function gras() {
  var title =  "<h5><b>Cómo escoger grasas saludables</b></h5>";

  var ru = [
    "<p>Las <b>grasas no saturadas</b> son grasas “buenas” que se encuentran principalmente en las verduras, frutos secos, semillas y pescado. A temperatura ambiente, estas grasas son líquidas, no sólidas. Hay dos categorías grandes de grasas buenas: grasas monoinsaturadas y poliinsaturadas. Las encuentra en la mayoría de los frutos secos, productos de soja, aceite de oliva, aceite de maní, aceite de canola, aguacates (paltas), atún blanco y salmón..</p>",
    "<p>Las <b>grasas saturadas</b> son las del tipo “malo” y se encuentran en la carne y en otros productos de origen animal, tales como mantequilla o manteca, queso y en toda leche salvo la leche descremada. Son sólidas a temperatura ambiente. Las grasas saturadas también se encuentran de forma líquida en los aceites de palma y de coco, los cuales se suelen usar en los productos de panadería disponbiles en el supermercado.</p>",
    "<p>Las <b>grasas trans</b> son el peor tipo de grasas alimentarias, y se encuentran de forma natural en pequeñas cantidades en algunos productos de origen animal como la carne roja, el queso y la leche entera, pero la mayoría de la grasas trans consumida en los EE.UU.  son de origen sintético que hace que los aceites líquiedos se vuelvan sólidos.  Se pueden encontrar en la margarina y en ciertos bocadillos que se compran en el supermercado o en un restaurante, en productos de panadería y en frituras. Si usted ve que dice aceites “hidrogenados” o “parcialmente hidrogenados” en una lista de ingredientes, el alimento contiene grasas trans, aun si la etiqueta de información nutricional diga “0 gramos”.</p>",
    "<p>La Asociación Americana del Corazón recomienda reducir las grasas trans y hacer de las grasas saturadas solo del 5% al 6% de las calorías totales diarias. Por ejemplo, si usted come aproximadamente 2,000 calorías al día, no más de 120 de esas calorías deben provenir de grasas saturadas al día. Eso es aproximadamente 13 gramos de grasas saturadas por día.</p>",
   
  ];
  
  var txtRu = "<ul>";

  for (count = 0; count < ru.length; count++) {
    txtRu = txtRu + "<li>" + ru[count] + "</li>";
  }
  txtRu = txtRu + "</ul>";

  document.getElementById("nutricont").innerHTML = title + txtRu;
}
