##### Mensaje de Solicitud 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarCAEANoUtilizadoPtoVtaRequest>
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
      <CAEA>
        long
      </CAEA>
      <numeroPuntoVenta>
        NumeroPuntoVentaSimpleType
      </numeroPuntoVenta>
    </ser:informarCAEANoUtilizadoPtoVtaRequest>
    ,
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<informarCAEANoUtilizadoPtoVtaRequest>** es del tipo **InformarCAEANoUtilizadoPtoVtaRequestType Campo Descripción Obligatorio Tipo Longitud** CAEA Especifica el CAEA que se informa como no utilizado para el punto de venta indicado S long 14 numeroPuntoVenta Especifica el punto de venta que se informa como no utilizado para el CAEA indicado S NumeroPuntoVentaSimpleType 5 
