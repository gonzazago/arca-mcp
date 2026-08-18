##### Dirección URL (Homologación) 

Este servicio se llama desde: https://wswhomo.afip.gov.ar/wsfev1/service.asmx?op= FECAEASinMovimientoConsultar 

,##### Mensaje de solicitud 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    
```xml

```xml
<ar:FECAEASinMovimientoConsultar>
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
  <ar:CAEA>
    string
  </ar:CAEA>
  <ar:PtoVta>
    int
  </ar:PtoVta>
</ar:FECAEASinMovimientoConsultar>
```

```

  </soapenv:Body>
</soapenv:Envelope>
```
 dónde: **Campo Detalle Obligatorio** Auth Información de la autenticación. Contiene los datos de Token, Sign y Cuit 

###### S 

Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S **Campo Detalle Obligatorio** CAEA CAEA otorgado, e identificado como “Sin Movimientos” para determinados puntos de venta. 

###### S 

PtoVta Punto de venta vinculado al CAEA informado. S 
