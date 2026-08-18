##### Mensaje de Solicitud 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCAEAEntreFechasRequest>
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
      <fechaDesde>
        date
      </fechaDesde>
      <fechaHasta>
        date
      </fechaHasta>
    </ser:consultarCAEAEntreFechasRequest>
  </soapenv:Body>
  ,
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<consultarCAEAEntreFechasRequest>** es del tipo **ConsultarCAEAEntreFechasRequestType Campo Descripción Obligatorio Tipo Longitud** fechaDesde Especifica la fecha de inicio (inclusive) del rango que se quiere consultar S date -fechaHasta Especifica la fecha de fin (inclusive) del rango que se quiere consultar S date -
