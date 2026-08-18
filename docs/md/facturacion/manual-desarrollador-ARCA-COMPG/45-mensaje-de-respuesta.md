##### Mensaje de respuesta 

 <?xml version=”1.0” encoding=”utf-8”?> 
```xml
<soap:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchemainstance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap=”http://schemas.xmlsoap.org/soap/envelope/”>
  <soap:Body>
    <FEParamGetPtosVentaResponse xmlns=”http://ar.gov.afip.dif.FEV1/”>
      <FEParamGetPtosVentaResult>
        <ResultGet>
          <PtoVenta>
            <Nro>
              int
            </Nro>
            <EmisionTipo>
              string
            </EmisionTipo>
            <Bloqueado>
              string
            </Bloqueado>
            <FchBaja>
              string
            </FchBaja>
          </PtoVenta>
          <PtoVenta>
            <Nro>
              int
            </Nro>
            <EmisionTipo>
              string
            </EmisionTipo>
            <Bloqueado>
              string
            </Bloqueado>
            <FchBaja>
              string
            </FchBaja>
          </PtoVenta>
        </ResultGet>
        
```xml

```xml
<Errors>
  <Err>
    <Code>
      int
    </Code>
    <Msg>
      string
    </Msg>
  </Err>
  <Err>
    <Code>
      int
    </Code>
    <Msg>
      string
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
      int
    </Code>
    <Msg>
      string
    </Msg>
  </Evt>
  <Evt>
    <Code>
      int
    </Code>
    <Msg>
      string
    </Msg>
  </Evt>
</Events>
```

```

      </FEParamGetPtosVentaResult>
    </FEParamGetPtosVentaResponse>
  </soap:Body>
  ,
</soap:Envelope>
```
 donde: **_FEParamGetPtosVentaResult:_** **Campo Detalle Obligatorio** ResultGet Información de los puntos de venta electrónicos habilitados para CAE o CAEA. Contiene el dato PtoVenta 

###### N 

PtoVenta Información sobre los puntos de venta S Errors Información de errores detectados N Events Información de eventos N PtoVenta: Detalle de los tipos puntos de venta electrónicos; esta compuesto por los siguientes campos: **Campo Tipo Detalle Obligatorio** Nro Int (5) Punto de venta S EmisionTipo String (8) Identifica si es punto de venta para CAE o CAEA 

###### S 

Bloqueado String (1) Indica si el punto de venta esta bloqueado. De darse esta situación se deberá ingresar al ABM de puntos de venta a regularizar la situación Valores S o N 

###### S 

FchBaja String (8) Indica la fecha de baja en caso de estarlo N 
