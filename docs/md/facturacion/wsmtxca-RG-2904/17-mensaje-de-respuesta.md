##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  ,Autorizar un Ajuste IVA CAE
  <soapenv:Body>
    <ser:autorizarAjusteIVAResponse>
      <resultado>
        ResultadoSimpleType
      </resultado>
      <comprobanteResponse>
        <cuit>
          long
        </cuit>
        <codigoTipoComprobante>
          short
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          NumeroPuntoVentaSimpleType
        </numeroPuntoVenta>
        <numeroComprobante>
          NumeroComprobanteSimpleType
        </numeroComprobante>
        <fechaEmision>
          date
        </fechaEmision>
        <CAE>
          long
        </CAE>
        <fechaVencimientoCAE>
          date
        </fechaVencimientoCAE>
      </comprobanteResponse>
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
    </ser:autorizarAjusteIVAResponse>
    ,Autorizar un Ajuste IVA CAE
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<autorizarAjusteIVAResponse> Campo Descripción Oblig Tipo Long** resultado A: Aprobado, O: Observado, R: Rechazado S ResultadoSimpleTy pe 1 comprobanteRespo nse Existe si el resultado es Aprobado. Contiene los datos que identifican al comprobante y los referentes a la autorización. N ComprobanteCAER esponseType -arrayObservaciones Indica los motivos por los cuales el comprobante fue autorizado con observaciones, en caso de corresponder. N ArrayCodigosDescr ipcionesType -arrayErrores Si la solicitud fue rechazada, detalla el o los motivos que dieron origen al rechazo. N ArrayCodigosDescr ipcionesType -evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcion Type -**<comprobanteResponse>** es del tipo **ComprobanteCAEResponseType <comprobanteResponse> Campo Descripción Oblig Tipo Long** cuit Cuit Emisora del comprobante S long 11 codigoTipoComprob ante Especifica el tipo de comprobante S short 3 

,Autorizar un Ajuste IVA CAE **Campo Descripción Oblig Tipo Long** numeroPuntoVenta Indica el número de punto de venta del comprobante autorizado S NumeroPuntoVentaS impleType 5 numeroComprobant e Indica el número del comprobante aprobadoS NumeroComprobant eSimpleType 8 fechaEmision Fecha de emisión del comprobante. S date -CAE CAE asignado al comprobante autorizado. S long 14 fechaVencimientoC AE Fecha de vencimiento del CAE otorgado. S date -
