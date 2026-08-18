##### Estructura general del mensaje de Respuesta (response) 

Los mensajes de respuesta que se transmiten tienen implementado el subelemento FEHeaderInfo contenido en el elemento opcional Header, que se contempla en la estructura SOAP. En este webservice se utiliza para brindar información contextual relacionada con el proceso del mensaje. El procesamiento de dicha información no es obligatoria en los respectivos clientes, pero contribuye con información contextual de procesamiento que es de utilidad ante posibles eventualidades. Ejemplo de mensaje de respuesta en el ambiente de Testing 
```xml

```xml

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Header>
    <FEHeaderInfo xmlns="http://ar.gov.afip.dif.FEV1/">
      <ambiente>
        Homologacion Clo
      </ambiente>
      **
      <fecha>
        2018-09-13T12:43:28.2091828-03:00
      </fecha>
      <id>
        1.0.2.0
      </id>
    </FEHeaderInfo>
  </soap:Header>
  <soap:Body>
  </soap:Body>
</soap:Envelope>
```

```
 
```
Ejemplo de mensaje de respuesta en el ambiente de Producción 
```xml

```xml

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Header>
    <FEHeaderInfo xmlns="http://ar.gov.afip.dif.FEV1/">
      <ambiente>
        Produccion Pto
      </ambiente>
      <fecha>
        2018-09-13T12:43:28.2091828-03:00
      </fecha>
      <id>
        1.0.2.0
      </id>
    </FEHeaderInfo>
  </soap:Header>
  <soap:Body>
  </soap:Body>
</soap:Envelope>
```

```
 
```