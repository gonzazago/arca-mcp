##### Mensaje de respuesta 

Retorna los puntos de venta vinculados al CAEA ingresado por parámetro donde los mismos estén registrados como sin movimientos. <soap12:Envelope xmlns:soap="http://www.w3.org/2003/05/soapenvelope" xmlns:ar="http://ar.gov.afip.dif.FEV1/"> <soap12:Header/> <soap12:Body> <FECAEASinMovimientoConsultarResponse> <FECAEASinMovimientoConsultarResult> 

,<ResultGet> <FECAEASinMov> <CAEA> **string** </CAEA> <FchProceso> **string** </FchProceso> <PtoVta> **int** </PtoVta> </FECAEASinMov> </ResultGet> 
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
    </Msg </Evt>
  </Events>
```
 </FECAEASinMovimientoConsultarResult> </FECAEASinMovimientoConsultarResponse> </soapenv:Body> </soapenv:Envelope> dónde: **FECAEASinMovimientoResult Campo Detalle Obligatorio** ResultGet Nodo contenedor del array de elementos correspondientes a él o los puntos de venta identificados como sin movimientos para el CAEA identificado. 

###### S 

Errors Información de errores detectados N Events Información de eventos N **ResultGet** : contiene la información de los puntos de venta informados **Campo Tipo Detalle Obligatorio** CAEA String (14) Código de Autorización electrónico anticipado S FchProceso String (8) Fecha de en que se informó cómo sin S 

, movimiento al CAEA Pto Vta indicados. PtoVta Int (5) Punto de venta vinculado al CAEA informado. 

###### S 
