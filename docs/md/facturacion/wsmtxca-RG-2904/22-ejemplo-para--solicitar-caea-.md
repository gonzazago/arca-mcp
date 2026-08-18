##### Ejemplo para “Solicitar CAEA” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:solicitarCAEARequest>
      <authRequest>
        <token>
          un string
        </token>
        <sign>
          un string
        </sign>
        ,Informar un Comprobante CAEA (informarComprobanteCAEA)
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <solicitudCAEA>
        <periodo>
          201011
        </periodo>
        <orden>
          1
        </orden>
      </solicitudCAEA>
    </ser:solicitarCAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:solicitarCAEAResponse>
      <CAEAResponse>
        <fechaProceso>
          2010-10-28
        </fechaProceso>
        <CAEA>
          12345678901235
        </CAEA>
        <periodo>
          201011
        </periodo>
        <orden>
          1
        </orden>
        <fechaDesde>
          2010-11-01
        </fechaDesde>
        <fechaHasta>
          2010-11-15
        </fechaHasta>
        <fechaTopeInforme>
          2010-12-15
        </fechaTopeInforme>
      </CAEAResponse>
    </ser:solicitarCAEAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 
