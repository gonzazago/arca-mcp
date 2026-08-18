##### Mensaje de solicitud 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    
```xml

```xml
<ar:FECAEAConsultar>
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
  <ar:Periodo>
    int
  </ar:Periodo>
  <ar:Orden>
    short
  </ar:Orden>
</ar:FECAEAConsultar>
```

```

  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **Campo Detalle Obligatorio** 

, Auth Información de la autenticación. Contiene los datos de Token, Sign y Cuit 

###### S 

 Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S Campo Tipo Detalle Obligatorio Periodo int (6) Periodo del CAEA. (yyyymm) S Orden short (1) Orden del CAEA dentro del periodo. Quincena 1, Quincena 2 

###### S 

**Mensaje de respuesta** Retorna los detalles de los CAEA autorizados para el periodo y orden consultado. <?xml version=”1.0” encoding=”utf-8”?> <soap12:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchemainstance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap12=”http://www.w3.org/2003/05/soap-envelope”> <soap12:Body> <FECAEAConsultarResponse xmlns=”http://ar.gov.afip.dif.FEV1/”> <FECAEAConsultarResult> <ResultGet> <CAEA> **string** </CAEA> <Periodo> **int** </Periodo> <Orden> **short** </Orden> <FchVigDesde> **string** </FchVigDesde> <FchVigHasta> **string** </FchVigHasta> <FchTopeInf> **string** </FchTopeInf> <FchProceso> **string** </FchProceso> <Observaciones> <Obs> <Code> **int** </Code> <Msg> **string** </ Msg> </Obs> </Observaciones> </ResultGet> 
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
  ,
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
 </FECAEAConsultarResult> </FECAEAConsultarResponse> </soapenv:Body> </soapenv:Envelope> Donde: FECAEAConsultarResult: **Campo Detalle Obligatorio** ResultGet Información completa de los CAEA Autorizados. S Errors Información de errores detectados N Events Información de eventos N **ResultGet:** Detalle de un CAEA válido; esta compuesto por los siguientes campos: **Campo Tipo Detalle Obligatorio** CAEA String (14) Código de Autorización electrónico anticipado N Periodo Int (6) Periodo (yyyymm) S Orden Short (1) Orden. Quincena 1, quincena 2 S FchVigDesde String (8) Fecha de vigencia de CAEA desde N FchVigHasta String (8) Fecha de vigencia de CAEA hasta N FchTopeInf String (8) Fecha de tope para informar los comprobantes vinculados al CAEA 

###### N 

FchProceso String (8) Fecha de proceso N **Validaciones, acciones y errores Controles aplicados al objeto** < **FECAEAConsultar> Validaciones Excluyentes** 

,**Campo / Grupo Código de error Descripción de la validación** <Periodo> 15004 El valor indicado en el campo <Periodo> es obligatorio.. Debe tener formato AAAAMM, donde AAAA indica el año y MM el mes en números. <Orden> 15005 El valor indicado en el campo <Orden> es obligatorio. Valores permitidos 1 o 2. **Ejemplo:** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    
```xml

```xml
<ar:FECAEAConsultar>
  <ar:Auth>
    <ar:Token>
      un string
    </ar:Token>
    <ar:Sign>
      un string
    </ar:Sign>
    <ar:Cuit>
      33000000007
    </ar:Cuit>
  </ar:Auth>
  <ar:Periodo>
    201011
  </ar:Periodo>
  <ar:Orden>
    1
  </ar:Orden>
</ar:FECAEAConsultar>
```

```

  </soapenv:Body>
</soapenv:Envelope>
```
 <?xml version=”1.0” encoding=”utf-8”?> <soap12:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchema-instance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap12=”http://www.w3.org/2003/05/soap-envelope”> <soap12:Body> <FECAEAConsultarResponse xmlns=”http://ar.gov.afip.dif.FEV1/”> <FECAEAConsultarResult> <ResultGet> <CAEA> **12345678901234** </CAEA> <Periodo> **201011** </Periodo> <Orden> **1** </Orden> <FchVigDesde> **20101101** </FchVigDesde> <FchVigHasta> **20101115** </FchVigHasta> <FchTopeInf> **20101215** </FchTopeInf> <FchProceso> **20101028** </FchProceso> </ResultGet> </FECAEAConsultarResult> </FECAEAConsultarResponse> </soapenv:Body> </soap:Envelope> 

,##### Recuperador de valores referenciales de códigos de Tipos de comprobante 
