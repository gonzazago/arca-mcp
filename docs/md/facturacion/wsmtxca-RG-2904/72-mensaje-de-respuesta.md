##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCondicionesIVAReceptorResponse>
      ,
      <arrayCondicionesIVAReceptor>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayCondicionesIVAReceptor>
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
    </ser:consultarCondicionesIVAReceptorResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarCondicionesIVAReceptorResponse>** es del tipo **ConsultarCondicionesIVAReceptorResponseType** , que contiene los siguientes elementos **<consultarCondicionesIVAReceptorResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayCondicionesIVA Devuelve las posibles condiciones de IVA que puede adoptar el Receptor según el Tipo de Comprobante enviado. N ArrayCodigosDescripcionesType 

,arrayErrores Si la solicitud fue rechazada, detalla el o los motivos que dieron origen al rechazo. N ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 
