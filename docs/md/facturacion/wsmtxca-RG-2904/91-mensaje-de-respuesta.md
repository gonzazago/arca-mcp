##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaCAEAResponse>
      <arrayPuntosVenta>
        <puntoVenta>
          ,
          <numeroPuntoVenta>
            NumeroPuntoVentaTypeSympleType
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
    </ser:consultarPuntosVentaCAEAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarPuntosVentaCAEAResponse>** es del tipo **ConsultarPuntosVentaResponseType** , que contiene los siguientes elementos **Campo/Grupo Descripción Obligatorio Tipo** arrayPuntos Venta Devuelve los puntos de Venta CAEA existentes para la cuit del emisor. S ArrayPuntosVentaType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType **<arrayPuntosVenta** > es del tipo **ArrayPuntosVentaType,** que es un array de **<puntoVenta>** del tipo **PuntoVentaType. <puntoVenta>** 

,**Campo Descripción Obligatorio Tipo Long (máx)** numeroPuntoVenta Número de punto de venta CAEA S NumeroPun toVentaSim pleType 5 bloqueado Identifica si el punto de venta se encuentra o no bloqueado. ‘S’: Bloqueado, ‘N’: No Bloqueado. S SiNoSimple Type 1 fechaBaja Fecha en la que se dio de baja el punto de venta (si corresponde). Formato AAAA-MM-DD. N date -
