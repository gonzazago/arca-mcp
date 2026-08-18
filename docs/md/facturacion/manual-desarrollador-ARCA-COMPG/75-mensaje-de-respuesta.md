##### Mensaje de respuesta 

Retorna los datos del Comprobante coincidente con los parámetros ingresados. <soap12:Envelope xmlns:soap="http://www.w3.org/2003/05/soapenvelope" xmlns:ar="http://ar.gov.afip.dif.FEV1/"> <soap12:Header/> <soap12:Body> <FECompConsultarResponse> <FECompConsultarResult> <ResultGet> <Concepto> **int** </Concepto> <DocTipo> **int** </DocTipo> <DocNro> **long** </DocNro> <CbteDesde> **long** </CbteDesde> <CbteHasta> **long** </CbteHasta> <CbteFch> **string** </CbteFch> <ImpTotal> **double** </ImpTotal> 

,<ImpTotConc> **double** </ImpTotConc> <ImpNeto> **double** </ImpNeto> <ImpOpEx> **double** </ImpOpEx> <ImpTrib> **double** </ImpTrib> <ImpIVA> **double** </ImpIVA> <FchServDesde> **string** </FchServDesde> <FchServHasta> **string** </FchServHasta> <FchVtoPago> **string** </FchVtoPago> <MonId> **string** </MonId> <MonCotiz> **double** </MonCotiz> 
```xml
<CbtesAsoc>
  <CbteAsoc>
    <Tipo>
      **int**
    </Tipo>
    <PtoVta>
      **int**
    </PtoVta>
    <Nro>
      **long**
    </Nro>
  </CbteAsoc>
</CbtesAsoc>
```
 
```xml
<Tributos>
  <Tributo>
    <Id>
      **int**
    </Id>
    <Desc>
      **string**
    </Desc>
    <BaseImp>
      **double**
    </BaseImp>
    <Alic>
      **double**
    </Alic>
    <Importe>
      **double**
    </Importe>
  </Tributo>
</Tributos>
```
 
```xml
<Iva>
  <AlicIva>
    <Id>
      **int**
    </Id>
    <BaseImp>
      **double**
    </BaseImp>
    <Importe>
      **double**
    </Importe>
  </AlicIva>
</Iva>
```
 
```xml
<Opcionales>
  <Opcional>
    <Id>
      **string**
    </Id>
    <Valor>
      **string**
    </Valor>
  </Opcional>
</Opcionales>
```
 
```xml
<Compradores>
  <Comprador>
    <DocTipo>
      **int**
    </DocTipo>
    <DocNro>
      **long**
    </DocNro>
    <Porcentaje>
      **double**
    </Porcentaje>
  </Comprador>
</Compradores>
```
 
```xml
<ar:PeriodoAsoc>
  <ar:FchDesde>
    **string**
  </ar:FchDesde>
  <ar:FchHasta>
    **string**
  </ar:FchHasta>
</ar:PeriodoAsoc>
```
 <Resultado> **string** </Resultado> <CodAutorizacion> **string** </CodAutorizacion> <EmisionTipo> **string** </EmisionTipo> <FchVto> **string** </FchVto> <FchProceso> **string** </FchProceso> <Observaciones> <Obs> 

,<Code> **int** </Code> <Msg> **string** </Msg> </Obs> </Observaciones> <PtoVta> **int** </PtoVta> <CbteTipo> **int** </CbteTipo> </ResultGet> 
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
</Errors>
```
 
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
 </FECompConsultarResult> </FECompConsultarResponse> </soapenv:Body> </soapenv:Envelope> dónde: **Campo Detalle Obligatorio** FECompConsultarResult Nodo contenedor correspondiente a él comprobante solicitado. Contiene los datos ResultGet, Errors y Events 

###### S 

Errors Información de errores detectados N Events Información de eventos N ResultGet: El objeto resultante informante del resultado del proceso contiene los campos identificados como valores de entrada FECAEDetRequest (request) en el método FECAESolicitar + los siguientes atributos. **Campo Detalle Obligatorio** Resultado Resultado del procesamiento del comprobante S CodAutorizacion Código de Autorización S EmisionTipo Tipo de emisión, si corresponde a CAE o CAEA S FchVto Vencimiento del código de autorización. Si tipo de emisión es igual a CAE esta es la fecha de vencimiento obtenida cuando se autorizó el comprobante. Si tipo de emisión es igual a 

###### S 

, Campo Detalle Obligatorio CAEA esta es la fecha de “vigencia hasta” del CAEA obtenida cuando gestionó el CAEA. FchProceso Fecha de procesamiento del comprobante S Observaciones Observaciones identificadas al momento de generar el comprobante. 

###### N 

 PtoVta Punto de venta S CbteTipo Tipo de Comprobante S 
