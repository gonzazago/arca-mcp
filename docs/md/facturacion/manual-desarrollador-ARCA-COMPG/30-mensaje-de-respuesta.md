##### Mensaje de respuesta 

 <?xml version=”1.0” encoding=”utf-8”?> 
```xml
<soap:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchemainstance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap=”http://schemas.xmlsoap.org/soap/envelope/”>
  <soap:Body>
    <FEParamGetTiposDocResponse xmlns=”http://ar.gov.afip.dif.fev1/”>
      <FEParamGetTiposDocResult>
        <ResultGet>
          <DocTipo>
            <Id>
              int
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
          </DocTipo>
          <DocTipo>
            <Id>
              int
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
          </DocTipo>
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

      </FEParamGetTiposDocResult>
    </FEParamGetTiposDocResponse>
  </soap:Body>
</soap:Envelope>
```
 

,donde: FEParamGetTiposDocResult: **Campo Detalle Obligatorio** ResultGet Información sobre los tipos de documento aceptados. N Errors Información de errores detectados N Events Información de eventos N **ResultGet: Campo Tipo Detalle Obligatorio** Id Int (2) Código de tipo de documento S Desc String (250) Descripción S FchDesde String(8) Fecha de vigencia desde S FchHasta String (8) Fecha de vigencia hasta N 
