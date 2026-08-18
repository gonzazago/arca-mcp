##### Validaciones del Negocio 

**<consultaComprobanteRequest>...</consultaComprobanteRequest> Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante 1500 Podrá ser: 1 – Factura A 2 – Nota de Débito A 3 – Nota de Crédito A 6 – Factura B 7 – Nota de Débito B 8 – Nota de Crédito B 51 – Factura A con leyenda OPERACIÓN SUJETA A RETENCIÓN 52 – Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 – Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN Consultar método _consultarTiposComprobante_ Rechaza numeroPuntoVenta 1501 Debe ser del tipo habilitado para el régimen CAE Codificación de Productos – Web Services ó del régimen CAEA. Consultar método _consultarPuntosVenta, consultarPuntosVentaCAE o consultarPuntosVentaCAEA._ Rechaza 

,Consultar un comprobante autorizado (consultarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante 1503 Deberá obrar en las bases del organismo un comprobante con el tipo, punto de venta y número de comprobante indicados. Rechaza 

,#### Consultar Tipos de Comprobantes (consultarTiposComprobante) 

Este método permite consultar los tipos de comprobantes habilitados en este WS. 
