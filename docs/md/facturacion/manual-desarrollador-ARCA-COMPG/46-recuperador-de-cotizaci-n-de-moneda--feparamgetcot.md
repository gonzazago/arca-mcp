##### Recuperador de cotización de moneda (FEParamGetCotizacion) 

Retorna la última cotización de la base de datos aduanera de la moneda ingresada. Este valor es orientativo. **Dirección URL (Homologación)** Este servicio se llama desde: https://wswhomo.afip.gov.ar/wsfev1/service.asmx?op= FEParamGetCotizacion 

,**Mensaje de solicitud** Recibe las credenciales de autenticación, cuit del usuario representado y el código de moneda. 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    <ar:FEParamGetCotizacion>
      <ar:Auth>
        <ar:Token>
          string
        </ar:Token>
        <ar:Sign>
          string
        </ar:Sign>
        <ar:Cuit>
          long
        </ar:Cuit>
      </ar:Auth>
      <ar:MonId>
        string
      </ar:MonId>
      <!--Optional:-->
      <ar:FchCotiz>
        string
      </ar:FchCotiz>
    </ar:FEParamGetCotizacion>
  </soapenv:Body>
</soapenv:Envelope>
```
 donde: **Campo Detalle Obligatorio** Auth Información de la autenticación. Contiene los datos de Token, Sign , Cuit 

###### S 

 Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S Campo Detalle Obligatorio 

MonId Código de moneda de la que se solicita cotización. (^) S FchCotiz Fecha a la cual se consulta la cotización de la moneda ingresada 

###### N 

**Mensaje de respuesta** <?xml version=”1.0” encoding=”utf-8”?> 
```xml
<soap:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchemainstance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap=”http://schemas.xmlsoap.org/soap/envelope/”>
  <soap:Body>
    <FEParamGetCotizacionResponse 

,xmlns=”http://ar.gov.afip.dif.FEV1/”>
      <FEParamGetCotizacionResult>
        <ResultGet>
          <MonId>
            **string**
          </MonId>
          <MonCotiz>
            **double**
          </MonCotiz>
          <FchCotiz>
            **string**
          </FchCotiz>
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

      </FEParamGetCotizacionResult>
    </FEParamGetCotizacionResponse>
  </soap:Body>
</soap:Envelope>
```
 donde: **FEParamGetCotizacionResult: Campo Detalle Obligatorio** ResultGet cotización de la moneda solicitada y fecha de la misma S Errors Información de errores detectados N Events Información de eventos N 

,**ResultGet: Campo Tipo Detalle Obligatorio** MonCotiz Double (4+6) Cotización de la moneda N MonId String (3) Código de moneda S FchCotiz String (8) Fecha de la cotización. Formato yyyymmdd 

###### N 
