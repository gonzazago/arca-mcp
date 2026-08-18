##### Método de obtención de CAEA (FECAEASolicitar) 

Esta operación permite solicitar un CAEA. El cliente envía el requerimiento, el cual es atendido por el WS, superadas las validaciones se otorgará un CAEA y su respectivo periodo de vigencia (fecha de validez desde y fecha de validez hasta). Podrá ser solicitado dentro de cada quincena y hasta 5 (cinco) días corridos anteriores al comienzo de cada quincena. Habrá dos quincenas, la primera abarca desde el primero hasta el quince de cada mes y la segunda desde el dieciséis hasta el último día del mes. **Dirección URL (Homologación)** Este servicio se llama desde: https://wswhomo.afip.gov.ar/wsfev1/service.asmx?op= FECAEASolicitar 

, Mensaje de solicitud 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    <ar:FECAEASolicitar>
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
    </ar:FECAEASolicitar>
  </soapenv:Body>
</soapenv:Envelope>
```
 Campo Detalle Obligatorio Auth Información de la autenticación. Contiene los datos de Token, Sign y Cuit 

###### S 

 Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S Campo Detalle Obligatorio FeCAEAReq Información del periodo y orden del CAEA que se está solicitando 

###### S 

**FeCAEAReq: Campo Tipo Detalle Obligatorio** Periodo Int (6) Periodo del CAEA. (yyyymm) S Orden Short (1) Orden del CAEA dentro del periodo. Quincena 1, Quincena 2 

###### S 

 Mensaje de respuesta Retorna los detalles de un CAEA autorizado. <?xml version=”1.0” encoding=”utf-8”?> <soap12:Envelope xmlns:xsi=”http://www.w3.org/2001/XMLSchema

,instance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap12=”http://www.w3.org/2003/05/soap-envelope”> <soap12:Body> <FECAEASolicitarResponse xmlns=”http://ar.gov.afip.dif.FEV1/”> <FECAEASolicitarResult> <ResultGet> <CAEA> **string** </CAEA> <Periodo> **int** </Periodo> <Orden> **short** </Orden> <FchVigDesde> **string** </FchVigDesde> <FchVigHasta> **string** </FchVigHasta> <FchTopeInf> **string** </FchTopeInf> <FchProceso> **string** </FchProceso> <Observaciones> <Obs> <Code> **int** </Code> <Msg> **string** </ Msg> </Obs> </Observaciones> </ResultGet> 
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
 </FECAEASolicitarResult> </FECAEASolicitarResponse> </soapenv:Body> </soap:Envelope> Donde: **FECAEASolicitarResult** : **Campo Detalle Obligatorio** ResultGet Información completa del CAEA autorizado S Errors Información de errores detectados N Events Información de eventos N 

,**ResultGet:** está compuesto por los siguientes campos: **Campo Tipo Detalle Obligatorio** CAEA String (14) Código de Autorización electrónico anticipado N Periodo Int (6) Periodo (yyyymm) S Orden Short (1) Orden. Quincena 1, quincena 2 S FchVigDesde String (8) Fecha de vigencia de CAEA desde N FchVigHasta String (8) Fecha de vigencia de CAEA hasta N FchTopeInf String (c8) Fecha de tope para informar los comprobantes vinculados al CAEA 

###### N 

FchProceso String (14) Fecha de proceso, formato yyyymmddhhmiss N Observaciones Array Detalle de observaciones, del comprobante N **Observaciones** : La estructura de datos Obs muestra el detalle de observaciones para el CAEA generado; estará compuesta por los siguientes campos: **Campo Tipo Detalle Obligatorio** Code Int (5) Código de observación S Msg String (255) Mensaje S **Validaciones y errores Controles aplicados al elemento <FeCAEAReq> Validaciones Excluyentes Campo / Grupo Código de error Descripción de la validación** <Cuit> 15000 Campo CUIT: Debe encontrarse activa en el Sistema Registral. <Cuit> 15001 Campo CUIT: Deberá estar registrado como Autoimpresor. Se informa que esta validación quedará fuera de vigencia a partir del 01/06/2026. <Cuit> 15003 Campo CUIT: Deberá poseer al menos un punto de venta activo correspondiente al régimen CAEA <Periodo> 15004 Campo Periodo: Debe tener el formato AAAAMM, donde AAAA indica el año y MM el mes en números. 

, Campo / Grupo Código de error Descripción de la validación <Orden> 15005 Campo Orden: Debe ser igual a 1 ó 2. Fecha de envío 15006 Al momento de solicitar CAEA, la fecha de envío podrá ser desde 5 (cinco) días corridos anteriores al inicio de cada quincena hasta el último día de la misma quincena. <Periodo> / <Orden> 

###### 15008 

No debe existir un CAEA otorgado para la CUIT solicitante con igual periodo y orden. <Cuit> 15009 Campo CUIT: Registra problemas de domicilio <Cuit> 15010 Campo CUIT: Deberá estar inscripto en alguno de los sig. impuestos: 20 MONOTRIBUTO 30 IVA 32 IVA EXENTO <Cuit> 15011 Campo CUIT: Deberá tener al menos una actividad económica declarada <Cuit> 15012 Campo CUIT: Deberá estar empadronado en el régimen de emisión de comprobantes electrónicos <Cuit> 15016 Se recuerda que según la RG 5782/2025 el régimen de CAEA se aplica exclusivamente a situaciones de contingencia, motivo por el cual solo se permitirá su uso en domicilios que cuenten con al menos un punto de venta activo bajo la modalidad CAE o Controlador Fiscal de Nueva Tecnología como modalidad principal. **Validaciones No Excluyentes Campo / Grupo Código de Observ. Descripción de la validación** <Cuit>/ <Periodo> / <Orden> 

###### 15014 

 El contribuyente registra incumplimientos en la rendición del régimen CAEA. La CUIT adeuda la presentación de 2 quincenas consecutivas o 4 alternadas. Retornará el listado de las rendiciones pendientes con el siguiente formato "periodo;orden;puntoVenta". <Cuit> 15015 Campo CUIT: Registra problemas en el domicilio fiscal electrónico. No se encuentra adherido. <Cuit> 15017 Existen Puntos de Venta CAEA que no comparten domicilio con algún Punto de Venta CAE o Controlador Fiscal que 

,**Campo / Grupo Código de Observ. Descripción de la validación** actúe como modalidad principal. Se detallara un listado de puntos de venta CAEA sin vinculación con un domicilio de factura electrónica (CAE o Controlador Fiscal de Nueva Tecnología). **Ejemplo sin Observaciones: Request** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    <ar:FECAEASolicitar>
      <!--Optional:-->
      <ar:Auth>
        <!--Optional:-->
        <ar:Token>
          un string
        </ar:Token>
        <ar:Sign>
          un string
        </ar:Sign>
        <ar:Cuit>
          33333333333
        </ar:Cuit>
      </ar:Auth>
      <ar:Periodo>
        201011
      </ar:Periodo>
      <ar:Orden>
        1
      </ar:Orden>
    </ar:FECAEASolicitar>
  </soapenv:Body>
</soapenv:Envelope>
```
 **Response** <?xml version=”1.0” encoding=”utf-8”?> <soap12:Envelopexmlns:xsi=”http://www.w3.org/2001/ XMLSchema-instance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap12=”http://www.w3.org/2003/05/soap-envelope”> <soap12:Body> <FECAEASolicitarResponse xmlns=”http://ar.gov.afip.dif.FEV1/”> <FECAEASolicitarResult> <ResultGet> <CAEA> **12345678901234** </CAEA> <Periodo> **201011** </Periodo> <Orden> **1** </Orden> <FchVigDesde> **20101101** </FchVigDesde> <FchVigHasta> **20101115** </FchVigHasta> <FchTopeInf> **20101215** </FchTopeInf> <FchProceso> **20101028** </FchProceso> 

,</ResultGet> </FECAEASolicitarResult> </FECAEASolicitarResponse> </soapenv:Body> </soap:Envelope> **Ejemplo con observaciones: Request** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    <ar:FECAEASolicitar>
      <!--Optional:-->
      <ar:Auth>
        <!--Optional:-->
        <ar:Token>
          un string
        </ar:Token>
        <ar:Sign>
          un string
        </ar:Sign>
        <ar:Cuit>
          33333333333
        </ar:Cuit>
      </ar:Auth>
      <ar:Periodo>
        201011
      </ar:Periodo>
      <ar:Orden>
        1
      </ar:Orden>
    </ar:FECAEASolicitar>
  </soapenv:Body>
</soapenv:Envelope>
```
 **Response** <?xml version=”1.0” encoding=”utf-8”?> <soap12:Envelopexmlns:xsi=”http://www.w3.org/2001/ XMLSchema-instance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema” xmlns:soap12=”http://www.w3.org/2003/05/soap-envelope”> <soap12:Body> <FECAEASolicitarResponse xmlns=”http://ar.gov.afip.dif.FEV1/”> <FECAEASolicitarResult> <ResultGet> <CAEA> **12345678901234** </CAEA> <Periodo> **201011** </Periodo> <Orden> **1** </Orden> <FchVigDesde> **20101101** </FchVigDesde> <FchVigHasta> **20101115** </FchVigHasta> <FchTopeInf> **20101215** </FchTopeInf> <FchProceso> **20101028** </FchProceso> 

, <Observaciones> <Obs> <Code>15015</Code> <Msg> Registra problemas en el domicilio fiscal electrónico. No se encuentra adherido </Msg> </Obs> </Observaciones> </ResultGet> </FECAEASolicitarResult> </FECAEASolicitarResponse> </soapenv:Body> </soap:Envelope> 
