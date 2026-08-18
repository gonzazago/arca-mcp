##### Método para informar CAEA sin movimiento (FECAEASinMovimientoInformar) 

Esta operación permite informar a la administración cuales fueron los CAEA’s otorgados que no sufrieron movimiento alguno para un determinado punto de venta. El cliente envía el requerimiento, el cual es atendido por el WS, superadas las validaciones de seguridad se registrara la fecha por la cual se informo la falta de movimientos. **Dirección URL (Homologación)** Este servicio se llama desde: https://wswhomo.afip.gov.ar/wsfev1/service.asmx?op= FECAEASinMovimientoInformar 

,##### Mensaje de solicitud 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    
```xml

```xml
<ar:FECAEASinMovimientoInformar>
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
  <ar:CAEA>
    string
  </ar:CAEA>
</ar:FECAEASinMovimientoInformar>
```

```

  </soapenv:Body>
</soapenv:Envelope>
```
 donde: **Campo Detalle Obligatorio** Auth Información de la autenticación. Contiene los datos de Token, Sign y Cuit 

###### S 

 Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S Campo Detalle Obligatorio PtoVta Punto de Venta para el que no se utilizó el CAEA informado S CAEA CAEA que se está informando como no utilizado para el punto de venta indicado 

###### S 

**Mensaje de respuesta** Retorna el resultado del proceso de informar un CAEA como no utilizado. <?xml version=”1.0” encoding=”utf-8”?> <soap12:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchemainstance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap12=”http://www.w3.org/2003/05/soap-envelope”> <soap12:Body> <FECAEASinMovimientoResponse xmlns=”http://ar.gov.afip.dif.FEV1/”> 

,<FECAEASinMovimientoResult> <CAEA> **string** </CAEA> <FchProceso> **string** </FchProceso> <Resultado> **string** </Resultado> <PtoVta> **int** </PtoVta> 
```xml
<Errors>
  <Err>
    <Code>
      **int**
    </Code>
    <Msg>
      **string**
    </Msg>
  </Err>
  <Err>
    <Code>
      **int**
    </Code>
    <Msg>
      **string**
    </Msg>
  </Err>
</Errors>
```
 
```xml
<Events>
  <Evt>
    <Code>
      **int**
    </Code>
    <Msg>
      **string**
    </Msg>
  </Evt>
  <Evt>
    <Code>
      **int**
    </Code>
    <Msg>
      **string**
    </Msg>
  </Evt>
</Events>
```
 </FECAEASinMovimientoResult> </FECAEASinMovimientoResponse> </soapenv:Body> </soapenv:Envelope> donde: **Campo Detalle Obligatorio** FECAEASinMovimi entoResult Información completa del CAEA sin movimientos. Contiene los datos CAEA, FchProceso, Resultado, PtoVta, Errors y Events. 

###### S 

Errors Información de errores detectados N Events Información de eventos N **FECAEASinMovimientoResult:** El objeto resultante informante del resultado del proceso contiene los siguientes campos: **Campo Tipo Detalle Obligatorio** CAEA String (14) Código de Autorización electrónico anticipado 

###### S 

, FchProceso String (8) Fecha de Procesamiento del CAEA informado como sin movimientos 

###### N 

 Resultado String (1) Aprobado o Rechazado N PtoVta Int (5) Punto de venta vinculado al CAEA informado. 

###### S 
