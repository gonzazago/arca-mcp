##### Ejemplo para “Consultar Condiciones de IVA” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCondicionesIVARequest>
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
    </ser:consultarCondicionesIVARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    ,
    <ser:consultarCondicionesIVAResponse>
      <arrayCondicionesIVA>
        <codigoDescripcion>
          <codigo>
            1
          </codigo>
          <descripcion>
            No gravado
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            2
          </codigo>
          <descripcion>
            Exento
          </descripcion>
        </codigoDescripcion>
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
      </arrayCondicionesIVA>
    </ser:consultarCondicionesIVAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,#### Consultar Condiciones de IVA Receptor 
