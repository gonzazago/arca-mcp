##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarMonedasResponse>
      <arrayMonedas>
        <codigoDescripcion>
          <codigo>
            string
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
        ,
      </arrayMonedas>
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarMonedasResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarMonedasResponse>** es del tipo ConsultarMonedasResponseType, que contiene los siguientes elementos **<consultarMonedasResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayMonedas Devuelve todos los tipos de Monedas existentes. S CodigoDescripcionStringType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 
