##### Mensaje de respuesta 

 <?xml version=”1.0” encoding=”utf-8”?> 
```xml
<soap:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchemainstance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap=”http://schemas.xmlsoap.org/soap/envelope/”>
  <soap:Body>
    <FEParamGetTiposIvaResponse xmlns=”http://ar.gov.afip.dif.fev1/”>
      <FEParamGetTiposIvaResult>
        <ResultGet>
          <IvaTipo>
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
          </IvaTipo>
          <IvaTipo>
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
          </IvaTipo>
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

      </FEParamGetTiposIvaResult>
      ,
    </FEParamGetTiposIvaResponse>
  </soap:Body>
</soap:Envelope>
```
 donde: **FEParamGetTiposIvaResult: Campo Detalle Obligatorio** ResultGet Información sobre los tipos de alícuotas permitidas. Contiene los datos IvaTipo 

###### N 

Errors Información de errores detectados N Events Información de eventos N **IvaTipo Campo Tipo Detalle Obligatorio** Id Int (2) Tipo de IVA S Desc String (250) Descripción S FchDesde String (8) Fecha de vigencia desde S FchHasta String (8) Fecha de vigencia hasta N 
