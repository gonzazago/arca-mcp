##### Ejemplo para “Informar un CAEA no utilizado para un Punto de Venta” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarCAEANoUtilizadoPtoVtaRequest>
      ,
      <authRequest>
        <token>
          Un String
        </token>
        <sign>
          Un String
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <CAEA>
        12345678901234
      </CAEA>
      <numeroPuntoVenta>
        123
      </numeroPuntoVenta>
    </ser:informarCAEANoUtilizadoPtoVtaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarCAEANoUtilizadoPtoVtaResponse>
      <resultado>
        A
      </resultado>
      <fechaProceso>
        2010-12-10
      </fechaProceso>
      <CAEA>
        12345678901234
      </CAEA>
      <numeroPuntoVenta>
        123
      </numeroPuntoVenta>
    </ser:informarCAEANoUtilizadoPtoVtaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,###### Validaciones del Negocio 

**<authRequest>...</authRequest> Campo Código de Error Validación No es superada** cuitRepresentada 10030 Debe estar empadronada en el régimen de CAEA con estado activo o baja. Se informa que esta validación quedará fuera de vigencia a partir del 01/06/2026. Rechaza **<informarCAEANoUtilizadoPtoVtaRequest>...</ informarCAEANoUtilizadoPtoVtaRequest> Campo Código de Error Validación NO es superada** CAEA 1200 Debe ser del tipo de código de autorización CAEA Rechaza CAEA 1201 Corresponda a la CUIT indicada en <cuitRepresentada> Rechaza fecha de envío de la solicitud 1203 La fecha de envío de la solicitud debe ser mayor a la fecha de inicio de vigencia del CAEA que se está informando. Rechaza numeroPuntoVenta 1204 Debe corresponder a un punto de venta CAEA Rechaza numeroPuntoVenta 1205 El punto de venta deberá haber estado activo durante la vigencia del CAEA Rechaza CAEA / numeroPuntoVenta 1206 No debe estar informado como utilizado en algún comprobante para el punto de venta indicado Rechaza CAEA / numeroPuntoVenta 1207 No debe estar informado como no utilizado para el punto de venta indicado Rechaza 

,#### Consultar Puntos de Venta aún no informados para un CAEA 
