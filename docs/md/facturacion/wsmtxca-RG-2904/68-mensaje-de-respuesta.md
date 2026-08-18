##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCondicionesIVAResponse>
      <arrayCondicionesIVA>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayCondicionesIVA>
      <evento>
        <codigo>
          short
        </codigo>
        ,
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarCondicionesIVAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,Donde: **<consultarCondicionesIVAResponse>** es del tipo **ConsultarCondicionesIVAResponseType** , que contiene los siguientes elementos **<consultarCondicionesIVAResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayCondicionesIVA Devuelve las posibles condiciones de IVA que se pueden asociar a un item. S ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 
