##### Mensaje de respuesta 

 <?xml version=”1.0” encoding=”utf-8”?> 
```xml
<soap:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchemainstance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap=”http://schemas.xmlsoap.org/soap/envelope/”>
  <soap:Body>
    <FEParamGetTiposMonedasResponse xmlns=”http://ar.gov.afip.dif.fev1/”>
      <FEParamGetTiposMonedasResult>
        <ResultGet>
          <Moneda>
            <Id>
              string
            </Id>
            <Desc>
              string
            </Desc>
            <FchDesde>
              string
            </FchDesde>
            <FchHasta>
              string
            </FchHasta>
          </Moneda>
          <Moneda>
            <Id>
              string
            </Id>
            <Desc>
              string
            </Desc>
            <FchDesde>
              string
            </FchDesde>
            <FchHasta>
              string
            </FchHasta>
          </Moneda>
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

        ,
        
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

      </FEParamGetTiposMonedasResult>
    </FEParamGetTiposMonedasResponse>
  </soap:Body>
</soap:Envelope>
```
 donde: **FEParamGetTiposMonedasResult: Campo Detalle Obligatorio** ResultGet Información de los tipos de monedas disponibles. N Errors Información de errores detectados N Events Información de eventos N **ResultGet:** Detalle de los tipos de monedas; esta compuesto por los siguientes campos: **Campo Tipo Detalle Obligatorio** Id String (3) Código de moneda S Desc String (250) Descripción S FchDesde String (8) Fecha de vigencia desde S FchHasta String (8) Fecha de vigencia hasta N 
