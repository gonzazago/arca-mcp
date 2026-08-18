### Alcance 

Comprende desde la definición del WSDL hasta las validaciones de negocio que realizará cada servicio. El presente WS permite llevar a cabo las siguientes operaciones:  Autorizar Comprobante CAE  Solicitar CAEA  Informar un Comprobante con tipo de código de autorización: CAEA  Informar un CAEA como no utilizado en ningún comprobante  Informar un CAEA como no utilizado para un punto de venta  Consultar: o Último comprobante Autorizado para un determinado punto de ventas y tipo de comprobante o Un comprobante determinado o Tipos de comprobante disponibles en WS MTXCA o Tipos de documento o Alícuotas de IVA o Códigos de condición de IVA para un ítem o Códigos de Moneda o Última cotización disponible para una determinada moneda. o Códigos de Unidades de Medida o Puntos de Venta del contribuyente comprendidos en el presente Web Service o Códigos de tributos que puede contener un comprobante o Detalles de un CAEA determinado 

,o Detalles de CAEAs para un rango de fechas determinado o Puntos de Venta aún no informados para un CAEA determinado o Tipos de Datos Adicionales disponibles o Consultar las actividades vigentes para el contribuyente  dummy Este documento debe complementarse con el documento relativo al SERVICIO DE AUTENTICACION DE CONTRIBUYENTES DE ARCA y Resoluciones Generales que norman los proyectos pertinentes. 

,### Tratamiento de errores Excepcionales en el WS 

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

,### Tratamiento de errores en el WS por validaciones del negocio. 

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

,### Tratamiento de observaciones en el WS por validaciones del 
