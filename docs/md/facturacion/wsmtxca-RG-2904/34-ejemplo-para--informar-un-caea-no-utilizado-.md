##### Ejemplo para “Informar un CAEA no utilizado” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarCAEANoUtilizadoRequest>
      <authRequest>
        <token>
          Un String
        </token>
        <sign>
          Un String
        </sign>
        ,Informar un CAEA no utilizado (informarCAEANoUtilizado)
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <CAEA>
        12345678901234
      </CAEA>
    </ser:informarCAEANoUtilizadoRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarCAEANoUtilizadoResponse>
      <resultado>
        A
      </resultado>
      <fechaProceso>
        2010-12-10
      </fechaProceso>
      <CAEA>
        12345678901234
      </CAEA>
    </ser:informarCAEANoUtilizadoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 
