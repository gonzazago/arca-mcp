##### (consultarTiposDocumento) 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDocumentoRequest>
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
    </ser:consultarTiposDocumentoRequest>
    ,
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDocumentoResponse>
      <arrayTiposDocumento>
        <codigoDescripcion>
          <codigo>
            0
          </codigo>
          <descripcion>
            CI Policía Federal
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            1
          </codigo>
          <descripcion>
            CI Buenos Aires
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            2
          </codigo>
          <descripcion>
            CI Catamarca
          </descripcion>
        </codigoDescripcion>
        . . .
      </arrayTiposDocumento>
    </ser:consultarTiposDocumentoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,#### Consultar Alícuotas de IVA (consultarAlicuotasIVA) 

Este método proporciona las diferentes Alícuotas de IVA disponibles en este WS. 
