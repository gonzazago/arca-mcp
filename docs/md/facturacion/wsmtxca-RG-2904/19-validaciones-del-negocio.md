#### Validaciones del Negocio 

**<authRequest>...</authRequest> Campo Código de Error Validación No es superada** cuitRepresentada 10010 Debe encontrarse empadronado en Codificación de Productos opción Factura con Detalle Rechaza **<comprobanteCAERequest>…</comprobanteCAERequest>** 

###### Validaciones Excluyentes 

**Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante 136 Podrá ser: 2 – Nota de Débito A 3 – Nota de Crédito A 7 – Nota de Débito B 8 – Nota de Crédito B 52 – Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 – Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN Rechaza codigoTipoComprobante/ cuitRepresentada 136 El contribuyente no se encuentra habilitado a emitir (según el tipo de comprobante indicado) comprobantes A, A con Leyenda o A con leyenda OPERACIÓN SUJETA A RETENCIÓN Rechaza 

,Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** numeroPuntoVenta 101 Debe ser del tipo habilitado para el régimen CAE Codificación de Productos – Web Services y no debe estar bloqueado. Consultar método _consultarPuntosVenta_ o _consultarPuntosVentaCAE_ Rechaza numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 102 El número de comprobante informado debe ser mayor en 1 al último informado para igual punto de venta y tipo de comprobante. De no existir comprobante informado para igual punto de venta y codigoTipoComprobante, el número de comprobante debe ser igual a 1 (uno) Rechaza fechaEmision 103 Opcional. Para <codigoConcepto> igual a 1, la fecha de emisión del comprobante puede ser hasta 5 días anteriores o posteriores respecto de la fecha de generación, pero sin extenderse al mes siguiente; si se indica <codigoConcepto> igual a 2 ó 3 puede ser hasta 10 días anteriores o posteriores a la fecha de generación Obs.: Si no se envía se le asignará la fecha de proceso. Rechaza fechaEmision / numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 104 La fecha de emisión debe ser mayor o igual a la fecha de emisión del último comprobante del mismo tipo e igual número de punto de venta. Rechaza codigoTipoAutorizacion 105 No debe informarse Rechaza codigoAutorizacion 106 No debe informarse Rechaza fechaVencimiento 107 No debe informarse Rechaza 

,Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoTipoDocumento / numeroDocumento 108 Si se informa uno de los campos debe informarse el otro. Rechaza importeGravado 137 No debe informarse Rechaza importeNoGravado 138 No debe informarse Rechaza importeExento 139 No debe informarse Rechaza importeSubtotal 140 Deberá informarse en 0 (cero) Rechaza importeOtrosTributos 141 No debe informarse Rechaza importeTotal 142 Debe ser igual a la sumatoria de <subtotalIVA><importe> (dentro del arraySubtotalesIVA). Rechaza importeTotal 143 Debe ser igual a la sumatoria de la totalidad de los campos <importeItem>. Rechaza codigoMoneda 117 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarMonedas_ Rechaza cancelaEnMismaMonedaE xtranjera 118 En caso de enviar la marca de que el pago del comprobante se realiza en la misma moneda extranjera para comprobantes que no sean facturas. Unicamente se puede utilizar con los códigos habilitados (1,6,51,201,206) Rechaza cotizacionMoneda 119 No podrá ser inferior al 2% ni superior en un 400 % del que suministra ARCA como orientativo de acuerdo a la cotización oficial Rechaza cotizacionMoneda 120 Debe ser igual a 1 (uno) si <codigoMoneda> es igual a PES Rechaza 

,Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** cancelaEnMismaMonedaE xtranjera 164 En caso de enviar un valor inválido para la marca de que el pago de la factura se realiza en la misma moneda extranjera. Los valores válidos son S, N o vacío Rechaza codigoMoneda/ cancelaEnMismaMonedaE xtranjera 169 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera y enviar como código de moneda el Peso Argentino Rechaza codigoMoneda/ cotizacionMoneda/ cancelaEnMismaMonedaE xtranjera 192 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera, que codigoMoneda es del grupo de monedas con cotización del Banco de la Nación Argentina (ver Anexo Monedas BNA), que haya cotización y que la misma no coincida exactamente con el valor enviado en el campo cotizacionMoneda. En cuyo caso se podrá omitir el mismo para que la cotización de la factura sea la obtenida de los registros de ARCA Rechaza cotizacionMoneda 194 El campo es obligatorio a excepción de los casos para los cuales se envia el campo cancelaEnMismaMonedaExtr anjera y se puede obtener la cotizacion asociada al codigoMoneda si esta es del grupo de monedas del Banco de la Nación Argentina (ver Anexo Monedas BNA) Rechaza cotizacionMoneda 195 No es posible indicar una cotización negativa Rechaza 

,Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoConcepto 121 Deberá ser igual a alguno de los siguientes valores: 1 – Productos 2 – Servicios 3 – Productos y Servicios Rechaza fechaServicioDesde 122 Opcional. Debe informarse si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Rechaza fechaServicioHasta 123 Opcional. Debe informarse si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Rechaza fechaVencimientoPago 124 Opcional. Debe informarse si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Rechaza fechaVencimientoPago / fechaEmision 125 La fecha de vencimiento de pago debe ser posterior o igual a la fecha de emisión. Rechaza arrayOtrosTributos 144 No debe informarse Rechaza arraySubtotalesIVA 127 Debe informarse si algún ítem tiene <codigoCondicionIVA> igual a 4, 5 ó 6. Rechaza codigoTipoDocumento / numeroDocumento 128 Opcionales. Deberán informarse en los siguientes casos: 

- cuando <codigoTipoComprobante > es igual a 2, 3, 52 ó 53. -cuando <codigoTipoComprobante > es igual a 7 u 8 y el importe total del comprobante <importeTotal> es mayor ó igual al monto en pesos resultante según RG4444.     Rechaza 

,Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoTipoDocumento 129 Si <codigoTipoComprobante> es igual a 2, 3, 52 ó 53.<codigoTipoDocumento > deberá ser igual a 80 (CUIT) Rechaza numeroDocumento 131 El Receptor no puede ser igual al Emisor Rechaza codigoTipoDocumento 132 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarTiposDocumento_ Rechaza fechaServicioDesde / fechaServicioHasta 133 La Fecha de Servicio desde debe ser menor o igual a la Fecha de Servicio Hasta Rechaza numeroPuntoVenta / codigoTipoComprobante 135 Solicitudes de autorización para un mismo punto de venta y tipo de comprobante deben ser enviadas en forma sincrónica: si el WS recibe una nueva solicitud para un punto de venta y tipo de comprobante dado mientras la anterior está siendo procesada, la nueva solicitud será rechazada Rechaza fechaHoraGen 146 La fecha/hora de generación solo debe informarse para comprobantes CAEA Rechaza codigoTipoComprobante / periodoComprobantesAso ciados 159 Si <codigoTipoComprobante> es igual a 202, 203, 207 ó 208 perteneciente a Factura de Crédito Electrónica no corresponde informar un periodo de comprobantes asociados. Rechaza 

,Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsoci ados / periodoComprobantesAso ciados 160 Si <codigoTipoComprobante> es igual a 2, 3, 7, 8, 52 ó 

53. Falta informar comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito válido/s o informar un período de comprobantes asociados válido     Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados / periodoComprobantesAso ciados 161 Si <codigoTipoComprobante> es igual a 2, 3, 7, 8, 52 ó 53. No debe informar un período de comprobantes asociados cuando informa comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito Rechaza codigoTipoComprobante / periodoComprobantesAso ciados 162 Si <codigoTipoComprobante> es igual a 1, 2, 51, 201 ó 206 correspondientes a Facturas no corresponde informar un periodo de comprobantes asociados. Rechaza codigo / arrayActividades 165 Si ocurrió un error imprevisto al momento de validar las actividades a quedar asociadas al comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / codigoTipoDocumento / numeroDocumento 261 Si <codigoTipoComprobante> NO es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue inactivado o invalidado. Rechaza 

,Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / codigoTipoDocumento / numeroDocumento 297 Si <codigoTipoComprobante> NO es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue limitada por haber sido caracterizada como sujeto no confiable en materia de Seguridad Social. Rechaza codigoTipoDocumento / numeroDocumento 304 Si <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue limitada por haber sido marcada como Apocrifa. Rechaza codigo / arrayActividades 266 Si <codigo> se encuentra mas de una vez en el array de actividades (no admite repetidos). Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigo / arrayActividades 267 Si <codigo> no se encuentra entre las actividades vigentes para la cuit representada. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigo / arrayActividades 268 Si <codigo> se encuentra asociado a un conjunto de actividades de un “rubro” y se encontraron otros <codigo> dentro del array que se encuentran asociados a otro conjunto de un “rubro” distinto. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

,Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 270 Si ocurrio un error imprevisto al validar los comprobantes asociados que sean de tipo remito (88, 990, 91, 995, 997, 993, 994). Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 271 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y no fue encontrado en los registros de ARCA, o bien fue encontrado, pero la información asociada al mismo no es la esperada. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 272 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero el mismo se encuentra en un estado inválido. Dichos estados varian según el tipo de remito del que se trate. Ver el Anexo de Rubros de Actividades y Remitos Rechaza numeroDocumento / arrayComprobantesAsoci ados 273 Si el comprobante asociado es del tipo remito (91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero la cuit del receptor de dicho remito no coincide con la cuit del receptor del comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

,Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 275 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y el tipo de comprobante asociado es remito, pero el mismo no es carnico (88, 990, 91, 997, 993, 994), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 276 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” o “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado o Tabaco en Hebras (91, 997, 993, 994, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 277 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado (990, 91, 997, 993, 994, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

,Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 278 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco en Hebras (88, 91, 997, 993, 994, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 280 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y el tipo de comprobante asociado es remito, pero el mismo no es Harina (88, 91, 997, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 281 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y no se especifico ningún Remito del tipo Harina (993 y 994), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza/ Observa según fechas en la RG 5264/2022 codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 282 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y no se especifico ningún Remito del tipo Carnico (995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza/ Observa según fechas en RG 5259/2022 

,Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoConcepto / arrayComprobantesAsoci ados 283 Los códigos de concepto permitidos para asociar Remitos Cárnicos (995) al Comprobante son 1 – Productos y 3 – Productos y Servicios Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados arrayActividades 284 Si no se especifican actividades, y el Remito a Asociar es un Remito Sectorial (88, 990, 993, 994, 995, 997), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 285 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero se encuentra marcado como de exportación, mientras que el presente servicio solo acepta Remitos para el Mercado. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / arrayComprobantesAsoci ados 286 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y ya fue declarado una vez en el array de comprobantes asociados. Ver el Anexo de Rubros de Actividades y Remitos Rechaza condicionIVAReceptor/ fechaEmision 290 Si no se informa la condición de IVA del Receptor (obligatoria) o bien se informa un valor no contemplado por el servicio. Ver método consultarCondicionesIVARec eptor Rechaza 

,Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** condicionIVAReceptor/ codigoTipoComprobante/ fechaEmision 291 Si se informa una combinación invalida de Condición de IVA del Receptor y Tipo de Comprobante. Ver método consultarCondicionesIVARec eptor Rechaza 

, Autorizar un Ajuste IVA CAE 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada** codigoTipoDocumento / numeroDocumento 109 Si <codigoTipoDocumento> es igual a 80, 86 o 87, <numeroDocumento> debe ser válido y activo, excepto para <codigoTipoComprobante> 6, 7 u 8, <codigoTipoDocumento> 80 y <numeroDocumento> igual a 23000000000. Observa numeroDocumento 130 Si <codigoTipoComprobante> es igual a 2, 3, 52 ó 53 la CUIT del receptor debe encontrarse activa en IVA o en monotributo. Observa numeroDocumento 134 Si <codigoTipoComprobante> es igual a 2, 3, 52 ó 53 y <codigoTipoDocumento> es igual a 80 (CUIT), dicha CUIT deberá encontrarse activa en el Sistema Registral Observa codigoTipoDocumento / numeroDocumento 164 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 la CUIT del receptor es activa en monotributo Observa cuitRepresentada 187 Si <cuitRepresentada> tiene pendiente de presentación el formulario de habilitación de comprobantes o su fecha de presentación es anterior a tu alta en IVA Observa numeroDocumento 189 Si <numeroDocumento> es inexistente en el padron del Organismo Observa codigoTipoComprobante/ arrayComprobantesAsoci ados/importeTotal 195 Siendo <codigoTipoComprobante> una Nota de Crédito (3, 8, 53, 203 y 208), si la sumatoria de los importes totales de los elementos del array <arrayComprobantesAsociados> (sin incluir Remitos) supera el <importeTotal> de la Nota de Crédito Observa 

,Autorizar un Ajuste IVA CAE **Campo Código de Error Validación NO es superada** codigoTipoComprobante/ codigoTipoDocumento/ numeroDocumento 261 Si <codigoTipoComprobante> es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue inactivado o invalidado. Observa codigoTipoComprobante/ codigoTipoDocumento/ numeroDocumento 297 Si <codigoTipoComprobante> es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue limitada por haber sido caracterizada como sujeto no confiable en materia de Seguridad Social. Observa numeroDocumento 312 Si el <numeroDocumento> del receptor/comprador se encuentra marcada como fallecido y no está marcado como sucesión indivisa. Observa 

,Autorizar un Ajuste IVA CAE **<comprobanteAsociado>…</comprobanteAsociado>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigoTipoComprobante 200 

###### Deberá ser igual a 88 o 990 si el tipo 

###### de comprobante cuya autorización se 

###### solicita es igual a 1, 6 o 51 

###### Deberá ser igual a 1, 2, 3, 88 o 990 si el 

###### tipo de comprobante cuya 

###### autorización se solicita es igual a 2 o 3. 

###### Deberá ser igual a 6, 7, 8, 88 o 990 si el 

###### tipo de comprobante cuya 

###### autorización se solicita es igual a 7 u 8. 

###### Deberá ser igual a 51, 52, 53, 88 o 990 

###### si el tipo de comprobante cuya 

###### autorización se solicita es igual a 52 o 

###### 53. 

Rechaza numeroPuntoVenta 202 

###### El tipo de punto de venta, en caso de 

###### ser electrónico, deberá ser alguno de 

###### los siguientes: RECE para aplicativo y 

###### web services, Factura en Línea 

###### Responsable Inscripto, Factura en 

###### Línea Método Alternativo al RECE 

###### (límite de 100), Codificación de 

###### Productos Web services, Codificación 

###### de Productos Factura en Línea, CAEA 

- Fact. Elect. (RECE) - RI IVA o CAEA - 

###### Codificación de Productos. 

Rechaza codigoTipoComprobante 203 

###### Deberá ser igual a 1, 2, 3, 6, 7, 8, 51, 

###### 52, 53, 88 o 990. 

Rechaza codigoTipoComprobante / cuit 204 

###### El campo cuit es opcional y solo puede 

###### completarse si el tipo de comprobante 

###### es 88 o 990 (solo es necesario si el 

###### remito fue emitido por un tercero) 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / 205 

###### El remito asociado deberá obrar en las 

###### bases del organismo. 

 Rechaza 

,Autorizar un Ajuste IVA CAE **Campo Código de Error Validación NO es superada** cuit codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 206 

###### Si remito asociado corresponde a 

###### tabaco de terceros, deberá estar en 

###### estado Confirmado 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 207 

###### El receptor del remito asociado deberá 

###### conicidir con el receptor del 

###### comprobante 

Rechaza fechaEmision 220 

###### La fecha de emisión del comprobante 

###### asociado informada no coincide con la 

###### existente en nuestros registros 

Rechaza fechaEmision 221 

###### La fecha de emisión de este 

###### comprobante no puede ser anterior a 

###### la factura asociada 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 222 

###### El comprobante asociado no posee 

###### cuit del receptor 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 223 

###### El comprobante asociado posee otro 

###### cuit de receptor 

Rechaza fechaEmision 224 

###### Si el punto de venta del comprobante 

###### asociado NO es del tipo electrónico 

###### debe informar la fecha de emisión 

Rechaza fechaEmision 225 

###### Si el punto de venta del comprobante 

###### asociado NO es del tipo electrónico la 

###### fecha de emisión no puede ser 

###### posterior a la fecha de la autorización 

 Rechaza 

, Autorizar un Ajuste IVA CAE 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada <periodoComprobantesAsociados>…</ periodoComprobantesAsociados>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** fechaDesde / fechaHasta 2200 

###### La fechaHasta debe ser posterior o 

###### igual fechaDesde 

Rechaza fechaHasta / fechaEmision 2201 

###### La fechaHasta del 

###### periodoComprobantesAsociados 

###### debe ser anterior o igual a la fecha 

###### de emisión del comprobante por el 

###### cual se está solicitando la 

###### autorización 

 Rechaza 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada** fechaDesde / fechaHasta 2202 Si el comprobante a autorizar incluye percepciones, el rango de fecha informado debe corresponder al mismo Mes/Año Observa **<subtotalIVA>...</subtotalIVA>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigo 400 Valores permitidos: 4, 5, 6 Rechaza 

,Autorizar un Ajuste IVA CAE **Campo Código de Error Validación NO es superada** codigo 402 No se deberá repetir (no pueden incluírse dos subtotales IVA con el mismo código) Rechaza codigo 403 Si existen uno o más ítems con una determinada alícuota IVA, deberá existir el correspondiente subtotal IVA para dicha alícuota. No se sebe incluír un subtotal IVA si dicha alícuota no está presente en al menos un ítem. Rechaza importe 404 Deberá coincidir con la sumatoria de todos los <importeItem> de <item> donde la alícuota de IVA coincida con la indicada, es decir, donde <codigoCondicionIVA> de <item> = <codigo> de <subtotalIVA>. Rechaza 

,Autorizar un Ajuste IVA CAE **<item>...</item>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** unidadesMtx 522 Deberá informarse 1 (uno). Rechaza codigoMtx 523 Deberá informarse el código 7790001001139 Rechaza codigo 505 Opcional. Longitud máxima 50 posiciones. Rechaza descripcion 506 Cantidad máxima de caracteres permitidos es 4000. Importante: no es necesario (ni recomendable) completar con espacios. Rechaza cantidad 524 No debe informarse Rechaza codigoUnidad Medida 525 Deberá informarse el código 7 unidades Rechaza precioUnitario 526 No debe informarse Rechaza importeBonific acion 527 No debe informarse Rechaza codigoCondicio nIVA 528 Deberá coincidir con alguno de los siguientes valores permitidos: 4, 5 o 6 Rechaza importeIVA 514 Obligatorio si <codigoTipoComprobante> es igual a 2, 3, 52 ó 53. No corresponde para <codigoTipoComprobante> igual a 7 u 8. Rechaza importeIVA 529 Para <codigoTipoComprobante> igual a 2, 3, 52 ó 53 deberá ser igual a <importeItem> Rechaza importeIVA 530 Si <codigoTipoComprobante> es igual a 2, 3, 52 ó 53 deberá ser mayor a 0 (cero) Rechaza importeItem 531 Deberá ser mayor a 0 (cero) Rechaza 

,Autorizar un Ajuste IVA CAE **<datoAdicional>...</datoAdicional>** 

###### Los datos adicionales sólo deberán ser incluídos si el emisor pertenece al conjunto de emisores 

###### habilitado para usar datos adicionales (“Adicionales por R.G.”). En ese caso podrá incluír el o los datos 

###### adicionales que correspondan, especificando el tipo de dato adicional de acuerdo a la situación del 

###### emisor. El listado de tipos de datos adicionales se puede consultar con el método 

###### consultarTiposDatosAdicionales. 

###### Por ejemplo, si el emisor está incluído en el Régimen de Promoción Industrial, deberá incluír un dato 

###### adicional tipo 2. 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** t 320 Valores permitidos: consultar método _consultarTiposDatosAdicionales_ Rechaza t / c1…c6 321 Si t es igual a 2 (“Dato Adicional para Empresas Promovidas”), en c1 se deberá indicar el id de proyecto (el mismo deberá corresponder a la cuit emisora del comprobante) o cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen de Promoción Industrial. Los campos c2 a c6 no deberán informarse (reservados para uso futuro) Rechaza t / c1…c6 323 Si t es igual a: 11(“Dato Adicional para Operaciones Económicas Relacionadas con Bienes Inmuebles”) 12(“Dato Adicional para Locacion temporaria de Inmuebles con fines Turisticos”) 13(“Dato Adicional para Representantes de Modelos”) 14 (“Dato Adicional para Agencias de Publicidad”) 15 (“Dato Adicional para Personas Físicas que desarrollen actividad de Modelaje”) Rechaza 

,Autorizar un Ajuste IVA CAE **Campo Código de Error Validación NO es superada** En c1 se deberá indicar cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen o 1 (uno) en caso de que la actividad facturada esté alcanzada por el Régimen. Los campos c2 a c6 no deberán informarse (reservados para uso futuro) t / c1…c6 324 Si t es igual a 10 (“Dato Adicional para Educación Pública de Gestión Privada”) En c1 se deberá indicar cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen o 1 (uno) en caso de que la actividad facturada esté alcanzada por el Régimen. Si se se informa c1 igual a 1(uno) debe informar: c2 = Tipo de Documento (corresponde a 10.11 según R.G.). c3 = Numero de Documento (corresponde 10.12 según R.G.). Los campos c4 a c6 no deberán informarse (reservados para uso futuro) Rechaza t / c1…c6 325 Si t es igual a 10 (“Dato Adicional para Educación Pública de Gestión Privada”) y c1 igual a 1(uno). En c2 debe informar alguno de los valores permitidos: consultar método consultarTiposDocumento. Si se indica c2 con 80, 86 ú 87 (CUIT, CUIL y CDI respectivamente) el número informado en c3 deberá obrar en las bases del organismo. Rechaza t / c1…c6 322 No se puede incluír más de un dato adicional (sólo se permite un id por comprobante) Rechaza 

,Autorizar un Ajuste IVA CAE **<comprador>...</comprador>** 

###### El grupo de compradores sólo deberán ser incluídos para respaldar las operaciones de venta de bienes 

###### muebles registrables a un conjunto de adquirentes. 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** arrayCompradores 420 Si se informar el grupo de compradores debe tener mas de un comprador Rechaza codigoTipoDocumento/ numeroDocumento 421 Si se infroma el grupo de compradores, el tipo y número de documento del Receptor es obligatorio. Cuando se informan compradores múltiples, el que se indique con mayor porcentaje deberá figurar como receptor del comprobante. En caso de no haber un único comprador con porcentaje mayor, debe informar uno de ellos. Rechaza codigoTipoDocumento 422 El tipo de documento de los compradores debe ser CUIT, CUIL o CDI Rechaza codigoTipoDocumento/ numeroDocumento 423 Número de documento informado repetido. Sólo Se debe informar una vez al comprador Rechaza porcentaje 424 El Porcentaje de Titularidad del Comprador debe ser mayor a 0 (cero) Rechaza porcentaje 425 El Porcentaje de Titularidad del Comprador debe ser menor a 100 (cien) Rechaza porcentaje 426 El Emisor del comprobante no puede ser comprador Rechaza porcentaje 427 La suma de los porcentajes indicados en la lista de compradores debe ser igual a 100 Rechaza codigoTipoDocumento/ numeroDocumento 428 El receptor del comprobante debe incluírse con el mismo tipo y número de documento en el grupo de compradores Rechaza codigoTipoDocumento/ 429 El receptor del comprobante (tipo Rechaza 

,Autorizar un Ajuste IVA CAE **Campo Código de Error Validación NO es superada** numeroDocumento/ porcentaje y número de documento) debe coincidir con el comprador que tenga el mayor porcentaje en la lista de compradores. En caso de no haber un único comprador con porcentaje mayor, deberá coincidir con uno de ellos codigoTipoDocumento/ numeroDocumento 430 Las CUIT/CUIL/CDI de los compradores deberán encontrarse activas en el Sistema Registral Rechaza codigoTipoComprobante /numeroDocumento 431 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 las CUITs de los compradores deben 

###### encontrarse activa en IVA o en 

###### monotributo. 

Rechaza arrayCompradores /codigoConcepto 432 Sólo se puede informar el arrayCompradores para codigoConcepto igual a 1 (Productos) Rechaza 

,#### Solicitar CAEA (solicitarCAEA) 

Esta operación permite solicitar un CAEA. El cliente envía el requerimiento, el cual es atendido por el WS, superadas las validaciones se otorgará un CAEA y su respectivo período de vigencia (fecha de validez desde y fecha de validez hasta). Podrá ser solicitado dentro de los 5 (cinco) días corridos anteriores al comienzo de cada quincena y hasta el final de la misma. Habrá dos quincenas, la primera abarca desde el primero hasta el quince de cada mes y la segunda desde el dieciséis hasta el último día del mes. 
