##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaResponse>
      <arrayPuntosVenta>
        <puntoVenta>
          ,
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
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarPuntosVentaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarPuntosVentaResponse>** es del tipo ConsultarPuntosVentaResponseType, que contiene los siguientes elementos **Campo/Grupo Descripción Obligatorio Tipo** arrayPuntos Venta Devuelve los puntos de Venta del tipo CAE y CAEA existentes para la cuit del emisor habilitados para este WS. S ArrayPuntosVentaType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType **<arrayPuntosVenta>** es del tipo **ArrayPuntosVentaType,** que es un array de **<puntoVenta>** del tipo **PuntoVentaType** De corresponder, se detallan el o los puntos de venta existentes. Está compuesto por los siguientes campos: **<puntoVenta>** 

,**Campo Descripción Obligatorio Tipo Long (máx )** numeroPuntoVenta Número de punto de venta S NumeroPun toVentaSim pleType 5 bloqueado Indica si el punto de venta se encuentra o no bloqueado. ‘Si’: Bloqueado, ‘No’: No Bloqueado. S SiNoSimple Type 1 fechaBaja Fecha en la que se dio de baja el punto de venta. Formato AAAA-MM-DD. N date -
