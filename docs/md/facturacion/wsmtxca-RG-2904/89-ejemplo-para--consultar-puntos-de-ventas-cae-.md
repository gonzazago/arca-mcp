##### Ejemplo para “Consultar Puntos de Ventas CAE” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUnidadesMedidaRequest>
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
    </ser:consultarUnidadesMedidaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  ,
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaCAEResponse>
      <arrayPuntosVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            123
          </numeroPuntoVenta>
          <bloqueado>
            Si
          </bloqueado>
        </puntoVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            199
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
        </puntoVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            1000
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
          <fechaBaja>
            2010-11-01
          </fechaBaja>
        </puntoVenta>
        . . .
      </arrayPuntosVenta>
    </ser:consultarPuntosVentaCAEResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,#### Consultar Puntos de Ventas CAEA (consultarPuntosVentaCAEA) 

Este método permite consultar los puntos de venta habilitados para generar comprobantes con tipo de Código de Autorización CAEA, comprendidos en el presente WS. De encontrar valores devuelve los puntos de venta para el Código de Autorización CAEA y de no existir ninguno para la cuit emisora no devuelve dato alguno. 
