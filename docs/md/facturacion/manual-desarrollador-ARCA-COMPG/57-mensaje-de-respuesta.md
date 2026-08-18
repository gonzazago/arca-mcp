##### Mensaje de respuesta 

Retorna el último número de comprobante registrado para el punto de venta y tipo de comprobante enviado. <?xml version=”1.0” encoding=”utf-8”?> 
```xml
<soap:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchema

,instance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap=”http://schemas.xmlsoap.org/soap/envelope/”>
  <soap:Body>
    <FECompUltimoAutorizadoResponse xmlns=”http://ar.gov.afip.dif.FEV1/”>
      <FECompUltimoAutorizadoResult>
        <PtoVta>
          **int**
        </PtoVta>
        <CbteTipo>
          **int**
        </CbteTipo>
        <CbteNro>
          **int**
        </CbteNro>
        
```xml

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

```

        
```xml

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

```

      </FECompUltimoAutorizadoResult>
    </FECompUltimoAutorizadoResponse>
  </soap:Body>
</soap:Envelope>
```
 donde: **FECompUltimoAutorizadoResult** : **Campo Detalle Obligatorio** FECompUltimoAut orizadoResul Información completa del CAEA sin movimientos. Contiene PtoVta, CbteTipo, CbteNro, Errors y Events 

###### S 

 Errors Información de errores detectados N Events Información de eventos N Campo Tipo Detalle Obligatorio PtoVta Int (5) Punto de venta S CbteTipo Int (3) Tipo de comprobante S CbteNro Long (8) Número de comprobante N 

,##### Validaciones, acciones y errores 

Controles aplicados: **Campo / Grupo Código de Error Validación** <PtoVta> 11000 El PtoVta debe ser válido comprendido entre 1 y 99998 <CbteTipo> 11001 Debe de ser algunos de los habilitados en este WS. Consultar método FEParamGetTiposCbte <PtoVta> 11002 Debe ser un punto de venta habilitado en este WS. Consultar método FEParamGetPtosVenta 
