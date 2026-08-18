##### Mensaje de respuesta 

<?xml version="1.0" encoding="utf-8"?> 
```xml
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchemainstance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <FEParamGetTiposPaisesResponse xmlns="http://ar.gov.afip.dif.FEV1/">
      <FEParamGetTiposPaisesResult>
        <ResultGet>
          <PaisTipo>
            <Id>
              int
            </Id>
            <Desc>
              string
            </Desc>
          </PaisTipo>
          <PaisTipo>
            <Id>
              int
            </Id>
            <Desc>
              string
            </Desc>
          </PaisTipo>
          <PaisTipo>
            <Id>
              int
            </Id>
            <Desc>
              string
            </Desc>
          </PaisTipo>
          <PaisTipo>
            <Id>
              int
            </Id>
            <Desc>
              string
            </Desc>
          </PaisTipo>
        </ResultGet>
      </FEParamGetTiposPaisesResult>
    </FEParamGetTiposPaisesResponse>
  </soap:Body>
</soap:Envelope>
```
 dónde: **FEParamGetTiposPaisesResult** : **Campo Detalle Obligatorio** ResultGet Información sobre los tipos de países aceptados. N Errors Información de errores detectados N Events Información de eventos N **ResultGet: Campo Tipo Detalle Obligatorio** Id Int (3) Código de país S 

, Desc String (250) Descripción S 
