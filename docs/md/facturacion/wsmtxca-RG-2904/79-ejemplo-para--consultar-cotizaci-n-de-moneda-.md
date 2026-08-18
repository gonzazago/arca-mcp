##### Ejemplo para “Consultar Cotización de Moneda” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCotizacionMonedaRequest>
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
      <codigoMoneda>
        DOL
      </codigoMoneda>
      <fechaCotizacion>
        AAAA-MM-DD
      </fechaCotizacion>
    </ser:consultarCotizacionMonedaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  ,
  <soapenv:Body>
    <ser:consultarCotizacionMonedaResponse>
      <cotizacionMoneda>
        3.943216
      </cotizacionMoneda>
    </ser:consultarCotizacionMonedaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 
