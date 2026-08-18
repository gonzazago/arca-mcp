##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposTributoResponse>
      <arrayTiposTributo>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayTiposTributo>
      <evento>
        ,
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarTiposTributoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarTiposTributoResponse>** es del tipo **ConsultarTiposTributoResponseType** , que contiene los siguientes elementos **Campo/Grupo Descripción Obligatorio Tipo** arrayTiposTributo Devuelve el universo de Tributos. S ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 
