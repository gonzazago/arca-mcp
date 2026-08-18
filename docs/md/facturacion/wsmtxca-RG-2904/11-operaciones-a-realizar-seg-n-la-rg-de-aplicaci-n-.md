#### Operaciones a realizar según la RG de aplicación. 

- Para “CAE - Codificación de Productos - opción Factura con Detalle” aplican los siguientes métodos:      autorizarComprobante      consultarPuntosVentaCAE 

- Para “CAEA - Codificación de Productos - opción Factura con Detalle” aplican los siguientes métodos:      solicitarCAEA      informarComprobanteCAEA      consultarPuntosVentaCAEA      informarCAEANoUtilizado      informarCAEANoUtilizadoPtoVta      consultarPtosVtaCAEANoInformados      consultarCAEA      consultarCAEAEntreFechas 

- Para ambos:      consultarAlicuotasIVA      consultarComprobante      consultarCondicionesIVA      consultarCondicionesIVAReceptor      consultarCotizacionMoneda      consultarMonedas      consultarPuntosVenta      consultarTiposComprobante      consultarTiposDocumento      consultarTiposTributo      consultarUltimoComprobanteAutorizado      consultarUnidadesMedida      consultarTiposDatosAdicionales      consultarActividadesVigentes 

, dummy Un contribuyente sólo necesita implementar un cliente para los métodos del WS correspondientes a la RG por la cual esté alcanzado. Por ejemplo, si optó por CAEA no es necesario que implemente soporte para los métodos autorizarComprobante y consultarPuntosVentaCAE. 

,#### Autorizar un Comprobante CAE (autorizarComprobante) 

El sistema cliente envía la información del comprobante que desea autorizar mediante un requerimiento el cual es atendido por WS MTXCA pudiendo producirse las siguientes situaciones:  Supere todas las validaciones, el comprobante es aprobado, se asigna el CAE y su respectiva fecha de vencimiento,  No supera alguna de las validaciones no excluyentes, el comprobante es aprobado con observaciones, se le asigna el CAE con la fecha de vencimiento,  No supere alguna de las validaciones excluyentes, el comprobante no es aprobado y la solicitud es rechazada. Cabe aclarar que las validaciones excluyentes son aquellas que en el caso de no ser superadas provocan un rechazo y las validaciones no excluyentes aprueban la solicitud pero con observaciones. 
