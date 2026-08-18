##### Mensaje de Respuesta 

**Esquema** 

,
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCotizacionMonedaResponse>
      <cotizacionMoneda>
        decimal
      </cotizacionMoneda>
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
    </ser:consultarCotizacionMonedaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarCotizacionMonedaResponse>** es del tipo **ConsultarCotizacionMonedaResponseType** , que contiene los siguientes elementos: **<consultarCotizacionMonedaResponse>** 

,**Campo/Grupo Descripción Obligatorio Tipo** cotizacionMoneda Devuelve la cotización de la moneda especificada. N decimal arrayErrores En caso de no existir el código de moneda por el que se pide la cotización devuelve un mensaje de error. N ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 
