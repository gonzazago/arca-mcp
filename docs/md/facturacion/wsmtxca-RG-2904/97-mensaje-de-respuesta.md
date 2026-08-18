##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    ,
    <ser:consultarTiposDatosAdicionalesResponse>
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
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarTiposDatosAdicionalesResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,Donde: **<consultarTiposDatosAdicionalesResponse>** es del tipo **ConsultarTiposDatosAdicionalesResponseType** , que contiene los siguientes elementos **Campo/Grupo Descripción Obligatorio Tipo** arrayTiposDatosAdicionales Devuelve el universo de Datos Adicionales permitidos. S ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 
