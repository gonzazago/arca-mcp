##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:solicitarCAEARequest>
      <authRequest>
        <token>
          string
        </token>
        ,Informar un Comprobante CAEA (informarComprobanteCAEA)
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      <solicitudCAEA>
        <periodo>
          int
        </periodo>
        <orden>
          short
        </orden>
      </solicitudCAEA>
    </ser:solicitarCAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<solicitudCAEA>** es del tipo **SolicitudCAEAType** Se debe indicar el período y orden para la cual se solicita el CAEA. **<solicitudCAEA> Campo / Grupo Descripción Obligatorio Tipo Longitud** periodo Indica año y el mes al que corresponde el CAEA. Formato AAAAMM S int 6 orden Especifica el orden de secuencia en el trascurso del S short 1 

,Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Descripción Obligatorio Tipo Longitud** tiempo. Valores permitidos: 1: primer quincena 2: segunda quincena 

, Informar un Comprobante CAEA (informarComprobanteCAEA) 
