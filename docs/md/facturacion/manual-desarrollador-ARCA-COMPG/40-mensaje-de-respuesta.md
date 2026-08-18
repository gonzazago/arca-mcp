##### Mensaje de respuesta 

 <?xml version=”1.0” encoding=”utf-8”?> 
```xml
<soap:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchemainstance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap=”http://schemas.xmlsoap.org/soap/envelope/”>
  <soap:Body>
    <FEParamGetTiposOpcionalResponse xmlns=”http://ar.gov.afip.dif.fev1/”>
      <FEParamGetTiposOpcionalResult>
        <ResultGet>
          <OpcionalTipo>
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
          </OpcionalTipo>
          <OpcionalTipo>
            <Id>
              string
            </Id>
            <Desc>
              string
            </Desc>
            <FchDesde>
              string
            </FchDesde>
            ,
            <FchHasta>
              **string**
            </FchHasta>
          </OpcionalTipo>
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

      </FEParamGetTiposOpcionalResult>
    </FEParamGetTiposOpcionalResponse>
  </soap:Body>
</soap:Envelope>
```
 donde: **_FEParamGetTiposOpcionalResult:_** **Campo Detalle Obligatorio** ResultGet Información de los tipos de datos opcionales N Errors Información de errores detectados N Events Información de eventos N **ResultGet:** Detalle de los tipos de datos opcionales; esta compuesto por los siguientes campos: **Campo Tipo Detalle Obligatorio** Id String (4) Identificador de campo opcional S Desc String (250) Descripción S FchDesde String (8) Fecha de vigencia desde S FchHasta String (8) Fecha de vigencia hasta N 

,##### Recuperador de valores referenciales de códigos de Tipos de Tributos 
