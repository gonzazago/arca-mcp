##### (FEParamGetTiposConcepto) 

 Este método devuelve los tipos de conceptos posibles en este WS. Dirección URL (Homologación) Este servicio se llama desde: https://wswhomo.afip.gov.ar/wsfev1/service.asmx?op= EparamGetTiposConcepto Mensaje de solicitud Recibe las credenciales de autenticación y la cuit del usuario representado. 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    <ar:FEParamGetTiposConcepto>
      <ar:Auth>
        <ar:Token>
          sring
        </ar:Token>
        <ar:Sign>
          string
        </ar:Sign>
        <ar:Cuit>
          long
        </ar:Cuit>
      </ar:Auth>
    </ar:FEParamGetTiposConcepto>
  </soapenv:Body>
</soapenv:Envelope>
```
 donde: Campo Detalle Obligatorio Auth Información de la autenticación. Contiene los datos de Token, Sign , Cuit 

###### S 

 Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S 

,##### Mensaje de respuesta 

<?xml version=”1.0” encoding=”utf-8”?> 
```xml
<soap:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchemainstance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap=”http://schemas.xmlsoap.org/soap/envelope/”>
  <soap:Body>
    <FEParamGetTiposConceptoResponse xmlns=”http://ar.gov.afip.dif.fev1/”>
      <FEParamGetTiposConceptoResult>
        <ResultGet>
          <ConceptoTipo>
            <Id>
              **int**
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
          </ConceptoTipo>
          <ConceptoTipo>
            <Id>
              **int**
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
          </ConceptoTipo>
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

      </FEParamGetTiposConceptoResult>
    </FEParamGetTiposConceptoResponse>
  </soap:Body>
</soap:Envelope>
```
 donde: **_FEParamGetTiposConceptoResult_** **Campo Detalle Obligatorio** ResultGet Información de los diferentes tipos de conceptos permitidos. N 

,Errors Información de errores detectados N Events Información de eventos N **ResultGet:** Detalle de los tipos de conceptos; esta compuesto por los siguientes campos: donde: **Campo Tipo Detalle Obligatorio** Id Int (2) Código de concepto S Desc String (250) Descripción S FchDesde String (8) Fecha de vigencia desde S FchHasta String (8) Fecha de vigencia hasta N 
