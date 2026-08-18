## FACTURA ELECTRÓNICA 

# WEB SERVICE MTXCA 

# MANUAL PARA EL 

# DESARROLLADOR 

## VERSIÓN 0.25.7 

**Contenido** 

###### 1 Introducción................................................................................................................................. 1 

###### Objetivo...................................................................................................................................... 1 

###### Alcance....................................................................................................................................... 1 

###### Tratamiento de errores Excepcionales en el WS....................................................................... 3 

###### Tratamiento de errores en el WS por validaciones del negocio................................................ 4 

###### Tratamiento de observaciones en el WS por validaciones del negocio.................................... 5 

###### Tratamiento de eventos............................................................................................................. 6 

###### Manejo transaccional................................................................................................................. 7 

###### Web Services de Negocio............................................................................................................... 8 

###### Dirección URL............................................................................................................................. 8 

###### Sitio de Consulta y Canal de Atención....................................................................................... 9 

###### Validaciones sobre el emisor del comprobante al solicitar CAE o CAEA................................. 10 

###### Autenticación........................................................................................................................... 10 

###### Operaciones............................................................................................................................. 13 

###### Operaciones a realizar según la RG de aplicación............................................................... 13 

###### Autorizar un Comprobante CAE (autorizarComprobante).................................................. 15 

###### Mensaje de Solicitud....................................................................................................... 15 

###### Mensaje de Respuesta.................................................................................................... 21 

###### Ejemplo para “Autorizar Comprobante”......................................................................... 24 

###### Validaciones del Negocio................................................................................................ 31 

###### Autorizar un Ajuste IVA CAE (autorizarAjusteIVA).............................................................. 74 

###### Mensaje de Solicitud....................................................................................................... 75 

###### Mensaje de Respuesta.................................................................................................... 80 

###### Ejemplo para “Autorizar Ajuste IVA”............................................................................... 83 

###### Validaciones del Negocio................................................................................................ 90 

###### Solicitar CAEA (solicitarCAEA)............................................................................................ 114 

###### Mensaje de Solicitud..................................................................................................... 114 

###### Mensaje de Respuesta.................................................................................................. 117 

###### Ejemplo para “Solicitar CAEA”....................................................................................... 119 

###### Validaciones del Negocio.............................................................................................. 120 

###### Informar un Comprobante CAEA (informarComprobanteCAEA)...................................... 123 

###### Mensaje de Solicitud..................................................................................................... 123 

###### Mensaje de Respuesta.................................................................................................. 129 

###### Ejemplo para “Informar Comprobante CAEA”.............................................................. 132 

###### Validaciones del Negocio.............................................................................................. 140 

###### Informar un Ajuste IVA CAEA (informarAjusteIVACAEA).................................................. 180 

###### Mensaje de Solicitud..................................................................................................... 180 

###### Mensaje de Respuesta.................................................................................................. 186 

###### Ejemplo para “Informar Ajuste IVA CAEA”.................................................................... 189 

###### Validaciones del Negocio.............................................................................................. 195 

###### Informar un CAEA no utilizado (informarCAEANoUtilizado)............................................. 215 

###### Mensaje de Solicitud..................................................................................................... 215 

###### Mensaje de Respuesta.................................................................................................. 217 

###### Ejemplo para “Informar un CAEA no utilizado”............................................................ 218 

###### Validaciones del Negocio.............................................................................................. 219 

###### Informar un CAEA no utilizado para un Punto de Venta (informarCAEANoUtilizadoPtoVta) 

###### ........................................................................................................................................... 221 

###### Mensaje de Solicitud..................................................................................................... 221 

###### Mensaje de Respuesta.................................................................................................. 222 

###### Ejemplo para “Informar un CAEA no utilizado para un Punto de Venta”..................... 224 

###### Consultar Puntos de Venta aún no informados para un CAEA 

###### (consultarPtosVtaCAEANoInformados)............................................................................. 227 

###### Mensaje de Solicitud..................................................................................................... 227 

###### Mensaje de Respuesta.................................................................................................. 228 

###### Ejemplo para “Consultar Puntos de Venta aún no informados para un CAEA”........... 231 

###### Validaciones del Negocio.............................................................................................. 233 

###### Consultar un CAEA previamente otorgado (consultarCAEA)............................................ 234 

###### Mensaje de Solicitud..................................................................................................... 234 

###### Mensaje de Respuesta.................................................................................................. 236 

###### Ejemplo para “Consultar un CAEA previamente otorgado”......................................... 238 

###### Validaciones del Negocio.............................................................................................. 239 

###### Consultar CAEAs en un rango de fechas (consultarCAEAEntreFechas)............................. 241 

###### Mensaje de Solicitud..................................................................................................... 241 

###### Mensaje de Respuesta.................................................................................................. 242 

###### Ejemplo para “Consultar CAEAs en un rango de fechas”.............................................. 245 

###### Validaciones del Negocio.............................................................................................. 246 

###### Consultar el último comprobante autorizado (consultarUltimoComprobanteAutorizado) 

###### ........................................................................................................................................... 247 

###### Mensaje de Solicitud..................................................................................................... 247 

###### Mensaje de Respuesta.................................................................................................. 248 

###### Ejemplo para “Consultar el Último Comprobante Autorizado”.................................... 250 

###### Validaciones del Negocio.............................................................................................. 252 

###### Consultar un comprobante autorizado (consultarComprobante).................................... 254 

###### Mensaje de Solicitud..................................................................................................... 254 

###### Mensaje de Respuesta.................................................................................................. 256 

###### Ejemplo para “Consultar un Comprobante autorizado”............................................... 262 

###### Validaciones del Negocio.............................................................................................. 265 

###### Consultar Tipos de Comprobantes (consultarTiposComprobante)................................... 267 

###### Mensaje de Solicitud..................................................................................................... 267 

###### Mensaje de Respuesta.................................................................................................. 268 

###### Ejemplo para “Consultar Tipos de Comprobantes”...................................................... 269 

###### Consultar Tipos de Documentos (consultarTiposDocumento)......................................... 272 

###### Mensaje de Solicitud..................................................................................................... 272 

###### Mensaje de Respuesta.................................................................................................. 273 

###### Ejemplo para Consultar Tipos de Documentos (consultarTiposDocumento)............... 274 

###### Consultar Alícuotas de IVA (consultarAlicuotasIVA).......................................................... 276 

###### Mensaje de Solicitud..................................................................................................... 276 

###### Mensaje de Respuesta.................................................................................................. 277 

###### Ejemplo para “Consultar Alícuotas de IVA”.................................................................. 278 

###### Consultar Condiciones de IVA (consultarCondicionesIVA)................................................ 281 

###### Mensaje de Solicitud..................................................................................................... 281 

###### Mensaje de Respuesta.................................................................................................. 282 

###### Ejemplo para “Consultar Condiciones de IVA”.............................................................. 284 

###### Consultar Condiciones de IVA Receptor (consultarCondicionesIVAReceptor)................. 286 

###### Mensaje de Solicitud..................................................................................................... 286 

###### Mensaje de Respuesta.................................................................................................. 288 

###### Ejemplo para “Consultar Condiciones de IVA Receptor”.............................................. 290 

###### Consultar Monedas (consultarMonedas).......................................................................... 293 

###### Mensaje de Solicitud..................................................................................................... 293 

###### Mensaje de Respuesta.................................................................................................. 294 

###### Ejemplo para “Consultar Monedas”.............................................................................. 295 

###### Consultar Cotización de Moneda (consultarCotizacionMoneda)...................................... 297 

###### Mensaje de Solicitud..................................................................................................... 297 

###### Mensaje de Respuesta.................................................................................................. 298 

###### Ejemplo para “Consultar Cotización de Moneda”........................................................ 300 

###### Validaciones del Negocio.............................................................................................. 301 

###### Consultar Unidades de Medida (consultarUnidadesMedida)........................................... 302 

###### Mensaje de Solicitud..................................................................................................... 302 

###### Mensaje de Respuesta.................................................................................................. 303 

###### Ejemplo para “Consultar Unidades de Medida”........................................................... 304 

###### Consultar Puntos de Ventas (consultarPuntosVenta)....................................................... 306 

###### Mensaje de Solicitud..................................................................................................... 306 

###### Mensaje de Respuesta.................................................................................................. 307 

###### Ejemplo para “Consultar Puntos de Ventas”................................................................ 309 

###### Consultar Puntos de Ventas CAE (consultarPuntosVentaCAE)......................................... 311 

###### Mensaje de Solicitud..................................................................................................... 311 

###### Mensaje de Respuesta.................................................................................................. 312 

###### Ejemplo para “Consultar Puntos de Ventas CAE”......................................................... 314 

###### Consultar Puntos de Ventas CAEA (consultarPuntosVentaCAEA)..................................... 316 

###### Mensaje de Solicitud..................................................................................................... 316 

###### Mensaje de Respuesta.................................................................................................. 317 

###### Ejemplo para “Consultar Puntos de Ventas CAEA”....................................................... 319 

###### Consultar Tipos de Tributo (consultarTiposTributo)......................................................... 321 

###### Mensaje de Solicitud..................................................................................................... 321 

###### Mensaje de Respuesta.................................................................................................. 322 

###### Ejemplo para “Consultar Tipos de Tributo”.................................................................. 323 

###### Consultar Tipos de Datos Adicionales (consultarTiposDatosAdicionales)........................ 325 

###### Mensaje de Solicitud..................................................................................................... 325 

###### Mensaje de Respuesta.................................................................................................. 327 

###### Ejemplo para “Consultar Tipos de Datos Adicionales”................................................. 329 

###### Consultar Actividades Vigentes (consultarActividadesVigentes)...................................... 331 

###### Mensaje de Solicitud..................................................................................................... 331 

###### Mensaje de Respuesta.................................................................................................. 332 

###### Ejemplo para “Consultar Tipos de Datos Adicionales”................................................. 334 

###### Dummy............................................................................................................................... 336 

###### Mensaje de Solicitud..................................................................................................... 336 

###### Mensaje de Respuesta.................................................................................................. 336 

###### Ejemplo para “Dummy”................................................................................................ 337 

###### Definición de tipos de datos....................................................................................................... 338 

###### Simple Types.......................................................................................................................... 338 

###### Complex Types (genéricos).................................................................................................... 340 

###### Anexo.......................................................................................................................................... 355 

###### Rubros de Actividades y Remitos........................................................................................... 355 

###### Cotización Monedas del Banco de la Nación Argentina........................................................ 360 

###### Histórico de Modificaciones................................................................................................... 362 

###### Aclaraciones y Definiciones.................................................................................................... 380 

###### Abreviaturas........................................................................................................................... 380 

## 1 Introducción 

### Objetivo 

Brindar la información necesaria para desarrollar un cliente del Web Service de Factura Electrónica MTXCA. 

### Alcance 

Comprende desde la definición del WSDL hasta las validaciones de negocio que realizará cada servicio. El presente WS permite llevar a cabo las siguientes operaciones:  Autorizar Comprobante CAE  Solicitar CAEA  Informar un Comprobante con tipo de código de autorización: CAEA  Informar un CAEA como no utilizado en ningún comprobante  Informar un CAEA como no utilizado para un punto de venta  Consultar: o Último comprobante Autorizado para un determinado punto de ventas y tipo de comprobante o Un comprobante determinado o Tipos de comprobante disponibles en WS MTXCA o Tipos de documento o Alícuotas de IVA o Códigos de condición de IVA para un ítem o Códigos de Moneda o Última cotización disponible para una determinada moneda. o Códigos de Unidades de Medida o Puntos de Venta del contribuyente comprendidos en el presente Web Service o Códigos de tributos que puede contener un comprobante o Detalles de un CAEA determinado 

o Detalles de CAEAs para un rango de fechas determinado o Puntos de Venta aún no informados para un CAEA determinado o Tipos de Datos Adicionales disponibles o Consultar las actividades vigentes para el contribuyente  dummy Este documento debe complementarse con el documento relativo al SERVICIO DE AUTENTICACION DE CONTRIBUYENTES DE ARCA y Resoluciones Generales que norman los proyectos pertinentes. 

### Tratamiento de errores Excepcionales en el WS 

Los errores excepcionales serán del tipo descriptivo y tendrán el siguiente tratamiento: 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Body>
    <soapenv:Fault>
      <faultcode>
        soapenv:Client
      </faultcode>
      <faultstring>
        Token vencido Fecha y Hora de Vencimiento del Token Enviado: 01-112010 00:32:37 Fecha y Hora Actual del Servidor: 02-11-2010 13:49:41
      </faultstring>
      <detail/>
    </soapenv:Fault>
  </soapenv:Body>
</soapenv:Envelope>
```
 _(ejemplo)_ donde: **<faultstring>** es del tipo string Describe al error que se generó al procesar la solicitud. Los errores excepcionales incluyen también errores de estructura (ej: tags sin cerrar, con nombres incorrectos o en orden incorrecto) y de tipos de datos. 

### Tratamiento de errores en el WS por validaciones del negocio. 

El tratamiento de errores originados por validaciones del negocio, para todos los métodos, tendrá el siguiente esquema: 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    …
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
    …
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<arrayErrores>** es del tipo ArrayCodigosDescripcionesType que es un array de **<codigoDescripcion> <codigoDescripcion> Campo Descripción** codigo Código de error descripcion Descripción del error 

### Tratamiento de observaciones en el WS por validaciones del 

### negocio. 

Las observaciones tendrán lugar cuando alguna validación del negocio no sea superada y esta no implique el rechazo de la solicitud, es decir la misma será aprobada con observaciones. 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    …
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
    …
  </soapenv:Body>
</soapenv:Envelope>
```
 donde: **<arrayObservaciones** > es del tipo ArrayCodigosDescripcionesType que es un array de **<codigoDescripcion> <codigoDescripcion> Campo Descripción** codigo Código de observación descripcion Descripción de la observación 

### Tratamiento de eventos 

Los eventos programados se informarán en respuesta a los diferentes métodos disponibles en el presente WS y tendrán el siguiente esquema: 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    …
    <evento>
      <codigo>
        short
      </codigo>
      <descripcion>
        string
      </descripcion>
    </evento>
    …
  </soapenv:Body>
</soapenv:Envelope>
```
 donde: **<evento>** es del tipo CodigoDescripcionType **Campo Descripción** codigo Código de evento. Único para un evento dado. descripcion Detalle del mensaje que se transmite 

### Manejo transaccional 

Al autorizar o informar un comprobante, el cliente envía una solicitud, la cual es atendida y procesada por el WSMTXCA obteniéndose luego una respuesta. Puede ocurrir que por algún error de comunicación la solicitud no sea recibida por el WS, con lo cual nunca se emitirá una respuesta, o que la respuesta una vez enviada no sea recibida por el cliente. En esta situación se podrá utilizar el método de consulta de comprobante (consultarComprobante) para verificar si el comprobante fue procesado y aceptado (lo que indicaría que el problema de comunicación ocurrió luego de que el WS recibiera la solicitud correctamente) o no, en cuyo caso podrá repetirse la solicitud. Es importante destacar que si se envía una solicitud nuevamente y esta ya había sido aceptada, el sistema la rechazará indicando un error de correlatividad en la numeración del comprobante. Otro método que puede utilizarse en estas situaciones es “Consultar el Último Comprobante Autorizado” (consultarUltimoComprobanteAutorizado). 

## Web Services de Negocio 

### Dirección URL 

Este servicio se llama en Testing desde: https://fwshomo.afip.gov.ar/wsmtxca/services/MTXCAService _Nota: el URL precedente es al cual se conectará la aplicación cliente, no es un URL para ser ingresado en un navegador Web._ Para visualizar el WSDL en Testing: https://fwshomo.afip.gov.ar/wsmtxca/services/MTXCAService?wsdl Este servicio se llama en Producción desde: https://serviciosjava.afip.gob.ar/wsmtxca/services/MTXCAService _Nota: el URL precedente es al cual se conectará la aplicación cliente, no es un URL para ser ingresado en un navegador Web._ Para visualizar el WSDL en Producción: https://serviciosjava.afip.gob.ar/wsmtxca/services/MTXCAService?wsdl 

### Sitio de Consulta y Canal de Atención 

Para consultas acerca de la arquitectura de Web Services, autenticación y autorización dirigirse a [http://www.arca.gob.ar/ws/](http://www.arca.gob.ar/ws/). Las consultas sobre aspectos técnicos del WS deberán ser remitidas a la cuenta sri@arca.gob.ar. Para su mejor tratamiento, se solicita detallar en el asunto la denominación del WS y ambiente de que se trate (Producción y Homologación), como así también **adjuntar request y response**. Para consultas propias del negocio o normativas, contactarse mediante el sitio [http://www.arca.gob.ar/consultas](http://www.arca.gob.ar/consultas) 

### Validaciones sobre el emisor del comprobante al solicitar CAE o 

### CAEA 

**Campo Código de Error Validación NO es superada** CUIT 10000 Debe encontrarse activa en el Sistema Registral Rechaza 10001 Debe poseer al menos una actividad activa. Rechaza 10002 No debe registrar inconvenientes con su domicilio fiscal. Rechaza 10003 Debe estar dado de alta en el Impuesto al Valor Agregado al momento del envío de la solicitud. Rechaza 

### Autenticación 

Para utilizar cualquiera de los métodos disponibles en el presente WS se deberá remitir la información obtenida del WSAA resultante del proceso de autenticación, mediante el siguiente esquema: 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <...Request>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      . . . .
    </...Request>
  </soapenv:Body>
</soapenv:Envelope>
```
 

Donde: **<authRequest** > es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT de la Contribuyente representada o emisora S long 11 Se validará en todos los casos que la CUIT solicitante se encuentre entre sus representados. El Token y el Sign remitidos deberán ser válidos y no estar vencidos. De no superarse algunas de las situaciones descriptas anteriormente retornará un error del tipo excepcional. 

### Operaciones 

#### Operaciones a realizar según la RG de aplicación. 

- Para “CAE - Codificación de Productos - opción Factura con Detalle” aplican los siguientes métodos:      autorizarComprobante      consultarPuntosVentaCAE 

- Para “CAEA - Codificación de Productos - opción Factura con Detalle” aplican los siguientes métodos:      solicitarCAEA      informarComprobanteCAEA      consultarPuntosVentaCAEA      informarCAEANoUtilizado      informarCAEANoUtilizadoPtoVta      consultarPtosVtaCAEANoInformados      consultarCAEA      consultarCAEAEntreFechas 

- Para ambos:      consultarAlicuotasIVA      consultarComprobante      consultarCondicionesIVA      consultarCondicionesIVAReceptor      consultarCotizacionMoneda      consultarMonedas      consultarPuntosVenta      consultarTiposComprobante      consultarTiposDocumento      consultarTiposTributo      consultarUltimoComprobanteAutorizado      consultarUnidadesMedida      consultarTiposDatosAdicionales      consultarActividadesVigentes 

 dummy Un contribuyente sólo necesita implementar un cliente para los métodos del WS correspondientes a la RG por la cual esté alcanzado. Por ejemplo, si optó por CAEA no es necesario que implemente soporte para los métodos autorizarComprobante y consultarPuntosVentaCAE. 

#### Autorizar un Comprobante CAE (autorizarComprobante) 

El sistema cliente envía la información del comprobante que desea autorizar mediante un requerimiento el cual es atendido por WS MTXCA pudiendo producirse las siguientes situaciones:  Supere todas las validaciones, el comprobante es aprobado, se asigna el CAE y su respectiva fecha de vencimiento,  No supera alguna de las validaciones no excluyentes, el comprobante es aprobado con observaciones, se le asigna el CAE con la fecha de vencimiento,  No supere alguna de las validaciones excluyentes, el comprobante no es aprobado y la solicitud es rechazada. Cabe aclarar que las validaciones excluyentes son aquellas que en el caso de no ser superadas provocan un rechazo y las validaciones no excluyentes aprueban la solicitud pero con observaciones. 

#### Mensaje de Solicitud 

**Esquema** 

Autorizar un Comprobante CAE (autorizarComprobante) 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:autorizarComprobanteRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      <comprobanteCAERequest>
        Autorizar un Comprobante CAE (autorizarComprobante)
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
        <codigoTipoAutorizacion>
          CodigoTipoAutorizacionSimpleType
        </codigoTipoAutorizacion>
        <codigoAutorizacion>
          long
        </codigoAutorizacion>
        <fechaVencimiento>
          date
        </fechaVencimiento>
        <codigoTipoDocumento>
          short
        </codigoTipoDocumento>
        <numeroDocumento>
          long
        </numeroDocumento>
        <condicionIVAReceptor>
          short
        </condicionIVAReceptor>
        <importeGravado>
          ImporteTotalSimpleType
        </importeGravado>
        <importeNoGravado>
          ImporteTotalSimpleType
        </importeNoGravado>
        <importeExento>
          ImporteTotalSimpleType
        </importeExento>
        <importeSubtotal>
          ImporteTotalSimpleType
        </importeSubtotal>
        <importeOtrosTributos>
          ImporteTotalSimpleType
        </importeOtrosTributos>
        <importeTotal>
          ImporteTotalSimpleType
        </importeTotal>
        <codigoMoneda>
          string
        </codigoMoneda>
        <cotizacionMoneda>
          decimal
        </cotizacionMoneda>
        <cancelaEnMismaMonedaExtranjera>
          SiNoSimpleType
        </cancelaEnMismaMonedaExtranjera>
        <observaciones>
          string
        </observaciones>
        <codigoConcepto>
          short
        </codigoConcepto>
        <fechaServicioDesde>
          date
        </fechaServicioDesde>
        <fechaServicioHasta>
          date
        </fechaServicioHasta>
        <fechaVencimientoPago>
          date
        </fechaVencimientoPago>
        <fechaHoraGen>
          dateTime
        </fechaHoraGen>
        <arrayComprobantesAsociados>
          Autorizar un Comprobante CAE (autorizarComprobante)
          <comprobanteAsociado>
            <codigoTipoComprobante>
              short
            </codigoTipoComprobante>
            <numeroPuntoVenta>
              NumeroPuntoVentaSimpleType
            </numeroPuntoVenta>
            <numeroComprobante>
              NumeroComprobanteSimpleType
            </numeroComprobante>
            <cuit>
              long
            </cuit>
            <fechaEmision>
              date
            </fechaEmision>
          </comprobanteAsociado>
        </arrayComprobantesAsociados>
        <periodoComprobantesAsociados>
          <fechaDesde>
            date
          </fechaDesde>
          <fechaHasta>
            date
          </fechaHasta>
        </periodoComprobantesAsociados>
        <arrayOtrosTributos>
          <otroTributo>
            <codigo>
              short
            </codigo>
            <descripcion>
              string
            </descripcion>
            <baseImponible>
              ImporteTotalSimpleType
            </baseImponible>
            <importe>
              ImporteTotalSimpleType
            </importe>
          </otroTributo>
        </arrayOtrosTributos>
        <arrayItems>
          <item>
            <unidadesMtx>
              int
            </unidadesMtx>
            <codigoMtx>
              string
            </codigoMtx>
            <codigo>
              string
            </codigo>
            <descripcion>
              string
            </descripcion>
            <cantidad>
              DecimalSimpleType
            </cantidad>
            <codigoUnidadMedida>
              short
            </codigoUnidadMedida>
            Autorizar un Comprobante CAE (autorizarComprobante)
            <precioUnitario>
              DecimalSimpleType
            </precioUnitario>
            <importeBonificacion>
              DecimalSimpleType
            </importeBonificacion>
            <codigoCondicionIVA>
              short
            </codigoCondicionIVA>
            <importeIVA>
              ImporteSubtotalSimpleType
            </importeIVA>
            <importeItem>
              ImporteSubtotalSimpleType
            </importeItem>
          </item>
        </arrayItems>
        <arraySubtotalesIVA>
          <subtotalIVA>
            <codigo>
              short
            </codigo>
            <importe>
              ImporteTotalSimpleType
            </importe>
          </subtotalIVA>
        </arraySubtotalesIVA>
        <arrayDatosAdicionales>
          <datoAdicional>
            <t>
              short
            </t>
            <c1>
              string
            </c1>
            <c2>
              string
            </c2>
            <c3>
              string
            </c3>
            <c4>
              string
            </c4>
            <c5>
              string
            </c5>
            <c6>
              string
            </c6>
          </datoAdicional>
        </arrayDatosAdicionales>
        <arrayCompradores>
          <comprador>
            <codigoTipoDocumento>
              short
            </codigoTipoDocumento>
            <numeroDocumento>
              long
            </numeroDocumento>
            <porcentaje>
              PorcentajeSimpleType
            </porcentaje>
            Autorizar un Comprobante CAE (autorizarComprobante)
          </comprador>
        </arrayCompradores>
        <arrayActividades>
          <actividad>
            <codigo>
              long
            </codigo>
          </actividad>
        </arrayActividades>
      </comprobanteCAERequest>
    </ser:autorizarComprobanteRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<comprobanteCAEARequest>** contiene los datos del comprobante. Es del tipo **ComprobanteType. IMPORTANTE: para mas detalles sobre éste y otros tipos de datos consultar la Sección 3: “Definición de Tipos de Datos”** 

 Autorizar un Comprobante CAE (autorizarComprobante) 

##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:autorizarComprobanteResponse>
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

Autorizar un Comprobante CAE (autorizarComprobante)
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
    </ser:autorizarComprobanteResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

Autorizar un Comprobante CAE (autorizarComprobante) Donde: **<autorizarComprobanteResponse> Campo Descripción Oblig Tipo Long** resultado A: Aprobado, O: Observado, R: Rechazado S ResultadoSimpleTy pe 1 comprobanteRespo nse Existe si el resultado es Aprobado. Contiene los datos que identifican al comprobante y los referentes a la autorización. N ComprobanteCAER esponseType -arrayObservaciones Indica los motivos por los cuales el comprobante fue autorizado con observaciones, en caso de corresponder. N ArrayCodigosDescr ipcionesType -arrayErrores Si la solicitud fue rechazada, detalla el o los motivos que dieron origen al rechazo. N ArrayCodigosDescr ipcionesType -evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcion Type -**<comprobanteResponse>** es del tipo **ComprobanteCAEResponseType <comprobanteResponse> Campo Descripción Oblig Tipo Long** cuit Cuit Emisora del comprobante S long 11 codigoTipoComprob ante Especifica el tipo de comprobante S short 3 numeroPuntoVenta Indica el número de punto de venta del 

S (^) NumeroPuntoVentaS 5 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo Descripción Oblig Tipo Long** comprobante autorizado impleType numeroComprobant e Indica el número del comprobante aprobadoS NumeroComprobant eSimpleType 8 fechaEmision Fecha de emisión del comprobante. S date -CAE CAE asignado al comprobante autorizado. S long 14 fechaVencimientoC AE Fecha de vencimiento del CAE otorgado. S date -

##### Ejemplo para “Autorizar Comprobante” 

Ejemplo Factura A 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:autorizarComprobanteRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <comprobanteCAERequest>
        <codigoTipoComprobante>
          1
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          4000
        </numeroPuntoVenta>
        <numeroComprobante>
          1
        </numeroComprobante>
        <fechaEmision>
          2010-11-01
        </fechaEmision>
        <codigoTipoDocumento>
          80
        </codigoTipoDocumento>
        Autorizar un Comprobante CAE (autorizarComprobante)
        <numeroDocumento>
          30000000007
        </numeroDocumento>
        <condicionIVAReceptor>
          1
        </condicionIVAReceptor>
        <importeGravado>
          100.00
        </importeGravado>
        <importeNoGravado>
          0.00
        </importeNoGravado>
        <importeExento>
          0.00
        </importeExento>
        <importeSubtotal>
          100.00
        </importeSubtotal>
        <importeOtrosTributos>
          1.00
        </importeOtrosTributos>
        <importeTotal>
          122.00
        </importeTotal>
        <codigoMoneda>
          PES
        </codigoMoneda>
        <cotizacionMoneda>
          1
        </cotizacionMoneda>
        <cancelaEnMismaMonedaExtranjera>
          N
        </cancelaEnMismaMonedaExtranjera>
        <observaciones>
          Observaciones Comerciales, libre
        </observaciones>
        <codigoConcepto>
          1
        </codigoConcepto>
        <arrayOtrosTributos>
          <otroTributo>
            <codigo>
              99
            </codigo>
            <descripcion>
              Otro Tributo
            </descripcion>
            <baseImponible>
              100.00
            </baseImponible>
            <importe>
              1.00
            </importe>
          </otroTributo>
        </arrayOtrosTributos>
        <arrayItems>
          <item>
            <unidadesMtx>
              123456
            </unidadesMtx>
            <codigoMtx>
              0123456789913
            </codigoMtx>
            <codigo>
              P0001
            </codigo>
            <descripcion>
              Descripción del producto P0001
              <descripcion>
                <cantidad>
                  1.00
                </cantidad>
                <codigoUnidadMedida>
                  7
                </codigoUnidadMedida>
                <precioUnitario>
                  100.00
                </precioUnitario>
                <importeBonificacion>
                  0.00
                </importeBonificacion>
                <codigoCondicionIVA>
                  5
                </codigoCondicionIVA>
                Autorizar un Comprobante CAE (autorizarComprobante)
                <importeIVA>
                  21.00
                </importeIVA>
                <importeItem>
                  121.00
                </importeItem>
              </item>
            </arrayItems>
            <arraySubtotalesIVA>
              <subtotalIVA>
                <codigo>
                  5
                </codigo>
                <importe>
                  21.00
                </importe>
              </subtotalIVA>
            </arraySubtotalesIVA>
            <arrayActividades>
              <actividad>
                <codigo>
                  120010
                </codigo>
              </actividad>
              <actividad>
                <codigo>
                  463300
                </codigo>
              </actividad>
            </arrayActividades>
          </comprobanteCAERequest>
        </ser:autorizarComprobanteRequest>
      </soapenv:Body>
    </soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:autorizarComprobanteResponse>
      <resultado>
        A
      </resultado>
      <comprobanteResponse>
        <cuit>
          66666666666
        </cuit>
        <codigoTipoComprobante>
          1
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          4000
        </numeroPuntoVenta>
        Autorizar un Comprobante CAE (autorizarComprobante)
        <numeroComprobante>
          1
        </numeroComprobante>
        <fechaEmision>
          2010-11-01
        </fechaEmision>
        <CAE>
          12345678901234
        </CAE>
        <fechaVencimientoCAE>
          2010-11-16
        </fechaVencimientoCAE>
      </comprobanteResponse>
    </ser:autorizarComprobanteResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Ejemplo Factura B 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:autorizarComprobanteRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <comprobanteCAERequest>
        <codigoTipoComprobante>
          6
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          4000
        </numeroPuntoVenta>
        <numeroComprobante>
          1
        </numeroComprobante>
        <fechaEmision>
          2010-12-15
        </fechaEmision>
        <codigoTipoDocumento>
          96
        </codigoTipoDocumento>
        <numeroDocumento>
          24999999
        </numeroDocumento>
        <condicionIVAReceptor>
          5
        </condicionIVAReceptor>
        <importeGravado>
          100.00
        </importeGravado>
        <importeNoGravado>
          0.00
        </importeNoGravado>
        <importeExento>
          100.00
        </importeExento>
        <importeSubtotal>
          200.00
        </importeSubtotal>
        Autorizar un Comprobante CAE (autorizarComprobante)
        <importeOtrosTributos>
          0.01
        </importeOtrosTributos>
        <importeTotal>
          221.01
        </importeTotal>
        <codigoMoneda>
          PES
        </codigoMoneda>
        <cotizacionMoneda>
          1
        </cotizacionMoneda>
        <cancelaEnMismaMonedaExtranjera>
          N
        </cancelaEnMismaMonedaExtranjera>
        <observaciones>
          Campo Observaciones
        </observaciones>
        <codigoConcepto>
          1
        </codigoConcepto>
        <arrayOtrosTributos>
          <otroTributo>
            <codigo>
              99
            </codigo>
            <descripcion>
              Descripcion de otros tributos
            </descripcion>
            <baseImponible>
              100
            </baseImponible>
            <importe>
              0.01
            </importe>
          </otroTributo>
        </arrayOtrosTributos>
        <arrayItems>
          <item>
            <unidadesMtx>
              1
            </unidadesMtx>
            <codigoMtx>
              0123456789913
            </codigoMtx>
            <codigo>
              Codigo interno de la empresa
            </codigo>
            <descripcion>
              Producto 1
            </descripcion>
            <cantidad>
              1
            </cantidad>
            <codigoUnidadMedida>
              1
            </codigoUnidadMedida>
            <precioUnitario>
              121
            </precioUnitario>
            <importeBonificacion>
              0
            </importeBonificacion>
            <codigoCondicionIVA>
              5
            </codigoCondicionIVA>
            <importeItem>
              121.00
            </importeItem>
          </item>
          <item>
            <unidadesMtx>
              1
            </unidadesMtx>
            <codigoMtx>
              0123456779914
            </codigoMtx>
            <codigo>
              Codigo interno de la empresa
            </codigo>
            Autorizar un Comprobante CAE (autorizarComprobante)
            <descripcion>
              Producto 2
            </descripcion>
            <cantidad>
              1
            </cantidad>
            <codigoUnidadMedida>
              7
            </codigoUnidadMedida>
            <precioUnitario>
              100
            </precioUnitario>
            <codigoCondicionIVA>
              2
            </codigoCondicionIVA>
            <importeItem>
              100
            </importeItem>
          </item>
        </arrayItems>
        <arraySubtotalesIVA>
          <subtotalIVA>
            <codigo>
              5
            </codigo>
            <importe>
              21
            </importe>
          </subtotalIVA>
        </arraySubtotalesIVA>
        <arrayActividades>
          <actividad>
            <codigo>
              120010
            </codigo>
          </actividad>
          <actividad>
            <codigo>
              463300
            </codigo>
          </actividad>
        </arrayActividades>
      </comprobanteCAERequest>
    </ser:autorizarComprobanteRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Body>
    <ns1:autorizarComprobanteResponse xmlns:ns1="http://impl.service.wsmtxca.afip.gob.ar/service/">
      <resultado>
        A
      </resultado>
      <comprobanteResponse>
        Autorizar un Comprobante CAE (autorizarComprobante)
        <cuit>
          66666666666
        </cuit>
        <codigoTipoComprobante>
          6
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          1
        </numeroPuntoVenta>
        <numeroComprobante>
          10
        </numeroComprobante>
        <fechaEmision>
          2010-12-15
        </fechaEmision>
        <CAE>
          60504000053157
        </CAE>
        <fechaVencimientoCAE>
          2010-12-25
        </fechaVencimientoCAE>
      </comprobanteResponse>
    </ns1:autorizarComprobanteResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

 Autorizar un Comprobante CAE (autorizarComprobante) 

#### Validaciones del Negocio 

**<authRequest>...</authRequest> Campo Código de Error Validación No es superada** cuitRepresentada 10005 La cuit emisora ha sido incluída en la consulta de facturas apócrifas Rechaza cuitRepresentada 10010 Debe encontrarse empadronado en Codificación de Productos opción Factura con Detalle Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **<comprobanteCAERequest>…</comprobanteCAERequest>** 

###### Validaciones Excluyentes 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante 100 Podrá ser: 1 – Factura A 2 – Nota de Débito A 3 – Nota de Crédito A 6 – Factura B 7 – Nota de Débito B 8 – Nota de Crédito B 51 – Factura A con leyenda OPERACIÓN SUJETA A RETENCIÓN 52 – Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 – Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 201 Factura de Crédito Electrónica MiPyMEs (FCE) A 202 Nota de Débito Electrónica MiPyMEs (FCE) A 203 Nota de Crédito Electrónica MiPyMEs (FCE) A 206Factura de Crédito Electrónica MiPyMEs (FCE) B 207 Nota de Débito Electrónica MiPyMEs (FCE) B 208 Nota de Crédito Electrónica MiPyMEs (FCE) B Consultar método _consultarTiposComprobant e_ Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante/ cuitRepresentada 100 El contribuyente no se encuentra habilitado a emitir (según el tipo de comprobante indicado) comprobantes A, A con leyenda PAGO EN CBU INFORMADA o A con leyenda OPERACIÓN SUJETA A RETENCIÓN Rechaza numeroPuntoVenta 101 Debe ser del tipo habilitado para el régimen CAE Codificación de Productos – Web Services y no debe estar bloqueado. Consultar método _consultarPuntosVenta_ o _consultarPuntosVentaCAE_ Rechaza numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 102 El número de comprobante informado debe ser mayor en 1 al último informado para igual punto de venta y tipo de comprobante. De no existir comprobante informado para igual punto de venta y codigoTipoComprobante, el número de comprobante debe ser igual a 1 (uno) Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** fechaEmision 103 Opcional. Para <codigoConcepto> igual a 1, la fecha de emisión del comprobante puede ser hasta 5 días anteriores o posteriores respecto de la fecha de generación, pero sin extenderse al mes siguiente; si se indica <codigoConcepto> igual a 2 ó 3 puede ser hasta 10 días anteriores o posteriores a la fecha de generación Obs.: Si no se envía se le asignará la fecha de proceso. Rechaza fechaEmision / numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 104 La fecha de emisión debe ser mayor o igual a la fecha de emisión del último comprobante del mismo tipo e igual número de punto de venta. Rechaza codigoTipoAutorizacion 105 No debe informarse Rechaza codigoAutorizacion 106 No debe informarse Rechaza fechaVencimiento 107 No debe informarse Rechaza codigoTipoDocumento / numeroDocumento 108 Si se informa uno de los campos debe informarse el otro. Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** importeGravado 110 Si <codigoTipoComprobante > es igual a 1, 2, 3, 51, 52, 53, 201, 202 ó 203: Deberá ser igual a la sumatoria de <importeItem> menos <importeIVA> para la totalidad de los ítems con <codigoCondicionIVA> igual a 3, 4, 5 ó 6. Si <codigoTipoComprobante > es igual a 6, 7 , 8, 206, 207 u 208: Deberá ser igual a la sumatoria de <importeItem> menos el IVA correspondiente (calculado en base al importe y la alícuota de cada ítem), para la totalidad de los ítems con <codigoCondicionIVA> igual a 3, 4, 5 ó 6. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems gravados * Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** importeNoGravado 111 Deberá coincidir con la sumatoria de <importeItem> para los ítems con <codigoCondicionIVA> igual a 1. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems no gravados * Rechaza importeExento 112 Deberá coincidir con la sumatoria de <importeItem> para los ítems con <codigoCondicionIVA> igual a 2. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems exentos * Rechaza importeSubtotal 113 Deberá coincidir con la sumatoria de los campos <importeNoGravado>, <importeGravado>, <importeExento>. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** importeOtrosTributos 114 Debe ser igual a la sumatoria de la totalidad de los campos <otroTributo><importe> (dentro de <arrayOtrosTributos>). Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de tributos * Rechaza importeTotal 115 Debe ser igual a <importeSubtotal>+ <importeOtrosTributos> + sumatoria de <subtotalIVA><importe> (dentro del arraySubtotalesIVA). Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * Rechaza importeTotal 116 Debe ser igual a <importeOtrosTributos> + la sumatoria de la totalidad de los campos <importeItem>. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems * Rechaza codigoMoneda 117 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarMonedas_ Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** cancelaEnMismaMonedaExtra njera 118 En caso de enviar la marca de que el pago del comprobante se realiza en la misma moneda extranjera para comprobantes que no sean facturas. Unicamente se puede utilizar con los códigos habilitados (1,6,51,201,206) Rechaza cotizacionMoneda 119 No podrá ser inferior al 2% ni superior en un 400 % del que suministra ARCA como orientativo de acuerdo a la cotización oficial Rechaza cotizacionMoneda 120 Debe ser igual a 1 (uno) si <codigoMoneda> es igual a PES Rechaza cancelaEnMismaMonedaExtra njera 164 En caso de enviar un valor inválido para la marca de que el pago de la factura se realiza en la misma moneda extranjera. Los valores válidos son S, N o vacío Rechaza codigoMoneda/ cancelaEnMismaMonedaExtra njera 169 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera y enviar como código de moneda el Peso Argentino Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoMoneda/ cotizacionMoneda/ cancelaEnMismaMonedaExtra njera 192 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera, que codigoMoneda es del grupo de monedas con cotización del Banco de la Nación Argentina (ver Anexo Monedas BNA), que haya cotización y que la misma no coincida exactamente con el valor enviado en el campo cotizacionMoneda. En cuyo caso se podrá omitir el mismo para que la cotización de la factura sea la obtenida de los registros de ARCA Rechaza cotizacionMoneda 194 El campo es obligatorio a excepción de los casos para los cuales se envia el campo cancelaEnMismaMonedaEx tranjera y se puede obtener la cotizacion asociada al codigoMoneda si esta es del grupo de monedas del Banco de la Nación Argentina (ver Anexo Monedas BNA) Rechaza cotizacionMoneda 195 No es posible indicar una cotización negativa Rechaza codigoTipoComprobante / codigoTipoDocumento / numeroDocumento 253 Si <codigoTipoComprobante > NO es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue inactivado o invalidado. Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / codigoTipoDocumento / numeroDocumento 265 Si <codigoTipoComprobante > NO es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue limitada por haber sido caracterizada como sujeto no confiable en materia de Seguridad Social. Rechaza codigoTipoDocumento / numeroDocumento 303 Si <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue limitada por haber sido marcada como Apocrifa. Rechaza codigoConcepto 121 Deberá ser igual a alguno de los siguientes valores: 1 – Productos 2 – Servicios 3 – Productos y Servicios Rechaza fechaServicioDesde 122 Opcional. Debe informarse si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Rechaza fechaServicioHasta 123 Opcional. Debe informarse si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Rechaza fechaVencimientoPago 124 Opcional. Debe informarse si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Rechaza fechaVencimientoPago / fechaEmision 125 La fecha de vencimiento de pago debe ser posterior o igual a la fecha de emisión. Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** arraySubtotalesIVA 127 Opcional. Debe informarse si algún ítem tiene <codigoCondicionIVA> igual a 4, 5 ó 6. En otro caso no corresponde. Rechaza codigoTipoDocumento / numeroDocumento 128 Opcionales. Deberán informarse en los siguientes casos: 

- cuando <codigoTipoComprobant e> es igual a 1, 2, 3, 51, 52, 53, 201, 202, 203, 206, 207 ó 208. -cuando <codigoTipoComprobant e> es igual a 6, 7 u 8 y el importe total del comprobante <importeTotal> es mayor ó igual al monto en pesos resultante según RG4444.     Rechaza codigoTipoDocumento 129 Si <codigoTipoComprobante > es igual a 1, 2, 3, 51, 52, 53, 201, 202, 203, 206, 207 ó 208. <codigoTipoDocumento> deberá ser igual a 80 (CUIT) Rechaza numeroDocumento 131 El Receptor no puede ser igual al Emisor Rechaza codigoTipoDocumento 132 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarTiposDocumento_ Rechaza fechaServicioDesde / fechaServicioHasta 133 La Fecha de Servicio desde debe ser menor o igual a la Fecha de Servicio Hasta Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** numeroPuntoVenta / codigoTipoComprobante 135 Solicitudes de autorización para un mismo punto de venta y tipo de comprobante deben ser enviadas en forma sincrónica: si el WS recibe una nueva solicitud para un punto de venta y tipo de comprobante dado mientras la anterior está siendo procesada, la nueva solicitud será rechazada Rechaza importeOtrosTributos 145 Si <codigoTipoComprobante > es igual a 6, 7 u 8, <codigoTipoDocumento> es 80 (CUIT) y <numeroDocumento> es 23000000000 (No Categorizado), el importeOtrosTributos deberá ser mayor a 0 (cero) Rechaza fechaHoraGen 146 La fecha/hora de generación solo debe informarse para comprobantes CAEA Rechaza cuitRepresentada 147 Si <codigoTipoComprobante > es igual a 201, 202, 203, 206, 207 ó 208. Por las condiciones de la CUIT Emisora, no corresponde realizar FCE Rechaza fechaVencimientoPago 148 Si <codigoTipoComprobante > es igual a 201 ó 206. La Fecha de Vencimiento de Pago es obligatorio para Facturas de Crédito MiPyME Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** fechaVencimientoPago 149 Si <codigoTipoComprobante > es igual a 202, 203, 207 ó 208. La Fecha de Vencimiento de Pago no debe informarse para Notas de Crédito o Débito de las Facturas de Crédito MiPYME Rechaza codigoTipoDocumento / numeroDocumento 150 Si <codigoTipoComprobante > es igual a 201, 202, 203, 206, 207 ó 208. La CUIT Receptora no está incluida en el listado de empresas grandes según cronograma vigente ni optó por ser receptora de Factura de Crédito MiPyme Rechaza cuitRepresentada / codigoTipoDocumento / numeroDocumento / importeTotal 151  Si <codigoTipoComprobant e> es igual a 1 ó 6, **y**  La CUIT Receptora está incluida en el listado de empresas grandes según cronograma vigente u optó por ser receptora de Factura de Crédito MiPyme, **y**  Por las condiciones de la CUIT Emisora, **y**  El monto facturado es mayor o igual al Reglamentado Corresponde realizar Factura Electrónica de Crédito MiPyME, realice un comprobante con <codigoTipoComprobante > 201 o 206. Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** cuitRepresentada / codigoTipoDocumento / numeroDocumento / importeTotal 152  Si <codigoTipoComprobant e> es igual a 201 ó 206, **y**  La CUIT Receptora está incluida en el listado de empresas grandes según cronograma vigente u optó por ser receptora de Factura de Crédito MiPyme, **y**  Por las condiciones de la CUIT Emisora, **y**  El monto facturado es menor al Reglamentado NO Corresponde realizar Factura Electrónica de Crédito MiPyME, realice un comprobante con <codigoTipoComprobante > 1 o 6. Rechaza importeTotal 153 Si <codigoTipoComprobante > es igual a 203 ó 208. El importe total del comprobante a autorizar no puede ser mayor o igual al saldo de la operación actual de la cuenta corriente Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoMoneda 154 Si <codigoTipoComprobante > es igual a 202, 203, 207 ó 208, la moneda debe:  coincidir con la Factura vinculada, ó  ser Pesos Argentinos si la Factura vinculada ya fue aceptada, cancelada o rechazada y se desea realizar un ajuste por diferencia de cambio Rechaza numeroDocumento 155 Si <codigoTipoComprobante > es igual a 201, 202, ó 203 la CUIT del receptor debe encontrarse activa en 

###### IVA o en monotributo. 

Rechaza numeroDocumento 156 Si <codigoTipoComprobante > es igual a 206, 207, ó 208 la CUIT del receptor debe encontrarse activa como Responsable Inscripto en IVA, IVA Exento o Monotributista. Rechaza numeroDocumento 157 Si <codigoTipoComprobante > es igual a 201, 202, 203, 206, 207 ó 208. La CUIT Receptora no registra alta en el Domicilio Fiscal Electrónico Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** fechaEmision / codigoMoneda 158 Si <codigoTipoComprobante > es igual a 202, 203, 207 ó 208. Para realizar una Nota de Débito o Crédito con moneda distinta a la Factura la <fechaEmision> de la misma debe ser posterior a la aceptación de la Factura o Cuenta Corriente Asociada Rechaza codigoTipoComprobante / periodoComprobantesAsociad os 159 Si <codigoTipoComprobante > es igual a 202, 203, 207 ó 208 perteneciente a Factura de Crédito Electrónica no corresponde informar un periodo de comprobantes asociados. Rechaza codigoTipoComprobante / arrayComprobantesAsociados / periodoComprobantesAsociad os 160 Si <codigoTipoComprobante > es igual a 2, 3, 7, 8, 52 ó 53. Falta informar comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito válido/s o informar un período de comprobantes asociados válido Rechaza codigoTipoComprobante / arrayComprobantesAsociados / periodoComprobantesAsociad os 161 Si <codigoTipoComprobante > es igual a 2, 3, 7, 8, 52 ó 53. No debe informar un período de comprobantes asociados cuando informa comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / periodoComprobantesAsociad os 162 Si <codigoTipoComprobante > es igual a 1, 2, 51, 201 ó 206 correspondientes a Facturas no corresponde informar un periodo de comprobantes asociados. Rechaza codigoTipoDocumento / numeroDocumento 163 La cuit receptora se encuentra inactiva por haber sido inlcuída en la consulta de facturas apócrifas. Rechaza codigo / arrayActividades 165 Si ocurrió un error imprevisto al momento de validar las actividades a quedar asociadas al comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigo / arrayActividades 166 Si <codigo> se encuentra mas de una vez en el array de actividades (no admite repetidos). Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigo / arrayActividades 167 Si <codigo> no se encuentra entre las actividades vigentes para la cuit representada. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigo / arrayActividades 168 Si <codigo> se encuentra asociado a un conjunto de actividades de un “rubro” y se encontraron otros <codigo> dentro del array que se encuentran asociados a otro conjunto de un “rubro” distinto. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 170 Si ocurrio un error imprevisto al validar los comprobantes asociados que sean de tipo remito (88, 990, 91, 995, 997, 993, 994). Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 171 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y no fue encontrado en los registros de ARCA, o bien fue encontrado, pero la información asociada al mismo no es la esperada. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 172 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero el mismo se encuentra en un estado inválido. Dichos estados varian según el tipo de remito del que se trate. Ver el Anexo de Rubros de Actividades y Remitos Rechaza numeroDocumento / arrayComprobantesAsociados 173 Si el comprobante asociado es del tipo remito (91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero la cuit del receptor de dicho remito no coincide con la cuit del receptor del comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 175 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y el tipo de comprobante asociado es remito, pero el mismo no es carnico (88, 990, 91, 997, 993, 994), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 176 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” o “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado o Tabaco en Hebras (91, 997, 993, 994, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 177 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado (990, 91, 997, 993, 994, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 178 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco en Hebras (88, 91, 997, 993, 994, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 180 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y el tipo de comprobante asociado es remito, pero el mismo no es Harina (88, 91, 997, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 181 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y no se especifico ningún Remito del tipo Harina (993 y 994), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza/Observa según fechas en la RG 5264/2022 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 182 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y no se especifico ningún Remito del tipo Carnico (995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza/Observa según fechas en RG 5259/2022 codigoConcepto / arrayComprobantesAsociados 183 Los códigos de concepto permitidos para asociar Remitos Cárnicos (995) al Comprobante son 1 – Productos y 3 – Productos y Servicios Rechaza codigoTipoComprobante / arrayComprobantesAsociados arrayActividades 184 Si no se especifican actividades, y el Remito a Asociar es un Remito Sectorial (88, 990, 993, 994, 995, 997), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 185 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero se encuentra marcado como de exportación, mientras que el presente servicio solo acepta Remitos para el Mercado. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / arrayComprobantesAsociados 186 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y ya fue declarado una vez en el array de comprobantes asociados. Ver el Anexo de Rubros de Actividades y Remitos Rechaza condicionIVAReceptor/ fechaEmision 190 Si no se informa la condición de IVA del Receptor (obligatoria) o bien se informa un valor no contemplado por el servicio. Ver método consultarCondicionesIVAR eceptor Rechaza condicionIVAReceptor/ codigoTipoComprobante/ fechaEmision 191 Si se informa una combinación invalida de Condición de IVA del Receptor y Tipo de Comprobante. Ver método consultarCondicionesIVAR eceptor Rechaza 

 Autorizar un Comprobante CAE (autorizarComprobante) 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada** codigoTipoDocumento / numeroDocumento 109 Si <codigoTipoDocumento> es igual a 80, 86 o 87, <numeroDocumento> debe ser válido y activo, excepto para <codigoTipoComprobante> 6, 7 u 8, <codigoTipoDocumento> 80 y <numeroDocumento> igual a 23000000000. Observa numeroDocumento 130 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 la CUIT del receptor debe encontrarse activa en IVA o en monotributo Observa numeroDocumento 134 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 y <codigoTipoDocumento> es igual a 80 (CUIT), dicha CUIT deberá encontrarse activa en el Sistema Registral Observa codigoTipoDocumento / numeroDocumento 164 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 la CUIT del receptor es activa en monotributo Observa cuitRepresentada 169 Si <cuitRepresentada> tiene pendiente de presentación el formulario de habilitación de comprobantes o su fecha de presentación es anterior a tu alta en IVA Observa numeroDocumento 188 Si <numeroDocumento> es inexistente en el padron del Organismo Observa 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** codigoTipoComprobante/ arrayComprobantesAsoci ados/importeTotal 194 Siendo <codigoTipoComprobante> una Nota de Crédito (3, 8, 53, 203 y 208), si la sumatoria de los importes totales de los elementos del array <arrayComprobantesAsociados> (sin incluir Remitos) supera el <importeTotal> de la Nota de Crédito Observa codigoTipoComprobante/ codigoTipoDocumento/ numeroDocumento 253 Si <codigoTipoComprobante> es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue inactivado o invalidado. Observa codigoTipoComprobante/ codigoTipoDocumento/ numeroDocumento 265 Si <codigoTipoComprobante> es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue limitada por haber sido caracterizada como sujeto no confiable en materia de Seguridad Social. Observa codigoTipoComprobante / numeroDocumento 311 Si el <numeroDocumento> del receptor/comprador se encuentra marcada como fallecido y no está marcado como sucesión indivisa. Observa 

Autorizar un Comprobante CAE (autorizarComprobante) **<comprobanteAsociado>…</comprobanteAsociado>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigoTipoComprobante 200 

###### Deberá ser igual a 88 o 990 si el tipo 

###### de comprobante cuya autorización 

###### se solicita es igual a 1, 6 o 51 

###### Deberá ser igual a 1, 2, 3, 88 o 990 si 

###### el tipo de comprobante cuya 

###### autorización se solicita es igual a 2 o 

###### 3. 

###### Deberá ser igual a 6, 7, 8, 88 o 990 si 

###### el tipo de comprobante cuya 

###### autorización se solicita es igual a 7 u 

###### 8. 

###### Deberá ser igual a 51, 52, 53, 88 o 

###### 990 si el tipo de comprobante cuya 

###### autorización se solicita es igual a 52 

###### o 53. 

###### Deberá ser igual a 201, 202, 203, 88, 

###### 91, 990 o 995 si el tipo de 

###### comprobante cuya autorización se 

###### solicita es igual a 202 o 203. 

###### Deberá ser igual a 206, 207, 208, 88, 

###### 91, 990 o 995 si el tipo de 

###### comprobante cuya autorización se 

###### solicita es igual a 207 u 208. 

Rechaza numeroPuntoVenta 202 

###### El tipo de punto de venta, en caso de 

###### ser electrónico, deberá ser alguno de 

###### los siguientes: RECE para aplicativo y 

###### web services, Factura en Línea 

###### Responsable Inscripto, Factura en 

###### Línea Método Alternativo al RECE 

###### (límite de 100), Codificación de 

###### Productos Web services, 

###### Codificación de Productos Factura 

###### en Línea, CAEA Fact. Elect. (RECE) 

 Rechaza 

 Autorizar un Comprobante CAE (autorizarComprobante) Campo Código de Error Validación NO es superada 

###### RI IVA o CAEA Codificación de 

###### Productos. 

codigoTipoComprobante 203 

###### Deberá ser igual a 1, 2, 3, 6, 7, 8, 51, 

###### 52, 53, 201, 202, 203, 206, 207, 208, 

###### 88, 91, 990 o 995. 

Rechaza codigoTipoComprobante / cuit 204 

###### El campo cuit es opcional y solo 

###### puede completarse si el tipo de 

###### comprobante es 88 o 990 (solo es 

###### necesario si el remito fue emitido 

###### por un tercero) 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 205 

###### El remito asociado deberá obrar en 

###### las bases del organismo. 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 206 

###### Si remito asociado corresponde a 

###### tabaco de terceros, deberá estar en 

###### estado Confirmado 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 207 

###### El receptor del remito asociado 

###### deberá conicidir con el receptor del 

###### comprobante 

Rechaza codigoTipoComprobante 208 

###### Deberá ser igual a 88, 91, 990 o 995 

###### si el tipo de comprobante cuya 

###### autorización se solicita es igual a 201 

###### o 206 

Rechaza cuit 209 

###### Al autorizar una nota de débito o 

###### crédito de Factura Electrónica de 

###### Crédito MiPyME (202, 203, 207, 

###### 208), debe enviar el campo cuit para 

###### el tipo de comprobante asociado 

###### indicado 

Rechaza cuit 210 

###### Al autorizar una nota de débito o 

###### crédito de Factura Electrónica de 

###### Crédito MiPyME (202, 203, 207, 

###### 208), el campo cuit para el tipo de 

###### comprobante asociado indicado 

###### debe coincidir con la cuit emisora del 

###### comprobante a autorizar 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante 211 

###### Si el punto de venta es del tipo 

###### electrónico el comprobante asociado 

###### <codigoTipoComprobante> 

 Rechaza 

 Autorizar un Comprobante CAE (autorizarComprobante) Campo Código de Error Validación NO es superada 

###### <numeroPuntoVenta> 

###### <numeroComprobante> deberá 

###### obrar en las bases del organismo. 

arrayComprobantesAsociados 212 

###### Al autorizar una nota de débito o 

###### crédito de Factura Electrónica de 

###### Crédito MiPyME (202, 203, 207, 

###### 208), debe haber un y sólo un 

###### comprobante asociado de Factura 

###### Electrónica de Crédito MiPyME: 

######  201 o 206, para NO 

###### anulación 

######  201, 202, 203, 206, 207 o 

###### 208, para Anulación 

Rechaza arrayComprobantesAsociados 213 

###### Para CUITS Emisoras y Receptoras 

###### candidatas al Régimen de Factura 

###### Electrónica de Crédito, al autorizar 

###### una nota de débito o crédito de 

###### Factura Electrónica (2, 3, 7, 8, 52, 

###### 53), debe haber al menos un 

###### comprobante asociado de Factura 

###### Electrónica (1, 2, 3, 6, 7, 8, 51, 52 o 

###### 53) 

Rechaza codigoTipoComprobante 214 

###### Si está presente el dato adicional 

###### código 22 en S (es una nota de 

###### anulación): 

######  Si el tipo de comprobante a 

###### autorizar es una nota de 

###### crédito (203 o 208) el tipo de 

###### comprobante asociado a 

###### revertir debe ser 201, 202, 

###### 206 ó 207 

###### Si el tipo de comprobante a 

###### autorizar es una nota de 

###### débito (202 o 207) el tipo de 

###### comprobante asociado a 

###### revertir debe ser 203 ó 208 

Rechaza codigoTipoComprobante 215 

###### Si está presente el dato adicional 

###### código 22 en N (NO es una nota de 

###### anulación), debe existir un 

 Rechaza 

 Autorizar un Comprobante CAE (autorizarComprobante) Campo Código de Error Validación NO es superada 

###### comprobante asociado del tipo 201 

###### o 206. 

codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 216 

###### Si el comprobante a autorizar es de 

###### Anulación, el comprobante asociado 

###### debe haber sido rechazado por el 

###### comprador mediante el Sistema de 

###### Regitro de Facturas Electrónicas de 

###### Crédito MiPyME. 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 217 

###### Si el comprobante a autorizar NO es 

###### de Anulación, el comprobante 

###### asociado NO debe haber sido 

###### rechazado por el comprador 

###### mediante el Sistema de Regitro de 

###### Facturas Electrónicas de Crédito 

###### MiPyME. 

Rechaza fechaEmision 218 

###### Al autorizar un comprobante de 

###### Factura Electrónica de Crédito 

###### MiPyME (201, 202, 203, 206, 207, 

###### 208), debe enviar el campo 

###### fechaEmision para el comprobante 

###### asociado del tipo Remito 

Rechaza fechaEmision 219 

###### La fecha de emisión del 

###### comprobante asociado no puede ser 

###### posterior a la fecha del comprobante 

###### a autorizar 

Rechaza fechaEmision 220 

###### La fecha de emisión del 

###### comprobante asociado informada no 

###### coincide con la existente en nuestros 

###### registros 

Rechaza fechaEmision 221 

###### La fecha de emisión de este 

###### comprobante no puede ser anterior 

###### a la factura asociada 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 222 

###### El comprobante asociado no posee 

###### cuit del receptor 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / 223 

###### El comprobante asociado posee otro 

###### cuit de receptor 

 Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** cuit fechaEmision 224 

###### Si el punto de venta del 

###### comprobante asociado NO es del 

###### tipo electrónico debe informar la 

###### fecha de emisión 

Rechaza fechaEmision 225 

###### Si el punto de venta del 

###### comprobante asociado NO es del 

###### tipo electrónico la fecha de emisión 

###### no puede ser posterior a la fecha de 

###### la autorización 

 Rechaza 

 Autorizar un Comprobante CAE (autorizarComprobante) 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada <periodoComprobantesAsociados>…</ periodoComprobantesAsociados>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** fechaDesde / fechaHasta 2200 

###### La fechaHasta debe ser posterior o 

###### igual fechaDesde 

Rechaza fechaHasta / fechaEmision 2201 

###### La fechaHasta del 

###### periodoComprobantesAsociados 

###### debe ser anterior o igual a la fecha 

###### de emisión del comprobante por el 

###### cual se está solicitando la 

###### autorización 

 Rechaza 

###### Validaciones NO Excluyentes 

 Campo Código de Error Validación NO es superada fechaDesde / fechaHasta 2202 Si el comprobante a autorizar incluye percepciones, el rango de fecha informado debe corresponder al mismo Mes/Año Observa 

Autorizar un Comprobante CAE (autorizarComprobante) **<otroTributo>...</otroTributo>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigo 300 Valores permitidos: consultar método _consultarTiposTributo_ Rechaza descripcion 301 Opcional. Deberá informarse si <codigo> es igual a 99 Rechaza descripcion 302 Es obligatorio ingresar una Descripción al realizar un tipo de comprobante de Factura Electrónica de Crédito MiPyME Rechaza **<subtotalIVA>...</subtotalIVA>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigo 400 Valores permitidos: 4, 5, 6 Rechaza importe 401 Para comprobantes clase “A” o “A con leyenda OPERACIÓN SUJETA A RETENCIÓN”: Deberá coincidir con la sumatoria de todos los <importeIVA> de <item> donde la alícuota de IVA coincida con la indicada, es decir, donde <codigoCondicionIVA> de <item> = <codigo> de <subtotalIVA>. Para comprobantes clase “B”: Deberá coincidir con la sumatoria de todos los importes IVA calculados en base al importe y alícuota IVA de <item> donde la alícuota de IVA coincida con la indicada, es decir, donde <codigoCondicionIVA> de Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** <item> = <codigo> de <subtotalIVA>. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems con igual código de alícuota de IVA * codigo 402 No se deberá repetir (no pueden incluírse dos subtotales IVA con el mismo código) Rechaza codigo 403 Si existen uno o más ítems con una determinada alícuota IVA, deberá existir el correspondiente subtotal IVA para dicha alícuota. No se sebe incluír un subtotal IVA si dicha alícuota no está presente en al menos un ítem. Rechaza importe 405 La suma de los subtotales de IVA no puede ser negativa. Rechaza **<item>...</item>** 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada** codigoMtx 504 Si <codigoMtx> no se corresponde con un GTIN registrado, activo y vigente, el comprobante quedara observado. Observa 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** unidadesMtx 500 Opcional si <codigoUnidadMedida> es 99 ó 97, para el resto de los casos es obligatorio. Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** unidadesMtx 501 De informarse deberá ser mayor o igual a 1 (uno) Rechaza unidadesMtx 502 Longitud máxima 6 posiciones. Rechaza codigoMtx 503 Opcional si <codigoUnidadMedida> es 99 ó 97, para el resto de los casos es obligatorio. Rechaza codigo 505 Opcional. Longitud máxima 50 posiciones. Rechaza descripcion 506 Cantidad máxima de caracteres permitidos es 4000. Importante: no es necesario (ni recomendable) completar con espacios. Rechaza cantidad 507 No corresponde para <codigoUnidadMedida> igual a 99 o 97. En otro caso es obligatorio. Rechaza codigoUnidad Medida 508 Deberá ser alguno de los valores permitidos: consultar método _consultarUnidadesMedida_ Rechaza precioUnitario 509 No corresponde para <codigoUnidadMedida> igual a 99 o 97. En otro caso es obligatorio. Rechaza importeBonific acion 510 Opcional. No corresponde para <codigoUnidadMedida> igual a 99 o 97. Rechaza importeBonific acion 511 De informarse deberá ser menor o igual a <precioUnitario>*<cantidad> Rechaza codigoCondicio nIVA 512 Deberá coincidir con alguno de los valores permitidos: consultar método _consultarCondicionesIVA_ Rechaza codigoCondicio nIVA / codigoUnidad Medida 513 Si <codigoUnidadMedida> es 99 deberá existir por lo menos otro ítem con igual <codigoCondicionIVA> y <codigoUnidadMedida> distinta a la informada para este ítem. Rechaza importeIVA 514 Obligatorio si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53. No corresponde para <codigoTipoComprobante> igual a 6, 7 u 8. Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** importeIVA 515 Para <codigoTipoComprobante> igual a 1, 2 ó 3 y unidad de medida distinto a 95, 97 o 99, deberá ser igual a (<precioUnitario> * <cantidad> -<importeBonificacion>) * alícuota de IVA correspondiente. Para <codigoTipoComprobante> igual a 1, 2, 3, 51, 52 ó 53 y unidad de medida igual a 95 deberá ser igual a (-1) * (<precioUnitario> * <cantidad> <importeBonificacion>) * alícuota de IVA correspondiente. Para <codigoTipoComprobante> igual a 1, 2, 3, 51, 52 ó 53 y unidad de medida igual a 97 o 99, deberá ser igual a <importeItem> <importeItem> / (1 + alícuota de IVA correspondiente). El error relativo porcentual deberá ser <= 

###### 0.01% o el error absoluto <= 0.01 * 

Rechaza importeIVA 516 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 y <codigoUnidadMedida> es 99, el valor absoluto de la sumatoria de los importes ingresados para este campo no puede superar a la sumatoria de los importes <importeIVA> informado con la misma alícuota. El error relativo porcentual deberá ser <= 

###### 0.01% o el error absoluto <= 0.01 * 

Rechaza importeIVA 517 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 y <codigoUnidadMedida> es: 

- 99 deberá ser menor o igual a 0 (cero), 

- 97 podrá ser menor, mayor o igual a 0 (cero). 

- 95 deberá ser menor o igual a 0 (cero), 

- Cualquier otro caso deberá ser mayor o igual a 0 (cero).     Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** importeItem 518 Si <codigoUnidadMedida> es: 

- 99 deberá ser menor a 0 (cero), 

- 97 podrá ser menor, o mayor igual a 0 (cero). 

- 95 deberá ser menor a 0 (cero), 

- Cualquier otro caso deberá ser mayor o igual a 0 (cero).     Rechaza importeItem 519 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 y <codigoUnidadMedida> es distinto a 95, 97 ó 99, deberá ser igual a (<precioUnitario> sin IVA * <cantidad> -<importeBonificacion>)*(1+alícuota). Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 y <codigoUnidadMedida> es igual a 95 ser igual a (-1) * (<precioUnitario> sin IVA * <cantidad> -<importeBonificacion>)*(1+alícuota). Si <codigoTipoComprobante> es igual a 6, 7 u 8 y <codigoUnidadMedida> es distinto a 95, 97 ó 99 deberá ser igual a (<precioUnitario> con IVA * <cantidad> -<importeBonificacion>). Si <codigoTipoComprobante> es igual a 6, 7 u 8 y <codigoUnidadMedida> es igual a 95 ser igual a (-1) * (<precioUnitario> con IVA * <cantidad> -<importeBonificacion>). En ambos casos el error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * Rechaza unidadesMtx/ codigoMtx 520 Si se informa el campo <unidadesMtx> entonces debe informarse el campo <codigoMtx> y viceversa. Rechaza importeIVA 521 Si <codigoCondicionIVA> es igual a _1, 2 ó 3_ entonces <importeIVA> deberá ser igual a 0 (cero). Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) 

Autorizar un Comprobante CAE (autorizarComprobante) **<datoAdicional>...</datoAdicional>** 

###### Los datos adicionales sólo deberán ser incluídos si el emisor pertenece al conjunto de emisores 

###### habilitado para usar datos adicionales (“Adicionales por R.G.”). En ese caso podrá incluír el o los datos 

###### adicionales que correspondan, especificando el tipo de dato adicional de acuerdo a la situación del 

###### emisor. El listado de tipos de datos adicionales se puede consultar con el método 

###### consultarTiposDatosAdicionales. 

###### Por ejemplo, si el emisor está incluído en el Régimen de Promoción Industrial, deberá incluír un dato 

###### adicional tipo 2. 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** t 320 Valores permitidos: consultar método _consultarTiposDatosAdicionales_ Rechaza t / c1…c6 321 Si t es igual a 2 (“Dato Adicional para Empresas Promovidas”), en c1 se deberá indicar el id de proyecto (el mismo deberá corresponder a la cuit emisora del comprobante) o cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen de Promoción Industrial. Los campos c2 a c6 no deberán informarse (reservados para uso futuro) Rechaza t / c1…c6 323 Si t es igual a: 11(“Dato Adicional para Operaciones Económicas Relacionadas con Bienes Inmuebles”) 12(“Dato Adicional para Locacion temporaria de Inmuebles con fines Turisticos”) 13(“Dato Adicional para Representantes de Modelos”) 14 (“Dato Adicional para Agencias de Publicidad”) Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** 15 (“Dato Adicional para Personas Físicas que desarrollen actividad de Modelaje”) En c1 se deberá indicar cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen o 1 (uno) en caso de que la actividad facturada esté alcanzada por el Régimen. Los campos c2 a c6 no deberán informarse (reservados para uso futuro) t / c1…c6 324 Si t es igual a 10 (“Dato Adicional para Educación Pública de Gestión Privada”) En c1 se deberá indicar cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen o 1 (uno) en caso de que la actividad facturada esté alcanzada por el Régimen. Si se informa el campo c1 igual a 1(uno) debe informar en el campo c2 el Tipo de Documento y en el campo c3 el Numero de Documento (los mismos corresponden a los identificadores 10.11 y 10.12 respectivamente segun la R.G. 4291 Anexo (art. 15, 17 y 19), 1 Establecimientos de educación publica de gestion privadas ). Los campos c4 a c6 no deberán informarse (reservados para uso futuro) Rechaza t / c1…c6 325 Si t es igual a 10 (“Dato Adicional para Educación Pública de Gestión Privada”) y c1 igual a 1(uno). En c2 debe informar alguno de los valores permitidos: consultar método consultarTiposDocumento. Si se indica c2 con 80, 86 ú 87 (CUIT, CUIL y CDI respectivamente) el número informado en c3 deberá obrar en las bases del Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** organismo. t / c1…c6 322 No se puede incluír más de un dato adicional (sólo se permite un id por comprobante) Rechaza t 326 Los tipos de dato adicional 21, 22 o 23 sólo corresponden a comprobantes de Factura Electrónica de Crédito MiPyME Rechaza t / c1…c6 327 Para el tipo de dato adicional 22, Anulación, debe indicar en el campo c1 S (si) si es de anulación o N (no) si no es de anulación Rechaza t / c1…c6 328 Para el tipo de dato adicional 21, CBU y Alias del Emisor, el CBU informado en el campo c1 no corresponde al Emisor según nuestros registros Rechaza t / c1…c6 329 Si el tipo de Comprobante a autorizar es 202, 203, 207 o 208, debe indicar el dato adicional código 22, Anulación, para indicar si este es un comprobante de anulación o no Rechaza t / c1…c6 330 Si el tipo de Comprobante a autorizar es 201 o 206, NO debe indicar el dato adicional código 22, Anulación. No corresponde a un comprobante Factura. Rechaza t / c1…c6 331 Si el tipo de Comprobante a autorizar es 201 o 206, debe indicar el dato adicional código 21, CBU y Alias emisor. Rechaza t / c1…c6 332 Si el tipo de Comprobante a autorizar es 202, 203, 207 o 208, NO debe indicar el dato adicional código 21, CBU y Alias emisor. Rechaza t / c1…c6 333 Para el tipo de dato adicional 21, 22 y 23, debe indicar el campo c1 Rechaza t / c1…c6 334 Para el tipo de dato adicional 27, Opción de Transferencia, las opciones válidas son ADC para Agente de Depósito Colectivo o SCA para Sistema de Circulación Abierta Rechaza t / c1…c6 335 Si el tipo de Comprobante a autorizar es 201 o 206, debe indicar el dato adicional código 27, Opción de Transferencia. Rechaza t / c1…c6 336 Si el tipo de Comprobante a autorizar es 202, 203, 207 o 208, NO debe Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** indicar el dato adicional código 27, Opción de Transferencia. t / c1…c6 337 Si el tipo de Comprobante a autorizar NO es 1, 2, 3, 201, 202, 203, NO debe indicar el dato adicional código 5, Motivo de Excepcion Cómputo IVA Crédito Fiscal. Rechaza t / c1…c6 338 Si el tipo de Comprobante a autorizar es 1, 2, 3, 201, 202, 203, y se indica el dato adicional código 5, se debera indicar el campo c1 (Motivo de Excepcion) de forma obligatoria. Rechaza t / c1…c6 339 Si el tipo de Comprobante a autorizar es 1, 2, 3, 201, 202, 203, y se indica el dato adicional código 5, y el campo el campo c1 (Motivo de Excepcion) NO es un numérico del 1 al 6. Rechaza t / c1…c6 340 Si el tipo de Comprobante a autorizar es 1, 2, 3, 201, 202, 203, y se indica el dato adicional código 5, y no se deberán utilizar ninguno de los restantes campos reservados a futuro campos de c2 a c6. Rechaza **<comprador>...</comprador>** 

###### El grupo de compradores sólo se deberá incluír para respaldar las operaciones de venta de bienes 

###### muebles registrables a un conjunto de adquirentes. 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** arrayCompradores 420 Si se informar el grupo de compradores debe tener mas de un comprador Rechaza codigoTipoDocumento/ numeroDocumento 421 Si se informa el grupo de compradores, el tipo y número de documento del Receptor es obligatorio. Cuando se informan compradores múltiples, el que se indique con mayor porcentaje Rechaza 

Autorizar un Comprobante CAE (autorizarComprobante) **Campo Código de Error Validación NO es superada** deberá figurar como receptor del comprobante. En caso de no haber un único comprador con porcentaje mayor, debe informar uno de ellos. codigoTipoDocumento 422 El tipo de documento de los compradores debe ser CUIT, CUIL o CDI Rechaza codigoTipoDocumento/ numeroDocumento 423 Número de documento informado repetido. Sólo Se debe informar una vez al comprador Rechaza porcentaje 424 El Porcentaje de Titularidad del Comprador debe ser mayor a 0 (cero) Rechaza porcentaje 425 El Porcentaje de Titularidad del Comprador debe ser menor a 100 (cien) Rechaza porcentaje 426 El Emisor del comprobante no puede ser comprador Rechaza porcentaje 427 La suma de los porcentajes indicados en la lista de compradores debe ser igual a 100 Rechaza codigoTipoDocumento/ numeroDocumento 428 El receptor del comprobante debe incluírse con el mismo tipo y número de documento en el grupo de compradores Rechaza codigoTipoDocumento/ numeroDocumento/ porcentaje 429 El receptor del comprobante (tipo y número de documento) debe coincidir con el comprador que tenga el mayor porcentaje en la lista de compradores. En caso de no haber un único comprador con porcentaje mayor, deberá coincidir con uno de ellos Rechaza codigoTipoDocumento/ numeroDocumento 430 Las CUIT/CUIL/CDI de los compradores deberán encontrarse activas en el Sistema Registral Rechaza codigoTipoComprobante /numeroDocumento 431 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 las CUITs de los compradores deben 

###### encontrarse activa en IVA o en 

 Rechaza 

 Autorizar un Comprobante CAE (autorizarComprobante) Campo Código de Error Validación NO es superada 

###### monotributo. 

arrayCompradores /codigoConcepto 432 Sólo se puede informar el arrayCompradores para codigoConcepto igual a 1 (Productos) Rechaza arrayCompradores / codigoTipoComprobante 433 Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208, no puede informar compradores múltiples. Rechaza 

#### Autorizar un Ajuste IVA CAE (autorizarAjusteIVA) 

El sistema cliente envía la información del comprobante de ajuste de IVA que desea autorizar mediante un requerimiento el cual es atendido por WS MTXCA pudiendo producirse las siguientes situaciones:  Supere todas las validaciones, el comprobante es aprobado, se asigna el CAE y su respectiva fecha de vencimiento,  No supera alguna de las validaciones no excluyentes, el comprobante es aprobado con observaciones, se le asigna el CAE con la fecha de vencimiento,  No supere alguna de las validaciones excluyentes, el comprobante no es aprobado y la solicitud es rechazada. Cabe aclarar que las validaciones excluyentes son aquellas que en el caso de no ser superadas provocan un rechazo y las validaciones no excluyentes aprueban la solicitud pero con observaciones. 

 Autorizar un Ajuste IVA CAE 

#### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    Autorizar un Ajuste IVA CAE
    <ser:autorizarAjusteIVARequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      <comprobanteCAERequest>
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
        <codigoTipoAutorizacion>
          CodigoTipoAutorizacionSimpleType
        </codigoTipoAutorizacion>
        <codigoAutorizacion>
          long
        </codigoAutorizacion>
        <fechaVencimiento>
          date
        </fechaVencimiento>
        <codigoTipoDocumento>
          short
        </codigoTipoDocumento>
        <numeroDocumento>
          long
        </numeroDocumento>
        <condicionIVAReceptor>
          short
        </condicionIVAReceptor>
        <importeGravado>
          ImporteTotalSimpleType
        </importeGravado>
        <importeNoGravado>
          ImporteTotalSimpleType
        </importeNoGravado>
        <importeExento>
          ImporteTotalSimpleType
        </importeExento>
        <importeSubtotal>
          ImporteTotalSimpleType
        </importeSubtotal>
        <importeOtrosTributos>
          ImporteTotalSimpleType
        </importeOtrosTributos>
        <importeTotal>
          ImporteTotalSimpleType
        </importeTotal>
        <codigoMoneda>
          string
        </codigoMoneda>
        <cotizacionMoneda>
          decimal
        </cotizacionMoneda>
        <observaciones>
          string
        </observaciones>
        <codigoConcepto>
          short
        </codigoConcepto>
        Autorizar un Ajuste IVA CAE
        <fechaServicioDesde>
          date
        </fechaServicioDesde>
        <fechaServicioHasta>
          date
        </fechaServicioHasta>
        <fechaVencimientoPago>
          date
        </fechaVencimientoPago>
        <fechaHoraGen>
          dateTime
        </fechaHoraGen>
        <arrayComprobantesAsociados>
          <comprobanteAsociado>
            <codigoTipoComprobante>
              short
            </codigoTipoComprobante>
            <numeroPuntoVenta>
              NumeroPuntoVentaSimpleType
            </numeroPuntoVenta>
            <numeroComprobante>
              NumeroComprobanteSimpleType
            </numeroComprobante>
            <cuit>
              long
            </cuit>
            <fechaEmision>
              date
            </fechaEmision>
          </comprobanteAsociado>
        </arrayComprobantesAsociados>
        <periodoComprobantesAsociados>
          <fechaDesde>
            date
          </fechaDesde>
          <fechaHasta>
            date
          </fechaHasta>
        </periodoComprobantesAsociados>
        <arrayItems>
          <item>
            <unidadesMtx>
              int
            </unidadesMtx>
            <codigoMtx>
              string
            </codigoMtx>
            <codigo>
              string
            </codigo>
            <descripcion>
              string
            </descripcion>
            <cantidad>
              DecimalSimpleType
            </cantidad>
            <codigoUnidadMedida>
              short
            </codigoUnidadMedida>
            <precioUnitario>
              DecimalSimpleType
            </precioUnitario>
            <importeBonificacion>
              DecimalSimpleType
            </importeBonificacion>
            Autorizar un Ajuste IVA CAE
            <codigoCondicionIVA>
              short
            </codigoCondicionIVA>
            <importeIVA>
              ImporteSubtotalSimpleType
            </importeIVA>
            <importeItem>
              ImporteSubtotalSimpleType
            </importeItem>
          </item>
        </arrayItems>
        <arraySubtotalesIVA>
          <subtotalIVA>
            <codigo>
              short
            </codigo>
            <importe>
              ImporteTotalSimpleType
            </importe>
          </subtotalIVA>
        </arraySubtotalesIVA>
        <arrayDatosAdicionales>
          <datoAdicional>
            <t>
              short
            </t>
            <c1>
              string
            </c1>
            <c2>
              string
            </c2>
            <c3>
              string
            </c3>
            <c4>
              string
            </c4>
            <c5>
              string
            </c5>
            <c6>
              string
            </c6>
          </datoAdicional>
        </arrayDatosAdicionales>
        <arrayCompradores>
          <comprador>
            <codigoTipoDocumento>
              short
            </codigoTipoDocumento>
            <numeroDocumento>
              long
            </numeroDocumento>
            <porcentaje>
              PorcentajeSimpleType
            </porcentaje>
          </comprador>
        </arrayCompradores>
        <arrayActividades>
          Autorizar un Ajuste IVA CAE
          <actividad>
            <codigo>
              long
            </codigo>
          </actividad>
        </arrayActividades>
      </comprobanteCAERequest>
    </ser:autorizarAjusteIVARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 

Autorizar un Ajuste IVA CAE **<comprobanteCAEARequest>** contiene los datos del comprobante. Es del tipo **ComprobanteType. IMPORTANTE: para mas detalles sobre éste y otros tipos de datos consultar la Sección 3: “Definición de Tipos de Datos”** 

##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  Autorizar un Ajuste IVA CAE
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
    Autorizar un Ajuste IVA CAE
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<autorizarAjusteIVAResponse> Campo Descripción Oblig Tipo Long** resultado A: Aprobado, O: Observado, R: Rechazado S ResultadoSimpleTy pe 1 comprobanteRespo nse Existe si el resultado es Aprobado. Contiene los datos que identifican al comprobante y los referentes a la autorización. N ComprobanteCAER esponseType -arrayObservaciones Indica los motivos por los cuales el comprobante fue autorizado con observaciones, en caso de corresponder. N ArrayCodigosDescr ipcionesType -arrayErrores Si la solicitud fue rechazada, detalla el o los motivos que dieron origen al rechazo. N ArrayCodigosDescr ipcionesType -evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcion Type -**<comprobanteResponse>** es del tipo **ComprobanteCAEResponseType <comprobanteResponse> Campo Descripción Oblig Tipo Long** cuit Cuit Emisora del comprobante S long 11 codigoTipoComprob ante Especifica el tipo de comprobante S short 3 

Autorizar un Ajuste IVA CAE **Campo Descripción Oblig Tipo Long** numeroPuntoVenta Indica el número de punto de venta del comprobante autorizado S NumeroPuntoVentaS impleType 5 numeroComprobant e Indica el número del comprobante aprobadoS NumeroComprobant eSimpleType 8 fechaEmision Fecha de emisión del comprobante. S date -CAE CAE asignado al comprobante autorizado. S long 14 fechaVencimientoC AE Fecha de vencimiento del CAE otorgado. S date -

##### Ejemplo para “Autorizar Ajuste IVA” 

Ejemplo Nota Débito A 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:autorizarAjusteIVARequest>
      <authRequest>
        <token>
          ?
        </token>
        <sign>
          ?
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <comprobanteCAERequest>
        <codigoTipoComprobante>
          2
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          1
        </numeroPuntoVenta>
        <numeroComprobante>
          31
        </numeroComprobante>
        <fechaEmision>
          2011-02-22
        </fechaEmision>
        Autorizar un Ajuste IVA CAE
        <codigoTipoDocumento>
          80
        </codigoTipoDocumento>
        <numeroDocumento>
          30000000007
        </numeroDocumento>
        <condicionIVAReceptor>
          1
        </condicionIVAReceptor>
        <importeSubtotal>
          0
        </importeSubtotal>
        <importeTotal>
          200
        </importeTotal>
        <codigoMoneda>
          DOL
        </codigoMoneda>
        <cotizacionMoneda>
          4
        </cotizacionMoneda>
        <codigoConcepto>
          1
        </codigoConcepto>
        <arrayComprobantesAsociados>
          <comprobanteAsociado>
            <codigoTipoComprobante>
              1
            </codigoTipoComprobante>
            <numeroPuntoVenta>
              1
            </numeroPuntoVenta>
            <numeroComprobante>
              1
            </numeroComprobante>
          </comprobanteAsociado>
        </arrayComprobantesAsociados>
        <arrayItems>
          <item>
            <unidadesMtx>
              1
            </unidadesMtx>
            <codigoMtx>
              7790001001139
            </codigoMtx>
            <codigo>
            </codigo>
            <descripcion>
              Nota de Débito Ajuste de IVA
            </descripcion>
            <codigoUnidadMedida>
              7
            </codigoUnidadMedida>
            <codigoCondicionIVA>
              5
            </codigoCondicionIVA>
            <importeIVA>
              100
            </importeIVA>
            <importeItem>
              100
            </importeItem>
          </item>
          <item>
            <unidadesMtx>
              1
            </unidadesMtx>
            <codigoMtx>
              7790001001139
            </codigoMtx>
            <codigo>
            </codigo>
            <descripcion>
              Nota de Débito Ajuste de IVA
            </descripcion>
            <codigoUnidadMedida>
              7
            </codigoUnidadMedida>
            <codigoCondicionIVA>
              6
            </codigoCondicionIVA>
            Autorizar un Ajuste IVA CAE
            <importeIVA>
              100
            </importeIVA>
            <importeItem>
              100
            </importeItem>
          </item>
        </arrayItems>
        <arraySubtotalesIVA>
          <subtotalIVA>
            <codigo>
              5
            </codigo>
            <importe>
              100
            </importe>
          </subtotalIVA>
          <subtotalIVA>
            <codigo>
              6
            </codigo>
            <importe>
              100
            </importe>
          </subtotalIVA>
        </arraySubtotalesIVA>
        <arrayActividades>
          <actividad>
            <codigo>
              120010
            </codigo>
          </actividad>
          <actividad>
            <codigo>
              463300
            </codigo>
          </actividad>
        </arrayActividades>
      </comprobanteCAERequest>
    </ser:autorizarAjusteIVARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Body>
    <ns1:autorizarAjusteIVAResponse xmlns:ns1="http://impl.service.wsmtxca.afip.gob.ar/service/">
      <resultado>
        A
      </resultado>
      Autorizar un Ajuste IVA CAE
      <comprobanteResponse>
        <cuit>
          66666666666
        </cuit>
        <codigoTipoComprobante>
          2
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          1
        </numeroPuntoVenta>
        <numeroComprobante>
          31
        </numeroComprobante>
        <fechaEmision>
          2011-02-22
        </fechaEmision>
        <CAE>
          61084001078528
        </CAE>
        <fechaVencimientoCAE>
          2011-03-04
        </fechaVencimientoCAE>
      </comprobanteResponse>
    </ns1:autorizarAjusteIVAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Ejemplo Nota de Débito B 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:autorizarAjusteIVARequest>
      <authRequest>
        <token>
          ?
        </token>
        <sign>
          ?
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <comprobanteCAERequest>
        <codigoTipoComprobante>
          7
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          1
        </numeroPuntoVenta>
        <numeroComprobante>
          5
        </numeroComprobante>
        <fechaEmision>
          2011-02-22
        </fechaEmision>
        <condicionIVAReceptor>
          5
          <condicionIVAReceptor/>
          <importeSubtotal>
            0
          </importeSubtotal>
          Autorizar un Ajuste IVA CAE
          <importeTotal>
            200
          </importeTotal>
          <codigoMoneda>
            DOL
          </codigoMoneda>
          <cotizacionMoneda>
            4
          </cotizacionMoneda>
          <codigoConcepto>
            1
          </codigoConcepto>
          <arrayComprobantesAsociados>
            <comprobanteAsociado>
              <codigoTipoComprobante>
                6
              </codigoTipoComprobante>
              <numeroPuntoVenta>
                1
              </numeroPuntoVenta>
              <numeroComprobante>
                1
              </numeroComprobante>
            </comprobanteAsociado>
          </arrayComprobantesAsociados>
          <arrayItems>
            <item>
              <unidadesMtx>
                1
              </unidadesMtx>
              <codigoMtx>
                7790001001139
              </codigoMtx>
              <codigo>
              </codigo>
              <descripcion>
                Nota de Débito Ajuste de IVA
              </descripcion>
              <codigoUnidadMedida>
                7
              </codigoUnidadMedida>
              <codigoCondicionIVA>
                5
              </codigoCondicionIVA>
              <importeItem>
                100
              </importeItem>
            </item>
            <item>
              <unidadesMtx>
                1
              </unidadesMtx>
              <codigoMtx>
                7790001001139
              </codigoMtx>
              <codigo>
              </codigo>
              <descripcion>
                Nota de Débito Ajuste de IVA
              </descripcion>
              <codigoUnidadMedida>
                7
              </codigoUnidadMedida>
              <codigoCondicionIVA>
                6
              </codigoCondicionIVA>
              <importeItem>
                100
              </importeItem>
            </item>
          </arrayItems>
          <arraySubtotalesIVA>
            <subtotalIVA>
              Autorizar un Ajuste IVA CAE
              <codigo>
                5
              </codigo>
              <importe>
                100
              </importe>
            </subtotalIVA>
            <subtotalIVA>
              <codigo>
                6
              </codigo>
              <importe>
                100
              </importe>
            </subtotalIVA>
          </arraySubtotalesIVA>
          <arrayActividades>
            <actividad>
              <codigo>
                120010
              </codigo>
            </actividad>
            <actividad>
              <codigo>
                463300
              </codigo>
            </actividad>
          </arrayActividades>
        </comprobanteCAERequest>
      </ser:autorizarAjusteIVARequest>
    </soapenv:Body>
  </soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Body>
    <ns1:autorizarAjusteIVAResponse xmlns:ns1="http://impl.service.wsmtxca.afip.gob.ar/service/">
      <resultado>
        A
      </resultado>
      <comprobanteResponse>
        <cuit>
          66666666666
        </cuit>
        <codigoTipoComprobante>
          7
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          1
        </numeroPuntoVenta>
        <numeroComprobante>
          5
        </numeroComprobante>
        <fechaEmision>
          2011-02-22
        </fechaEmision>
        Autorizar un Ajuste IVA CAE
        <CAE>
          61084001078557
        </CAE>
        <fechaVencimientoCAE>
          2011-03-04
        </fechaVencimientoCAE>
      </comprobanteResponse>
    </ns1:autorizarAjusteIVAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

 Autorizar un Ajuste IVA CAE 

#### Validaciones del Negocio 

**<authRequest>...</authRequest> Campo Código de Error Validación No es superada** cuitRepresentada 10010 Debe encontrarse empadronado en Codificación de Productos opción Factura con Detalle Rechaza **<comprobanteCAERequest>…</comprobanteCAERequest>** 

###### Validaciones Excluyentes 

**Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante 136 Podrá ser: 2 – Nota de Débito A 3 – Nota de Crédito A 7 – Nota de Débito B 8 – Nota de Crédito B 52 – Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 – Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN Rechaza codigoTipoComprobante/ cuitRepresentada 136 El contribuyente no se encuentra habilitado a emitir (según el tipo de comprobante indicado) comprobantes A, A con Leyenda o A con leyenda OPERACIÓN SUJETA A RETENCIÓN Rechaza 

Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** numeroPuntoVenta 101 Debe ser del tipo habilitado para el régimen CAE Codificación de Productos – Web Services y no debe estar bloqueado. Consultar método _consultarPuntosVenta_ o _consultarPuntosVentaCAE_ Rechaza numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 102 El número de comprobante informado debe ser mayor en 1 al último informado para igual punto de venta y tipo de comprobante. De no existir comprobante informado para igual punto de venta y codigoTipoComprobante, el número de comprobante debe ser igual a 1 (uno) Rechaza fechaEmision 103 Opcional. Para <codigoConcepto> igual a 1, la fecha de emisión del comprobante puede ser hasta 5 días anteriores o posteriores respecto de la fecha de generación, pero sin extenderse al mes siguiente; si se indica <codigoConcepto> igual a 2 ó 3 puede ser hasta 10 días anteriores o posteriores a la fecha de generación Obs.: Si no se envía se le asignará la fecha de proceso. Rechaza fechaEmision / numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 104 La fecha de emisión debe ser mayor o igual a la fecha de emisión del último comprobante del mismo tipo e igual número de punto de venta. Rechaza codigoTipoAutorizacion 105 No debe informarse Rechaza codigoAutorizacion 106 No debe informarse Rechaza fechaVencimiento 107 No debe informarse Rechaza 

Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoTipoDocumento / numeroDocumento 108 Si se informa uno de los campos debe informarse el otro. Rechaza importeGravado 137 No debe informarse Rechaza importeNoGravado 138 No debe informarse Rechaza importeExento 139 No debe informarse Rechaza importeSubtotal 140 Deberá informarse en 0 (cero) Rechaza importeOtrosTributos 141 No debe informarse Rechaza importeTotal 142 Debe ser igual a la sumatoria de <subtotalIVA><importe> (dentro del arraySubtotalesIVA). Rechaza importeTotal 143 Debe ser igual a la sumatoria de la totalidad de los campos <importeItem>. Rechaza codigoMoneda 117 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarMonedas_ Rechaza cancelaEnMismaMonedaE xtranjera 118 En caso de enviar la marca de que el pago del comprobante se realiza en la misma moneda extranjera para comprobantes que no sean facturas. Unicamente se puede utilizar con los códigos habilitados (1,6,51,201,206) Rechaza cotizacionMoneda 119 No podrá ser inferior al 2% ni superior en un 400 % del que suministra ARCA como orientativo de acuerdo a la cotización oficial Rechaza cotizacionMoneda 120 Debe ser igual a 1 (uno) si <codigoMoneda> es igual a PES Rechaza 

Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** cancelaEnMismaMonedaE xtranjera 164 En caso de enviar un valor inválido para la marca de que el pago de la factura se realiza en la misma moneda extranjera. Los valores válidos son S, N o vacío Rechaza codigoMoneda/ cancelaEnMismaMonedaE xtranjera 169 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera y enviar como código de moneda el Peso Argentino Rechaza codigoMoneda/ cotizacionMoneda/ cancelaEnMismaMonedaE xtranjera 192 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera, que codigoMoneda es del grupo de monedas con cotización del Banco de la Nación Argentina (ver Anexo Monedas BNA), que haya cotización y que la misma no coincida exactamente con el valor enviado en el campo cotizacionMoneda. En cuyo caso se podrá omitir el mismo para que la cotización de la factura sea la obtenida de los registros de ARCA Rechaza cotizacionMoneda 194 El campo es obligatorio a excepción de los casos para los cuales se envia el campo cancelaEnMismaMonedaExtr anjera y se puede obtener la cotizacion asociada al codigoMoneda si esta es del grupo de monedas del Banco de la Nación Argentina (ver Anexo Monedas BNA) Rechaza cotizacionMoneda 195 No es posible indicar una cotización negativa Rechaza 

Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoConcepto 121 Deberá ser igual a alguno de los siguientes valores: 1 – Productos 2 – Servicios 3 – Productos y Servicios Rechaza fechaServicioDesde 122 Opcional. Debe informarse si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Rechaza fechaServicioHasta 123 Opcional. Debe informarse si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Rechaza fechaVencimientoPago 124 Opcional. Debe informarse si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Rechaza fechaVencimientoPago / fechaEmision 125 La fecha de vencimiento de pago debe ser posterior o igual a la fecha de emisión. Rechaza arrayOtrosTributos 144 No debe informarse Rechaza arraySubtotalesIVA 127 Debe informarse si algún ítem tiene <codigoCondicionIVA> igual a 4, 5 ó 6. Rechaza codigoTipoDocumento / numeroDocumento 128 Opcionales. Deberán informarse en los siguientes casos: 

- cuando <codigoTipoComprobante > es igual a 2, 3, 52 ó 53. -cuando <codigoTipoComprobante > es igual a 7 u 8 y el importe total del comprobante <importeTotal> es mayor ó igual al monto en pesos resultante según RG4444.     Rechaza 

Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoTipoDocumento 129 Si <codigoTipoComprobante> es igual a 2, 3, 52 ó 53.<codigoTipoDocumento > deberá ser igual a 80 (CUIT) Rechaza numeroDocumento 131 El Receptor no puede ser igual al Emisor Rechaza codigoTipoDocumento 132 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarTiposDocumento_ Rechaza fechaServicioDesde / fechaServicioHasta 133 La Fecha de Servicio desde debe ser menor o igual a la Fecha de Servicio Hasta Rechaza numeroPuntoVenta / codigoTipoComprobante 135 Solicitudes de autorización para un mismo punto de venta y tipo de comprobante deben ser enviadas en forma sincrónica: si el WS recibe una nueva solicitud para un punto de venta y tipo de comprobante dado mientras la anterior está siendo procesada, la nueva solicitud será rechazada Rechaza fechaHoraGen 146 La fecha/hora de generación solo debe informarse para comprobantes CAEA Rechaza codigoTipoComprobante / periodoComprobantesAso ciados 159 Si <codigoTipoComprobante> es igual a 202, 203, 207 ó 208 perteneciente a Factura de Crédito Electrónica no corresponde informar un periodo de comprobantes asociados. Rechaza 

Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsoci ados / periodoComprobantesAso ciados 160 Si <codigoTipoComprobante> es igual a 2, 3, 7, 8, 52 ó 

53. Falta informar comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito válido/s o informar un período de comprobantes asociados válido     Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados / periodoComprobantesAso ciados 161 Si <codigoTipoComprobante> es igual a 2, 3, 7, 8, 52 ó 53. No debe informar un período de comprobantes asociados cuando informa comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito Rechaza codigoTipoComprobante / periodoComprobantesAso ciados 162 Si <codigoTipoComprobante> es igual a 1, 2, 51, 201 ó 206 correspondientes a Facturas no corresponde informar un periodo de comprobantes asociados. Rechaza codigo / arrayActividades 165 Si ocurrió un error imprevisto al momento de validar las actividades a quedar asociadas al comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / codigoTipoDocumento / numeroDocumento 261 Si <codigoTipoComprobante> NO es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue inactivado o invalidado. Rechaza 

Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / codigoTipoDocumento / numeroDocumento 297 Si <codigoTipoComprobante> NO es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue limitada por haber sido caracterizada como sujeto no confiable en materia de Seguridad Social. Rechaza codigoTipoDocumento / numeroDocumento 304 Si <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue limitada por haber sido marcada como Apocrifa. Rechaza codigo / arrayActividades 266 Si <codigo> se encuentra mas de una vez en el array de actividades (no admite repetidos). Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigo / arrayActividades 267 Si <codigo> no se encuentra entre las actividades vigentes para la cuit representada. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigo / arrayActividades 268 Si <codigo> se encuentra asociado a un conjunto de actividades de un “rubro” y se encontraron otros <codigo> dentro del array que se encuentran asociados a otro conjunto de un “rubro” distinto. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 270 Si ocurrio un error imprevisto al validar los comprobantes asociados que sean de tipo remito (88, 990, 91, 995, 997, 993, 994). Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 271 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y no fue encontrado en los registros de ARCA, o bien fue encontrado, pero la información asociada al mismo no es la esperada. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 272 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero el mismo se encuentra en un estado inválido. Dichos estados varian según el tipo de remito del que se trate. Ver el Anexo de Rubros de Actividades y Remitos Rechaza numeroDocumento / arrayComprobantesAsoci ados 273 Si el comprobante asociado es del tipo remito (91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero la cuit del receptor de dicho remito no coincide con la cuit del receptor del comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 275 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y el tipo de comprobante asociado es remito, pero el mismo no es carnico (88, 990, 91, 997, 993, 994), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 276 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” o “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado o Tabaco en Hebras (91, 997, 993, 994, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 277 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado (990, 91, 997, 993, 994, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 278 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco en Hebras (88, 91, 997, 993, 994, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 280 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y el tipo de comprobante asociado es remito, pero el mismo no es Harina (88, 91, 997, 995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 281 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y no se especifico ningún Remito del tipo Harina (993 y 994), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza/ Observa según fechas en la RG 5264/2022 codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 282 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y no se especifico ningún Remito del tipo Carnico (995), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza/ Observa según fechas en RG 5259/2022 

Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** codigoConcepto / arrayComprobantesAsoci ados 283 Los códigos de concepto permitidos para asociar Remitos Cárnicos (995) al Comprobante son 1 – Productos y 3 – Productos y Servicios Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados arrayActividades 284 Si no se especifican actividades, y el Remito a Asociar es un Remito Sectorial (88, 990, 993, 994, 995, 997), se rechazara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 285 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero se encuentra marcado como de exportación, mientras que el presente servicio solo acepta Remitos para el Mercado. Ver el Anexo de Rubros de Actividades y Remitos Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / arrayComprobantesAsoci ados 286 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y ya fue declarado una vez en el array de comprobantes asociados. Ver el Anexo de Rubros de Actividades y Remitos Rechaza condicionIVAReceptor/ fechaEmision 290 Si no se informa la condición de IVA del Receptor (obligatoria) o bien se informa un valor no contemplado por el servicio. Ver método consultarCondicionesIVARec eptor Rechaza 

Autorizar un Ajuste IVA CAE **Campo / Grupo Código de Error Validación NO es superada** condicionIVAReceptor/ codigoTipoComprobante/ fechaEmision 291 Si se informa una combinación invalida de Condición de IVA del Receptor y Tipo de Comprobante. Ver método consultarCondicionesIVARec eptor Rechaza 

 Autorizar un Ajuste IVA CAE 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada** codigoTipoDocumento / numeroDocumento 109 Si <codigoTipoDocumento> es igual a 80, 86 o 87, <numeroDocumento> debe ser válido y activo, excepto para <codigoTipoComprobante> 6, 7 u 8, <codigoTipoDocumento> 80 y <numeroDocumento> igual a 23000000000. Observa numeroDocumento 130 Si <codigoTipoComprobante> es igual a 2, 3, 52 ó 53 la CUIT del receptor debe encontrarse activa en IVA o en monotributo. Observa numeroDocumento 134 Si <codigoTipoComprobante> es igual a 2, 3, 52 ó 53 y <codigoTipoDocumento> es igual a 80 (CUIT), dicha CUIT deberá encontrarse activa en el Sistema Registral Observa codigoTipoDocumento / numeroDocumento 164 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 la CUIT del receptor es activa en monotributo Observa cuitRepresentada 187 Si <cuitRepresentada> tiene pendiente de presentación el formulario de habilitación de comprobantes o su fecha de presentación es anterior a tu alta en IVA Observa numeroDocumento 189 Si <numeroDocumento> es inexistente en el padron del Organismo Observa codigoTipoComprobante/ arrayComprobantesAsoci ados/importeTotal 195 Siendo <codigoTipoComprobante> una Nota de Crédito (3, 8, 53, 203 y 208), si la sumatoria de los importes totales de los elementos del array <arrayComprobantesAsociados> (sin incluir Remitos) supera el <importeTotal> de la Nota de Crédito Observa 

Autorizar un Ajuste IVA CAE **Campo Código de Error Validación NO es superada** codigoTipoComprobante/ codigoTipoDocumento/ numeroDocumento 261 Si <codigoTipoComprobante> es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue inactivado o invalidado. Observa codigoTipoComprobante/ codigoTipoDocumento/ numeroDocumento 297 Si <codigoTipoComprobante> es 3, 8, 53, 203 o 208 (Nota de Crédito), <codigoTipoDocumento> es igual a 80 (CUIT) y el <numeroDocumento> del receptor/comprador fue limitada por haber sido caracterizada como sujeto no confiable en materia de Seguridad Social. Observa numeroDocumento 312 Si el <numeroDocumento> del receptor/comprador se encuentra marcada como fallecido y no está marcado como sucesión indivisa. Observa 

Autorizar un Ajuste IVA CAE **<comprobanteAsociado>…</comprobanteAsociado>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigoTipoComprobante 200 

###### Deberá ser igual a 88 o 990 si el tipo 

###### de comprobante cuya autorización se 

###### solicita es igual a 1, 6 o 51 

###### Deberá ser igual a 1, 2, 3, 88 o 990 si el 

###### tipo de comprobante cuya 

###### autorización se solicita es igual a 2 o 3. 

###### Deberá ser igual a 6, 7, 8, 88 o 990 si el 

###### tipo de comprobante cuya 

###### autorización se solicita es igual a 7 u 8. 

###### Deberá ser igual a 51, 52, 53, 88 o 990 

###### si el tipo de comprobante cuya 

###### autorización se solicita es igual a 52 o 

###### 53. 

Rechaza numeroPuntoVenta 202 

###### El tipo de punto de venta, en caso de 

###### ser electrónico, deberá ser alguno de 

###### los siguientes: RECE para aplicativo y 

###### web services, Factura en Línea 

###### Responsable Inscripto, Factura en 

###### Línea Método Alternativo al RECE 

###### (límite de 100), Codificación de 

###### Productos Web services, Codificación 

###### de Productos Factura en Línea, CAEA 

- Fact. Elect. (RECE) - RI IVA o CAEA - 

###### Codificación de Productos. 

Rechaza codigoTipoComprobante 203 

###### Deberá ser igual a 1, 2, 3, 6, 7, 8, 51, 

###### 52, 53, 88 o 990. 

Rechaza codigoTipoComprobante / cuit 204 

###### El campo cuit es opcional y solo puede 

###### completarse si el tipo de comprobante 

###### es 88 o 990 (solo es necesario si el 

###### remito fue emitido por un tercero) 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / 205 

###### El remito asociado deberá obrar en las 

###### bases del organismo. 

 Rechaza 

Autorizar un Ajuste IVA CAE **Campo Código de Error Validación NO es superada** cuit codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 206 

###### Si remito asociado corresponde a 

###### tabaco de terceros, deberá estar en 

###### estado Confirmado 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 207 

###### El receptor del remito asociado deberá 

###### conicidir con el receptor del 

###### comprobante 

Rechaza fechaEmision 220 

###### La fecha de emisión del comprobante 

###### asociado informada no coincide con la 

###### existente en nuestros registros 

Rechaza fechaEmision 221 

###### La fecha de emisión de este 

###### comprobante no puede ser anterior a 

###### la factura asociada 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 222 

###### El comprobante asociado no posee 

###### cuit del receptor 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 223 

###### El comprobante asociado posee otro 

###### cuit de receptor 

Rechaza fechaEmision 224 

###### Si el punto de venta del comprobante 

###### asociado NO es del tipo electrónico 

###### debe informar la fecha de emisión 

Rechaza fechaEmision 225 

###### Si el punto de venta del comprobante 

###### asociado NO es del tipo electrónico la 

###### fecha de emisión no puede ser 

###### posterior a la fecha de la autorización 

 Rechaza 

 Autorizar un Ajuste IVA CAE 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada <periodoComprobantesAsociados>…</ periodoComprobantesAsociados>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** fechaDesde / fechaHasta 2200 

###### La fechaHasta debe ser posterior o 

###### igual fechaDesde 

Rechaza fechaHasta / fechaEmision 2201 

###### La fechaHasta del 

###### periodoComprobantesAsociados 

###### debe ser anterior o igual a la fecha 

###### de emisión del comprobante por el 

###### cual se está solicitando la 

###### autorización 

 Rechaza 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada** fechaDesde / fechaHasta 2202 Si el comprobante a autorizar incluye percepciones, el rango de fecha informado debe corresponder al mismo Mes/Año Observa **<subtotalIVA>...</subtotalIVA>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigo 400 Valores permitidos: 4, 5, 6 Rechaza 

Autorizar un Ajuste IVA CAE **Campo Código de Error Validación NO es superada** codigo 402 No se deberá repetir (no pueden incluírse dos subtotales IVA con el mismo código) Rechaza codigo 403 Si existen uno o más ítems con una determinada alícuota IVA, deberá existir el correspondiente subtotal IVA para dicha alícuota. No se sebe incluír un subtotal IVA si dicha alícuota no está presente en al menos un ítem. Rechaza importe 404 Deberá coincidir con la sumatoria de todos los <importeItem> de <item> donde la alícuota de IVA coincida con la indicada, es decir, donde <codigoCondicionIVA> de <item> = <codigo> de <subtotalIVA>. Rechaza 

Autorizar un Ajuste IVA CAE **<item>...</item>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** unidadesMtx 522 Deberá informarse 1 (uno). Rechaza codigoMtx 523 Deberá informarse el código 7790001001139 Rechaza codigo 505 Opcional. Longitud máxima 50 posiciones. Rechaza descripcion 506 Cantidad máxima de caracteres permitidos es 4000. Importante: no es necesario (ni recomendable) completar con espacios. Rechaza cantidad 524 No debe informarse Rechaza codigoUnidad Medida 525 Deberá informarse el código 7 unidades Rechaza precioUnitario 526 No debe informarse Rechaza importeBonific acion 527 No debe informarse Rechaza codigoCondicio nIVA 528 Deberá coincidir con alguno de los siguientes valores permitidos: 4, 5 o 6 Rechaza importeIVA 514 Obligatorio si <codigoTipoComprobante> es igual a 2, 3, 52 ó 53. No corresponde para <codigoTipoComprobante> igual a 7 u 8. Rechaza importeIVA 529 Para <codigoTipoComprobante> igual a 2, 3, 52 ó 53 deberá ser igual a <importeItem> Rechaza importeIVA 530 Si <codigoTipoComprobante> es igual a 2, 3, 52 ó 53 deberá ser mayor a 0 (cero) Rechaza importeItem 531 Deberá ser mayor a 0 (cero) Rechaza 

Autorizar un Ajuste IVA CAE **<datoAdicional>...</datoAdicional>** 

###### Los datos adicionales sólo deberán ser incluídos si el emisor pertenece al conjunto de emisores 

###### habilitado para usar datos adicionales (“Adicionales por R.G.”). En ese caso podrá incluír el o los datos 

###### adicionales que correspondan, especificando el tipo de dato adicional de acuerdo a la situación del 

###### emisor. El listado de tipos de datos adicionales se puede consultar con el método 

###### consultarTiposDatosAdicionales. 

###### Por ejemplo, si el emisor está incluído en el Régimen de Promoción Industrial, deberá incluír un dato 

###### adicional tipo 2. 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** t 320 Valores permitidos: consultar método _consultarTiposDatosAdicionales_ Rechaza t / c1…c6 321 Si t es igual a 2 (“Dato Adicional para Empresas Promovidas”), en c1 se deberá indicar el id de proyecto (el mismo deberá corresponder a la cuit emisora del comprobante) o cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen de Promoción Industrial. Los campos c2 a c6 no deberán informarse (reservados para uso futuro) Rechaza t / c1…c6 323 Si t es igual a: 11(“Dato Adicional para Operaciones Económicas Relacionadas con Bienes Inmuebles”) 12(“Dato Adicional para Locacion temporaria de Inmuebles con fines Turisticos”) 13(“Dato Adicional para Representantes de Modelos”) 14 (“Dato Adicional para Agencias de Publicidad”) 15 (“Dato Adicional para Personas Físicas que desarrollen actividad de Modelaje”) Rechaza 

Autorizar un Ajuste IVA CAE **Campo Código de Error Validación NO es superada** En c1 se deberá indicar cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen o 1 (uno) en caso de que la actividad facturada esté alcanzada por el Régimen. Los campos c2 a c6 no deberán informarse (reservados para uso futuro) t / c1…c6 324 Si t es igual a 10 (“Dato Adicional para Educación Pública de Gestión Privada”) En c1 se deberá indicar cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen o 1 (uno) en caso de que la actividad facturada esté alcanzada por el Régimen. Si se se informa c1 igual a 1(uno) debe informar: c2 = Tipo de Documento (corresponde a 10.11 según R.G.). c3 = Numero de Documento (corresponde 10.12 según R.G.). Los campos c4 a c6 no deberán informarse (reservados para uso futuro) Rechaza t / c1…c6 325 Si t es igual a 10 (“Dato Adicional para Educación Pública de Gestión Privada”) y c1 igual a 1(uno). En c2 debe informar alguno de los valores permitidos: consultar método consultarTiposDocumento. Si se indica c2 con 80, 86 ú 87 (CUIT, CUIL y CDI respectivamente) el número informado en c3 deberá obrar en las bases del organismo. Rechaza t / c1…c6 322 No se puede incluír más de un dato adicional (sólo se permite un id por comprobante) Rechaza 

Autorizar un Ajuste IVA CAE **<comprador>...</comprador>** 

###### El grupo de compradores sólo deberán ser incluídos para respaldar las operaciones de venta de bienes 

###### muebles registrables a un conjunto de adquirentes. 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** arrayCompradores 420 Si se informar el grupo de compradores debe tener mas de un comprador Rechaza codigoTipoDocumento/ numeroDocumento 421 Si se infroma el grupo de compradores, el tipo y número de documento del Receptor es obligatorio. Cuando se informan compradores múltiples, el que se indique con mayor porcentaje deberá figurar como receptor del comprobante. En caso de no haber un único comprador con porcentaje mayor, debe informar uno de ellos. Rechaza codigoTipoDocumento 422 El tipo de documento de los compradores debe ser CUIT, CUIL o CDI Rechaza codigoTipoDocumento/ numeroDocumento 423 Número de documento informado repetido. Sólo Se debe informar una vez al comprador Rechaza porcentaje 424 El Porcentaje de Titularidad del Comprador debe ser mayor a 0 (cero) Rechaza porcentaje 425 El Porcentaje de Titularidad del Comprador debe ser menor a 100 (cien) Rechaza porcentaje 426 El Emisor del comprobante no puede ser comprador Rechaza porcentaje 427 La suma de los porcentajes indicados en la lista de compradores debe ser igual a 100 Rechaza codigoTipoDocumento/ numeroDocumento 428 El receptor del comprobante debe incluírse con el mismo tipo y número de documento en el grupo de compradores Rechaza codigoTipoDocumento/ 429 El receptor del comprobante (tipo Rechaza 

Autorizar un Ajuste IVA CAE **Campo Código de Error Validación NO es superada** numeroDocumento/ porcentaje y número de documento) debe coincidir con el comprador que tenga el mayor porcentaje en la lista de compradores. En caso de no haber un único comprador con porcentaje mayor, deberá coincidir con uno de ellos codigoTipoDocumento/ numeroDocumento 430 Las CUIT/CUIL/CDI de los compradores deberán encontrarse activas en el Sistema Registral Rechaza codigoTipoComprobante /numeroDocumento 431 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 las CUITs de los compradores deben 

###### encontrarse activa en IVA o en 

###### monotributo. 

Rechaza arrayCompradores /codigoConcepto 432 Sólo se puede informar el arrayCompradores para codigoConcepto igual a 1 (Productos) Rechaza 

#### Solicitar CAEA (solicitarCAEA) 

Esta operación permite solicitar un CAEA. El cliente envía el requerimiento, el cual es atendido por el WS, superadas las validaciones se otorgará un CAEA y su respectivo período de vigencia (fecha de validez desde y fecha de validez hasta). Podrá ser solicitado dentro de los 5 (cinco) días corridos anteriores al comienzo de cada quincena y hasta el final de la misma. Habrá dos quincenas, la primera abarca desde el primero hasta el quince de cada mes y la segunda desde el dieciséis hasta el último día del mes. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:solicitarCAEARequest>
      <authRequest>
        <token>
          string
        </token>
        Informar un Comprobante CAEA (informarComprobanteCAEA)
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      <solicitudCAEA>
        <periodo>
          int
        </periodo>
        <orden>
          short
        </orden>
      </solicitudCAEA>
    </ser:solicitarCAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<solicitudCAEA>** es del tipo **SolicitudCAEAType** Se debe indicar el período y orden para la cual se solicita el CAEA. **<solicitudCAEA> Campo / Grupo Descripción Obligatorio Tipo Longitud** periodo Indica año y el mes al que corresponde el CAEA. Formato AAAAMM S int 6 orden Especifica el orden de secuencia en el trascurso del S short 1 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Descripción Obligatorio Tipo Longitud** tiempo. Valores permitidos: 1: primer quincena 2: segunda quincena 

 Informar un Comprobante CAEA (informarComprobanteCAEA) 

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
          Informar un Comprobante CAEA (informarComprobanteCAEA)
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

Informar un Comprobante CAEA (informarComprobanteCAEA) Si la solicitud fue aprobada se informará el CAEA otorgado y la vigencia. 

###### <CAEA Response> 

**Campo / Grupo Descripción Obligatorio**^ **Tipo Longitud** fechaProceso Fecha en que se otorgó el CAEA. S date -CAEA CAEA otorgado S long 14 periodo Indica año y el mes al que corresponde el CAEA. Formato AAAAMM S int 6 orden Especifica el orden de secuencia en el trascurso del tiempo. Valores permitidos: 1: primer quincena 2: segunda quincena S short 1 fechaDesde Fecha de inicio de la vigencia del CAEA S date -fechaHasta Fecha de fin de la vigencia del CAEA S date -fechaTopeInforme Fecha tope para informar los comprobantes donde se utilizó el CAEA S date -arrayObservaciones Indica los motivos por los cuales el comprobante fue aceptado con observaciones, en caso de corresponder. N ArrayCodigosDe scripcionesType -

##### Ejemplo para “Solicitar CAEA” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:solicitarCAEARequest>
      <authRequest>
        <token>
          un string
        </token>
        <sign>
          un string
        </sign>
        Informar un Comprobante CAEA (informarComprobanteCAEA)
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <solicitudCAEA>
        <periodo>
          201011
        </periodo>
        <orden>
          1
        </orden>
      </solicitudCAEA>
    </ser:solicitarCAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:solicitarCAEAResponse>
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
    </ser:solicitarCAEAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

##### Validaciones del Negocio 

**<authRequest>...</authRequest>** 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Error Validación No es superada** cuitRepresentada 10005 La cuit emisora ha sido incluída en la consulta de facturas apócrifas Rechaza cuitRepresentada 10020 Deberá encontrarse empadronado y activo en el Régimen para solicitar CAEA. Se informa que esta validación quedará fuera de vigencia a partir del 01/06/2026 Rechaza cuitRepresentada 10021 Deberá encontrarse empadronado y activo en Codificación de Productos 

- opción Facturas con Detalle     Rechaza cuitRepresentada 10022 Deberá estar registrado como Autoimpresor. Se informa que esta validación quedará fuera de vigencia a partir del 01/06/2026 Rechaza cuitRepresentada 10024 Deberá poseer al menos un punto de venta activo correspondiente al régimen CAEA - Codificación de Productos - opción Facturas con Detalle Rechaza cuitRepresentada 10025 Deberá estar adherida al Domicilio Fiscal Electrónico Observa cuitRepresentada 10026 El contribuyente registra incumplimientos en la rendición del régimen CAEA. La CUIT adeuda la presentación de 2 quincenas consecutivas o 4 alternadas. Retornará el listado de las rendiciones pendientes con el siguiente formato "periodo ; orden ; punto de venta". Observa cuitRepresentada 10027 Se recuerda que según la RG 5782/2025 el régimen de CAEA se aplica exclusivamente a situaciones de contingencia, motivo por el cual solo se permitirá su uso en domicilios que cuenten con al menos un punto de venta activo bajo la modalidad CAE o Controlador Fiscal como modalidad principal Rechaza cuitRepresentada 10028 Existen Puntos de Venta CAEA que no comparten domicilio con algún Punto de Venta CAE o Controlador Fiscal que actúe como modalidad principal. Retornará el listado de los Puntos de Venta afectados. Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **<solicitudCAEA>...</solicitudCAEA> Campo / concepto Código de Error Validación NO es superada** periodo 600 Debe tener el formato AAAAMM, donde AAAA indica el año y MM el mes en números. Rechaza orden 601 Debe ser igual a 1 ó 2. Rechaza fecha en que se envía la solicitud 602 Fecha de envío podrá ser hasta 5 (cinco) días corridos anteriores del inicio cada quincena y hasta el final de la misma. Rechaza periodo / orden 604 No debe existir un CAEA otorgado para la CUIT solicitante con igual periodo y orden. Rechaza 

#### Informar un Comprobante CAEA (informarComprobanteCAEA) 

Este método permite informar para cada CAEA otorgado, la totalidad de los comprobantes emitidos y asociados a cada CAEA. Por cada comprobante se enviará una solicitud, la cual será procesada por el WS pudiendo producirse alguna de las siguientes situaciones:  Supere todas las validaciones, la solicitud es aprobada.  No supere alguna de las validaciones excluyentes, la solicitud será rechazada.  No supere alguna de las validaciones no excluyentes, la solicitud es aprobada con observaciones. 

##### Mensaje de Solicitud 

**Esquema** ss 

Informar un Comprobante CAEA (informarComprobanteCAEA) 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarComprobanteCAEARequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      <comprobanteCAEARequest>
        <codigoTipoComprobante>
          short
        </codigoTipoComprobante>
        Informar un Comprobante CAEA (informarComprobanteCAEA)
        <numeroPuntoVenta>
          NumeroPuntoVentaSimpleType
        </numeroPuntoVenta>
        <numeroComprobante>
          NumeroComprobanteSimpleType
        </numeroComprobante>
        <fechaEmision>
          date
        </fechaEmision>
        <codigoTipoAutorizacion>
          CodigoTipoAutorizacionSimpleType
        </codigoTipoAutorizacion>
        <codigoAutorizacion>
          long
        </codigoAutorizacion>
        <fechaVencimiento>
          date
        </fechaVencimiento>
        <codigoTipoDocumento>
          short
        </codigoTipoDocumento>
        <numeroDocumento>
          long
        </numeroDocumento>
        <condicionIVAReceptor>
          short
        </condicionIVAReceptor>
        <importeGravado>
          ImporteTotalSimpleType
        </importeGravado>
        <importeNoGravado>
          ImporteTotalSimpleType
        </importeNoGravado>
        <importeExento>
          ImporteTotalSimpleType
        </importeExento>
        <importeSubtotal>
          ImporteTotalSimpleType
        </importeSubtotal>
        <importeOtrosTributos>
          ImporteTotalSimpleType
        </importeOtrosTributos>
        <importeTotal>
          ImporteTotalSimpleType
        </importeTotal>
        <codigoMoneda>
          string
        </codigoMoneda>
        <cotizacionMoneda>
          decimal
        </cotizacionMoneda>
        <cancelaEnMismaMonedaExtranjera>
          SiNoSimpleType
        </cancelaEnMismaMonedaExtranjera>
        <observaciones>
          string
        </observaciones>
        <codigoConcepto>
          short
        </codigoConcepto>
        <fechaServicioDesde>
          date
        </fechaServicioDesde>
        <fechaServicioHasta>
          date
        </fechaServicioHasta>
        <fechaVencimientoPago>
          date
        </fechaVencimientoPago>
        <fechaHoraGen>
          dateTime
        </fechaHoraGen>
        <arrayComprobantesAsociados>
          <comprobanteAsociado>
            <codigoTipoComprobante>
              short
            </codigoTipoComprobante>
            <numeroPuntoVenta>
              NumeroPuntoVentaSimpleType
            </numeroPuntoVenta>
            Informar un Comprobante CAEA (informarComprobanteCAEA)
            <numeroComprobante>
              NumeroComprobanteSimpleType
            </numeroComprobante>
            <cuit>
              long
            </cuit>
            <fechaEmision>
              date
            </fechaEmision>
          </comprobanteAsociado>
        </arrayComprobantesAsociados>
        <periodoComprobantesAsociados>
          <fechaDesde>
            date
          </fechaDesde>
          <fechaHasta>
            date
          </fechaHasta>
        </periodoComprobantesAsociados>
        <arrayOtrosTributos>
          <otroTributo>
            <codigo>
              short
            </codigo>
            <descripcion>
              string
            </descripcion>
            <baseImponible>
              ImporteTotalSimpleType
            </baseImponible>
            <importe>
              ImporteTotalSimpleType
            </importe>
          </otroTributo>
        </arrayOtrosTributos>
        <arrayItems>
          <item>
            <unidadesMtx>
              int
            </unidadesMtx>
            <codigoMtx>
              string
            </codigoMtx>
            <codigo>
              string
            </codigo>
            <descripcion>
              string
            </descripcion>
            <cantidad>
              DecimalSimpleType
            </cantidad>
            <codigoUnidadMedida>
              short
            </codigoUnidadMedida>
            <precioUnitario>
              DecimalSimpleType
            </precioUnitario>
            <importeBonificacion>
              DecimalSimpleType
            </importeBonificacion>
            <codigoCondicionIVA>
              short
            </codigoCondicionIVA>
            <importeIVA>
              ImporteSubtotalSimpleType
            </importeIVA>
            <importeItem>
              ImporteSubtotalSimpleType
            </importeItem>
            Informar un Comprobante CAEA (informarComprobanteCAEA)
          </item>
        </arrayItems>
        <arraySubtotalesIVA>
          <subtotalIVA>
            <codigo>
              short
            </codigo>
            <importe>
              ImporteTotalSimpleType
            </importe>
          </subtotalIVA>
        </arraySubtotalesIVA>
        <arrayDatosAdicionales>
          <datoAdicional>
            <t>
              short
            </t>
            <c1>
              string
            </c1>
            <c2>
              string
            </c2>
            <c3>
              string
            </c3>
            <c4>
              string
            </c4>
            <c5>
              string
            </c5>
            <c6>
              string
            </c6>
          </datoAdicional>
        </arrayDatosAdicionales>
        <arrayActividades>
          <actividad>
            <codigo>
              long
            </codigo>
          </actividad>
        </arrayActividades>
      </comprobanteCAEARequest>
    </ser:informarComprobanteCAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 

Informar un Comprobante CAEA (informarComprobanteCAEA) Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 

Informar un Comprobante CAEA (informarComprobanteCAEA) **<comprobanteCAEARequest>** contiene los datos del comprobante. Es del tipo **ComprobanteType. IMPORTANTE: para mas detalles sobre éste y otros tipos de datos consultar la Sección 3: “Definición de Tipos de Datos”** 

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
        Informar un Comprobante CAEA (informarComprobanteCAEA)
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
 

Informar un Comprobante CAEA (informarComprobanteCAEA) Donde: **<informarComprobanteCAEAResponse>** contiene el resultado del proceso informar un comprobante CAEA. **Campo Descripción Oblig Tipo Long** resultado A: Aprobado, O: Observado, R: Rechazado S ResultadoSimpleType 1 fechaProceso Especifica la fecha de proceso de la solicitud S date -comprobanteCAEAR esponse Existe si el resultado es Aprobado. Contiene los datos que identifican al comprobante y los referentes a la autorización. N ComprobanteCAEAResp onseType -arrayObservaciones Indica los motivos por los cuales el comprobante fue aceptado con observaciones, en caso de corresponder. N ArrayCodigosDescripcio nesType -arrayErrores Si la solicitud fue rechazada, detalla el o los motivos que dieron origen al rechazo. N ArrayCodigosDescripcio nesType -evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType -

Informar un Comprobante CAEA (informarComprobanteCAEA) **<comprobanteCAEAResponse>** es del tipo **ComprobanteCAEAResponseType <comprobanteCAEAResponse> Campo Descripción Oblig Tipo Long** CAEA CAEA asignado al comprobante autorizado. S long 14 codigoTipoComproba nte Tipo de Comprobante S short 3 numeroPuntoVenta Número del punto de venta del comprobante informado S NumeroPuntoVentaSimp leType 5 numeroComprobante Número del comprobante informado S NumerocomprobanteSi mpleType 8 

##### Ejemplo para “Informar Comprobante CAEA” 

Ejemplo Factura A 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarComprobanteCAEARequest>
      <authRequest>
        <token>
          un string
        </token>
        <sign>
          un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <comprobanteCAEARequest>
        <codigoTipoComprobante>
          1
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          1000
        </numeroPuntoVenta>
        Informar un Comprobante CAEA (informarComprobanteCAEA)
        <numeroComprobante>
          1
        </numeroComprobante>
        <fechaEmision>
          2010-11-01
        </fechaEmision>
        <codigoTipoAutorizacion>
          A
        </codigoTipoAutorizacion>
        <codigoAutorizacion>
          12345678901235
        </codigoAutorizacion>
        <fechaVencimiento>
          2010-11-15
        </fechaVencimiento>
        <codigoTipoDocumento>
          80
        </codigoTipoDocumento>
        <numeroDocumento>
          5555555555
        </numeroDocumento>
        <condicionIVAReceptor>
          1
        </condicionIVAReceptor>
        <importeGravado>
          10916.04
        </importeGravado>
        <importeNoGravado>
          12.00
        </importeNoGravado>
        <importeExento>
          4132.00
        </importeExento>
        <importeSubtotal>
          15060.04
        </importeSubtotal>
        <importeOtrosTributos>
          16.00
        </importeOtrosTributos>
        <importeTotal>
          17645.00
        </importeTotal>
        <codigoMoneda>
          PES
        </codigoMoneda>
        <cotizacionMoneda>
          1.000000
        </cotizacionMoneda>
        <cancelaEnMismaMonedaExtranjera>
          N
        </cancelaEnMismaMonedaExtranjera <observaciones>
        observaciones comerciales
      </observaciones>
      <codigoConcepto>
        1
      </codigoConcepto>
      <arrayOtrosTributos>
        <otroTributo>
          <codigo>
            1
          </codigo>
          <baseImponible>
            1000.00
          </baseImponible>
          <importe>
            16.00
          </importe>
        </otroTributo>
      </arrayOtrosTributos>
      <arrayItems>
        <item>
          <unidadesMtx>
            1
          </unidadesMtx>
          <codigoMtx>
            0123456779914
          </codigoMtx>
          <codigo>
            P0001
          </codigo>
          <descripcion>
            Producto P0001
          </descripcion>
          Informar un Comprobante CAEA (informarComprobanteCAEA)
          <cantidad>
            1
          </cantidad>
          <codigoUnidadMedida>
            7
          </codigoUnidadMedida>
          <precioUnitario>
            12383.00
          </precioUnitario>
          <codigoCondicionIVA>
            5
          </codigoCondicionIVA>
          <importeIVA>
            2600.43
          </importeIVA>
          <importeItem>
            14983.43
          </importeItem>
        </item>
        <item>
          <descripcion>
            Descuento general
          </descripcion>
          <codigoUnidadMedida>
            99
          </codigoUnidadMedida>
          <codigoCondicionIVA>
            5
          </codigoCondicionIVA>
          <importeIVA>
            -31.47
          </importeIVA>
          <importeItem>
            -1498.43
          </importeItem>
        </item>
        <item>
          <unidadesMtx>
            1
          </unidadesMtx>
          <codigoMtx>
            0123456744912
          </codigoMtx>
          <codigo>
            P0002
          </codigo>
          <descripcion>
            Producto P0002
          </descripcion>
          <cantidad>
            1
          </cantidad>
          <codigoUnidadMedida>
            1
          </codigoUnidadMedida>
          <precioUnitario>
            12.00
          </precioUnitario>
          <codigoCondicionIVA>
            1
          </codigoCondicionIVA>
          <importeIVA>
            0
          </importeIVA>
          <importeItem>
            12.00
          </importeItem>
        </item>
        <item>
          <unidadesMtx>
            3
          </unidadesMtx>
          <codigoMtx>
            0111111111117
          </codigoMtx>
          <codigo>
            P0003
          </codigo>
          <descripcion>
            Producto P0003
          </descripcion>
          <cantidad>
            1
          </cantidad>
          <codigoUnidadMedida>
            1
          </codigoUnidadMedida>
          Informar un Comprobante CAEA (informarComprobanteCAEA)
          <precioUnitario>
            4132.00
          </precioUnitario>
          <codigoCondicionIVA>
            2
          </codigoCondicionIVA>
          <importeIVA>
            0
          </importeIVA>
          <importeItem>
            4132.00
          </importeItem>
        </item>
      </arrayItems>
      <arraySubtotalesIVA>
        <subtotalIVA>
          <codigo>
            5
          </codigo>
          <importe>
            2568.96
          </importe>
        </subtotalIVA>
      </arraySubtotalesIVA>
      <arrayActividades>
        <actividad>
          <codigo>
            120010
          </codigo>
        </actividad>
        <actividad>
          <codigo>
            463300
          </codigo>
        </actividad>
      </arrayActividades>
    </comprobanteCAEARequest>
  </ser:informarComprobanteCAEARequest>
</soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Body>
    <ns1:informarComprobanteCAEAResponse xmlns:ns1="http://impl.service.wsmtxca.afip.gob.ar/service/">
      <resultado>
        A
      </resultado>
      <fechaProceso>
        2010-12-15
      </fechaProceso>
      <comprobanteCAEAResponse>
        Informar un Comprobante CAEA (informarComprobanteCAEA)
        <CAEA>
          20484821994807
        </CAEA>
        <codigoTipoComprobante>
          1
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          1000
        </numeroPuntoVenta>
        <numeroComprobante>
          1
        </numeroComprobante>
      </comprobanteCAEAResponse>
    </ns1:informarComprobanteCAEAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Ejemplo Factura B 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarComprobanteCAEARequest>
      <authRequest>
        <token>
          un string
        </token>
        <sign>
          un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <comprobanteCAEARequest>
        <codigoTipoComprobante>
          6
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          1
        </numeroPuntoVenta>
        <numeroComprobante>
          3
        </numeroComprobante>
        <fechaEmision>
          2010-12-15
        </fechaEmision>
        <codigoTipoAutorizacion>
          A
        </codigoTipoAutorizacion>
        <codigoAutorizacion>
          20484821994807
        </codigoAutorizacion>
        <codigoTipoDocumento>
          96
        </codigoTipoDocumento>
        <numeroDocumento>
          24999999
        </numeroDocumento>
        <condicionIVAReceptor>
          5
        </condicionIVAReceptor>
        <importeGravado>
          11118.62
        </importeGravado>
        <importeNoGravado>
          12.00
        </importeNoGravado>
        Informar un Comprobante CAEA (informarComprobanteCAEA)
        <importeExento>
          4132.00
        </importeExento>
        <importeSubtotal>
          15262.62
        </importeSubtotal>
        <importeOtrosTributos>
          16.00
        </importeOtrosTributos>
        <importeTotal>
          17613.53
        </importeTotal>
        <codigoMoneda>
          PES
        </codigoMoneda>
        <cotizacionMoneda>
          1.000000
        </cotizacionMoneda>
        <cancelaEnMismaMonedaExtranjera>
          N
        </cancelaEnMismaMonedaExtranjera>
        <observaciones>
          observaciones comerciales
        </observaciones>
        <codigoConcepto>
          1
        </codigoConcepto>
        <arrayOtrosTributos>
          <otroTributo>
            <codigo>
              1
            </codigo>
            <baseImponible>
              1000.00
            </baseImponible>
            <importe>
              16.00
            </importe>
          </otroTributo>
        </arrayOtrosTributos>
        <arrayItems>
          <item>
            <unidadesMtx>
              1
            </unidadesMtx>
            <codigoMtx>
              1234567890123
            </codigoMtx>
            <codigo>
              P0001
            </codigo>
            <descripcion>
              Producto P0001
            </descripcion>
            <cantidad>
              1
            </cantidad>
            <codigoUnidadMedida>
              7
            </codigoUnidadMedida>
            <precioUnitario>
              14983.43
            </precioUnitario>
            <codigoCondicionIVA>
              5
            </codigoCondicionIVA>
            <importeItem>
              14983.43
            </importeItem>
          </item>
          <item>
            <descripcion>
              Descuento general
            </descripcion>
            <codigoUnidadMedida>
              99
            </codigoUnidadMedida>
            <codigoCondicionIVA>
              5
            </codigoCondicionIVA>
            Informar un Comprobante CAEA (informarComprobanteCAEA)
            <importeItem>
              -1529.90
            </importeItem>
          </item>
          <item>
            <unidadesMtx>
              1
            </unidadesMtx>
            <codigoMtx>
              0123456744912
            </codigoMtx>
            <codigo>
              P0002
            </codigo>
            <descripcion>
              Producto P0002
            </descripcion>
            <cantidad>
              1
            </cantidad>
            <codigoUnidadMedida>
              1
            </codigoUnidadMedida>
            <precioUnitario>
              12.00
            </precioUnitario>
            <codigoCondicionIVA>
              1
            </codigoCondicionIVA>
            <importeItem>
              12.00
            </importeItem>
          </item>
          <item>
            <unidadesMtx>
              3
            </unidadesMtx>
            <codigoMtx>
              0111111111117
            </codigoMtx>
            <codigo>
              P0003
            </codigo>
            <descripcion>
              Producto P0003
            </descripcion>
            <cantidad>
              1
            </cantidad>
            <codigoUnidadMedida>
              1
            </codigoUnidadMedida>
            <precioUnitario>
              4132.00
            </precioUnitario>
            <codigoCondicionIVA>
              2
            </codigoCondicionIVA>
            <importeItem>
              4132.00
            </importeItem>
          </item>
        </arrayItems>
        <arraySubtotalesIVA>
          <subtotalIVA>
            <codigo>
              5
            </codigo>
            <importe>
              2334.91
            </importe>
          </subtotalIVA>
        </arraySubtotalesIVA>
        <arrayActividades>
          <actividad>
            Informar un Comprobante CAEA (informarComprobanteCAEA)
            <codigo>
              120010
            </codigo>
          </actividad>
          <actividad>
            <codigo>
              463300
            </codigo>
          </actividad>
        </arrayActividades>
      </comprobanteCAEARequest>
    </ser:informarComprobanteCAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Body>
    <ns1:informarComprobanteCAEAResponse xmlns:ns1="http://impl.service.wsmtxca.afip.gob.ar/service/">
      <resultado>
        A
      </resultado>
      <fechaProceso>
        2010-12-15
      </fechaProceso>
      <comprobanteCAEAResponse>
        <CAEA>
          20484821994807
        </CAEA>
        <codigoTipoComprobante>
          6
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          1
        </numeroPuntoVenta>
        <numeroComprobante>
          3
        </numeroComprobante>
      </comprobanteCAEAResponse>
    </ns1:informarComprobanteCAEAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

 Informar un Comprobante CAEA (informarComprobanteCAEA) 

##### Validaciones del Negocio 

 <authRequest>...</authRequest> Campo Código de Error Validación No es superada cuitRepresentada 10006 La cuit emisora ha sido inlcuída en la consulta de facturas apócrifas Rechaza cuitRepresentada 10030 Debe estar empadronada en el régimen de CAEA con estado activo o baja. Se informa que esta validación quedará fuera de vigencia a partir del 01/06/2026. Rechaza <comprobanteCAEARequest>…</comprobanteCAEARequest> 

###### Validaciones Excluyentes 

**Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / periodoComprobantesAsociados 162 Si <codigoTipoComprobante> es igual a 1, 2, 51, 201 ó 206 correspondientes a Facturas no corresponde informar un periodo de comprobantes asociados Rechaza codigoTipoDocumento / numeroDocumento 163 La cuit receptora se encuentra inactiva por haber sido inlcuída en la consulta de facturas apócrifas Rechaza codigo / arrayActividades 165 Si ocurrió un error imprevisto al momento de validar las actividades a quedar asociadas al comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** condicionIVAReceptor/ fechaEmision 390 Si no se informa la condición de IVA del Receptor (obligatoria) o bien se informa un valor no contemplado por el servicio. Ver método consultarCondicionesIVARecep tor Rechaza codigoTipoComprobante 700 Podrá ser: 1 – Factura A 2 – Nota de Débito A 3 – Nota de Crédito A 6 – Factura B 7 – Nota de Débito B 8 – Nota de Crédito B 51 – Factura A con leyenda OPERACIÓN SUJETA A RETENCIÓN 52 – Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 – Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 201 Factura de Crédito Electrónica MiPyMEs (FCE) A 202 Nota de Débito Electrónica MiPyMEs (FCE) A 203 Nota de Crédito Electrónica MiPyMEs (FCE) A 206Factura de Crédito Electrónica MiPyMEs (FCE) B 207 Nota de Débito Electrónica MiPyMEs (FCE) B 208 Nota de Crédito Electrónica MiPyMEs (FCE) B Rechaza 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante/ cuitRepresentada 700 El contribuyente no se encuentra habilitado a emitir (según el tipo de comprobante indicado) comprobantes A, A con Leyenda o A con leyenda OPERACIÓN SUJETA A RETENCIÓN Observa numeroPuntoVenta 701 Debe ser del tipo habilitado para CAEA Codificación de Productos opción Factura con Detalle y no debe estar bloqueado a la fecha en que se emitió el comprobante. Consultar método _consultarPuntosVenta_ o _consultarPuntosVentaCAEA_ Rechaza fechaEmision 702 Debe estar comprendida dentro de la fecha desde y fecha hasta de vigencia del CAEA Rechaza numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 703 El número de comprobante informado debe ser mayor en 1 al último informado para igual punto de venta y tipo de comprobante. De no existir comprobante informado para igual punto de venta y codigoTipoComprobante, el número de comprobante debe ser igual a 1 (uno) Rechaza fechaEmision / numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 704 La fecha de emisión del comprobante debe ser mayor o igual a la fecha del último comprobante informado para igual tipo de comprobante y punto de venta. Rechaza codigoAutorizacion 705 Debe informarse y corresponder a la CUIT Rechaza fecha en que se envía la solicitud 706 Debe ser mayor a la fecha de entrada en vigencia del CAEA <fechaDesde> Rechaza codigoTipoDocumento / numeroDocumento 707 Si se informa uno de los campos debe informarse el otro. Rechaza 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** CAEA / numeroPuntoVenta 709 La fecha de alta del numeroPuntoVenta debe ser menor o igual a la fechaHasta de la vigencia del CAEA que posee el comprobante que se está informando. Rechaza codigoConcepto 713 Deberá ser igual a alguno de los siguientes valores: 1 – Productos 2 – Servicios 3 – Productos y Servicios Rechaza arraySubtotalesIVA 715 Opcional. Debe informarse si algún ítem tiene <codigoCondicionIVA> igual a 4, 5 ó 6. Rechaza codigoTipoDocumento / numeroDocumento 718 Opcionales. Deberá informarse en los siguientes casos: 

- cuando <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52, 53, 201, 202, 203, 206, 207 o 208. -cuando <codigoTipoComprobante> es igual a 6, 7 u 8 y el importe total del comprobante <importeTotal> es mayor ó igual al monto en pesos resultante según RG4444.     Rechaza codigoTipoAutorizacion 731 Opcional. Si se informa debe informarse “A” (sin comillas) Rechaza fechaVencimiento 732 Opcional. Si se informa debe coincidir con la Fecha Hasta del CAEA informado Rechaza 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoDocumento 733 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52, 53, 201, 202, 203, 206, 207 o 208 <codigoTipoDocumento > deberá ser igual a 80 (CUIT) Rechaza codigoTipoDocumento 736 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarTiposDocumento_ Rechaza numeroPuntoVenta / codigoTipoComprobante 739 Los informes de comprobantes para un mismo punto de venta y tipo de comprobante deben ser enviados en forma sincrónica: si el WS recibe una nueva solicitud para un punto de venta y tipo de comprobante dado mientras la anterior está siendo procesada, la nueva solicitud será rechazada Rechaza arrayCompradores 753 Grupo de compradores no habilitado para el método Rechaza numeroPuntoVenta / fechaHoraGen 754 La fecha/hora de generación es obligatoria para comprobantes CAEA por contingencia (no se informó el campo fecha/hora generación y el punto de venta es del tipo CAEA por Contingencia). A partir del 01/08/2026 sera obligatoria para comprobantes CAEA sin distinción del tipo de punto de venta (por Contingencia o no) Rechaza cuitRepresentada 757 Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208. Por las condiciones de la CUIT Emisora, no corresponde realizar FCE Rechaza 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoDocumento / numeroDocumento 758 Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208, <codigoTipoDocumento> debe ser igual a 80 y <numeroDocumento> debe ser válido y activo. Rechaza codigoTipoDocumento / numeroDocumento 759 Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208. La CUIT Receptora no registra alta en el Domicilio Fiscal Electrónico Rechaza codigoTipoDocumento / numeroDocumento 760 Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208. La CUIT Receptora no está incluida en el listado de empresas grandes según cronograma vigente ni optó por ser receptora de Factura de Crédito MiPyMe Rechaza numeroDocumento 761 Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208, el Receptor no puede ser igual al Emisor Rechaza codigoTipoDocumento / numeroDocumento 762 Si <codigoTipoComprobante> es igual a 201, 202 o 203 la CUIT del receptor debe 

###### encontrarse activa en IVA o en 

###### monotributo. 

Rechaza codigoTipoDocumento / numeroDocumento 763 Si <codigoTipoComprobante> es igual a 206, 207 o 208 la CUIT del receptor debe encontrarse activa como Responsable Inscripto en IVA, IVA Exento o Monotributista. Rechaza fechaVencimientoPago 764 Si <codigoTipoComprobante> es igual a 201 ó 206. La Fecha de Vencimiento de Pago es obligatorio para Facturas de Crédito MiPyME Rechaza 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** fechaVencimientoPago 765 Si <codigoTipoComprobante> es igual a 202, 203, 207 ó 

208. La Fecha de Vencimiento de Pago no debe informarse para Notas de Crédito o Débito de las Facturas de Crédito MiPYME     Rechaza fechaVencimientoPago / fechaEmision 766 La fecha de vencimiento de pago debe ser posterior o igual a la fecha de emisión. Rechaza importeTotal 769 El importe no puede ser negativo ni nulo Rechaza importeTotal 770 Si <codigoTipoComprobante> es igual a 203 ó 208. El importe total del comprobante a autorizar no puede ser mayor o igual al saldo de la operación actual de la cuenta corriente Rechaza codigoMoneda 771 Si <codigoTipoComprobante> es igual a 202, 203, 207 ó 208, la moneda debe:  coincidir con la Factura vinculada, ó  ser Pesos Argentinos si la Factura vinculada ya fue aceptada, cancelada o rechazada y se desea realizar un ajuste por diferencia de cambio Rechaza fechaEmision 774 Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208, la Fecha de Emisión debe ser anterior a la fecha en que se envía la solicitud Rechaza 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** fechaEmision / codigoMoneda 776 Si <codigoTipoComprobante> es igual a 202, 203, 207 ó 

208. Para realizar una Nota de Débito o Crédito con moneda distinta a la Factura la <fechaEmision> de la misma debe ser posterior a la aceptación de la Factura o Cuenta Corriente Asociada     Rechaza codigoTipoComprobante / periodoComprobantesAsociados 777 Si <codigoTipoComprobante> es igual a 202, 203, 207 ó 208 perteneciente a Factura de Crédito Electrónica no corresponde informar un periodo de comprobantes asociados. Rechaza codigoTipoComprobante / arrayComprobantesAsociados / periodoComprobantesAsociados 778 Si <codigoTipoComprobante> es igual a 2, 3, 7, 8, 52 ó 53. Falta informar comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito válido/s o informar un período de comprobantes asociados válido Rechaza codigoTipoComprobante / arrayComprobantesAsociados / periodoComprobantesAsociados 779 Si <codigoTipoComprobante> es igual a 2, 3, 7, 8, 52 ó 53. No debe informar un período de comprobantes asociados cuando informa comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito Rechaza codigoTipoComprobante / periodoComprobantesAsociados 780 Si <codigoTipoComprobante> es igual a 1, 2, 51, 201 ó 206 correspondientes a Facturas no corresponde informar un periodo de comprobantes asociados. Rechaza 

###### Validaciones NO Excluyentes 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoDocumento / numeroDocumento 140 

###### Si <codigoTipoDocumento> es 

###### igual a 80 (CUIT) y el 

###### <numeroDocumento> del 

###### receptor/comprador fue 

###### inactivado o invalidado. 

Observa codigoTipoDocumento / numeroDocumento 142 

###### Si <codigoTipoDocumento> es 

###### igual a 80 (CUIT) y el 

###### <numeroDocumento> del 

###### receptor/comprador fue 

###### limitada por haber sido 

###### caracterizada como sujeto no 

###### confiable en materia de 

###### Seguridad Social. 

Observa codigoTipoDocumento / numeroDocumento 144 

###### Si <codigoTipoDocumento> es 

###### igual a 80 (CUIT) y el 

###### <numeroDocumento> del 

###### receptor/comprador fue 

###### limitada por haber sido marcada 

###### como Apocrifa. 

Observa numeroDocumento 146 

###### Si el <numeroDocumento> del 

###### receptor/comprador se 

###### encuentra marcada como 

###### fallecido y no está marcado 

###### como sucesión indivisa. 

Observa codigo / arrayActividades 366 Si <codigo> se encuentra mas de una vez en el array de actividades (no admite repetidos). Ver el Anexo de Rubros de Actividades y Remitos Observa codigo / arrayActividades 367 Si <codigo> no se encuentra entre las actividades vigentes para la cuit representada. Ver el Anexo de Rubros de Actividades y Remitos Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigo / arrayActividades 368 Si <codigo> se encuentra asociado a un conjunto de actividades de un “rubro” y se encontraron otros <codigo> dentro del array que se encuentran asociados a otro conjunto de un “rubro” distinto. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 370 Si ocurrio un error imprevisto al validar los comprobantes asociados que sean de tipo remito (88, 990, 91, 995, 997, 993, 994). Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 371 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y no fue encontrado en los registros de ARCA, o bien fue encontrado, pero la información asociada al mismo no es la esperada. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 372 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero el mismo se encuentra en un estado inválido. Dichos estados varian según el tipo de remito del que se trate. Ver el Anexo de Rubros de Actividades y Remitos Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** numeroDocumento / arrayComprobantesAsociados 373 Si el comprobante asociado es del tipo remito (91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero la cuit del receptor de dicho remito no coincide con la cuit del receptor del comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 375 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y el tipo de comprobante asociado es remito, pero el mismo no es carnico (88, 990, 91, 997, 993, 994), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 376 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” o “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado o Tabaco en Hebras (91, 997, 993, 994, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 377 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado (990, 91, 997, 993, 994, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 378 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco en Hebras (88, 91, 997, 993, 994, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 380 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y el tipo de comprobante asociado es remito, pero el mismo no es Harina (88, 91, 997, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 381 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y no se especifico ningún Remito del tipo Harina (993 y 994), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsociados codigo / arrayActividades 382 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y no se especifico ningún Remito del tipo Carnico (995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoConcepto / arrayComprobantesAsociados 383 Los códigos de concepto permitidos para asociar Remitos Cárnicos (995) al Comprobante son 1 – Productos y 3 – Productos y Servicios Observa codigoTipoComprobante / arrayComprobantesAsociados arrayActividades 384 Si no se especifican actividades, y el Remito a Asociar es un Remito Sectorial (88, 990, 993, 994, 995, 997), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsociados 385 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero se encuentra marcado como de exportación, mientras que el presente servicio solo acepta Remitos para el Mercado. Ver el Anexo de Rubros de Actividades y Remitos Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / arrayComprobantesAsociados 386 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y ya fue declarado una vez en el array de comprobantes asociados. Ver el Anexo de Rubros de Actividades y Remitos Observa CondicionIVAReceptor/ codigoTipoComprobante/ fechaEmision 391 Si se informa una combinación invalida de Condición de IVA del Receptor y Tipo de Comprobante. Ver método consultarCondicionesIVARec eptor Observa codigoTipoDocumento / numeroDocumento 708 Si <codigoTipoDocumento> es igual a 80, 86 o 87, <numeroDocumento> debe ser válido y activo, excepto para <codigoTipoComprobante> 6, 7 u 8, <codigoTipoDocumento> 80 y <numeroDocumento> igual a 23000000000. Observa codigoAutorizacion 717 No debe estar informado como CAEA No utilizado Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** importeGravado 719 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53: 

- Deberá ser igual a la sumatoria de importeItem menos importeIVA para los ítems con <codigoCondicionIVA> igual a 3, 4, 5, 6. Si <codigoTipoComprobante> es igual a 6, 7 u 8: 

- Deberá ser igual a la sumatoria de <importeItem> menos el IVA correspondiente (calculado en base al importe y la alícuota de cada ítem), para la totalidad de los ítems con <codigoCondicionIVA> igual a 3, 4, 5 ó 6. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems gravados *     Observa importeNoGravado 720 Deberá coincidir con la sumatoria de <importeItem> para los ítems con <codigoCondicionIVA> igual a 1. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems no gravados * Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** importeExento 721 Deberá coincidir con la sumatoria de <importeItem> para los ítems con <codigoCondicionIVA> igual a 2. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems exentos * Observa importeSubtotal 722 Deberá coincidir con la sumatoria de los campos <importeNoGravado>, <importeGravado>, <importeExento>. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * Observa importeOtrosTributos 723 Debe ser igual a la sumatoria de la totalidad de los campos <importe><otroTributo> (dentro de <arrayOtrosTributos>). Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de tributos * Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** importeTotal 724 Debe ser igual a <importeSubtotal>+ <importeOtrosTributos> + sumatoria de <subtotalIVA><importe> (dentro del arraySubtotalesIVA). Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * Observa importeTotal 725 Debe ser igual a <importeOtrosTributos> + la sumatoria de la totalidad de los campos <importeItem>. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems * Observa codigoMoneda 710 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarMonedas_ Rechaza cancelaEnMismaMonedaExtra njera 122 En caso de enviar la marca de que el pago del comprobante se realiza en la misma moneda extranjera para comprobantes que no sean facturas. Unicamente se puede utilizar con los códigos habilitados (1,6,51,201,206) Observa cotizacionMoneda 182 No podrá ser inferior al 2% ni superior en un 400 % del que suministra ARCA como orientativo de acuerdo a la cotización oficial Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** cotizacionMoneda 726 Debe ser igual a 1 (uno) si <codigoMoneda> es igual a PES Observa cancelaEnMismaMonedaExtra njera 174 En caso de enviar un valor inválido para la marca de que el pago de la factura se realiza en la misma moneda extranjera. Los valores válidos son S, N o vacío Observa codigoMoneda/ cancelaEnMismaMonedaExtra njera 175 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera y enviar como código de moneda el Peso Argentino Observa codigoMoneda/ cotizacionMoneda/ cancelaEnMismaMonedaExtra njera 181 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera, que codigoMoneda es del grupo de monedas con cotización del Banco de la Nación Argentina (ver Anexo Monedas BNA), que haya cotización y que la misma no coincida exactamente con el valor enviado en el campo cotizacionMoneda. En cuyo caso se podrá omitir el mismo para que la cotización de la factura sea la obtenida de los registros de ARCA Observa cotizacionMoneda 194 El campo es obligatorio a excepción de los casos para los cuales se envia el campo cancelaEnMismaMonedaExtr anjera y se puede obtener la cotizacion asociada al codigoMoneda si esta es del grupo de monedas del Banco de la Nación Argentina (ver Anexo Monedas BNA) Rechaza cotizacionMoneda 195 No es posible indicar una cotización negativa Rechaza 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** fechaServicioDesde 727 Debe informarse solo si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Observa fechaServicioHasta 728 Debe informarse solo si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Observa fechaVencimientoPago 729 Debe informarse solo si <codigoConcepto> es igual a 2 ó 3. En otro caso no corresponde. Observa fechaVencimientoPago / fechaEmision 730 La fecha de vencimiento de pago debe ser mayor o igual a la fecha de emisión. Observa codigoTipoDocumento / numeroDocumento 734 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53 la CUIT del receptor debe 

###### encontrarse activa en IVA o 

###### en monotributo. 

Observa numeroDocumento 735 El Receptor no puede ser igual al Emisor Observa fechaServicioDesde / fechaServicioHasta 737 La Fecha de Servicio desde debe ser menor o igual a la Fecha de Servicio Hasta Observa numeroDocumento 738 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53 y <codigoTipoDocumento> es igual a 80 (CUIT), dicha CUIT deberá encontrarse activa en el Sistema Registral Observa importeOtrosTributos 749 Si <codigoTipoComprobante> es igual a 6, 7 u 8, <codigoTipoDocumento> es 80 (CUIT) y <numeroDocumento> es 23000000000 (No Categorizado), el importeOtrosTributos deberá ser mayor a 0 (cero) Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** cuitRepresentada / fechaEmision 750 Debe estar dado de alta en el Impuesto al Valor Agregado al momento de la fecha de emisión del comprobante Observa cuitRepresentada / codigoTipoComprobante / fechaEmision 751 Debe encontrarse habilitado a comprobantes clase 'A' a la fecha de emisión del comprobante Observa numeroPuntoVenta / fechaHoraGen 755 La fecha/hora de generación solo debe informarse para comprobantes CAEA por contingencia (se informó el campo fecha/hora generación pero el punto de venta no es del tipo CAEA por Contingencia). Se informa que esta validación quedará fuera de vigencia a partir del 31/07/2026, siendo absorbida por las condiciones de la validación **_754_**. Observa numeroPuntoVenta / fechaHoraGen / fechaEmision / codigoConcepto 756 Para comprobantes CAEA: si se indica <codigoConcepto> igual a 1, la fecha de emisión del comprobante puede ser hasta 5 días anteriores o posteriores respecto de la fecha de generación, pero sin extenderse al mes siguiente; si se indica <codigoConcepto> igual a 2 ó 3 puede ser hasta 10 días anteriores o posteriores a la fecha de generación Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** cuitRepresentada / codigoTipoDocumento / numeroDocumento / importeTotal 767  Si <codigoTipoComprobante> es igual a 1 ó 6, y  La CUIT Receptora está incluida en el listado de empresas grandes según cronograma vigente u optó por ser receptora de Factura de Crédito MiPyme, y  Por las condiciones de la CUIT Emisora, y  El monto facturado es mayor o igual al Reglamentado Corresponde realizar Factura Electrónica de Crédito MiPyME, realice un comprobante con <codigoTipoComprobante> 201 o 206. Observa cuitRepresentada / codigoTipoDocumento / numeroDocumento / importeTotal 768  Si <codigoTipoComprobante> es igual a 201 ó 206, y  La CUIT Receptora está incluida en el listado de empresas grandes según cronograma vigente u optó por ser receptora de Factura de Crédito MiPyme, y  Por las condiciones de la CUIT Emisora, y  El monto facturado es menor al Reglamentado NO Corresponde realizar Factura Electrónica de Crédito MiPyME, realice un comprobante con <codigoTipoComprobante> 1 o 6. Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** cuitRepresentada 772 Por las condiciones de la CUIT Emisora, no corresponde realizar FCE Está habilitado para Comprobantes A con leyenda OPERACIÓN SUJETA A RETENCIÓN EXCLUIDO – Art. N° 4 Resolución 209/2018 RESOL-2018209-APN-MPYT Observa fechaHoraGen 773 La Fecha y Hora de Generación no puede ser posterior a un día corrido del vencimiento del CAEA Observa fechaEmision 775 Régimen informado fuera de término. Si <codigoTipoComprobante> es igual a 201, 202, 203, 206, 207 ó 208, La Fecha de Emisión del comprobante debe ser hasta un día anterior a la fecha en que se envía la solicitud Observa codigoTipoDocumento / numeroDocumento / fechaEmision 781 LA CUIT RECEPTORA SE ENCUENTRA INACTIVA POR HABER SIDO INLCUÍDA EN LA CONSULTA DE FACTURAS APÓCRIFAS NO PODRÁ COMPUTARSE EL CRÉDITO FISCAL. Observa codigoTipoDocumento / numeroDocumento 782 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 la CUIT del receptor es activa en monotributo Observa cuitRepresentada 783 Si <cuitRepresentada> tiene pendiente de presentación el formulario de habilitación de comprobantes o su fecha de presentación es anterior a tu alta en IVA Observa numeroDocumento 785 Si <numeroDocumento> es inexistente en el padron del Organismo Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante/ arrayComprobantesAsociados /importeTotal 791 Siendo <codigoTipoComprobante> una Nota de Crédito (3, 8, 53, 203 y 208), si la sumatoria de los importes totales de los elementos del array <arrayComprobantesAsociad os> (sin incluir Remitos) supera el <importeTotal> de la Nota de Crédito Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **<comprobanteAsociado>…</comprobanteAsociado>** 

###### Validaciones Excluyentes 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Observ. Validación NO es superada** codigoTipoComprobante 803 El comprobante asociado podrá ser: 1 – Factura A 2 – Nota de Débito A 3 – Nota de Crédito A 6 – Factura B 7 – Nota de Débito B 

###### 8 – Nota de Crédito B 

 51 – Factura A con leyenda OPERACIÓN SUJETA A RETENCIÓN 52 – Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 – Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 201 Factura de Crédito Electrónica MiPyMEs (FCE) A 202 Nota de Débito Electrónica MiPyMEs (FCE) A 203 Nota de Crédito Electrónica MiPyMEs (FCE) A 206Factura de Crédito Electrónica MiPyMEs (FCE) B 207 Nota de Débito Electrónica MiPyMEs (FCE) B 

###### 208 Nota de Crédito Electrónica 

###### MiPyMEs (FCE) B 

###### 91 – Remito Papel 

###### 88 – Remito Electrónico de Tabaco 

###### Acondicionado 

###### 990 – Remito Electrónico de Tabaco en 

###### Hebras 

###### 993 – Remito Electrónico de Harina en 

###### Camion 

###### 994 – Remito Electrónico de Harina en 

###### Tren 

 Rechaza 

 Informar un Comprobante CAEA (informarComprobanteCAEA) Campo Código de Observ. Validación NO es superada 

###### 995 – Remito Electrónico de Carne 

###### 997 – Remito Electrónico Azucar 

###### Mercado Interno 

###### Consultar método 

###### consultarTiposComprobante 

codigoTipoComprobante / cuit 804 

###### El campo cuit es opcional y solo puede 

###### completarse si el tipo de comprobante 

###### es 88 o 990 (solo es necesario si el 

###### remito fue emitido por un tercero) 

Rechaza codigoTipoComprobante 808 

###### Deberá ser igual a 88, 91, 990 o 995 si 

###### el tipo de comprobante cuya 

###### autorización se solicita es igual a 201 o 

###### 206 

Rechaza cuit 809 

###### Al autorizar una nota de débito o 

###### crédito de Factura Electrónica de 

###### Crédito MiPyME (202, 203, 207, 208), 

###### debe enviar el campo cuit para el tipo 

###### de comprobante asociado indicado 

Rechaza cuit 810 

###### Al autorizar una nota de débito o 

###### crédito de Factura Electrónica de 

###### Crédito MiPyME (202, 203, 207, 208), el 

###### campo cuit para el tipo de 

###### comprobante asociado indicado debe 

###### coincidir con la cuit emisora del 

###### comprobante a autorizar 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante 811 

###### Al autorizar una nota de débito o 

###### crédito de Factura Electrónica de 

###### Crédito MiPyME (202, 203, 207, 208), el 

###### comprobante asociado 

###### <codigoTipoComprobante> 

###### <numeroPuntoVenta> 

###### <numeroComprobante> deberá obrar 

###### en las bases del organismo. 

 Rechaza 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Observ. Validación NO es superada** arrayComprobantesAso ciados 812 

###### Al autorizar una nota de débito o 

###### crédito de Factura Electrónica de 

###### Crédito MiPyME (202, 203, 207, 208), 

###### debe haber un y sólo un comprobante 

###### asociado de Factura Electrónica de 

###### Crédito MiPyME: 

######  201 o 206, para NO anulación 

######  201, 202, 203, 206, 207 o 208, 

###### para Anulación 

Rechaza codigoTipoComprobante 814 

###### Si está presente el dato adicional 

###### código 22 en S (es una nota de 

###### anulación): 

######  Si el tipo de comprobante a 

###### autorizar es una nota de 

###### crédito (203 o 208) el tipo de 

###### comprobante asociado a 

###### revertir debe ser 201, 202, 206 

###### ó 207 

###### Si el tipo de comprobante a autorizar es 

###### una nota de débito (202 o 207) el tipo 

###### de comprobante asociado a revertir 

###### debe ser 203 ó 208 

Rechaza codigoTipoComprobante 815 

###### Si está presente el dato adicional 

###### código 22 en N (NO es una nota de 

###### anulación), debe existir un 

###### comprobante asociado del tipo 201 o 

###### 206. 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 816 

###### Si el comprobante a autorizar es de 

###### Anulación, el comprobante asociado 

###### debe haber sido rechazado por el 

###### comprador mediante el Sistema de 

###### Regitro de Facturas Electrónicas de 

###### Crédito MiPyME. 

 Rechaza 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Observ. Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 817 

###### Si el comprobante a autorizar NO es de 

###### Anulación, el comprobante asociado 

###### NO debe haber sido rechazado por el 

###### comprador mediante el Sistema de 

###### Regitro de Facturas Electrónicas de 

###### Crédito MiPyME. 

Rechaza fechaEmision 818 

###### Al autorizar un comprobante de 

###### Factura Electrónica de Crédito MiPyME 

###### (201, 202, 203, 206, 207, 208), debe 

###### enviar el campo fechaEmision para el 

###### comprobante asociado del tipo Remito 

Rechaza fechaEmision 819 

###### La fecha de emisión del comprobante 

###### asociado no puede ser posterior a la 

###### fecha del comprobante a autorizar 

Rechaza fechaEmision 820 

###### La fecha de emisión del comprobante 

###### asociado informada no coincide con la 

###### existente en nuestros registros 

Rechaza fechaEmision 821 

###### La fecha de emisión de este 

###### comprobante no puede ser anterior a 

###### la factura asociada 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 822 

###### El comprobante asociado no posee cuit 

###### del receptor 

Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 823 

###### El comprobante asociado posee otro 

###### cuit de receptor 

Rechaza fechaEmision 824 

###### Si el punto de venta del comprobante 

###### asociado NO es del tipo electrónico 

###### debe informar la fecha de emisión 

Rechaza fechaEmision 825 

###### Si el punto de venta del comprobante 

###### asociado NO es del tipo electrónico la 

###### fecha de emisión no puede ser 

###### posterior a la fecha de la autorización 

 Rechaza 

###### Validaciones NO Excluyentes 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Observ. Validación NO es superada** codigoTipoComprobante 800 

###### Deberá ser igual a 88 o 990 si el tipo de 

###### comprobante cuya autorización se 

###### solicita es igual a 1, 6 o 51 

###### Deberá ser igual a 1, 2, 3, 88 o 990 si el 

###### tipo de comprobante cuya autorización 

###### se solicita es igual a 2 o 3. 

###### Deberá ser igual a 6, 7, 8, 88 o 990 si el 

###### tipo de comprobante cuya autorización 

###### se solicita es igual a 7 u 8. 

###### Deberá ser igual a 51, 52, 53, 88 o 990 

###### si el tipo de comprobante cuya 

###### autorización se solicita es igual a 52 o 

###### 53. 

###### Deberá ser igual a 201, 202, 203, 88, 

###### 91, 990 o 995 si el tipo de comprobante 

###### cuya autorización se solicita es igual a 

###### 202 o 203. 

###### Deberá ser igual a 206, 207, 208, 88, 

###### 91, 990 o 995 si el tipo de comprobante 

###### cuya autorización se solicita es igual a 

###### 207 u 208. 

Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante 801 Si el punto de venta es del tipo electrónico el comprobante asociado <codigoTipoComprobante> <numeroPuntoVenta> <numeroComprobante> deberá obrar en las bases del organismo. Observa numeroPuntoVenta 802 

###### El tipo de punto de venta, en caso de 

###### ser electrónico, deberá ser alguno de 

###### los siguientes: RECE para aplicativo y 

###### web services, Factura en Línea 

###### Responsable Inscripto, Factura en Línea 

- Método Alternativo al RECE (límite de 

###### 100), Codificación de Productos Web 

###### services, Codificación de Productos 

###### Factura en Línea, CAEA Fact. Elect. 

###### (RECE) RI IVA o CAEA Codificación de 

###### Productos. 

 Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Observ. Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 805 

###### El remito asociado deberá obrar en las 

###### bases del organismo. 

Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 806 

###### Si remito asociado corresponde a 

###### tabaco de terceros, deberá estar en 

###### estado Confirmado 

Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 807 

###### El receptor del remito asociado deberá 

###### conicidir con el receptor del 

###### comprobante 

Observa arrayComprobantesAso ciados 813 

###### Para CUITS Emisoras y Receptoras 

###### candidatas al Régimen de Factura 

###### Electrónica de Crédito, al autorizar una 

###### nota de débito o crédito de Factura 

###### Electrónica (2, 3, 7, 8, 52, 53), debe 

###### haber al menos un comprobante 

###### asociado de Factura Electrónica (1, 2, 3, 

###### 6, 7, 8, 51, 52 o 53) 

 Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **<periodoComprobantesAsociados>…</ periodoComprobantesAsociados>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** fechaDesde / fechaHasta 2800 

###### La fechaHasta debe ser posterior o 

###### igual fechaDesde 

Rechaza fechaHasta / fechaEmision 2801 

###### La fechaHasta del 

###### periodoComprobantesAsociados 

###### debe ser anterior o igual a la fecha 

###### de emisión del comprobante por el 

###### cual se está solicitando la 

###### autorización 

 Rechaza 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada** fechaDesde / fechaHasta 2802 Si el comprobante a autorizar incluye percepciones, el rango de fecha informado debe corresponder al mismo Mes/Año Observa **<otroTributo>...</otroTributo>** de existir se realizaran las siguientes validaciones 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigo 900 Valores permitidos: consultar método _consultarTiposTributo_ Rechaza descripcion 901 Opcional. Debe informarse si <codigo> es igual a 99. Rechaza 

Informar un Comprobante CAEA (informarComprobanteCAEA) **<subtotalIVA>...</subtotalIVA>** de existir se realizaran las siguientes validaciones 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigo 1000 Valores permitidos: 4, 5, 6 Rechaza codigo 1002 No se deberá repetir (no pueden incluírse dos subtotales IVA con el mismo código) Rechaza codigo 1003 Si existen uno o más ítems con una determinada alícuota IVA, deberá existir el correspondiente subtotal IVA para dicha alícuota. No se sebe incluír un subtotal IVA si dicha alícuota no está presente en al menos un ítem. Rechaza 

 Informar un Comprobante CAEA (informarComprobanteCAEA) 

###### Validaciones No Excluyentes 

**Campo Código de Error Validación NO es superada** importe 1001 Para comprobantes clase “A”: Deberá coincidir con la sumatoria de todos los <importeIVA> de <item> donde la alícuota de IVA coincida con la indicada, es decir, donde <codigoCondicionIVA> de <item> = <codigo> de <subtotalIVA>. Para comprobantes clase “B”: Deberá coincidir con la sumatoria de todos los importes IVA calculados en base al importe y alícuota IVA de <item> donde la alícuota de IVA coincida con la indicada, es decir, donde <codigoCondicionIVA> de <item> = <codigo> de <subtotalIVA>. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de ítems con igual código de alícuota de IVA * Observa importe 1005 La suma de los subtotales de IVA no puede ser negativa. Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **<item>...</item>** 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada** codigoMtx 1104 Si <codigoMtx> no se corresponde con un GTIN registrado, activo y vigente, el comprobante quedara observado. Observa 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** unidadesMtx 1100 Es opcional si <codigoUnidadMedida> es 99 ó 97, para el resto de los casos es obligatorio. Rechaza unidadesMtx 1101 De informarse deberá ser mayor o igual a 1 (uno) Rechaza unidadesMtx 1102 Longitud máxima 6 posiciones. Rechaza codigoMtx 1103 Es opcional si <codigoUnidadMedida> es 99 ó 97, para el resto de los casos es obligatorio. Rechaza codigo 1105 Opcional. Longitud máxima 50 posiciones. Rechaza descripcion 1106 Cantidad máxima de caracteres permitidos 

4000. Importante: no es necesario (ni recomendable) completar con espacios.     Rechaza cantidad 1107 No corresponde para <codigoUnidadMedida> igual a 99 o 97. En otro caso es obligatorio. Rechaza codigoUnidad Medida 1108 Debe ser alguno de los valores permitidos: consultar método _consultarUnidadesMedida_ Rechaza precioUnitario 1109 No corresponde para <codigoUnidadMedida> igual a 99 o 97. En otro caso es obligatorio. Rechaza 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Error Validación NO es superada** importeBonific acion 1110 No corresponde para <codigoUnidadMedida> igual a 99 o 97. Es opcional para el resto de los casos. Rechaza codigoCondicio nIVA 1111 Deberá coincidir con alguno de los valores permitidos: consultar método _consultarCondicionesIVA_ Rechaza importeIVA 1112 Obligatorio para <codigoTipoComprobante> igual a 1, 2, 3, 51, 52 o 53. No corresponde para <codigoTipoComprobante> igual a 6, 7 u 8. Rechaza unidadesMtx/ codigoMtx 1121 Si se informa el campo <unidadesMtx> entonces debe informarse el campo <codigoMtx> y viceversa. Rechaza 

###### Validaciones No Excluyentes 

**Campo Código de Error Validación NO es superada** importeBonific acion 1114 De informarse deberá ser menor o igual a <precioUnitario>*<cantidad> Observa codigoCondicio nIVA / <codigoUnidad Medida> 1115 Si <codigoUnidadMedida> es 99 deberá existir por lo menos otro item con igual <codigoCondicionIVA> y <codigoUnidadMedida> distinta a la informada para este item. Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Error Validación NO es superada** importeIVA 1116 Para <codigoTipoComprobante> igual a 1, 2, 3, 51, 52 o 53 y unidad de medida es distinto a 95, 97 o 99 deberá ser igual (<precioUnitario> * <cantidad> -<importeBonificación>) * alícuota de IVA correspondiente. Para <codigoTipoComprobante> igual a 1, 2, 3, 51, 52 o 53 y unidad de medida igual a 95 deberá ser igual a (-1) * (<precioUnitario> * <cantidad> <importeBonificacion>) * alícuota de IVA correspondiente. Para <codigoTipoComprobante> igual a 1, 2, 3, 51, 52 o 53 y unidad de medida igual a 97 o 99, deberá ser igual a <importeItem> <importeItem> / (1 + alícuota de IVA correspondiente). Observa importeIVA 1117 Si <codigoTipoComprobante> es igual a 1, 2 ó 3 y <codigoUnidadMedida> es 99, el valor absoluto de la sumatoria de los importes ingresados para este campo no puede superar a la sumatoria de los importes <importeIVA> informado con la misma alícuota. Observa importeIVA 1118 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53 y <codigoUnidadMedida> es: 

- 99 deberá ser menor o igual a 0 (cero), 

- 97 podrá ser menor, mayor o igual a 0 (cero). 

- 95 deberá ser menor o igual a 0 (cero), 

- Cualquier otro caso deberá ser mayor o igual a 0 (cero)     Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Error Validación NO es superada** importeItem 1119 Si <codigoUnidadMedida> es: 

- 99 deberá ser menor a 0 (cero), 

- 97 podrá ser menor, mayor o igual a 0 (cero) 

- 95 deberá ser menor a 0 (cero), 

- Cualquier otro caso deberá ser mayor o igual a 0 (cero).     Observa importeItem 1120 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53 y <codigoUnidadMedida> es distinto a 95, 97 ó 99 deberá ser igual a (<precioUnitario> sin IVA *<cantidad> -<importeBonificacion>)*(1+alícuota). Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53 y <codigoUnidadMedida> es igual a 95 deberá ser igual a (-1) * (<precioUnitario> sin IVA * <cantidad> -<importeBonificacion>)*(1+alícuota). Si <codigoTipoComprobante> es igual a 6, 7 u 8 y <codigoUnidadMedida> es distinto a 95, 97 ó 99 deberá ser igual a (<precioUnitario> con IVA * <cantidad> - <importeBonificacion>). Si <codigoTipoComprobante> es igual a 6, 7 u 8 y <codigoUnidadMedida> es igual a 95 ser igual a (-1) * (<precioUnitario> con IVA * <cantidad> - <importeBonificacion>). En ambos casos el error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * Observa importeIVA 1122 Si <codigoCondicionIVA> es igual a 1, 2, 3, 51, 52 o 53 entonces <importeIVA> deberá ser igual a 0 (cero). Observa 

Informar un Comprobante CAEA (informarComprobanteCAEA) **<datoAdicional>...</datoAdicional>** 

###### Los datos adicionales sólo deberán ser incluídos si el emisor pertenece al conjunto de emisores 

###### habilitado para usar datos adicionales (“Adicionales por R.G.”). En ese caso podrá incluír el o los datos 

###### adicionales que correspondan, especificando el tipo de dato adicional de acuerdo a la situación del 

###### emisor. El listado de tipos de datos adicionales se puede consultar con el método 

###### consultarTiposDatosAdicionales. 

###### Por ejemplo, si el emisor está incluído en el Régimen de Promoción Industrial, deberá incluír un dato 

###### adicional tipo 2. 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** t 920 Valores permitidos: consultar método _consultarTiposDatosAdicionales_ Rechaza t / c1…c6 922 Si <codigoTipoComprobante> es igual a 1, 2, 3, 6, 7, 8, 51, 52 o 53, sólo se puede incluír un dato adicional con t = 2 (sólo se permite un id de proyecto por comprobante) Rechaza t / c1…c6 925 Para el tipo de dato adicional 22, Anulación, debe indicar en el campo c1 S (si) si es de anulación o N (no) si no es de anulación Rechaza t / c1…c6 926 Para el tipo de dato adicional 21, CBU y Alias del Emisor, el CBU informado en el campo c1 no corresponde al Emisor según nuestros registros Rechaza t / c1…c6 927 Si el tipo de Comprobante a autorizar es 202, 203, 207 o 208, debe indicar el dato adicional código 22, Anulación, para indicar si este es un comprobante de anulación o no Rechaza t / c1…c6 928 Si el tipo de Comprobante a autorizar es 201 o 206, NO debe indicar el dato adicional código 22, Anulación. No corresponde a un comprobante Factura. Rechaza t / c1…c6 929 Si el tipo de Comprobante a autorizar es 201 o 206, debe indicar el dato adicional código 21, CBU y Alias emisor. Rechaza 

Informar un Comprobante CAEA (informarComprobanteCAEA) **Campo Código de Error Validación NO es superada** t / c1…c6 930 Si el tipo de Comprobante a autorizar es 202, 203, 207 o 208, NO debe indicar el dato adicional código 21, CBU y Alias emisor. Rechaza t / c1…c6 931 Para el tipo de dato adicional 21, 22 y 23, debe indicar el campo c1 Rechaza t / c1…c6 932 Para el tipo de dato adicional 27, Opción de Transferencia, las opciones válidas son ADC para Agente de Depósito Colectivo o SCA para Sistema de Circulación Abierta Rechaza t / c1…c6 933 Si el tipo de Comprobante a autorizar es 201 o 206, debe indicar el dato adicional código 27, Opción de Transferencia. Rechaza t / c1…c6 934 Si el tipo de Comprobante a autorizar es 202, 203, 207 o 208, NO debe indicar el dato adicional código 27, Opción de Transferencia. Rechaza t / c1…c6 935 Si el tipo de Comprobante a autorizar NO es 1, 2, 3, 201, 202, 203, NO debe indicar el dato adicional código 5, Cómputo IVA Crédito Fiscal. Rechaza t / c1…c6 936 Si el tipo de Comprobante a autorizar es 1, 2, 3, 201, 202, 203, y se indica el dato adicional código 5, se debera indicar el campo c1 (Motivo de Excepcion) de forma obligatoria. Rechaza t / c1…c6 937 Si el tipo de Comprobante a autorizar es 1, 2, 3, 201, 202, 203, y se indica el dato adicional código 5, y el campo el campo c1 (Motivo de Excepcion) NO es un numérico del 1 al 6. Rechaza t / c1…c6 938 Si el tipo de Comprobante a autorizar es 1, 2, 3, 201, 202, 203, y se indica el dato adicional código 5, y no se deberán utilizar ninguno de los restantes campos reservados a futuro campos de c2 a c6. Rechaza 

 Informar un Comprobante CAEA (informarComprobanteCAEA) 

###### Validaciones No Excluyentes 

**Campo Código de Error Validación NO es superada** t / c1…c6 921 Si t es igual a 2 (“Dato Adicional para Empresas Promovidas”), en c1 se deberá indicar el id de proyecto (el mismo deberá corresponder a la cuit emisora del comprobante) o cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen de Promoción Industrial. Los campos c2 a c6 no deberán informarse (reservados para uso futuro) Observa t 923 Los tipos de dato adicional 21, 22 o 23 sólo corresponden a comprobantes de Factura Electrónica de Crédito MiPyME Observa t / c1…c6 924 Para el tipo de dato adicional 21, los campos c3 a c6 no deberán informarse (reservados para uso futuro) Para los tipos de dato adicional 22 o 23, los campos c2 a c6 no deberán informarse (reservados para uso futuro) Observa 

#### Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) 

Este método permite informar para cada CAEA otorgado, los comprobantes de ajuste de IVA emitidos. Por cada comprobante de ajuste se enviará una solicitud, la cual será procesada por el WS pudiendo producirse alguna de las siguientes situaciones:  Supere todas las validaciones, la solicitud es aprobada.  No supere alguna de las validaciones excluyentes, la solicitud será rechazada.  No supere alguna de las validaciones no excluyentes, la solicitud es aprobada con observaciones. 

##### Mensaje de Solicitud 

**Esquema** 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarAjusteIVACAEARequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      <comprobanteCAEARequest>
        Informar un Ajuste IVA CAEA (informarAjusteIVACAEA)
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
        <codigoTipoAutorizacion>
          CodigoTipoAutorizacionSimpleType
        </codigoTipoAutorizacion>
        <codigoAutorizacion>
          long
        </codigoAutorizacion>
        <fechaVencimiento>
          date
        </fechaVencimiento>
        <codigoTipoDocumento>
          short
        </codigoTipoDocumento>
        <numeroDocumento>
          long
        </numeroDocumento>
        <condicionIVAReceptor>
          short
        </condicionIVAReceptor>
        <importeGravado>
          ImporteTotalSimpleType
        </importeGravado>
        <importeNoGravado>
          ImporteTotalSimpleType
        </importeNoGravado>
        <importeExento>
          ImporteTotalSimpleType
        </importeExento>
        <importeSubtotal>
          ImporteTotalSimpleType
        </importeSubtotal>
        <importeOtrosTributos>
          ImporteTotalSimpleType
        </importeOtrosTributos>
        <importeTotal>
          ImporteTotalSimpleType
        </importeTotal>
        <codigoMoneda>
          string
        </codigoMoneda>
        <cotizacionMoneda>
          decimal
        </cotizacionMoneda>
        <observaciones>
          string
        </observaciones>
        <codigoConcepto>
          short
        </codigoConcepto>
        <fechaServicioDesde>
          date
        </fechaServicioDesde>
        <fechaServicioHasta>
          date
        </fechaServicioHasta>
        <fechaVencimientoPago>
          date
        </fechaVencimientoPago>
        <fechaHoraGen>
          dateTime
        </fechaHoraGen>
        <arrayComprobantesAsociados>
          <comprobanteAsociado>
            <codigoTipoComprobante>
              short
            </codigoTipoComprobante>
            <numeroPuntoVenta>
              NumeroPuntoVentaSimpleType
            </numeroPuntoVenta>
            Informar un Ajuste IVA CAEA (informarAjusteIVACAEA)
            <numeroComprobante>
              NumeroComprobanteSimpleType
            </numeroComprobante>
            <cuit>
              long
            </cuit>
            <fechaEmision>
              date
            </fechaEmision>
          </comprobanteAsociado>
        </arrayComprobantesAsociados>
        <periodoComprobantesAsociados>
          <fechaDesde>
            date
          </fechaDesde>
          <fechaHasta>
            date
          </fechaHasta>
        </periodoComprobantesAsociados>
        <arrayOtrosTributos>
          <otroTributo>
            <codigo>
              short
            </codigo>
            <descripcion>
              string
            </descripcion>
            <baseImponible>
              ImporteTotalSimpleType
            </baseImponible>
            <importe>
              ImporteTotalSimpleType
            </importe>
          </otroTributo>
        </arrayOtrosTributos>
        <arrayItems>
          <item>
            <unidadesMtx>
              int
            </unidadesMtx>
            <codigoMtx>
              string
            </codigoMtx>
            <codigo>
              string
            </codigo>
            <descripcion>
              string
            </descripcion>
            <cantidad>
              DecimalSimpleType
            </cantidad>
            <codigoUnidadMedida>
              short
            </codigoUnidadMedida>
            <precioUnitario>
              DecimalSimpleType
            </precioUnitario>
            <importeBonificacion>
              DecimalSimpleType
            </importeBonificacion>
            <codigoCondicionIVA>
              short
            </codigoCondicionIVA>
            <importeIVA>
              ImporteSubtotalSimpleType
            </importeIVA>
            <importeItem>
              ImporteSubtotalSimpleType
            </importeItem>
            Informar un Ajuste IVA CAEA (informarAjusteIVACAEA)
          </item>
        </arrayItems>
        <arraySubtotalesIVA>
          <subtotalIVA>
            <codigo>
              short
            </codigo>
            <importe>
              ImporteTotalSimpleType
            </importe>
          </subtotalIVA>
        </arraySubtotalesIVA>
        <arrayDatosAdicionales>
          <datoAdicional>
            <t>
              short
            </t>
            <c1>
              string
            </c1>
            <c2>
              string
            </c2>
            <c3>
              string
            </c3>
            <c4>
              string
            </c4>
            <c5>
              string
            </c5>
            <c6>
              string
            </c6>
          </datoAdicional>
        </arrayDatosAdicionales>
        <arrayActividades>
          <actividad>
            <codigo>
              long
            </codigo>
          </actividad>
        </arrayActividades>
      </comprobanteCAEARequest>
    </ser:informarAjusteIVACAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **<comprobanteCAEARequest>** contiene los datos del comprobante. Es del tipo **ComprobanteType. IMPORTANTE: para mas detalles sobre éste y otros tipos de datos consultar la Sección 3: “Definición de Tipos de Datos”** 

##### Mensaje de Respuesta 

**Esquema:** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    Informar un Ajuste IVA CAEA (informarAjusteIVACAEA)
    <ser:informarAjusteIVACAEAResponse>
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
    </ser:informarAjusteIVACAEAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) Donde: **<informarAjusteIVACAEAResponse>** contiene el resultado del proceso informar un ajuste IVA CAEA. **Campo Descripción Oblig Tipo Long** resultado A: Aprobado, O: Observado, R: Rechazado S ResultadoSimpleType 1 fechaProceso Especifica la fecha de proceso de la solicitud S date -comprobanteCAEAR esponse Existe si el resultado es Aprobado. Contiene los datos que identifican al comprobante y los referentes a la autorización. N ComprobanteCAEAResp onseType -arrayObservaciones Indica los motivos por los cuales el comprobante fue aceptado con observaciones, en caso de corresponder. N ArrayCodigosDescripcio nesType -arrayErrores Si la solicitud fue rechazada, detalla el o los motivos que dieron origen al rechazo. N ArrayCodigosDescripcio nesType -evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType -

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **<comprobanteCAEAResponse>** es del tipo **ComprobanteCAEAResponseType <comprobanteCAEAResponse> Campo Descripción Oblig Tipo Long** CAEA CAEA asignado al comprobante autorizado. S long 14 codigoTipoComproba nte Tipo de Comprobante S short 3 numeroPuntoVenta Número del punto de venta del comprobante informado S NumeroPuntoVentaSimp leType 5 numeroComprobante Número del comprobante informado S NumerocomprobanteSi mpleType 8 

##### Ejemplo para “Informar Ajuste IVA CAEA” 

Ejemplo Nota Débito A 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarAjusteIVACAEARequest>
      <authRequest>
        <token>
          un string
        </token>
        <sign>
          un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <comprobanteCAEARequest>
        <codigoTipoComprobante>
          2
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          1100
        </numeroPuntoVenta>
        <numeroComprobante>
          25
        </numeroComprobante>
        Informar un Ajuste IVA CAEA (informarAjusteIVACAEA)
        <fechaEmision>
          2011-01-31
        </fechaEmision>
        <codigoTipoAutorizacion>
          A
        </codigoTipoAutorizacion>
        <codigoAutorizacion>
          21024364479618
        </codigoAutorizacion>
        <codigoTipoDocumento>
          80
        </codigoTipoDocumento>
        <numeroDocumento>
          30000000007
        </numeroDocumento>
        <condicionIVAReceptor>
          1
        </condicionIVAReceptor>
        <importeSubtotal>
          0
        </importeSubtotal>
        <importeTotal>
          200
        </importeTotal>
        <codigoMoneda>
          DOL
        </codigoMoneda>
        <cotizacionMoneda>
          4
        </cotizacionMoneda>
        <codigoConcepto>
          1
        </codigoConcepto>
        <arrayComprobantesAsociados>
          <comprobanteAsociado>
            <codigoTipoComprobante>
              1
            </codigoTipoComprobante>
            <numeroPuntoVenta>
              1
            </numeroPuntoVenta>
            <numeroComprobante>
              1
            </numeroComprobante>
          </comprobanteAsociado>
        </arrayComprobantesAsociados>
        <arrayItems>
          <item>
            <unidadesMtx>
              1
            </unidadesMtx>
            <codigoMtx>
              7790001001139
            </codigoMtx>
            <codigo>
            </codigo>
            <descripcion>
              Nota de Débito Ajuste de IVA
            </descripcion>
            <codigoUnidadMedida>
              7
            </codigoUnidadMedida>
            <codigoCondicionIVA>
              5
            </codigoCondicionIVA>
            <importeIVA>
              100
            </importeIVA>
            <importeItem>
              100
            </importeItem>
          </item>
          <item>
            <unidadesMtx>
              1
            </unidadesMtx>
            <codigoMtx>
              7790001001139
            </codigoMtx>
            <codigo>
            </codigo>
            Informar un Ajuste IVA CAEA (informarAjusteIVACAEA)
            <descripcion>
              Nota de Débito Ajuste de IVA
            </descripcion>
            <codigoUnidadMedida>
              7
            </codigoUnidadMedida>
            <codigoCondicionIVA>
              6
            </codigoCondicionIVA>
            <importeIVA>
              100
            </importeIVA>
            <importeItem>
              100
            </importeItem>
          </item>
        </arrayItems>
        <arraySubtotalesIVA>
          <subtotalIVA>
            <codigo>
              5
            </codigo>
            <importe>
              100
            </importe>
          </subtotalIVA>
          <subtotalIVA>
            <codigo>
              6
            </codigo>
            <importe>
              100
            </importe>
          </subtotalIVA>
        </arraySubtotalesIVA>
        <arrayActividades>
          <actividad>
            <codigo>
              120010
            </codigo>
          </actividad>
          <actividad>
            <codigo>
              463300
            </codigo>
          </actividad>
        </arrayActividades>
      </comprobanteCAEARequest>
    </ser:informarAjusteIVACAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  Informar un Ajuste IVA CAEA (informarAjusteIVACAEA)
  <soapenv:Body>
    <ns1:informarAjusteIVACAEAResponse xmlns:ns1="http://impl.service.wsmtxca.afip.gob.ar/service/">
      <resultado>
        A
      </resultado>
      <fechaProceso>
        2011-02-26-02:00
      </fechaProceso>
      <comprobanteCAEAResponse>
        <CAEA>
          21024364479618
        </CAEA>
        <codigoTipoComprobante>
          2
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          1100
        </numeroPuntoVenta>
        <numeroComprobante>
          25
        </numeroComprobante>
      </comprobanteCAEAResponse>
    </ns1:informarAjusteIVACAEAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Ejemplo Nota de Débito B 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarAjusteIVACAEARequest>
      <authRequest>
        <token>
          un string
        </token>
        <sign>
          un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <comprobanteCAEARequest>
        <codigoTipoComprobante>
          7
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          1100
        </numeroPuntoVenta>
        <numeroComprobante>
          6
        </numeroComprobante>
        <fechaEmision>
          2011-01-31
        </fechaEmision>
        <codigoTipoAutorizacion>
          A
        </codigoTipoAutorizacion>
        <codigoAutorizacion>
          21024364479618
        </codigoAutorizacion>
        Informar un Ajuste IVA CAEA (informarAjusteIVACAEA)
        <codigoTipoDocumento>
          80
        </codigoTipoDocumento>
        <numeroDocumento>
          30000000007
        </numeroDocumento>
        <condicionIVAReceptor>
          5
        </condicionIVAReceptor>
        <importeSubtotal>
          0
        </importeSubtotal>
        <importeTotal>
          200
        </importeTotal>
        <codigoMoneda>
          DOL
        </codigoMoneda>
        <cotizacionMoneda>
          4
        </cotizacionMoneda>
        <codigoConcepto>
          1
        </codigoConcepto>
        <arrayComprobantesAsociados>
          <comprobanteAsociado>
            <codigoTipoComprobante>
              6
            </codigoTipoComprobante>
            <numeroPuntoVenta>
              1
            </numeroPuntoVenta>
            <numeroComprobante>
              1
            </numeroComprobante>
          </comprobanteAsociado>
        </arrayComprobantesAsociados>
        <arrayItems>
          <item>
            <unidadesMtx>
              1
            </unidadesMtx>
            <codigoMtx>
              7790001001139
            </codigoMtx>
            <codigo>
            </codigo>
            <descripcion>
              Nota de Débito Ajuste de IVA
            </descripcion>
            <codigoUnidadMedida>
              7
            </codigoUnidadMedida>
            <codigoCondicionIVA>
              5
            </codigoCondicionIVA>
            <importeItem>
              100
            </importeItem>
          </item>
          <item>
            <unidadesMtx>
              1
            </unidadesMtx>
            <codigoMtx>
              7790001001139
            </codigoMtx>
            <codigo>
            </codigo>
            <descripcion>
              Nota de Débito Ajuste de IVA
            </descripcion>
            <codigoUnidadMedida>
              7
            </codigoUnidadMedida>
            <codigoCondicionIVA>
              6
            </codigoCondicionIVA>
            <importeItem>
              100
            </importeItem>
            Informar un Ajuste IVA CAEA (informarAjusteIVACAEA)
          </item>
        </arrayItems>
        <arraySubtotalesIVA>
          <subtotalIVA>
            <codigo>
              5
            </codigo>
            <importe>
              100
            </importe>
          </subtotalIVA>
          <subtotalIVA>
            <codigo>
              6
            </codigo>
            <importe>
              100
            </importe>
          </subtotalIVA>
        </arraySubtotalesIVA>
        <arrayActividades>
          <actividad>
            <codigo>
              120010
            </codigo>
          </actividad>
          <actividad>
            <codigo>
              463300
            </codigo>
          </actividad>
        </arrayActividades>
      </comprobanteCAEARequest>
    </ser:informarAjusteIVACAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Body>
    <ns1:informarAjusteIVACAEAResponse xmlns:ns1="http://impl.service.wsmtxca.afip.gob.ar/service/">
      <resultado>
        A
      </resultado>
      <fechaProceso>
        2011-02-26-02:00
      </fechaProceso>
      <comprobanteCAEAResponse>
        <CAEA>
          21024364479618
        </CAEA>
        Informar un Ajuste IVA CAEA (informarAjusteIVACAEA)
        <codigoTipoComprobante>
          7
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          1100
        </numeroPuntoVenta>
        <numeroComprobante>
          6
        </numeroComprobante>
      </comprobanteCAEAResponse>
    </ns1:informarAjusteIVACAEAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

##### Validaciones del Negocio 

**<authRequest>...</authRequest> Campo Código de Error Validación No es superada** cuitRepresentada 10030 Debe estar empadronada en el régimen de CAEA con estado activo o baja. Se informa que esta validación quedará fuera de vigencia a partir del 01/06/2026. Rechaza **<comprobanteCAEARequest>…</comprobanteCAEARequest>** 

###### Validaciones Excluyentes 

**Campo / Grupo Código de Error Validación NO es superada** codigo / arrayActividades 165 Si ocurrió un error imprevisto al momento de validar las actividades a quedar asociadas al comprobante. Ver el Anexo de Rubros de Actividades y Remitos Rechaza condicionIVAReceptor/ fechaEmision 490 Si no se informa la condición de IVA del Receptor (obligatoria) o bien se informa un valor no contemplado por el servicio. Ver método consultarCondicionesIVAReceptor Rechaza 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante 740 Valores permitidos: 2 Nota de Débito A 3 Nota de Crédito A 7 Nota de Débito B 8 Nota de Crédito B 52 Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN Rechaza codigoTipoComprobante/ cuitRepresentada 740 El contribuyente no se encuentra habilitado a emitir (según el tipo de comprobante indicado) comprobantes A, A con Leyenda o A con leyenda OPERACIÓN SUJETA A RETENCIÓN Observa numeroPuntoVenta 701 Debe ser del tipo habilitado para CAEA Codificación de Productos 

- opción Factura con Detalle y no debe estar bloqueado a la fecha en que se emitió el comprobante. Consultar método _consultarPuntosVenta_ o _consultarPuntosVentaCAEA_     Rechaza fechaEmision 702 Debe estar comprendida dentro de la fecha desde y fecha hasta de vigencia del CAEA Rechaza numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 703 El número de comprobante informado debe ser mayor en 1 al último informado para igual punto de venta y tipo de comprobante. De no existir comprobante informado para igual punto de venta y codigoTipoComprobante, el número de comprobante debe ser igual a 1 (uno) Rechaza 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** fechaEmision / numeroPuntoVenta / numeroComprobante / codigoTipoComprobante 704 La fecha de emisión del comprobante debe ser mayor o igual a la fecha del último comprobante informado para igual tipo de comprobante y punto de venta. Rechaza codigoAutorizacion 705 Debe informarse y corresponder a la CUIT Rechaza fecha en que se envía la solicitud 706 Debe ser mayor a la fecha de entrada en vigencia del CAEA <fechaDesde> Rechaza codigoTipoDocumento / numeroDocumento 707 Si se informa uno de los campos debe informarse el otro. Rechaza CAEA / numeroPuntoVenta 709 La fecha de alta del numeroPuntoVenta debe ser menor o igual a la fechaHasta de la vigencia del CAEA que posee el comprobante que se está informando. Rechaza codigoConcepto 713 Deberá ser igual a alguno de los siguientes valores: 1 – Productos 2 – Servicios 3 – Productos y Servicios Rechaza arraySubtotalesIVA 715 Opcional. Debe informarse si algún ítem tiene <codigoCondicionIVA> igual a 4, 5 ó 6. Rechaza codigoTipoDocumento / numeroDocumento 718 Opcionales. Deberá informarse en los siguientes casos: 

- cuando <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52, 53, 201, 202, 203, 205, 206 o 207. -cuando <codigoTipoComprobante> es igual a 6, 7 u 8 y el importe total del comprobante <importeTotal> es mayor ó igual al monto en pesos resultante según RG4444.     Rechaza 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoAutorizacion 731 Opcional. Si se informa debe informarse “A” (sin comillas) Rechaza fechaVencimiento 732 Opcional. Si se informa debe coincidir con la Fecha Hasta del CAEA informado Rechaza codigoTipoDocumento 733 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53 <codigoTipoDocumento> deberá ser igual a 80 (CUIT) Rechaza codigoTipoDocumento 736 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarTiposDocumento_ Rechaza numeroPuntoVenta / codigoTipoComprobante 739 Los informes de comprobantes para un mismo punto de venta y tipo de comprobante deben ser enviados en forma sincrónica: si el WS recibe una nueva solicitud para un punto de venta y tipo de comprobante dado mientras la anterior está siendo procesada, la nueva solicitud será rechazada Rechaza importeGravado 741 No debe informarse Rechaza importeNoGravado 742 No debe informarse Rechaza importeExento 743 No debe informarse Rechaza importeSubtotal 744 Deberá informarse en 0 (cero) Rechaza importeOtrosTributos 745 No debe informarse Rechaza arrayOtrosTributos 746 No debe informarse Rechaza arrayCompradores 753 Grupo de compradores no habilitado para el método Rechaza numeroPuntoVenta / fechaHoraGen 754 La fecha/hora de generación es obligatoria para comprobantes CAEA por contingencia (no se informó el campo fecha/hora generación y el punto de venta es del tipo CAEA por Contingencia). A partir del 01/08/2026 sera obligatoria para comprobantes CAEA sin distinción del tipo de punto de venta (por Contingencia o no) Rechaza 

 Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) 

###### Validaciones NO Excluyentes 

**Campo / Grupo Código de Error Validación NO es superada** codigoTipoDocumento / numeroDocumento 141 

###### Si <codigoTipoDocumento> es igual a 

###### 80 (CUIT) y el <numeroDocumento> del 

###### receptor/comprador fue inactivado o 

###### invalidado. 

Observa codigoTipoDocumento / numeroDocumento 143 

###### Si <codigoTipoDocumento> es igual a 

###### 80 (CUIT) y el <numeroDocumento> del 

###### receptor/comprador fue limitada por 

###### haber sido caracterizada como sujeto 

###### no confiable en materia de Seguridad 

###### Social. 

Observa codigoTipoDocumento / numeroDocumento 145 

###### Si <codigoTipoDocumento> es igual a 

###### 80 (CUIT) y el <numeroDocumento> del 

###### receptor/comprador fue limitada por 

###### haber sido marcada como Apocrifa. 

Observa numeroDocumento 148 

###### Si el <numeroDocumento> del 

###### receptor/comprador se encuentra 

###### marcada como fallecido y no está 

###### marcado como sucesión indivisa. 

Observa codigo / arrayActividades 466 Si <codigo> se encuentra mas de una vez en el array de actividades (no admite repetidos). Ver el Anexo de Rubros de Actividades y Remitos Observa codigo / arrayActividades 467 Si <codigo> no se encuentra entre las actividades vigentes para la cuit representada. Ver el Anexo de Rubros de Actividades y Remitos Observa codigo / arrayActividades 468 Si <codigo> se encuentra asociado a un conjunto de actividades de un “rubro” y se encontraron otros <codigo> dentro del array que se encuentran asociados a otro conjunto de un “rubro” distinto. Ver el Anexo de Rubros de Actividades y Remitos Observa 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 470 Si ocurrio un error imprevisto al validar los comprobantes asociados que sean de tipo remito (88, 990, 91, 995, 997, 993, 994). Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 471 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y no fue encontrado en los registros de ARCA, o bien fue encontrado, pero la información asociada al mismo no es la esperada. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 472 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero el mismo se encuentra en un estado inválido. Dichos estados varian según el tipo de remito del que se trate. Ver el Anexo de Rubros de Actividades y Remitos Observa numeroDocumento / arrayComprobantesAsoci ados 473 Si el comprobante asociado es del tipo remito (91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero la cuit del receptor de dicho remito no coincide con la cuit del receptor del comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 475 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y el tipo de comprobante asociado es remito, pero el mismo no es carnico (88, 990, 91, 997, 993, 994), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 476 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” o “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado o Tabaco en Hebras (91, 997, 993, 994, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 477 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco Acondicionado” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco Acondicionado (990, 91, 997, 993, 994, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 478 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Tabaco en Hebras” y el tipo de comprobante asociado es remito, pero el mismo no es Tabaco en Hebras (88, 91, 997, 993, 994, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 480 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y el tipo de comprobante asociado es remito, pero el mismo no es Harina (88, 91, 997, 995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 481 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Harina” y no se especifico ningún Remito del tipo Harina (993 y 994), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / arrayComprobantesAsoci ados codigo / arrayActividades 482 Si el conjunto de códigos indicados en el Array de Actividades identifican el comprobante como perteneciente al rubro “Compra y Venta de Carne” y no se especifico ningún Remito del tipo Carnico (995), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoConcepto / arrayComprobantesAsoci ados 483 Los códigos de concepto permitidos para asociar Remitos Cárnicos (995) al Comprobante son 1 – Productos y 3 – Productos y Servicios Observa codigoTipoComprobante / arrayComprobantesAsoci ados arrayActividades 484 Si no se especifican actividades, y el Remito a Asociar es un Remito Sectorial (88, 990, 993, 994, 995, 997), se observara el comprobante. Ver el Anexo de Rubros de Actividades y Remitos Observa 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / fechaEmision / arrayComprobantesAsoci ados 485 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y fue encontrado en los registros de ARCA, pero se encuentra marcado como de exportación, mientras que el presente servicio solo acepta Remitos para el Mercado. Ver el Anexo de Rubros de Actividades y Remitos Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit / arrayComprobantesAsoci ados 486 Si el comprobante asociado es del tipo remito (88, 990, 91, 995, 997, 993, 994), y ya fue declarado una vez en el array de comprobantes asociados. Ver el Anexo de Rubros de Actividades y Remitos Observa condicionIVAReceptor/ codigoTipoComprobante/ fechaEmision 491 Si se informa una combinación invalida de Condición de IVA del Receptor y Tipo de Comprobante. Ver método consultarCondicionesIVAReceptor Observa codigoTipoDocumento / numeroDocumento 708 Si <codigoTipoDocumento> es igual a 80, 86 o 87, <numeroDocumento> debe ser válido y activo, excepto para <codigoTipoComprobante> 6, 7 u 8, <codigoTipoDocumento> 80 y <numeroDocumento> igual a 23000000000. Observa codigoAutorizacion 717 No debe estar informado como CAEA No utilizado Observa importeTotal 747 Debe ser igual a la sumatoria de <subtotalIVA><importe> (dentro del arraySubtotalesIVA). Observa codigoMoneda 710 Deberá ser igual a alguno de los valores permitidos. Consultar método _consultarMonedas_ Rechaza 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** cancelaEnMismaMonedaE xtranjera 122 En caso de enviar la marca de que el pago del comprobante se realiza en la misma moneda extranjera para comprobantes que no sean facturas. Unicamente se puede utilizar con los códigos habilitados (1,6,51,201,206) Observa cotizacionMoneda 182 No podrá ser inferior al 2% ni superior en un 400 % del que suministra ARCA como orientativo de acuerdo a la cotización oficial Observa cotizacionMoneda 726 Debe ser igual a 1 (uno) si <codigoMoneda> es igual a PES Observa cancelaEnMismaMonedaE xtranjera 174 En caso de enviar un valor inválido para la marca de que el pago de la factura se realiza en la misma moneda extranjera. Los valores válidos son S, N o vacío Observa codigoMoneda/ cancelaEnMismaMonedaE xtranjera 175 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera y enviar como código de moneda el Peso Argentino Observa codigoMoneda/ cotizacionMoneda/ cancelaEnMismaMonedaE xtranjera 181 En caso de enviar la marca de que el pago de la factura se realiza en la misma moneda extranjera, que codigoMoneda es del grupo de monedas con cotización del Banco de la Nación Argentina (ver Anexo Monedas BNA), que haya cotización y que la misma no coincida exactamente con el valor enviado en el campo cotizacionMoneda. En cuyo caso se podrá omitir el mismo para que la cotización de la factura sea la obtenida de los registros de ARCA Observa cotizacionMoneda 194 El campo es obligatorio a excepción de los casos para los cuales se envia el campo cancelaEnMismaMonedaExtranjera y se puede obtener la cotizacion asociada al codigoMoneda si esta es del grupo de monedas del Banco de la Nación Argentina (ver Anexo Monedas BNA) Rechaza 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** cotizacionMoneda 195 No es posible indicar una cotización negativa Rechaza importeTotal 748 Debe ser igual a la sumatoria de la totalidad de los campos <importeItem>. Observa fechaServicioDesde 727 Debe informarse solo si <codigoConcepto> es igual a 2 ó 

3. En otro caso no corresponde.     Observa fechaServicioHasta 728 Debe informarse solo si <codigoConcepto> es igual a 2 ó 

3. En otro caso no corresponde.     Observa fechaVencimientoPago 729 Debe informarse solo si <codigoConcepto> es igual a 2 ó 

3. En otro caso no corresponde.     Observa fechaVencimientoPago / fechaEmision 730 La fecha de vencimiento de pago debe ser mayor o igual a la fecha de emisión. Observa codigoTipoDocumento / numeroDocumento 734 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53, la CUIT del receptor debe 

###### encontrarse activa en IVA o en 

###### monotributo. 

Observa numeroDocumento 735 El Receptor no puede ser igual al Emisor Observa fechaServicioDesde / fechaServicioHasta 737 La Fecha de Servicio desde debe ser menor o igual a la Fecha de Servicio Hasta Observa numeroDocumento 738 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 o 53 y <codigoTipoDocumento> es igual a 80 (CUIT), dicha CUIT deberá encontrarse activa en el Sistema Registral Observa cuitRepresentada / fechaEmision 750 Debe estar dado de alta en el Impuesto al Valor Agregado al momento de la fecha de emisión del comprobante Observa cuitRepresentada / codigoTipoComprobante / fechaEmision 751 Debe encontrarse habilitado a comprobantes clase 'A' a la fecha de emisión del comprobante Observa 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** numeroPuntoVenta / fechaHoraGen 755 La fecha/hora de generación solo debe informarse para comprobantes CAEA por contingencia (se informó el campo fecha/hora generación pero el punto de venta no es del tipo CAEA por Contingencia). Se informa que esta validación quedará fuera de vigencia a partir del 31/07/2026, siendo absorbida por las condiciones de la validación **_754_**. Observa numeroPuntoVenta / fechaHoraGen / fechaEmision / codigoConcepto 756 Para comprobantes CAEA por contingencia: si se indica <codigoConcepto> igual a 1, la fecha de emisión del comprobante puede ser hasta 5 días anteriores o posteriores respecto de la fecha de generación, pero sin extenderse al mes siguiente; si se indica <codigoConcepto> igual a 2 ó 3 puede ser hasta 10 días anteriores o posteriores a la fecha de generación Observa codigoTipoComprobante / periodoComprobantesAso ciados 777 Si <codigoTipoComprobante> es igual a 202, 203, 207 ó 208 perteneciente a Factura de Crédito Electrónica no corresponde informar un periodo de comprobantes asociados. Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados / periodoComprobantesAso ciados 778 Si <codigoTipoComprobante> es igual a 2, 3, 7, 8, 52 ó 53. Falta informar comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito válido/s o informar un período de comprobantes asociados válido Rechaza codigoTipoComprobante / arrayComprobantesAsoci ados / periodoComprobantesAso ciados 779 Si <codigoTipoComprobante> es igual a 2, 3, 7, 8, 52 ó 53. No debe informar un período de comprobantes asociados cuando informa comprobante/s asociado/s puntual del tipo factura, nota de debito o nota de crédito Rechaza 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / periodoComprobantesAso ciados 780 Si <codigoTipoComprobante> es igual a 1, 2, 51, 201 ó 206 correspondientes a Facturas no corresponde informar un periodo de comprobantes asociados. Rechaza codigoTipoDocumento / numeroDocumento 782 Si <codigoTipoComprobante> es igual a 1, 2, 3, 51, 52 ó 53 la CUIT del receptor es activa en monotributo Observa cuitRepresentada 784 Si <cuitRepresentada> tiene pendiente de presentación el formulario de habilitación de comprobantes o su fecha de presentación es anterior a tu alta en IVA Observa numeroDocumento 786 Si <numeroDocumento> es inexistente en el padron del Organismo Observa codigoTipoComprobante/ arrayComprobantesAsoci ados/importeTotal 792 Siendo <codigoTipoComprobante> una Nota de Crédito (3, 8, 53, 203 y 208), si la sumatoria de los importes totales de los elementos del array <arrayComprobantesAsociados> (sin incluir Remitos) supera el <importeTotal> de la Nota de Crédito Observa **<comprobanteAsociado>…</comprobanteAsociado>** 

###### Validaciones Excluyentes 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo Código de Observ. Validación NO es superada** codigoTipoComprobante 803 El comprobante asociado podrá ser: 1 – Factura A 2 – Nota de Débito A 3 – Nota de Crédito A 6 – Factura B 7 – Nota de Débito B 

###### 8 – Nota de Crédito B 

 51 – Factura A con leyenda OPERACIÓN SUJETA A RETENCIÓN 52 – Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 – Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 

###### 91 – Remito Papel 

###### 88 – Remito Electrónico de Tabaco 

###### Acondicionado 

###### 990 – Remito Electrónico de Tabaco en 

###### Hebras 

###### 993 – Remito Electrónico de Harina en 

###### Camion 

###### 994 – Remito Electrónico de Harina en 

###### Tren 

###### 995 – Remito Electrónico de Carne 

###### 997 – Remito Electrónico Azucar 

###### Mercado Interno 

###### Consultar método 

###### consultarTiposComprobante 

Rechaza fechaEmision 820 La fecha de emisión del comprobante asociado informada no coincide con la existente en nuestros registros Rechaza 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo Código de Observ. Validación NO es superada** fechaEmision 821 La fecha de emisión de este comprobante no puede ser anterior a la factura asociada Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 822 El comprobante asociado no posee cuit del receptor Rechaza codigoTipoComprobante / numeroPuntoVenta / numeroComprobante / cuit 823 El comprobante asociado posee otro cuit de receptor Rechaza fechaEmision 824 Si el punto de venta del comprobante asociado NO es del tipo electrónico debe informar la fecha de emisión Rechaza fechaEmision 825 Si el punto de venta del comprobante asociado NO es del tipo electrónico la fecha de emisión no puede ser posterior a la fecha de la autorización Rechaza 

 Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) 

###### Validaciones NO Excluyentes 

**Campo Código de Observ. Validación NO es superada** codigoTipoComprobante 800 

###### Deberá ser igual a 88 o 990 si el tipo de 

###### comprobante cuya autorización se 

###### solicita es igual a 1, 6 o 51 

###### Deberá ser igual a 1, 2, 3, 88 o 990 si el 

###### tipo de comprobante cuya autorización 

###### se solicita es igual a 2 o 3. 

###### Deberá ser igual a 6, 7, 8, 88 o 990 si el 

###### tipo de comprobante cuya autorización 

###### se solicita es igual a 7 u 8. 

###### Deberá ser igual a 51, 52, 53, 88 o 990 

###### si el tipo de comprobante cuya 

###### autorización se solicita es igual a 52 o 

###### 53. 

Observa codigoTipoComprobante / numeroPuntoVenta / numeroComprobante 801 Si el punto de venta es del tipo electrónico el comprobante asociado <codigoTipoComprobante> <numeroPuntoVenta> <numeroComprobante> deberá obrar en las bases del organismo. Observa numeroPuntoVenta 802 

###### El tipo de punto de venta, en caso de 

###### ser electrónico, deberá ser alguno de 

###### los siguientes: RECE para aplicativo y 

###### web services, Factura en Línea 

###### Responsable Inscripto, Factura en Línea 

- Método Alternativo al RECE (límite de 

###### 100), Codificación de Productos Web 

###### services, Codificación de Productos 

###### Factura en Línea, CAEA Fact. Elect. 

###### (RECE) RI IVA o CAEA Codificación de 

###### Productos. 

 Observa 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **<periodoComprobantesAsociados>…</ periodoComprobantesAsociados>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** fechaDesde / fechaHasta 2800 

###### La fechaHasta debe ser posterior o 

###### igual fechaDesde 

Rechaza fechaHasta / fechaEmision 2801 

###### La fechaHasta del 

###### periodoComprobantesAsociados 

###### debe ser anterior o igual a la fecha 

###### de emisión del comprobante por el 

###### cual se está solicitando la 

###### autorización 

 Rechaza 

###### Validaciones NO Excluyentes 

**Campo Código de Error Validación NO es superada** fechaDesde / fechaHasta 2802 Si el comprobante a autorizar incluye percepciones, el rango de fecha informado debe corresponder al mismo Mes/Año Observa **<subtotalIVA>...</subtotalIVA>** de existir se realizaran las siguientes validaciones 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** codigo 1000 Valores permitidos: 4, 5, 6 Rechaza codigo 1002 No se deberá repetir (no pueden incluírse dos subtotales IVA con el mismo código) Rechaza 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo Código de Error Validación NO es superada** codigo 1003 Si existen uno o más ítems con una determinada alícuota IVA, deberá existir el correspondiente subtotal IVA para dicha alícuota. No se sebe incluír un subtotal IVA si dicha alícuota no está presente en al menos un ítem. Rechaza 

###### Validaciones No Excluyentes 

**Campo Código de Error Validación NO es superada** importe 1004 Deberá coincidir con la sumatoria de todos los <importeItem> de <item> donde la alícuota de IVA coincida con la indicada, es decir, donde <codigoCondicionIVA> de <item> = <codigo> de <subtotalIVA>. Observa importe 1005 La suma de los subtotales de IVA no puede ser negativa. Observa **<item>...</item>** 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** unidadesMtx 1123 Deberá informarse 1 (uno). Rechaza codigoMtx 1124 Deberá informarse el código 7790001001139 Rechaza codigo 1105 Opcional. Longitud máxima 50 posiciones. Rechaza descripcion 1106 Cantidad máxima de caracteres permitidos 

4000. Importante: no es necesario (ni recomendable) completar con espacios.     Rechaza cantidad 1125 No debe informarse Rechaza codigoUnidad Medida 1126 Deberá informarse el código 7 - unidades Rechaza 

Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) **Campo Código de Error Validación NO es superada** precioUnitario 1127 No debe informarse Rechaza importeBonific acion 1128 No debe informarse Rechaza codigoCondicio nIVA 1129 Deberá coincidir con alguno de los siguientes valores permitidos: 4, 5 o 6 Rechaza importeIVA 1112 Obligatorio para <codigoTipoComprobante> igual a 1, 2, 3, 51, 52 o 53. No corresponde para <codigoTipoComprobante> igual a 6, 7 u 8. Rechaza importeIVA 1130 Para <codigoTipoComprobante> igual a 2, 3, 52 o 53 deberá ser igual a <importeItem> Rechaza importeIVA 1131 Si <codigoTipoComprobante> es igual a 2, 3, 52 o 53 deberá ser mayor a 0 (cero). Rechaza importeItem 1132 Deberá ser mayor a 0 (cero) Rechaza **<datoAdicional>...</datoAdicional>** 

###### Los datos adicionales sólo deberán ser incluídos si el emisor pertenece al conjunto de emisores 

###### habilitado para usar datos adicionales (“Adicionales por R.G.”). En ese caso podrá incluír el o los datos 

###### adicionales que correspondan, especificando el tipo de dato adicional de acuerdo a la situación del 

###### emisor. El listado de tipos de datos adicionales se puede consultar con el método 

###### consultarTiposDatosAdicionales. 

###### Por ejemplo, si el emisor está incluído en el Régimen de Promoción Industrial, deberá incluír un dato 

###### adicional tipo 2. 

###### Validaciones Excluyentes 

**Campo Código de Error Validación NO es superada** t 920 Valores permitidos: consultar método _consultarTiposDatosAdicionales_ Rechaza t / c1…c6 922 Sólo se puede incluír un dato adicional con t = 2 (sólo se permite un id de proyecto por comprobante) Rechaza 

 Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) 

###### Validaciones No Excluyentes 

**Campo Código de Error Validación NO es superada** t / c1…c6 921 Si t es igual a 2 (“Dato Adicional para Empresas Promovidas”), en c1 se deberá indicar el id de proyecto (el mismo deberá corresponder a la cuit emisora del comprobante) o cero (0) en caso de que la actividad facturada no esté alcanzada por el Régimen de Promoción Industrial. Los campos c2 a c6 no deberán informarse (reservados para uso futuro) Observa 

#### Informar un CAEA no utilizado (informarCAEANoUtilizado) 

Este método permite informar un CAEA que no fue utilizado, es decir que ningún comprobante fue emitido con ese CAEA. Cabe aclarar que el CAEA no deberá ser utilizado en comprobantes que se emitan posteriormente. 

##### Mensaje de Solicitud 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarCAEANoUtilizadoRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      <CAEA>
        long
      </CAEA>
    </ser:informarCAEANoUtilizadoRequest>
  </soapenv:Body>
  Informar un CAEA no utilizado (informarCAEANoUtilizado)
</soapenv:Envelope>
```
 Donde: **<authRequest>** del tipo **AuthRequestType.** Contiene información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<informarCAEANoUtilizadoRequest>** es del tipo **InformarCAEANoUtilizadoRequestType Campo Descripción Obligatorio Tipo Longitud** CAEA Especifica el CAEA que se informa como no utilizado. S long 14 

 Informar un CAEA no utilizado (informarCAEANoUtilizado) 

##### Mensaje de Respuesta 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarCAEANoUtilizadoResponse>
      <resultado>
        ResultadoSimpleType
      </resultado>
      <fechaProceso>
        date
      </fechaProceso>
      <CAEA>
        long
      </CAEA>
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
        Informar un CAEA no utilizado (informarCAEANoUtilizado)
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:informarCAEANoUtilizadoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **Campo / Grupo Descripción Oblig Tipo Long (máx)** resultado Indica si la solicitud fue: A:Aprobada R:Rechazada S ResultadoSimpleType 1 fechaProceso Fecha de procesamiento S date -CAEA CAEA informado S long 14 arrayErrores En caso de ser rechazado indicará los motivos que dieron origen al rechazo. N ArrayCodigosDescripcionesType -evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType -

##### Ejemplo para “Informar un CAEA no utilizado” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarCAEANoUtilizadoRequest>
      <authRequest>
        <token>
          Un String
        </token>
        <sign>
          Un String
        </sign>
        Informar un CAEA no utilizado (informarCAEANoUtilizado)
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <CAEA>
        12345678901234
      </CAEA>
    </ser:informarCAEANoUtilizadoRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarCAEANoUtilizadoResponse>
      <resultado>
        A
      </resultado>
      <fechaProceso>
        2010-12-10
      </fechaProceso>
      <CAEA>
        12345678901234
      </CAEA>
    </ser:informarCAEANoUtilizadoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

##### Validaciones del Negocio 

**<authRequest>...</authRequest> Campo Código de Error Validación No es superada** cuitRepresentada 10030 Debe estar empadronada en el régimen de CAEA con estado activo o baja. Se informa que esta validación quedará fuera de vigencia a partir del 01/06/2026. Rechaza 

Informar un CAEA no utilizado (informarCAEANoUtilizado) **<informarCAEANoUtilizadoRequest>...</informarCAEANoUtilizadoRequest> Campo Código de Error Validación NO es superada** CAEA 1200 Debe ser del tipo de código de autorización CAEA Rechaza CAEA 1201 Debe corresponder a la CUIT indicada en <cuitRepresentada> Rechaza CAEA 1202 No debe estar informado como utilizado en algún comprobante Rechaza fecha de envío de la solicitud 1203 La fecha de envío de la solicitud debe ser mayor a la fecha de inicio de vigencia del CAEA que se está informando. Rechaza CAEA 1208 No debe estar informado como no utilizado Rechaza 

#### Informar un CAEA no utilizado para un Punto de Venta 

#### (informarCAEANoUtilizadoPtoVta) 

Este método permite informar un CAEA que no fue utilizado para un Punto de Venta, es decir que ningún comprobante fue emitido con ese CAEA y ese Punto de Venta. Cabe aclarar que el CAEA y Punto de Venta indicados no deberán ser utilizados en comprobantes que se emitan posteriormente. 

##### Mensaje de Solicitud 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarCAEANoUtilizadoPtoVtaRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      <CAEA>
        long
      </CAEA>
      <numeroPuntoVenta>
        NumeroPuntoVentaSimpleType
      </numeroPuntoVenta>
    </ser:informarCAEANoUtilizadoPtoVtaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<informarCAEANoUtilizadoPtoVtaRequest>** es del tipo **InformarCAEANoUtilizadoPtoVtaRequestType Campo Descripción Obligatorio Tipo Longitud** CAEA Especifica el CAEA que se informa como no utilizado para el punto de venta indicado S long 14 numeroPuntoVenta Especifica el punto de venta que se informa como no utilizado para el CAEA indicado S NumeroPuntoVentaSimpleType 5 

##### Mensaje de Respuesta 

###### Esquema 


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
    </ser:informarCAEANoUtilizadoPtoVtaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **Campo / Grupo Descripción Oblig Tipo Long (máx)** resultado Indica si la solicitud fue: A:Aprobada R:Rechazada S ResultadoSimpleType 1 fechaProceso Fecha de procesamiento S date -CAEA CAEA informado S long 14 numeroPunto Venta Número de punto de venta informado S NumeroPuntoVentaSimpleType 5 arrayErrores En caso de ser rechazado indicará los motivos que dieron origen al rechazo. N ArrayCodigosDescripcionesType -evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType -

##### Ejemplo para “Informar un CAEA no utilizado para un Punto de Venta” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarCAEANoUtilizadoPtoVtaRequest>
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
        12345678901234
      </CAEA>
      <numeroPuntoVenta>
        123
      </numeroPuntoVenta>
    </ser:informarCAEANoUtilizadoPtoVtaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:informarCAEANoUtilizadoPtoVtaResponse>
      <resultado>
        A
      </resultado>
      <fechaProceso>
        2010-12-10
      </fechaProceso>
      <CAEA>
        12345678901234
      </CAEA>
      <numeroPuntoVenta>
        123
      </numeroPuntoVenta>
    </ser:informarCAEANoUtilizadoPtoVtaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

###### Validaciones del Negocio 

**<authRequest>...</authRequest> Campo Código de Error Validación No es superada** cuitRepresentada 10030 Debe estar empadronada en el régimen de CAEA con estado activo o baja. Se informa que esta validación quedará fuera de vigencia a partir del 01/06/2026. Rechaza **<informarCAEANoUtilizadoPtoVtaRequest>...</ informarCAEANoUtilizadoPtoVtaRequest> Campo Código de Error Validación NO es superada** CAEA 1200 Debe ser del tipo de código de autorización CAEA Rechaza CAEA 1201 Corresponda a la CUIT indicada en <cuitRepresentada> Rechaza fecha de envío de la solicitud 1203 La fecha de envío de la solicitud debe ser mayor a la fecha de inicio de vigencia del CAEA que se está informando. Rechaza numeroPuntoVenta 1204 Debe corresponder a un punto de venta CAEA Rechaza numeroPuntoVenta 1205 El punto de venta deberá haber estado activo durante la vigencia del CAEA Rechaza CAEA / numeroPuntoVenta 1206 No debe estar informado como utilizado en algún comprobante para el punto de venta indicado Rechaza CAEA / numeroPuntoVenta 1207 No debe estar informado como no utilizado para el punto de venta indicado Rechaza 

#### Consultar Puntos de Venta aún no informados para un CAEA 

#### (consultarPtosVtaCAEANoInformados) 

Este método permite consultar que puntos de venta aún no fueron informados para un CAEA determinado. 

##### Mensaje de Solicitud 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPtosVtaCAEANoInformadosRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      <CAEA>
        long
      </CAEA>
    </ser:consultarPtosVtaCAEANoInformadosRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<consultarCAEARequest>** es del tipo **ConsultarCAEARequestType Campo Descripción Obligatorio Tipo Longitud** CAEA Especifica el CAEA sobre el cual se desea obtener el listado de puntos de venta aún no informados S long 14 

##### Mensaje de Respuesta 

###### Esquema 


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
 

Donde: **Campo / Grupo Descripción Oblig Tipo** arrayPuntos Venta Devuelve los puntos de Venta del tipo CAEA que aún no fueron informados para el CAEA indicado en el request N ArrayPuntosVentaType arrayErrores En caso de que no se pueda obtener la información (si no se superan las validaciones) indicará los motivos que dieron origen al rechazo. N ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

##### Ejemplo para “Consultar Puntos de Venta aún no informados para un CAEA” 


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
 

##### Validaciones del Negocio 

**<authRequest>...</authRequest> Campo Código de Error Validación No es superada** cuitRepresentada 10030 Debe estar empadronada en el régimen de CAEA con estado activo o baja. Se informa que esta validación quedará fuera de vigencia a partir del 01/06/2026. Rechaza **<consultarPtosVtaCAEANoInformadosRequest>...</ consultarPtosVtaCAEANoInformadosRequest> Campo Código de Error Validación NO es superada** CAEA 1300 Debe ser un CAEA previamente otorgado Rechaza CAEA 1301 Debe corresponder a la CUIT indicada en <cuitRepresentada> Rechaza 

#### Consultar un CAEA previamente otorgado (consultarCAEA) 

Este método permite consultar la información correspondiente a un CAEA previamente otorgado. 

##### Mensaje de Solicitud 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCAEARequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      <CAEA>
        long
      </CAEA>
    </ser:consultarCAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<consultarCAEARequest>** es del tipo **ConsultarCAEARequestType Campo Descripción Obligatorio Tipo Longitud** CAEA Especifica el CAEA previamente otorgado sobre el S long 14 

 Campo Descripción Obligatorio Tipo Longitud cual se solicita información 

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

##### Ejemplo para “Consultar un CAEA previamente otorgado” 


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
 

##### Validaciones del Negocio 

**<authRequest>...</authRequest> Campo Código de Error Validación No es superada** cuitRepresentada 10030 Debe estar empadronada en el régimen de CAEA con estado activo o baja. Se informa que esta validación quedará fuera de vigencia a partir del 01/06/2026. Rechaza **<consultarCAEARequest>...</consultarCAEARequest>** 

**Campo Código de Error Validación NO es superada** CAEA 1300 Debe ser un CAEA previamente otorgado Rechaza CAEA 1301 Debe corresponder a la CUIT indicada en <cuitRepresentada> Rechaza 

#### Consultar CAEAs en un rango de fechas (consultarCAEAEntreFechas) 

Este método permite consultar la información correspondiente a CAEAs que hayan tenido vigencia en algún momento dentro de un rango de fechas determinado. 

##### Mensaje de Solicitud 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCAEAEntreFechasRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      <fechaDesde>
        date
      </fechaDesde>
      <fechaHasta>
        date
      </fechaHasta>
    </ser:consultarCAEAEntreFechasRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<consultarCAEAEntreFechasRequest>** es del tipo **ConsultarCAEAEntreFechasRequestType Campo Descripción Obligatorio Tipo Longitud** fechaDesde Especifica la fecha de inicio (inclusive) del rango que se quiere consultar S date -fechaHasta Especifica la fecha de fin (inclusive) del rango que se quiere consultar S date -

##### Mensaje de Respuesta 

###### Esquema 


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

##### Ejemplo para “Consultar CAEAs en un rango de fechas” 


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
 

##### Validaciones del Negocio 

**<authRequest>...</authRequest> Campo Código de Error Validación No es superada** cuitRepresentada 10030 Debe estar empadronada en el régimen de CAEA con estado activo o baja. Se informa que esta validación quedará fuera de vigencia a partir del 01/06/2026. Rechaza **<consultarCAEAEntreFechasRequest>...</consultarCAEAEntreFechasRequest> Campo / Grupo Código de Error Validación NO es superada** fechaDesde / fechaHasta 1400 fechaDesde debe ser menor o igual a fechaHasta Rechaza 

#### Consultar el último comprobante autorizado 

#### (consultarUltimoComprobanteAutorizado) 

Este método permite consultar el último número de comprobante autorizado para un determinado punto de venta y tipo de comprobante, tanto para comprobantes con código de autorización CAE como CAEA. A tales efectos se enviará el punto de venta y el tipo de comprobante de interés, de ser válidos, se devolverá el último número de comprobante que se informó o autorizó. 

##### Mensaje de Solicitud 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUltimoComprobanteAutorizadoRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      <consultaUltimoComprobanteAutorizadoRequest>
        <codigoTipoComprobante>
          short
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          NumeroPuntoVentaSimpleType
        </numeroPuntoVenta>
      </consultaUltimoComprobanteAutorizadoRequest>
    </ser:consultarUltimoComprobanteAutorizadoRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType** Contiene la información referente a la autenticación **Campo / Grupo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<consultaUltimoComprobanteAutorizadoRequest>** es del tipo **ConsultaUltimoComprobanteAutorizadoRequestType Campo Descripción Oblig Tipo Longitud** codigoTipoComprobante Tipo de comprobante que se desea consultar S short 3 numeroPuntoVenta Punto de venta para el cual se requiera conocer el último número de comprobante autorizado. S NumeroPuntoVent aSimpleType 5 

##### Mensaje de Respuesta 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUltimoComprobanteAutorizadoResponse>
      <numeroComprobante>
        NumeroComprobanteSimpleType
      </numeroComprobante>
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
    </ser:consultarUltimoComprobanteAutorizadoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **Campo / Grupo Descripción Oblig Tipo** 

**Campo / Grupo Descripción Oblig Tipo** arrayErrores En caso de no superar alguna validación indicará el motivo. N ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

##### Ejemplo para “Consultar el Último Comprobante Autorizado” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUltimoComprobanteAutorizadoRequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un tring
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <consultaUltimoComprobanteAutorizadoRequest>
        <codigoTipoComprobante>
          1
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          4000
        </numeroPuntoVenta>
      </consultaUltimoComprobanteAutorizadoRequest>
    </ser:consultarUltimoComprobanteAutorizadoRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUltimoComprobanteAutorizadoResponse>
      <numeroComprobante>
        1
      </numeroComprobante>
    </ser:consultarUltimoComprobanteAutorizadoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

##### Validaciones del Negocio 

**<consultaUltimoComprobanteAutorizadoRequest > ...</consultaUltimoComprobanteAutorizadoRequest> Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante 1500 Podrá ser: 1 – Factura A 2 – Nota de Débito A 3 – Nota de Crédito A 6 – Factura B 7 – Nota de Débito B 8 – Nota de Crédito B 51 – Factura A con leyenda OPERACIÓN SUJETA A RETENCIÓN 52 – Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 – Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN Consultar método _consultarTiposComprobante_ Rechaza numeroPuntoVenta 1501 Debe ser del tipo habilitado para el régimen CAE Codificación de Productos – Web Services ó del régimen CAEA. Consultar método _consultarPuntosVenta, consultarPuntosVentaCAE o consultarPuntosVentaCAEA._ Rechaza codigoTipoComprobante / numeroPuntoVenta 1502 Debe obrar en las bases del organismo al menos un comprobante emitido con el tipo de comprobante y punto de ventas indicados. Rechaza 

#### Consultar un comprobante autorizado (consultarComprobante) 

Este método permite consultar los datos de un comprobante previamente autorizado, ya sea del tipo Código de Autorización CAE ó CAEA. En la solicitud se enviará el tipo de comprobante, punto de venta y número de comprobante que se desea consultar. De ser estos datos válidos se devolverán todos los datos asociados a ese comprobante, caso contrario retornará el error asociado. 

##### Mensaje de Solicitud 

###### Esquema 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <consultarComprobanteRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      <consultaComprobanteRequest>
        Consultar un comprobante autorizado (consultarComprobante)
        <codigoTipoComprobante>
          short
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          NumeroPuntoVentaSimpleType
        </numeroPuntoVenta>
        <numeroComprobante>
          NumeroComprobanteSimpleType
        </numeroComprobante>
      </consultaComprobanteRequest>
    </consultarComprobanteRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>...</authRequest>** contiene la información referente a la autenticación **Campo / Grupo Descripción Obliga torio Tipo Longitud** Token Token devuelto por el WSAA S string -Sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente representado S long 11 **<consultaComprobanteRequest>** es del tipo **ConsultaComprobanteRequestType,** identifica al comprobante que se desea consultar **Campo Descripción Oblig Tipo Longitud** codigoTipoComprobante Tipo de comprobante que se desea consultar S short 3 numeroPuntoVenta Número de punto de venta al que corresponde el comprobante que se desea consultar S NumeroPuntoVenta SimpleType 5 numeroComprobante Número del comprobante que se está consultando S NumeroComprobant eSimpleType 8 

 Consultar un comprobante autorizado (consultarComprobante) 

##### Mensaje de Respuesta 

###### Esquema 

Consultar un comprobante autorizado (consultarComprobante) 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarComprobanteResponse>
      <comprobante>
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
        Consultar un comprobante autorizado (consultarComprobante)
        <codigoTipoAutorizacion>
          CodigoTipoAutorizacionSimpleType
        </codigoTipoAutorizacion>
        <codigoAutorizacion>
          long
        </codigoAutorizacion>
        <fechaVencimiento>
          date
        </fechaVencimiento>
        <codigoTipoDocumento>
          short
        </codigoTipoDocumento>
        <numeroDocumento>
          long
        </numeroDocumento>
        <condicionIVAReceptor>
          short
        </condicionIVAReceptor>
        <importeGravado>
          ImporteTotalSimpleType
        </importeGravado>
        <importeNoGravado>
          ImporteTotalSimpleType
        </importeNoGravado>
        <importeExento>
          ImporteTotalSimpleType
        </importeExento>
        <importeSubtotal>
          ImporteTotalSimpleType
        </importeSubtotal>
        <importeOtrosTributos>
          ImporteTotalSimpleType
        </importeOtrosTributos>
        <importeTotal>
          ImporteTotalSimpleType
        </importeTotal>
        <codigoMoneda>
          string
        </codigoMoneda>
        <cancelaEnMismaMonedaExtranjera>
          SiNoSimpleType
        </cancelaEnMismaMonedaExtranjera>
        <cotizacionMoneda>
          decimal
        </cotizacionMoneda>
        <observaciones>
          string
        </observaciones>
        <codigoConcepto>
          short
        </codigoConcepto>
        <fechaServicioDesde>
          date
        </fechaServicioDesde>
        <fechaServicioHasta>
          date
        </fechaServicioHasta>
        <fechaVencimientoPago>
          date
        </fechaVencimientoPago>
        <fechaHoraGen>
          dateTime
        </fechaHoraGen>
        <arrayComprobantesAsociados>
          <comprobanteAsociado>
            <codigoTipoComprobante>
              short
            </codigoTipoComprobante>
            <numeroPuntoVenta>
              NumeroPuntoVentaSimpleType
            </numeroPuntoVenta>
            <numeroComprobante>
              NumeroComprobanteSimpleType
            </numeroComprobante>
            Consultar un comprobante autorizado (consultarComprobante)
            <cuit>
              long
            </cuit>
            <fechaEmision>
              date
            </fechaEmision>
          </comprobanteAsociado>
        </arrayComprobantesAsociados>
        <periodoComprobantesAsociados>
          <fechaDesde>
            date
          </fechaDesde>
          <fechaHasta>
            date
          </fechaHasta>
        </periodoComprobantesAsociados>
        <arrayOtrosTributos>
          <otroTributo>
            <codigo>
              short
            </codigo>
            <descripcion>
              string
            </descripcion>
            <baseImponible>
              ImporteTotalSimpleType
            </baseImponible>
            <importe>
              ImporteTotalSimpleType
            </importe>
          </otroTributo>
        </arrayOtrosTributos>
        <arrayItems>
          <item>
            <unidadesMtx>
              int
            </unidadesMtx>
            <codigoMtx>
              string
            </codigoMtx>
            <codigo>
              string
            </codigo>
            <descripcion>
              string
            </descripcion>
            <cantidad>
              DecimalSimpleType
            </cantidad>
            <codigoUnidadMedida>
              short
            </codigoUnidadMedida>
            <precioUnitario>
              DecimalSimpleType
              <precioUnitario>
                <importeBonificacion>
                  DecimalSimpleType
                </importeBonificacion>
                <codigoCondicionIVA>
                  short
                </codigoCondicionIVA>
                <importeIVA>
                  ImporteSubtotalSimpleType
                </importeIVA>
                <importeItem>
                  ImporteSubtotalSimpleType
                </importeItem>
              </item>
              Consultar un comprobante autorizado (consultarComprobante)
            </arrayItems>
            <arraySubtotalesIVA>
              <subtotalIVA>
                <codigo>
                  short
                </codigo>
                <importe>
                  ImporteTotalSimpleType
                </importe>
              </subtotalIVA>
            </arraySubtotalesIVA>
            <arrayDatosAdicionales>
              <datoAdicional>
                <t>
                  short
                </t>
                <c1>
                  string
                </c1>
                <c2>
                  string
                </c2>
                <c3>
                  string
                </c3>
                <c4>
                  string
                </c4>
                <c5>
                  string
                </c5>
                <c6>
                  string
                </c6>
              </datoAdicional>
            </arrayDatosAdicionales>
            <arrayCompradores>
              <comprador>
                <codigoTipoDocumento>
                  short
                </codigoTipoDocumento>
                <numeroDocumento>
                  long
                </numeroDocumento>
                <porcentaje>
                  PorcentajeSimpleType
                </porcentaje>
              </comprador>
            </arrayCompradores>
            <arrayActividades>
              <actividad>
                <codigo>
                  long
                </codigo>
              </actividad>
            </arrayActividades>
          </comprobante>
          Consultar un comprobante autorizado (consultarComprobante)
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
        </ser:consultarComprobanteResponse>
      </soapenv:Body>
    </soapenv:Envelope>
```
 

Consultar un comprobante autorizado (consultarComprobante) Donde: **Campo Descripción Oblig Tipo** comprobante Contiene los datos del comprobante consultado, en caso de existir. N ComprobanteType arrayErrores En caso de no superar alguna validación indicará el motivo. N ArrayCodigosDescripcionesType arrayObservaciones Indica los motivos por los cuales el comprobante fue aceptado con observaciones, en caso de corresponder. N ArrayCodigosDescripcionesType Evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

##### Ejemplo para “Consultar un Comprobante autorizado” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <consultarComprobanteRequest>
      <authRequest>
        <token>
          un string
        </token>
        <sign>
          un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <consultaComprobanteRequest>
        <codigoTipoComprobante>
          1
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          4000
        </numeroPuntoVenta>
        <numeroComprobante>
          1
        </numeroComprobante>
      </consultaComprobanteRequest>
      Consultar un comprobante autorizado (consultarComprobante)
    </consultarComprobanteRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarComprobanteResponse>
      <comprobante>
        <codigoTipoComprobante>
          1
        </codigoTipoComprobante>
        <numeroPuntoVenta>
          4000
        </numeroPuntoVenta>
        <numeroComprobante>
          1
        </numeroComprobante>
        <fechaEmision>
          2010-11-01
        </fechaEmision>
        <codigoTipoAutorizacion>
          E
        </codigoTipoAutorizacion>
        <codigoAutorizacion>
          12345678901234
        </codigoAutorizacion>
        <fechaVencimiento>
          2010-11-16
        </fechaVencimiento>
        <codigoTipoDocumento>
          80
        </codigoTipoDocumento>
        <numeroDocumento>
          30000000007
        </numeroDocumento>
        <condicionIVAReceptor>
          1
        </condicionIVAReceptor>
        <importeGravado>
          100.00
        </importeGravado>
        <importeNoGravado>
          0.00
        </importeNoGravado>
        <importeExento>
          0.00
        </importeExento>
        <importeSubtotal>
          100.00
        </importeSubtotal>
        <importeOtrosTributos>
          100.00
        </importeOtrosTributos>
        <importeTotal>
          122.00
        </importeTotal>
        <codigoMoneda>
          PES
        </codigoMoneda>
        <cotizacionMoneda>
          1
        </cotizacionMoneda>
        <cancelaEnMismaMonedaExtranjera>
          N
        </cancelaEnMismaMonedaExtranjera>
        <observaciones>
          Observaciones Comerciales, libre
        </observaciones>
        Consultar un comprobante autorizado (consultarComprobante)
        <codigoConcepto>
          1
        </codigoConcepto>
        <arrayOtrosTributos>
          <otroTributo>
            <codigo>
              99
            </codigo>
            <descripcion>
              Otro Tributo
            </descripcion>
            <baseImponible>
              100
            </baseImponible>
            <importe>
              1.00
            </importe>
          </otroTributo>
        </arrayOtrosTributos>
        <arrayItems>
          <item>
            <codigoMtx>
              mtx0001
            </codigoMtx>
            <codigo>
              P0001
            </codigo>
            <descripcion>
              Descripción del producto P0001
            </descripcion>
            <cantidad>
              1.00
            </cantidad>
            <codigoUnidadMedida>
              7
            </codigoUnidadMedida>
            <precioUnitario>
              100.00
            </precioUnitario>
            <importeBonificacion>
              0.00
            </importeBonificacion>
            <codigoCondicionIVA>
              5
            </codigoCondicionIVA>
            <importeIVA>
              21.00
            </importeIVA>
            <importeItem>
              121.00
            </importeItem>
          </item>
        </arrayItems>
        <arraySubtotalesIVA>
          <subtotalIVA>
            <codigo>
              5
            </codigo>
            <importe>
              21.00
            </importe>
          </subtotalIVA>
        </arraySubtotalesIVA>
      </comprobante>
      Consultar un comprobante autorizado (consultarComprobante)
    </ser:consultarComprobanteResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 /soapenv:Envelope> 

##### Validaciones del Negocio 

**<consultaComprobanteRequest>...</consultaComprobanteRequest> Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante 1500 Podrá ser: 1 – Factura A 2 – Nota de Débito A 3 – Nota de Crédito A 6 – Factura B 7 – Nota de Débito B 8 – Nota de Crédito B 51 – Factura A con leyenda OPERACIÓN SUJETA A RETENCIÓN 52 – Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN 53 – Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN Consultar método _consultarTiposComprobante_ Rechaza numeroPuntoVenta 1501 Debe ser del tipo habilitado para el régimen CAE Codificación de Productos – Web Services ó del régimen CAEA. Consultar método _consultarPuntosVenta, consultarPuntosVentaCAE o consultarPuntosVentaCAEA._ Rechaza 

Consultar un comprobante autorizado (consultarComprobante) **Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante / numeroPuntoVenta / numeroComprobante 1503 Deberá obrar en las bases del organismo un comprobante con el tipo, punto de venta y número de comprobante indicados. Rechaza 

#### Consultar Tipos de Comprobantes (consultarTiposComprobante) 

Este método permite consultar los tipos de comprobantes habilitados en este WS. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposComprobanteRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
    </ser:consultarTiposComprobanteRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: 

Consultar Tipos de Comprobantes (consultarTiposComprobante) **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 

##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposComprobanteResponse>
      <arrayTiposComprobante>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayTiposComprobante>
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
        Consultar Tipos de Comprobantes (consultarTiposComprobante)
      </evento>
    </ser:consultarTiposComprobanteResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarTiposComprobanteResponse>** es del tipo **ConsultarTiposComprobanteResponseType** , que contiene los siguientes elementos **<consultarTiposComprobanteResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayTiposComprob ante Devuelve los diferentes tipos de comprobantes disponibles en este WS. S ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

##### Ejemplo para “Consultar Tipos de Comprobantes” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposComprobanteRequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
    </ser:consultarTiposComprobanteRequest>
  </soapenv:Body>
  Consultar Tipos de Comprobantes (consultarTiposComprobante)
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposComprobanteResponse>
      <arrayTiposComprobante>
        <codigoDescripcion>
          <codigo>
            1
          </codigo>
          <descripcion>
            Factura A
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            2
          </codigo>
          <descripcion>
            Nota de Débito A
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            3
          </codigo>
          <descripcion>
            Nota de Crédito A
          </descripcion>
          <codigoDescripcion>
            <codigo>
              6
            </codigo>
            <descripcion>
              Factura B
            </descripcion>
          </codigoDescripcion>
          <codigoDescripcion>
            <codigo>
              7
            </codigo>
            <descripcion>
              Nota de Débito B
            </descripcion>
          </codigoDescripcion>
          <codigoDescripcion>
            <codigo>
              8
            </codigo>
            <descripcion>
              Nota de Crédito B
            </descripcion>
          </codigoDescripcion>
          <codigoDescripcion>
            <codigo>
              51
            </codigo>
            Consultar Tipos de Comprobantes (consultarTiposComprobante)
            <descripcion>
              Factura A con leyenda OPERACIÓN SUJETA A RETENCIÓN
            </descripcion>
          </codigoDescripcion>
          <codigoDescripcion>
            <codigo>
              52
            </codigo>
            <descripcion>
              Nota de Débito A con leyenda OPERACIÓN SUJETA A RETENCIÓN
            </descripcion>
          </codigoDescripcion>
          <codigoDescripcion>
            <codigo>
              53
            </codigo>
            <descripcion>
              Nota de Crédito A con leyenda OPERACIÓN SUJETA A RETENCIÓN
            </descripcion>
          </codigoDescripcion>
          <codigoDescripcion>
            <codigo>
              88
            </codigo>
            <descripcion>
              Remito Electrónico de Tabaco Acondicionado (sólo para comprobantes asociados)
            </descripcion>
          </codigoDescripcion>
          <codigoDescripcion>
            <codigo>
              990
            </codigo>
            <descripcion>
              Remito Electrónico de Tabaco en Hebras (sólo para comprobantes asociados)
            </descripcion>
          </codigoDescripcion>
        </arrayTiposComprobante>
      </ser:consultarTiposComprobanteResponse>
    </soapenv:Body>
  </soapenv:Envelope>
```
 

#### Consultar Tipos de Documentos (consultarTiposDocumento) 

Este método retorna el universo de tipos de documentos de identidad, aceptados en el presente WS. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDocumentoRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
    </ser:consultarTiposDocumentoRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 

**<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 

##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDocumentoResponse>
      <arrayTiposDocumento>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayTiposDocumento>
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarTiposDocumentoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarTiposDocumentoResponse>** es del tipo ConsultarTiposDocumentoResponseType, que contiene los siguientes elementos **<consultarTiposDocumentoResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayTiposDocumento Devuelve todos los tipos de documentos de identidad permitidos. S ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

##### Ejemplo para Consultar Tipos de Documentos 

##### (consultarTiposDocumento) 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDocumentoRequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
    </ser:consultarTiposDocumentoRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDocumentoResponse>
      <arrayTiposDocumento>
        <codigoDescripcion>
          <codigo>
            0
          </codigo>
          <descripcion>
            CI Policía Federal
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            1
          </codigo>
          <descripcion>
            CI Buenos Aires
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            2
          </codigo>
          <descripcion>
            CI Catamarca
          </descripcion>
        </codigoDescripcion>
        . . .
      </arrayTiposDocumento>
    </ser:consultarTiposDocumentoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

#### Consultar Alícuotas de IVA (consultarAlicuotasIVA) 

Este método proporciona las diferentes Alícuotas de IVA disponibles en este WS. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarAlicuotasIVARequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
    </ser:consultarAlicuotasIVARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 

Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 

##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarAlicuotasIVAResponse>
      <arrayAlicuotasIVA>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayAlicuotasIVA>
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarAlicuotasIVAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarAlicuotasIVAResponse>** es del tipo **ConsultarAlicuotasIVAResponseType** , que contiene los siguientes elementos **<ConsultarAlicuotasIVAResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayAlicuotasIVA Devuelve el universo de alícuotas de IVA factibles. S ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

##### Ejemplo para “Consultar Alícuotas de IVA” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarAlicuotasIVARequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
    </ser:consultarAlicuotasIVARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarAlicuotasIVAResponse>
      <arrayAlicuotasIVA>
        <codigoDescripcion>
          <codigo>
            3
          </codigo>
          <descripcion>
            0%
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            4
          </codigo>
          <descripcion>
            10.5%
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            5
          </codigo>
          <descripcion>
            21%
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            6
          </codigo>
          <descripcion>
            27%
          </descripcion>
        </codigoDescripcion>
      </arrayAlicuotasIVA>
    </ser:consultarAlicuotasIVAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

#### Consultar Condiciones de IVA (consultarCondicionesIVA) 

Este método permite consultar las Condiciones de IVA que se pueden asociar a un item, tales como No Gravado, Exento, etc. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCondicionesIVARequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
    </ser:consultarCondicionesIVARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
Donde: 

**<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 

##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCondicionesIVAResponse>
      <arrayCondicionesIVA>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayCondicionesIVA>
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarCondicionesIVAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

Donde: **<consultarCondicionesIVAResponse>** es del tipo **ConsultarCondicionesIVAResponseType** , que contiene los siguientes elementos **<consultarCondicionesIVAResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayCondicionesIVA Devuelve las posibles condiciones de IVA que se pueden asociar a un item. S ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

##### Ejemplo para “Consultar Condiciones de IVA” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCondicionesIVARequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
    </ser:consultarCondicionesIVARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCondicionesIVAResponse>
      <arrayCondicionesIVA>
        <codigoDescripcion>
          <codigo>
            1
          </codigo>
          <descripcion>
            No gravado
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            2
          </codigo>
          <descripcion>
            Exento
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            3
          </codigo>
          <descripcion>
            0%
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            4
          </codigo>
          <descripcion>
            10.5%
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            5
          </codigo>
          <descripcion>
            21%
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            6
          </codigo>
          <descripcion>
            27%
          </descripcion>
        </codigoDescripcion>
      </arrayCondicionesIVA>
    </ser:consultarCondicionesIVAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

#### Consultar Condiciones de IVA Receptor 

#### (consultarCondicionesIVAReceptor) 

Este método permite consultar las Condiciones de IVA que se le pueden atribuir al receptor según el tipo de comprobante elegido al momento de autorizar el comprobante ya sea CAE o CAEA. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCondicionesIVAReceptorRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          string
        </cuitRepresentada>
      </authRequest>
      <consultaCondicionesIVAReceptorRequest>
        <codigoTipoComprobante>
          short
        </codigoTipoComprobante>
      </consultaCondicionesIVAReceptorRequest>
    </ser:consultarCondicionesIVAReceptorRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 

###### Donde: 

**<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación 

**Campo Descripción Obligatorio Tipo Longitu d** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentad a CUIT del Contribuyente que realiza la consulta S long 11 consultarCondici onesIVARecepto rRequest Filtros utilizados para realizar la consulta (Tipo de Comprobante a Autorizar) S 

###### ConsultaCondicionesIVARequ 

###### estType 

 -

##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCondicionesIVAReceptorResponse>
      <arrayCondicionesIVAReceptor>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayCondicionesIVAReceptor>
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
    </ser:consultarCondicionesIVAReceptorResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarCondicionesIVAReceptorResponse>** es del tipo **ConsultarCondicionesIVAReceptorResponseType** , que contiene los siguientes elementos **<consultarCondicionesIVAReceptorResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayCondicionesIVA Devuelve las posibles condiciones de IVA que puede adoptar el Receptor según el Tipo de Comprobante enviado. N ArrayCodigosDescripcionesType 

arrayErrores Si la solicitud fue rechazada, detalla el o los motivos que dieron origen al rechazo. N ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

##### Ejemplo para “Consultar Condiciones de IVA Receptor” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCondicionesIVAReceptorRequest>
      <authRequest>
        <token>
          token
        </token>
        <sign>
          sign
        </sign>
        <cuitRepresentada>
          30000000007
        </cuitRepresentada>
      </authRequest>
      <consultaCondicionesIVAReceptorRequest>
        <codigoTipoComprobante>
          6
        </codigoTipoComprobante>
      </consultaCondicionesIVAReceptorRequest>
    </ser:consultarCondicionesIVAReceptorRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCondicionesIVAReceptorResponse>
      <arrayCondicionesIVAReceptor>
        <codigoDescripcion>
          <codigo>
            4
          </codigo>
          <descripcion>
            IVA Sujeto Exento
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            5
          </codigo>
          <descripcion>
            Consumidor Final
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            7
          </codigo>
          <descripcion>
            Sujeto No Categorizado
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            10
          </codigo>
          <descripcion>
            IVA Liberado – Ley N° 19.640
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            15
          </codigo>
          <descripcion>
            IVA No Alcanzado
          </descripcion>
        </codigoDescripcion>
      </arrayCondicionesIVAReceptor>
    </ser:consultarCondicionesIVAReceptorResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Validaciones Excluyentes 

**Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante 196 En caso de no estar contemplado dentro de los tipos de comprobantes validos para el servicio Rechaza 

#### Consultar Monedas (consultarMonedas) 

Este método retorna el universo de Monedas disponibles en el presente WS, indicando código y descripción de cada una. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarMonedasRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
    </ser:consultarMonedasRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 

Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 

##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarMonedasResponse>
      <arrayMonedas>
        <codigoDescripcion>
          <codigo>
            string
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayMonedas>
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarMonedasResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarMonedasResponse>** es del tipo ConsultarMonedasResponseType, que contiene los siguientes elementos **<consultarMonedasResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayMonedas Devuelve todos los tipos de Monedas existentes. S CodigoDescripcionStringType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

##### Ejemplo para “Consultar Monedas” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarMonedasRequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
    </ser:consultarMonedasRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarMonedasResponse>
      <arrayMonedas>
        <codigoDescripcion>
          <codigo>
            DOL
          </codigo>
          <descripcion>
            Dólar Estadounidense
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            PES
          </codigo>
          <descripcion>
            Pesos Argentinos
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            002
          </codigo>
          <descripcion>
            Dólar Libre EEUU
          </descripcion>
        </codigoDescripcion>
        . . .
      </arrayMonedas>
    </ser:consultarMonedasResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

#### Consultar Cotización de Moneda (consultarCotizacionMoneda) 

Este método permite consultar la última cotización disponible para un determinado código de Moneda. Pudiéndose dar las siguientes situaciones: a) De existir la cotización devolverá el valor correspondiente. b) Si no existe cotización para la moneda indicada no retornará valor alguno. c) Si el código de moneda enviado es inválido devolverá un error. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCotizacionMonedaRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
      <codigoMoneda>
        string
      </codigoMoneda>
      <fechaCotizacion>
        date
      </fechaCotizacion>
    </ser:consultarCotizacionMonedaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 codigoMoneda Código de la Moneda por la cual se intenta consultar la última cotización disponible. S string 3 fechaCotizacion Fecha para la cual se quiere obtener la Cotización S date 

##### Mensaje de Respuesta 

**Esquema** 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCotizacionMonedaResponse>
      <cotizacionMoneda>
        decimal
      </cotizacionMoneda>
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
    </ser:consultarCotizacionMonedaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarCotizacionMonedaResponse>** es del tipo **ConsultarCotizacionMonedaResponseType** , que contiene los siguientes elementos: **<consultarCotizacionMonedaResponse>** 

**Campo/Grupo Descripción Obligatorio Tipo** cotizacionMoneda Devuelve la cotización de la moneda especificada. N decimal arrayErrores En caso de no existir el código de moneda por el que se pide la cotización devuelve un mensaje de error. N ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

##### Ejemplo para “Consultar Cotización de Moneda” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCotizacionMonedaRequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
      <codigoMoneda>
        DOL
      </codigoMoneda>
      <fechaCotizacion>
        AAAA-MM-DD
      </fechaCotizacion>
    </ser:consultarCotizacionMonedaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarCotizacionMonedaResponse>
      <cotizacionMoneda>
        3.943216
      </cotizacionMoneda>
    </ser:consultarCotizacionMonedaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

##### Validaciones del Negocio 

**<codigoMoneda> Campo Código de Error Validación NO es superada** codigoMoneda 1600 Deberá coincidir con alguno de los códigos de moneda disponibles. Consultar método _consultarMonedas_ Rechaza 

#### Consultar Unidades de Medida (consultarUnidadesMedida) 

Este método permite consultar las diferentes unidades de medida posibles de uso en este WS. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUnidadesMedidaRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
    </ser:consultarUnidadesMedidaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: 

**<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 

##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUnidadesMedidaResponse>
      <arrayUnidadesMedida>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayUnidadesMedida>
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarUnidadesMedidaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarUnidadesMedidaResponse>** es del tipo ConsultarUnidadesMedidaResponseType, que contiene los siguientes elementos **<consultarUnidadesMedidaResponse> Campo/Grupo Descripción Obligatorio Tipo** arrayUnidadesMedida Devuelve el universo de unidades de medida posibles de uso. S ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

##### Ejemplo para “Consultar Unidades de Medida” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUnidadesMedidaRequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
    </ser:consultarUnidadesMedidaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUnidadesMedidaResponse>
      <arrayUnidadesMedida>
        <codigoDescripcion>
          <codigo>
            0
          </codigo>
          <descripcion>
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            1
          </codigo>
          <descripcion>
            kilogramos
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            2
          </codigo>
          <descripcion>
            metros
          </descripcion>
        </codigoDescripcion>
        . . .
      </arrayUnidadesMedida>
    </ser:consultarUnidadesMedidaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

#### Consultar Puntos de Ventas (consultarPuntosVenta) 

Este método permite consultar los puntos de venta para ambos tipos de Código de Autorización (CAE y CAEA) gestionados por la CUIT emisora. De encontrar valores devuelve los puntos de venta y de no existir ninguno para la cuit emisora no retorna valor alguno. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
    </ser:consultarPuntosVentaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 

##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaResponse>
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

**Campo Descripción Obligatorio Tipo Long (máx )** numeroPuntoVenta Número de punto de venta S NumeroPun toVentaSim pleType 5 bloqueado Indica si el punto de venta se encuentra o no bloqueado. ‘Si’: Bloqueado, ‘No’: No Bloqueado. S SiNoSimple Type 1 fechaBaja Fecha en la que se dio de baja el punto de venta. Formato AAAA-MM-DD. N date -

##### Ejemplo para “Consultar Puntos de Ventas” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaRequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
    </ser:consultarPuntosVentaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaResponse>
      <arrayPuntosVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            13
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
          <fechaBaja>
            2010-10-01
          </fechaBaja>
        </puntoVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            1333
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
        </puntoVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            166
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
        </puntoVenta>
        . . .
      </arrayPuntosVenta>
    </ser:consultarPuntosVentaResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

#### Consultar Puntos de Ventas CAE (consultarPuntosVentaCAE) 

Este método permite consultar los puntos de venta habilitados para generar comprobantes con tipo de Código de Autorización CAE, comprendidos en el presente WS. De encontrar valores devuelve el detalle de los mismos y de no existir ninguno para la cuit emisora no devuelve valor alguno. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaCAERequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
    </ser:consultarPuntosVentaCAERequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 

Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 

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

**<arrayPuntosVenta>** es del tipo **ArrayPuntosVentaType,** que es un array de **<puntoVenta>** del tipo **PuntoVentaType**. **<puntoVenta> Campo Descripción Obligatori o Tipo Long (máx)** numeroPuntoVenta Número de punto de venta CAE S NumeroPun toVentaSim pleType 5 bloqueado Identifica si el punto de venta se encuentra o no bloqueado. ‘S’: Bloqueado, ‘N’: No Bloqueado. S SiNoSimple Type 1 fechaBaja Fecha en la que se dio de baja el punto de venta (si corresponde). Formato AAAAMM-DD N date -

##### Ejemplo para “Consultar Puntos de Ventas CAE” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarUnidadesMedidaRequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
    </ser:consultarUnidadesMedidaRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaCAEResponse>
      <arrayPuntosVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            123
          </numeroPuntoVenta>
          <bloqueado>
            Si
          </bloqueado>
        </puntoVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            199
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
        </puntoVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            1000
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
          <fechaBaja>
            2010-11-01
          </fechaBaja>
        </puntoVenta>
        . . .
      </arrayPuntosVenta>
    </ser:consultarPuntosVentaCAEResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

#### Consultar Puntos de Ventas CAEA (consultarPuntosVentaCAEA) 

Este método permite consultar los puntos de venta habilitados para generar comprobantes con tipo de Código de Autorización CAEA, comprendidos en el presente WS. De encontrar valores devuelve los puntos de venta para el Código de Autorización CAEA y de no existir ninguno para la cuit emisora no devuelve dato alguno. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaCAEARequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
    </ser:consultarPuntosVentaCAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 

##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaCAEAResponse>
      <arrayPuntosVenta>
        <puntoVenta>
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

**Campo Descripción Obligatorio Tipo Long (máx)** numeroPuntoVenta Número de punto de venta CAEA S NumeroPun toVentaSim pleType 5 bloqueado Identifica si el punto de venta se encuentra o no bloqueado. ‘S’: Bloqueado, ‘N’: No Bloqueado. S SiNoSimple Type 1 fechaBaja Fecha en la que se dio de baja el punto de venta (si corresponde). Formato AAAA-MM-DD. N date -

##### Ejemplo para “Consultar Puntos de Ventas CAEA” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaCAEARequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
    </ser:consultarPuntosVentaCAEARequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarPuntosVentaCAEAResponse>
      <arrayPuntosVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            1
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
        </puntoVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            2
          </numeroPuntoVenta>
          <bloqueado>
            Si
          </bloqueado>
          <fechaBaja>
            2010-10-01
          </fechaBaja>
        </puntoVenta>
        <puntoVenta>
          <numeroPuntoVenta>
            22
          </numeroPuntoVenta>
          <bloqueado>
            No
          </bloqueado>
          <fechaBaja>
            2010-11-01
          </fechaBaja>
        </puntoVenta>
        . . .
      </arrayPuntosVenta>
    </ser:consultarPuntosVentaCAEAResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

#### Consultar Tipos de Tributo (consultarTiposTributo) 

Devuelve los posibles códigos de tributos que puede contener un comprobante y su descripción. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposTributoRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
    </ser:consultarTiposTributoRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: 

**<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 

##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposTributoResponse>
      <arrayTiposTributo>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayTiposTributo>
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarTiposTributoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarTiposTributoResponse>** es del tipo **ConsultarTiposTributoResponseType** , que contiene los siguientes elementos **Campo/Grupo Descripción Obligatorio Tipo** arrayTiposTributo Devuelve el universo de Tributos. S ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

##### Ejemplo para “Consultar Tipos de Tributo” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposTributoRequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
    </ser:consultarTiposTributoRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposTributoResponse>
      <arrayTiposTributo>
        <codigoDescripcion>
          <codigo>
            01
          </codigo>
          <descripcion>
            impuestos nacionales
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            02
          </codigo>
          <descripcion>
            impuestos provinciales
          </descripcion>
        </codigoDescripcion>
        . . .
      </arrayTiposTributo>
    </ser:consultarTiposTributoResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

#### Consultar Tipos de Datos Adicionales (consultarTiposDatosAdicionales) 

Devuelve los posibles códigos de tipos de datos adicionales que puede contener un comprobante y sus respectivas descripciones. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDatosAdicionalesRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
    </ser:consultarTiposDatosAdicionalesRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 

Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 

##### Mensaje de Respuesta 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDatosAdicionalesResponse>
      <arrayTiposTributo>
        <codigoDescripcion>
          <codigo>
            short
          </codigo>
          <descripcion>
            string
          </descripcion>
        </codigoDescripcion>
      </arrayTiposTributo>
      <evento>
        <codigo>
          short
        </codigo>
        <descripcion>
          string
        </descripcion>
      </evento>
    </ser:consultarTiposDatosAdicionalesResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

Donde: **<consultarTiposDatosAdicionalesResponse>** es del tipo **ConsultarTiposDatosAdicionalesResponseType** , que contiene los siguientes elementos **Campo/Grupo Descripción Obligatorio Tipo** arrayTiposDatosAdicionales Devuelve el universo de Datos Adicionales permitidos. S ArrayCodigosDescripcionesType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

##### Ejemplo para “Consultar Tipos de Datos Adicionales” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDatosAdicionalesRequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
    </ser:consultarTiposDatosAdicionalesRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDatosAdicionalesResponse>
      <arrayTiposDatosAdicionales>
        <codigoDescripcion>
          <codigo>
            1
          </codigo>
          <descripcion>
            Datos adicionales para Entes Reguladores […]
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            2
          </codigo>
          <descripcion>
            Datos adicionales para Empresas Promovidas […]
          </descripcion>
        </codigoDescripcion>
        . . .
      </arrayTiposDatosAdicionales>
    </ser:consultarTiposDatosAdicionalesResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

#### Consultar Actividades Vigentes (consultarActividadesVigentes) 

Este método permite consultar las actividades vigentes para el contribuyente en las bases del organismo. Las mismas podran ser vinculadas de manera optativa a los comprobantes generados por CAE o CAEA mediante los métodos de autorizacion de comprobantes CAE e informacion de comprobantes CAEA. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarActividadesVigentesRequest>
      <authRequest>
        <token>
          string
        </token>
        <sign>
          string
        </sign>
        <cuitRepresentada>
          long
        </cuitRepresentada>
      </authRequest>
    </ser:consultarActividadesVigentesRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<authRequest>** es del tipo **AuthRequestType.** Contiene la información referente a la autenticación **Campo Descripción Obligatorio Tipo Longitud** token Token devuelto por el WSAA S string -sign Signature devuelta por el WSAA S string -cuitRepresentada CUIT del Contribuyente que realiza la consulta S long 11 

##### Mensaje de Respuesta 

**Esquema** 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarActividadesVigentesResponse>
      <arrayActividades>
        <actividad>
          <codigo>
            long
          </codigo>
          <orden>
            long
          </orden>
          <descripcion>
            string
          </descripcion>
        </actividad>
      </arrayActividades>
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
    </ser:consultarActividadesVigentesResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 Donde: **<consultarActividadesVigentesResponse>** es del tipo **ConsultarActividadesVigentesResponseType** , que contiene los siguientes elementos **Campo/Grupo Descripción Obligatorio Tipo** arrayActividades Retorna el conjunto de actividades vigentes para el contribuyente a la N ArrayActividadesVigentesType 

fecha de ejecución arrayErrores Si la solicitud fue rechazada, detalla el o los motivos que dieron origen al rechazo. N CodigoDescripcionType evento Contiene, de existir, un anuncio informativo del sistema. N CodigoDescripcionType 

##### Ejemplo para “Consultar Tipos de Datos Adicionales” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDatosAdicionalesRequest>
      <authRequest>
        <token>
          Un string
        </token>
        <sign>
          Un string
        </sign>
        <cuitRepresentada>
          66666666666
        </cuitRepresentada>
      </authRequest>
    </ser:consultarTiposDatosAdicionalesRequest>
  </soapenv:Body>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:consultarTiposDatosAdicionalesResponse>
      <arrayTiposDatosAdicionales>
        <codigoDescripcion>
          <codigo>
            1
          </codigo>
          <descripcion>
            Datos adicionales para Entes Reguladores […]
          </descripcion>
        </codigoDescripcion>
        <codigoDescripcion>
          <codigo>
            2
          </codigo>
          <descripcion>
            Datos adicionales para Empresas Promovidas […]
          </descripcion>
        </codigoDescripcion>
        . . .
      </arrayTiposDatosAdicionales>
    </ser:consultarTiposDatosAdicionalesResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

#### Dummy 

Permite verificar el funcionamiento del presente WS. 

##### Mensaje de Solicitud 

**Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header/>
  <soapenv:Body/>
</soapenv:Envelope>
```
 

##### Mensaje de Respuesta 

Retorna el resultado de la verificación de los elementos principales de infraestructura del servicio. **Esquema** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:dummyResponse>
      <appserver>
        string
      </appserver>
      <authserver>
        string
      </authserver>
      <dbserver>
        string
      </dbserver>
    </ser:dummyResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

Donde: **<dummyResponse>** detalla el resultado de la validación, contiene los siguientes campos: **<dummyResponse> Campo/Grupo Detalle Obligatorio Tipo** appserver Servidor de aplicaciones S string authserver Servidor de base de datos S string dbserver Servidor de autenticacion S string 

##### Ejemplo para “Dummy” 


```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header/>
  <soapenv:Body/>
</soapenv:Envelope>
```
 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://impl.service.wsmtxca.afip.gob.ar/service/">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:dummyResponse>
      <appserver>
        OK
      </appserver>
      <authserver>
        OK
      </authserver>
      <dbserver>
        OK
      </dbserver>
    </ser:dummyResponse>
  </soapenv:Body>
</soapenv:Envelope>
```
 

## Definición de tipos de datos 

### Simple Types 

**Type Tipo de dato primitivo Restricción** CodigoTipoAutorizacionSimpleType string Conjunto de valores permitidos: { 'A', 'E' } NumeroPuntoVentaSimpleType int Puede tomar los valores comprendidos en el intervalo desde 1 hasta 99998 NumeroComprobanteSimpleType long Valores comprendidos en el intervalo desde 1 hasta 99999999 ResultadoSimpleType string Conjunto de valores permitidos: { 'A', 'O', 'R' } SiNoSimpleType string Conjunto de valores permitidos: { 'S', 'N' } ImporteTotalSimpleType decimal Total de dígitos 15 (13 enteros y 2 decimales). Valor mínimo permitido 0 Valor máximo permitido 9999999999999.99 DecimalSimpleType decimal Total de dígitos 18 (12 enteros y 6 decimales). Valor mínimo permitido 0 Valor máximo permitido 999999999999.999999 ImporteSubtotalSimpleType decimal Total de dígitos 15 (13 enteros y 2 decimales). Valor mínimo permitido -9999999999999.99 Valor máximo permitido -9999999999999.99 PorcentajeSimpleTypedecimal Total de dígitos 5 (3 enteros y 2 decimales). Valor mínimo permitido 0 

Valor máximo permitido 100 

### Complex Types (genéricos) 

**ArrayCodigosDescripcionesType** es un Array de <codigoDescripcion> del tipo CodigoDescripcionType 

###### <codigoDescripcion> 

**Campo Descripción Obligatorio Tipo Longitud (máx)** codigo codigo S short 4 descripcion descripción S string 2000 **ArrayCodigosDescripcionesStringType** es un Array de <codigoDescripcion> que es del tipo <CodigoDescripcionStringType> **<codigoDescripcion> Campo Descripción Obligatorio Tipo Longitud (máx)** codigo codigo S string 4 descripcion descripción S string 2000 

**ComprobanteType** contiene los datos de un comprobante. **ComprobanteType Campo / Grupo Descripción Oblig Tipo Long** codigoTipoComprobante Tipo de comprobante. Para consultar los posibles valores ver método: _consultarTiposComprobante_ S short 3 numeroPuntoVenta Número del punto de venta por el cual se emite el comprobante S NumeroPunto VentaSimpleT ype 5 numeroComprobante Número del comprobante S NumeroComp robanteSimpl eType 8 fechaEmision Fecha de emisión del comprobante N date -

**Campo / Grupo Descripción Oblig Tipo Long** codigoTipoAutorizacion Indica el tipo del código de autorización. Ej. E: CAE (Código de Autorización Electrónico) A: CAEA (Código de Autorización Electrónico Anticipado) N CodigoTipoAu torizacionSim pleType 1 codigoAutorizacion Código de autorización (Código de Autorización Electrónico o Código de Autorización Electrónico Anticipado, según lo indique el campo codigoTipoAutorizacion) N long 14 fechaVencimiento Fecha de vencimiento del código de autorización N date -codigoTipoDocumento Código de documento del receptor del comprobante. Los posibles valores pueden ser consultados en el método _consultarTiposDocumento_ N short 2 numeroDocumento Número de documento del receptor del comprobante N long 11 condicionIVAReceptor Condición de IVA del Receptor la combinación de este campo y el campo consultarCondicionesIVARece ptor N short 2 importeGravado Importe neto total de conceptos gravados N ImporteSubtot alSimpleType 15.2 importeNoGravado Importe total de conceptos no gravados. N ImporteSubtot alSimpleType 15.2 importeExento Importe total de conceptos exentos N ImporteSubtot alSimpleType 15.2 importeSubtotal Importe subtotal del comprobante S ImporteSubtot alSimpleType 15.2 importeOtrosTributos Importe total de Otros Tributos N ImporteTotalSi mpleType 15.2 importeTotal Importe total del comprobante S ImporteTotalSi mpleType 15.2 codigoMoneda Código de la moneda en que se emite el comprobante. S string 3 cotizacionMoneda Tipo de cambio Total de dígitos 10 (4 enteros N decimal 10.6 

**Campo / Grupo Descripción Oblig Tipo Long** y 6 decimales) Mayor a cero. Máximo permitido: 9999.999999 cancelaEnMismaMoneda Extranjera Indicador que denota que el pago de la factura (no habilitado para Notas de Crédito y Débito) se realizara en la misma moneda extranjera que esta misma. Puede ser S, N o Vacío. Para mas detalle sobre este campo consultar el Anexo Monedas BNA N string 1 (máx) observaciones Observaciones comerciales (Importante: NO es necesario completar con espacios) N string 2000 (máx) codigoConcepto Concepto incluido en el comprobante. Valores permitidos: 1: Productos 2: Servicios 3: Productos y Servicios S short 2 fechaServicioDesde Fecha desde del servicio N date -fechaServicioHasta Fecha hasta del servicio N date -fechaVencimientoPago Fecha de vencimiento para el pago. N date -fechaHoraGen Fecha/Hora de generación, formato AAAA-MMDDTHH:MM:SS Campo exclusivo para comprobantes emitidos con puntos de venta CAEA N dateTime -arrayComprobantesAso ciados Array. Detalle de los comprobantes asociados al comprobante que se solicita autorizar. N ArrayCompro bantesAsocia dosType -periodoComprobantesA sociados Detalle del periodo de los comprobantes asociados al comprobante que se solicita autorizar N PeriodoComp robantesAsoci adosType -arrayOtrosTributos Array. Detalle de los tributos N ArrayOtrosTri -

**Campo / Grupo Descripción Oblig Tipo Long** alistados en el comprobante. butosType arrayItems Array. Detalle de los ítems que componen el comprobante. S ArrayItemsTy pe -arraySubtotalesIVA Array. Detalle de las Alícuotas de IVA e importes de IVA liquidados en el comprobante N ArraySubtotal esIVAType -arrayDatosAdicionales Array. Detalle de los datos adicionales incluidos en el comprobante con sus respectivos valores N ArrayDatosAd icionalesType -arrayCompradores Array. Detalle de los compradores incluidos en el comprobante para respaldar las operaciones de venta de bienes muebles registrables a un conjunto de adquirentes N ArrayCompra doresType -arrayActividades Array. Detalle de las actividades incluidas en el comprobante con sus respectivos códigos N ArrayActivida desType **<arrayComprobantesAsociados>** es del tipo **ArrayComprobantesAsociadosType,** que es un array de **<comprobanteAsociado>** del tipo **ComprobanteAsociadoType.** De corresponder, se detallan el o los comprobantes asociados al comprobante que se envía en la solicitud. Está compuesto por los siguientes campos: 

**<comprobanteAsociado> Campo Descripción Oblig Tipo Long** codigoTipoComprobante Código que identifica al tipo de comprobante. Valores permitidos: consultar método _consultarTiposComproban te_ S short 3 numeroPuntoVenta Número del punto de venta S NumeroPuntoV entaSimpleTyp e 5 numeroComprobante Número de Comprobante S NumeroCompro banteSimpleTy pe 8 cuit CUIT del emisor de comprobante N long 11 fechaEmision Fecha de Emisión del comprobante N date -**<periodoComprobantesAsociados>** es del tipo **periodoComprobantesAsociadosType** De corresponder, se detalla el período del o de los comprobantes asociados al comprobante que se envía en la solicitud. Está compuesto por los siguientes campos: **< periodoComprobantesAsociados > Campo Descripción Oblig Tipo Long** fechaDesde Fecha Desde del periodo Emisión del o de los comprobante/s asociado/s S date -

fechaHasta (^) Fecha Desde del periodo S Date -

**Campo Descripción Oblig Tipo Long** Emisión del o de los comprobante/s asociado/s **<arrayOtrosTributos>** es del tipo **ArrayOtrosTributosType,** que es un array de **<otroTributo>** del tipo **OtroTributoType.** De corresponder se detallan el o los tributos incluidos en el comprobante ingresado en la solicitud. Está formado por los siguientes campos: **<otroTributo> Campo Descripción Oblig Tipo Long** codigo Código de tributo. Para obtener los posibles valores consultar método _consultarTiposTributo_ S short 2 decripcion Descripción del tributo N string 25 baseImponible Base imponible S ImporteTotalSimpleType 15.2 importe Importe del tributo S ImporteTotalSimpleType 15.2 

**<arrayItems>** es del tipo **ArrayItemsType,** que es un array de **<Item>** del tipo **ItemType**. Detalle de los ítems que integran el comprobante. Todos los comprobantes deben contener al menos un ítem. Cada ítem se compone de los siguientes campos: 

###### <item> 

**Campo Descripción Oblig Tipo Long** unidadesMtx Unidad de Referencia del código Producto/Servicio. Cuando la comercialización de los productos se realice en presentaciones distintas a la unidad de consumo minorista o presentación al consumidor final, a la que hace referencia la codificación del producto, se deberán indicar las cantidades de unidades de consumo minoristas contenidas en la presentación que se comercializa. En caso que el producto ya se encuentre individualizado en su unidad de consumo minorista, la unidad de referencia deberá ser igual a UNO (1) N int 6 codigoMtx Código de N string 13 

**Campo Descripción Oblig Tipo Long** Producto/Servicio. Deberán corresponder a la estructura provista por la ASOCIACION ARGENTINA DE CODIFICACION DE PRODUCTOS COMERCIALES —CODIGO —, códigos GTIN 13, GTIN 12 y GTIN 8, correspondientes a la unidad de consumo minorista o presentación al consumidor final (máx) codigo Código interno asignado por la empresa (Importante: NO es necesario completar con espacios) N string 50 (máx) descripcion Descripción del Producto (Importante: NO es necesario completar con espacios) S string 4000 (máx.) cantidad Cantidad N DecimalSimpleTyp e 18.6 codigoUnidadMedida Unidad de medida. Consultar método _consultarUnidadesMedida_ S short 2 precioUnitario Precio Unitario. Para comprobantes clase “A” _no_ de incluir el IVA, en cambio para los clase “B” _si_ debe incluir IVA. N DecimalSimpleTyp e 18.6 importeBonificacion Importe Descuento o Bonificación N DecimalSimpleTyp e 18.6 codigoCondicionIVA Código de IVA. Para obtener los posibles valores consultar método _consultarCondicionesIVA_ S short 2 importeIVA Importe IVA según codigoCondicionIVA indicado N ImporteSubtotalSi mpleType 15.2 importeItem Importe total del ítem S ImporteSubtotalSi mpleType 15.2 

**<arraySubtotalesIVA>** es del tipo **ArraySubtotalesIVAType,** que es un array de **<subtotalIVA>** del tipo **SubtotalIVAType.** De corresponder se detallan las alícuotas de IVA incluidas en el comprobante con sus respectivos importes. Se compone de los siguientes campos: **<subtotalIVA> Campo Descripción Obligatorio Tipo Long** codigo Código de IVA. Para obtener los posibles valores consultar método _consultarAlicuotasIVA_ S short 2 importe Importe liquidado según la alícuota de IVA indicada en el campo <codigo> S ImporteSubtotalSimpleT ype 15.2 

**<arrayDatosAdicionales>** es del tipo **ArrayDatosAdicionalesType,** que es un array de **<datoAdicional>** del tipo **DatoAdicionalType.** De corresponder se detallan los datos adicionales incluidos en el comprobante con sus respectivos valores. Se compone de los siguientes campos: **<datoAdicional> Campo Descripción Obligatorio Tipo Long** T Identificador del tipo de dato adicional S short 4 c1 Campo multipropósito 1 (el significado de los campos c1…c6 dependerá del valor indicado en t) N string 50 (máx) c2 Campo multipropósito 2 N string 50 (máx) c3 Campo multipropósito 3 N string 50 (máx) c4 Campo multipropósito 4 N string 50 (máx) c5 Campo multipropósito 5 N string 50 (máx) c6 Campo multipropósito 6 N string 50 

**Campo Descripción Obligatorio Tipo Long** (máx) **<arrayCompradores>** es del tipo **ArrayCompradoresType,** que es un array de **<comprador>** del tipo **CompradoresType. <comprador> Campo Descripción Obligat orio Tipo Long.** codigoTipoDocu mento Código de documento del comprador. Los posibles valores pueden ser consultados en el método _consultarTiposDocumento_ S short 2 numeroDocum ento Número de documento del comprador S long 11 porcentaje Porcentaje de la titularidad del bien S PorcentajeSi mpleType 5.2 **ArrayActividadesType** es un Array de <actividad> que es del tipo <ActividadType> 

**<ActividadType> Campo Descripción Obligatorio Tipo Longitud (máx)** codigo Código de la Actividad registrada en las bases de ARCA S long 6 **ArrayActividadesVigentesType** es un Array de <actividad> que es del tipo <ActividadVigenteType> **<ActividadVigenteType> Campo Descripción Obligatorio Tipo Longitud (máx)** codigo Código de la Actividad registrada en las bases de ARCA S long 6 orden Orden dentro de las Actividades registradas en las bases de ARCA S long 3 descripcion Descripción S string 200 

**ConsultaCondicionesIVARequestType <ConsultaCondicionesIVARequestType> Campo Descripción Obligatorio Tipo Longitud (máx)** codigoTipoCompr obante Código de Tipo de Comprobante para el que se quiere obtener las posibles Condiciones de IVA que el Receptor podría adoptar al momento de la autorización del comprobante ya sea CAE o CAEA S short 3 

 Definición de tipos de datos 

## Anexo 

### Rubros de Actividades y Remitos 

###### Al momento de informar o autorizar un comprobante (CAE o CAEA), es posible asociar al mismo un 

###### cojunto de actividades que serán identificadas como pertenecientes a un “Rubro” si el mismo existe 

###### dentro del servicio, o a un Rubro “Otros” en caso de no existir. Los Rubros son excluyentes entre si, es 

###### decir un conjunto de actividades identificadas con un Rubro, no pueden pertenecer a otro. Para 

###### identificar a que Rubro pertenece un conjunto de actividades, existen dos posibilidades, que el 

###### conjunto completo de códigos de actividad pertenezca a un Rubro en particular o bien que además de 

###### esto ultimo existan algunas actividades que pertenecen al Rubro “Otros” (es decir aun no poseen un 

###### Rubro en particular). Casos Posibles: 

###### Caso 1 Se Informa o Autoriza (CAE o CAEA) un comprobante con los siguientes códigos de actividad: 

######  101040 MATANZA DE GANADO EXCEPTO EL BOVINO Y PROCESAMIENTO DE SU CARNE 

###### (INCLUYE GANADO OVINO, PORCINO, EQUINO, ETC.) 

######  101099 MATANZA DE ANIMALES N.C.P. Y PROCESAMIENTO DE SU CARNE, ELABORACIÓN DE 

###### SUBPRODUCTOS CÁRNICOS N.C.P. (INCLUYE PRODUCCIÓN DE CARNE FRESCA, REFRIGERADA O 

###### CONGELADA DE LIEBRE, CONEJO, ANIMALES DE CAZA, ETC.) 

###### Este caso es Valido, ya que todas las actividades declaradas pertenecen al Rubro “Compra y Venta de 

###### Carne”. 

###### Caso 2 Se Informa o Autoriza (CAE o CAEA) un comprobante con los siguientes códigos de actividad: 

######  101040 MATANZA DE GANADO EXCEPTO EL BOVINO Y PROCESAMIENTO DE SU CARNE 

###### (INCLUYE GANADO OVINO, PORCINO, EQUINO, ETC.) 

######  101099 MATANZA DE ANIMALES N.C.P. Y PROCESAMIENTO DE SU CARNE, ELABORACIÓN DE 

###### SUBPRODUCTOS CÁRNICOS N.C.P. (INCLUYE PRODUCCIÓN DE CARNE FRESCA, REFRIGERADA O 

###### CONGELADA DE LIEBRE, CONEJO, ANIMALES DE CAZA, ETC.) 

######  464141 – VENTA AL POR MAYOR DE PIELES Y CUEROS CURTIDOS Y SALADOS 

###### Este caso es Valido, ya que si bien, no todas las actividades declaradas pertenecen al Rubro “Compra y 

###### Venta de Carne”, las que no pertenecen tampoco tienen un Rubro identificado, pertenecen al Rubro 

###### “Otros”, en este caso la actividad de código 464141. 

###### Caso 3 Se Informa o Autoriza (CAE o CAEA) un comprobante con los siguientes códigos de actividad: 

 Definición de tipos de datos 

######  101040 MATANZA DE GANADO EXCEPTO EL BOVINO Y PROCESAMIENTO DE SU CARNE 

###### (INCLUYE GANADO OVINO, PORCINO, EQUINO, ETC.) 

######  101099 MATANZA DE ANIMALES N.C.P. Y PROCESAMIENTO DE SU CARNE, ELABORACIÓN DE 

###### SUBPRODUCTOS CÁRNICOS N.C.P. (INCLUYE PRODUCCIÓN DE CARNE FRESCA, REFRIGERADA O 

###### CONGELADA DE LIEBRE, CONEJO, ANIMALES DE CAZA, ETC.) 

######  461039 – VENTA AL POR MAYOR EN COMISIÓN O CONSIGNACIÓN DE ALIMENTOS, BEBIDAS Y 

###### TABACO N.C.P. 

###### Este caso es Invalido, ya que si bien, la mayoría de las actividades declaradas pertenecen al Rubro 

###### “Compra y Venta de Carne”, las que no pertenecen tienen un Rubro identificado, en este caso la 

###### actividad de código 461039 pertenecen al Rubro “Tabaco”, es por esto que no es posible identificar al 

###### conjunto de actividades por un Rubro o el otro y como consecuencia el comprobante será rechazado u 

###### observado según corresponda. 

###### En funcion del Rubro al que pertenezca el conjunto de Actividades, se permitirá asociar Remitos que se 

###### encuentren en una situación valida dentro de las bases de ARCA. Al ser opcional el conjunto de 

###### actividades, de no indicar por lo menos una, no se podrá identificar el Rubro y por ende no se podrá 

###### validar el o los remitos asociados en el caso de ser sectoriales (88, 990, 993, 994, 995, 997), lo cual 

###### generara un rechazo o una observación según corresponda (códigos 184, 284, 384, 484). Las 

###### asociaciones posibles son las siguientes: 

###### Rubro 

###### Codigos 

###### Actividades 

###### Descripcion de Actividades 

###### Tipos de Remitos 

###### Asociables 

###### Tabaco 

###### 461039 

###### VENTA AL POR MAYOR EN COMISIÓN O 

###### CONSIGNACIÓN DE ALIMENTOS, BEBIDAS Y 

###### TABACO N.C.P. 

###### Remito Tabaco 

###### Acondicionado 

###### (Codigo 88) o 

###### Remito Tabaco en 

###### Hebras (Codigo 

###### 990) 

###### 463300 

###### VENTA AL POR MAYOR DE CIGARRILLOS Y 

###### PRODUCTOS DE TABACO 

###### 120010 PREPARACIÓN DE HOJAS DE TABACO 

###### Remito Tabaco 

###### Acondicionado 

###### (Codigo 88) 

###### 120099 

###### ELABORACIÓN DE PRODUCTOS DE TABACO 

###### N.C.P. 

###### Remito Tabaco en 

###### Hebras (Codigo 

###### 990) 

Definición de tipos de datos 

 Definición de tipos de datos 

###### Rubro 

###### Codigos 

###### Actividades 

###### Descripcion de Actividades 

###### Tipos de Remitos 

###### Asociables 

###### Harina 

###### 469090 

###### VENTA AL POR MAYOR DE 

###### MERCANCÍAS N.C.P. 

###### Remito Harina en 

###### Camion (Codigo 

###### 993) o Remito 

###### Harina en Tren 

###### (Codigo 994) 

###### 471120 

###### VENTA AL POR MENOR EN 

###### SUPERMERCADOS 

###### 471130 

###### VENTA AL POR MENOR EN 

###### MINIMERCADOS 

###### 472120 

###### VENTA AL POR MENOR DE PRODUCTOS 

###### DE ALMACÉN Y DIETÉTICA 

###### 472190 

###### VENTA AL POR MENOR DE PRODUCTOS 

###### ALIMENTICIOS N.C.P., EN COMERCIOS 

###### ESPECIALIZADOS 

###### 106110 MOLIENDA DE TRIGO 

###### 463159 

###### VENTA AL POR MAYOR DE PRODUCTOS 

###### Y SUBPRODUCTOS DE MOLINERÍA 

###### N.C.P. 

###### 463180 

###### VENTA AL POR MAYOR EN 

###### SUPERMERCADOS MAYORISTAS DE 

###### ALIMENTOS 

###### 463199 

###### VENTA AL POR MAYOR DE PRODUCTOS 

###### ALIMENTICIOS N.C.P. 

 Definición de tipos de datos 

###### Rubro 

###### Codigos 

###### Actividades 

###### Descripcion de Actividades 

###### Tipos de Remitos 

###### Asociables 

###### Compra y Venta 

###### de Carne 

###### 101040 

###### MATANZA DE GANADO EXCEPTO EL 

###### BOVINO Y PROCESAMIENTO DE SU CARNE 

###### (INCLUYE GANADO OVINO, PORCINO, 

###### EQUINO, ETC.) 

###### Remito Carnico 

###### (Codigo 995) 

###### 101099 

###### MATANZA DE ANIMALES N.C.P. Y 

###### PROCESAMIENTO DE SU CARNE, 

###### ELABORACIÓN DE SUBPRODUCTOS 

###### CÁRNICOS N.C.P. (INCLUYE PRODUCCIÓN 

###### DE CARNE FRESCA, REFRIGERADA O 

###### CONGELADA DE LIEBRE, CONEJO, 

###### ANIMALES DE CAZA, ETC.) 

###### 101011 

###### MATANZA DE GANADO BOVINO (INCLUYE 

###### BÚFALOS) 

###### 101012 

###### PROCESAMIENTO DE CARNE DE GANADO 

###### BOVINO 

###### 463121 

###### VENTA AL POR MAYOR DE CARNES ROJAS 

###### Y DERIVADOS (INCLUYE ABASTECEDORES 

###### Y DISTRIBUIDORES DE CARNE) 

###### 461031 

###### OPERACIONES DE INTERMEDIACIÓN DE 

###### CARNE CONSIGNATARIO DIRECTO 

###### 461032 

###### OPERACIONES DE INTERMEDIACIÓN DE 

###### CARNE EXCEPTO CONSIGNATARIO 

###### DIRECTO (INCLUYE MATARIFES 

###### ABASTECEDORES DE CARNE, ETC.) 

 Definición de tipos de datos 

### Cotización Monedas del Banco de la Nación Argentina 

###### De acuerdo con el manejo de la cotización en los casos en que se indique que el pago de la factura se 

###### realizará en la misma moneda extranjera en la que está expresada, conforme a lo dispuesto por la 

###### Resolución General N° 5616/2024, se pone a disposición una tabla de monedas con las cotizaciones del 

###### Banco de la Nación Argentina. Para estas monedas, al indicar el campo 

###### "cancelaEnMismaMonedaExtranjera" al momento de informar o autorizar la factura (CAE o CAEA), se 

###### podrá obtener automáticamente la cotización correspondiente sin necesidad de especificarla a través 

###### del campo "cotizacionMoneda". Si se incluye este último campo, se ha especificado también 

###### "cancelaEnMismaMonedaExtranjera", si se trata de alguna de las monedas incluidas en la tabla y existe 

###### una cotización de dicha moneda en las bases de ARCA, la cotización informada deberá coincidir 

###### exactamente con la registrada en el campo "cotizacionMoneda". Monedas del Banco de la Nación 

###### Argentina para las que se puede obtener una cotización automática: 

###### Código Descripción 

###### 9 Franco Suizo 

###### 14 Coronas Danesas 

###### 15 Coronas Noruegas 

###### 16 Coronas Suecas 

###### 18 Dólar Canadiense 

###### 19 Yenes 

###### 21 Libra Esterlina 

###### 26 Dólar Australiano 

###### 60 Euro 

###### 64 Yuan 

###### DOL Dólar Estadounidense 

###### 2 Dólar Libre EEUU 

###### Cabe aclarar que la fecha utilizada para obtener la cotización al momento de informar o autorizar la 

###### factura (CAE o CAEA) se obtiene de la siguiente forma: 

######  Si la fecha de emisión de la factura es mayor o igual a la fecha actual, se toma como base esta 

###### ultima y se obtiene el día hábil anterior a la misma. 

######  Si la fecha de emisión de la factura es menor a la fecha actual, se toma como base la fecha de 

###### emisión del comprobante y se obtiene el día hábil anterior a la misma. 

 Definición de tipos de datos 

###### En cualquier caso para acceder a esta funcionalidad de calculo automático de cotización se debe enviar 

###### el campo "cancelaEnMismaMonedaExtranjera", la moneda especificada debe pertenecer a la tabla y 

###### adicionalmente debe haber cotización para la fecha calculada mas arriba. 

 Definición de tipos de datos 

### Histórico de Modificaciones 

Versión Fecha Descripción V0 09/09/2010 Versión inicial del documento V0.1 18/03/2011 Versión correspondiente al Release 0.1 Agregados: a) Método Autorizar un Ajuste IVA CAE (autorizarAjusteIVA) b) Método Informar un Ajuste IVA CAEA (informarAjusteIVACAEA) c) Método Consultar Tipos de Datos Adicionales (consultarTiposDatosAdicionales). d) En el método para autorizar un comprobante CAE se agregaron los controles correspondientes a los errores 131,132,133,134,135 y 145 en validaciones excluyentes (rechazo). e) En el método para autorizar un comprobante CAE se agregó el control correspondiente al error 130 en validaciones no excluyentes (observación). f) En el método para autorizar un comprobante CAE se agregó el control correspondiente al error 202 para el número de punto de venta de comprobante asociado, validaciones excluyentes (rechazo). g) En el método para autorizar un comprobante CAE se agregaron los controles correspondientes a los errores 402 y 403 para el campo <codigo> de <subtotalIVA>, validaciones excluyentes (rechazo). h) En el método informar un comprobante CAEA se agregaron los controles correspondientes a los errores 734, 735, 737, 738, 749, 803, 1002, y 1003. i) En las validaciones de negocio para el método informar un CAEA como no utilizado para un punto de venta, se agregaron los controles correpondientes a 

Definición de tipos de datos los errores 1206 y 1207. j) En las validaciones de negocio para el método informar un CAEA como no utilizado, se agregó el control correpondiente al error 1208. Modificaciones: k) Se habilitó la condición de sujeto no categorizado para receptores de comprobantes B. l) Se cambiaron redacciones de descripciones de errores y validaciones para su mejor interpretación. m) La logitud del campo <codigoMtx> se pasó 14 a 13 posiciones. n) Se agrego el array opcional de datos adicionales a la estructura de ComprobanteType. o) El campo <importeOtrosTributos> se pasó de obligatorio a no obligatorio. p) En el método Consultar Cotización Moneda (consultarCotizacionMoneda), se cambió el número de código de error 1500 por 1600. q) En el método para autorizar un comprobante CAE, se cambió y modificó el error 128 de validaciones no excluyentes (observación) a excluyentes (rechazo). r) En el método para informar un comprobante CAEA se cambió el resultado de la validación de Rechaza a Observa para los controles correspondientes a los errores 708 y 800. s) En el método para informar un comprobante CAEA se cambió el resultado de la validación de Observa a Rechaza para el control correspondiente al error 718. Eliminados: a) En las validaciones excluyentes de negocio para el método autorizar comprobantes, se sacaron las validaciones correspondientes a los códigos de error 118 y 119 por 

Definición de tipos de datos pertenecer a validaciones de formato. b) En las validaciones de negocio excluyentes para el método Solicitar CAEA, se eliminó el control correspondeinte al error 10023. c) En las validaciones de negocio excluyentes y no excluyentes para el método informar un comprobante CAEA, se eliminaron los controles correspondientes a los errores 711, 712, 716 y 1113. d) En las validaciones de negocio para el método informar un CAEA como no utilizado para un punto de venta, se eliminó el control correpondiente al error 1202. V0.2 04/08/2014 Versión correspondiente al Release 0.2 Agregados: a) En el método para autorizar un comprobante CAE se agregó el control correspondiente al error 405 en validaciones excluyentes (rechazo). b) En el método para autorizar un comprobante CAEA se agregó el control correspondiente al error 1005 en validaciones no excluyentes (observación). Modificaciones: a) En los métodos para autorizar un comprobante CAE y ajuste IVA CAE, se cambiaron los errores 109 y 134 de validaciones excluyentes (rechazo) a no excluyentes (observación). b) En el método para autorizar un comprobante CAE se modificaron los errores 515, 517, 518 y 519 para contemplar la unidad de medida 95 (anulación) c) En el método para informar un comprobante CAEA se modificaron los errores 1116, 1118, 1119 y 1120 para contemplar la unidad de medida 95 (anulación) 

Definición de tipos de datos Eliminados: a) En las validaciones excluyentes de negocio para el método autorizar comprobantes, se sacó la validación correspondiente al código de error 504 por pertenecer a validaciones de formato. V0.3 01/01/2016 Versión correspondiente al Release 0.3 Agregados: a) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA CAE se agregaron los errores 323, 324 y 325 que corresponden a los nuevos datos adicionales. Modificaciones: a) En los métodos para autorizar un comprobante CAE se cambiaron los errores 100, 110, 126, 128, 129, 130, 134, 200, 401, 514, 515, 516, 517, 519 debido a que se agregaron nuevos tipos de comprobantes. b) En el método ajuste IVA CAE se modificó el error 136, 126, 128, 129, 130, 134, 136, 200, 514, 529 y 530 para incluir a los nuevos tipos de comprobantes. c) En los métodos para autorizar un comprobante CAE y ajuste IVA CAE se modificó el error 322 para incluir a los nuevos datos adicionales. V0.4 13/09/2016 Versión correspondiente al Release 0.4 Agregados: a) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se agregaron los códigos: 750, 751 y 752 en validaciones no excluyentes (observación). Modificaciones: _a)_ El código 10004 correspondiente a validaciones sobre el emisor ahora es un motivo de observación y se aplica sólo a 

Definición de tipos de datos solicitud de CAEA. _b)_ En _CAEAResponseType_ se agrega el array no obligatorio _arrayObservaciones_ V0.5 15/03/2017 Versión correspondiente al Release 0.5 Agregados: a) En el elemento <comprobanteAsociado> se agregó el campo opcional <cuit> b) En las validaciones de los métodos para autorizar un comprobante y ajuste IVA se agregaron los códigos: 203, 204, 205, 206 y 207 en validaciones excluyentes. c) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se agregaron los códigos: 803 y 804 en validaciones excluyentes. d) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se agregaron los códigos: 805, 806 y 807 en validaciones no excluyentes (observación). Modificaciones: a) Se agregaron los códigos de tipos de comprobante 88 y 990 (Remitos de Tabaco) como valores permitidos en comprobantes asociados Eliminados: a) En las validaciones de los métodos para autorizar un comprobante y ajuste IVA se eliminó el código 126. b) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se eliminó el código 714. V0.6 28/08/2017 Versión correspondiente al Release 0.6 Agregados: a) En _ComprobanteType_ se agregó la estructura opcional <arrayCompradores> b) En las validaciones de los métodos para autorizar un comprobante y ajuste IVA se 

Definición de tipos de datos agregaron los códigos: 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431 y 432 en validaciones excluyentes. c) En las validaciones de los métodos para informar un comprobante CAEA e informar un ajuste de IVA CAEA, se agregó el código 753 en validaciones excluyentes. V0.7 04/08/2018 Versión correspondiente al Release 0.7 Agregados: a) En _ComprobanteType_ se agregó el elemento opcional <fechaHoraGen> b) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se agrego el código 146 en validaciones excluyentes c) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se agregó el código 754 en validaciones excluyentes y los códigos 755 y 756 en validaciones no excluyentes d) En las validaciones del método para solicitar un CAEA se agregaron los códigos: 10025 y 10026 en validaciones no excluyentes Modificaciones: a) En las validaciones del método para autorizar un comprobante CAE y ajuste IVA se modificó la validación con código 103 para el concepto “Productos” b) En las validaciones del método para solicitar un CAEA se modificó el rango de la fecha de envío (validación código 602) c) En las validaciones con códigos: 700, 718, 719, 733, 734, 738, 740, 803, 1112, 1130 y 1131 se eliminaron las observaciones relacionadas a comprobantes A con leyenda OPERACIÓN SUJETA A RETENCIÓN d) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se incrementó el tope de comprobantes tipo B de $1000 a $5000 (validación código 128) e) En las validaciones de los métodos para 

Definición de tipos de datos informar un comprobante CAEA y ajuste IVA CAEA se incrementó el tope de comprobantes tipo B de $1000 a $5000 (validación código 718) Eliminados: a) En las validaciones del método para solicitar un CAEA se eliminaron los códigos 603 y 10004 b) En las validaciones de los métodos para informar un comprobante CAEA e informar un ajuste de IVA CAEA se eliminó el código 752 V0.8 01/10/2018^ Versión correspondiente al Release 0.8 Modificaciones: a) Se modificó el tipo de datos base de NumeroPuntoVentaSimpleType de short a int, y el valor máximo permitido de 9999 a 99998. V0.9 01/05/2019^ Versión correspondiente al Release 0.9 Modificaciones: a) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se incrementó el tope de comprobantes tipo B de $5000 a $10000 (validación código 128) b) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se incrementó el tope de comprobantes tipo B de $5000 a $10000 (validación código 718) V0.10 01/09/2019^ Versión correspondiente al Release 0.10 Agregados: a) Se agrega la posibilidad de autorizar comprobantes CAE para el Régimen de Factura Electrónica de Crédito MiPyMe. Tipos de comprobantes 201, 202, 203, 206, 207 y 208. 

Definición de tipos de datos b) En el elemento <comprobanteAsociado> se agregó el campo opcional <fechaEmision> c) En las validaciones de los métodos para autorizar un comprobante CAE se agregaron las validaciones excluyentes correspondientes a la emisión de Factura Electrónica de Crédito MiPyME. Códigos: 147 a 157, 208 a 223, 302, 326 a 333, 433. d) En las validaciones de los métodos para informar un comprobante CAEA se agregaron las validaciones excluyentes y no excluyentes correspondientes a la emisión de Factura Electrónica de Crédito MiPyME. Códigos: 757 a 775, 808 a 823, 923 a 931. Modificaciones: a) Se agregan nuevos tipos de comprobantes para este sistema. Ver _consultarTiposComprobantes_ b) Se agregan nuevos tipos de datos adicionales para el Régimen de Factura Electrónica de Crédito MiPyMe. Ver _consultarTiposDatosAdicionales_ V0.11 16/01/2020^ Versión correspondiente al Release 0.11 Agregados: a) En las validaciones de los métodos para autorizar un comprobante CAE se agregaron las validaciones excluyentes correspondientes a la emisión de Factura Electrónica de Crédito MiPyME. Códigos:158. b) En las validaciones de los métodos para informar un comprobante CAEA se agregaron las validaciones excluyentes correspondientes a la emisión de Factura Electrónica de Crédito MiPyME. Códigos:776. V0.12 12/03/2020^ Versión correspondiente al Release 0.12 Modificaciones: 

Definición de tipos de datos a) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se incrementó el tope de comprobantes tipo B al monto en pesos resultante según RG4444 (validación código 128) b) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se incrementó el tope de comprobantes tipo B al monto en pesos resultante según RG4444 (validación código 718) V0.13 01/07/2020^ Versión correspondiente al Release 0.13 Adecuaciones en la autorización de notas de débito y crédito a partir de la obligatoriedad de informar comprobante asociado según RESOLUCIÓN GENERAL N° 4.540/2019 Modificaciones: a) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se incorporan las validaciones excluyentes con códigos: 159 a 162, 224 a 225, y 2200 a 2201. b) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se incorporan las validaciones NO excluyentes con códigos: 2202. c) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se incorporan para el régimen general las validación excluyentes (ya existentes del régimen de factura de crédito): 211, 220 a 223. d) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se quita la validación no excluyente con código 201. e) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se incorporan las validaciones excluyentes con códigos: 777 a 780, 824 a 825, y 2800 a 2801. 

Definición de tipos de datos f) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se incorporan las validaciones NO excluyentes con códigos: 2802. g) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se incorporan para el régimen general las validación excluyentes (ya existentes del régimen de factura de crédito): 811, 820 a 823. V0.14 25/11/2020^ Versión correspondiente al Release 0.14 Se agrega la obligatoriedad de informar el dato adicional 27 para el Régimen de Factura Electrónica de Crédito MiPyMe. Tipos de comprobantes 201 y 206. Agregados: a) En las validaciones de los métodos para autorizar un comprobante CAE se agregaron las validaciones excluyentes correspondientes a la emisión de Factura Electrónica de Crédito MiPyME. Códigos: 334 a 336. b) En las validaciones de los métodos para informar un comprobante CAEA se agregaron las validaciones excluyentes y no excluyentes correspondientes a la emisión de Factura Electrónica de Crédito MiPyME. Códigos: 932 a 934. V0.15 05/04/2021^ Versión correspondiente al Release 0.15 Se agregan validaciones sobre emisores y receptores apócrifos. Códigos 10005, 10006, 163 y 781. V0.16 03/06/2021^ Versión correspondiente al Release 0.16 Adecuaciones Ley "REGIMEN DE SOSTENIMIENTO E INCLUSIÓN FISCAL PARA PEQUEÑOS COTRIBUYENTES " Modificaciones: a) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste 

Definición de tipos de datos IVA se agregó validación de observación con código 164 al autorizar un comprobante A o A con leyenda OPERACIÓN SUJETA A RETENCIÓN a un receptor monotributista. b) En las validaciones de los métodos para autorizar un comprobante CAE y ajuste IVA se adecuaron las validaciones con códigos 130, 155, 156 y 431. c) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se agregó validación de observación con código 782 al informar un comprobante A o A con leyenda OPERACIÓN SUJETA A RETENCIÓN a un receptor monotributista. d) En las validaciones de los métodos para informar un comprobante CAEA y ajuste IVA CAEA se adecuaron las validaciones con códigos 734, 762 y 763. e) Se modifico la validación 431 para que en los tipos de comprobante A o A con leyenda OPERACIÓN SUJETA A RETENCIÓN en caso de compradores multiples, al menos uno de ellos sea Monotributista o Responsable Inscripto V0.17 13/08/2021^ Versión correspondiente al Release 0.17 Modificaciones: a) Se habilita la posibilidad de emitir Facturas Electronicas de Credito de Tipo B (Cod. 206) CAE o CAEA a Receptores Cuya Condición Frente al IVA sea Responsable Inscripto o Monotributista. Anteriormente solo se daba esta posibilidad a Recepotres IVA Excentos. Se modificaron las validaciones asociadas a los códigos 156 y 763. V0.18 20/09/2022^ Versión correspondiente al Release 0.18 – Adecuaciónes para las RG 5259/2022 y la RG 5264/2022 de Vinculación de Remitos Electronicos. Las validaciones se harán efectivas a partir de las fechas:  RG 5259/2022 – Sector Carnico: 

Definición de tipos de datos Optativas a partir del 15/11/2022 y Obligatorias a partir del 15/12/2022  RG 5264/2022 – Sector Harinero: Optativas a partir del 01/02/2023 y Obligatorias a partir del 01/03/2023 Modificaciones: a) Se agrega un nuevo método consultarActividadesVigentes con el objetivo de poder obtener aquellas actividades vigentes para el contribuyente, que se encuentren registradas en las bases de ARCA b) Se agrega la opción de asociar un conjunto de actividades al comprobante dadas por un array, tanto para autorizar o informar comprobantes CAE o CAEA o ajustes de IVA CAE o CAEA c) Se agregan nuevos códigos de errores y observaciones para autorizar o informar comprobantes o ajustes de IVA de CAE o CAEA por validaciones en funcion de las actividades y los tipos de remitos asociados al comprobante.  Codigos CAE Autorizacion de Comprobantes: 165, 166, 167, 168, 170, 171, 172, 173, 175, 176, 177, 178, 180, 181, 182, 183, 184, 185, 186.  Codigos CAE Autorizacion de Ajuste de IVA: 165, 266, 267, 268, 270, 271, 272, 273, 275, 276, 277, 278, 280, 281, 282, 283, 284, 285, 286.  Codigos CAEA Información de Comprobantes: 165, 366, 367, 368, 370, 371, 372, 373, 375, 376, 377, 378, 380, 381, 382, 383, 384, 385, 386.  Codigos CAEA Información de Ajuste de IVA: 165, 466, 467, 468, 470, 471, 472, 473, 475, 476, 477, 478, 480, 481, 482, 483, 484, 485, 486. d) Se agrega un Anexo de Rubros de Actividades y Remitos para mayor detalle de las validaciones asociadas a los códigos 

Definición de tipos de datos de errores y observaciones del punto c) e) Se modifica el método de consultaComprobante para que en caso de tener actividades asociadas al comprobante las retorne V0.18.1 29/12/2022^ Versión correspondiente al Release 0.18.1 Modificaciones: a) Se modifica la validación correspondiente al código 119 (cotización de moneda). No podrá ser superior en un 200% del que suministra ARCA como orientativo de acuerdo a la cotización oficial V0.19 16/02/2023^ Versión correspondiente al Release 0.19 Modificaciones: a) Se agrego el Tipo de Dato Adicional Codigo 5 Cómputo IVA Crédito Fiscal – Perteneciente a la RG4520/19 con las correspondientes validaciones de su único campo Motivo de Excepcion: 337, 338, 339, 935, 936, 937 b) Se agrega sección “2.2 Sitio de consulta y canal de atención” V0.20 21 /^07 /2023^ Versión correspondiente al Release 0. 20 Modificaciones: a) Se agregan nuevos códigos de observación (504 y 1104) para indicar si los <codigoMtx> de los items no corresponda con un GTIN registrado, activo o vigente, tanto para autorizar como para informar comprobantes CAE o CAEA. b) Para pruebas en ambiente de 

Definición de tipos de datos homologación de las validaciones, se podrán utilizar los Códigos Genéricos establecidos en el Apartado B, del Anexo VII de la Resolución General AFIP N° 2.904/2010. V0. 20 .1 27 /^11 /^2023 Versión correspondiente al Release 0.20.1 Modificaciones: a) Se modifica la validación correspondiente al código 119 (cotización de moneda). No podrá ser superior en un 400 % del que suministra ARCA como orientativo de acuerdo a la cotización oficial V0. 20 .2 20 /^12 /^2023 Versión correspondiente al Release 0.20.2 Modificaciones: b) Se modifica la validación correspondiente al código 119 (cotización de moneda). No podrá ser inferior en un 2 % del que suministra ARCA como orientativo de acuerdo a la cotización oficial 

###### V0.21.2 20 /^12 /2023^ Versión correspondiente al Release 0.21.2 

###### Modificaciones: 

 c) Se agregan nuevos códigos de observación (169, 187, 783, 784) para indicar si el emisor tiene pendiente de presentación el formulario de habilitación de comprobantes o su fecha de presentación es anterior a tu alta en IVA. d) Se reutilizan los códigos de error 100 y 136 (al autorizar un comprobante o efectuar un ajuste de IVA, ambos CAE), y los códigos de observación 700 y 740 (al informar un comprobante o efectuar un 

 Definición de tipos de datos ajuste de IVA, ambos CAEA) para indicar los casos donde el contribuyente no se encuentre habilitado a emitir comprobantes A, A con leyenda PAGO EN CBU INFORMADA o A con leyenda OPERACIÓN SUJETA A RETENCIÓN c) Se agregan nuevos códigos de observación (188, 189, 785, 786) para indicar si la CUIT del receptor existe en el padrón del Organismo. d) Se agregan nuevos códigos de observación (194, 195, 791, 792) para indicar si queriendo autorizar o informar una Nota de Crédito, el importe de la misma supera el monto del o los comprobante/s asociado/s que estás ajustando 

V0.22.0 (^) 15/08/2024 Mejoras Técnicas para el Servicio 

###### V0.25.0 17 /^03 /2025^ Versión correspondiente al Pago en Moneda Extranjera 

###### Resolución General N° 5616/2024 

###### Modificaciones: 

 a) Se agrega un nuevo método para consultar las posibles combinaciones de Tipo de Comprobante y Condición de IVA del Receptor a enviar al momento de Autorizar o Informar el comprobante (CAE o CAEA). Ver consultarCondicionesIVAReceptor. Codigo de Error 196 b) Se modifico el metodo consultarCotizacionMoneda para agregar el campo obligatorio fechaCotizacion indicando la fecha para la cual se quiere obtener la misma c) Se agregan los campos optativos condicionIVAReceptor y cancelaEnMismaMonedaExtranjera al mismo tiempo que se vuelve optativo el campo cotizacionMoneda para los metodos autorizarComprobante, autorizarAjusteIVA, informarComprobante, informarAjusteIVA 

 Definición de tipos de datos y consultarComprobante. Ver los errores y observaciones asociados a cada: 

1. condicionIVAReceptor. A partir del 6 de     abril de 2025 podrá enviarse de forma     opcional el campo Condición Frente al     IVA del receptor, hasta tanto entre en     vigencia su obligatoriedad     reglamentada por la Resolución     General N° 5616, en cuyo momento     pasará a rechazar la emisión de     comprobantes sin este dato:      Observaciones: 190, 191, 290, 291,        390, 391, 490 y 491 

2. codigoMoneda, cotizacionMoneda,     cancelaEnMismaMonedaExtranjera:      Errores: 117, 118, 119, 120, 164,        169, 192, 194, 195, 710      Observaciones: 122, 174, 175, 181,        182, 726 

###### V0.25.2 06/06/2025^ Será obligatorio el campo Condición Frente al IVA del 

###### receptor, atento a la entrada en vigencia reglamentada 

###### por la Resolución General N°5616. Por tal motivo los 

###### códigos de observación 190, 191, 290, 291, 390 y 490 

###### pasan ahora a ser de error, mientras que 391 y 491 

###### permanecen como observaciones. 

###### V0.25.4 01 /^12 /2025^ Versión correspondiente al reemplazo de los 

###### comprobantes clase “M”. Se actualiza el método 

###### consultarTiposComprobante y los siguientes códigos 

###### para contemplar el cambio: 

######  Códigos de Observación: 130, 134, 163, 169, 

###### 187, 718, 734, 738, 772, 781, 783, 784, 793, 794, 

###### 800 

######  Códigos de Error: 128, 129, 196, 197, 200, 431, 

###### 733 

###### V0.25.5 16/12/2025 Versión correspondiente al agregado de una serie de 

###### controles sobre la CUIT o Numero de Documento del 

###### Receptor del comprobante asi como tambien a los 

###### Compradores multiples si los hubiera que se agregan a 

 Definición de tipos de datos 

###### continuación: 

######  CUIT del Receptor/Comprador comprobante 

###### informada inactivada o invalidada: 

- Códigos de Error Facturas CAE: 253, 261. 

- Códigos de Observación Notas de Crédito 

###### CAE: 253, 261. 

- Códigos de Observación CAEA: 140, 141. 

######  CUIT del Receptor/Comprador del comprobante 

###### se encuentre limitada por haber sido 

###### caracterizada como sujeto no confiable en 

###### materia de Seguridad Social: 

- Códigos de Error Facturas CAE: 265, 297. 

- Códigos de Observación Notas de Crédito 

###### CAE: 265, 297. 

- Códigos de Observación todos los 

###### Comprobantes CAEA: 142, 143. 

######  CUIT del Receptor/Comprador del comprobante 

###### considerada Apócrifa (actualización de 

###### validaciones. Existentes): 

- Códigos de Error CAE: 303, 304. 

- Códigos de Observación CAEA: 144, 145. 

######  Número de Documento del 

###### Receptor/Comprador marcado como fallecido y 

###### no sucesión indivisa. 

- Códigos de Observación todos los 

###### Comprobantes CAEA: 146, 148, 311 y 312. 

V0.25.6 (^) 01/06/2026 En cumplimiento con la RG 5782, la cual establece 

###### cambios en la modalidad de Código de Autorización 

###### Electrónico Anticipado (CAEA), se implementarán las 

###### siguientes modificaciones a partir del 01/06/2026: 

- Eliminación de Empadronamiento CAEA: se 

###### elimina el requisito de empadronamiento para la 

###### utilización del CAEA. Para tal fin entraran en 

###### desuso las siguientes observaciones: 10020, 

###### 10022 y 10030. 

V0.25.7 (^) 01/07/2026 En cumplimiento con la RG 5782, la cual establece 

###### cambios en la modalidad de Código de Autorización 

###### Electrónico Anticipado (CAEA), se implementarán las 

###### siguientes modificaciones a partir del 01/08/2026: 

 Definición de tipos de datos 

- Cambio de condición: todos los puntos de venta 

###### CAEA pasarán a ser considerados como 

###### Contingencia. 

- Vinculación de domicilio: Los puntos de venta 

###### CAEA deberán estar asociados a un domicilio de 

###### factura electrónica (CAE o Controlador Fiscal de 

###### nueva generación). 

- Obligatoriedad de campos: El campo 

###### fechaHoraGen pasará a ser de integración 

###### obligatoria. Para tal fin la observación 755 

###### entrara en desuso y a partir de la fecha de 

###### implementación los casos pasaran a ser 

###### rechazados por el código de error 754 

- Con la implementación de la nueva versión, la 

###### gestión de códigos para la solicitud de CAEA se 

###### actualizará de la siguiente manera: 

- Altas: Se agregan los códigos 10027 de error 

###### y 10028 de observación. 

- Modificaciones: Se reconfigura el código de 

###### observación 10026. 

 Definición de tipos de datos 

### Aclaraciones y Definiciones 

 (1) No se especifica la longitud del atributo token y del atributo sign porque es variable y depende de la respuesta del WSAA. (2) Formato para el tipo de dato date es: AAAA-MM-DD, sin uso horario. (3) El separador de decimales es el punto “. ” (4) El método de redondeo a utilizar es Round Half Even. (5) Error Absoluto y Error Relativo Error Absoluto eabs : Es la diferencia entre el valor medido (calculado) y el valor real Error Relativo erel : Es el cociente entre el valor error absoluto y el valor real. En ambos casos se tomará el valor absoluto, es decir el signo resultante de la operación no se considerará. 

### Abreviaturas 

 (1) CAE: Código de Autorización Electrónico. (2) CAEA: Código de Autorización Electrónico Anticipado. (3) WSDL: Web Services Description Language. (4) WS: Web Services. 

