##### Mensaje de Solicitud 

###### Esquema 

,
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCAEARequest>
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
    </ser:consultarCAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<consultarCAEARequest>** es del tipo **ConsultarCAEARequestType Campo Descripción Obligatorio Tipo Longitud** CAEA Especifica el CAEA previamente otorgado sobre el S long 14 

, Campo Descripción Obligatorio Tipo Longitud cual se solicita información 
