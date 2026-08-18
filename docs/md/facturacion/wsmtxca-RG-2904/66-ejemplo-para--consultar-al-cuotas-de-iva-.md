##### Ejemplo para “Consultar Alícuotas de IVA” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarAlicuotasIVARequest>
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
    </ser:consultarAlicuotasIVARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,,
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarAlicuotasIVAResponse>
      <arrayAlicuotasIVA>
        <codigoDescripcion>
          <codigo>
            3
          </codigo>
          <descripcion>
            0%
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            4
          </codigo>
          <descripcion>
            10.5%
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            5
          </codigo>
          <descripcion>
            21%
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            6
          </codigo>
          <descripcion>
            27%
          </descripcion>
        </codigoDescripcion>
      </arrayAlicuotasIVA>
    </ser:consultarAlicuotasIVAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,#### Consultar Condiciones de IVA (consultarCondicionesIVA) 

Este método permite consultar las Condiciones de IVA que se pueden asociar a un item, tales como No Gravado, Exento, etc. 
