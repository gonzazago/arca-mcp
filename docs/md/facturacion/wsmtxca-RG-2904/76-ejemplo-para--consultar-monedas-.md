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
    ,
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
 

,#### Consultar Cotización de Moneda (consultarCotizacionMoneda) 

Este método permite consultar la última cotización disponible para un determinado código de Moneda. Pudiéndose dar las siguientes situaciones: a) De existir la cotización devolverá el valor correspondiente. b) Si no existe cotización para la moneda indicada no retornará valor alguno. c) Si el código de moneda enviado es inválido devolverá un error. 
