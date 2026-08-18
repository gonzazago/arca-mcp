##### Mensaje de solicitud 

Recibe las credenciales de autenticación y la cuit del usuario representado. 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    <ar:FEParamGetCondicionFrenteIvaReceptor>
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
      <ar:ClaseCmp>
        string
      </ar:ClaseCmp>
    </ar:FEParamGetCondicionFrenteIvaReceptor>
  </soapenv:Body>
</soapenv:Envelope>
```
 donde: **Campo Detalle Obligatorio** Auth Información de la autenticación. Contiene los datos de Token, Sign , Cuit 

###### S 

Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S ClaseCmp Clase de comprobante. Valores posibles A, ALEY (A con leyenda ‘operación sujeta a retención’), B, C o 49 (Bienes Usados). En caso de no informar el dicho campo, el método lista todas las combinaciones posibles de todas las clases de comprobantes. 

###### N 
