##### Ejemplo para “Consultar Tipos de Datos Adicionales” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDatosAdicionalesRequest>
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
    </ser:consultarTiposDatosAdicionalesRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDatosAdicionalesResponse>
      <arrayTiposDatosAdicionales>
        <codigoDescripcion>
          <codigo>
            1
          </codigo>
          <descripcion>
            Datos adicionales para Entes Reguladores […]
          </descripcion>
          ,
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            2
          </codigo>
          <descripcion>
            Datos adicionales para Empresas Promovidas […]
          </descripcion>
        </codigoDescripcion>
        . . .
      </arrayTiposDatosAdicionales>
    </ser:consultarTiposDatosAdicionalesResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,#### Dummy 

Permite verificar el funcionamiento del presente WS. 
