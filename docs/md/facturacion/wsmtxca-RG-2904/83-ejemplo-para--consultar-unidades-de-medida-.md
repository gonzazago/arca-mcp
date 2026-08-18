##### Ejemplo para “Consultar Unidades de Medida” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUnidadesMedidaRequest>
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
      ,
    </ser:consultarUnidadesMedidaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUnidadesMedidaResponse>
      <arrayUnidadesMedida>
        <codigoDescripcion>
          <codigo>
            0
          </codigo>
          <descripcion>
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            1
          </codigo>
          <descripcion>
            kilogramos
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            2
          </codigo>
          <descripcion>
            metros
          </descripcion>
        </codigoDescripcion>
        . . .
      </arrayUnidadesMedida>
    </ser:consultarUnidadesMedidaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,#### Consultar Puntos de Ventas (consultarPuntosVenta) 

Este método permite consultar los puntos de venta para ambos tipos de Código de Autorización (CAE y CAEA) gestionados por la CUIT emisora. De encontrar valores devuelve los puntos de venta y de no existir ninguno para la cuit emisora no retorna valor alguno. 
