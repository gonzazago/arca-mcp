##### Mensaje de Respuesta 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:solicitarCAEAResponse>
      <CAEAResponse>
        <fechaProceso>
          date
        </fechaProceso>
        <CAEA>
          long
        </CAEA>
        <periodo>
          int
        </periodo>
        <orden>
          short
        </orden>
        <fechaDesde>
          date
        </fechaDesde>
        <fechaHasta>
          date
        </fechaHasta>
        <fechaTopeInforme>
          date
        </fechaTopeInforme>
        <arrayObservaciones>
          ,Informar un Comprobante CAEA (informarComprobanteCAEA)
          <codigoDescripcion>
            <codigo>
              short
            </codigo>
            <descripcion>
              string
            </descripcion>
          </codigoDescripcion>
        </arrayObservaciones>
      </CAEAResponse>
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
    </ser:solicitarCAEAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **Campo / Grupo Descripción Obligatorio Tipo** CAEAResponse Datos del CAEA otorgado, en caso de corresponder. N CAEAResponseType arrayErrores Si la solicitud fue rechazada, especifica los motivos que dieron origen al rechazo. N ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType **<CAEAResponse>** es del tipo **CAEAResponseType** 

,Informar un Comprobante CAEA (informarComprobanteCAEA) Si la solicitud fue aprobada se informará el CAEA otorgado y la vigencia. 

###### <CAEA Response> 

**Campo / Grupo Descripción Obligatorio**^ **Tipo Longitud** fechaProceso Fecha en que se otorgó el CAEA. S date -CAEA CAEA otorgado S long 14 periodo Indica año y el mes al que corresponde el CAEA. Formato AAAAMM S int 6 orden Especifica el orden de secuencia en el trascurso del tiempo. Valores permitidos: 1: primer quincena 2: segunda quincena S short 1 fechaDesde Fecha de inicio de la vigencia del CAEA S date -fechaHasta Fecha de fin de la vigencia del CAEA S date -fechaTopeInforme Fecha tope para informar los comprobantes donde se utilizó el CAEA S date -arrayObservaciones Indica los motivos por los cuales el comprobante fue aceptado con observaciones, en caso de corresponder. N ArrayCodigosDe scripcionesType -
