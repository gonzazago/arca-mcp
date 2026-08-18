### Autenticación 

Para utilizar cualquiera de los métodos disponibles en el presente WS se deberá remitir la información obtenida del WSAA resultante del proceso de autenticación, mediante el siguiente esquema: 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <...Request>
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
      . . . . 

,
    </...Request>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,Donde: **<authRequest** > es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT de la Contribuyente representada o emisora S long 11 Se validará en todos los casos que la CUIT solicitante se encuentre entre sus representados. El Token y el Sign remitidos deberán ser válidos y no estar vencidos. De no superarse algunas de las situaciones descriptas anteriormente retornará un error del tipo excepcional. 

,### Operaciones 
