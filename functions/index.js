// Este texto se ejecuta en el servidor.
/** Se importa el objeto functions de la librería "firebase-functions". */
const functions = require('firebase-functions');
 
/* Se exporta la función sobre https llamada "saludo". */
exports.saludo = functions.https.onRequest(
  /** Código para la función saludo.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
      // verifica que el parámetro nombre1 recibido del navegador esté correcto.
      if (!request.query.numero1) {
        // Entra aquí si el nombre1 es null, undefined o ""
        throw new Error("Falta el número 1");
      } else if (!request.query.numero2) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta el número 2");
      }
      /* Solo se llega a esta parte si nombre1 y nombre 2 tienen un texto.
       * Devuelve un saludo. */
	   var multiplicar= request.query.numero1*request.query.numero2;
      response.send(
		`La multiplicación del número ${request.query.numero1} y ${request.query.numero2} es : `+ multiplicar);
    } catch (e) {
      // Devuelve un texto de error.
      response.send(e.message);
    }
  });
