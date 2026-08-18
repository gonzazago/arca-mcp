##### Mensaje de solicitud 

 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    <ar:FECompConsultar>
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
      <ar:FeCompConsReq>
        <ar:CbteTipo>
          int
        </ar:CbteTipo>
        ,
        <ar:CbteNro>
          long
        </ar:CbteNro>
        <ar:PtoVta>
          int
        </ar:PtoVta>
      </ar:FeCompConsReq>
    </ar:FECompConsultar>
  </soapenv:Body>
</soapenv:Envelope>
```
 donde: **Campo Detalle Obligatorio** Auth Información de la autenticación. Contiene los datos de Token, Sign y Cuit 

###### S 

 Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S Campo Detalle Obligatorio FeCompConsReq Información del comprobante que se desea consultar. S Campo Detalle Obligatorio CbteTipo Tipo de Comprobante S CbteNro Número de comprobante S PtoVta Punto de venta S 
