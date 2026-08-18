##### Ejemplo para “Consultar Puntos de Ventas” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaRequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
    </ser:consultarPuntosVentaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaResponse>
      <arrayPuntosVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            13
          </numeroPuntoVenta>
          ,
          <bloqueado>
            No
          </bloqueado>
          <fechaBaja>
            2010-10-01
          </fechaBaja>
        </puntoVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            1333
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
        </puntoVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            166
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
        </puntoVenta>
        . . .
      </arrayPuntosVenta>
    </ser:consultarPuntosVentaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,#### Consultar Puntos de Ventas CAE (consultarPuntosVentaCAE) 

Este método permite consultar los puntos de venta habilitados para generar comprobantes con tipo de Código de Autorización CAE, comprendidos en el presente WS. De encontrar valores devuelve el detalle de los mismos y de no existir ninguno para la cuit emisora no devuelve valor alguno. 
