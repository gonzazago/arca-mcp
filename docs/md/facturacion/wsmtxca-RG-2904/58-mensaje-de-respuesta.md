##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposComprobanteResponse>
      <arrayTiposComprobante>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayTiposComprobante>
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
        ,Consultar Tipos de Comprobantes (consultarTiposComprobante)
      </evento>
    </ser:consultarTiposComprobanteResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarTiposComprobanteResponse>** es del tipo **ConsultarTiposComprobanteResponseType** , que contiene los siguientes elementos **<consultarTiposComprobanteResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayTiposComprob ante Devuelve los diferentes tipos de comprobantes disponibles en este WS. S ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 
