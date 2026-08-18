##### Validaciones del Negocio 

**<authRequest>...</authRequest> Campo Código de Error Validación No es superada** cuitRepresentada 10030 Debe estar empadronada en el régimen de CAEA con estado activo o baja. Se informa que esta validación quedará fuera de vigencia a partir del 01/06/2026. Rechaza **<comprobanteCAEARequest>…</comprobanteCAEARequest>** 

###### Validaciones Excluyentes 

**Campo / Grupo Código de Error Validación NO es superada** codigo / arrayActividades 165 Si ocurrió un error imprevisto al momento de validar las actividades a quedar asociadas al comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza condicionIVAReceptor/ fechaEmision 490 Si no se informa la condición de IVA del Receptor (obligatoria) o bien se informa un valor no contemplado por el servicio. Ver método consultarCondicionesIVAReceptor Rechaza 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante 740 Valores permitidos: 2 Nota de Débito A 3 Nota de Crédito A 7 Nota de Débito B 8 Nota de Crédito B 52 Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN Rechaza codigoTipoComprobante/ cuitRepresentada 740 El contribuyente no se encuentra habilitado a emitir (según el tipo de comprobante indicado) comprobantes A, A con Leyenda o A con leyenda OPERACIÓN SUJETA A RETENCIÓN Observa numeroPuntoVenta 701 Debe ser del tipo habilitado para CAEA Codificación de Productos 

- opción Factura con Detalle y no debe estar bloqueado a la fecha en que se emitió el comprobante. Consultar método _consultarPuntosVenta_ o _consultarPuntosVentaCAEA_     Rechaza fechaEmision 702 Debe estar comprendida dentro de la fecha desde y fecha hasta de vigencia del CAEA Rechaza numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 703 El número de comprobante informado debe ser mayor en 1 al último informado para igual punto de venta y tipo de comprobante. De no existir comprobante informado para igual punto de venta y codigoTipoComprobante, el número de comprobante debe ser igual a 1 (uno) Rechaza 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** fechaEmision / numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 704 La fecha de emisión del comprobante debe ser mayor o igual a la fecha del último comprobante informado para igual tipo de comprobante y punto de venta. Rechaza codigoAutorizacion 705 Debe informarse y corresponder a la CUIT Rechaza fecha en que se envía la solicitud 706 Debe ser mayor a la fecha de entrada en vigencia del CAEA <fechaDesde> Rechaza codigoTipoDocumento / numeroDocumento 707 Si se informa uno de los campos debe informarse el otro. Rechaza CAEA / numeroPuntoVenta 709 La fecha de alta del numeroPuntoVenta debe ser menor o igual a la fechaHasta de la vigencia del CAEA que posee el comprobante que se está informando. Rechaza codigoConcepto 713 Deberá ser igual a alguno de los siguientes valores: 1 – Productos 2 – Servicios 3 – Productos y Servicios Rechaza arraySubtotalesIVA 715 Opcional. Debe informarse si algún ítem tiene <codigoCondicionIVA> igual a 4, 5 ó 6. Rechaza codigoTipoDocumento / numeroDocumento 718 Opcionales. Deberá informarse en los siguientes casos: 

- cuando <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52, 53, 201, 202, 203, 205, 206 o 207. -cuando <codigoTipoComprobante> es igual a 6, 7 u 8 y el importe total del comprobante <importeTotal> es mayor ó igual al monto en pesos resultante según RG4444.     Rechaza 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoAutorizacion 731 Opcional. Si se informa debe informarse “A” (sin comillas) Rechaza fechaVencimiento 732 Opcional. Si se informa debe coincidir con la Fecha Hasta del CAEA informado Rechaza codigoTipoDocumento 733 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53 <codigoTipoDocumento> deberá ser igual a 80 (CUIT) Rechaza codigoTipoDocumento 736 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarTiposDocumento_ Rechaza numeroPuntoVenta / codigoTipoComprobante 739 Los informes de comprobantes para un mismo punto de venta y tipo de comprobante deben ser enviados en forma sincrónica: si el WS recibe una nueva solicitud para un punto de venta y tipo de comprobante dado mientras la anterior está siendo procesada, la nueva solicitud será rechazada Rechaza importeGravado 741 No debe informarse Rechaza importeNoGravado 742 No debe informarse Rechaza importeExento 743 No debe informarse Rechaza importeSubtotal 744 Deberá informarse en 0 (cero) Rechaza importeOtrosTributos 745 No debe informarse Rechaza arrayOtrosTributos 746 No debe informarse Rechaza arrayCompradores 753 Grupo de compradores no habilitado para el método Rechaza numeroPuntoVenta / fechaHoraGen 754 La fecha/hora de generación es obligatoria para comprobantes CAEA por contingencia (no se informó el campo fecha/hora generación y el punto de venta es del tipo CAEA por Contingencia). A partir del 01/08/2026 sera obligatoria para comprobantes CAEA sin distinción del tipo de punto de venta (por Contingencia o no) Rechaza 

, Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) 

###### Validaciones NO Excluyentes 

**Campo / Grupo Código de Error Validación NO es superada** codigoTipoDocumento / numeroDocumento 141 

###### Si <codigoTipoDocumento> es igual a 

###### 80 (CUIT) y el <numeroDocumento> del 

###### receptor/comprador fue inactivado o 

###### invalidado. 

Observa codigoTipoDocumento / numeroDocumento 143 

###### Si <codigoTipoDocumento> es igual a 

###### 80 (CUIT) y el <numeroDocumento> del 

###### receptor/comprador fue limitada por 

###### haber sido caracterizada como sujeto 

###### no confiable en materia de Seguridad 

###### Social. 

Observa codigoTipoDocumento / numeroDocumento 145 

###### Si <codigoTipoDocumento> es igual a 

###### 80 (CUIT) y el <numeroDocumento> del 

###### receptor/comprador fue limitada por 

###### haber sido marcada como Apocrifa. 

Observa numeroDocumento 148 

###### Si el <numeroDocumento> del 

###### receptor/comprador se encuentra 

###### marcada como fallecido y no está 

###### marcado como sucesión indivisa. 

Observa codigo / arrayActividades 466 Si <codigo> se encuentra mas de una vez en el array de actividades (no admite repetidos). Ver el Anexo de Rubros de Actividades y Remitos Observa codigo / arrayActividades 467 Si <codigo> no se encuentra entre las actividades vigentes para la cuit representada. Ver el Anexo de Rubros de Actividades y Remitos Observa codigo / arrayActividades 468 Si <codigo> se encuentra asociado a un conjunto de actividades de un “rubro” y se encontraron otros <codigo> dentro del array que se encuentran asociados a otro conjunto de un “rubro” distinto. Ver el Anexo de Rubros de Actividades y Remitos Observa 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 470 Si ocurrio un error imprevisto al validar los comprobantes asociados que sean de tipo remito (88, 990, 91, 995, 997, 993, 994). Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 471 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y no fue encontrado en los registros de ARCA, o bien fue encontrado, pero la información asociada al mismo no es la esperada. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 472 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero el mismo se encuentra en un estado inválido. Dichos estados varian según el tipo de remito del que se trate. Ver el Anexo de Rubros de Actividades y Remitos Observa numeroDocumento / arrayComprobantesAsoci ados 473 Si el comprobante asociado es del tipo remito (91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero la cuit del receptor de dicho remito no coincide con la cuit del receptor del comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 475 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y el tipo de comprobante asociado es remito, pero el mismo no es carnico (88, 990, 91, 997, 993, 994), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 476 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” o “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado o Tabaco en Hebras (91, 997, 993, 994, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 477 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado (990, 91, 997, 993, 994, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 478 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco en Hebras (88, 91, 997, 993, 994, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 480 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y el tipo de comprobante asociado es remito, pero el mismo no es Harina (88, 91, 997, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 481 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y no se especifico ningún Remito del tipo Harina (993 y 994), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 482 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y no se especifico ningún Remito del tipo Carnico (995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoConcepto / arrayComprobantesAsoci ados 483 Los códigos de concepto permitidos para asociar Remitos Cárnicos (995) al Comprobante son 1 – Productos y 3 – Productos y Servicios Observa codigoTipoComprobante / arrayComprobantesAsoci ados arrayActividades 484 Si no se especifican actividades, y el Remito a Asociar es un Remito Sectorial (88, 990, 993, 994, 995, 997), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 485 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero se encuentra marcado como de exportación, mientras que el presente servicio solo acepta Remitos para el Mercado. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / arrayComprobantesAsoci ados 486 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y ya fue declarado una vez en el array de comprobantes asociados. Ver el Anexo de Rubros de Actividades y Remitos Observa condicionIVAReceptor/ codigoTipoComprobante/ fechaEmision 491 Si se informa una combinación invalida de Condición de IVA del Receptor y Tipo de Comprobante. Ver método consultarCondicionesIVAReceptor Observa codigoTipoDocumento / numeroDocumento 708 Si <codigoTipoDocumento> es igual a 80, 86 o 87, <numeroDocumento> debe ser válido y activo, excepto para <codigoTipoComprobante> 6, 7 u 8, <codigoTipoDocumento> 80 y <numeroDocumento> igual a 23000000000. Observa codigoAutorizacion 717 No debe estar informado como CAEA No utilizado Observa importeTotal 747 Debe ser igual a la sumatoria de <subtotalIVA><importe> (dentro del arraySubtotalesIVA). Observa codigoMoneda 710 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarMonedas_ Rechaza 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** cancelaEnMismaMonedaE xtranjera 122 En caso de enviar la marca de que el pago del comprobante se realiza en la misma moneda extranjera para comprobantes que no sean facturas. Unicamente se puede utilizar con los códigos habilitados (1,6,51,201,206) Observa cotizacionMoneda 182 No podrá ser inferior al 2% ni superior en un 400 % del que suministra ARCA como orientativo de acuerdo a la cotización oficial Observa cotizacionMoneda 726 Debe ser igual a 1 (uno) si <codigoMoneda> es igual a PES Observa cancelaEnMismaMonedaE xtranjera 174 En caso de enviar un valor inválido para la marca de que el pago de la factura se realiza en la misma moneda extranjera. Los valores válidos son S, N o vacío Observa codigoMoneda/ cancelaEnMismaMonedaE xtranjera 175 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera y enviar como código de moneda el Peso Argentino Observa codigoMoneda/ cotizacionMoneda/ cancelaEnMismaMonedaE xtranjera 181 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera, que codigoMoneda es del grupo de monedas con cotización del Banco de la Nación Argentina (ver Anexo Monedas BNA), que haya cotización y que la misma no coincida exactamente con el valor enviado en el campo cotizacionMoneda. En cuyo caso se podrá omitir el mismo para que la cotización de la factura sea la obtenida de los registros de ARCA Observa cotizacionMoneda 194 El campo es obligatorio a excepción de los casos para los cuales se envia el campo cancelaEnMismaMonedaExtranjera y se puede obtener la cotizacion asociada al codigoMoneda si esta es del grupo de monedas del Banco de la Nación Argentina (ver Anexo Monedas BNA) Rechaza 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** cotizacionMoneda 195 No es posible indicar una cotización negativa Rechaza importeTotal 748 Debe ser igual a la sumatoria de la totalidad de los campos <importeItem>. Observa fechaServicioDesde 727 Debe informarse solo si <codigoConcepto> es igual a 2 ó 

3. En otro caso no corresponde.     Observa fechaServicioHasta 728 Debe informarse solo si <codigoConcepto> es igual a 2 ó 

3. En otro caso no corresponde.     Observa fechaVencimientoPago 729 Debe informarse solo si <codigoConcepto> es igual a 2 ó 

3. En otro caso no corresponde.     Observa fechaVencimientoPago / fechaEmision 730 La fecha de vencimiento de pago debe ser mayor o igual a la fecha de emisión. Observa codigoTipoDocumento / numeroDocumento 734 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53, la CUIT del receptor debe 

###### encontrarse activa en IVA o en 

###### monotributo. 

Observa numeroDocumento 735 El Receptor no puede ser igual al Emisor Observa fechaServicioDesde / fechaServicioHasta 737 La Fecha de Servicio desde debe ser menor o igual a la Fecha de Servicio Hasta Observa numeroDocumento 738 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53 y <codigoTipoDocumento> es igual a 80 (CUIT), dicha CUIT deberá encontrarse activa en el Sistema Registral Observa cuitRepresentada / fechaEmision 750 Debe estar dado de alta en el Impuesto al Valor Agregado al momento de la fecha de emisión del comprobante Observa cuitRepresentada / codigoTipoComprobante / fechaEmision 751 Debe encontrarse habilitado a comprobantes clase 'A' a la fecha de emisión del comprobante Observa 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** numeroPuntoVenta / fechaHoraGen 755 La fecha/hora de generación solo debe informarse para comprobantes CAEA por contingencia (se informó el campo fecha/hora generación pero el punto de venta no es del tipo CAEA por Contingencia). Se informa que esta validación quedará fuera de vigencia a partir del 31/07/2026, siendo absorbida por las condiciones de la validación **_754_**. Observa numeroPuntoVenta / fechaHoraGen / fechaEmision / codigoConcepto 756 Para comprobantes CAEA por contingencia: si se indica <codigoConcepto> igual a 1, la fecha de emisión del comprobante puede ser hasta 5 días anteriores o posteriores respecto de la fecha de generación, pero sin extenderse al mes siguiente; si se indica <codigoConcepto> igual a 2 ó 3 puede ser hasta 10 días anteriores o posteriores a la fecha de generación Observa codigoTipoComprobante / periodoComprobantesAso ciados 777 Si <codigoTipoComprobante> es igual a 202, 203, 207 ó 208 perteneciente a Factura de Crédito Electrónica no corresponde informar un periodo de comprobantes asociados. Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados / periodoComprobantesAso ciados 778 Si <codigoTipoComprobante> es igual a 2, 3, 7, 8, 52 ó 53. Falta informar comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito válido/s o informar un período de comprobantes asociados válido Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados / periodoComprobantesAso ciados 779 Si <codigoTipoComprobante> es igual a 2, 3, 7, 8, 52 ó 53. No debe informar un período de comprobantes asociados cuando informa comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito Rechaza 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / periodoComprobantesAso ciados 780 Si <codigoTipoComprobante> es igual a 1, 2, 51, 201 ó 206 correspondientes a Facturas no corresponde informar un periodo de comprobantes asociados. Rechaza codigoTipoDocumento / numeroDocumento 782 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 la CUIT del receptor es activa en monotributo Observa cuitRepresentada 784 Si <cuitRepresentada> tiene pendiente de presentación el formulario de habilitación de comprobantes o su fecha de presentación es anterior a tu alta en IVA Observa numeroDocumento 786 Si <numeroDocumento> es inexistente en el padron del Organismo Observa codigoTipoComprobante/ arrayComprobantesAsoci ados/importeTotal 792 Siendo <codigoTipoComprobante> una Nota de Crédito (3, 8, 53, 203 y 208), si la sumatoria de los importes totales de los elementos del array <arrayComprobantesAsociados> (sin incluir Remitos) supera el <importeTotal> de la Nota de Crédito Observa **<comprobanteAsociado>…</comprobanteAsociado>** 

###### Validaciones Excluyentes 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo Código de Observ. Validación NO es superada** codigoTipoComprobante 803 El comprobante asociado podrá ser: 1 – Factura A 2 – Nota de Débito A 3 – Nota de Crédito A 6 – Factura B 7 – Nota de Débito B 

###### 8 – Nota de Crédito B 

 51 – Factura A con leyenda OPERACIÓN SUJETA A RETENCIÓN 52 – Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 – Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 

###### 91 – Remito Papel 

###### 88 – Remito Electrónico de Tabaco 

###### Acondicionado 

###### 990 – Remito Electrónico de Tabaco en 

###### Hebras 

###### 993 – Remito Electrónico de Harina en 

###### Camion 

###### 994 – Remito Electrónico de Harina en 

###### Tren 

###### 995 – Remito Electrónico de Carne 

###### 997 – Remito Electrónico Azucar 

###### Mercado Interno 

###### Consultar método 

###### consultarTiposComprobante 

Rechaza fechaEmision 820 La fecha de emisión del comprobante asociado informada no coincide con la existente en nuestros registros Rechaza 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo Código de Observ. Validación NO es superada** fechaEmision 821 La fecha de emisión de este comprobante no puede ser anterior a la factura asociada Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 822 El comprobante asociado no posee cuit del receptor Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 823 El comprobante asociado posee otro cuit de receptor Rechaza fechaEmision 824 Si el punto de venta del comprobante asociado NO es del tipo electrónico debe informar la fecha de emisión Rechaza fechaEmision 825 Si el punto de venta del comprobante asociado NO es del tipo electrónico la fecha de emisión no puede ser posterior a la fecha de la autorización Rechaza 

, Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) 

###### Validaciones NO Excluyentes 

**Campo Código de Observ. Validación NO es superada** codigoTipoComprobante 800 

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

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **<periodoComprobantesAsociados>…</ periodoComprobantesAsociados>** 

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

**Campo Código de Error Validación NO es superada** fechaDesde / fechaHasta 2802 Si el comprobante a autorizar incluye percepciones, el rango de fecha informado debe corresponder al mismo Mes/Año Observa **<subtotalIVA>...</subtotalIVA>** de existir se realizaran las siguientes validaciones 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigo 1000 Valores permitidos: 4, 5, 6 Rechaza codigo 1002 No se deberá repetir (no pueden incluírse dos subtotales IVA con el mismo código) Rechaza 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo Código de Error Validación NO es superada** codigo 1003 Si existen uno o más ítems con una determinada alícuota IVA, deberá existir el correspondiente subtotal IVA para dicha alícuota. No se sebe incluír un subtotal IVA si dicha alícuota no está presente en al menos un ítem. Rechaza 

###### Validaciones No Excluyentes 

**Campo Código de Error Validación NO es superada** importe 1004 Deberá coincidir con la sumatoria de todos los <importeItem> de <item> donde la alícuota de IVA coincida con la indicada, es decir, donde <codigoCondicionIVA> de <item> = <codigo> de <subtotalIVA>. Observa importe 1005 La suma de los subtotales de IVA no puede ser negativa. Observa **<item>...</item>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** unidadesMtx 1123 Deberá informarse 1 (uno). Rechaza codigoMtx 1124 Deberá informarse el código 7790001001139 Rechaza codigo 1105 Opcional. Longitud máxima 50 posiciones. Rechaza descripcion 1106 Cantidad máxima de caracteres permitidos 

4000. Importante: no es necesario (ni recomendable) completar con espacios.     Rechaza cantidad 1125 No debe informarse Rechaza codigoUnidad Medida 1126 Deberá informarse el código 7 - unidades Rechaza 

,Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo Código de Error Validación NO es superada** precioUnitario 1127 No debe informarse Rechaza importeBonific acion 1128 No debe informarse Rechaza codigoCondicio nIVA 1129 Deberá coincidir con alguno de los siguientes valores permitidos: 4, 5 o 6 Rechaza importeIVA 1112 Obligatorio para <codigoTipoComprobante> igual a 1, 2, 3, 51, 52 o 53. No corresponde para <codigoTipoComprobante> igual a 6, 7 u 8. Rechaza importeIVA 1130 Para <codigoTipoComprobante> igual a 2, 3, 52 o 53 deberá ser igual a <importeItem> Rechaza importeIVA 1131 Si <codigoTipoComprobante> es igual a 2, 3, 52 o 53 deberá ser mayor a 0 (cero). Rechaza importeItem 1132 Deberá ser mayor a 0 (cero) Rechaza **<datoAdicional>...</datoAdicional>** 

###### Los datos adicionales sólo deberán ser incluídos si el emisor pertenece al conjunto de emisores 

###### habilitado para usar datos adicionales (“Adicionales por R.G.”). En ese caso podrá incluír el o los datos 

###### adicionales que correspondan, especificando el tipo de dato adicional de acuerdo a la situación del 

###### emisor. El listado de tipos de datos adicionales se puede consultar con el método 

###### consultarTiposDatosAdicionales. 

###### Por ejemplo, si el emisor está incluído en el Régimen de Promoción Industrial, deberá incluír un dato 

###### adicional tipo 2. 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** t 920 Valores permitidos: consultar método _consultarTiposDatosAdicionales_ Rechaza t / c1…c6 922 Sólo se puede incluír un dato adicional con t = 2 (sólo se permite un id de proyecto por comprobante) Rechaza 

, Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) 

###### Validaciones No Excluyentes 

**Campo Código de Error Validación NO es superada** t / c1…c6 921 Si t es igual a 2 (“Dato Adicional para Empresas Promovidas”), en c1 se deberá indicar el id de proyecto (el mismo deberá corresponder a la cuit emisora del comprobante) o cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen de Promoción Industrial. Los campos c2 a c6 no deberán informarse (reservados para uso futuro) Observa 

,#### Informar un CAEA no utilizado (informarCAEANoUtilizado) 

Este método permite informar un CAEA que no fue utilizado, es decir que ningún comprobante fue emitido con ese CAEA. Cabe aclarar que el CAEA no deberá ser utilizado en comprobantes que se emitan posteriormente. 
