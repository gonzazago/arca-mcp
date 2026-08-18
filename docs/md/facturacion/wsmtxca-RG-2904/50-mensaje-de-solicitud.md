##### Mensaje de Solicitud 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUltimoComprobanteAutorizadoRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      ,
      <consultaUltimoComprobanteAutorizadoRequest>
        <codigoTipoComprobante>
          short
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          NumeroPuntoVentaSimpleType
        </numeroPuntoVenta>
      </consultaUltimoComprobanteAutorizadoRequest>
    </ser:consultarUltimoComprobanteAutorizadoRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType** Contiene la información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<consultaUltimoComprobanteAutorizadoRequest>** es del tipo **ConsultaUltimoComprobanteAutorizadoRequestType Campo Descripción Oblig Tipo Longitud** codigoTipoComprobante Tipo de comprobante que se desea consultar S short 3 numeroPuntoVenta Punto de venta para el cual se requiera conocer el último número de comprobante autorizado. S NumeroPuntoVent aSimpleType 5 
