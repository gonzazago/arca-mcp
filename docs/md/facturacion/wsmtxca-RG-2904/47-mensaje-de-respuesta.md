##### Mensaje de Respuesta 

###### Esquema 

,
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCAEAEntreFechasResponse>
      <arrayCAEAResponse>
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
      </arrayCAEAResponse>
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
      ,
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarCAEAEntreFechasResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **Campo / Grupo Descripción Oblig Tipo** arrayCAEAResponse Array. Contiene los datos de aquellos CAEA con validez en algún momento dentro del rango de fechas ingresado N ArrayCAEAResponseType arrayErrores En caso de que no se pueda obtener la información indicará los motivos que dieron origen al rechazo. N ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType **<arrayCAEAResponse>** es del tipo **ArrayCAEAResponseType,** que es un array de **<CAEAResponse>** del tipo **CAEAResponseType** Si la solicitud no presentó errores se retornará un array con los CAEA que cumplan las condiciones. 

,##### Ejemplo para “Consultar CAEAs en un rango de fechas” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCAEAEntreFechasRequest>
      <authRequest>
        <token>
          Un String
        </token>
        <sign>
          Un String
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <fechaDesde>
        2010-10-01
      </fechaDesde>
      <fechaHasta>
        2010-12-31
      </fechaHasta>
    </ser:consultarCAEAEntreFechasRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCAEAEntreFechasResponse>
      <arrayCAEAResponse>
        <CAEAResponse>
          <fechaProceso>
            2010-10-28
          </fechaProceso>
          <CAEA>
            12345678901235
          </CAEA>
          <periodo>
            201011
          </periodo>
          <orden>
            1
          </orden>
          <fechaDesde>
            2010-11-01
          </fechaDesde>
          <fechaHasta>
            2010-11-15
          </fechaHasta>
          <fechaTopeInforme>
            2010-12-15
          </fechaTopeInforme>
          ,
        </CAEAResponse>
        <CAEAResponse>
          <fechaProceso>
            2010-11-13
          </fechaProceso>
          <CAEA>
            99876543210987
          </CAEA>
          <periodo>
            201011
          </periodo>
          <orden>
            2
          </orden>
          <fechaDesde>
            2010-11-16
          </fechaDesde>
          <fechaHasta>
            2010-11-31
          </fechaHasta>
          <fechaTopeInforme>
            2010-12-31
          </fechaTopeInforme>
        </CAEAResponse>
      </arrayCAEAResponse>
    </ser:consultarCAEAEntreFechasResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 
