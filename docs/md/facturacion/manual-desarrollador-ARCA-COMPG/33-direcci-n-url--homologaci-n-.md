##### Dirección URL (Homologación) 

Este servicio se llama desde: https://wswhomo.afip.gov.ar/wsfev1/service.asmx?op= FEParamGetTiposIva **Mensaje de solicitud** Recibe las credenciales de autenticación y la cuit del usuario representado. 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    <ar:FEParamGetTiposIva>
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
      </ar:Auth>
    </ar:FEParamGetTiposIva>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,donde: **Campo Detalle Obligatorio** Auth Información de la autenticación. Contiene los datos de Token, Sign , Cuit 

###### S 

 Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S 
