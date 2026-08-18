##### Mensaje de respuesta 

Retorna la información del comprobante o lote de comprobantes de ingreso. Ante cualquier anomalía se retorna un array errores detectados (Errors) o un array de observaciones según corresponda. 
```xml
<soap:Envelope xmlns:soap=”http://www.w3.org/2003/05/soap-envelope” xmlns:ar=”http://ar.gov.afip.dif.fev1/”>
  <soap:Header/>
  <soap:Body>
    <FECAEARegInformativoResponse>
      <FECAEARegInformativoResult>
        <FeCabResp>
          <Cuit>
            **long**
          </Cuit>
          <PtoVta>
            **int**
          </PtoVta>
          <CbteTipo>
            **int**
          </CbteTipo>
          <FchProceso>
            **string**
          </FchProceso>
          <CantReg>
            **int**
          </CantReg>
          <Resultado>
            **string**
          </Resultado>
        </FeCabResp>
        <FeDetResp>
          <FECAEADetResponse>
            <Concepto>
              **int**
            </Concepto>
            <DocTipo>
              **int**
            </DocTipo>
            <DocNro>
              **long**
            </DocNro>
            <CbteDesde>
              **long**
            </CbteDesde>
            <CbteHasta>
              **long**
            </CbteHasta>
            <Resultado>
              **string**
            </Resultado>
            <CAEA>
              **string**
            </CAEA>
            <CbteFch>
              **string**
            </CbteFch>
            <Obs>
              <Observaciones>
                <Code>
                  **int**
                </Code>
                <Msg>
                  **string**
                </Msg>
              </Observaciones>
            </Obs>
          </FECAEADetResponse>
        </FeDetResp>
        
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
</Events>
```

```

        
```xml

```xml
<Errors>
  ,
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

      </FECAEARegInformativoResult>
    </FECAEARegInformativoResponse>
  </soap:Body>
</soap:Envelope>
```
 Dónde: **Campo Detalle Obligatorio** FECAEARegInformativo Result Información del comprobante o lote de comprobantes de ingreso, S FeCabResp Información de la cabecera del comprobante o lote de comprobantes enviada en el request + atributos adicionales como resultado y fecha de proceso. 

###### S 

 FeDetResp / FECAEADetResponse Información del detalle del comprobante o lote de comprobantes de ingreso + atributos adicionales como ser: resultado del procesamiento. Fecha del comprobante. Observaciones sobre el comprobante. 

###### S 

Errors Información de errores detectados (^) N Events Información de eventos (^) N **FeCabResp** : La cabecera del comprobante o lote de comprobantes de ingreso estará compuesta por los siguientes campos: **Campo Tipo Detalle Obligatorio** Cuit Long (11) Cuit del contribuyente S PtoVta Int (5) Punto de venta S CbteTipo Int (3) Tipo de comprobante S FchProceso String (14) Fecha de proceso formato yyyymmddhhmiss S CantReg Int (4) Cantidad de registros del detalle del comprobante o lote de comprobantes de ingreso 

###### S 

 Resultado String (1) Resultado S 

,**FeDetResp:** El detalle del comprobante o lote de comprobantes de ingreso estará compuesto por los siguientes campos: **Campo Tipo Detalle Obligatorio** Concepto Int (2) Concepto S DocTipo Int (2) Código de documento identificatorio del comprador 

###### S 

DocNro Long (11) Nro. De identificación del comprador S CbteDesde Long (8) Nro. De comprobante desde S CbteHasta Long (8) Nro. De comprobante registrado hasta S CbteFch String (8) Fecha del comprobante N Resultado String (1) Resultado S CAEA String (14) Código de Autorización electrónico anticipado N Observaciones Array Detalle de observaciones, del comprobante N **Observaciones** : La estructura de datos Obs muestra el detalle de observaciones para un comprobante determinado; estará compuesta por los siguientes campos: **Campo Tipo Detalle Obligatorio** Code Int (5) Código de observación S Msg String (255) Mensaje S 
