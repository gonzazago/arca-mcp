##### Tratamiento de errores en el WS 

El tratamiento de errores en todos los servicios se realizará de la siguiente manera: 
```xml
<Errors>
  <Err>
    <Code>
      **int**
    </Code>
    <Msg>
      **string**
    </Msg>
  </Err>
  <Err>
    <Code>
      **int**
    </Code>
    <Msg>
      **string**
    </Msg>
  </Err>
</Errors>
```
 

,Dónde: **Campo Detalle Obligatorio** Errors Array de objeto. Err Información correspondiente a errores N Code Código de error S Msg Mensaje descriptivo del error S Para errores internos de infraestructura, los errores se devuelven en la misma estructura (Errors). Los códigos de error son: **Código de error Causa 500** Error interno de aplicación. **501** Error interno de base de datos. **502** Error interno de base de datos Autorizador CAE / Régimen CAEA – Transacción Activa **600** No se corresponden token y firma. Usuario no autorizado a realizar esta operación **601** CUIT representada no incluida en token. **602** No existen datos en nuestros registros. 
