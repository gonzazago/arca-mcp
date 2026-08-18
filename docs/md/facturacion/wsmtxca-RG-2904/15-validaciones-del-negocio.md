#### Validaciones del Negocio 

**<authRequest>...</authRequest> Campo Código de Error Validación No es superada** cuitRepresentada 10005 La cuit emisora ha sido incluída en la consulta de facturas apócrifas Rechaza cuitRepresentada 10010 Debe encontrarse empadronado en Codificación de Productos opción Factura con Detalle Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **<comprobanteCAERequest>…</comprobanteCAERequest>** 

###### Validaciones Excluyentes 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante 100 Podrá ser: 1 – Factura A 2 – Nota de Débito A 3 – Nota de Crédito A 6 – Factura B 7 – Nota de Débito B 8 – Nota de Crédito B 51 – Factura A con leyenda OPERACIÓN SUJETA A RETENCIÓN 52 – Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 – Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 201 Factura de Crédito Electrónica MiPyMEs (FCE) A 202 Nota de Débito Electrónica MiPyMEs (FCE) A 203 Nota de Crédito Electrónica MiPyMEs (FCE) A 206Factura de Crédito Electrónica MiPyMEs (FCE) B 207 Nota de Débito Electrónica MiPyMEs (FCE) B 208 Nota de Crédito Electrónica MiPyMEs (FCE) B Consultar método _consultarTiposComprobant e_ Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante/ cuitRepresentada 100 El contribuyente no se encuentra habilitado a emitir (según el tipo de comprobante indicado) comprobantes A, A con leyenda PAGO EN CBU INFORMADA o A con leyenda OPERACIÓN SUJETA A RETENCIÓN Rechaza numeroPuntoVenta 101 Debe ser del tipo habilitado para el régimen CAE Codificación de Productos – Web Services y no debe estar bloqueado. Consultar método _consultarPuntosVenta_ o _consultarPuntosVentaCAE_ Rechaza numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 102 El número de comprobante informado debe ser mayor en 1 al último informado para igual punto de venta y tipo de comprobante. De no existir comprobante informado para igual punto de venta y codigoTipoComprobante, el número de comprobante debe ser igual a 1 (uno) Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** fechaEmision 103 Opcional. Para <codigoConcepto> igual a 1, la fecha de emisión del comprobante puede ser hasta 5 días anteriores o posteriores respecto de la fecha de generación, pero sin extenderse al mes siguiente; si se indica <codigoConcepto> igual a 2 ó 3 puede ser hasta 10 días anteriores o posteriores a la fecha de generación Obs.: Si no se envía se le asignará la fecha de proceso. Rechaza fechaEmision / numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 104 La fecha de emisión debe ser mayor o igual a la fecha de emisión del último comprobante del mismo tipo e igual número de punto de venta. Rechaza codigoTipoAutorizacion 105 No debe informarse Rechaza codigoAutorizacion 106 No debe informarse Rechaza fechaVencimiento 107 No debe informarse Rechaza codigoTipoDocumento / numeroDocumento 108 Si se informa uno de los campos debe informarse el otro. Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** importeGravado 110 Si <codigoTipoComprobante > es igual a 1, 2, 3, 51, 52, 53, 201, 202 ó 203: Deberá ser igual a la sumatoria de <importeItem> menos <importeIVA> para la totalidad de los ítems con <codigoCondicionIVA> igual a 3, 4, 5 ó 6. Si <codigoTipoComprobante > es igual a 6, 7 , 8, 206, 207 u 208: Deberá ser igual a la sumatoria de <importeItem> menos el IVA correspondiente (calculado en base al importe y la alícuota de cada ítem), para la totalidad de los ítems con <codigoCondicionIVA> igual a 3, 4, 5 ó 6. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems gravados * Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** importeNoGravado 111 Deberá coincidir con la sumatoria de <importeItem> para los ítems con <codigoCondicionIVA> igual a 1. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems no gravados * Rechaza importeExento 112 Deberá coincidir con la sumatoria de <importeItem> para los ítems con <codigoCondicionIVA> igual a 2. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems exentos * Rechaza importeSubtotal 113 Deberá coincidir con la sumatoria de los campos <importeNoGravado>, <importeGravado>, <importeExento>. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** importeOtrosTributos 114 Debe ser igual a la sumatoria de la totalidad de los campos <otroTributo><importe> (dentro de <arrayOtrosTributos>). Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de tributos * Rechaza importeTotal 115 Debe ser igual a <importeSubtotal>+ <importeOtrosTributos> + sumatoria de <subtotalIVA><importe> (dentro del arraySubtotalesIVA). Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * Rechaza importeTotal 116 Debe ser igual a <importeOtrosTributos> + la sumatoria de la totalidad de los campos <importeItem>. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems * Rechaza codigoMoneda 117 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarMonedas_ Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** cancelaEnMismaMonedaExtra njera 118 En caso de enviar la marca de que el pago del comprobante se realiza en la misma moneda extranjera para comprobantes que no sean facturas. Unicamente se puede utilizar con los códigos habilitados (1,6,51,201,206) Rechaza cotizacionMoneda 119 No podrá ser inferior al 2% ni superior en un 400 % del que suministra ARCA como orientativo de acuerdo a la cotización oficial Rechaza cotizacionMoneda 120 Debe ser igual a 1 (uno) si <codigoMoneda> es igual a PES Rechaza cancelaEnMismaMonedaExtra njera 164 En caso de enviar un valor inválido para la marca de que el pago de la factura se realiza en la misma moneda extranjera. Los valores válidos son S, N o vacío Rechaza codigoMoneda/ cancelaEnMismaMonedaExtra njera 169 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera y enviar como código de moneda el Peso Argentino Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoMoneda/ cotizacionMoneda/ cancelaEnMismaMonedaExtra njera 192 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera, que codigoMoneda es del grupo de monedas con cotización del Banco de la Nación Argentina (ver Anexo Monedas BNA), que haya cotización y que la misma no coincida exactamente con el valor enviado en el campo cotizacionMoneda. En cuyo caso se podrá omitir el mismo para que la cotización de la factura sea la obtenida de los registros de ARCA Rechaza cotizacionMoneda 194 El campo es obligatorio a excepción de los casos para los cuales se envia el campo cancelaEnMismaMonedaEx tranjera y se puede obtener la cotizacion asociada al codigoMoneda si esta es del grupo de monedas del Banco de la Nación Argentina (ver Anexo Monedas BNA) Rechaza cotizacionMoneda 195 No es posible indicar una cotización negativa Rechaza codigoTipoComprobante / codigoTipoDocumento / numeroDocumento 253 Si <codigoTipoComprobante > NO es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue inactivado o invalidado. Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / codigoTipoDocumento / numeroDocumento 265 Si <codigoTipoComprobante > NO es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue limitada por haber sido caracterizada como sujeto no confiable en materia de Seguridad Social. Rechaza codigoTipoDocumento / numeroDocumento 303 Si <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue limitada por haber sido marcada como Apocrifa. Rechaza codigoConcepto 121 Deberá ser igual a alguno de los siguientes valores: 1 – Productos 2 – Servicios 3 – Productos y Servicios Rechaza fechaServicioDesde 122 Opcional. Debe informarse si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Rechaza fechaServicioHasta 123 Opcional. Debe informarse si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Rechaza fechaVencimientoPago 124 Opcional. Debe informarse si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Rechaza fechaVencimientoPago / fechaEmision 125 La fecha de vencimiento de pago debe ser posterior o igual a la fecha de emisión. Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** arraySubtotalesIVA 127 Opcional. Debe informarse si algún ítem tiene <codigoCondicionIVA> igual a 4, 5 ó 6. En otro caso no corresponde. Rechaza codigoTipoDocumento / numeroDocumento 128 Opcionales. Deberán informarse en los siguientes casos: 

- cuando <codigoTipoComprobant e> es igual a 1, 2, 3, 51, 52, 53, 201, 202, 203, 206, 207 ó 208. -cuando <codigoTipoComprobant e> es igual a 6, 7 u 8 y el importe total del comprobante <importeTotal> es mayor ó igual al monto en pesos resultante según RG4444.     Rechaza codigoTipoDocumento 129 Si <codigoTipoComprobante > es igual a 1, 2, 3, 51, 52, 53, 201, 202, 203, 206, 207 ó 208. <codigoTipoDocumento> deberá ser igual a 80 (CUIT) Rechaza numeroDocumento 131 El Receptor no puede ser igual al Emisor Rechaza codigoTipoDocumento 132 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarTiposDocumento_ Rechaza fechaServicioDesde / fechaServicioHasta 133 La Fecha de Servicio desde debe ser menor o igual a la Fecha de Servicio Hasta Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** numeroPuntoVenta / codigoTipoComprobante 135 Solicitudes de autorización para un mismo punto de venta y tipo de comprobante deben ser enviadas en forma sincrónica: si el WS recibe una nueva solicitud para un punto de venta y tipo de comprobante dado mientras la anterior está siendo procesada, la nueva solicitud será rechazada Rechaza importeOtrosTributos 145 Si <codigoTipoComprobante > es igual a 6, 7 u 8, <codigoTipoDocumento> es 80 (CUIT) y <numeroDocumento> es 23000000000 (No Categorizado), el importeOtrosTributos deberá ser mayor a 0 (cero) Rechaza fechaHoraGen 146 La fecha/hora de generación solo debe informarse para comprobantes CAEA Rechaza cuitRepresentada 147 Si <codigoTipoComprobante > es igual a 201, 202, 203, 206, 207 ó 208. Por las condiciones de la CUIT Emisora, no corresponde realizar FCE Rechaza fechaVencimientoPago 148 Si <codigoTipoComprobante > es igual a 201 ó 206. La Fecha de Vencimiento de Pago es obligatorio para Facturas de Crédito MiPyME Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** fechaVencimientoPago 149 Si <codigoTipoComprobante > es igual a 202, 203, 207 ó 208. La Fecha de Vencimiento de Pago no debe informarse para Notas de Crédito o Débito de las Facturas de Crédito MiPYME Rechaza codigoTipoDocumento / numeroDocumento 150 Si <codigoTipoComprobante > es igual a 201, 202, 203, 206, 207 ó 208. La CUIT Receptora no está incluida en el listado de empresas grandes según cronograma vigente ni optó por ser receptora de Factura de Crédito MiPyme Rechaza cuitRepresentada / codigoTipoDocumento / numeroDocumento / importeTotal 151  Si <codigoTipoComprobant e> es igual a 1 ó 6, **y**  La CUIT Receptora está incluida en el listado de empresas grandes según cronograma vigente u optó por ser receptora de Factura de Crédito MiPyme, **y**  Por las condiciones de la CUIT Emisora, **y**  El monto facturado es mayor o igual al Reglamentado Corresponde realizar Factura Electrónica de Crédito MiPyME, realice un comprobante con <codigoTipoComprobante > 201 o 206. Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** cuitRepresentada / codigoTipoDocumento / numeroDocumento / importeTotal 152  Si <codigoTipoComprobant e> es igual a 201 ó 206, **y**  La CUIT Receptora está incluida en el listado de empresas grandes según cronograma vigente u optó por ser receptora de Factura de Crédito MiPyme, **y**  Por las condiciones de la CUIT Emisora, **y**  El monto facturado es menor al Reglamentado NO Corresponde realizar Factura Electrónica de Crédito MiPyME, realice un comprobante con <codigoTipoComprobante > 1 o 6. Rechaza importeTotal 153 Si <codigoTipoComprobante > es igual a 203 ó 208. El importe total del comprobante a autorizar no puede ser mayor o igual al saldo de la operación actual de la cuenta corriente Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoMoneda 154 Si <codigoTipoComprobante > es igual a 202, 203, 207 ó 208, la moneda debe:  coincidir con la Factura vinculada, ó  ser Pesos Argentinos si la Factura vinculada ya fue aceptada, cancelada o rechazada y se desea realizar un ajuste por diferencia de cambio Rechaza numeroDocumento 155 Si <codigoTipoComprobante > es igual a 201, 202, ó 203 la CUIT del receptor debe encontrarse activa en 

###### IVA o en monotributo. 

Rechaza numeroDocumento 156 Si <codigoTipoComprobante > es igual a 206, 207, ó 208 la CUIT del receptor debe encontrarse activa como Responsable Inscripto en IVA, IVA Exento o Monotributista. Rechaza numeroDocumento 157 Si <codigoTipoComprobante > es igual a 201, 202, 203, 206, 207 ó 208. La CUIT Receptora no registra alta en el Domicilio Fiscal Electrónico Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** fechaEmision / codigoMoneda 158 Si <codigoTipoComprobante > es igual a 202, 203, 207 ó 208. Para realizar una Nota de Débito o Crédito con moneda distinta a la Factura la <fechaEmision> de la misma debe ser posterior a la aceptación de la Factura o Cuenta Corriente Asociada Rechaza codigoTipoComprobante / periodoComprobantesAsociad os 159 Si <codigoTipoComprobante > es igual a 202, 203, 207 ó 208 perteneciente a Factura de Crédito Electrónica no corresponde informar un periodo de comprobantes asociados. Rechaza codigoTipoComprobante / arrayComprobantesAsociados / periodoComprobantesAsociad os 160 Si <codigoTipoComprobante > es igual a 2, 3, 7, 8, 52 ó 53. Falta informar comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito válido/s o informar un período de comprobantes asociados válido Rechaza codigoTipoComprobante / arrayComprobantesAsociados / periodoComprobantesAsociad os 161 Si <codigoTipoComprobante > es igual a 2, 3, 7, 8, 52 ó 53. No debe informar un período de comprobantes asociados cuando informa comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / periodoComprobantesAsociad os 162 Si <codigoTipoComprobante > es igual a 1, 2, 51, 201 ó 206 correspondientes a Facturas no corresponde informar un periodo de comprobantes asociados. Rechaza codigoTipoDocumento / numeroDocumento 163 La cuit receptora se encuentra inactiva por haber sido inlcuída en la consulta de facturas apócrifas. Rechaza codigo / arrayActividades 165 Si ocurrió un error imprevisto al momento de validar las actividades a quedar asociadas al comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigo / arrayActividades 166 Si <codigo> se encuentra mas de una vez en el array de actividades (no admite repetidos). Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigo / arrayActividades 167 Si <codigo> no se encuentra entre las actividades vigentes para la cuit representada. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigo / arrayActividades 168 Si <codigo> se encuentra asociado a un conjunto de actividades de un “rubro” y se encontraron otros <codigo> dentro del array que se encuentran asociados a otro conjunto de un “rubro” distinto. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 170 Si ocurrio un error imprevisto al validar los comprobantes asociados que sean de tipo remito (88, 990, 91, 995, 997, 993, 994). Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 171 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y no fue encontrado en los registros de ARCA, o bien fue encontrado, pero la información asociada al mismo no es la esperada. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 172 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero el mismo se encuentra en un estado inválido. Dichos estados varian según el tipo de remito del que se trate. Ver el Anexo de Rubros de Actividades y Remitos Rechaza numeroDocumento / arrayComprobantesAsociados 173 Si el comprobante asociado es del tipo remito (91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero la cuit del receptor de dicho remito no coincide con la cuit del receptor del comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 175 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y el tipo de comprobante asociado es remito, pero el mismo no es carnico (88, 990, 91, 997, 993, 994), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 176 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” o “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado o Tabaco en Hebras (91, 997, 993, 994, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 177 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado (990, 91, 997, 993, 994, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 178 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco en Hebras (88, 91, 997, 993, 994, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 180 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y el tipo de comprobante asociado es remito, pero el mismo no es Harina (88, 91, 997, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 181 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y no se especifico ningún Remito del tipo Harina (993 y 994), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza/Observa según fechas en la RG 5264/2022 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 182 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y no se especifico ningún Remito del tipo Carnico (995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza/Observa según fechas en RG 5259/2022 codigoConcepto / arrayComprobantesAsociados 183 Los códigos de concepto permitidos para asociar Remitos Cárnicos (995) al Comprobante son 1 – Productos y 3 – Productos y Servicios Rechaza codigoTipoComprobante / arrayComprobantesAsociados arrayActividades 184 Si no se especifican actividades, y el Remito a Asociar es un Remito Sectorial (88, 990, 993, 994, 995, 997), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 185 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero se encuentra marcado como de exportación, mientras que el presente servicio solo acepta Remitos para el Mercado. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / arrayComprobantesAsociados 186 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y ya fue declarado una vez en el array de comprobantes asociados. Ver el Anexo de Rubros de Actividades y Remitos Rechaza condicionIVAReceptor/ fechaEmision 190 Si no se informa la condición de IVA del Receptor (obligatoria) o bien se informa un valor no contemplado por el servicio. Ver método consultarCondicionesIVAR eceptor Rechaza condicionIVAReceptor/ codigoTipoComprobante/ fechaEmision 191 Si se informa una combinación invalida de Condición de IVA del Receptor y Tipo de Comprobante. Ver método consultarCondicionesIVAR eceptor Rechaza 

, Autorizar un Comprobante CAE (autorizarComprobante) 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada** codigoTipoDocumento / numeroDocumento 109 Si <codigoTipoDocumento> es igual a 80, 86 o 87, <numeroDocumento> debe ser válido y activo, excepto para <codigoTipoComprobante> 6, 7 u 8, <codigoTipoDocumento> 80 y <numeroDocumento> igual a 23000000000. Observa numeroDocumento 130 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 la CUIT del receptor debe encontrarse activa en IVA o en monotributo Observa numeroDocumento 134 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 y <codigoTipoDocumento> es igual a 80 (CUIT), dicha CUIT deberá encontrarse activa en el Sistema Registral Observa codigoTipoDocumento / numeroDocumento 164 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 la CUIT del receptor es activa en monotributo Observa cuitRepresentada 169 Si <cuitRepresentada> tiene pendiente de presentación el formulario de habilitación de comprobantes o su fecha de presentación es anterior a tu alta en IVA Observa numeroDocumento 188 Si <numeroDocumento> es inexistente en el padron del Organismo Observa 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** codigoTipoComprobante/ arrayComprobantesAsoci ados/importeTotal 194 Siendo <codigoTipoComprobante> una Nota de Crédito (3, 8, 53, 203 y 208), si la sumatoria de los importes totales de los elementos del array <arrayComprobantesAsociados> (sin incluir Remitos) supera el <importeTotal> de la Nota de Crédito Observa codigoTipoComprobante/ codigoTipoDocumento/ numeroDocumento 253 Si <codigoTipoComprobante> es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue inactivado o invalidado. Observa codigoTipoComprobante/ codigoTipoDocumento/ numeroDocumento 265 Si <codigoTipoComprobante> es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue limitada por haber sido caracterizada como sujeto no confiable en materia de Seguridad Social. Observa codigoTipoComprobante / numeroDocumento 311 Si el <numeroDocumento> del receptor/comprador se encuentra marcada como fallecido y no está marcado como sucesión indivisa. Observa 

,Autorizar un Comprobante CAE (autorizarComprobante) **<comprobanteAsociado>…</comprobanteAsociado>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigoTipoComprobante 200 

###### Deberá ser igual a 88 o 990 si el tipo 

###### de comprobante cuya autorización 

###### se solicita es igual a 1, 6 o 51 

###### Deberá ser igual a 1, 2, 3, 88 o 990 si 

###### el tipo de comprobante cuya 

###### autorización se solicita es igual a 2 o 

###### 3. 

###### Deberá ser igual a 6, 7, 8, 88 o 990 si 

###### el tipo de comprobante cuya 

###### autorización se solicita es igual a 7 u 

###### 8. 

###### Deberá ser igual a 51, 52, 53, 88 o 

###### 990 si el tipo de comprobante cuya 

###### autorización se solicita es igual a 52 

###### o 53. 

###### Deberá ser igual a 201, 202, 203, 88, 

###### 91, 990 o 995 si el tipo de 

###### comprobante cuya autorización se 

###### solicita es igual a 202 o 203. 

###### Deberá ser igual a 206, 207, 208, 88, 

###### 91, 990 o 995 si el tipo de 

###### comprobante cuya autorización se 

###### solicita es igual a 207 u 208. 

Rechaza numeroPuntoVenta 202 

###### El tipo de punto de venta, en caso de 

###### ser electrónico, deberá ser alguno de 

###### los siguientes: RECE para aplicativo y 

###### web services, Factura en Línea 

###### Responsable Inscripto, Factura en 

###### Línea Método Alternativo al RECE 

###### (límite de 100), Codificación de 

###### Productos Web services, 

###### Codificación de Productos Factura 

###### en Línea, CAEA Fact. Elect. (RECE) 

 Rechaza 

, Autorizar un Comprobante CAE (autorizarComprobante) Campo Código de Error Validación NO es superada 

###### RI IVA o CAEA Codificación de 

###### Productos. 

codigoTipoComprobante 203 

###### Deberá ser igual a 1, 2, 3, 6, 7, 8, 51, 

###### 52, 53, 201, 202, 203, 206, 207, 208, 

###### 88, 91, 990 o 995. 

Rechaza codigoTipoComprobante / cuit 204 

###### El campo cuit es opcional y solo 

###### puede completarse si el tipo de 

###### comprobante es 88 o 990 (solo es 

###### necesario si el remito fue emitido 

###### por un tercero) 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 205 

###### El remito asociado deberá obrar en 

###### las bases del organismo. 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 206 

###### Si remito asociado corresponde a 

###### tabaco de terceros, deberá estar en 

###### estado Confirmado 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 207 

###### El receptor del remito asociado 

###### deberá conicidir con el receptor del 

###### comprobante 

Rechaza codigoTipoComprobante 208 

###### Deberá ser igual a 88, 91, 990 o 995 

###### si el tipo de comprobante cuya 

###### autorización se solicita es igual a 201 

###### o 206 

Rechaza cuit 209 

###### Al autorizar una nota de débito o 

###### crédito de Factura Electrónica de 

###### Crédito MiPyME (202, 203, 207, 

###### 208), debe enviar el campo cuit para 

###### el tipo de comprobante asociado 

###### indicado 

Rechaza cuit 210 

###### Al autorizar una nota de débito o 

###### crédito de Factura Electrónica de 

###### Crédito MiPyME (202, 203, 207, 

###### 208), el campo cuit para el tipo de 

###### comprobante asociado indicado 

###### debe coincidir con la cuit emisora del 

###### comprobante a autorizar 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante 211 

###### Si el punto de venta es del tipo 

###### electrónico el comprobante asociado 

###### <codigoTipoComprobante> 

 Rechaza 

, Autorizar un Comprobante CAE (autorizarComprobante) Campo Código de Error Validación NO es superada 

###### <numeroPuntoVenta> 

###### <numeroComprobante> deberá 

###### obrar en las bases del organismo. 

arrayComprobantesAsociados 212 

###### Al autorizar una nota de débito o 

###### crédito de Factura Electrónica de 

###### Crédito MiPyME (202, 203, 207, 

###### 208), debe haber un y sólo un 

###### comprobante asociado de Factura 

###### Electrónica de Crédito MiPyME: 

######  201 o 206, para NO 

###### anulación 

######  201, 202, 203, 206, 207 o 

###### 208, para Anulación 

Rechaza arrayComprobantesAsociados 213 

###### Para CUITS Emisoras y Receptoras 

###### candidatas al Régimen de Factura 

###### Electrónica de Crédito, al autorizar 

###### una nota de débito o crédito de 

###### Factura Electrónica (2, 3, 7, 8, 52, 

###### 53), debe haber al menos un 

###### comprobante asociado de Factura 

###### Electrónica (1, 2, 3, 6, 7, 8, 51, 52 o 

###### 53) 

Rechaza codigoTipoComprobante 214 

###### Si está presente el dato adicional 

###### código 22 en S (es una nota de 

###### anulación): 

######  Si el tipo de comprobante a 

###### autorizar es una nota de 

###### crédito (203 o 208) el tipo de 

###### comprobante asociado a 

###### revertir debe ser 201, 202, 

###### 206 ó 207 

###### Si el tipo de comprobante a 

###### autorizar es una nota de 

###### débito (202 o 207) el tipo de 

###### comprobante asociado a 

###### revertir debe ser 203 ó 208 

Rechaza codigoTipoComprobante 215 

###### Si está presente el dato adicional 

###### código 22 en N (NO es una nota de 

###### anulación), debe existir un 

 Rechaza 

, Autorizar un Comprobante CAE (autorizarComprobante) Campo Código de Error Validación NO es superada 

###### comprobante asociado del tipo 201 

###### o 206. 

codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 216 

###### Si el comprobante a autorizar es de 

###### Anulación, el comprobante asociado 

###### debe haber sido rechazado por el 

###### comprador mediante el Sistema de 

###### Regitro de Facturas Electrónicas de 

###### Crédito MiPyME. 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 217 

###### Si el comprobante a autorizar NO es 

###### de Anulación, el comprobante 

###### asociado NO debe haber sido 

###### rechazado por el comprador 

###### mediante el Sistema de Regitro de 

###### Facturas Electrónicas de Crédito 

###### MiPyME. 

Rechaza fechaEmision 218 

###### Al autorizar un comprobante de 

###### Factura Electrónica de Crédito 

###### MiPyME (201, 202, 203, 206, 207, 

###### 208), debe enviar el campo 

###### fechaEmision para el comprobante 

###### asociado del tipo Remito 

Rechaza fechaEmision 219 

###### La fecha de emisión del 

###### comprobante asociado no puede ser 

###### posterior a la fecha del comprobante 

###### a autorizar 

Rechaza fechaEmision 220 

###### La fecha de emisión del 

###### comprobante asociado informada no 

###### coincide con la existente en nuestros 

###### registros 

Rechaza fechaEmision 221 

###### La fecha de emisión de este 

###### comprobante no puede ser anterior 

###### a la factura asociada 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 222 

###### El comprobante asociado no posee 

###### cuit del receptor 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / 223 

###### El comprobante asociado posee otro 

###### cuit de receptor 

 Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** cuit fechaEmision 224 

###### Si el punto de venta del 

###### comprobante asociado NO es del 

###### tipo electrónico debe informar la 

###### fecha de emisión 

Rechaza fechaEmision 225 

###### Si el punto de venta del 

###### comprobante asociado NO es del 

###### tipo electrónico la fecha de emisión 

###### no puede ser posterior a la fecha de 

###### la autorización 

 Rechaza 

, Autorizar un Comprobante CAE (autorizarComprobante) 

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

 Campo Código de Error Validación NO es superada fechaDesde / fechaHasta 2202 Si el comprobante a autorizar incluye percepciones, el rango de fecha informado debe corresponder al mismo Mes/Año Observa 

,Autorizar un Comprobante CAE (autorizarComprobante) **<otroTributo>...</otroTributo>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigo 300 Valores permitidos: consultar método _consultarTiposTributo_ Rechaza descripcion 301 Opcional. Deberá informarse si <codigo> es igual a 99 Rechaza descripcion 302 Es obligatorio ingresar una Descripción al realizar un tipo de comprobante de Factura Electrónica de Crédito MiPyME Rechaza **<subtotalIVA>...</subtotalIVA>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigo 400 Valores permitidos: 4, 5, 6 Rechaza importe 401 Para comprobantes clase “A” o “A con leyenda OPERACIÓN SUJETA A RETENCIÓN”: Deberá coincidir con la sumatoria de todos los <importeIVA> de <item> donde la alícuota de IVA coincida con la indicada, es decir, donde <codigoCondicionIVA> de <item> = <codigo> de <subtotalIVA>. Para comprobantes clase “B”: Deberá coincidir con la sumatoria de todos los importes IVA calculados en base al importe y alícuota IVA de <item> donde la alícuota de IVA coincida con la indicada, es decir, donde <codigoCondicionIVA> de Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** <item> = <codigo> de <subtotalIVA>. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems con igual código de alícuota de IVA * codigo 402 No se deberá repetir (no pueden incluírse dos subtotales IVA con el mismo código) Rechaza codigo 403 Si existen uno o más ítems con una determinada alícuota IVA, deberá existir el correspondiente subtotal IVA para dicha alícuota. No se sebe incluír un subtotal IVA si dicha alícuota no está presente en al menos un ítem. Rechaza importe 405 La suma de los subtotales de IVA no puede ser negativa. Rechaza **<item>...</item>** 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada** codigoMtx 504 Si <codigoMtx> no se corresponde con un GTIN registrado, activo y vigente, el comprobante quedara observado. Observa 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** unidadesMtx 500 Opcional si <codigoUnidadMedida> es 99 ó 97, para el resto de los casos es obligatorio. Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** unidadesMtx 501 De informarse deberá ser mayor o igual a 1 (uno) Rechaza unidadesMtx 502 Longitud máxima 6 posiciones. Rechaza codigoMtx 503 Opcional si <codigoUnidadMedida> es 99 ó 97, para el resto de los casos es obligatorio. Rechaza codigo 505 Opcional. Longitud máxima 50 posiciones. Rechaza descripcion 506 Cantidad máxima de caracteres permitidos es 4000. Importante: no es necesario (ni recomendable) completar con espacios. Rechaza cantidad 507 No corresponde para <codigoUnidadMedida> igual a 99 o 97. En otro caso es obligatorio. Rechaza codigoUnidad Medida 508 Deberá ser alguno de los valores permitidos: consultar método _consultarUnidadesMedida_ Rechaza precioUnitario 509 No corresponde para <codigoUnidadMedida> igual a 99 o 97. En otro caso es obligatorio. Rechaza importeBonific acion 510 Opcional. No corresponde para <codigoUnidadMedida> igual a 99 o 97. Rechaza importeBonific acion 511 De informarse deberá ser menor o igual a <precioUnitario>*<cantidad> Rechaza codigoCondicio nIVA 512 Deberá coincidir con alguno de los valores permitidos: consultar método _consultarCondicionesIVA_ Rechaza codigoCondicio nIVA / codigoUnidad Medida 513 Si <codigoUnidadMedida> es 99 deberá existir por lo menos otro ítem con igual <codigoCondicionIVA> y <codigoUnidadMedida> distinta a la informada para este ítem. Rechaza importeIVA 514 Obligatorio si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53. No corresponde para <codigoTipoComprobante> igual a 6, 7 u 8. Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** importeIVA 515 Para <codigoTipoComprobante> igual a 1, 2 ó 3 y unidad de medida distinto a 95, 97 o 99, deberá ser igual a (<precioUnitario> * <cantidad> -<importeBonificacion>) * alícuota de IVA correspondiente. Para <codigoTipoComprobante> igual a 1, 2, 3, 51, 52 ó 53 y unidad de medida igual a 95 deberá ser igual a (-1) * (<precioUnitario> * <cantidad> <importeBonificacion>) * alícuota de IVA correspondiente. Para <codigoTipoComprobante> igual a 1, 2, 3, 51, 52 ó 53 y unidad de medida igual a 97 o 99, deberá ser igual a <importeItem> <importeItem> / (1 + alícuota de IVA correspondiente). El error relativo porcentual deberá ser <= 

###### 0.01% o el error absoluto <= 0.01 * 

Rechaza importeIVA 516 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 y <codigoUnidadMedida> es 99, el valor absoluto de la sumatoria de los importes ingresados para este campo no puede superar a la sumatoria de los importes <importeIVA> informado con la misma alícuota. El error relativo porcentual deberá ser <= 

###### 0.01% o el error absoluto <= 0.01 * 

Rechaza importeIVA 517 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 y <codigoUnidadMedida> es: 

- 99 deberá ser menor o igual a 0 (cero), 

- 97 podrá ser menor, mayor o igual a 0 (cero). 

- 95 deberá ser menor o igual a 0 (cero), 

- Cualquier otro caso deberá ser mayor o igual a 0 (cero).     Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** importeItem 518 Si <codigoUnidadMedida> es: 

- 99 deberá ser menor a 0 (cero), 

- 97 podrá ser menor, o mayor igual a 0 (cero). 

- 95 deberá ser menor a 0 (cero), 

- Cualquier otro caso deberá ser mayor o igual a 0 (cero).     Rechaza importeItem 519 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 y <codigoUnidadMedida> es distinto a 95, 97 ó 99, deberá ser igual a (<precioUnitario> sin IVA * <cantidad> -<importeBonificacion>)*(1+alícuota). Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 y <codigoUnidadMedida> es igual a 95 ser igual a (-1) * (<precioUnitario> sin IVA * <cantidad> -<importeBonificacion>)*(1+alícuota). Si <codigoTipoComprobante> es igual a 6, 7 u 8 y <codigoUnidadMedida> es distinto a 95, 97 ó 99 deberá ser igual a (<precioUnitario> con IVA * <cantidad> -<importeBonificacion>). Si <codigoTipoComprobante> es igual a 6, 7 u 8 y <codigoUnidadMedida> es igual a 95 ser igual a (-1) * (<precioUnitario> con IVA * <cantidad> -<importeBonificacion>). En ambos casos el error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * Rechaza unidadesMtx/ codigoMtx 520 Si se informa el campo <unidadesMtx> entonces debe informarse el campo <codigoMtx> y viceversa. Rechaza importeIVA 521 Si <codigoCondicionIVA> es igual a _1, 2 ó 3_ entonces <importeIVA> deberá ser igual a 0 (cero). Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) 

,Autorizar un Comprobante CAE (autorizarComprobante) **<datoAdicional>...</datoAdicional>** 

###### Los datos adicionales sólo deberán ser incluídos si el emisor pertenece al conjunto de emisores 

###### habilitado para usar datos adicionales (“Adicionales por R.G.”). En ese caso podrá incluír el o los datos 

###### adicionales que correspondan, especificando el tipo de dato adicional de acuerdo a la situación del 

###### emisor. El listado de tipos de datos adicionales se puede consultar con el método 

###### consultarTiposDatosAdicionales. 

###### Por ejemplo, si el emisor está incluído en el Régimen de Promoción Industrial, deberá incluír un dato 

###### adicional tipo 2. 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** t 320 Valores permitidos: consultar método _consultarTiposDatosAdicionales_ Rechaza t / c1…c6 321 Si t es igual a 2 (“Dato Adicional para Empresas Promovidas”), en c1 se deberá indicar el id de proyecto (el mismo deberá corresponder a la cuit emisora del comprobante) o cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen de Promoción Industrial. Los campos c2 a c6 no deberán informarse (reservados para uso futuro) Rechaza t / c1…c6 323 Si t es igual a: 11(“Dato Adicional para Operaciones Económicas Relacionadas con Bienes Inmuebles”) 12(“Dato Adicional para Locacion temporaria de Inmuebles con fines Turisticos”) 13(“Dato Adicional para Representantes de Modelos”) 14 (“Dato Adicional para Agencias de Publicidad”) Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** 15 (“Dato Adicional para Personas Físicas que desarrollen actividad de Modelaje”) En c1 se deberá indicar cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen o 1 (uno) en caso de que la actividad facturada esté alcanzada por el Régimen. Los campos c2 a c6 no deberán informarse (reservados para uso futuro) t / c1…c6 324 Si t es igual a 10 (“Dato Adicional para Educación Pública de Gestión Privada”) En c1 se deberá indicar cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen o 1 (uno) en caso de que la actividad facturada esté alcanzada por el Régimen. Si se informa el campo c1 igual a 1(uno) debe informar en el campo c2 el Tipo de Documento y en el campo c3 el Numero de Documento (los mismos corresponden a los identificadores 10.11 y 10.12 respectivamente segun la R.G. 4291 Anexo (art. 15, 17 y 19), 1 Establecimientos de educación publica de gestion privadas ). Los campos c4 a c6 no deberán informarse (reservados para uso futuro) Rechaza t / c1…c6 325 Si t es igual a 10 (“Dato Adicional para Educación Pública de Gestión Privada”) y c1 igual a 1(uno). En c2 debe informar alguno de los valores permitidos: consultar método consultarTiposDocumento. Si se indica c2 con 80, 86 ú 87 (CUIT, CUIL y CDI respectivamente) el número informado en c3 deberá obrar en las bases del Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** organismo. t / c1…c6 322 No se puede incluír más de un dato adicional (sólo se permite un id por comprobante) Rechaza t 326 Los tipos de dato adicional 21, 22 o 23 sólo corresponden a comprobantes de Factura Electrónica de Crédito MiPyME Rechaza t / c1…c6 327 Para el tipo de dato adicional 22, Anulación, debe indicar en el campo c1 S (si) si es de anulación o N (no) si no es de anulación Rechaza t / c1…c6 328 Para el tipo de dato adicional 21, CBU y Alias del Emisor, el CBU informado en el campo c1 no corresponde al Emisor según nuestros registros Rechaza t / c1…c6 329 Si el tipo de Comprobante a autorizar es 202, 203, 207 o 208, debe indicar el dato adicional código 22, Anulación, para indicar si este es un comprobante de anulación o no Rechaza t / c1…c6 330 Si el tipo de Comprobante a autorizar es 201 o 206, NO debe indicar el dato adicional código 22, Anulación. No corresponde a un comprobante Factura. Rechaza t / c1…c6 331 Si el tipo de Comprobante a autorizar es 201 o 206, debe indicar el dato adicional código 21, CBU y Alias emisor. Rechaza t / c1…c6 332 Si el tipo de Comprobante a autorizar es 202, 203, 207 o 208, NO debe indicar el dato adicional código 21, CBU y Alias emisor. Rechaza t / c1…c6 333 Para el tipo de dato adicional 21, 22 y 23, debe indicar el campo c1 Rechaza t / c1…c6 334 Para el tipo de dato adicional 27, Opción de Transferencia, las opciones válidas son ADC para Agente de Depósito Colectivo o SCA para Sistema de Circulación Abierta Rechaza t / c1…c6 335 Si el tipo de Comprobante a autorizar es 201 o 206, debe indicar el dato adicional código 27, Opción de Transferencia. Rechaza t / c1…c6 336 Si el tipo de Comprobante a autorizar es 202, 203, 207 o 208, NO debe Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** indicar el dato adicional código 27, Opción de Transferencia. t / c1…c6 337 Si el tipo de Comprobante a autorizar NO es 1, 2, 3, 201, 202, 203, NO debe indicar el dato adicional código 5, Motivo de Excepcion Cómputo IVA Crédito Fiscal. Rechaza t / c1…c6 338 Si el tipo de Comprobante a autorizar es 1, 2, 3, 201, 202, 203, y se indica el dato adicional código 5, se debera indicar el campo c1 (Motivo de Excepcion) de forma obligatoria. Rechaza t / c1…c6 339 Si el tipo de Comprobante a autorizar es 1, 2, 3, 201, 202, 203, y se indica el dato adicional código 5, y el campo el campo c1 (Motivo de Excepcion) NO es un numérico del 1 al 6. Rechaza t / c1…c6 340 Si el tipo de Comprobante a autorizar es 1, 2, 3, 201, 202, 203, y se indica el dato adicional código 5, y no se deberán utilizar ninguno de los restantes campos reservados a futuro campos de c2 a c6. Rechaza **<comprador>...</comprador>** 

###### El grupo de compradores sólo se deberá incluír para respaldar las operaciones de venta de bienes 

###### muebles registrables a un conjunto de adquirentes. 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** arrayCompradores 420 Si se informar el grupo de compradores debe tener mas de un comprador Rechaza codigoTipoDocumento/ numeroDocumento 421 Si se informa el grupo de compradores, el tipo y número de documento del Receptor es obligatorio. Cuando se informan compradores múltiples, el que se indique con mayor porcentaje Rechaza 

,Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** deberá figurar como receptor del comprobante. En caso de no haber un único comprador con porcentaje mayor, debe informar uno de ellos. codigoTipoDocumento 422 El tipo de documento de los compradores debe ser CUIT, CUIL o CDI Rechaza codigoTipoDocumento/ numeroDocumento 423 Número de documento informado repetido. Sólo Se debe informar una vez al comprador Rechaza porcentaje 424 El Porcentaje de Titularidad del Comprador debe ser mayor a 0 (cero) Rechaza porcentaje 425 El Porcentaje de Titularidad del Comprador debe ser menor a 100 (cien) Rechaza porcentaje 426 El Emisor del comprobante no puede ser comprador Rechaza porcentaje 427 La suma de los porcentajes indicados en la lista de compradores debe ser igual a 100 Rechaza codigoTipoDocumento/ numeroDocumento 428 El receptor del comprobante debe incluírse con el mismo tipo y número de documento en el grupo de compradores Rechaza codigoTipoDocumento/ numeroDocumento/ porcentaje 429 El receptor del comprobante (tipo y número de documento) debe coincidir con el comprador que tenga el mayor porcentaje en la lista de compradores. En caso de no haber un único comprador con porcentaje mayor, deberá coincidir con uno de ellos Rechaza codigoTipoDocumento/ numeroDocumento 430 Las CUIT/CUIL/CDI de los compradores deberán encontrarse activas en el Sistema Registral Rechaza codigoTipoComprobante /numeroDocumento 431 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 las CUITs de los compradores deben 

###### encontrarse activa en IVA o en 

 Rechaza 

, Autorizar un Comprobante CAE (autorizarComprobante) Campo Código de Error Validación NO es superada 

###### monotributo. 

arrayCompradores /codigoConcepto 432 Sólo se puede informar el arrayCompradores para codigoConcepto igual a 1 (Productos) Rechaza arrayCompradores / codigoTipoComprobante 433 Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208, no puede informar compradores múltiples. Rechaza 

,#### Autorizar un Ajuste IVA CAE (autorizarAjusteIVA) 

El sistema cliente envía la información del comprobante de ajuste de IVA que desea autorizar mediante un requerimiento el cual es atendido por WS MTXCA pudiendo producirse las siguientes situaciones:  Supere todas las validaciones, el comprobante es aprobado, se asigna el CAE y su respectiva fecha de vencimiento,  No supera alguna de las validaciones no excluyentes, el comprobante es aprobado con observaciones, se le asigna el CAE con la fecha de vencimiento,  No supere alguna de las validaciones excluyentes, el comprobante no es aprobado y la solicitud es rechazada. Cabe aclarar que las validaciones excluyentes son aquellas que en el caso de no ser superadas provocan un rechazo y las validaciones no excluyentes aprueban la solicitud pero con observaciones. 

, Autorizar un Ajuste IVA CAE 
