### Rubros de Actividades y Remitos 

###### Al momento de informar o autorizar un comprobante (CAE o CAEA), es posible asociar al mismo un 

###### cojunto de actividades que serán identificadas como pertenecientes a un “Rubro” si el mismo existe 

###### dentro del servicio, o a un Rubro “Otros” en caso de no existir. Los Rubros son excluyentes entre si, es 

###### decir un conjunto de actividades identificadas con un Rubro, no pueden pertenecer a otro. Para 

###### identificar a que Rubro pertenece un conjunto de actividades, existen dos posibilidades, que el 

###### conjunto completo de códigos de actividad pertenezca a un Rubro en particular o bien que además de 

###### esto ultimo existan algunas actividades que pertenecen al Rubro “Otros” (es decir aun no poseen un 

###### Rubro en particular). Casos Posibles: 

###### Caso 1 Se Informa o Autoriza (CAE o CAEA) un comprobante con los siguientes códigos de actividad: 

######  101040 MATANZA DE GANADO EXCEPTO EL BOVINO Y PROCESAMIENTO DE SU CARNE 

###### (INCLUYE GANADO OVINO, PORCINO, EQUINO, ETC.) 

######  101099 MATANZA DE ANIMALES N.C.P. Y PROCESAMIENTO DE SU CARNE, ELABORACIÓN DE 

###### SUBPRODUCTOS CÁRNICOS N.C.P. (INCLUYE PRODUCCIÓN DE CARNE FRESCA, REFRIGERADA O 

###### CONGELADA DE LIEBRE, CONEJO, ANIMALES DE CAZA, ETC.) 

###### Este caso es Valido, ya que todas las actividades declaradas pertenecen al Rubro “Compra y Venta de 

###### Carne”. 

###### Caso 2 Se Informa o Autoriza (CAE o CAEA) un comprobante con los siguientes códigos de actividad: 

######  101040 MATANZA DE GANADO EXCEPTO EL BOVINO Y PROCESAMIENTO DE SU CARNE 

###### (INCLUYE GANADO OVINO, PORCINO, EQUINO, ETC.) 

######  101099 MATANZA DE ANIMALES N.C.P. Y PROCESAMIENTO DE SU CARNE, ELABORACIÓN DE 

###### SUBPRODUCTOS CÁRNICOS N.C.P. (INCLUYE PRODUCCIÓN DE CARNE FRESCA, REFRIGERADA O 

###### CONGELADA DE LIEBRE, CONEJO, ANIMALES DE CAZA, ETC.) 

######  464141 – VENTA AL POR MAYOR DE PIELES Y CUEROS CURTIDOS Y SALADOS 

###### Este caso es Valido, ya que si bien, no todas las actividades declaradas pertenecen al Rubro “Compra y 

###### Venta de Carne”, las que no pertenecen tampoco tienen un Rubro identificado, pertenecen al Rubro 

###### “Otros”, en este caso la actividad de código 464141. 

###### Caso 3 Se Informa o Autoriza (CAE o CAEA) un comprobante con los siguientes códigos de actividad: 

, Definición de tipos de datos 

######  101040 MATANZA DE GANADO EXCEPTO EL BOVINO Y PROCESAMIENTO DE SU CARNE 

###### (INCLUYE GANADO OVINO, PORCINO, EQUINO, ETC.) 

######  101099 MATANZA DE ANIMALES N.C.P. Y PROCESAMIENTO DE SU CARNE, ELABORACIÓN DE 

###### SUBPRODUCTOS CÁRNICOS N.C.P. (INCLUYE PRODUCCIÓN DE CARNE FRESCA, REFRIGERADA O 

###### CONGELADA DE LIEBRE, CONEJO, ANIMALES DE CAZA, ETC.) 

######  461039 – VENTA AL POR MAYOR EN COMISIÓN O CONSIGNACIÓN DE ALIMENTOS, BEBIDAS Y 

###### TABACO N.C.P. 

###### Este caso es Invalido, ya que si bien, la mayoría de las actividades declaradas pertenecen al Rubro 

###### “Compra y Venta de Carne”, las que no pertenecen tienen un Rubro identificado, en este caso la 

###### actividad de código 461039 pertenecen al Rubro “Tabaco”, es por esto que no es posible identificar al 

###### conjunto de actividades por un Rubro o el otro y como consecuencia el comprobante será rechazado u 

###### observado según corresponda. 

###### En funcion del Rubro al que pertenezca el conjunto de Actividades, se permitirá asociar Remitos que se 

###### encuentren en una situación valida dentro de las bases de ARCA. Al ser opcional el conjunto de 

###### actividades, de no indicar por lo menos una, no se podrá identificar el Rubro y por ende no se podrá 

###### validar el o los remitos asociados en el caso de ser sectoriales (88, 990, 993, 994, 995, 997), lo cual 

###### generara un rechazo o una observación según corresponda (códigos 184, 284, 384, 484). Las 

###### asociaciones posibles son las siguientes: 

###### Rubro 

###### Codigos 

###### Actividades 

###### Descripcion de Actividades 

###### Tipos de Remitos 

###### Asociables 

###### Tabaco 

###### 461039 

###### VENTA AL POR MAYOR EN COMISIÓN O 

###### CONSIGNACIÓN DE ALIMENTOS, BEBIDAS Y 

###### TABACO N.C.P. 

###### Remito Tabaco 

###### Acondicionado 

###### (Codigo 88) o 

###### Remito Tabaco en 

###### Hebras (Codigo 

###### 990) 

###### 463300 

###### VENTA AL POR MAYOR DE CIGARRILLOS Y 

###### PRODUCTOS DE TABACO 

###### 120010 PREPARACIÓN DE HOJAS DE TABACO 

###### Remito Tabaco 

###### Acondicionado 

###### (Codigo 88) 

###### 120099 

###### ELABORACIÓN DE PRODUCTOS DE TABACO 

###### N.C.P. 

###### Remito Tabaco en 

###### Hebras (Codigo 

###### 990) 

,Definición de tipos de datos 

, Definición de tipos de datos 

###### Rubro 

###### Codigos 

###### Actividades 

###### Descripcion de Actividades 

###### Tipos de Remitos 

###### Asociables 

###### Harina 

###### 469090 

###### VENTA AL POR MAYOR DE 

###### MERCANCÍAS N.C.P. 

###### Remito Harina en 

###### Camion (Codigo 

###### 993) o Remito 

###### Harina en Tren 

###### (Codigo 994) 

###### 471120 

###### VENTA AL POR MENOR EN 

###### SUPERMERCADOS 

###### 471130 

###### VENTA AL POR MENOR EN 

###### MINIMERCADOS 

###### 472120 

###### VENTA AL POR MENOR DE PRODUCTOS 

###### DE ALMACÉN Y DIETÉTICA 

###### 472190 

###### VENTA AL POR MENOR DE PRODUCTOS 

###### ALIMENTICIOS N.C.P., EN COMERCIOS 

###### ESPECIALIZADOS 

###### 106110 MOLIENDA DE TRIGO 

###### 463159 

###### VENTA AL POR MAYOR DE PRODUCTOS 

###### Y SUBPRODUCTOS DE MOLINERÍA 

###### N.C.P. 

###### 463180 

###### VENTA AL POR MAYOR EN 

###### SUPERMERCADOS MAYORISTAS DE 

###### ALIMENTOS 

###### 463199 

###### VENTA AL POR MAYOR DE PRODUCTOS 

###### ALIMENTICIOS N.C.P. 

, Definición de tipos de datos 

###### Rubro 

###### Codigos 

###### Actividades 

###### Descripcion de Actividades 

###### Tipos de Remitos 

###### Asociables 

###### Compra y Venta 

###### de Carne 

###### 101040 

###### MATANZA DE GANADO EXCEPTO EL 

###### BOVINO Y PROCESAMIENTO DE SU CARNE 

###### (INCLUYE GANADO OVINO, PORCINO, 

###### EQUINO, ETC.) 

###### Remito Carnico 

###### (Codigo 995) 

###### 101099 

###### MATANZA DE ANIMALES N.C.P. Y 

###### PROCESAMIENTO DE SU CARNE, 

###### ELABORACIÓN DE SUBPRODUCTOS 

###### CÁRNICOS N.C.P. (INCLUYE PRODUCCIÓN 

###### DE CARNE FRESCA, REFRIGERADA O 

###### CONGELADA DE LIEBRE, CONEJO, 

###### ANIMALES DE CAZA, ETC.) 

###### 101011 

###### MATANZA DE GANADO BOVINO (INCLUYE 

###### BÚFALOS) 

###### 101012 

###### PROCESAMIENTO DE CARNE DE GANADO 

###### BOVINO 

###### 463121 

###### VENTA AL POR MAYOR DE CARNES ROJAS 

###### Y DERIVADOS (INCLUYE ABASTECEDORES 

###### Y DISTRIBUIDORES DE CARNE) 

###### 461031 

###### OPERACIONES DE INTERMEDIACIÓN DE 

###### CARNE CONSIGNATARIO DIRECTO 

###### 461032 

###### OPERACIONES DE INTERMEDIACIÓN DE 

###### CARNE EXCEPTO CONSIGNATARIO 

###### DIRECTO (INCLUYE MATARIFES 

###### ABASTECEDORES DE CARNE, ETC.) 

, Definición de tipos de datos 
