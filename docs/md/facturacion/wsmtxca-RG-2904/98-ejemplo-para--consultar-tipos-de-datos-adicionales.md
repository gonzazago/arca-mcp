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
    ,
    <ser:consultarTiposDatosAdicionalesResponse>
      <arrayTiposDatosAdicionales>
        <codigoDescripcion>
          <codigo>
            1
          </codigo>
          <descripcion>
            Datos adicionales para Entes Reguladores […]
          </descripcion>
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
 

,#### Consultar Actividades Vigentes (consultarActividadesVigentes) 

Este método permite consultar las actividades vigentes para el contribuyente en las bases del organismo. Las mismas podran ser vinculadas de manera optativa a los comprobantes generados por CAE o CAEA mediante los métodos de autorizacion de comprobantes CAE e informacion de comprobantes CAEA. 
