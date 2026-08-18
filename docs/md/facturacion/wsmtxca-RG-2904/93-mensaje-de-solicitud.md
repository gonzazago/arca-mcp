##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposTributoRequest>
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
    </ser:consultarTiposTributoRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: 

,**<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 
