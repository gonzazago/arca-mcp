##### Ejemplo para “Consultar Tipos de Comprobantes” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposComprobanteRequest>
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
    </ser:consultarTiposComprobanteRequest>
  </soapenv:Body>
  ,Consultar Tipos de Comprobantes (consultarTiposComprobante)
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposComprobanteResponse>
      <arrayTiposComprobante>
        <codigoDescripcion>
          <codigo>
            1
          </codigo>
          <descripcion>
            Factura A
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            2
          </codigo>
          <descripcion>
            Nota de Débito A
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            3
          </codigo>
          <descripcion>
            Nota de Crédito A
          </descripcion>
          <codigoDescripcion>
            <codigo>
              6
            </codigo>
            <descripcion>
              Factura B
            </descripcion>
          </codigoDescripcion>
          <codigoDescripcion>
            <codigo>
              7
            </codigo>
            <descripcion>
              Nota de Débito B
            </descripcion>
          </codigoDescripcion>
          <codigoDescripcion>
            <codigo>
              8
            </codigo>
            <descripcion>
              Nota de Crédito B
            </descripcion>
          </codigoDescripcion>
          <codigoDescripcion>
            <codigo>
              51
            </codigo>
            ,Consultar Tipos de Comprobantes (consultarTiposComprobante)
            <descripcion>
              Factura A con leyenda OPERACIÓN SUJETA A RETENCIÓN
            </descripcion>
          </codigoDescripcion>
          <codigoDescripcion>
            <codigo>
              52
            </codigo>
            <descripcion>
              Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN
            </descripcion>
          </codigoDescripcion>
          <codigoDescripcion>
            <codigo>
              53
            </codigo>
            <descripcion>
              Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN
            </descripcion>
          </codigoDescripcion>
          <codigoDescripcion>
            <codigo>
              88
            </codigo>
            <descripcion>
              Remito Electrónico de Tabaco Acondicionado (sólo para comprobantes asociados)
            </descripcion>
          </codigoDescripcion>
          <codigoDescripcion>
            <codigo>
              990
            </codigo>
            <descripcion>
              Remito Electrónico de Tabaco en Hebras (sólo para comprobantes asociados)
            </descripcion>
          </codigoDescripcion>
        </arrayTiposComprobante>
      </ser:consultarTiposComprobanteResponse>
    </soapenv:Body>
  </soapenv:Envelope>
```
 

,#### Consultar Tipos de Documentos (consultarTiposDocumento) 

Este método retorna el universo de tipos de documentos de identidad, aceptados en el presente WS. 
