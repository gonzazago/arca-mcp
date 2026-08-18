##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaCAEResponse>
      <arrayPuntosVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            NumeroPuntoVentaSympleType
          </numeroPuntoVenta>
          ,
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
    </ser:consultarPuntosVentaCAEResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarPuntosVentaCAEResponse>** es del tipo ConsultarPuntosVentaResponseType, que contiene los siguientes elementos **<consultarPuntosVentaCAEResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayPuntos Venta Devuelve los puntos de Venta CAE existentes para la cuit del emisor. S ArrayPuntosVentaType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

,**<arrayPuntosVenta>** es del tipo **ArrayPuntosVentaType,** que es un array de **<puntoVenta>** del tipo **PuntoVentaType**. **<puntoVenta> Campo Descripción Obligatori o Tipo Long (máx)** numeroPuntoVenta Número de punto de venta CAE S NumeroPun toVentaSim pleType 5 bloqueado Identifica si el punto de venta se encuentra o no bloqueado. ‘S’: Bloqueado, ‘N’: No Bloqueado. S SiNoSimple Type 1 fechaBaja Fecha en la que se dio de baja el punto de venta (si corresponde). Formato AAAAMM-DD N date -
