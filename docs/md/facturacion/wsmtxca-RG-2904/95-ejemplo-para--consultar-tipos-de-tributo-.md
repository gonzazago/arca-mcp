##### Ejemplo para “Consultar Tipos de Tributo” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposTributoRequest>
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
    </ser:consultarTiposTributoRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposTributoResponse>
      <arrayTiposTributo>
        <codigoDescripcion>
          <codigo>
            01
          </codigo>
          <descripcion>
            impuestos nacionales
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            02
          </codigo>
          <descripcion>
            impuestos provinciales
          </descripcion>
        </codigoDescripcion>
        . . .
      </arrayTiposTributo>
    </ser:consultarTiposTributoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,#### Consultar Tipos de Datos Adicionales (consultarTiposDatosAdicionales) 

Devuelve los posibles códigos de tipos de datos adicionales que puede contener un comprobante y sus respectivas descripciones. 
