##### Mensaje de Respuesta 

Retorna el resultado de la verificación de los elementos principales de infraestructura del servicio. **Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:dummyResponse>
      <appserver>
        string
      </appserver>
      <authserver>
        string
      </authserver>
      <dbserver>
        string
      </dbserver>
    </ser:dummyResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,Donde: **<dummyResponse>** detalla el resultado de la validación, contiene los siguientes campos: **<dummyResponse> Campo/Grupo Detalle Obligatorio Tipo** appserver Servidor de aplicaciones S string authserver Servidor de base de datos S string dbserver Servidor de autenticacion S string 
