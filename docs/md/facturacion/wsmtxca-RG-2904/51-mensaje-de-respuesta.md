##### Mensaje de Respuesta 

,
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUltimoComprobanteAutorizadoResponse>
      <numeroComprobante>
        NumeroComprobanteSimpleType
      </numeroComprobante>
      <arrayErrores>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayErrores>
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarUltimoComprobanteAutorizadoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **Campo / Grupo Descripción Oblig Tipo** 

,**Campo / Grupo Descripción Oblig Tipo** arrayErrores En caso de no superar alguna validación indicará el motivo. N ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 
