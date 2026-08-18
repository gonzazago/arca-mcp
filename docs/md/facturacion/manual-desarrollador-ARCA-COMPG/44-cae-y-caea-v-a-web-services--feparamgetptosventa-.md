##### CAE y CAEA vía Web Services (FEParamGetPtosVenta) 

Este método permite consultar los puntos de venta para ambos tipos de Código de Autorización (CAE y CAEA) gestionados previamente por la CUIT emisora. **Dirección URL (Homologación)** Este servicio se llama desde: https://wswhomo.afip.gov.ar/wsfev1/service.asmx?op= FEParamGetPtosVenta **Mensaje de solicitud** Recibe las credenciales de autenticación, cuit del usuario representado. 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    <ar:FEParamGetPtosVenta>
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
    </ar:FEParamGetPtosVenta>
  </soapenv:Body>
</soapenv:Envelope>
```
 donde: **Campo Detalle Obligatorio** Auth Información de la autenticación. Contiene los datos de S 

, Campo Detalle Obligatorio Token, Sign , Cuit Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S 
