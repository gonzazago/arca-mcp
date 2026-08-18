##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarAlicuotasIVAResponse>
      <arrayAlicuotasIVA>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayAlicuotasIVA>
      ,
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarAlicuotasIVAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarAlicuotasIVAResponse>** es del tipo **ConsultarAlicuotasIVAResponseType** , que contiene los siguientes elementos **<ConsultarAlicuotasIVAResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayAlicuotasIVA Devuelve el universo de alícuotas de IVA factibles. S ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 
