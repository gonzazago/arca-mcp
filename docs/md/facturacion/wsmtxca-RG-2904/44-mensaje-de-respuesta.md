##### Mensaje de Respuesta 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCAEAResponse>
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
          ,
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
    </ser:consultarCAEAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **Campo / Grupo Descripción Oblig Tipo** CAEAResponse Datos del CAEA consultado, el cual deberá haber sido otorgado previamente N CAEAResponseType arrayErrores En caso de que no se pueda obtener la información indicará los motivos que dieron origen al rechazo. N ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

,##### Ejemplo para “Consultar un CAEA previamente otorgado” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCAEARequest>
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
      <CAEA>
        12345678901235
      </CAEA>
    </ser:consultarCAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCAEAResponse>
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
      </CAEAResponse>
    </ser:consultarCAEAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 
