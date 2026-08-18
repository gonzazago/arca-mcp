##### Mensaje de Respuesta 

###### Esquema 

,
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarCAEANoUtilizadoPtoVtaResponse>
      <resultado>
        ResultadoSimpleType
      </resultado>
      <fechaProceso>
        date
      </fechaProceso>
      <CAEA>
        long
      </CAEA>
      <numeroPuntoVenta>
        NumeroPuntoVentaSimpleType
      </numeroPuntoVenta>
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
      ,
    </ser:informarCAEANoUtilizadoPtoVtaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **Campo / Grupo Descripción Oblig Tipo Long (máx)** resultado Indica si la solicitud fue: A:Aprobada R:Rechazada S ResultadoSimpleType 1 fechaProceso Fecha de procesamiento S date -CAEA CAEA informado S long 14 numeroPunto Venta Número de punto de venta informado S NumeroPuntoVentaSimpleType 5 arrayErrores En caso de ser rechazado indicará los motivos que dieron origen al rechazo. N ArrayCodigosDescripcionesType -evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType -
