### Histórico de Modificaciones 

Versión Fecha Descripción V0 09/09/2010 Versión inicial del documento V0.1 18/03/2011 Versión correspondiente al Release 0.1 Agregados: a) Método Autorizar un Ajuste IVA CAE (autorizarAjusteIVA) b) Método Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) c) Método Consultar Tipos de Datos Adicionales (consultarTiposDatosAdicionales). d) En el método para autorizar un comprobante CAE se agregaron los controles correspondientes a los errores 131,132,133,134,135 y 145 en validaciones excluyentes (rechazo). e) En el método para autorizar un comprobante CAE se agregó el control correspondiente al error 130 en validaciones no excluyentes (observación). f) En el método para autorizar un comprobante CAE se agregó el control correspondiente al error 202 para el número de punto de venta de comprobante asociado, validaciones excluyentes (rechazo). g) En el método para autorizar un comprobante CAE se agregaron los controles correspondientes a los errores 402 y 403 para el campo <codigo> de <subtotalIVA>, validaciones excluyentes (rechazo). h) En el método informar un comprobante CAEA se agregaron los controles correspondientes a los errores 734, 735, 737, 738, 749, 803, 1002, y 1003. i) En las validaciones de negocio para el método informar un CAEA como no utilizado para un punto de venta, se agregaron los controles correpondientes a 

,Definición de tipos de datos los errores 1206 y 1207. j) En las validaciones de negocio para el método informar un CAEA como no utilizado, se agregó el control correpondiente al error 1208. Modificaciones: k) Se habilitó la condición de sujeto no categorizado para receptores de comprobantes B. l) Se cambiaron redacciones de descripciones de errores y validaciones para su mejor interpretación. m) La logitud del campo <codigoMtx> se pasó 14 a 13 posiciones. n) Se agrego el array opcional de datos adicionales a la estructura de ComprobanteType. o) El campo <importeOtrosTributos> se pasó de obligatorio a no obligatorio. p) En el método Consultar Cotización Moneda (consultarCotizacionMoneda), se cambió el número de código de error 1500 por 1600. q) En el método para autorizar un comprobante CAE, se cambió y modificó el error 128 de validaciones no excluyentes (observación) a excluyentes (rechazo). r) En el método para informar un comprobante CAEA se cambió el resultado de la validación de Rechaza a Observa para los controles correspondientes a los errores 708 y 800. s) En el método para informar un comprobante CAEA se cambió el resultado de la validación de Observa a Rechaza para el control correspondiente al error 718. Eliminados: a) En las validaciones excluyentes de negocio para el método autorizar comprobantes, se sacaron las validaciones correspondientes a los códigos de error 118 y 119 por 

,Definición de tipos de datos pertenecer a validaciones de formato. b) En las validaciones de negocio excluyentes para el método Solicitar CAEA, se eliminó el control correspondeinte al error 10023. c) En las validaciones de negocio excluyentes y no excluyentes para el método informar un comprobante CAEA, se eliminaron los controles correspondientes a los errores 711, 712, 716 y 1113. d) En las validaciones de negocio para el método informar un CAEA como no utilizado para un punto de venta, se eliminó el control correpondiente al error 1202. V0.2 04/08/2014 Versión correspondiente al Release 0.2 Agregados: a) En el método para autorizar un comprobante CAE se agregó el control correspondiente al error 405 en validaciones excluyentes (rechazo). b) En el método para autorizar un comprobante CAEA se agregó el control correspondiente al error 1005 en validaciones no excluyentes (observación). Modificaciones: a) En los métodos para autorizar un comprobante CAE y ajuste IVA CAE, se cambiaron los errores 109 y 134 de validaciones excluyentes (rechazo) a no excluyentes (observación). b) En el método para autorizar un comprobante CAE se modificaron los errores 515, 517, 518 y 519 para contemplar la unidad de medida 95 (anulación) c) En el método para informar un comprobante CAEA se modificaron los errores 1116, 1118, 1119 y 1120 para contemplar la unidad de medida 95 (anulación) 

,Definición de tipos de datos Eliminados: a) En las validaciones excluyentes de negocio para el método autorizar comprobantes, se sacó la validación correspondiente al código de error 504 por pertenecer a validaciones de formato. V0.3 01/01/2016 Versión correspondiente al Release 0.3 Agregados: a) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA CAE se agregaron los errores 323, 324 y 325 que corresponden a los nuevos datos adicionales. Modificaciones: a) En los métodos para autorizar un comprobante CAE se cambiaron los errores 100, 110, 126, 128, 129, 130, 134, 200, 401, 514, 515, 516, 517, 519 debido a que se agregaron nuevos tipos de comprobantes. b) En el método ajuste IVA CAE se modificó el error 136, 126, 128, 129, 130, 134, 136, 200, 514, 529 y 530 para incluir a los nuevos tipos de comprobantes. c) En los métodos para autorizar un comprobante CAE y ajuste IVA CAE se modificó el error 322 para incluir a los nuevos datos adicionales. V0.4 13/09/2016 Versión correspondiente al Release 0.4 Agregados: a) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se agregaron los códigos: 750, 751 y 752 en validaciones no excluyentes (observación). Modificaciones: _a)_ El código 10004 correspondiente a validaciones sobre el emisor ahora es un motivo de observación y se aplica sólo a 

,Definición de tipos de datos solicitud de CAEA. _b)_ En _CAEAResponseType_ se agrega el array no obligatorio _arrayObservaciones_ V0.5 15/03/2017 Versión correspondiente al Release 0.5 Agregados: a) En el elemento <comprobanteAsociado> se agregó el campo opcional <cuit> b) En las validaciones de los métodos para autorizar un comprobante y ajuste IVA se agregaron los códigos: 203, 204, 205, 206 y 207 en validaciones excluyentes. c) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se agregaron los códigos: 803 y 804 en validaciones excluyentes. d) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se agregaron los códigos: 805, 806 y 807 en validaciones no excluyentes (observación). Modificaciones: a) Se agregaron los códigos de tipos de comprobante 88 y 990 (Remitos de Tabaco) como valores permitidos en comprobantes asociados Eliminados: a) En las validaciones de los métodos para autorizar un comprobante y ajuste IVA se eliminó el código 126. b) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se eliminó el código 714. V0.6 28/08/2017 Versión correspondiente al Release 0.6 Agregados: a) En _ComprobanteType_ se agregó la estructura opcional <arrayCompradores> b) En las validaciones de los métodos para autorizar un comprobante y ajuste IVA se 

,Definición de tipos de datos agregaron los códigos: 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431 y 432 en validaciones excluyentes. c) En las validaciones de los métodos para informar un comprobante CAEA e informar un ajuste de IVA CAEA, se agregó el código 753 en validaciones excluyentes. V0.7 04/08/2018 Versión correspondiente al Release 0.7 Agregados: a) En _ComprobanteType_ se agregó el elemento opcional <fechaHoraGen> b) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se agrego el código 146 en validaciones excluyentes c) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se agregó el código 754 en validaciones excluyentes y los códigos 755 y 756 en validaciones no excluyentes d) En las validaciones del método para solicitar un CAEA se agregaron los códigos: 10025 y 10026 en validaciones no excluyentes Modificaciones: a) En las validaciones del método para autorizar un comprobante CAE y ajuste IVA se modificó la validación con código 103 para el concepto “Productos” b) En las validaciones del método para solicitar un CAEA se modificó el rango de la fecha de envío (validación código 602) c) En las validaciones con códigos: 700, 718, 719, 733, 734, 738, 740, 803, 1112, 1130 y 1131 se eliminaron las observaciones relacionadas a comprobantes A con leyenda OPERACIÓN SUJETA A RETENCIÓN d) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se incrementó el tope de comprobantes tipo B de $1000 a $5000 (validación código 128) e) En las validaciones de los métodos para 

,Definición de tipos de datos informar un comprobante CAEA y ajuste IVA CAEA se incrementó el tope de comprobantes tipo B de $1000 a $5000 (validación código 718) Eliminados: a) En las validaciones del método para solicitar un CAEA se eliminaron los códigos 603 y 10004 b) En las validaciones de los métodos para informar un comprobante CAEA e informar un ajuste de IVA CAEA se eliminó el código 752 V0.8 01/10/2018^ Versión correspondiente al Release 0.8 Modificaciones: a) Se modificó el tipo de datos base de NumeroPuntoVentaSimpleType de short a int, y el valor máximo permitido de 9999 a 99998. V0.9 01/05/2019^ Versión correspondiente al Release 0.9 Modificaciones: a) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se incrementó el tope de comprobantes tipo B de $5000 a $10000 (validación código 128) b) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se incrementó el tope de comprobantes tipo B de $5000 a $10000 (validación código 718) V0.10 01/09/2019^ Versión correspondiente al Release 0.10 Agregados: a) Se agrega la posibilidad de autorizar comprobantes CAE para el Régimen de Factura Electrónica de Crédito MiPyMe. Tipos de comprobantes 201, 202, 203, 206, 207 y 208. 

,Definición de tipos de datos b) En el elemento <comprobanteAsociado> se agregó el campo opcional <fechaEmision> c) En las validaciones de los métodos para autorizar un comprobante CAE se agregaron las validaciones excluyentes correspondientes a la emisión de Factura Electrónica de Crédito MiPyME. Códigos: 147 a 157, 208 a 223, 302, 326 a 333, 433. d) En las validaciones de los métodos para informar un comprobante CAEA se agregaron las validaciones excluyentes y no excluyentes correspondientes a la emisión de Factura Electrónica de Crédito MiPyME. Códigos: 757 a 775, 808 a 823, 923 a 931. Modificaciones: a) Se agregan nuevos tipos de comprobantes para este sistema. Ver _consultarTiposComprobantes_ b) Se agregan nuevos tipos de datos adicionales para el Régimen de Factura Electrónica de Crédito MiPyMe. Ver _consultarTiposDatosAdicionales_ V0.11 16/01/2020^ Versión correspondiente al Release 0.11 Agregados: a) En las validaciones de los métodos para autorizar un comprobante CAE se agregaron las validaciones excluyentes correspondientes a la emisión de Factura Electrónica de Crédito MiPyME. Códigos:158. b) En las validaciones de los métodos para informar un comprobante CAEA se agregaron las validaciones excluyentes correspondientes a la emisión de Factura Electrónica de Crédito MiPyME. Códigos:776. V0.12 12/03/2020^ Versión correspondiente al Release 0.12 Modificaciones: 

,Definición de tipos de datos a) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se incrementó el tope de comprobantes tipo B al monto en pesos resultante según RG4444 (validación código 128) b) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se incrementó el tope de comprobantes tipo B al monto en pesos resultante según RG4444 (validación código 718) V0.13 01/07/2020^ Versión correspondiente al Release 0.13 Adecuaciones en la autorización de notas de débito y crédito a partir de la obligatoriedad de informar comprobante asociado según RESOLUCIÓN GENERAL N° 4.540/2019 Modificaciones: a) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se incorporan las validaciones excluyentes con códigos: 159 a 162, 224 a 225, y 2200 a 2201. b) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se incorporan las validaciones NO excluyentes con códigos: 2202. c) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se incorporan para el régimen general las validación excluyentes (ya existentes del régimen de factura de crédito): 211, 220 a 223. d) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se quita la validación no excluyente con código 201. e) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se incorporan las validaciones excluyentes con códigos: 777 a 780, 824 a 825, y 2800 a 2801. 

,Definición de tipos de datos f) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se incorporan las validaciones NO excluyentes con códigos: 2802. g) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se incorporan para el régimen general las validación excluyentes (ya existentes del régimen de factura de crédito): 811, 820 a 823. V0.14 25/11/2020^ Versión correspondiente al Release 0.14 Se agrega la obligatoriedad de informar el dato adicional 27 para el Régimen de Factura Electrónica de Crédito MiPyMe. Tipos de comprobantes 201 y 206. Agregados: a) En las validaciones de los métodos para autorizar un comprobante CAE se agregaron las validaciones excluyentes correspondientes a la emisión de Factura Electrónica de Crédito MiPyME. Códigos: 334 a 336. b) En las validaciones de los métodos para informar un comprobante CAEA se agregaron las validaciones excluyentes y no excluyentes correspondientes a la emisión de Factura Electrónica de Crédito MiPyME. Códigos: 932 a 934. V0.15 05/04/2021^ Versión correspondiente al Release 0.15 Se agregan validaciones sobre emisores y receptores apócrifos. Códigos 10005, 10006, 163 y 781. V0.16 03/06/2021^ Versión correspondiente al Release 0.16 Adecuaciones Ley "REGIMEN DE SOSTENIMIENTO E INCLUSIÓN FISCAL PARA PEQUEÑOS COTRIBUYENTES " Modificaciones: a) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste 

,Definición de tipos de datos IVA se agregó validación de observación con código 164 al autorizar un comprobante A o A con leyenda OPERACIÓN SUJETA A RETENCIÓN a un receptor monotributista. b) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se adecuaron las validaciones con códigos 130, 155, 156 y 431. c) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se agregó validación de observación con código 782 al informar un comprobante A o A con leyenda OPERACIÓN SUJETA A RETENCIÓN a un receptor monotributista. d) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se adecuaron las validaciones con códigos 734, 762 y 763. e) Se modifico la validación 431 para que en los tipos de comprobante A o A con leyenda OPERACIÓN SUJETA A RETENCIÓN en caso de compradores multiples, al menos uno de ellos sea Monotributista o Responsable Inscripto V0.17 13/08/2021^ Versión correspondiente al Release 0.17 Modificaciones: a) Se habilita la posibilidad de emitir Facturas Electronicas de Credito de Tipo B (Cod. 206) CAE o CAEA a Receptores Cuya Condición Frente al IVA sea Responsable Inscripto o Monotributista. Anteriormente solo se daba esta posibilidad a Recepotres IVA Excentos. Se modificaron las validaciones asociadas a los códigos 156 y 763. V0.18 20/09/2022^ Versión correspondiente al Release 0.18 – Adecuaciónes para las RG 5259/2022 y la RG 5264/2022 de Vinculación de Remitos Electronicos. Las validaciones se harán efectivas a partir de las fechas:  RG 5259/2022 – Sector Carnico: 

,Definición de tipos de datos Optativas a partir del 15/11/2022 y Obligatorias a partir del 15/12/2022  RG 5264/2022 – Sector Harinero: Optativas a partir del 01/02/2023 y Obligatorias a partir del 01/03/2023 Modificaciones: a) Se agrega un nuevo método consultarActividadesVigentes con el objetivo de poder obtener aquellas actividades vigentes para el contribuyente, que se encuentren registradas en las bases de ARCA b) Se agrega la opción de asociar un conjunto de actividades al comprobante dadas por un array, tanto para autorizar o informar comprobantes CAE o CAEA o ajustes de IVA CAE o CAEA c) Se agregan nuevos códigos de errores y observaciones para autorizar o informar comprobantes o ajustes de IVA de CAE o CAEA por validaciones en funcion de las actividades y los tipos de remitos asociados al comprobante.  Codigos CAE Autorizacion de Comprobantes: 165, 166, 167, 168, 170, 171, 172, 173, 175, 176, 177, 178, 180, 181, 182, 183, 184, 185, 186.  Codigos CAE Autorizacion de Ajuste de IVA: 165, 266, 267, 268, 270, 271, 272, 273, 275, 276, 277, 278, 280, 281, 282, 283, 284, 285, 286.  Codigos CAEA Información de Comprobantes: 165, 366, 367, 368, 370, 371, 372, 373, 375, 376, 377, 378, 380, 381, 382, 383, 384, 385, 386.  Codigos CAEA Información de Ajuste de IVA: 165, 466, 467, 468, 470, 471, 472, 473, 475, 476, 477, 478, 480, 481, 482, 483, 484, 485, 486. d) Se agrega un Anexo de Rubros de Actividades y Remitos para mayor detalle de las validaciones asociadas a los códigos 

,Definición de tipos de datos de errores y observaciones del punto c) e) Se modifica el método de consultaComprobante para que en caso de tener actividades asociadas al comprobante las retorne V0.18.1 29/12/2022^ Versión correspondiente al Release 0.18.1 Modificaciones: a) Se modifica la validación correspondiente al código 119 (cotización de moneda). No podrá ser superior en un 200% del que suministra ARCA como orientativo de acuerdo a la cotización oficial V0.19 16/02/2023^ Versión correspondiente al Release 0.19 Modificaciones: a) Se agrego el Tipo de Dato Adicional Codigo 5 Cómputo IVA Crédito Fiscal – Perteneciente a la RG4520/19 con las correspondientes validaciones de su único campo Motivo de Excepcion: 337, 338, 339, 935, 936, 937 b) Se agrega sección “2.2 Sitio de consulta y canal de atención” V0.20 21 /^07 /2023^ Versión correspondiente al Release 0. 20 Modificaciones: a) Se agregan nuevos códigos de observación (504 y 1104) para indicar si los <codigoMtx> de los items no corresponda con un GTIN registrado, activo o vigente, tanto para autorizar como para informar comprobantes CAE o CAEA. b) Para pruebas en ambiente de 

,Definición de tipos de datos homologación de las validaciones, se podrán utilizar los Códigos Genéricos establecidos en el Apartado B, del Anexo VII de la Resolución General AFIP N° 2.904/2010. V0. 20 .1 27 /^11 /^2023 Versión correspondiente al Release 0.20.1 Modificaciones: a) Se modifica la validación correspondiente al código 119 (cotización de moneda). No podrá ser superior en un 400 % del que suministra ARCA como orientativo de acuerdo a la cotización oficial V0. 20 .2 20 /^12 /^2023 Versión correspondiente al Release 0.20.2 Modificaciones: b) Se modifica la validación correspondiente al código 119 (cotización de moneda). No podrá ser inferior en un 2 % del que suministra ARCA como orientativo de acuerdo a la cotización oficial 

###### V0.21.2 20 /^12 /2023^ Versión correspondiente al Release 0.21.2 

###### Modificaciones: 

 c) Se agregan nuevos códigos de observación (169, 187, 783, 784) para indicar si el emisor tiene pendiente de presentación el formulario de habilitación de comprobantes o su fecha de presentación es anterior a tu alta en IVA. d) Se reutilizan los códigos de error 100 y 136 (al autorizar un comprobante o efectuar un ajuste de IVA, ambos CAE), y los códigos de observación 700 y 740 (al informar un comprobante o efectuar un 

, Definición de tipos de datos ajuste de IVA, ambos CAEA) para indicar los casos donde el contribuyente no se encuentre habilitado a emitir comprobantes A, A con leyenda PAGO EN CBU INFORMADA o A con leyenda OPERACIÓN SUJETA A RETENCIÓN c) Se agregan nuevos códigos de observación (188, 189, 785, 786) para indicar si la CUIT del receptor existe en el padrón del Organismo. d) Se agregan nuevos códigos de observación (194, 195, 791, 792) para indicar si queriendo autorizar o informar una Nota de Crédito, el importe de la misma supera el monto del o los comprobante/s asociado/s que estás ajustando 

V0.22.0 (^) 15/08/2024 Mejoras Técnicas para el Servicio 

###### V0.25.0 17 /^03 /2025^ Versión correspondiente al Pago en Moneda Extranjera 

###### Resolución General N° 5616/2024 

###### Modificaciones: 

 a) Se agrega un nuevo método para consultar las posibles combinaciones de Tipo de Comprobante y Condición de IVA del Receptor a enviar al momento de Autorizar o Informar el comprobante (CAE o CAEA). Ver consultarCondicionesIVAReceptor. Codigo de Error 196 b) Se modifico el metodo consultarCotizacionMoneda para agregar el campo obligatorio fechaCotizacion indicando la fecha para la cual se quiere obtener la misma c) Se agregan los campos optativos condicionIVAReceptor y cancelaEnMismaMonedaExtranjera al mismo tiempo que se vuelve optativo el campo cotizacionMoneda para los metodos autorizarComprobante, autorizarAjusteIVA, informarComprobante, informarAjusteIVA 

, Definición de tipos de datos y consultarComprobante. Ver los errores y observaciones asociados a cada: 

1. condicionIVAReceptor. A partir del 6 de     abril de 2025 podrá enviarse de forma     opcional el campo Condición Frente al     IVA del receptor, hasta tanto entre en     vigencia su obligatoriedad     reglamentada por la Resolución     General N° 5616, en cuyo momento     pasará a rechazar la emisión de     comprobantes sin este dato:      Observaciones: 190, 191, 290, 291,        390, 391, 490 y 491 

2. codigoMoneda, cotizacionMoneda,     cancelaEnMismaMonedaExtranjera:      Errores: 117, 118, 119, 120, 164,        169, 192, 194, 195, 710      Observaciones: 122, 174, 175, 181,        182, 726 

###### V0.25.2 06/06/2025^ Será obligatorio el campo Condición Frente al IVA del 

###### receptor, atento a la entrada en vigencia reglamentada 

###### por la Resolución General N°5616. Por tal motivo los 

###### códigos de observación 190, 191, 290, 291, 390 y 490 

###### pasan ahora a ser de error, mientras que 391 y 491 

###### permanecen como observaciones. 

###### V0.25.4 01 /^12 /2025^ Versión correspondiente al reemplazo de los 

###### comprobantes clase “M”. Se actualiza el método 

###### consultarTiposComprobante y los siguientes códigos 

###### para contemplar el cambio: 

######  Códigos de Observación: 130, 134, 163, 169, 

###### 187, 718, 734, 738, 772, 781, 783, 784, 793, 794, 

###### 800 

######  Códigos de Error: 128, 129, 196, 197, 200, 431, 

###### 733 

###### V0.25.5 16/12/2025 Versión correspondiente al agregado de una serie de 

###### controles sobre la CUIT o Numero de Documento del 

###### Receptor del comprobante asi como tambien a los 

###### Compradores multiples si los hubiera que se agregan a 

, Definición de tipos de datos 

###### continuación: 

######  CUIT del Receptor/Comprador comprobante 

###### informada inactivada o invalidada: 

- Códigos de Error Facturas CAE: 253, 261. 

- Códigos de Observación Notas de Crédito 

###### CAE: 253, 261. 

- Códigos de Observación CAEA: 140, 141. 

######  CUIT del Receptor/Comprador del comprobante 

###### se encuentre limitada por haber sido 

###### caracterizada como sujeto no confiable en 

###### materia de Seguridad Social: 

- Códigos de Error Facturas CAE: 265, 297. 

- Códigos de Observación Notas de Crédito 

###### CAE: 265, 297. 

- Códigos de Observación todos los 

###### Comprobantes CAEA: 142, 143. 

######  CUIT del Receptor/Comprador del comprobante 

###### considerada Apócrifa (actualización de 

###### validaciones. Existentes): 

- Códigos de Error CAE: 303, 304. 

- Códigos de Observación CAEA: 144, 145. 

######  Número de Documento del 

###### Receptor/Comprador marcado como fallecido y 

###### no sucesión indivisa. 

- Códigos de Observación todos los 

###### Comprobantes CAEA: 146, 148, 311 y 312. 

V0.25.6 (^) 01/06/2026 En cumplimiento con la RG 5782, la cual establece 

###### cambios en la modalidad de Código de Autorización 

###### Electrónico Anticipado (CAEA), se implementarán las 

###### siguientes modificaciones a partir del 01/06/2026: 

- Eliminación de Empadronamiento CAEA: se 

###### elimina el requisito de empadronamiento para la 

###### utilización del CAEA. Para tal fin entraran en 

###### desuso las siguientes observaciones: 10020, 

###### 10022 y 10030. 

V0.25.7 (^) 01/07/2026 En cumplimiento con la RG 5782, la cual establece 

###### cambios en la modalidad de Código de Autorización 

###### Electrónico Anticipado (CAEA), se implementarán las 

###### siguientes modificaciones a partir del 01/08/2026: 

, Definición de tipos de datos 

- Cambio de condición: todos los puntos de venta 

###### CAEA pasarán a ser considerados como 

###### Contingencia. 

- Vinculación de domicilio: Los puntos de venta 

###### CAEA deberán estar asociados a un domicilio de 

###### factura electrónica (CAE o Controlador Fiscal de 

###### nueva generación). 

- Obligatoriedad de campos: El campo 

###### fechaHoraGen pasará a ser de integración 

###### obligatoria. Para tal fin la observación 755 

###### entrara en desuso y a partir de la fecha de 

###### implementación los casos pasaran a ser 

###### rechazados por el código de error 754 

- Con la implementación de la nueva versión, la 

###### gestión de códigos para la solicitud de CAEA se 

###### actualizará de la siguiente manera: 

- Altas: Se agregan los códigos 10027 de error 

###### y 10028 de observación. 

- Modificaciones: Se reconfigura el código de 

###### observación 10026. 

, Definición de tipos de datos 
