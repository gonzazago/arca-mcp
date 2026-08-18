##### Mensaje de respuesta 

 <?xml version="1.0" encoding="utf-8"?> 

,
```xml
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchemainstance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <FEParamGetCondicionIvaReceptorResponse xmlns="http://ar.gov.afip.dif.FEV1/">
      <FEParamGetCondicionIvaReceptorResult>
        <ResultGet>
          <CondicionIvaReceptor>
            <Id>
              int
            </Id>
            <Desc>
              string
            </Desc>
            <Cmp_Clase>
              string
            </Cmp_Clase>
          </CondicionIvaReceptor>
          <CondicionIvaReceptor>
            <Id>
              int
            </Id>
            <Desc>
              string
            </Desc>
            <Cmp_Clase>
              string
            </Cmp_Clase>
          </CondicionIvaReceptor>
          <CondicionIvaReceptor>
            <Id>
              int
            </Id>
            <Desc>
              string
            </Desc>
            <Cmp_Clase>
              string
            </Cmp_Clase>
          </CondicionIvaReceptor>
          <CondicionIvaReceptor>
            <Id>
              int
            </Id>
            <Desc>
              string
            </Desc>
            <Cmp_Clase>
              string
            </Cmp_Clase>
          </CondicionIvaReceptor>
        </ResultGet>
      </FEParamGetCondicionIvaReceptorResult>
    </FEParamGetCondicionIvaReceptorResponse>
  </soap:Body>
</soap:Envelope>
```
 Dónde: **FEParamGetCondicionIvaReceptorResult** : **Campo Detalle Obligatorio** CondicionIvaRece ptor Información sobre la combinación de la condición de iva de receptor y la clase de comprobante permitidas. 

###### N 

Errors Información de errores detectados N Events Información de eventos N **CondicionIvaReceptor:** 

, Campo Tipo Detalle Obligatorio Id Int (3) Identificador de la condicion de IVA del receptor 

###### S 

 Desc String (250) Descripción S Cmp_Clase String (5) Clase de comprobante S 
