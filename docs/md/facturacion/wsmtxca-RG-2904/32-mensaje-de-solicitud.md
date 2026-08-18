##### Mensaje de Solicitud 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarCAEANoUtilizadoRequest>
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
    </ser:informarCAEANoUtilizadoRequest>
  </soapenv:Body>
  ,Informar un CAEA no utilizado (informarCAEANoUtilizado)
</soapenv:Envelope>
```
 Donde: **<authRequest>** del tipo **AuthRequestType.** Contiene información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<informarCAEANoUtilizadoRequest>** es del tipo **InformarCAEANoUtilizadoRequestType Campo Descripción Obligatorio Tipo Longitud** CAEA Especifica el CAEA que se informa como no utilizado. S long 14 

, Informar un CAEA no utilizado (informarCAEANoUtilizado) 
