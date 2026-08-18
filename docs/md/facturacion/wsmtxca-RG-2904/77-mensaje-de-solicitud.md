##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCotizacionMonedaRequest>
      <authRequest>
        ,
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
      <codigoMoneda>
        string
      </codigoMoneda>
      <fechaCotizacion>
        date
      </fechaCotizacion>
    </ser:consultarCotizacionMonedaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 codigoMoneda Código de la Moneda por la cual se intenta consultar la última cotización disponible. S string 3 fechaCotizacion Fecha para la cual se quiere obtener la Cotización S date 
