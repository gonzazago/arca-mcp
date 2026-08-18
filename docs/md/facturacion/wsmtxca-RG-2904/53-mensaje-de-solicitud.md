##### Mensaje de Solicitud 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <consultarComprobanteRequest>
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
      <consultaComprobanteRequest>
        ,Consultar un comprobante autorizado (consultarComprobante)
        <codigoTipoComprobante>
          short
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          NumeroPuntoVentaSimpleType
        </numeroPuntoVenta>
        <numeroComprobante>
          NumeroComprobanteSimpleType
        </numeroComprobante>
      </consultaComprobanteRequest>
    </consultarComprobanteRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>...</authRequest>** contiene la información referente a la autenticación **Campo / Grupo Descripción Obliga torio Tipo Longitud** Token Token devuelto por el WSAA S string -Sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<consultaComprobanteRequest>** es del tipo **ConsultaComprobanteRequestType,** identifica al comprobante que se desea consultar **Campo Descripción Oblig Tipo Longitud** codigoTipoComprobante Tipo de comprobante que se desea consultar S short 3 numeroPuntoVenta Número de punto de venta al que corresponde el comprobante que se desea consultar S NumeroPuntoVenta SimpleType 5 numeroComprobante Número del comprobante que se está consultando S NumeroComprobant eSimpleType 8 

, Consultar un comprobante autorizado (consultarComprobante) 
