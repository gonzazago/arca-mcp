##### (FEParamGetTiposCbte) 

Este método permite consultar los tipos de comprobantes habilitados en este WS. **Dirección URL (Homologación)** Este servicio se llama desde: https://wswhomo.afip.gov.ar/wsfev1/service.asmx?op= FEParamGetTiposCbte **Mensaje de solicitud** Recibe las credenciales de autenticación y la cuit del usuario representado. 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    <ar:FEParamGetTiposCbte>
      <ar:Auth>
        <ar:Token>
          **string**
        </ar:Token>
        <ar:Sign>
          **string**
        </ar:Sign>
        <ar:Cuit>
          **long**
        </ar:Cuit>
      </ar:Auth>
    </ar:FEParamGetTiposCbte>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **Campo Detalle Obligatorio** Auth Información de la autenticación. Contiene los datos de Token, Sign , Cuit 

###### S 

Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S **Mensaje de respuesta** Retorna el universo de tipos de comprobante validos. <?xml version=”1.0” encoding=”utf-8”?> 
```xml
<soap:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchemainstance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap=”http://schemas.xmlsoap.org/soap/envelope/”>
  <soap:Body>
    <FEParamGetTiposCbteResponse 

,xmlns=”http://ar.gov.afip.dif.fev1/”>
      <FEParamGetTiposCbteResult>
        <ResultGet>
          <CbteTipo>
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
          </CbteTipo>
          <CbteTipo>
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
          </CbteTipo>
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

      </FEParamGetTiposCbteResult>
    </FEParamGetTiposCbteResponse>
  </soap:Body>
</soap:Envelope>
```
 Donde: **FEParamGetTiposCbteResult: Campo Detalle Obligatorio** ResultGet Información de los diferentes tipos de comprobantes permitidos. 

###### N 

Errors Información de errores detectados N Events Información de eventos N **ResultGet:** Detalle de los tipos de comprobantes; esta compuesto por los siguientes campos: 

,**Campo Tipo Detalle Obligatorio** Id Int (3) Código de comprobante S 

Desc String (250) Descripción (^) S FchDesde String (8) Fecha de vigencia desde (^) S FchHasta String (8) Fecha de vigencia hasta (^) N 
