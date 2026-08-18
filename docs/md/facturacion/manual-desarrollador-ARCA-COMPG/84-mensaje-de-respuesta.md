##### Mensaje de respuesta 

 <?xml version="1.0" encoding="utf-8"?> 
```xml
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchemainstance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    < FEParamGetActividadesResponse 

,xmlns="http://ar.gov.afip.dif.FEV1/">
      <FEParamGetActividadesResult>
        <ResultGet>
          < ActividadesTipo>
            <Id>
              long
            </Id>
            <Orden>
              short
            </Orden>
            <Desc>
              string
            </Desc>
          </ ActividadesTipo>
          < ActividadesTipo>
            <Id>
              long
            </Id>
            <Orden>
              short
            </Orden>
            <Desc>
              string
            </Desc>
          </ ActividadesTipo>
          < ActividadesTipo>
            <Id>
              long
            </Id>
            <Orden>
              short
            </Orden>
            <Desc>
              string
            </Desc>
          </ ActividadesTipo>
          < ActividadesTipo>
            <Id>
              long
            </Id>
            <Orden>
              short
            </Orden>
            <Desc>
              string
            </Desc>
          </ ActividadesTipo>
        </ResultGet>
      </FEParamGetActividadesResult>
    </FEParamGetActividadesResponse>
  </soap:Body>
</soap:Envelope>
```
 Dónde: **FEParamGetTiposPaisesResult** : **Campo Detalle Obligatorio** ResultGet Información sobre los tipos de actividades que el emisor tiene habilitadas. 

###### N 

Errors Información de errores detectados N Events Información de eventos N **ResultGet: Campo Tipo Detalle Obligatorio** Id Long Identificador de Actividad S Orden Short(3) Orden de la Actividad S Desc String (180) Descripción de la Actividad S 

,##### Método para consultar valores referenciales de los identificadores de la condición frente 
