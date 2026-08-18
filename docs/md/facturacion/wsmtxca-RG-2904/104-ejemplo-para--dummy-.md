##### Ejemplo para “Dummy” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header/>
  <soapenv:Body/>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:dummyResponse>
      <appserver>
        OK
      </appserver>
      <authserver>
        OK
      </authserver>
      <dbserver>
        OK
      </dbserver>
    </ser:dummyResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,## Definición de tipos de datos 
