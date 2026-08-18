##### Dirección URL (Homologación) 

Este servicio se llama desde: https://wswhomo.afip.gov.ar/wsfev1/service.asmx? op=FECompUltimoAutorizado 

,##### Mensaje de solicitud 

Recibe las credenciales de autenticación y la cuit del usuario representado. 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    <ar:FECompUltimoAutorizado>
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
      <ar:PtoVta>
        int
      </ar:PtoVta>
      <ar:CbteTipo>
        int
      </ar:CbteTipo>
    </ar:FECompUltimoAutorizado>
  </soapenv:Body>
</soapenv:Envelope>
```
 donde: **FECompUltimoAutorizado: Campo Detalle Obligatorio** Auth Información de la autenticación. Contiene los datos de Token, Sign y Cuit 

###### S 

 Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S Campo Detalle Obligatorio PtoVta Punto de venta S CbteTipo Tipo de comprobante S 
