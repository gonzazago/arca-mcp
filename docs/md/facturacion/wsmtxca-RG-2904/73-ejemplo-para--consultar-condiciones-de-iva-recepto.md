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
        ,
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

,**Campo / Grupo Código de Error Validación NO es superada** codigoTipoComprobante 196 En caso de no estar contemplado dentro de los tipos de comprobantes validos para el servicio Rechaza 

,#### Consultar Monedas (consultarMonedas) 

Este método retorna el universo de Monedas disponibles en el presente WS, indicando código y descripción de cada una. 
