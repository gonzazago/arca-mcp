##### Validaciones y errores 

**Controles aplicados al objeto < Auth>** Validaciones Excluyentes **Campo / Grupo Código de error Descripción de la validación** <Auth><Cuit> 10000 La CUIT del emisor debe estar registrada y activa en las bases de la Administración. **Controles aplicados al objeto <FeCabReq>** Validaciones Excluyentes 

,**Campo / Grupo Código de error Descripción de la validación** <CantReg> 10001 Cantidad de registros de detalle del comprobante o lote de comprobantes de ingreso <CantReg> debe estar comprendido entre 1 y 9998 <CantReg> 10002 La cantidad de registros del detalle del comprobante o lote de comprobantes de ingreso debe ser igual a lo informado en cabecera del comprobante o lote de comprobantes de ingreso <CantReg>. Cantidad de registros incluidos 

###### 10003 

La cantidad de registros en detalle debe ser menor igual al valor permitido. Consulte método FECompTotXRequest para obtener cantidad máxima de registros por cada requerimiento. Para comprobantes del tipo MiPyMEs (FCE), la cantidad habilitada es 1 comprobante por request CbteTipo 700 Obligatorio. Valores permitidos: 1: Factura A 2: Nota de Débito A 3: Nota de Crédito A 4: Recibo A 6: Factura B 7: Nota de Débito B 8: Nota de Crédito B 9: Recibo B 11: Factura C 12: Nota de Débito C 13: Nota de Crédito C 15: Recibo C 51: Factura “A con leyenda operación sujeta a retención” _(CAEA observa comprobante)_ 52: Nota de Débito “A con leyenda operación sujeta a retención” _(CAEA observa comprobante)_ 53: Nota de Crédito “A con leyenda operación sujeta a retención” _(CAEA observa comprobante)_ 54: Recibo “A con leyenda operación sujeta a retención” 63: Liquidaciones A 64: Liquidaciones B 201: Factura de Crédito electrónica MiPyMEs (FCE) A 202: Nota de Débito electrónica MiPyMEs (FCE) A 

,**Campo / Grupo Código de error Descripción de la validación** 203: Nota de Crédito electrónica MiPyMEs (FCE) A 206: Factura de Crédito electrónica MiPyMEs (FCE) B 207: Nota de Débito electrónica MiPyMEs (FCE) B 208: Nota de Crédito electrónica MiPyMEs (FCE) B 211: Factura de Crédito electrónica MiPyMEs (FCE) C 212: Nota de Débito electrónica MiPyMEs (FCE) C 213: Nota de Crédito electrónica MiPyMEs (FCE) C Consultar método _FEParamGetTiposCbte_ PtoVta 1300 Campo PtoVta debe estar comprendido entre 1 y 99998. PtoVta 701 El punto de Venta debe ser del tipo habilitado para CAEA Fact. Elect. (RECE) RI IVA / CAEA – Fact. Elect. (RECE) Contingencias / CAEA – Fact. Elect. (RECE) Exento en IVA Contingencias / CAEA – Fact. Elect. (RECE) Monotributo Contingencias y no debe estar bloqueado a la fecha en que se emitió el comprobante. Consultar método FEParamGetPtosVenta. **Verificaciones que se realizan sobre el elemento < FECAEADetRequest> Validaciones Excluyentes Campo / Grupo Código de Error Validación** CbteFch 702 Debe estar comprendida dentro de la fecha desde y fecha hasta de vigencia del CAEA CbteDesde / CbteHasta / PtoVta / 

CbteTipo (^703) El número de comprobante informado debe ser mayor en 1 al último informado para igual punto de venta y tipo de comprobante. Consultar método FECompUltimoAutorizado 

,**Campo / Grupo Código de Error Validación** CbteFch / PtoVta / CbteTipo 704 La fecha del comprobante debe ser mayor o igual a la fecha del último comprobante informado para igual tipo de comprobante y punto de venta. CAEA 705 Debe corresponder a la CUIT que está informando Fecha de envío de la solicitud 1414 Al informar un comprobante con la modalidad CAEA, la fecha en la que se informa el comprobante debe ser mayor a la fecha de entrada en vigencia del CAEA vinculado CAEA / PtoVta 709 La fecha de alta del punto de venta deberá ser menor o igual a la fecha de vigencia “hasta” del CAEA MonId 1401 El campo MonId es obligatorio y debe corresponder a algún valor devuelto por el método FEParamGetTiposMonedas. Concepto 713 Valores permitidos: 1 Productos 2 Servicios 3 Productos y Servicios Consultar método FEParamGetTiposConcepto ImpIVA / Iva / AlicIva 715 Si ImpIVA es igual a 0 los objetos Iva y AlicIva solo deben informarse con ImpIVA = 3 (iva 0) Si ImpIVA es mayor a 0 el objeto Iva y AlicIva son obligatorios. El objeto AlicIva es obligatorio y no debe ser nulo si ingresa Iva. <ImpTotConc> 717 El campo ImpTotConc (Importe neto no gravado) no puede ser menor a cero (0). El campo ImpTotConc soporta 13 números para la parte entera y 2 para los decimales. <ImpOpEx> 718 El campo ImpOpEx soporta 13 números para la parte entera y 2 para los decimales. El campo ImpOpEx (importe exento) no puede ser menor a cero (0). <ImpNeto> 719 El campo ImpNeto (Importe neto gravado) no puede ser menor a cero (0) El campo ImpNeto soporta 13 números para la 

,**Campo / Grupo Código de Error Validación** parte entera y 2 para los decimales. <ImpTrib> 723 El campo ImpTrib (Importe de tributos) no puede ser menor a cero (0). El campo ImpTrib soporta 13 números para la parte entera y 2 para los decimales. <ImpIVA> 1407 El campo ImpIVA (Importe de IVA) no puede ser menor a cero (0). El campo ImpIVA soporta 13 números para la parte entera y 2 para los decimales. <MonCotiz> 726 El campo MonCotiz es obligatorio y mayor a 0 Debe ser igual a 1 (uno) si <MonId> es igual a PES. Si <MonId> es diferente a PES que <MonCotiz> sea Mayor a 0. El campo MonCotiz es opcional si informa el campo CanMisMonExt con el valor S y el tipo de comprobante es factura y la moneda tiene cotización en Banco Nación. El campo MonCotiz soporta 4 números para la parte entera y 6 para los decimales. CAEA 780 Deberá corresponder a un CAEA registrado en las bases de la Administración PtoVta / CbteFch 781 La fecha de alta del punto de venta deberá ser menor o igual a la fecha del comprobante CAEA 782 Obligatorio, numérico de 14 posiciones CbteFch 783 Obligatorio, formato _yyyymmdd_ CbteDesde / CbteHasta 784 Obligatorio, entero; valores comprendidos entre 1 y 99999999. <CbteHasta> / <CbteDesde> 1416 Para comprobantes tipo B, <CbteHasta> sea mayor o igual a <CbteDesde> <CbteTipo> / <CbteDesde> / <CbteHasta> 

###### 1415 

Para comprobantes tipo B (CbteDesde distinto a CbteHasta) y el resultado de la operación ImpTotal / (CbteHasta – CbteDesde + 1 ) < monto en pesos resultante según RG4444, el campo DocNro deberá ser cero (0) y el campo 141 DocTipo 99. DocTipo / DocNro / CbteDesde / CbteHasta 1417 Para comprobantes B o C (CbteDesde igual a CbteHasta) mayor o igual a monto en pesos resultante según RG4444, DocTipo debe ser uno de los valores devueltos por el método FEParamGetTiposDoc distinto a 99 y DocNro 

,**Campo / Grupo Código de Error Validación** deberá ser mayor a 0. DocTipo / DocNro / CbteDesde / CbteHasta 1418 Para comprobantes B o C (CbteDesde igual a CbteHasta) menor a monto en pesos resultante según RG4444, si DocTipo = 99 DocNro debe ser igual a 0. DocTipo / DocNro / CbteDesde / CbteHasta 1419 Para comprobantes B o C (CbteDesde igual a CbteHasta) menor a monto en pesos resultante según RG4444, si DocTipo es distinto a 99, DocNro debe ser mayor a 0. <CbteTipo> / <CbteDesde> / <CbteHasta> 

###### 1422 

Para comprobantes tipo B, <CbteDesde> distinto a <CbteHasta> el resultado de la operación ImpTotal / (CbteHasta – CbteDesde + 1 ) < monto en pesos resultante según RG4444. <CbteTipo> / <CbteDesde> / <CbteHasta> 

###### 711 

Para comprobantes clase A y comprobantes MiPyMEs (FCE) el campo CbteDesde debe ser igual al campo CbteHasta <CbteTipo> / <DocTipo> 1403 Para comprobantes clase A el campo DocTipo debe ser igual a 80 (CUIT) <ImpTotal> 1409 El campo ImpTotal no puede ser menor a cero (0). El campo ImpTotal soporta 13 números para la parte entera y 2 para los decimales. <DocTipo> / <DocNro> 1404 Para comprobantes tipo B o tipo C, si informa <DocTipo> y <DocNro>, <DocTipo> debe ser un valor devuelto por el método FEParamGetTiposDoc. <CbteTipo> / <DocNro> 1405 Para comprobantes tipo B o tipo C el campo DocNro debe ser un valor comprendido entre 0 y 99999999999 <CbteTipo> / <DocNro> 1421 Para comprobantes tipo A el campo DocNro debe ser un valor comprendido entre 20000000000 y 60000000000 DocTipo / DocNro 788 Cuando se informa tipo de comprobante 80, el documento informado no puede ser el mismo al ingresado en el campo <Auth><Cuit> <ImpTrib> / <Tributos> / <Tributo> 

###### 1423 

 Si ImpTrib es igual a 0 el objeto Tributos y Tributo no deben informarse. Si ImpTrib es mayor a 0 el objeto Tributos y Tributo son obligatorios. Si ImpTrib mayor a 0, Tributos y Tributo no pueden 

,**Campo / Grupo Código de Error Validación** venir vacíos. <Opcionales><CbteTipo> 1426 El array <Opcionales> no es obligatorio. Solo puede informarse si <CbteTipo> es 1, 2, 3, 4, 5, 6, 7, 8, 34, 39, 60, 63, 64, 201, 202, 203, 206, 207, 208, 211, 212, 213 <Compradores> 1432 No se encuentra habilitado informar compradores en el régimen de información para la modalidad CAEA. <CbteTipo>/ <CbteDesde>/ <CbteHasta> 

###### 1433 

Para comprobantes tipo C <CbteHasta> debe ser igual a <CbteDesde>. <CbteTipo>/ <ImpTotConc> 

###### 1434 

Para comprobantes tipo C, el campo “Importe neto no gravado” <ImpTotConc> debe ser igual a cero (0). <CbteTipo>/ <ImpOpEx> 

###### 1435 

Para comprobantes tipo C, el campo <ImpOpEx> debe ser igual a cero (0). <CbteTipo>/ <ImpNeto> 

###### 1436 

Para comprobantes tipo C el campo <ImpNeto> corresponde al Importe del Sub Total. <CbteTipo>/ <ImpTrib> 

###### 1437 

Para comprobantes tipo C, el campo “Importe de tributos” <ImpTrib>. No puede ser menor a cero (0). <CbteTipo>/ <ImpIVA> 

###### 1438 

Para comprobantes tipo C, el campo “Importe de IVA” < ImpIVA> debe ser igual a cero (0). <CbteTipo>/ <ImpTotal>/ <ImpNeto> / <ImpTrib> / 

###### 1439 

Para comprobantes tipo C, el campo “Importe Total” <ImpTotal>, debe ser igual a la suma de ImpNeto + ImpTrib. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 <CbteFchHsGen> 1440 Si el punto de venta es para CONTINGENCIAS CAEA el campo es obligatorio informarlo <CbteFchHsGen> 1441 Si informa el campo, el mismo tiene que contener un valor según lo definido en la estructura. Formato yyyymmddhhmiss <Iva> 1443 Si el tipo de comprobante es C, el array de IVA no debe informarse. 

,**Campo / Grupo Código de Error Validación** <PtoVta> /<CbteTipo> 1444 Si el comprobante es tipo “A”, “B”, “A con leyenda operación sujeta a retención” los puntos de venta habilitados son CAEA Fact. Elect. (RECE) RI IVA / CAEA Fact. Elect. (RECE) RI IVA Contingencias. Si el comprobante es tipo C, los puntos de venta habilitados son CAEA Fact. Elect. (RECE) Exento en IVA – Contingencias / CAEA Fact. Elect. (RECE) Monotributo Contingencias <FeCabReq><CbteTipo> / <CbteTipo> / <DocNro> 

###### 1445 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), el campo DocNro para comprobantes deberá ser un valor registrado en el padrón de arca, en condición activa. <CbteTipo> / <DocNro> 1446 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), el campo DocNro para comprobantes deberá ser un valor registrado en el padrón de arca, en condición activa. <FeCabReq><CbteTipo>/ <FECAEDetRequest><CbtesAsoc> 

###### 1450 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE) y corresponde a un comprobante de débito o crédito, es obligatorio informar comprobantes asociados. <FeCabReq><CbteTipo>/ <CbteAsoc><Tipo><PtoVta><Nro ><Cuit> 

###### 1451 

 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE) y corresponde a un comprobante de débito o crédito. Tener en cuenta que: 

- sí el comprobante asociado se encuentra rechazado por el comprador hay que informar el código de anulación correspondiente sobre el campo "Adicionales por RG", códigos 22 - Anulación. Valor “S” 

- sí el comprobante asociado no se encuentra rechazado por el comprador hay que informar el código de no anulación correspondiente sobre el campo "Adicionales por RG", códigos 22 - Anulación. Valor “N” <Auth><Cuit> <FeCabReq><CbteTipo>/ <CbteAsoc><Cuit> 

###### 1452 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), el CUIT del emisor del comprobante asociado debe coincidir con el CUIT del emisor del comprobante a autorizar. <FeCabReq><CbteTipo>/ <CbteAsoc><Tipo> 

###### 1453 

 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Débito o Crédito sin código de Anulación siempre debe asociar 1 solo comprobante tipo factura. 

,**Campo / Grupo Código de Error Validación** <FeCabReq><CbteTipo>/ <CbteAsoc><Tipo> 

###### 1454 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Débito o Crédito sin código de Anulación solo puede asociar: Para comprobantes A, asociar 201 o (91, 88, 988, 990, 991, 993, 994, 995, 996, 997). Para comprobantes B, asociar 206 o (91, 88, 988, 990, 991, 993, 994, 995, 996, 997). Para comprobantes C, asociar 211 o (91, 88, 988, 990, 991, 993, 994, 995, 996, 997). <FeCabReq><CbteTipo>/ <CbteAsoc> / <Tipo> / <PtoVta> / <Nro> / <Cuit> / <CbteFch> 

###### 1455 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Débito o Crédito, es obligatorio informar la fecha del comprobante asociado <FeCabReq><CbteTipo>/ <FeDetReq>/<CbteFch>/ <CbteAsoc> / <Tipo> / <PtoVta> / <Nro> / <Cuit> / <CbteFch> 

###### 1456 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Débito o Crédito, la fecha del comprobante asociado tiene que ser igual o menor a la fecha del comprobante que se está autorizando <FeCabReq><CbteTipo>/ <CbteAsoc> / <Tipo> / <PtoVta> / <Nro> / <Cuit> / <CbteFch> 1457 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Débito o Crédito, el comprobante debe existir autorizado en las bases de esta Administración con la misma fecha informada en el asociado. <FeCabReq><CbteTipo>/ <FECAEDetRequest><DocTipo>< DocNro> 

###### 1458 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), el receptor del comprobante debe tener habilitado el domicilio fiscal electrónico <FeCabReq><CbteTipo>/ <Opcionales> 

###### 1459 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE) es obligatorio informar <Opcionales> <FeCabReq><CbteTipo>/ <FchVtoPago> 

###### 1460 

 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Tipo 201 FACTURA DE CREDITO ELECTRONICA MiPyMEs (FCE) A / 206 FACTURA DE CREDITO ELECTRONICA MiPyMEs (FCE) B / 211 

- FACTURA DE CREDITO ELECTRONICA MiPyMEs (FCE) C, es obligatorio informar FchVtoPago <FeCabReq><CbteTipo>/ <FchVtoPago> / <FECAEDetRequest><CbteFch> 

###### 1461 

 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), la fecha de vencimiento de pago (FchVtoPago) debe ser posterior o igual a la fecha de emisión (CbteFch) o fecha de presentación (fe

,**Campo / Grupo Código de Error Validación** cha actual), la que sea posterior <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 1462 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), informa opcionales, el valor correcto para el código 2101 es un CBU numérico de 22 caracteres. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 1463 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), informa opcionales, el valor correcto para el código 2102 es un ALIAS alfanumérico de 6 a 20 caracteres. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 1464 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), informa opcionales, el valor correcto para el código 22 es “S” o “N”: S = Es de Anulación N = No es de Anulación <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 1465 

Si el tipo de comprobante que está autorizando es Factura (201, 206, 211) del tipo MiPyMEs (FCE), informa opcionales, es obligatorio informar CBU. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 1466 

Si el tipo de comprobante que está autorizando NO es MiPyMEs (FCE), no informar los códigos 2101, 2102, 22, 27 <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 1467 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), es obligatorio informar al menos uno de los sig. códigos 2101, 22, 27 <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 1468 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Factura (201, 206, 211), no informar Código de Anulación <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 1469 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Debito (202, 207, 212) o Crédito (203, 208, 213) No informar CBU y ALIAS. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 1470 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Debito (202, 207, 212) o Crédito (203, 208, 213) informar Código de Anulación <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 1471 

Si el tipo de comprobante que está autorizando es factura MiPyMEs (FCE), el CBU debe estar registrado en las bases de esta administración, vigente y pertenecer al emisor del comprobante. <FeCabReq><CbteTipo>/ <FchVtoPago> 

###### 1472 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), el campo “fecha de vencimiento para el pago” <FchVtoPago> no debe informarse si NO es Factura de Crédito. En el caso de ser Débito o Crédito, solo puede informarse si es de Anulación. <FeCabReq><CbteTipo>/ <CbteTipo> / <DocNro> 

###### 1474 

 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE) del tipo A, el receptor del comprobante informado en DocTipo y DocNro debe corresponder a un contribuyente activo en el 

,**Campo / Grupo Código de Error Validación** Impuesto al Valor Agregado o Responsable Monotributo. Si el tipo de comprobante que está autorizando es MiPyMEs (FCE) del tipo B, el receptor del comprobante informado en DocTipo y DocNro debe corresponder a un contribuyente activo en el Impuesto Iva, Monotributo o Exento. Si el tipo de comprobante que esta autorizando es MiPyMEs (FCE) del tipo C, el receptor del comprobante informado en DocTipo y DocNro debe corresponder a un contribuyente activo en el Impuesto Iva, Monotributo o Exento. <FeCabReq><CbteTipo>/ <CbteTipo> / <DocNro> 

###### 1475 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE) no se permite informar DocNro 23000000000 (No Categorizado) <FeCabReq><CbteTipo>/ <CbteTipo> / <DocNro> 

###### 1476 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), el receptor del comprobante informado en DocTipo y DocNro debe corresponder a un contribuyente caracterizado como GRANDE o que opto por PYME. Su activida principal debe corresponderse con alguna de las alcanzadas por el régimen. <FeCabReq><CbteTipo>/ <MonId> <CbteAsoc> 

###### 1477 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), débito o crédito, el mismo debe tener la misma moneda que el comprobante asociado o Pesos para ajuste en las diferencias de cambio (post aceptación/rechazo) <FeCabReq><CbteTipo>/ <FECAEDetRequest><DocTipo>< DocNro>/ <CbteAsoc> 

###### 1478 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), es débito o crédito, deben coincidir emisores y receptores. Si el comprobante ES de anulación, para autorizar un débito, el tipo de comprobante a asociar debe ser crédito y para autorizar un crédito, el tipo de comprobante a asociar debe ser una factura o un débito. <FeCabReq><CbteTipo>/ <MonId> <CbteAsoc>/ <FeCabReq><ImpTotal> 

###### 1479 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), es crédito el monto del comprobante a autorizar no puede ser mayor o igual al saldo actual de la cuenta corriente. Ver micrositio factura de crédito <FeCabReq><CbteTipo>/ 1480 Si el tipo de comprobante que está autorizando es 

,**Campo / Grupo Código de Error Validación** <CbteAsoc>/ MiPyMEs (FCE), es crédito o débito A, de anulación, solo se encuentra habilitado asociar un comprobante de crédito A. Utilizar debito para anular crédito o utilizar crédito para anular débito o factura. <FeCabReq><CbteTipo>/ <CbteAsoc>/ 1481 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), es crédito o débito B, de anulación, solo se encuentra habilitado asociar un comprobante de crédito B. Utilizar debito para anular crédito o utilizar crédito para anular débito o factura. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 1482 

Puede identificar una o varias Referencias Comerciales según corresponda. Informar bajo el código 23. Campo alfanumérico de 50 caracteres como máximo. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 1483 

Si informa opcionales con más de un identificador 23 – Referencia Comercial, no repetir el valor. <FeCabReq><CbteTipo>/ <CbteAsoc>/ 1486 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), es crédito o débito C, de anulación, solo se encuentra habilitado asociar un comprobante de crédito C. Utilizar debito para anular crédito o utilizar crédito para anular débito o factura. <CbteTipo> / <DocTipo> / <DocNro> 

###### 1487 

Para comprobantes MiPyMEs (FCE) el documento del receptor debe ser 80 CUIT. <FeCabReq><CbteTipo>/ <CbteAsoc> / <Tipo> / <PtoVta> / <Nro> / <Cuit> / <CbteFch> 

###### 1488 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Débito o Crédito, el comprobante debe existir autorizado en las bases de esta Administración. <FeCabReq><CbteTipo>/ <FECAEADetRequest><PeriodoAs oc> 

###### 1490 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), no se encuentra habilitado informar PeriodoAsoc. <FeCabReq><CbteTipo>/ <FECAEADetRequest><CbtesAsoc >/ <FECAEADetRequest><PeriodoAs oc> 

###### 1491 

 Si el comprobante es Debito o Crédito, se deberá informar de forma obligatoria los campos Fecha Comprobantes Asociados Desde/Hasta, o al menos un comprobante asociado. 

,**Campo / Grupo Código de Error Validación** <FeCabReq><CbteTipo>/ <FECAEADetRequest><PeriodoAs oc> 

###### 1492 

Si el comprobante es Factura no se deberá informar los campos Fecha Comprobantes Asociados Desde/Hasta <FECAEADetRequest><PeriodoAs oc><FchDesde> 

###### 1493 

Si envía estructura PeriodoAsoc es obligatorio enviar FchDesde. <FECAEADetRequest><PeriodoAs oc><FchHasta> 

###### 1494 

Si envía estructura PeriodoAsoc es obligatorio enviar FchHasta. <FECAEADetRequest><PeriodoAs oc><FchDesde> 

###### 1495 

El campo PeriodoAsoc.FchDesde debe corresponder a una fecha valida con formato YYYYMMDD <FECAEADetRequest><PeriodoAs oc><FchHasta> 

###### 1496 

El campo PeriodoAsoc.FchHasta debe corresponder a una fecha valida con formato YYYYMMDD <FECAEADetRequest><PeriodoAs oc><FchDesde>/ <FECAEADetRequest><PeriodoAs oc><FchHasta> 

###### 1497 

Las fechas informadas en PeriodoAsoc deben ser superiores a 01/01/2006 <FECAEADetRequest><PeriodoAs oc><FchDesde>/ <FECAEADetRequest><PeriodoAs oc><FchHasta> 

###### 1498 

Las fechas informadas en PeriodoAsoc , FchHasta debe ser superior o igual a FchDesde. <FECAEADetRequest><PeriodoAs oc><FchHasta> 

###### 1499 

Las fecha informada en PeriodoAsoc.FchHasta debe ser anterior o igual a la fecha de emisión del comprobante que estamos autorizando <FECAEADetRequest ><CbtesAsoc><CbteFch> 

###### 1502 

Informar de forma obligatoria la fecha de Emisión del comprobante asociado si el punto de venta del comprobante asociado es Controlador Fiscal o FactuWeb y el tipo de Comprobante asociado es Factura, Recibo, Nota de Débito/Nota de Crédito <FECAEADetRequest ><CbtesAsoc><CbteFch> 

###### 1503 

De informar fecha de Emisión del comprobante asociado y el punto de venta es Controlador Fiscal o FactuWeb, la fecha no puede ser posterior al día de hoy. <FECAEADetRequest><CbtesAsoc ><CbteFch> 

###### 1504 

Si se informan deben tener el siguiente formato yyyymmdd. <FECAEADetRequest>/ <Opcionales><Id>/<CbteTipo> 

###### 1505 

 Si el comprobante es del tipo A (1, 2, 3, 4, 5, 34, 39, 60, 63) e intenta informar datos opcionales según Resolución General 3668, los valores posibles para los identificadores son 5, 61, 62, 7. 

,**Campo / Grupo Código de Error Validación** <FECAEADetRequest>/ <Opcionales><Id>/ <Opcionales><Valor> 

###### 1506 

Si informa Id = 5, el valor ingresado no puede ser blanco y debe ser alfanumérico de 2 caracteres. <FECAEADetRequest>/ <Opcionales><Id>/ <Opcionales><Valor> 

###### 1507 

Si informa Id = 5, el contenido del campo <Valor> debe corresponder a un código de EXCEPCION válido comprendido por alguno de los sig: 01 – Locador / Prestador del mismo 02 – Congresos / Eventos 03 – Operación contemplada en RG 74 04 – Bienes de Cambio 05 – Ropa de trabajo 06 – Intermediario <FECAEADetRequest>/ <Opcionales><Id>/ <Opcionales><Valor> 

###### 1508 

Si informa Id = 61, el valor ingresado no puede ser blanco y debe ser numérico de 2 caracteres. <FECAEADetRequest>/ <Opcionales><Id>/ <Opcionales><Valor> 

###### 1509 

Si informa Id = 61, el contenido del campo <Valor> debe corresponder a un código que represente el tipo de documento del firmante. Ver método FEParamGetTiposDoc. <FECAEADetRequest>/ <Opcionales><Id>/ <Opcionales><Valor> 

###### 1510 

Si informa Id = 62, el valor ingresado no puede ser blanco y debe ser numérico de 11 caracteres como máximo. <FECAEADetRequest>/ <Opcionales><Id>/ <Opcionales><Valor> 

###### 1511 

Si informa Id = 7, el valor ingresado no puede ser blanco y debe ser numérico de 2 caracteres. <FECAEADetRequest>/ <Opcionales><Id>/ <Opcionales><Valor> 

###### 1512 

Si informa Id = 7, el contenido del campo <Valor> debe corresponder a un código de carácter firmante válido comprendido por alguno de los sig: 01 – Titular 02 – Director / Presidente 03 – Apoderado 04 – Empleado <FeCabReq><CbteTipo>/ 1513 Si el tipo de comprobante que está autorizando es 

,**Campo / Grupo Código de Error Validación** <Opcionales><Id><Valor> MiPyMEs (FCE), informa opcionales, el tipo de dato correcto para el código 27 es un alfanumérico de 3 caracteres. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 1514 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), informa opcionales y el código es 27, los valores posibles son: SCA = "TRANSFERENCIA AL SISTEMA DE CIRCULACION ABIERTA" ADC = "AGENTE DE DEPOSITO COLECTIVO" <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 1515 

Si el tipo de comprobante que está autorizando es Factura del tipo MiPyMEs (201, 206, 211), es obligatorio informar <Opcionales> con id = 27. Los valores posibles son SCA o ADC. <FECAEADetRequest>/ <Opcionales><Id> 

###### 1517 

Si el comprobante es del tipo B e intenta informar datos opcionales según Resolución General 4004E, los valores posibles para los identificadores son 17, 1801, 1802. <FECAEADetRequest>/ <Opcionales><Id><Valor> 

###### 1518 

Si informa id = 17 (RG 4004-E Locación de inmuebles destino "casa-habitación"), el valor ingresado no puede ser blanco y debe ser un numérico de 1 carácter: 1 (uno) = facturación a través de intermediario 2 (dos) = facturación directa <FECAEADetRequest>/ <Opcionales><Id><Valor> 

###### 1519 

Si informa Id = 1801 (RG 4004-E Locación de inmuebles destino "casa-habitación") con un CUIT propietario/locador no repetirlo dentro de la lista de propietarios/locadores <FECAEADetRequest>/ <Opcionales><Id><Valor> 

###### 1520 

Si informa Id = 1802 (RG 4004-E Locación de inmuebles destino "casa-habitación") el valor ingresadono puede ser un blanco y debe ser un alfanumérico de 100 caracteres como máximo que representa el Nombre y Apellido propietario/locador. <FECAEADetRequest>/ <Opcionales><Id><Valor> 

###### 1521 

 Si informa id 17 con valor 1 (Intermediario) (RG 4004-E Locación de inmuebles destino "casahabitación"), deben informarse obligatoriamente los identificadores 1801 y 1802. Si informa id 17 con valor 2 (Directo) (RG 4004-E Locación de inmuebles destino "casa-habitación"), pueden no informarse los identificadores 1801, 

1802. Solo informarlos cuando hay otro/s 

, Campo / Grupo Código de Error Validación propietarios/locadores <FECAEADetRequest>/ <Opcionales><Id><Valor> 

###### 1522 

 Si informa id = 1801 (RG 4004-E Locación de inmuebles destino "casa-habitación"), el valor ingresado no puede ser blanco y debe corresponder al CUIT del propietario/locador. Numérico de 11 caracteres. <FECAEADetRequest>/ <Opcionales><Id><Valor> 

###### 1523 

 Si informa Id = 1801 (RG 4004-E Locación de inmuebles destino "casa-habitación"), verificar que el número consignado se encuentra en los padrones de ARCA. <FECAEADetRequest>/ <Opcionales><Id><Valor> 

###### 1524 

 Si informa Id = 1801 (RG 4004-E Locación de inmuebles destino "casa-habitación") con un CUIT propietario/locador no puede ser el mismo que el emisor del comprobante. <FECAEADetRequest>/ <Opcionales><Id><Valor> 

###### 1525 

 Si informa id 1801 y id 1802 (RG 4004-E Locación de inmuebles destino "casa-habitación"), la cantidad de opcionales con id 1801 y 1802 deben ser iguales. <FECAEADetRequest>/ <Opcionales><Id><Valor> 

###### 1526 

 Si informa id 1801 y id 1802 (RG 4004-E Locación de inmuebles destino "casa-habitación"), es obligatorio informar el id 17 con valor 1 (Intermediario) o 2 (Directo) <FECAEADetRequest> / <CanMisMonExt> 

###### 820 

 Si informa el campo CanMisMonExt, los valores posibles son S o N y no debe quedar vacío. <FECAEADetRequest> / <CondicionIVAReceptorId> 

###### 823 

 El campo de identificación de la Condición de IVA del receptor no es un valor permitido. Para mayor detalle consular el método FEParamGetCondicionIvaReceptor. <FECAEADetRequest> / <CondicionIVAReceptorId> 

###### 826 

Campo Condición Frente al IVA del receptor es obligatorio conforme a lo reglamentado por la Resolución General N° 5616. Para mas información consular método FEParamGetCondicionIvaReceptor. **Validaciones NO Excluyentes Campo Código de Observ. Validación** <CbteTipo> / <DocNro> 708 El campo DocNro para comprobantes Tipo A deberá ser un valor registrado y ACTIVO en el 

,**Campo Código de Observ. Validación** padrón de arca. <ImpTotConc> / <ImpOpEx> / <ImpNeto> / <ImpTrib> / <ImpIVA> / <ImpTotal> 

###### 724 

El campo “Importe Total” <ImpTotal>, debe ser igual a la suma de ImpTotConc + ImpNeto + ImpOpEx + ImpTrib + ImpIVA Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 FchServHasta 728 Debe informarse solo si <Concepto> es igual a 2 ó 

3. En otro caso no corresponde. <ImpIVA> 725 Debe ser igual a la sumatoria de la totalidad de los campos <importe> (dentro de <AlicIVA>) Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de alícuotas de IVA ingresadas* <CbteTipo> / 153 <DocTipo> / <DocNro> 

###### 1402 

Para comprobantes Tipo A deberá encontrarse registrado en condición activa en el Impuesto al Valor Agregado o Responsable Monotributo. <FchServDesde> 727 FchServDesde debe informarse solo si Concepto es igual a 2 o 3. En otro caso no corresponde. <CbteTipo> / <DocTipo> / <DocNro> 

###### 1420 

Para comprobantes tipo B o C (CbteDesde igual a CbteHasta) y DocTipo 80, 86, 87, DocNro deberá ser un valor registrado en el padrón de arca. Si DocTipo es 80 y DocNro es 23000000000 (No Categorizado) esta validación no se tendrá en cuenta. <ImpNeto> / <AlicIva> <BaseImp> 1408 La suma de los campos <BaseImp> en <AlicIva> debe ser igual al valor ingresado en ImpNeto. Esta validación no deberá ser tenida en cuenta, cuando el <CbteTipo> sea 02, 03, 07, 08. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de alícuotas de IVA ingresadas * FchVtoPago 1411 Debe ser mayor o igual a la fecha del comprobante. FchVtoPago 729 Debe informarse solo si <Concepto> es igual a 2 ó 

3. En otro caso no corresponde. 

,**Campo Código de Observ. Validación** <FchServDesde>/ <FchServHasta> 1412 <FchServDesde> no puede ser posterior al campo <FchServHasta>. <ImpTrib> 1406 Debe ser igual a la sumatoria de la totalidad de los campos <Importe> (dentro de <Tributos>). Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de tributos * CAEA / <PtoVta> 1424 El CAEA y punto de venta no debe estar informado sin movimientos. <ImpTrib> <DocTipo><DocNro> 1425 Para comprobantes tipo B, si <DocTipo> es 80 y <DocNro> es 23000000000 (No Categorizado), <ImpTrib> debe ser mayor a 0. <FchServDesde>/ <FchServHasta>/ <FchVtoPago> 

###### 1413 

Si se informan deben tener el siguiente formato yyyymmdd. <ImpNeto>/ <Iva>.<AlicIva> 

###### 1427 

Si ImpNeto es mayor a 0, el objeto AlicIva es obligatorio y no debe ser nulo. <Auth><Cuit> / <CbteTipo> / <CbteFch> 

###### 1429 

No se encuentra habilitado a emitir comprobantes “A” a la fecha de emisión del comprobante. El comprobante queda observado. <Auth><Cuit> / <CbteTipo> / <CbteFch> 

###### 1431 

Al momento de emitir el comprobante, debe estar dado de alta en el Impuesto. <CbteFchHsGen> 1442 Si el punto de venta informado no es para CONTINGENCIA no informar el campo <CbteFchHsGen> <CbteFch>/ <CbteFchHsGen>/ <Concepto> 

###### 1445 

 El campo <CbteFch> podrá estar comprendido en el rango N-5 y N+5 siendo N la fecha CbteFchHsGen (contingencia) para Concepto= 01 Productos. 

- Para Concepto 02, 03 el campo CbteFch debe estar comprendido en el rango N-10 y N+10 siendo N la fecha CbteFchHsGen (contingencia). <Auth><Cuit>/ <FeCabReq><CbteTipo>/ <FECAEDetRequest><DocNro>/ 1485 Según la categorización de las CUITs emisora y receptora y el monto facturado debe realizar una factura de crédito electrónica MiPyMEs (FCE). Ver micrositio. 

,**Campo Código de Observ. Validación** <FECAEDetRequest><ImpTotal> / <FECAEDetRequest><MonCotiz> / Tope <DocTipo>/ <DocNro>/ 

###### 1489 

Si el tipo de documento del receptor del comprobante que está autorizando es CUIT (código Tipo de Documento 80) y la CUIT se encuentra inactiva por haber sido incluida en la consulta de facturas apócrifas, no podrá computarse el crédito fiscal. <FECAEADetRequest><Tributos>< Id>/ <FECAEADetRequest><PeriodoAs oc><FchDesde>/ <FECAEADetRequest><PeriodoAs oc><FchHasta> 

###### 1500 

Si en la estructura Tributos informa percepciones, PeriodoAsoc.FchDesde y PeriodoAsoc.FchHasta deben corresponder al mismo Mes/Anio <FECAEADetRequest><CbteFch>/ <FECAEADetRequest><CbtesAsoc ><CbteFch> 

###### 1501 

Si el comprobante asociado se autorizó de forma electrónica y tiene una fecha de emisión posterior a la fecha de emisión del comprobante por el cual se está solicitando la autorización, ambos deberán ser del mismo mes/año. <CbteTipo> / <DocNro> 1516 Para comprobantes Clase “A” y “A con leyenda operación sujeta a retención”, donde el receptor del comprobante informado en <DocTipo> y <DocNro> se encuentra activo en el Impuesto Responsable Monotributo, “El crédito fiscal discriminado en el presente comprobante solo podrá ser computado a efectos del Procedimiento permanente de transición al Régimen General.” <CbteTipo> / <DocNro> 814 Para comprobantes Clase “A” y “A con leyenda operación sujeta a retención”, se ha detectado que esta pendiente de presentación el formulario de habilitación de comprobantes o su fecha de presentación es anterior a la fecha de alta en IVA. Para el caso que el comprobante no sea una Nota de Crédito, se debe proceder a anular la operación clase “A” y “A con leyenda operación sujeta a retención” emitida, mediante una Nota de Crédito. <CbteTipo> / <DocNro> / <FECAEADetRequest><CbteFch>/ 

###### 815 

 A la fecha de emisión del comprobante, no te encontrabas habilitado a la emisión de comprobantes clase “A” / “A con leyenda operación sujeta a retención”. Tenés que proceder a emitir la Nota de Crédito, o anular la operación, 

,**Campo Código de Observ. Validación** según corresponda. <CbteTipo> / <DocNro> / <FECAEADetRequest> / ImpTotal 

###### 816 

El monto total del comprobante emitido, excede el límite establecido para la categoría máxima de Monotributo. Por tal motivo, quedarías excluido automáticamente teniendo que solicitar el alta de los tributos (impositivos y de los recursos de la seguridad social) en el régimen general de acuerdo con tu actividad. <CbteTipo> / <DocNro> / <FECAEADetRequest> / ImpTotal 

###### 817 

El monto del comprobante emitido, excede el límite establecido para su categoría de Monotributo. Tenelo en cuenta para la próxima recategorización. <FECAEADetRequest> / ImpTotal / <CbteAsoc> 

###### 818 

El importe de la nota de crédito supera el monto del comprobante asociado que estás ajustando. Verificá los montos ingresados y de tratarse de un error, tenés que efectuar el ajuste o anulación de la operación según corresponda. <FECAEADetRequest> / <DocNro> 819 La CUIT receptora ingresada no existe. <FECAEADetRequest> / <CanMisMonExt> 

###### 821 

Si informa el campo MonCotiz, el mismo no podrá superar en 1 a la cotizacion oficial. Ver Método FEParamGetCotizacion. <FECAEADetRequest> / <CanMisMonExt> 

###### 822 

Si informa MonId = PES, el campo CanMisMonExt no debe informarse o informarse con el valor N. <FECAEADetRequest> / <CondicionIVAReceptorId> 

###### 824 

El campo de identificación de Condición de IVA del receptor no es valido para la clase de comprobante informado. Para mas detalle consultar el Método: FEParamGetCondicionIvaReceptor <FECAEADetRequest> / <CondicionIVAReceptorId> 

###### 825 

El campo Condición Frente al IVA del receptor resultará obligatorio conforme lo reglamentado por la Resolución General N° 5616. Para mas información consular método FEParamGetCondicionIvaReceptor. <FECAEADetRequest> / <DocNro> 827 La CUIT receptora informada está inactiva o es inválida. Se bebe emitir una Nota de Crédito o anular la operación, según corresponda. <FECAEADetRequest> / <DocNro> 828 La CUIT receptora se encuentra limitada por haber sido caracterizada como sujeto no confiable en materia de Seguridad Social. Se bebe emitir una Nota de Crédito o anular la operación, según corresponda. <FECAEADetRequest> / <DocNro> 829 El número de documento informado para el sujeto 

,**Campo Código de Observ. Validación** receptor corresponde a un sujeto fallecido, sin sucesión indivisa registrada. Se debe emitir una Nota de Crédito o anular la operación, según corresponda. **Verificaciones que se realizan sobre el elemento <CbtesAsoc> Validaciones Excluyentes Campo Código de Error Validación** CbtesAsoc 800 Si envía CbtesAsoc, CbteAsoc es obligatorio y no debe estar vacío. PtoVta 802 De enviarse el tag CbtesAsoc, CbteAsoc debe enviarse con PtoVta mayor a 0 y < a 99999 Nro 803 De enviarse el tag CbtesAsoc, CbteAsoc debe enviarse con Nro mayor a 0 y menor a 99999999 Tipo / PtoVta / Nro 804 Los comprobantes informados no podrán repetirse. Tipo 805 De enviarse el tag CbtesAsoc, CbteAsoc debe enviarse con Tipo mayor a 0 CbteTipo / CbtesAsoc 807 CbtesAsoc es opcional, solamente podrá informarse si CbteTipo es igual a 1, 2, 3, 6, 7, 8, 12, 13, 51, 52, 53, 63, 64, 201, 202, 203, 206, 207, 208, 211, 212, 213. <CbteAsoc><Cuit> 808 Si informa Cuit en comprobantes asociados, no informar en blanco, el mismo debe ser un valor de 11 caracteres numericos. Para comprobante del tipo MiPyMEs (FCE) del tipo débito o crédito es obligatorio informar el campo. CbteTipo / CbtesAsoc 812 Para comprobantes MiPyMEs (FCE) 201, 206 o 211 puede asociarse los comprobantes (91, 990, 991, 993, 994, 995). Para comprobantes MiPyMEs (FCE) A 202 y 

,203, puede asociar 201,202 o 203. Para comprobantes MiPyMEs (FCE) B 207, 208 puede asociar 206, 207, 208. Para comprobantes MiPyMEs (FCE) C 212, 213 puede asociarse 211, 212, 213. <Opcionales><Id> 813 Si intenta informar datos opcionales según Resolución General, recordar que en un mismo comprobante solo puede informar identificadores opcionales para solo 1 resolución por comprobante. **Validaciones NO Excluyentes Campo Código de Observ. Validación** Tipo 806 Obligatorio. Deberá ser igual a 1, 2, 3, 04, 05, 34, 39, 60, 63, 88 o 991 si el tipo de comprobante que se informa es igual a 2 ó 3. Deberá ser igual a 6, 7, 8, 09, 10, 35, 40, 61, 64 ,88 o 991 si el tipo de comprobante que se informa es igual a 7 ú 8. Deberá ser igual a 11, 12, 13, 15 si el tipo de comprobante que informa es igual a 12 o 13 Deberá ser igual a 51, 52, 53, 54 si el tipo de comprobante que se informa es igual a 52 o 53. Deberá ser 91, 88, 988, 990, 991, 993, 994, 995, 996, 997 si el tipo de comprobante que se informa es 1, 6 o 51 Tipo/ PtoVta / Nro 801 Si el punto de venta del comprobante asociado (campo PtoVta de CbtesAsoc) es electrónico, el número de comprobante debe obrar en las bases del organismo para el punto de venta y tipo de comprobante informado. <CbteAsoc><Tipo> / <CbteAsoc><PtoVta> / <CbteAsoc><Nro> 

###### 809 

 Si informa comprobantes asociados, y sus códigos son 91, 88, 988, 990, 991, 993, 994, 995, 996, 997, los mismos deben encontrarse registrados. 

,<CbteAsoc><Tipo> / <CbteAsoc><PtoVta> / <CbteAsoc><Nro> 810 Si informa comprobantes asociados, y sus códigos son 91, 88, 988, 990, 991, 993, 994, 995, 996, 997, los mismos deben encontrarse confirmados. <DocTipo> / <DocNro> <CbteAsoc><Cuit> 

###### 811 

Si informa comprobantes asociados y sus códigos son 91, 88, 988, 990, 991, 993, 994, 995, 996, 997, el receptor del comprobante debe ser igual al receptor del comprobante asociado. **Controles que se realizan sobre el elemento <Tributo> Validaciones Excluyentes Campo Código de Error Validación** Id 900 Obligatorio. Valores permitidos: consultar método FEParamGetTiposTributos Desc 908 Opcional. Debe informarse si <codigo> es igual a 99. Importe 907 El valor informado debe ser mayor o igual a 0. El campo Importe de Tributos soporta 13 números para la parte entera y 2 para los decimales. BaseImp 905 El campo BaseImp en Tributo es obligatorio, mayor o igual 0 cero. El campo BaseImp de Tributos soporta 13 números para la parte entera y 2 para los decimales. Alic 906 El campo Alic en Tributo es obligatorio, mayor o igual 0 cero. El campo Alic de Tributos soporta 3 números para la parte entera y 2 para los decimales. **Controles que se realizan sobre el elemento <IVA> Validaciones Excluyentes** 

,**Campo Código de Error Validación** Id 1000 Consultar el método FEParamGetTiposIva. Es opcional para comprobantes 2, 3, 7, 8. Id 1003 El campo Id en AlicIVA no debe repetirse. Deberá totalizarse por alícuota. Importe 1008 El campo Importe en AlicIVA es obligatorio , mayor o igual 0 cero. El campo Importe de AlicIva soporta 13 números para la parte entera y 2 para los decimales. BaseImp 1009 El campo BaseImp en AlicIVA es obligatorio y debe ser mayor a 0 cero. Excepto para comprobantes 2, 3, 7, 8 que puede ser cero o no ser informado. El campo BaseImp de AlicIva soporta 13 números para la parte entera y 2 para los decimales. **Validaciones NO Excluyentes Campo Código de Observ. Validación** Importe / AlicIva / BaseImp 

###### 1006 

Los importes informados en AlicIVA no se corresponden con los porcentajes. Excepto para comprobantes 2, 3, 7, 8 que puede ser cero o no ser informado. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 **Controles que se realizan sobre el elemento <Opcionales> Validaciones Excluyentes** 

,**Campo Código de Error Validación** Id 1100 El campo Id en Opcionales es obligatorio y debe ser igual a 2 (Régimen de Promoción Industrial). Id 1101 El campo Id en Opcionales es obligatorio y no debe repetirse. Valor 1105 El campo Valor en Opcionales es obligatorio. <Opcionales><Opcional ><Id><Valor> 

###### 1103 

Si envía Opcionales, Opcional, Id y Valor son obligatorios. Valor 1104 Si selecciona Id = 2 el valor ingresado debe ser un numérico de 8 (ocho) dígitos mayor o igual a 0 (cero). **Validaciones NO Excluyentes Campo Código de Observ. Validación** Valor 1106 Si Id = 2 y el comprobante corresponde a una actividad alcanzada por el beneficio de Promoción Industrial en el campo <Valor> se deberá informar el número identificatorio del proyecto (el mismo deberá corresponder a la cuit emisora del comprobante), si no corresponde a una actividad alcanzada por el beneficio el campo <Valor> deberá ser 0 (cero). **Controles que se realizan sobre el elemento <Actividades> Validaciones Excluyentes** <FeCAEARegInfReq><Actividades><Actividad> 16000 Si envía estructura de Actividades, Actividad es obligatorio enviarlo. <FeCAEARegInfReq><Actividades><Actividad><Id> 16001 Si envía estructura de Actividades, Actividad es obligatorio enviarlo y no debe estar vacío. <FeCAEARegInfReq><Actividades><Actividad><Id> 16002 El identificador de actividad informado tiene que ser una de las 

, actividades habilitadas. Consultar método FEParamGetActividades. <FeCAEARegInfReq><Actividades><Actividad><Id> 16003 De enviarse el tag Actividades, las actividades no deben repetirse. <FeCAEARegInfReq><Actividades><Actividad><Id> 16004 De enviarse actividades, las mismas no deben corresponder a distintos grupos según RG. Es decir, si informa actividades Cárnicas, no pueden estar combinadas con actividades Harineras, de Tabaco, etc. <FeCAEARegInfReq><Actividades><Actividad><Id> 16005 De enviarse actividades, las mismas deben encontrarse activas para el emisor del comprobante. Ver método FEParamGetActividades. <FeCAEARegInfReq><Actividades><Actividad><Id> / <Concepto> 

###### 16006 

De enviarse actividades pertenecientes al grupo de actividades Cárnicas, las mismas deben enviarse con comprobantes con Concepto del tipo Producto o Productos y Servicios. **Controles que se realizan sobre el elemento <Actividades> y <CbtesAsoc> Validaciones Excluyentes** <FeCAEARegInfReq><Actividades><Actividad><Id> /<CbtesAsoc><CbteAsoc><Tipo> 

###### 16007 

 Si las actividades informadas corresponden a actividades Cárnicas, informar remito asociado 995 Remito Electrónico Cárnico. <FeCAEARegInfReq><Actividades><Actividad><Id> /<CbtesAsoc><CbteAsoc><Tipo> 

###### 16008 

 Si las actividades informadas corresponden a actividades Harinas, informar remito asociado 993 Remito Electrónico Harinero Automotor o 994 Remito Electrónico Harinero Ferroviario. <FeCAEARegInfReq><Actividades><Actividad><Id> /<CbtesAsoc><CbteAsoc><Tipo> 

###### 16009 

 Si las actividades informadas corresponden a actividades Tabaco en Hebras, informar remito asociado 88 Remito Electrónico de Tabaco 

, <FeCAEARegInfReq><Actividades><Actividad><Id> /<CbtesAsoc><CbteAsoc><Tipo> 

###### 16007 

 Si las actividades informadas corresponden a actividades Cárnicas, informar remito asociado 995 Remito Electrónico Cárnico. Acondicionado. <FeCAEARegInfReq><Actividades><Actividad><Id> /<CbtesAsoc><CbteAsoc><Tipo> 

###### 16010 

 Si informa remito 995 Remito Electrónico Cárnico, es obligatorio informar una actividad Cárnica. <FeCAEARegInfReq><Actividades><Actividad><Id> /<CbtesAsoc><CbteAsoc><Tipo> 

###### 16011 

 Si informa remito 993 Remito Electrónico Harinero Automotor o 994 Remito Electrónico Harinero – Ferroviario, es obligatgorio informar una actividad Harinera. <FeCAEARegInfReq><Actividades><Actividad><Id> /<CbtesAsoc><CbteAsoc><Tipo> 

###### 16012 

 Si informa remito 88 Remito Electrónico de Tabaco Acondicionado., es obligatorio informar una actividad correspondiente a Tabaco Acondicionado. <FeCAEARegInfReq><Actividades><Actividad><Id> /<CbtesAsoc><CbteAsoc 

###### 16013 

 Si informa actividades indicadas en la RG, es obligatorio informar comprobantes asociados. <CbteAsoc><Tipo> / <CbteAsoc><PtoVta> / 

<CbteAsoc><Nro> (^16014) Si informa comprobantes asociados, y sus códigos corresponden a 91, 88, 988, 990, 991, 993, 994, 995, 996, 997, los mismos no deben encontrarse asociado a otro comprobante. 
