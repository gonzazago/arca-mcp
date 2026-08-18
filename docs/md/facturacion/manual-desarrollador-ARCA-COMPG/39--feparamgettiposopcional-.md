##### (FEParamGetTiposOpcional) 

Este método permite consultar los códigos y descripciones de los tipos de datos Opcionales que se encuentran habilitados para ser usados en el WS. **Dirección URL (Homologación)** Este servicio se llama desde: https://wswhomo.afip.gov.ar/wsfev1/service.asmx?op= FEParamGetTiposOpcional 

,**Mensaje de solicitud** Recibe las credenciales de autenticación y la cuit del usuario representado. 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    <ar:FEParamGetTiposOpcional>
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
    </ar:FEParamGetTiposOpcional>
  </soapenv:Body>
</soapenv:Envelope>
```
 donde: **Campo Detalle Obligatorio** Auth Información de la autenticación. Contiene los datos de Token, Sign , Cuit 

###### S 

 Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S 
