##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCondicionesIVAReceptorRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          string
        </cuitRepresentada>
      </authRequest>
      <consultaCondicionesIVAReceptorRequest>
        ,
        <codigoTipoComprobante>
          short
        </codigoTipoComprobante>
      </consultaCondicionesIVAReceptorRequest>
    </ser:consultarCondicionesIVAReceptorRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 

###### Donde: 

**<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación 

,**Campo Descripción Obligatorio Tipo Longitu d** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentad a CUIT del Contribuyente que realiza la consulta S long 11 consultarCondici onesIVARecepto rRequest Filtros utilizados para realizar la consulta (Tipo de Comprobante a Autorizar) S 

###### ConsultaCondicionesIVARequ 

###### estType 

 -
