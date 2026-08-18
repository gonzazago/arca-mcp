##### (FEParamGetTiposTributos) 

Devuelve los posibles códigos de tributos que puede contener un comprobante y su descripción. **Dirección URL (Homologación)** Este servicio se llama desde: https://wswhomo.afip.gov.ar/wsfev1/service.asmx?op=FEParamGetTiposTributos **Mensaje de solicitud** Recibe las credenciales de autenticación y la cuit del usuario representado. 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    <ar:FEParamGetTiposTributos>
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
    </ar:FEParamGetTiposTributos>
  </soapenv:Body>
</soapenv:Envelope>
```
 donde: **Campo Detalle Obligatorio** Auth Información de la autenticación. Contiene los datos de Token, Sign , Cuit 

###### S 

 Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S 
