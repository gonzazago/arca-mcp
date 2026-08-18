##### Validaciones del Negocio 

 <authRequest>...</authRequest> Campo Código de Error Validación No es superada cuitRepresentada 10006 La cuit emisora ha sido inlcuída en la consulta de facturas apócrifas Rechaza cuitRepresentada 10030 Debe estar empadronada en el régimen de CAEA con estado activo o baja. Se informa que esta validación quedará fuera de vigencia a partir del 01/06/2026. Rechaza <comprobanteCAEARequest>…</comprobanteCAEARequest> 

###### Validaciones Excluyentes 

**Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / periodoComprobantesAsociados 162 Si <codigoTipoComprobante> es igual a 1, 2, 51, 201 ó 206 correspondientes a Facturas no corresponde informar un periodo de comprobantes asociados Rechaza codigoTipoDocumento / numeroDocumento 163 La cuit receptora se encuentra inactiva por haber sido inlcuída en la consulta de facturas apócrifas Rechaza codigo / arrayActividades 165 Si ocurrió un error imprevisto al momento de validar las actividades a quedar asociadas al comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** condicionIVAReceptor/ fechaEmision 390 Si no se informa la condición de IVA del Receptor (obligatoria) o bien se informa un valor no contemplado por el servicio. Ver método consultarCondicionesIVARecep tor Rechaza codigoTipoComprobante 700 Podrá ser: 1 – Factura A 2 – Nota de Débito A 3 – Nota de Crédito A 6 – Factura B 7 – Nota de Débito B 8 – Nota de Crédito B 51 – Factura A con leyenda OPERACIÓN SUJETA A RETENCIÓN 52 – Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 – Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 201 Factura de Crédito Electrónica MiPyMEs (FCE) A 202 Nota de Débito Electrónica MiPyMEs (FCE) A 203 Nota de Crédito Electrónica MiPyMEs (FCE) A 206Factura de Crédito Electrónica MiPyMEs (FCE) B 207 Nota de Débito Electrónica MiPyMEs (FCE) B 208 Nota de Crédito Electrónica MiPyMEs (FCE) B Rechaza 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante/ cuitRepresentada 700 El contribuyente no se encuentra habilitado a emitir (según el tipo de comprobante indicado) comprobantes A, A con Leyenda o A con leyenda OPERACIÓN SUJETA A RETENCIÓN Observa numeroPuntoVenta 701 Debe ser del tipo habilitado para CAEA Codificación de Productos opción Factura con Detalle y no debe estar bloqueado a la fecha en que se emitió el comprobante. Consultar método _consultarPuntosVenta_ o _consultarPuntosVentaCAEA_ Rechaza fechaEmision 702 Debe estar comprendida dentro de la fecha desde y fecha hasta de vigencia del CAEA Rechaza numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 703 El número de comprobante informado debe ser mayor en 1 al último informado para igual punto de venta y tipo de comprobante. De no existir comprobante informado para igual punto de venta y codigoTipoComprobante, el número de comprobante debe ser igual a 1 (uno) Rechaza fechaEmision / numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 704 La fecha de emisión del comprobante debe ser mayor o igual a la fecha del último comprobante informado para igual tipo de comprobante y punto de venta. Rechaza codigoAutorizacion 705 Debe informarse y corresponder a la CUIT Rechaza fecha en que se envía la solicitud 706 Debe ser mayor a la fecha de entrada en vigencia del CAEA <fechaDesde> Rechaza codigoTipoDocumento / numeroDocumento 707 Si se informa uno de los campos debe informarse el otro. Rechaza 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** CAEA / numeroPuntoVenta 709 La fecha de alta del numeroPuntoVenta debe ser menor o igual a la fechaHasta de la vigencia del CAEA que posee el comprobante que se está informando. Rechaza codigoConcepto 713 Deberá ser igual a alguno de los siguientes valores: 1 – Productos 2 – Servicios 3 – Productos y Servicios Rechaza arraySubtotalesIVA 715 Opcional. Debe informarse si algún ítem tiene <codigoCondicionIVA> igual a 4, 5 ó 6. Rechaza codigoTipoDocumento / numeroDocumento 718 Opcionales. Deberá informarse en los siguientes casos: 

- cuando <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52, 53, 201, 202, 203, 206, 207 o 208. -cuando <codigoTipoComprobante> es igual a 6, 7 u 8 y el importe total del comprobante <importeTotal> es mayor ó igual al monto en pesos resultante según RG4444.     Rechaza codigoTipoAutorizacion 731 Opcional. Si se informa debe informarse “A” (sin comillas) Rechaza fechaVencimiento 732 Opcional. Si se informa debe coincidir con la Fecha Hasta del CAEA informado Rechaza 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoDocumento 733 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52, 53, 201, 202, 203, 206, 207 o 208 <codigoTipoDocumento > deberá ser igual a 80 (CUIT) Rechaza codigoTipoDocumento 736 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarTiposDocumento_ Rechaza numeroPuntoVenta / codigoTipoComprobante 739 Los informes de comprobantes para un mismo punto de venta y tipo de comprobante deben ser enviados en forma sincrónica: si el WS recibe una nueva solicitud para un punto de venta y tipo de comprobante dado mientras la anterior está siendo procesada, la nueva solicitud será rechazada Rechaza arrayCompradores 753 Grupo de compradores no habilitado para el método Rechaza numeroPuntoVenta / fechaHoraGen 754 La fecha/hora de generación es obligatoria para comprobantes CAEA por contingencia (no se informó el campo fecha/hora generación y el punto de venta es del tipo CAEA por Contingencia). A partir del 01/08/2026 sera obligatoria para comprobantes CAEA sin distinción del tipo de punto de venta (por Contingencia o no) Rechaza cuitRepresentada 757 Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208. Por las condiciones de la CUIT Emisora, no corresponde realizar FCE Rechaza 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoDocumento / numeroDocumento 758 Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208, <codigoTipoDocumento> debe ser igual a 80 y <numeroDocumento> debe ser válido y activo. Rechaza codigoTipoDocumento / numeroDocumento 759 Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208. La CUIT Receptora no registra alta en el Domicilio Fiscal Electrónico Rechaza codigoTipoDocumento / numeroDocumento 760 Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208. La CUIT Receptora no está incluida en el listado de empresas grandes según cronograma vigente ni optó por ser receptora de Factura de Crédito MiPyMe Rechaza numeroDocumento 761 Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208, el Receptor no puede ser igual al Emisor Rechaza codigoTipoDocumento / numeroDocumento 762 Si <codigoTipoComprobante> es igual a 201, 202 o 203 la CUIT del receptor debe 

###### encontrarse activa en IVA o en 

###### monotributo. 

Rechaza codigoTipoDocumento / numeroDocumento 763 Si <codigoTipoComprobante> es igual a 206, 207 o 208 la CUIT del receptor debe encontrarse activa como Responsable Inscripto en IVA, IVA Exento o Monotributista. Rechaza fechaVencimientoPago 764 Si <codigoTipoComprobante> es igual a 201 ó 206. La Fecha de Vencimiento de Pago es obligatorio para Facturas de Crédito MiPyME Rechaza 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** fechaVencimientoPago 765 Si <codigoTipoComprobante> es igual a 202, 203, 207 ó 

208. La Fecha de Vencimiento de Pago no debe informarse para Notas de Crédito o Débito de las Facturas de Crédito MiPYME     Rechaza fechaVencimientoPago / fechaEmision 766 La fecha de vencimiento de pago debe ser posterior o igual a la fecha de emisión. Rechaza importeTotal 769 El importe no puede ser negativo ni nulo Rechaza importeTotal 770 Si <codigoTipoComprobante> es igual a 203 ó 208. El importe total del comprobante a autorizar no puede ser mayor o igual al saldo de la operación actual de la cuenta corriente Rechaza codigoMoneda 771 Si <codigoTipoComprobante> es igual a 202, 203, 207 ó 208, la moneda debe:  coincidir con la Factura vinculada, ó  ser Pesos Argentinos si la Factura vinculada ya fue aceptada, cancelada o rechazada y se desea realizar un ajuste por diferencia de cambio Rechaza fechaEmision 774 Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208, la Fecha de Emisión debe ser anterior a la fecha en que se envía la solicitud Rechaza 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** fechaEmision / codigoMoneda 776 Si <codigoTipoComprobante> es igual a 202, 203, 207 ó 

208. Para realizar una Nota de Débito o Crédito con moneda distinta a la Factura la <fechaEmision> de la misma debe ser posterior a la aceptación de la Factura o Cuenta Corriente Asociada     Rechaza codigoTipoComprobante / periodoComprobantesAsociados 777 Si <codigoTipoComprobante> es igual a 202, 203, 207 ó 208 perteneciente a Factura de Crédito Electrónica no corresponde informar un periodo de comprobantes asociados. Rechaza codigoTipoComprobante / arrayComprobantesAsociados / periodoComprobantesAsociados 778 Si <codigoTipoComprobante> es igual a 2, 3, 7, 8, 52 ó 53. Falta informar comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito válido/s o informar un período de comprobantes asociados válido Rechaza codigoTipoComprobante / arrayComprobantesAsociados / periodoComprobantesAsociados 779 Si <codigoTipoComprobante> es igual a 2, 3, 7, 8, 52 ó 53. No debe informar un período de comprobantes asociados cuando informa comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito Rechaza codigoTipoComprobante / periodoComprobantesAsociados 780 Si <codigoTipoComprobante> es igual a 1, 2, 51, 201 ó 206 correspondientes a Facturas no corresponde informar un periodo de comprobantes asociados. Rechaza 

###### Validaciones NO Excluyentes 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoDocumento / numeroDocumento 140 

###### Si <codigoTipoDocumento> es 

###### igual a 80 (CUIT) y el 

###### <numeroDocumento> del 

###### receptor/comprador fue 

###### inactivado o invalidado. 

Observa codigoTipoDocumento / numeroDocumento 142 

###### Si <codigoTipoDocumento> es 

###### igual a 80 (CUIT) y el 

###### <numeroDocumento> del 

###### receptor/comprador fue 

###### limitada por haber sido 

###### caracterizada como sujeto no 

###### confiable en materia de 

###### Seguridad Social. 

Observa codigoTipoDocumento / numeroDocumento 144 

###### Si <codigoTipoDocumento> es 

###### igual a 80 (CUIT) y el 

###### <numeroDocumento> del 

###### receptor/comprador fue 

###### limitada por haber sido marcada 

###### como Apocrifa. 

Observa numeroDocumento 146 

###### Si el <numeroDocumento> del 

###### receptor/comprador se 

###### encuentra marcada como 

###### fallecido y no está marcado 

###### como sucesión indivisa. 

Observa codigo / arrayActividades 366 Si <codigo> se encuentra mas de una vez en el array de actividades (no admite repetidos). Ver el Anexo de Rubros de Actividades y Remitos Observa codigo / arrayActividades 367 Si <codigo> no se encuentra entre las actividades vigentes para la cuit representada. Ver el Anexo de Rubros de Actividades y Remitos Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigo / arrayActividades 368 Si <codigo> se encuentra asociado a un conjunto de actividades de un “rubro” y se encontraron otros <codigo> dentro del array que se encuentran asociados a otro conjunto de un “rubro” distinto. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 370 Si ocurrio un error imprevisto al validar los comprobantes asociados que sean de tipo remito (88, 990, 91, 995, 997, 993, 994). Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 371 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y no fue encontrado en los registros de ARCA, o bien fue encontrado, pero la información asociada al mismo no es la esperada. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 372 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero el mismo se encuentra en un estado inválido. Dichos estados varian según el tipo de remito del que se trate. Ver el Anexo de Rubros de Actividades y Remitos Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** numeroDocumento / arrayComprobantesAsociados 373 Si el comprobante asociado es del tipo remito (91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero la cuit del receptor de dicho remito no coincide con la cuit del receptor del comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 375 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y el tipo de comprobante asociado es remito, pero el mismo no es carnico (88, 990, 91, 997, 993, 994), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 376 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” o “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado o Tabaco en Hebras (91, 997, 993, 994, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 377 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado (990, 91, 997, 993, 994, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 378 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco en Hebras (88, 91, 997, 993, 994, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 380 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y el tipo de comprobante asociado es remito, pero el mismo no es Harina (88, 91, 997, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 381 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y no se especifico ningún Remito del tipo Harina (993 y 994), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 382 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y no se especifico ningún Remito del tipo Carnico (995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoConcepto / arrayComprobantesAsociados 383 Los códigos de concepto permitidos para asociar Remitos Cárnicos (995) al Comprobante son 1 – Productos y 3 – Productos y Servicios Observa codigoTipoComprobante / arrayComprobantesAsociados arrayActividades 384 Si no se especifican actividades, y el Remito a Asociar es un Remito Sectorial (88, 990, 993, 994, 995, 997), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 385 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero se encuentra marcado como de exportación, mientras que el presente servicio solo acepta Remitos para el Mercado. Ver el Anexo de Rubros de Actividades y Remitos Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / arrayComprobantesAsociados 386 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y ya fue declarado una vez en el array de comprobantes asociados. Ver el Anexo de Rubros de Actividades y Remitos Observa CondicionIVAReceptor/ codigoTipoComprobante/ fechaEmision 391 Si se informa una combinación invalida de Condición de IVA del Receptor y Tipo de Comprobante. Ver método consultarCondicionesIVARec eptor Observa codigoTipoDocumento / numeroDocumento 708 Si <codigoTipoDocumento> es igual a 80, 86 o 87, <numeroDocumento> debe ser válido y activo, excepto para <codigoTipoComprobante> 6, 7 u 8, <codigoTipoDocumento> 80 y <numeroDocumento> igual a 23000000000. Observa codigoAutorizacion 717 No debe estar informado como CAEA No utilizado Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** importeGravado 719 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53: 

- Deberá ser igual a la sumatoria de importeItem menos importeIVA para los ítems con <codigoCondicionIVA> igual a 3, 4, 5, 6. Si <codigoTipoComprobante> es igual a 6, 7 u 8: 

- Deberá ser igual a la sumatoria de <importeItem> menos el IVA correspondiente (calculado en base al importe y la alícuota de cada ítem), para la totalidad de los ítems con <codigoCondicionIVA> igual a 3, 4, 5 ó 6. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems gravados *     Observa importeNoGravado 720 Deberá coincidir con la sumatoria de <importeItem> para los ítems con <codigoCondicionIVA> igual a 1. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems no gravados * Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** importeExento 721 Deberá coincidir con la sumatoria de <importeItem> para los ítems con <codigoCondicionIVA> igual a 2. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems exentos * Observa importeSubtotal 722 Deberá coincidir con la sumatoria de los campos <importeNoGravado>, <importeGravado>, <importeExento>. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * Observa importeOtrosTributos 723 Debe ser igual a la sumatoria de la totalidad de los campos <importe><otroTributo> (dentro de <arrayOtrosTributos>). Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de tributos * Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** importeTotal 724 Debe ser igual a <importeSubtotal>+ <importeOtrosTributos> + sumatoria de <subtotalIVA><importe> (dentro del arraySubtotalesIVA). Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * Observa importeTotal 725 Debe ser igual a <importeOtrosTributos> + la sumatoria de la totalidad de los campos <importeItem>. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems * Observa codigoMoneda 710 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarMonedas_ Rechaza cancelaEnMismaMonedaExtra njera 122 En caso de enviar la marca de que el pago del comprobante se realiza en la misma moneda extranjera para comprobantes que no sean facturas. Unicamente se puede utilizar con los códigos habilitados (1,6,51,201,206) Observa cotizacionMoneda 182 No podrá ser inferior al 2% ni superior en un 400 % del que suministra ARCA como orientativo de acuerdo a la cotización oficial Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** cotizacionMoneda 726 Debe ser igual a 1 (uno) si <codigoMoneda> es igual a PES Observa cancelaEnMismaMonedaExtra njera 174 En caso de enviar un valor inválido para la marca de que el pago de la factura se realiza en la misma moneda extranjera. Los valores válidos son S, N o vacío Observa codigoMoneda/ cancelaEnMismaMonedaExtra njera 175 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera y enviar como código de moneda el Peso Argentino Observa codigoMoneda/ cotizacionMoneda/ cancelaEnMismaMonedaExtra njera 181 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera, que codigoMoneda es del grupo de monedas con cotización del Banco de la Nación Argentina (ver Anexo Monedas BNA), que haya cotización y que la misma no coincida exactamente con el valor enviado en el campo cotizacionMoneda. En cuyo caso se podrá omitir el mismo para que la cotización de la factura sea la obtenida de los registros de ARCA Observa cotizacionMoneda 194 El campo es obligatorio a excepción de los casos para los cuales se envia el campo cancelaEnMismaMonedaExtr anjera y se puede obtener la cotizacion asociada al codigoMoneda si esta es del grupo de monedas del Banco de la Nación Argentina (ver Anexo Monedas BNA) Rechaza cotizacionMoneda 195 No es posible indicar una cotización negativa Rechaza 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** fechaServicioDesde 727 Debe informarse solo si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Observa fechaServicioHasta 728 Debe informarse solo si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Observa fechaVencimientoPago 729 Debe informarse solo si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Observa fechaVencimientoPago / fechaEmision 730 La fecha de vencimiento de pago debe ser mayor o igual a la fecha de emisión. Observa codigoTipoDocumento / numeroDocumento 734 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53 la CUIT del receptor debe 

###### encontrarse activa en IVA o 

###### en monotributo. 

Observa numeroDocumento 735 El Receptor no puede ser igual al Emisor Observa fechaServicioDesde / fechaServicioHasta 737 La Fecha de Servicio desde debe ser menor o igual a la Fecha de Servicio Hasta Observa numeroDocumento 738 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53 y <codigoTipoDocumento> es igual a 80 (CUIT), dicha CUIT deberá encontrarse activa en el Sistema Registral Observa importeOtrosTributos 749 Si <codigoTipoComprobante> es igual a 6, 7 u 8, <codigoTipoDocumento> es 80 (CUIT) y <numeroDocumento> es 23000000000 (No Categorizado), el importeOtrosTributos deberá ser mayor a 0 (cero) Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** cuitRepresentada / fechaEmision 750 Debe estar dado de alta en el Impuesto al Valor Agregado al momento de la fecha de emisión del comprobante Observa cuitRepresentada / codigoTipoComprobante / fechaEmision 751 Debe encontrarse habilitado a comprobantes clase 'A' a la fecha de emisión del comprobante Observa numeroPuntoVenta / fechaHoraGen 755 La fecha/hora de generación solo debe informarse para comprobantes CAEA por contingencia (se informó el campo fecha/hora generación pero el punto de venta no es del tipo CAEA por Contingencia). Se informa que esta validación quedará fuera de vigencia a partir del 31/07/2026, siendo absorbida por las condiciones de la validación **_754_**. Observa numeroPuntoVenta / fechaHoraGen / fechaEmision / codigoConcepto 756 Para comprobantes CAEA: si se indica <codigoConcepto> igual a 1, la fecha de emisión del comprobante puede ser hasta 5 días anteriores o posteriores respecto de la fecha de generación, pero sin extenderse al mes siguiente; si se indica <codigoConcepto> igual a 2 ó 3 puede ser hasta 10 días anteriores o posteriores a la fecha de generación Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** cuitRepresentada / codigoTipoDocumento / numeroDocumento / importeTotal 767  Si <codigoTipoComprobante> es igual a 1 ó 6, y  La CUIT Receptora está incluida en el listado de empresas grandes según cronograma vigente u optó por ser receptora de Factura de Crédito MiPyme, y  Por las condiciones de la CUIT Emisora, y  El monto facturado es mayor o igual al Reglamentado Corresponde realizar Factura Electrónica de Crédito MiPyME, realice un comprobante con <codigoTipoComprobante> 201 o 206. Observa cuitRepresentada / codigoTipoDocumento / numeroDocumento / importeTotal 768  Si <codigoTipoComprobante> es igual a 201 ó 206, y  La CUIT Receptora está incluida en el listado de empresas grandes según cronograma vigente u optó por ser receptora de Factura de Crédito MiPyme, y  Por las condiciones de la CUIT Emisora, y  El monto facturado es menor al Reglamentado NO Corresponde realizar Factura Electrónica de Crédito MiPyME, realice un comprobante con <codigoTipoComprobante> 1 o 6. Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** cuitRepresentada 772 Por las condiciones de la CUIT Emisora, no corresponde realizar FCE Está habilitado para Comprobantes A con leyenda OPERACIÓN SUJETA A RETENCIÓN EXCLUIDO – Art. N° 4 Resolución 209/2018 RESOL-2018209-APN-MPYT Observa fechaHoraGen 773 La Fecha y Hora de Generación no puede ser posterior a un día corrido del vencimiento del CAEA Observa fechaEmision 775 Régimen informado fuera de término. Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208, La Fecha de Emisión del comprobante debe ser hasta un día anterior a la fecha en que se envía la solicitud Observa codigoTipoDocumento / numeroDocumento / fechaEmision 781 LA CUIT RECEPTORA SE ENCUENTRA INACTIVA POR HABER SIDO INLCUÍDA EN LA CONSULTA DE FACTURAS APÓCRIFAS NO PODRÁ COMPUTARSE EL CRÉDITO FISCAL. Observa codigoTipoDocumento / numeroDocumento 782 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 la CUIT del receptor es activa en monotributo Observa cuitRepresentada 783 Si <cuitRepresentada> tiene pendiente de presentación el formulario de habilitación de comprobantes o su fecha de presentación es anterior a tu alta en IVA Observa numeroDocumento 785 Si <numeroDocumento> es inexistente en el padron del Organismo Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante/ arrayComprobantesAsociados /importeTotal 791 Siendo <codigoTipoComprobante> una Nota de Crédito (3, 8, 53, 203 y 208), si la sumatoria de los importes totales de los elementos del array <arrayComprobantesAsociad os> (sin incluir Remitos) supera el <importeTotal> de la Nota de Crédito Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **<comprobanteAsociado>…</comprobanteAsociado>** 

###### Validaciones Excluyentes 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Observ. Validación NO es superada** codigoTipoComprobante 803 El comprobante asociado podrá ser: 1 – Factura A 2 – Nota de Débito A 3 – Nota de Crédito A 6 – Factura B 7 – Nota de Débito B 

###### 8 – Nota de Crédito B 

 51 – Factura A con leyenda OPERACIÓN SUJETA A RETENCIÓN 52 – Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 – Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 201 Factura de Crédito Electrónica MiPyMEs (FCE) A 202 Nota de Débito Electrónica MiPyMEs (FCE) A 203 Nota de Crédito Electrónica MiPyMEs (FCE) A 206Factura de Crédito Electrónica MiPyMEs (FCE) B 207 Nota de Débito Electrónica MiPyMEs (FCE) B 

###### 208 Nota de Crédito Electrónica 

###### MiPyMEs (FCE) B 

###### 91 – Remito Papel 

###### 88 – Remito Electrónico de Tabaco 

###### Acondicionado 

###### 990 – Remito Electrónico de Tabaco en 

###### Hebras 

###### 993 – Remito Electrónico de Harina en 

###### Camion 

###### 994 – Remito Electrónico de Harina en 

###### Tren 

 Rechaza 

, Informar un Comprobante CAEA (informarComprobanteCAEA) Campo Código de Observ. Validación NO es superada 

###### 995 – Remito Electrónico de Carne 

###### 997 – Remito Electrónico Azucar 

###### Mercado Interno 

###### Consultar método 

###### consultarTiposComprobante 

codigoTipoComprobante / cuit 804 

###### El campo cuit es opcional y solo puede 

###### completarse si el tipo de comprobante 

###### es 88 o 990 (solo es necesario si el 

###### remito fue emitido por un tercero) 

Rechaza codigoTipoComprobante 808 

###### Deberá ser igual a 88, 91, 990 o 995 si 

###### el tipo de comprobante cuya 

###### autorización se solicita es igual a 201 o 

###### 206 

Rechaza cuit 809 

###### Al autorizar una nota de débito o 

###### crédito de Factura Electrónica de 

###### Crédito MiPyME (202, 203, 207, 208), 

###### debe enviar el campo cuit para el tipo 

###### de comprobante asociado indicado 

Rechaza cuit 810 

###### Al autorizar una nota de débito o 

###### crédito de Factura Electrónica de 

###### Crédito MiPyME (202, 203, 207, 208), el 

###### campo cuit para el tipo de 

###### comprobante asociado indicado debe 

###### coincidir con la cuit emisora del 

###### comprobante a autorizar 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante 811 

###### Al autorizar una nota de débito o 

###### crédito de Factura Electrónica de 

###### Crédito MiPyME (202, 203, 207, 208), el 

###### comprobante asociado 

###### <codigoTipoComprobante> 

###### <numeroPuntoVenta> 

###### <numeroComprobante> deberá obrar 

###### en las bases del organismo. 

 Rechaza 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Observ. Validación NO es superada** arrayComprobantesAso ciados 812 

###### Al autorizar una nota de débito o 

###### crédito de Factura Electrónica de 

###### Crédito MiPyME (202, 203, 207, 208), 

###### debe haber un y sólo un comprobante 

###### asociado de Factura Electrónica de 

###### Crédito MiPyME: 

######  201 o 206, para NO anulación 

######  201, 202, 203, 206, 207 o 208, 

###### para Anulación 

Rechaza codigoTipoComprobante 814 

###### Si está presente el dato adicional 

###### código 22 en S (es una nota de 

###### anulación): 

######  Si el tipo de comprobante a 

###### autorizar es una nota de 

###### crédito (203 o 208) el tipo de 

###### comprobante asociado a 

###### revertir debe ser 201, 202, 206 

###### ó 207 

###### Si el tipo de comprobante a autorizar es 

###### una nota de débito (202 o 207) el tipo 

###### de comprobante asociado a revertir 

###### debe ser 203 ó 208 

Rechaza codigoTipoComprobante 815 

###### Si está presente el dato adicional 

###### código 22 en N (NO es una nota de 

###### anulación), debe existir un 

###### comprobante asociado del tipo 201 o 

###### 206. 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 816 

###### Si el comprobante a autorizar es de 

###### Anulación, el comprobante asociado 

###### debe haber sido rechazado por el 

###### comprador mediante el Sistema de 

###### Regitro de Facturas Electrónicas de 

###### Crédito MiPyME. 

 Rechaza 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Observ. Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 817 

###### Si el comprobante a autorizar NO es de 

###### Anulación, el comprobante asociado 

###### NO debe haber sido rechazado por el 

###### comprador mediante el Sistema de 

###### Regitro de Facturas Electrónicas de 

###### Crédito MiPyME. 

Rechaza fechaEmision 818 

###### Al autorizar un comprobante de 

###### Factura Electrónica de Crédito MiPyME 

###### (201, 202, 203, 206, 207, 208), debe 

###### enviar el campo fechaEmision para el 

###### comprobante asociado del tipo Remito 

Rechaza fechaEmision 819 

###### La fecha de emisión del comprobante 

###### asociado no puede ser posterior a la 

###### fecha del comprobante a autorizar 

Rechaza fechaEmision 820 

###### La fecha de emisión del comprobante 

###### asociado informada no coincide con la 

###### existente en nuestros registros 

Rechaza fechaEmision 821 

###### La fecha de emisión de este 

###### comprobante no puede ser anterior a 

###### la factura asociada 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 822 

###### El comprobante asociado no posee cuit 

###### del receptor 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 823 

###### El comprobante asociado posee otro 

###### cuit de receptor 

Rechaza fechaEmision 824 

###### Si el punto de venta del comprobante 

###### asociado NO es del tipo electrónico 

###### debe informar la fecha de emisión 

Rechaza fechaEmision 825 

###### Si el punto de venta del comprobante 

###### asociado NO es del tipo electrónico la 

###### fecha de emisión no puede ser 

###### posterior a la fecha de la autorización 

 Rechaza 

###### Validaciones NO Excluyentes 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Observ. Validación NO es superada** codigoTipoComprobante 800 

###### Deberá ser igual a 88 o 990 si el tipo de 

###### comprobante cuya autorización se 

###### solicita es igual a 1, 6 o 51 

###### Deberá ser igual a 1, 2, 3, 88 o 990 si el 

###### tipo de comprobante cuya autorización 

###### se solicita es igual a 2 o 3. 

###### Deberá ser igual a 6, 7, 8, 88 o 990 si el 

###### tipo de comprobante cuya autorización 

###### se solicita es igual a 7 u 8. 

###### Deberá ser igual a 51, 52, 53, 88 o 990 

###### si el tipo de comprobante cuya 

###### autorización se solicita es igual a 52 o 

###### 53. 

###### Deberá ser igual a 201, 202, 203, 88, 

###### 91, 990 o 995 si el tipo de comprobante 

###### cuya autorización se solicita es igual a 

###### 202 o 203. 

###### Deberá ser igual a 206, 207, 208, 88, 

###### 91, 990 o 995 si el tipo de comprobante 

###### cuya autorización se solicita es igual a 

###### 207 u 208. 

Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante 801 Si el punto de venta es del tipo electrónico el comprobante asociado <codigoTipoComprobante> <numeroPuntoVenta> <numeroComprobante> deberá obrar en las bases del organismo. Observa numeroPuntoVenta 802 

###### El tipo de punto de venta, en caso de 

###### ser electrónico, deberá ser alguno de 

###### los siguientes: RECE para aplicativo y 

###### web services, Factura en Línea 

###### Responsable Inscripto, Factura en Línea 

- Método Alternativo al RECE (límite de 

###### 100), Codificación de Productos Web 

###### services, Codificación de Productos 

###### Factura en Línea, CAEA Fact. Elect. 

###### (RECE) RI IVA o CAEA Codificación de 

###### Productos. 

 Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Observ. Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 805 

###### El remito asociado deberá obrar en las 

###### bases del organismo. 

Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 806 

###### Si remito asociado corresponde a 

###### tabaco de terceros, deberá estar en 

###### estado Confirmado 

Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 807 

###### El receptor del remito asociado deberá 

###### conicidir con el receptor del 

###### comprobante 

Observa arrayComprobantesAso ciados 813 

###### Para CUITS Emisoras y Receptoras 

###### candidatas al Régimen de Factura 

###### Electrónica de Crédito, al autorizar una 

###### nota de débito o crédito de Factura 

###### Electrónica (2, 3, 7, 8, 52, 53), debe 

###### haber al menos un comprobante 

###### asociado de Factura Electrónica (1, 2, 3, 

###### 6, 7, 8, 51, 52 o 53) 

 Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **<periodoComprobantesAsociados>…</ periodoComprobantesAsociados>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** fechaDesde / fechaHasta 2800 

###### La fechaHasta debe ser posterior o 

###### igual fechaDesde 

Rechaza fechaHasta / fechaEmision 2801 

###### La fechaHasta del 

###### periodoComprobantesAsociados 

###### debe ser anterior o igual a la fecha 

###### de emisión del comprobante por el 

###### cual se está solicitando la 

###### autorización 

 Rechaza 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada** fechaDesde / fechaHasta 2802 Si el comprobante a autorizar incluye percepciones, el rango de fecha informado debe corresponder al mismo Mes/Año Observa **<otroTributo>...</otroTributo>** de existir se realizaran las siguientes validaciones 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigo 900 Valores permitidos: consultar método _consultarTiposTributo_ Rechaza descripcion 901 Opcional. Debe informarse si <codigo> es igual a 99. Rechaza 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **<subtotalIVA>...</subtotalIVA>** de existir se realizaran las siguientes validaciones 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigo 1000 Valores permitidos: 4, 5, 6 Rechaza codigo 1002 No se deberá repetir (no pueden incluírse dos subtotales IVA con el mismo código) Rechaza codigo 1003 Si existen uno o más ítems con una determinada alícuota IVA, deberá existir el correspondiente subtotal IVA para dicha alícuota. No se sebe incluír un subtotal IVA si dicha alícuota no está presente en al menos un ítem. Rechaza 

, Informar un Comprobante CAEA (informarComprobanteCAEA) 

###### Validaciones No Excluyentes 

**Campo Código de Error Validación NO es superada** importe 1001 Para comprobantes clase “A”: Deberá coincidir con la sumatoria de todos los <importeIVA> de <item> donde la alícuota de IVA coincida con la indicada, es decir, donde <codigoCondicionIVA> de <item> = <codigo> de <subtotalIVA>. Para comprobantes clase “B”: Deberá coincidir con la sumatoria de todos los importes IVA calculados en base al importe y alícuota IVA de <item> donde la alícuota de IVA coincida con la indicada, es decir, donde <codigoCondicionIVA> de <item> = <codigo> de <subtotalIVA>. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems con igual código de alícuota de IVA * Observa importe 1005 La suma de los subtotales de IVA no puede ser negativa. Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **<item>...</item>** 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada** codigoMtx 1104 Si <codigoMtx> no se corresponde con un GTIN registrado, activo y vigente, el comprobante quedara observado. Observa 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** unidadesMtx 1100 Es opcional si <codigoUnidadMedida> es 99 ó 97, para el resto de los casos es obligatorio. Rechaza unidadesMtx 1101 De informarse deberá ser mayor o igual a 1 (uno) Rechaza unidadesMtx 1102 Longitud máxima 6 posiciones. Rechaza codigoMtx 1103 Es opcional si <codigoUnidadMedida> es 99 ó 97, para el resto de los casos es obligatorio. Rechaza codigo 1105 Opcional. Longitud máxima 50 posiciones. Rechaza descripcion 1106 Cantidad máxima de caracteres permitidos 

4000. Importante: no es necesario (ni recomendable) completar con espacios.     Rechaza cantidad 1107 No corresponde para <codigoUnidadMedida> igual a 99 o 97. En otro caso es obligatorio. Rechaza codigoUnidad Medida 1108 Debe ser alguno de los valores permitidos: consultar método _consultarUnidadesMedida_ Rechaza precioUnitario 1109 No corresponde para <codigoUnidadMedida> igual a 99 o 97. En otro caso es obligatorio. Rechaza 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Error Validación NO es superada** importeBonific acion 1110 No corresponde para <codigoUnidadMedida> igual a 99 o 97. Es opcional para el resto de los casos. Rechaza codigoCondicio nIVA 1111 Deberá coincidir con alguno de los valores permitidos: consultar método _consultarCondicionesIVA_ Rechaza importeIVA 1112 Obligatorio para <codigoTipoComprobante> igual a 1, 2, 3, 51, 52 o 53. No corresponde para <codigoTipoComprobante> igual a 6, 7 u 8. Rechaza unidadesMtx/ codigoMtx 1121 Si se informa el campo <unidadesMtx> entonces debe informarse el campo <codigoMtx> y viceversa. Rechaza 

###### Validaciones No Excluyentes 

**Campo Código de Error Validación NO es superada** importeBonific acion 1114 De informarse deberá ser menor o igual a <precioUnitario>*<cantidad> Observa codigoCondicio nIVA / <codigoUnidad Medida> 1115 Si <codigoUnidadMedida> es 99 deberá existir por lo menos otro item con igual <codigoCondicionIVA> y <codigoUnidadMedida> distinta a la informada para este item. Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Error Validación NO es superada** importeIVA 1116 Para <codigoTipoComprobante> igual a 1, 2, 3, 51, 52 o 53 y unidad de medida es distinto a 95, 97 o 99 deberá ser igual (<precioUnitario> * <cantidad> -<importeBonificación>) * alícuota de IVA correspondiente. Para <codigoTipoComprobante> igual a 1, 2, 3, 51, 52 o 53 y unidad de medida igual a 95 deberá ser igual a (-1) * (<precioUnitario> * <cantidad> <importeBonificacion>) * alícuota de IVA correspondiente. Para <codigoTipoComprobante> igual a 1, 2, 3, 51, 52 o 53 y unidad de medida igual a 97 o 99, deberá ser igual a <importeItem> <importeItem> / (1 + alícuota de IVA correspondiente). Observa importeIVA 1117 Si <codigoTipoComprobante> es igual a 1, 2 ó 3 y <codigoUnidadMedida> es 99, el valor absoluto de la sumatoria de los importes ingresados para este campo no puede superar a la sumatoria de los importes <importeIVA> informado con la misma alícuota. Observa importeIVA 1118 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53 y <codigoUnidadMedida> es: 

- 99 deberá ser menor o igual a 0 (cero), 

- 97 podrá ser menor, mayor o igual a 0 (cero). 

- 95 deberá ser menor o igual a 0 (cero), 

- Cualquier otro caso deberá ser mayor o igual a 0 (cero)     Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Error Validación NO es superada** importeItem 1119 Si <codigoUnidadMedida> es: 

- 99 deberá ser menor a 0 (cero), 

- 97 podrá ser menor, mayor o igual a 0 (cero) 

- 95 deberá ser menor a 0 (cero), 

- Cualquier otro caso deberá ser mayor o igual a 0 (cero).     Observa importeItem 1120 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53 y <codigoUnidadMedida> es distinto a 95, 97 ó 99 deberá ser igual a (<precioUnitario> sin IVA *<cantidad> -<importeBonificacion>)*(1+alícuota). Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53 y <codigoUnidadMedida> es igual a 95 deberá ser igual a (-1) * (<precioUnitario> sin IVA * <cantidad> -<importeBonificacion>)*(1+alícuota). Si <codigoTipoComprobante> es igual a 6, 7 u 8 y <codigoUnidadMedida> es distinto a 95, 97 ó 99 deberá ser igual a (<precioUnitario> con IVA * <cantidad> - <importeBonificacion>). Si <codigoTipoComprobante> es igual a 6, 7 u 8 y <codigoUnidadMedida> es igual a 95 ser igual a (-1) * (<precioUnitario> con IVA * <cantidad> - <importeBonificacion>). En ambos casos el error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * Observa importeIVA 1122 Si <codigoCondicionIVA> es igual a 1, 2, 3, 51, 52 o 53 entonces <importeIVA> deberá ser igual a 0 (cero). Observa 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **<datoAdicional>...</datoAdicional>** 

###### Los datos adicionales sólo deberán ser incluídos si el emisor pertenece al conjunto de emisores 

###### habilitado para usar datos adicionales (“Adicionales por R.G.”). En ese caso podrá incluír el o los datos 

###### adicionales que correspondan, especificando el tipo de dato adicional de acuerdo a la situación del 

###### emisor. El listado de tipos de datos adicionales se puede consultar con el método 

###### consultarTiposDatosAdicionales. 

###### Por ejemplo, si el emisor está incluído en el Régimen de Promoción Industrial, deberá incluír un dato 

###### adicional tipo 2. 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** t 920 Valores permitidos: consultar método _consultarTiposDatosAdicionales_ Rechaza t / c1…c6 922 Si <codigoTipoComprobante> es igual a 1, 2, 3, 6, 7, 8, 51, 52 o 53, sólo se puede incluír un dato adicional con t = 2 (sólo se permite un id de proyecto por comprobante) Rechaza t / c1…c6 925 Para el tipo de dato adicional 22, Anulación, debe indicar en el campo c1 S (si) si es de anulación o N (no) si no es de anulación Rechaza t / c1…c6 926 Para el tipo de dato adicional 21, CBU y Alias del Emisor, el CBU informado en el campo c1 no corresponde al Emisor según nuestros registros Rechaza t / c1…c6 927 Si el tipo de Comprobante a autorizar es 202, 203, 207 o 208, debe indicar el dato adicional código 22, Anulación, para indicar si este es un comprobante de anulación o no Rechaza t / c1…c6 928 Si el tipo de Comprobante a autorizar es 201 o 206, NO debe indicar el dato adicional código 22, Anulación. No corresponde a un comprobante Factura. Rechaza t / c1…c6 929 Si el tipo de Comprobante a autorizar es 201 o 206, debe indicar el dato adicional código 21, CBU y Alias emisor. Rechaza 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Error Validación NO es superada** t / c1…c6 930 Si el tipo de Comprobante a autorizar es 202, 203, 207 o 208, NO debe indicar el dato adicional código 21, CBU y Alias emisor. Rechaza t / c1…c6 931 Para el tipo de dato adicional 21, 22 y 23, debe indicar el campo c1 Rechaza t / c1…c6 932 Para el tipo de dato adicional 27, Opción de Transferencia, las opciones válidas son ADC para Agente de Depósito Colectivo o SCA para Sistema de Circulación Abierta Rechaza t / c1…c6 933 Si el tipo de Comprobante a autorizar es 201 o 206, debe indicar el dato adicional código 27, Opción de Transferencia. Rechaza t / c1…c6 934 Si el tipo de Comprobante a autorizar es 202, 203, 207 o 208, NO debe indicar el dato adicional código 27, Opción de Transferencia. Rechaza t / c1…c6 935 Si el tipo de Comprobante a autorizar NO es 1, 2, 3, 201, 202, 203, NO debe indicar el dato adicional código 5, Cómputo IVA Crédito Fiscal. Rechaza t / c1…c6 936 Si el tipo de Comprobante a autorizar es 1, 2, 3, 201, 202, 203, y se indica el dato adicional código 5, se debera indicar el campo c1 (Motivo de Excepcion) de forma obligatoria. Rechaza t / c1…c6 937 Si el tipo de Comprobante a autorizar es 1, 2, 3, 201, 202, 203, y se indica el dato adicional código 5, y el campo el campo c1 (Motivo de Excepcion) NO es un numérico del 1 al 6. Rechaza t / c1…c6 938 Si el tipo de Comprobante a autorizar es 1, 2, 3, 201, 202, 203, y se indica el dato adicional código 5, y no se deberán utilizar ninguno de los restantes campos reservados a futuro campos de c2 a c6. Rechaza 

, Informar un Comprobante CAEA (informarComprobanteCAEA) 

###### Validaciones No Excluyentes 

**Campo Código de Error Validación NO es superada** t / c1…c6 921 Si t es igual a 2 (“Dato Adicional para Empresas Promovidas”), en c1 se deberá indicar el id de proyecto (el mismo deberá corresponder a la cuit emisora del comprobante) o cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen de Promoción Industrial. Los campos c2 a c6 no deberán informarse (reservados para uso futuro) Observa t 923 Los tipos de dato adicional 21, 22 o 23 sólo corresponden a comprobantes de Factura Electrónica de Crédito MiPyME Observa t / c1…c6 924 Para el tipo de dato adicional 21, los campos c3 a c6 no deberán informarse (reservados para uso futuro) Para los tipos de dato adicional 22 o 23, los campos c2 a c6 no deberán informarse (reservados para uso futuro) Observa 

,#### Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) 

Este método permite informar para cada CAEA otorgado, los comprobantes de ajuste de IVA emitidos. Por cada comprobante de ajuste se enviará una solicitud, la cual será procesada por el WS pudiendo producirse alguna de las siguientes situaciones:  Supere todas las validaciones, la solicitud es aprobada.  No supere alguna de las validaciones excluyentes, la solicitud será rechazada.  No supere alguna de las validaciones no excluyentes, la solicitud es aprobada con observaciones. 
