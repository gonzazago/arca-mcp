##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDocumentoResponse>
      <arrayTiposDocumento>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayTiposDocumento>
      <evento>
        <codigo>
          short
        </codigo>
        ,
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarTiposDocumentoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarTiposDocumentoResponse>** es del tipo ConsultarTiposDocumentoResponseType, que contiene los siguientes elementos **<consultarTiposDocumentoResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayTiposDocumento Devuelve todos los tipos de documentos de identidad permitidos. S ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 
