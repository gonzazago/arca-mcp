##### Mensaje de Respuesta 

**Esquema:** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarComprobanteCAEAResponse>
      <resultado>
        ResultadoSimpleType
      </resultado>
      <fechaProceso>
        date
      </fechaProceso>
      <comprobanteCAEAResponse>
        <CAEA>
          long
        </CAEA>
        <codigoTipoComprobante>
          short
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          NumeroPuntoVentaSimpleType
        </numeroPuntoVenta>
        ,Informar un Comprobante CAEA (informarComprobanteCAEA)
        <numeroComprobante>
          NumeroComprobanteSimpleType
        </numeroComprobante>
      </comprobanteCAEAResponse>
      <arrayObservaciones>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayObservaciones>
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
    </ser:informarComprobanteCAEAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,Informar un Comprobante CAEA (informarComprobanteCAEA) Donde: **<informarComprobanteCAEAResponse>** contiene el resultado del proceso informar un comprobante CAEA. **Campo Descripción Oblig Tipo Long** resultado A: Aprobado, O: Observado, R: Rechazado S ResultadoSimpleType 1 fechaProceso Especifica la fecha de proceso de la solicitud S date -comprobanteCAEAR esponse Existe si el resultado es Aprobado. Contiene los datos que identifican al comprobante y los referentes a la autorización. N ComprobanteCAEAResp onseType -arrayObservaciones Indica los motivos por los cuales el comprobante fue aceptado con observaciones, en caso de corresponder. N ArrayCodigosDescripcio nesType -arrayErrores Si la solicitud fue rechazada, detalla el o los motivos que dieron origen al rechazo. N ArrayCodigosDescripcio nesType -evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType -

,Informar un Comprobante CAEA (informarComprobanteCAEA) **<comprobanteCAEAResponse>** es del tipo **ComprobanteCAEAResponseType <comprobanteCAEAResponse> Campo Descripción Oblig Tipo Long** CAEA CAEA asignado al comprobante autorizado. S long 14 codigoTipoComproba nte Tipo de Comprobante S short 3 numeroPuntoVenta Número del punto de venta del comprobante informado S NumeroPuntoVentaSimp leType 5 numeroComprobante Número del comprobante informado S NumerocomprobanteSi mpleType 8 
