### Cotización Monedas del Banco de la Nación Argentina 

###### De acuerdo con el manejo de la cotización en los casos en que se indique que el pago de la factura se 

###### realizará en la misma moneda extranjera en la que está expresada, conforme a lo dispuesto por la 

###### Resolución General N° 5616/2024, se pone a disposición una tabla de monedas con las cotizaciones del 

###### Banco de la Nación Argentina. Para estas monedas, al indicar el campo 

###### "cancelaEnMismaMonedaExtranjera" al momento de informar o autorizar la factura (CAE o CAEA), se 

###### podrá obtener automáticamente la cotización correspondiente sin necesidad de especificarla a través 

###### del campo "cotizacionMoneda". Si se incluye este último campo, se ha especificado también 

###### "cancelaEnMismaMonedaExtranjera", si se trata de alguna de las monedas incluidas en la tabla y existe 

###### una cotización de dicha moneda en las bases de ARCA, la cotización informada deberá coincidir 

###### exactamente con la registrada en el campo "cotizacionMoneda". Monedas del Banco de la Nación 

###### Argentina para las que se puede obtener una cotización automática: 

###### Código Descripción 

###### 9 Franco Suizo 

###### 14 Coronas Danesas 

###### 15 Coronas Noruegas 

###### 16 Coronas Suecas 

###### 18 Dólar Canadiense 

###### 19 Yenes 

###### 21 Libra Esterlina 

###### 26 Dólar Australiano 

###### 60 Euro 

###### 64 Yuan 

###### DOL Dólar Estadounidense 

###### 2 Dólar Libre EEUU 

###### Cabe aclarar que la fecha utilizada para obtener la cotización al momento de informar o autorizar la 

###### factura (CAE o CAEA) se obtiene de la siguiente forma: 

######  Si la fecha de emisión de la factura es mayor o igual a la fecha actual, se toma como base esta 

###### ultima y se obtiene el día hábil anterior a la misma. 

######  Si la fecha de emisión de la factura es menor a la fecha actual, se toma como base la fecha de 

###### emisión del comprobante y se obtiene el día hábil anterior a la misma. 

, Definición de tipos de datos 

###### En cualquier caso para acceder a esta funcionalidad de calculo automático de cotización se debe enviar 

###### el campo "cancelaEnMismaMonedaExtranjera", la moneda especificada debe pertenecer a la tabla y 

###### adicionalmente debe haber cotización para la fecha calculada mas arriba. 

, Definición de tipos de datos 
