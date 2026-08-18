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

,### Tratamiento de eventos 

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

,### Manejo transaccional 

Al autorizar o informar un comprobante, el cliente envía una solicitud, la cual es atendida y procesada por el WSMTXCA obteniéndose luego una respuesta. Puede ocurrir que por algún error de comunicación la solicitud no sea recibida por el WS, con lo cual nunca se emitirá una respuesta, o que la respuesta una vez enviada no sea recibida por el cliente. En esta situación se podrá utilizar el método de consulta de comprobante (consultarComprobante) para verificar si el comprobante fue procesado y aceptado (lo que indicaría que el problema de comunicación ocurrió luego de que el WS recibiera la solicitud correctamente) o no, en cuyo caso podrá repetirse la solicitud. Es importante destacar que si se envía una solicitud nuevamente y esta ya había sido aceptada, el sistema la rechazará indicando un error de correlatividad en la numeración del comprobante. Otro método que puede utilizarse en estas situaciones es “Consultar el Último Comprobante Autorizado” (consultarUltimoComprobanteAutorizado). 

,## Web Services de Negocio 
