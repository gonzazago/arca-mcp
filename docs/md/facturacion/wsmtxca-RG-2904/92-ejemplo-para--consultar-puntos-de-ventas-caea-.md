##### Ejemplo para “Consultar Puntos de Ventas CAEA” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaCAEARequest>
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
    </ser:consultarPuntosVentaCAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaCAEAResponse>
      <arrayPuntosVenta>
        ,
        <puntoVenta>
          <numeroPuntoVenta>
            1
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
        </puntoVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            2
          </numeroPuntoVenta>
          <bloqueado>
            Si
          </bloqueado>
          <fechaBaja>
            2010-10-01
          </fechaBaja>
        </puntoVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            22
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
    </ser:consultarPuntosVentaCAEAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,#### Consultar Tipos de Tributo (consultarTiposTributo) 

Devuelve los posibles códigos de tributos que puede contener un comprobante y su descripción. 
