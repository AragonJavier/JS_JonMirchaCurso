
/**----------Ejercicio#1------------------ */
/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/
const cadena = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

//cadena("[a,b,c]");


/*------------Ejercicio#2----------------
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/
const cutChain = (chain = "", longitud = undefined) =>
  !chain
    ? console.warn("No ingresaste la cadena de texto")
    : longitud === undefined
    ? console.warn("No ingresaste la longitud para recortar el texto")
    : console.info(chain.slice(0, longitud));

//cutChain("Hola Mundo", 4);
//cutChain("Hola Mundo",10);


/*----------Ejercicios#3-------------------
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

const arrayChain = (chain = "", separator = undefined) =>
  !chain
    ? console.warn("No ingresaste la cadena de texto")
    : separator === undefined
    ? console.warn("No ingresaste el separador")
    : console.info(chain.split(separator));
/*
arrayChain(
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis consectetur illum corrupti officiis nostrum! Consequatur quidem tempore nemo eveniet rem, deleniti facilis ipsam iste, nisi fugit a ipsum pariatur temporibus.",
  " "
);
 */



/**--------------Ejercicio#4---------------
 * 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */

const repeatText = (text = "", repeat = undefined) => {
  if (!text) return console.warn("No ingresate el texto");
  if (repeat === undefined)
    return console.warn("No ingresaste el numero de veces a repetir el texto");
  if (repeat === 0) return console.error("El numero de veces no puede ser 0");
  if (Math.sign(repeat) === -1)
    return console.error("El numero de veces no puede ser negativo");
  for (let i = 0; i <= repeat; i++) console.info(`${text},${i}`);
};
//repeatText("Hola",5)




/**----------Ejercicio#5-------------
 *5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const inverText = (chain = "") =>
  !chain
    ? console.warn("No ingresaste la cadena de texto")
    : console.info(chain.split("").reverse().join(""));
//inverText("aloha")


/*-------------Ejercicio#6-------------------- */
/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

const countText = (chain = "", text = "") => {
  if (!chain) return console.warn("No Ingresaste el texto");

  if (!text) return console.warn("No Ingresaste el texto a Evaluar");
  let i = 0,
    cout = 0;
  while (i !== -1) {
    i = chain.indexOf(text, i);
    if (i !== -1) {
      i++;
      cout++;
    }
  }
  return console.info(`La palabra ${text} se repite ${cout} veces`);
};
//countText("Hola Mundo,Adios Mundo", "Mundo");

/*---------------Ejercicios#7--------- */
/*
 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

 const palindromo=(word="")=>{
 if (!word) return console.warn("No ingresaste una palabra o frase")
 word=word.toLowerCase();
 let reverse=word.split("").reverse().join("");
 return (word===reverse)
 ?console.info(`Sí es palíndromo, Palabra original ${word}, Palabra al revés ${reverse}`)
 :console.info(`No es palíndromo, Palabra original ${word}, Palabra al revés ${reverse}`)
 }
 //palindromo("Hola")

 /*---------------Ejercicios#8---------------- */
 /** 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

 const deleteCaracter=(text="",patron="")=>
 !text
 ? console.warn("No Ingresaste un texto")
 :!patron
 ?console.warn("No ingresaste un patron de caracter")
 :console.info(text.replace(new RegExp(patron,"ig"),""))
 //deleteCaracter("xyz1,xyz2,xyz3,xyz4,xyz5","xyz")


 /* ----------------Ejercicio#9---------------------------------
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
 */

 const ramdon=()=>{
numero=Math.round((Math.random()*100)+500)
   console.info(`El numero es ${numero}`)
}
 //ramdon();

 /*
 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */
 const capicua=(numero=0)=>{
  if (!numero) return console.warn("No ingresaste un número")
if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un número`)

numero=numero.toString();
  let reverse=numero.split("").reverse().join("");
  return (numero===reverse)
  ?console.info(`Sí es capícua, Número original ${numero}, Número al revés ${reverse}`)
  :console.info(`No es capícua, Número original ${numero}, Número al revés ${reverse}`)
 }
 capicua(2000)