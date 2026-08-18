##### Mensaje de respuesta 

 <?xml version=”1.0” encoding=”utf-8”?> 
```xml
<soap:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchemainstance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap=”http://schemas.xmlsoap.org/soap/envelope/”>
  <soap:Body>
    <FECompTotXRequestResponse xmlns=”http://ar.gov.afip.dif.FEV1/”>
      <FECompTotXRequestResult>
        <RegXReq>
          int
        </RegXReq>
        
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

      </FECompTotXRequestResult>
    </FECompTotXRequestResponse>
  </soap:Body>
</soap:Envelope>
```
 

,Dónde: **FECompTotXRequestResult: Campo Detalle Obligatorio** FECompTotXRequ estResult Contiene los datos RegXReq, Errors y Events. S Errors Información de errores detectados N Events Información de eventos N **Campo Tipo Detalle Obligatorio** RegXReq Int (4) Cantidad máxima de registros que se pueden incluir en un Request de solicitud de CAE e Informar CAEA. 

###### S 
