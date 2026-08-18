##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUnidadesMedidaResponse>
      <arrayUnidadesMedida>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayUnidadesMedida>
      ,
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarUnidadesMedidaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarUnidadesMedidaResponse>** es del tipo ConsultarUnidadesMedidaResponseType, que contiene los siguientes elementos **<consultarUnidadesMedidaResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayUnidadesMedida Devuelve el universo de unidades de medida posibles de uso. S ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 
