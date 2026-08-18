##### Ejemplo para “Consultar el Último Comprobante Autorizado” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUltimoComprobanteAutorizadoRequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un tring
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <consultaUltimoComprobanteAutorizadoRequest>
        <codigoTipoComprobante>
          1
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          4000
        </numeroPuntoVenta>
      </consultaUltimoComprobanteAutorizadoRequest>
    </ser:consultarUltimoComprobanteAutorizadoRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUltimoComprobanteAutorizadoResponse>
      ,
      <numeroComprobante>
        1
      </numeroComprobante>
    </ser:consultarUltimoComprobanteAutorizadoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,##### Validaciones del Negocio 

**<consultaUltimoComprobanteAutorizadoRequest > ...</consultaUltimoComprobanteAutorizadoRequest> Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante 1500 Podrá ser: 1 – Factura A 2 – Nota de Débito A 3 – Nota de Crédito A 6 – Factura B 7 – Nota de Débito B 8 – Nota de Crédito B 51 – Factura A con leyenda OPERACIÓN SUJETA A RETENCIÓN 52 – Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 – Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN Consultar método _consultarTiposComprobante_ Rechaza numeroPuntoVenta 1501 Debe ser del tipo habilitado para el régimen CAE Codificación de Productos – Web Services ó del régimen CAEA. Consultar método _consultarPuntosVenta, consultarPuntosVentaCAE o consultarPuntosVentaCAEA._ Rechaza codigoTipoComprobante / numeroPuntoVenta 1502 Debe obrar en las bases del organismo al menos un comprobante emitido con el tipo de comprobante y punto de ventas indicados. Rechaza 

,,#### Consultar un comprobante autorizado (consultarComprobante) 

Este método permite consultar los datos de un comprobante previamente autorizado, ya sea del tipo Código de Autorización CAE ó CAEA. En la solicitud se enviará el tipo de comprobante, punto de venta y número de comprobante que se desea consultar. De ser estos datos válidos se devolverán todos los datos asociados a ese comprobante, caso contrario retornará el error asociado. 
