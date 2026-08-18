##### Mensaje de solicitud 

Recibe las credenciales de autenticación y la cuit del usuario representado. 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    <ar:FECompTotXRequest>
      <ar:Auth>
        <ar:Token>
          string
        </ar:Token>
        <ar:Sign>
          string
        </ar:Sign>
        <ar:Cuit>
          long
        </ar:Cuit>
        ,
      </ar:Auth>
    </ar:FECompTotXRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 donde: **Campo Detalle Obligatorio** Auth Información de la autenticación. Contiene los datos de Token, Sign y Cuit 

###### S 

 Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S 
