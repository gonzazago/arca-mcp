##### Mensaje de Respuesta 

**Esquema** 

,
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarActividadesVigentesResponse>
      <arrayActividades>
        <actividad>
          <codigo>
            long
          </codigo>
          <orden>
            long
          </orden>
          <descripcion>
            string
          </descripcion>
        </actividad>
      </arrayActividades>
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
    </ser:consultarActividadesVigentesResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarActividadesVigentesResponse>** es del tipo **ConsultarActividadesVigentesResponseType** , que contiene los siguientes elementos **Campo/Grupo Descripción Obligatorio Tipo** arrayActividades Retorna el conjunto de actividades vigentes para el contribuyente a la N ArrayActividadesVigentesType 

,fecha de ejecución arrayErrores Si la solicitud fue rechazada, detalla el o los motivos que dieron origen al rechazo. N CodigoDescripcionType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 
