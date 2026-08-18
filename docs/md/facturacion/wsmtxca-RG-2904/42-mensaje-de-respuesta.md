##### Mensaje de Respuesta 

###### Esquema 

,
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPtosVtaCAEANoInformadosResponse>
      <arrayPuntosVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            NumeroPuntoVentaSimpleType
          </numeroPuntoVenta>
          <bloqueado>
            SiNoSimpleType
          </bloqueado>
          <fechaBaja>
            date
          </fechaBaja>
        </puntoVenta>
      </arrayPuntosVenta>
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
    </ser:consultarPtosVtaCAEANoInformadosResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,Donde: **Campo / Grupo Descripción Oblig Tipo** arrayPuntos Venta Devuelve los puntos de Venta del tipo CAEA que aún no fueron informados para el CAEA indicado en el request N ArrayPuntosVentaType arrayErrores En caso de que no se pueda obtener la información (si no se superan las validaciones) indicará los motivos que dieron origen al rechazo. N ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

,##### Ejemplo para “Consultar Puntos de Venta aún no informados para un CAEA” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPtosVtaCAEANoInformadosRequest>
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
    </ser:consultarPtosVtaCAEANoInformadosRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPtosVtaCAEANoInformadosResponse>
      <arrayPuntosVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            193
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
        </puntoVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            243
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
        </puntoVenta>
        <puntoVenta>
          ,
          <numeroPuntoVenta>
            410
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
        </puntoVenta>
        . . .
      </arrayPuntosVenta>
    </ser:consultarPtosVtaCAEANoInformadosResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

,##### Validaciones del Negocio 

**<authRequest>...</authRequest> Campo Código de Error Validación No es superada** cuitRepresentada 10030 Debe estar empadronada en el régimen de CAEA con estado activo o baja. Se informa que esta validación quedará fuera de vigencia a partir del 01/06/2026. Rechaza **<consultarPtosVtaCAEANoInformadosRequest>...</ consultarPtosVtaCAEANoInformadosRequest> Campo Código de Error Validación NO es superada** CAEA 1300 Debe ser un CAEA previamente otorgado Rechaza CAEA 1301 Debe corresponder a la CUIT indicada en <cuitRepresentada> Rechaza 

,#### Consultar un CAEA previamente otorgado (consultarCAEA) 

Este método permite consultar la información correspondiente a un CAEA previamente otorgado. 
