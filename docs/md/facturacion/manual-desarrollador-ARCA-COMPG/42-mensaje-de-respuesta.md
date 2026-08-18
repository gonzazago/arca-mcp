##### Mensaje de respuesta 

 <?xml version=”1.0” encoding=”utf-8”?> 
```xml
<soap:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchema

,instance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap=”http://schemas.xmlsoap.org/soap/envelope/”>
  <soap:Body>
    <FEParamGetTiposTributosResponse xmlns=”http://ar.gov.afip.dif.fev1/”>
      <FEParamGetTiposTributosResult>
        <ResultGet>
          <TributoTipo>
            <Id>
              **short**
            </Id>
            <Desc>
              **string**
            </Desc>
            <FchDesde>
              **string**
            </FchDesde>
            <FchHasta>
              **string**
            </FchHasta>
          </TributoTipo>
          <TributoTipo>
            <Id>
              **short**
            </Id>
            <Desc>
              **string**
            </Desc>
            <FchDesde>
              **string**
            </FchDesde>
            <FchHasta>
              **string**
            </FchHasta>
          </TributoTipo>
        </ResultGet>
        
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

      </FEParamGetTiposTributosResult>
    </FEParamGetTiposTributosResponse>
  </soap:Body>
</soap:Envelope>
```
 donde: **FEParamGetTiposTributosResult: Campo Detalle Obligatorio** ResultGet Información de los tipos de tributos posibles. N Errors Información de errores detectados N Events Información de eventos N 

,**ResultGet:** Detalle de los tipos de tributos; esta compuesto por los siguientes campos: **Campo Tipo Detalle Obligatorio** Id Int (2) Código de Tributo S Desc String (250) Descripción S FchDesde String (8) Fecha de vigencia desde S FchHasta String (8) Fecha de vigencia hasta N 
