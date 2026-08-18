##### Método de autorización de comprobantes electrónicos por CAE (FECAESolicitar) 

El cliente envía la información del comprobante/lote que desea autorizar mediante un requerimiento el cual es atendido por WSFEv1 pudiendo producirse las siguientes situaciones:  Supere todas las validaciones, el comprobante es aprobado, se asigna el CAE y su respectiva fecha de vencimiento,  No supera alguna de las validaciones no excluyentes, el comprobante es aprobado con observaciones, se le asigna el CAE con la fecha de vencimiento,  No supere alguna de las validaciones excluyentes, el comprobante no es aprobado y la solicitud es rechazada. Cabe aclarar que las validaciones excluyentes son aquellas que en el caso de no ser superadas provocan un rechazo y las validaciones no excluyentes aprueban la solicitud pero con observaciones. **Dirección URL (Homologación)** Este servicio se llama desde: https://wswhomo.afip.gov.ar/wsfev1/service.asmx?op= FECAESolicitar **Mensaje de solicitud** Recibe la información de un comprobante o lote de comprobantes. 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    ```xml
    
```xml
<ar:FECAESolicitar>
  <ar:Auth>
    ,
    <ar:Token>
      **string**
    </ar:Token>
    <ar:Sign>
      **string**
    </ar:Sign>
    <ar:Cuit>
      **long**
    </ar:Cuit>
  </ar:Auth>
  
```xml
<ar:FeCAEReq>
  
```xml
<ar:FeCabReq>
  <ar:CantReg>
    **int**
  </ar:CantReg>
  <ar:PtoVta>
    **int**
  </ar:PtoVta>
  <ar:CbteTipo>
    **int**
  </ar:CbteTipo>
</ar:FeCabReq>
```

  
```xml
<ar:FeDetReq>
  
```xml
<ar:FECAEDetRequest>
  <ar:Concepto>
    **int**
  </ar:Concepto>
  <ar:DocTipo>
    **int**
  </ar:DocTipo>
  <ar:DocNro>
    **long**
  </ar:DocNro>
  <ar:CbteDesde>
    **long**
  </ar:CbteDesde>
  <ar:CbteHasta>
    **long**
  </ar:CbteHasta>
  <ar:CbteFch>
    **string**
  </ar:CbteFch>
  <ar:ImpTotal>
    **double**
  </ar:ImpTotal>
  <ar:ImpTotConc>
    **double**
  </ar:ImpTotConc>
  <ar:ImpNeto>
    **double**
  </ar:ImpNeto>
  <ar:ImpOpEx>
    **double**
  </ar:ImpOpEx>
  <ar:ImpTrib>
    **double**
  </ar:ImpTrib>
  <ar:ImpIVA>
    **double**
  </ar:ImpIVA>
  <ar:FchServDesde>
    **string**
  </ar:FchServDesde>
  <ar:FchServHasta>
    **string**
  </ar:FchServHasta>
  <ar:FchVtoPago>
    **string**
  </ar:FchVtoPago>
  <ar:MonId>
    **string**
  </ar:MonId>
  <ar:MonCotiz>
    **double**
  </ar:MonCotiz>
  <ar:CanMisMonExt>
    **string**
  </ar:CanMisMonExt>
  <ar:CondicionIVAReceptorId>
    **int**
  </ar:CondicionIVAReceptorId>
  ```xml
  <ar:CbtesAsoc>
    <ar:CbteAsoc>
      <ar:Tipo>
        **short**
      </ar:Tipo>
      <ar:PtoVta>
        **int**
      </ar:PtoVta>
      <ar:Nro>
        **Long**
      </ar:Nro>
      <ar:Cuit>
        **String**
      </ar:Cuit>
      <ar:CbteFch>
        **String**
      </ar:CbteFch>
    </ar:CbteAsoc>
  </ar:CbtesAsoc>
  ```

        
```xml
  <ar:Tributos>
    <ar:Tributo>
      <ar:Id>
        **short**
      </ar:Id>
      <ar:Desc>
        **string**
      </ar:Desc>
      <ar:BaseImp>
        **double**
      </ar:BaseImp>
      <ar:Alic>
        **double**
      </ar:Alic>
      <ar:Importe>
        **double**
      </ar:Importe>
    </ar:Tributo>
  </ar:Tributos>
  ```

        
```xml
  <ar:Iva>
    <ar:AlicIva>
      <ar:Id>
        **short**
      </ar:Id>
      <ar:BaseImp>
        **double**
      </ar:BaseImp>
      <ar:Importe>
        **double**
      </ar:Importe>
    </ar:AlicIva>
  </ar:Iva>
  ```

        
```xml
  <ar:Opcionales>
    <ar:Opcional>
      ,
      <ar:Id>
        **string**
      </ar:Id>
      <ar:Valor>
        **string**
      </ar:Valor>
    </ar:Opcional>
  </ar:Opcionales>
  ```

        
```xml
  <ar:Compradores>
    <ar:Comprador>
      <ar:DocTipo>
        **int**
      </ar:DocTipo>
      <ar:DocNro>
        **Long**
      </ar:DocNro>
      <ar:Porcentaje>
        **double**
      </ar:Porcentaje>
    </ar:Comprador>
  </ar:Compradores>
  ```

        
```xml
  <ar:PeriodoAsoc>
    <ar:FchDesde>
      **string**
    </ar:FchDesde>
    <ar:FchHasta>
      **string**
    </ar:FchHasta>
  </ar:PeriodoAsoc>
  ```

        
```xml
  <ar:Actividades>
    <ar:Actividad>
      <ar:Id>
        **Long**
      </ar:Id>
    </ar:Actividad>
  </ar:Actividades>
  ```
</ar:FECAEDetRequest>
```

</ar:FeDetReq>
```

</ar:FeCAEReq>
```

</ar:FECAESolicitar>
```

    ```
  </soapenv:Body>
</soapenv:Envelope>
```
 Dónde: **Campo Detalle Obligatorio** Auth Información de la autenticación. Contiene los datos de Token, Sign y Cuit 

###### S 

 Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S Campo Detalle Obligatorio FeCAEReq Información del comprobante o lote de comprobantes de ingreso. Contiene los datos de FeCabReq y FeDetReq 

###### S 

 FeCabReq Información de la cabecera del comprobante o lote de comprobantes de ingreso 

###### S 

 FeDetReq Información del detalle del comprobante o lote de comprobantes de ingreso 

###### S 

 FeCabReq : La cabecera del comprobante o lote de comprobantes de ingreso está compuesta por los siguientes campos: 

,**Campo Tipo Detalle Obligatorio** CantReg Int (4) Cantidad de registros del detalle del comprobante o lote de comprobantes de ingreso 

###### S 

CbteTipo Int (3) Tipo de comprobante que se está informando. Si se informa más de un comprobante, todos deben ser del mismo tipo. 

###### S 

PtoVta Int (5) Punto de Venta del comprobante que se está informando. Si se informa más de un comprobante, todos deben corresponder al mismo punto de venta. 

###### S 

**FeDetReq:** El detalle del comprobante o lote de comprobantes de ingreso está compuesto por los siguientes campos: **Campo Tipo Detalle Obligatorio** Concepto Int(2) Concepto del Comprobante. Valores permitidos: 1 Productos 2 Servicios 3 Productos y Servicios 

###### S 

DocTipo Int (2) Código de documento identificatorio del comprador 

###### S 

DocNro Long (11) Nro. De identificación del comprador S CbteDesde Long (8) Nro. De comprobante desde Rango 199999999 

###### S 

CbteHasta Long (8) Nro. De comprobante registrado hasta Rango 199999999 

###### S 

CbteFch String (8) Fecha del comprobante (yyyymmdd). Para concepto igual a 1, la fecha de emisión del comprobante puede ser hasta 5 días anteriores o posteriores respecto de la fecha de generación: La misma no podrá exceder el mes de presentación. Si se indica Concepto igual a 2 ó 3 puede ser hasta 10 días anteriores o posteriores a la fecha de generación. Si no se envía la fecha del comprobante se asignará la fecha de proceso. Para comprobantes del tipo MiPyMEs (FCE) 

###### N 

,**Campo Tipo Detalle Obligatorio** del tipo Factura, la fecha de emisión del comprobante debe ser desde 5 días anteriores y hasta 1 día posterior respecto de la fecha de generación. Para notas de débito y crédito es hasta 5 dias anteriores y tiene que ser posterior o igual a la fecha del comprobante asociado. ImpTotal Double (13+2) Importe total del comprobante, Debe ser igual a Importe neto no gravado + Importe exento + Importe neto gravado + todos los campos de IVA al XX% + Importe de tributos. 

###### S 

ImpTotConc Double (13+2) Importe neto no gravado. Debe ser menor o igual a Importe total y no puede ser menor a cero. No puede ser mayor al Importe total de la operación ni menor a cero (0). Para comprobantes tipo C debe ser igual a cero (0). Para comprobantes tipo Bienes Usados – Emisor Monotributista este campo corresponde al importe subtotal. 

###### S 

ImpNeto Double (13+2) Importe neto gravado. Debe ser menor o igual a Importe total y no puede ser menor a cero. Para comprobantes tipo C este campo corresponde al Importe del Sub Total. Para comprobantes tipo Bienes Usados – Emisor Monotributista no debe informarse o debe ser igual a cero (0). 

###### S 

ImpOpEx Double (13+2) Importe exento. Debe ser menor o igual a Importe total y no puede ser menor a cero. Para comprobantes tipo C debe ser igual a cero (0). Para comprobantes tipo Bienes Usados – Emisor Monotributista no debe informarse o debe ser igual a cero (0). 

###### S 

ImpIVA Double (13+2) Suma de los importes del array de IVA. Para comprobantes tipo C debe ser igual a cero (0). Para comprobantes tipo Bienes Usados – Emisor Monotributista no debe informarse o 

###### S 

,**Campo Tipo Detalle Obligatorio** debe ser igual a cero (0). ImpTrib Double (13+2) Suma de los importes del array de tributos S FchServDesde String (8) Fecha de inicio del abono para el servicio a facturar. Dato obligatorio para concepto 2 o 3 (Servicios / Productos y Servicios). Formato yyyymmdd 

###### N 

FchServHasta String (8) Fecha de fin del abono para el servicio a facturar. Dato obligatorio para concepto 2 o 3 (Servicios / Productos y Servicios). Formato yyyymmdd. FchServHasta no puede ser menor a FchServDesde 

###### N 

FchVtoPago String (8) Fecha de vencimiento del pago servicio a facturar. Dato obligatorio para concepto 2 o 3 (Servicios / Productos y Servicios) o Facturas del tipo MiPyMEs (FCE). Formato yyyymmdd. Debe ser igual o posterior a la fecha del comprobante. 

###### N 

MonId String (3) Código de moneda del comprobante. Consultar método FEParamGetTiposMonedas para valores posibles 

###### S 

MonCotiz Double (4+6) Cotización de la moneda informada. Para PES, pesos argentinos la misma debe ser 1. De informar el campo, el mismo no puede quedar vacío. 

###### N 

CanMisMonExt String (1) Marca que identifica si el comprobante se cancela en misma moneda del comprobante (moneda extranjera). Valores posibles S o N. 

###### N 

CondicionIVARece ptorId Int (2) Condición Frente al IVA del receptor. Consultar método “FEParamGetCondicionIvaReceptor” Campo Condición Frente al IVA del receptor resultará obligatorio conforme lo reglamentado por la Resolución General N° 

5616. Si el valor informado no es valido, para CAE rechazará y en CAEA observará. Si el valor no existe rechazará en ambos casos. 

###### N 

CbtesAsoc Array Array para informar los comprobantes asociados <CbteAsoc> 

###### N 

Tributos Array Array para informar los tributos asociados a N 

,**Campo Tipo Detalle Obligatorio** un comprobante <Tributo>. IVA Array Array para informar las alícuotas y sus importes asociados a un comprobante <AlicIva>. Para comprobantes tipo C y Bienes Usados – Emisor Monotributista no debe informar el array. 

###### N 

Opcionales Array Array de campos auxiliares. Reservado usos futuros <Opcional>. Adicionales por R.G. 

###### N 

Compradores Comprador Array para informar los múltiples compradores. 

###### N 

PeriodoAsoc Periodo Estructura compuesta por la fecha desde y la fecha hasta del periodo que se quiere identificar 

###### N 

Actividades Actividad Array para informar las actividades asociadas a un comprobante. 

###### N 

**CbtesAsoc** : Detalle de los comprobantes relacionados con el comprobante que se solicita autorizar (array). **Campo Tipo Detalle Obligatorio** Tipo Int (3) Código de tipo de comprobante. Consultar método FEParamGetTiposCbte. 

###### S 

 PtoVta Int (5) Punto de venta del comprobante asociado 

###### S 

Nro Long (8) Numero de comprobante asociado S Cuit String(11) Cuit emisor del comprobante asociado N CbteFch String(8) Fecha del comprobante asociado N **Tributos** : Detalle de tributos relacionados con el comprobante que se solicita autorizar (array). **Campo Tipo Detalle Obligatorio** Id Int (2) Código tributo según método FEParamGetTiposTributos 

###### S 

 Desc String (80) Descripción del tributo. N 

, BaseImp Double (13+2) Base imponible para la determinación del tributo 

###### S 

Alic Double (3+2) Alícuota S Importe Double (13+2) Importe del tributo S **IVA** : Detalle de alícuotas relacionadas con el comprobante que se solicita autorizar (array). **Campo Tipo Detalle Obligatorio** Id Int (2) Código de tipo de iva. Consultar método FEParamGetTiposIva 

###### S 

 BaseImp Double (13+2) Base imponible para la determinación de la alícuota. 

###### S 

Importe Double (13+2) Importe S **Opcionales:** Campos auxiliares (array). Adicionales por R.G. Los datos opcionales sólo deberán ser incluidos si el emisor pertenece al conjunto de emisores habilitados a informar opcionales. En ese caso podrá incluir el o los datos opcionales que correspondan, especificando el identificador de dato opcional de acuerdo a la situación del emisor. El listado de tipos de datos opcionales se puede consultar con el método FEParamGetTiposOpcional. Ejemplo: si el emisor está incluido en el “Régimen de Promoción Industrial”, deberá incluir un array de opcionales con un registro como el sig. 
```xml
<ar:Opcionales>
  <ar:Opcional>
    <ar:Id>
      2
    </ar:Id>
    <ar:Valor>
      12345678
    </ar:Valor>
  </ar:Opcional>
</ar:Opcionales>
```
 Si el comprobante que intenta autorizar corresponde a Establecimientos de educación pública de gestión privada según Resolución General N° 3.368 deberá incluir un array de opcionales con registros como el siguiente ejemplo: 
```xml
<ar:Opcionales>
  <ar:Opcional>
    <ar:Id>
      10
    </ar:Id>
    <ar:Valor>
      1
    </ar:Valor>
  </ar:Opcional>
  <ar:Opcional>
    ,
    <ar:Id>
      1011
    </ar:Id>
    <ar:Valor>
      80
    </ar:Valor>
  </ar:Opcional>
  <ar:Opcional>
    <ar:Id>
      1012
    </ar:Id>
    <ar:Valor>
      30000000007
    </ar:Valor>
  </ar:Opcional>
</ar:Opcionales>
```
 Si el comprobante que intenta autorizar corresponde a Operaciones económicas vinculadas con bienes inmuebles según RG N° 2.820 deberá incluir un array de opcionales con un registro como el siguiente ejemplo: 
```xml
<ar:Opcionales>
  <ar:Opcional>
    <ar:Id>
      11
    </ar:Id>
    <ar:Valor>
      1
    </ar:Valor>
  </ar:Opcional>
</ar:Opcionales>
```
 Si el comprobante que intenta autorizar corresponde a Locación temporaria de inmuebles con fines turísticos según RG N° 3.687 deberá incluir un array de opcionales con un registro como el siguiente ejemplo: 
```xml
<ar:Opcionales>
  <ar:Opcional>
    <ar:Id>
      12
    </ar:Id>
    <ar:Valor>
      1
    </ar:Valor>
  </ar:Opcional>
</ar:Opcionales>
```
 Si el comprobante que intenta autorizar corresponde a Representantes de Modelos según RG N° 2.863 deberá incluir un array de opcionales con un registro como el siguiente ejemplo: 

,
```xml
<ar:Opcionales>
  <ar:Opcional>
    <ar:Id>
      13
    </ar:Id>
    <ar:Valor>
      1
    </ar:Valor>
  </ar:Opcional>
</ar:Opcionales>
```
 Si el comprobante que intenta autorizar corresponde a Agencias de publicidad según RG N° 2.863 deberá incluir un array de opcionales con un registro como el siguiente ejemplo: 
```xml
<ar:Opcionales>
  <ar:Opcional>
    <ar:Id>
      14
    </ar:Id>
    <ar:Valor>
      1
    </ar:Valor>
  </ar:Opcional>
</ar:Opcionales>
```
 Si el comprobante que intenta autorizar corresponde a Personas físicas que desarrollen actividad de modelaje según RG N° 2.863 deberá incluir un array de opcionales con un registro como el siguiente ejemplo: 
```xml
<ar:Opcionales>
  <ar:Opcional>
    <ar:Id>
      15
    </ar:Id>
    <ar:Valor>
      1
    </ar:Valor>
  </ar:Opcional>
</ar:Opcionales>
```
 Si el comprobante que intenta autorizar es del tipo B o C con locación de inmuebles destino "casa-habitación" facturación **directa** según RG N° 4004-E deberá incluir un array de opcionales con un registro como el siguiente ejemplo: 

,
```xml
<ar:Opcionales>
  <ar:Opcional>
    <ar:Id>
      17
    </ar:Id>
    <ar:Valor>
      2
    </ar:Valor>
  </ar:Opcional>
</ar:Opcionales>
```
 Si el comprobante que intenta autorizar es del tipo B o C con locación de inmuebles destino "casa-habitación" facturación a través de **intermediario** según RG N° 4004-E deberá incluir un array de opcionales con un registro como el siguiente ejemplo: 
```xml
<ar:Opcionales>
  <ar:Opcional>
    <ar:Id>
      17
    </ar:Id>
    <ar:Valor>
      1
    </ar:Valor>
  </ar:Opcional>
</ar:Opcionales>
```
 Si el comprobante que intenta autorizar es del tipo B o C con locación de inmuebles destino "casa-habitación" con facturación directa con cotitulares o indirecta con los datos de el/los titular/es según RG N° 4004-E deberá incluir opcionales con al menos 2 registros como el siguiente ejemplo: 
```xml
<ar:Opcionales>
  <ar:Opcional>
    <ar:Id>
      1801
    </ar:Id>
    <ar:Valor>
      30000000007
    </ar:Valor>
  </ar:Opcional>
  <ar:Opcional>
    <ar:Id>
      1802
    </ar:Id>
    <ar:Valor>
      DENOMINACION EJEMPLO
    </ar:Valor>
  </ar:Opcional>
</ar:Opcionales>
```
 

, Campo Tipo Detalle Obligatorio Id String(4) Código de Opcional, consultar método FEParamGetTiposOpcional 

###### S 

Valor String (250) Valor S **Comprador** : Detalle compradores vinculados al comprobante que se solicita autorizar (array). **Campo Tipo Detalle Obligatorio** DocTipo Int (2) Tipo de documento del comprador S DocNro String (80) Número de documento del comprador S Porcentaje Double (2+2) Porcentaje de titularidad que tiene el comprador 

###### S 

**Periodo** : Estructura que permite soportar un rango de fechas. **Campo Tipo Detalle Obligatorio** FchDesde String(8) Fecha correspondiente al inicio del periodo de los comprobantes que se quiere identiricar 

###### S 

 FchHasta String(8) Fecha correspondiente al fin del periodo de los comprobantes que se quiere identificar 

###### S 

**Actividad** : Detalle de la actividad relacionada con las actividades (array) que se indican en el comprobante a autorizar. **Campo Tipo Detalle Obligatorio** Id Long (6) Código actividad según método FEParamGetActividades 

###### S 

**Mensaje de respuesta** Retorna la información del comprobante o lote de comprobantes de ingreso agregándole el CAE otorgado si el comprobante fue aprobado. Ante cualquier anomalía se retorna un array con errores detectados (Errors) o un array de observaciones según corresponda. 
```xml
<soap:Envelope xmlns:soap=”http://www.w3.org/2003/05/soap-envelope” xmlns:ar=”http://ar.gov.afip.dif.fev1/”>
  <soap:Header/>
  <soap:Body>
    ,
    <FECAESolicitarResponse>
      <FECAESolicitarResult>
        <FeCabResp>
          <Cuit>
            **long**
          </Cuit>
          <PtoVta>
            **int**
          </PtoVta>
          <CbteTipo>
            **int**
          </CbteTipo>
          <FchProceso>
            **string**
          </FchProceso>
          <CantReg>
            **int**
          </CantReg>
          <Resultado>
            **string**
          </Resultado>
          <Reproceso>
            **string**
          </Reproceso >
        </FeCabResp>
        <FeDetResp>
          <FEDetResponse>
            <Concepto>
              **int**
            </Concepto>
            <DocTipo>
              **int**
            </DocTipo>
            <DocNro>
              **long**
            </DocNro>
            <CbteDesde>
              **long**
            </CbteDesde>
            <CbteHasta>
              **long**
            </CbteHasta>
            <Resultado>
              **string**
            </Resultado>
            <CAE>
              **string**
            </CAE>
            <CbteFch>
              **string**
            </CbteFch>
            <CAEFchVto>
              **string**
            </CAEFchVto>
            <Obs>
              <Observaciones>
                <Code>
                  **int**
                </Code>
                <Msg>
                  **string**
                </Msg>
              </Observaciones>
            </Obs>
          </FEDetResponse>
        </FeDetResp>
        
```xml

```xml
<Events>
  <Evt>
    <Code>
      **int**
    </Code>
    <Msg>
      **string**
    </Msg>
  </Evt>
</Events>
```

```

        
```xml

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
</Errors>
```

```

      </FECAESolicitarResult>
    </FECAESolicitarResponse>
  </soap:Body>
</soap:Envelope>
```
 Dónde: **Campo Detalle Obligatorio** FECAESolicitarResult Información del comprobante o lote de comprobantes de ingreso, conteniendo el CAE otorgado. Contiene los datos de FeCabResp y FeDetResp, Errors y Events 

###### S 

FeCabResp Información de la cabecera del comprobante o lote de comprobantes de ingreso 

###### S 

,FeDetResp Información del detalle del comprobante o lote de comprobantes de ingreso conteniendo el CAE otorgado 

###### S 

Errors Información de errores detectados N Events Información de eventos N **FeCabResp:** La cabecera del comprobante o lote de comprobantes de ingreso estará compuesta por los siguientes campos: **Campo Tipo Detalle Obligatorio** Cuit Long (11) Cuit del contribuyente S PtoVta Int (5) Punto de venta S CbteTipo Int (3) Tipo de comprobante S FchProceso String (14) Fecha de proceso formato yyyymmddhhmiss S CantReg Int (4) Cantidad de registros del detalle del comprobante o lote de comprobantes de ingreso 

###### S 

Resultado String (1) Resultado S Reproceso String Campo no operativo para esta versión. N **FeDetResp:** El detalle del comprobante o lote de comprobantes de ingreso estará compuesta por los siguientes campos: **Campo Tipo Detalle Obligatorio** Concepto Int (2) Concepto S DocTipo Int (2) Código de documento identificador del comprador S DocNro Long (11) Nro. De identificación del comprador S CbteDesde Long (8) Nro. De comprobante desde S CbteHasta Long (8) Nro. De comprobante registrado hasta S CbteFch String (8) Fecha del comprobante N Resultado String (1) Resultado S CAE String (14) Código de autorización electrónico N CAEFchVto String (8) Fecha de vencimiento o vencimiento de la autorización 

###### N 

Observaciones Array Detalle de observaciones, del comprobante N 

,**Observaciones** : La estructura de datos Obs muestra el detalle de observaciones para un comprobante determinado; estará compuesta por los siguientes campos: **Campo Tipo Detalle Obligatorio** Code Int (5) Código de observación S Msg String (255) Mensaje S **Validaciones y errores Controles aplicados al objeto <Auth>** Validaciones Excluyentes **Campo / Grupo Código de error Descripción de la validación** <Cuit> 10000 Verificación de datos registrales, Inscripción en el régimen, autorización de emisión de comprobantes, domicilio fiscal. Etc. Los mensajes posibles son 01 “LA CUIT INFORMADA NO CORRESPONDE A UN RESPONSABLE INSCRIPTO EN EL IMPUESTO” 02 “LA CUIT INFORMADA NO SE ENCUENTRA AUTORIZADA A EMITIR COMPROBANTES ELECTRONICOS ORIGINALES O EL PERIODO DE INICIO AUTORIZADO ES POSTERIOR AL DE LA GENERACION DE LA SOLICITUD” 03 “LA CUIT INFORMADA REGISTRA INCONVENIENTES CON EL DOMICILIO FISCAL” 04 “LA CUIT INFORMADA NO SE ENCUENTRA AUTORIZADA A EMITIR COMPROBANTES CLASE “A” O FACTURA DE CREDITO, (Esta validación no aplica para comprobantes tipo C)” 05 “EL CUIT INFORMADO COMO EMISOR NO SE ENCUENTRA REGISTRADO DE FORMA ACTIVA EN LAS BASES DE LA ADMINISTRACIÓN.” 06 “DEBE POSEER AL MENOS UNA ACTIVAD ACTIVA.” (Esta validación no aplica para comprobantes tipo C” 07 “NO AUTORIZADO A EMITIR COMPROBANTES – LA CUIT INFORMADA NO SE ENCUENTRA AUTORIZADA A EMITIR COMPROBANTES SEGÚN RG 3411” (Esta validación solo aplica para comprobante 49 – Bien Usado”) 08 “NO AUTORIZADO A EMITIR COMPROBANTES – LA CUIT INFORMADA NO CORRESPONDE A UN EXENTO EN IVA. 09 “LA CUIT INFORMADA NO SE ENCUENTRA AUTORIZADA A EMITIR COMPROBANTES CLASE A CON LEYENDA ‘OPERACIÓN SUJETA A RETENCIÓN’” 10 “LA CUIT INFORMADA NO SE ENCUENTRA REGISTRADA COMO PYME SEGÚN EL REGIMEN FCE” 

,###### 11 “LA CUIT INFORMADA NO TIENE ACTIVO EL DOMICILIO FISCAL 

###### ELECTRONICO” 

**Controles aplicados al objeto <FeCabReq>** Validaciones Excluyentes **Campo / Grupo Código de error Descripción de la validación** <CantReg> 10001 Cantidad de registros de detalle del comprobante o lote de comprobantes de ingreso <CantReg> debe estar comprendido entre 1 y 9998. <CantReg> 10002 La cantidad de registros del detalle del comprobante o lote de comprobantes de ingreso debe ser igual a lo informado en cabecera del comprobante o lote de comprobantes de ingreso <CantReg> Cantidad de registros incluidos 

###### 10003 

 La cantidad de registros en detalle debe ser menor igual al valor permitido. Consulte método FECompTotXRequest para obtener cantidad máxima de registros por cada requerimiento. Para comprobantes del tipo MiPyMEs (FCE), la cantidad habilitada es 1 comprobante por request <PtoVta> 10004 Campo <PtoVta> debe estar comprendido entre 1 y 99998. <PtoVta> 10005 El punto de venta informado debe estar dado de alta y ser del tipo RECE. <CbteTipo> 10006 Campo CbteTipo debe ser un valor numérico mayor a 0. <CbteTipo> 10007 Campo CbteTipo sea: 

- 01, 02, 03, 04, 05 ,34, 39, 60, 63, 201, 202, 203 para los clase A 

- 06, 07, 08, 09, 10, 35, 40,64, 61, 206, 207, 208 para los clase B. 

- 11, 12, 13, 15, 211, 212, 213 para los clase C. 

- 51, 52, 53, 54 para los clase “A con leyenda operación sujeta a retención”. 

- 49 para los Bienes Usados. Consultar método FEParamGetTiposCbte. **Controles aplicados al objeto <FeDetReq> Validaciones Excluyentes Campo / Grupo Código de error Descripción de la validación** <CbteDesde> 10008 Campo <CbteDesde> se encuentre entre 1 y 99999999. <CbteHasta> 10010 Campo <CbteHasta> se encuentre 

,**Campo / Grupo Código de error Descripción de la validación** entre 1 y 99999999. <CbteHasta> 10011 Campo <CbteHasta> sea mayor o igual a <CbteDesde> para comprobantes tipo B. Para comprobantes tipo C <CbteHasta> debe ser igual a <CbteDesde>. <CbteTipo> / <CbteDesde> / <CbteHasta> 10012 Para comprobantes clase “A”, “C”, “A con leyenda operación sujeta a retención”, “49” – Bienes Usados y comprobantes MiPyMEs (FCE) el campo CbteDesde debe ser igual al campo CbteHasta <CbteTipo> / <DocTipo> 10013 Para comprobantes clase “A” y “A con leyenda operación sujeta a retención” el campo DocTipo tenga valor 80 (CUIT) <CbteTipo> / <CbteDesde> / <CbteHasta> 10014 Para comprobantes clase B y CbteHasta distinto a CbteDesde el resultado de la operación ImpTotal / (CbteHasta –CbteDesde +1) < monto en pesos resultante según RG4444. <CbteTipo> / <DocTipo> / <DocNro> 10015 Para comprobantes tipo B en pedidos múltiples (CbteDesde distinto a CbteHasta) y el resultado de la operación ImpTotal / (CbteHasta – CbteDesde + 1 ) < monto en pesos resultante según RG4444. el campo DocTipo deberá ser igual a 99, el campo DocNro deberá ser cero (0). Para comprobantes tipo B en pedidos individuales (CbteDesde igual a CbteHasta) y el resultado de la operación ImpTotal / (CbteHasta – CbteDesde + 1 ) < monto en pesos resultante según RG4444 si el campo DocTipo es igual a 99, el campo DocNro deberá ser cero. Para comprobantes tipo B individuales (CbteDesde igual a CbteHasta), si el campo DocTipo es 80, 86 u 87, deberá verificarse que el número consignado se encuentre en 

,**Campo / Grupo Código de error Descripción de la validación** los padrones de ARCA. Si DocTipo es 80 y DocNro es 23000000000 (No Categorizado) esta validación no se tendrá en cuenta. Si el campo DocTipo es distinto de 80, 86 u 87, deberá verificarse que se ingrese uno de los valores devueltos por el método FEParamGetTiposDoc y que se informe el campo DocNro. Para pedidos individuales (CbteDesde igual a CbteHasta) tipo B con montos superiores a monto en pesos resultante según RG4444 el campo DocTipo deberá ser igual a algunos de los valores devueltos por el método FEParamGetTiposDoc excepto 99 y deberá informar el campo DocNro. Para comprobantes tipo 49 – Bienes Usados, DocTipo deberá ser igual a algunos de los valores devueltos por el método FEParamGetTiposDoc excepto el 99 y deberá informar el campo DocNro. Para comprobantes tipo 49 – Bienes Usados, si DocTipo es 80, 86 u 87, deberá verificarse que el número consignado se encuentra en los padrones de arca. Para comprobantes MiPyMEs (FCE) el documento del receptor debe ser 80 CUIT. <CbteDesde> / <CbteFch> 10016 El número de comprobante informado <CbteDesde> debe ser mayor en 1 al último informado para igual punto de venta y tipo de comprobante. Consultar método FECompUltimoAutorizado El campo <CbteFch> podrá ser: 

- Nulo o comprendido en el rango 

, Campo / Grupo Código de error Descripción de la validación N-5 y N+5 siendo N la fecha de envío del pedido de autorización, para Concepto= 01 Productos. La misma no podrá exceder el mes de presentación. 

- Para Concepto 02, 03 el campo CbteFch puede ser nulo o comprendido en el rango N-10 y N+10 siendo N la fecha de envío del pedido de autorización. 

- Deberá ser mayor o igual al del ultimo comprobante emitido para ese tipo y punto de venta 

- Para comprobantes MiPyMEs (FCE) estar comprendido en el rango N-5 y N+1 siendo N la fecha de envío del pedido de autorización. De tratarse de notas de débito o crédito, la fecha del comprobante puede ser hasta N-5. <AlicIVA> 10018 Si <ImpIVA> es igual a 0 los objetos <IVA> y <AlicIva> solo deben informarse con ImpIVA = 3 (iva 0) Si <ImpIVA> es mayor a 0 el objeto <IVA> y <AlicIva> son obligatorios. El objeto <AlicIva> es obligatorio y no debe ser nulo si ingresa <IVA> No aplica para comprobantes tipo C. <AlicIVA><id> 10019 El campo Id en AlicIVA es obligatorio informarlo. Si el tipo de comprobante es 2, 3, 7, 8, 52 o 53 informarlo es opcional. Siempre que se informe Id, debe ser un valor devuelto por el método FEParamGetTiposIva. No aplica para comprobantes tipo C. <AlicIVA><BaseImp> 10020 El campo BaseImp en AlicIVA es obligatorio y debe ser mayor a 0 cero. Excepto para comprobantes 2, 3, 7, 8, 52 o 53 que puede ser cero o 

,**Campo / Grupo Código de error Descripción de la validación** no ser informado. No aplica para comprobantes tipo C. <AlicIVA><Importe> 10021 El campo Importe en AlicIVA es obligatorio, mayor o igual 0 cero. Excepto para comprobantes 2, 3, 7, 8, 52 o 53 que puede ser cero o no ser informado. No aplica para comprobantes tipo C. <AlicIVA><id> 10022 El campo Id en AlicIVA no debe repetirse. Deberá totalizarse por alícuota. No aplica para comprobantes tipo C. <ImpIVA> / <AlicIVA><importe> 

###### 10023 

La suma de los campos <importe> en <IVA> debe ser igual al valor ingresado en ImpIVA. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de alícuotas de IVA ingresadas * No aplica para comprobantes tipo C. <Tributo> 10024 Si ImpTrib es mayor a 0 el objeto <Tributos> y <Tributo> son obligatorios. El objeto <Tributo> es obligatorio y no deber ser nulo si se incluye el objeto <Tributos> Si impTrib es igual a cero el objeto <Tributos> y <Tributo> no deben enviarse. <Tributo><id> 10025 El campo <Id> en <Tributo> es obligatorio y debe ser alguno de los devueltos por el método FEParamGetTiposTributos <Tributo><BaseImp> 10026 El campo <BaseImp> en <Tributo> es obligatorio y debe ser mayor o igual a 0 cero <Tributo><Alic> 10027 El campo <Alic> en <Tributo> es 

,**Campo / Grupo Código de error Descripción de la validación** obligatorio , mayor o igual 0 cero <Tributo><importe> 10028 El campo <Importe> en <Tributo> es obligatorio , mayor o igual 0 cero <ImpTrib> / <Tributo><importe> 

###### 10029 

La suma de los importes en <Tributo> debe ser igual al valor ingresado en <ImpTrib> Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de tributos * <concepto> 10030 El campo <Concepto> es obligatorio y debe corresponder con algún valor devuelto por el método FEParamGetTiposConcepto 1 Productos 2 Servicios 3 Productos y Servicios <FchServDesde> / <FchServHasta> / <FchVtoPago> 10031 El campo “fecha desde del servicio a facturar” <FchServDesde> es obligatorio si se informa “fecha hasta del servicio a facturar” <FchServHasta> y/o “fecha de vencimiento para el pago” <FchVtoPago>. <FchServDesde> / <FchServHasta> 10032 El campo “fecha desde del servicio a facturar” <FchServDesde> no puede ser posterior al campo “fecha hasta del servicio a facturar” <FchServHasta>. <FchServDesde> / <FchServHasta> / <FchVtoPago> 10033 El campo “fecha hasta del servicio a facturar” <FchServHasta> es obligatorio si se informa “fecha desde del servicio a facturar” <FchServDesde> y/o “fecha de vencimiento para el pago” <FchVtoPago>. <FchServDesde> / <FchServHasta> / <FchVtoPago> 10035 El campo “fecha de vencimiento para el pago” <FchVtoPago> es obligatorio si se informa “fecha 

,**Campo / Grupo Código de error Descripción de la validación** desde del servicio a facturar” <FchServDesde> y/o “fecha hasta del servicio a facturar” <FchServHasta>. <FchVtoPago> 10036 El campo “fecha de vencimiento para el pago” <FchVtoPago> no puede ser anterior a la fecha del comprobante. <MonId> 10037 El campo <MonId> es obligatorio y debe corresponder a algún valor devuelto por el método FEParamGetTiposMonedas <MonCotiz> 10038 El campo <MonCotiz> es obligatorio si no informa el campo CanMisMonExt = S, y de informarse debe ser mayor a 0. Si se indica que el pago del comprobante se realiza en la misma moneda extranjera que la factura, la cotización de la moneda provista debe coincidir exactamente con la registrada en las bases de ARCA para el día hábil anterior a la fecha de emisión del comprobante, si esta es anterior a la fecha actual, o bien con la registrada para el día hábil anterior a la fecha actual, si la fecha de emisión es posterior a esta. En caso contrario, se puede omitir el campo de Cotización de Moneda. <MonId> / <MonCotiz> 10039 El campo <MonCotiz> es obligatorio , e igual a 1 cuando se trate de <MonId>=PES <CbtesAsoc> / <CbteTipo> 

###### 10040 

 De enviarse el tag <CbtesAsoc>, entonces el campo “código de tipo de comprobante” <CbteTipo> a autorizar tiene que ser 01, 02, 03, 06, 07, 08, 12, 13, 51, 52, 53 , 201, 206 o 211 Para 02 y 03 pueden asociarse los tipos de comprobante 01, 02, 03, 04, 05, 34, 39, 60, 63, 88 y 991 Para 07 y 08 pueden asociarse 06, 

,**Campo / Grupo Código de error Descripción de la validación** 07, 08, 09, 10, 35, 40, 61, 64, 88 y 991 Para 12 o 13 pueden asociarse 11, 12, 13 y 15. Para 52 o 53 pueden asociarse 51, 52, 53, 54, 88 y 991 Para 01,06 y 51 pueden asociarse 88 y 991 Para comprobantes MiPyMEs (FCE) 201, 206 o 211 puede asociarse los comprobantes (91, 990, 991, 993, 994, 995). Para comprobantes MiPyMEs (FCE) A 202 y 203, puede asociar 201,202 o 203. Para comprobantes MiPyMEs (FCE) B 207, 208 puede asociar 206, 207, 208. Para comprobantes MiPyMEs (FCE) C 212, 213 puede asociarse 211, 212, 213. <Tirbuto><Id> / <Tirbuto><Desc> 10042 El campo <Desc> en Tributo es obligatorio cuando se informe <Id> = 99. Para comprobantes MiPyMEs (FCE) siempre es obligatoria la descripción <ImpTotConc> 10043 El campo “Importe neto no gravado” <ImpTotConc>. No puede ser menor a cero (0). Para comprobantes tipo C debe ser igual a cero (0). Para comprobantes tipo 49 – Bienes usados, si el emisor es MONOTRIBUTISTA, este campo corresponde al importe del subtotal de la operación <ImpOpEx> 10044 El campo “importe exento” <ImpOpEx>. No puede ser menor a cero (0). 

,**Campo / Grupo Código de error Descripción de la validación** Para comprobantes tipo C debe ser igual a cero (0). Para comprobantes tipo 49 – Bienes usados, si se encuentra inscripto en MONOTRIBUTO no debe informarse o debe ser igual a cero (0). <ImpNeto> 10045 El campo “Importe neto gravado” <ImpNeto>. No puede ser menor a cero (0). Para comprobantes tipo C este campo corresponde al Importe del Sub Total. Para comprobantes tipo 49 – Bienes usados, si se encuentra inscripto en MONOTRIBUTO no debe informarse o debe ser igual a cero (0). <ImpTrib> 10046 El campo “Importe de tributos” <ImpTrib>. No puede ser menor a cero (0). <ImpIVA> 10047 El campo “Importe de IVA” <ImpIVA>. No puede ser menor a cero (0). Para comprobantes tipo C debe ser igual a cero (0). Para comprobantes tipo 49 – Bienes usados, si se encuentra inscripto en MONOTRIBUTO no debe informarse o debe ser igual a cero (0). <ImpTotConc> / <ImpOpEx> / <ImpNeto> / <ImpTrib> / <ImpIVA> / <ImpTotal> 

###### 10048 

 El campo “Importe Total” <ImpTotal>, debe ser igual a la suma de ImpTotConc + ImpNeto + ImpOpEx + ImpTrib + ImpIVA Para comprobantes tipo C, el campo “Importe Total” <ImpTotal>, debe ser igual a la suma de ImpNeto + ImpTrib. Para comprobantes tipo 49 – Bienes Usados, si se encuentra inscripto en MONOTRIBUTO el campo “Importe Total” <ImpTotal>, debe ser igual a la suma de ImpTotConc + ImpTrib. 

,**Campo / Grupo Código de error Descripción de la validación** Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 <FchServDesde> / <FchServHasta> / <FchVtoPago> 10049 Los campos <FchServDesde>, <FchServHasta>, <FchVtoPago>, es obligatorio cuando el campo <Concepto> es igual a 2 o 3. Si se informa deberá tener el siguiente formato yyyymmdd. <AlicIVA> 10051 Los importes informados en AlicIVA se deben corresponder según el tipo de iva seleccionado. Para comprobantes tipo 2, 3, 7, 8, 52 y 53 no se tiene en cuenta esta validación. Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 No aplica para comprobantes tipo C <Opcionales> 10052 Si envía <Opcionales>, <Opcional> es obligatorio. <Opcional> 10053 El campo <Id> en <Opcionales> es obligatorio y debe ser alguno de los devueltos por el método FEParamGetTiposOpcional. <Opcional> 10054 El campo <Id> en <Opcionales> es obligatorio y no debe repetirse. Solo pueden repetirse los identificadores 1801 y 1802 informados para la RG 4004-E. <Opcional> 10055 El campo <Valor> en Opcionales es obligatorio Importes en general 10056 Que se informen los mismos con la precisión indicada. <CbteAsoc><Tipo> 10057 De enviarse el tag CbteAsoc debe enviarse Tipo > a 0 <CbteAsoc><PtoVta> 10058 De enviarse el tag CbteAsoc debe 

,**Campo / Grupo Código de error Descripción de la validación** enviarse PtoVta > a 0 y < a 99999 <CbteAsoc><Nro> 10059 De enviarse el tag CbteAsoc debe enviarse Nro > a 0 y < a 99999999 <CbteAsoc><Tipo> / <CbteAsoc><PtoVta> / 

<CbteAsoc><Nro> (^10060) De enviarse el tag CbteAsoc, los comprobantes no deben repetirse. <ImpNeto> / <AlicIVA><BaseImp> 

###### 10061 

La suma de los campos <BaseImp> en <AlicIva> debe ser igual al valor ingresado en ImpNeto. Esta validación no deberá ser tenida en cuenta, cuando el <CbteTipo> sea 02, 03 ,07, 08, para comprobantes tipo C (11, 12, 13, 15) y para Comprobantes tipo “A con leyenda operación sujeta a retención” (52, 53) Margen de error: Error relativo porcentual deberá ser <= 0.01% o el error absoluto <=0.01 * cantidad de alícuotas de IVA ingresadas * <CbtesAsoc><CbteAsoc> 10062 Si envía <CbtesAsoc>, <CbteAsoc> es obligatorio. <Opcionales><Id><Valor> 10064 Si selecciona Id = 2 el valor ingresado debe ser un numérico de 8 (ocho) dígitos mayor o igual a 0 (cero). <ImpTotal> 10065 El campo “Importe Total” <ImpTotal>. No puede ser menor a cero (0). <Opcionales><Id><Valor> 10066 Si Id = 2 y el comprobante corresponde a una actividad alcanzada por el beneficio de Promoción Industrial en el campo <Valor> se deberá informar el número identificador del proyecto (el mismo deberá corresponder a la CUIT emisora del comprobante), si no corresponde a una actividad alcanzada por el beneficio el campo <Valor> deberá ser 0 (cero). El Id = 2 solo podrá informarse 

,**Campo / Grupo Código de error Descripción de la validación** cuando <CbteTipo> es igual a 1, 2, 3, 6, 7, 8. <ImpTrib> <DocTipo><DocNro> 10067 Para comprobantes tipo B, si <DocTipo> es 80 y <DocNro> es 23000000000 (No Categorizado), ImpTrib debe ser mayor a 0. <Opcionales><CbteTipo> 10068 El array <Opcionales> no es obligatorio. Solo puede informarse si <CbteTipo> es 1, 2, 3, 4, 6, 7, 8, 9, 11,12, 13, 15, 49, 51, 52, 53, 54, 63, 64, 201, 206, 211, 203, 208, 213, 202, 207, 212. <DocNro> 10069 El N° de documento del receptor del comprobante no puede ser igual al del emisor. <ImpNeto>/ <Iva> 

###### 10070 

Si el importe neto es mayor a cero, es obligatorio informar el array de iva. <Iva> 10071 Si el tipo de comprobante es C, el array de IVA no debe informarse. <CbteTipo>/<AlicIVA> 10075 Si el comprobante informado es tipo 49 – Bienes Usados, el emisor del comprobante se encuentra inscripto en el MONOTRIBUTO. El objeto <IVA> y <AlicIva> no deben informarse. <Opcionales><CbteTipo>/<DocTipo> 10076 Si el comprobante informado es tipo 49 – Bienes Usados, es obligatorio informar opcionales. Ver método FEParamGetTiposOpcional() <Opcionales><Id>/ <Opcionales><Valor> 

###### 10077 

Si informa Id = 91 el valor ingresado no puede ser un blanco y debe ser un alfanumérico de 100 caracteres como máximo. <Opcionales><Id>/<CbteTipo> 10078 Si el comprobante es del tipo 49 – Bienes Usados es obligatorio informar el Nombre y Apellido mediante el ID = 91. <Opcionales><Id>/ 10079 Si informa Id = 92 el valor ingresado 

,**Campo / Grupo Código de error Descripción de la validación** <Opcionales><Valor> debe ser un valor numérico de 3 posiciones. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10080 

Si informa Id = 92, el contenido del campo <Valor> debe corresponder a un código de país valido. Ver método FEParamGetTiposPaises <Opcionales><Id>/<CbteTipo> 10081 Si el comprobante es del tipo 49 – Bienes Usados, los valores posibles para el id son 91, 92, 93. <Opcionales><Id>/ <CbteTipo> 10082 Si en el campo TipoDoc se informa 30, 91 o 94 se deberá informar el id 92 con el código del país del vendedor. Consultar Método FEParamGetTiposPaises. Si TIPODOC es distinto de 30, 91 o 94 no debe informarse el id 92. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10083 

Si informa Id = 93, el valor ingresado no puede ser blanco y debe ser alfanumérico de 250 caracteres como máximo <Opcionales><Id>/<CbteTipo> 10084 Si el comprobante es del tipo 49 – Bienes Usados es obligatorio informar el Domicilio del receptor/vendedor el ID = 93. <concepto> 10085 Para comprobantes tipo 49 – Bienes usados, solo informar 1 – Productos <Opcionales><Id>/<CbteTipo> 10086 Si el comprobante es del tipo A (1, 2, 3, 4, 5, 34, 39, 60, 63) e intenta informar datos opcionales según Resolución General 3668, los valores posibles para los identificadores son 5, 61, 62, 7. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10088 

Si informa Id = 5, el valor ingresado no puede ser blanco y debe ser alfanumérico de 2 caracteres. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10089 

 Si informa Id = 5, el contenido del campo <Valor> debe corresponder a un código de EXCEPCION válido comprendido por alguno de los sig: 

,**Campo / Grupo Código de error Descripción de la validación** 01 – Locador / Prestador del mismo 02 – Congresos / Eventos 03 – Operación contemplada en RG 74 04 – Bienes de Cambio 05 – Ropa de trabajo 06 – Intermediario <Opcionales><Id>/ <Opcionales><Valor> 

###### 10090 

Si informa Id = 61, el valor ingresado no puede ser blanco y debe ser numérico de 2 caracteres. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10091 

Si informa Id = 61, el contenido del campo <Valor> debe corresponder a un código que represente el tipo de documento del firmante. Ver método FEParamGetTiposDoc. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10092 

Si informa Id = 62, el valor ingresado no puede ser blanco y debe ser numérico de 11 caracteres como máximo. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10093 

Se encuentra dado de baja mediante redmine RM57235 <Opcionales><Id>/ <Opcionales><Valor> 

###### 10094 

Si informa Id = 7, el valor ingresado no puede ser blanco y debe ser numérico de 2 caracteres. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10095 

Si informa Id = 7, el contenido del campo <Valor> debe corresponder a un código de carácter firmante válido comprendido por alguno de los sig: 01 – Titular 02 – Director / Presidente 03 – Apoderado 04 – Empleado <PtoVta> / <CbteTipo> 10096 Para comprobantes tipo C, si el contribuyente se encuentra registrado en las bases del organismo como exento, el punto de venta a utilizar al momento de 

,**Campo / Grupo Código de error Descripción de la validación** autorizar el comprobante debe ser del tipo “COMPROBANTES – EXENTO EN IVA – WEB SERVICES”. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10097 

Si informa id = 10 (RG 3.368 Establecimientos de educación pública de gestión privada), el valor ingresado no puede ser blanco y debe ser un numerico de 1 carácter: 0 – Actividades no comprendidas 1 – Actividades comprendidas <Opcionales><Id>/ <Opcionales><Valor> 

###### 10098 

Si informa id = 1011 (RG 3.368 Establecimientos de educación pública de gestión privada), el valor ingresado no puede ser blanco y debe corresponder al tipo de documento del titular del pago. Ver método FEParamGetTiposDoc. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10099 

Si informa id = 1012 (RG 3.368 Establecimientos de educación pública de gestión privada), el valor ingresado no puede ser blanco y debe corresponder al n° de documento del titular del pago. Numérico de 11 caracteres como máximo para tipo de documento 80, 86, 87, 96 o alfanumérico de 20 como máximo para el resto de los tipos de documentos. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10110 

Si informa id = 11 (RG 2.820 Operaciones económicas vinculadas con bienes inmuebles), el valor ingresado no puede ser blanco y debe ser un numérico de 1 carácter: 0 – Actividades no comprendidas 1 – Actividades comprendidas <Opcionales><Id>/ <Opcionales><Valor> 

###### 10111 

 Si informa id = 12 (RG 3.687 Locación temporaria de inmuebles con fines turísticos), el valor ingresado no puede ser blanco y debe ser un numérico de 1 carácter: 0 – Actividades no comprendidas 

,**Campo / Grupo Código de error Descripción de la validación** 1 – Actividades comprendidas <Opcionales><Id> 10112 Si intenta informar datos opcionales según Resolución General: RG 3.368 Establecimientos de educación pública de gestión privada (identificador 10) RG 2.820 Operaciones económicas vinculadas con bienes inmuebles (identificador 11) RG 3.687 Locación temporaria de inmuebles con fines turísticos (identificador 12). RG 2.863 Representantes de Modelos (identificador 13). RG 2.863 Agencias de publicidad (identificador 14). RG 2.863 Personas físicas que desarrollen actividad de modelaje (identificador 15). RG 4004-E Alquiler de inmuebles con destino casa habitación (identificador 17, en caso de ser necesario informar titular o cotitular, el identificador que acompaña al 17 es el 1801 y 1802). Recordar que en un mismo comprobante solo puede informar identificadores opcionales para solo 1 resolución por comprobante. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10113 

 Si informa id = 10 (RG 3.368 Establecimientos de educación pública de gestión privada) con valor “1 – Actividades comprendidas” Informar 1011 – Tipo de Documento 1012 – N° de documento Si informa id = 10 (RG 3.368 

,**Campo / Grupo Código de error Descripción de la validación** Establecimientos de educación pública de gestión privada) con valor “0 – Actividades No comprendidas” No informar 1011 – Tipo de Documento 1012 – N° de documento <Opcionales><Id>/ <Opcionales><Valor> 

###### 10114 

Si informa id = 1011 o 1012 (RG 3.368 Establecimientos de educación pública de gestión privada) es obligatorio informar el identificador que representa si se encuentra comprendida (id = 10, valor = 1) <Opcionales><Id>/ <Opcionales><Valor> 

###### 10115 

Si informa id = 10 (RG 3.368 Establecimientos de educación pública de gestión privada) con valor “1 – Actividades comprendidas” e informa ID = 1011 (Tipo de Documento) con un valor que se corresponde al 80, 86, 87, 96 (CUIT, CUIL, CDI, DNI respectivamente), deberá verificarse que el número consignado en el ID = 1012 (n° de documento del titular del pago), se encuentra en los padrones de arca. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10116 

Si informa id = 13 (RG 2.863 Representantes de Modelos), el valor ingresado no puede ser blanco y debe ser un numérico de 1 carácter: 0 Actividades no comprendidas 1 Actividades comprendidas <Opcionales><Id>/ <Opcionales><Valor> 

###### 10117 

Si informa id = 14 (RG 2.863 Agencias de publicidad), el valor ingresado no puede ser blanco y debe ser un numérico de 1 carácter: 0 Actividades no comprendidas 1 Actividades comprendidas <Opcionales><Id>/ 10118 Si informa id = 15 (RG 2.863 Personas físicas que desarrollen 

,**Campo / Grupo Código de error Descripción de la validación** <Opcionales><Valor> actividad de modelaje), el valor ingresado no puede ser blanco y debe ser un numérico de 1 carácter: 0 Actividades no comprendidas 1 Actividades comprendidas <MonId>/<MonCotiz> 10119 Si la moneda es <> PES, el tipo de cambio no podrá ser inferior al 2% ni superior en un 400% del que suministra arca como orientativo de acuerdo a la cotización oficial. Para poder obtener la cotización ver Metodo FEParamGetCotizacion. <CbteAsoc><Tipo> / <CbteAsoc><PtoVta> / 

<CbteAsoc><Nro> (^10120) Si informa comprobantes asociados, y sus códigos son 91, 88, 988, 990, 991, 993, 994, 995, 996, 997, los mismos deben encontrarse registrados. <CbteAsoc><Tipo> / <CbteAsoc><PtoVta> / <CbteAsoc><Nro> (^10121) Si informa comprobantes asociados, y sus códigos son 91, 88, 988, 990, 991, 993, 994, 995, 996, 997, los mismos deben encontrarse confirmados. <DocTipo> / <DocNro> <CbteAsoc><Cuit> 

###### 10122 

Si informa comprobantes asociados y sus códigos son 91, 88, 988, 990, 991, 993, 994, 995, 996, 997, el receptor del comprobante a autorizar debe ser igual al receptor del comprobante asociado. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10123 

Si el comprobante es del tipo B o C e intenta informar datos opcionales según Resolución General 4004-E, los valores posibles para los identificadores son 17, 1801, 1802. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10124 

 Si informa id = 17 (RG 4004-E Locación de inmuebles destino "casa-habitación"), el valor ingresado no puede ser blanco y debe ser un numérico de 1 carácter: 1 (uno) = facturación a través de intermediario 2 (dos) = facturación directa 

,**Campo / Grupo Código de error Descripción de la validación** <Opcionales><Id>/ <Opcionales><Valor> 

###### 10125 

Si informa id = 1801 (RG 4004-E Locación de inmuebles destino "casa-habitación"), el valor ingresado no puede ser blanco y debe corresponder al CUIT del propietario/locador. Numérico de 11 caracteres. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10126 

Si informa Id = 1801 (RG 4004-E Locación de inmuebles destino "casa-habitación"), verificar que el número consignado se encuentra en los padrones de arca. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10127 

Si informa Id = 1802 (RG 4004-E Locación de inmuebles destino "casa-habitación") el valor ingresado no puede ser un blanco y debe ser un alfanumérico de 100 caracteres como máximo que representa el Nombre y Apellido propietario/locador. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10128 

Si informa Id = 1801 (RG 4004-E Locación de inmuebles destino "casa-habitación") con un CUIT propietario/locador no repetirlo dentro de la lista de propietarios/locadores. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10129 

Si informa id 17 con valor 1 (Intermediario) (RG 4004-E Locación de inmuebles destino "casahabitación"), deben informarse obligatoriamente los identificadores 1801 y 1802. Si informa id 17 con valor 2 (Directo) (RG 4004-E Locación de inmuebles destino "casa-habitación"), pueden no informarse los identificadores 1801, 1802. Solo informarlos cuando hay otro/s propietarios/locadores. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10130 

 Si informa id 1801 y id 1802 (RG 4004-E Locación de inmuebles destino "casa-habitación"), la cantidad de opcionales con id 1801 y 1802 deben ser iguales. 

,**Campo / Grupo Código de error Descripción de la validación** <Opcionales><Id>/ <Opcionales><Valor> <Auth><Cuit> 

###### 10131 

Si informa Id = 1801 (RG 4004-E Locación de inmuebles destino "casa-habitación") con un CUIT propietario/locador no puede ser el mismo que el emisor del comprobante. <Opcionales><Id>/ <Opcionales><Valor> 

###### 10132 

Si informa id 1801 y id 1802 (RG 4004-E Locación de inmuebles destino "casa-habitación"), es obligatorio informar el id 17 con valor 1 (Intermediario) o 2 (Directo). <Compradores>/<Comprador> 10133 Si envía compradores, comprador es obligatorio y no debe ser vacío. <FeCabReq><CbteTipo>/ <Compradores> 

###### 10134 

La estructura compradores se encuentra habilitada para comprobantes tipo A, B, C o M. <Compradores>/<Comprador>/<DocTipo> 10135 Si envía compradores, el tipo de documento del comprador es obligatorio informarlo. <FECAEDetRequest><DocTipo>/ <Compradores> 

###### 10136 

Solo informar compradores cuando el tipo de documento del receptor del comprobante es 80, 86, 87 (CUIT, CUIL, CDI respectivamente). <Compradores>/<Comprador>/<DocTipo> 10137 Los tipos de documentos habilitados a informar sobre el comprador son 80, 86, 87 (CUIT, CUIL, CDI respectivamente). <Compradores>/<Comprador>/<DocNro> 10138 Si envía compradores, el número de documento del comprador es obligatorio informarlo. <Compradores>/<Comprador>/<DocNro> 10139 Si envía compradores, el número de documento debe ser un documento con formato válido, numérico de 11 caracteres. <Auth>/<Cuit> <Compradores>/<Comprador>/<DocNro> 

###### 10140 

Si envía compradores, el número de documento del comprador no puede ser igual al número de documento del emisor del comprobante <Compradores>/<Comprador> 10141 Si envía compradores, los mismos no pueden repetirse en la lista. <Compradores>/<Comprador>/<Porcentaje> 10142 Si envía compradores, el porcentaje de titularidad del comprador es 

,**Campo / Grupo Código de error Descripción de la validación** obligatorio informarlo. <Compradores>/<Comprador>/<Porcentaje> 10143 Si envía compradores, el porcentaje de titularidad debe ser un valor numérico de 2 enteros y 2 decimales, los cuales deben ser valores mayores a cero. <Compradores>/<Comprador>/<Porcentaje> 10144 Si envía compradores, el porcentaje de titularidad debe ser mayor a cero. <Compradores>/<Comprador> 10145 Si envía compradores, los compradores informados deben ser al menos 2. Uno de los dos debe ser el receptor del comprobante. <FECAEDetRequest><DocTipo> <FECAEDetRequest><DocNro> <Compradores>/<Comprador>/<DocTipo> <Compradores>/<Comprador>/<DocNro> 

###### 10146 

Si envía compradores, el comprador de mayor porcentaje de titularidad debe coincidir con el receptor del comprobante. <Compradores>/<Comprador>/<Porcentaje> 10147 Si envía compradores, la sumatoria de todos los porcentajes de titularidad debe ser del 100%. <Compradores>/<Comprador>/<DocNro> 10148 Si envía compradores, los compradores deben encontrarse registrados en el padrón de arca, en condición activa. <Compradores>/<Comprador>/<DocNro> 10149 Si envía compradores, y el tipo de comprobante es “A” o “A con leyenda operación sujeta a retención”, el receptor o al menos uno de los compradores deben encontrarse registrados de forma activa en el Impuesto al Valor Agregado o Responsable Monotributo. <FECAEDetRequest><Concepto>/ <Compradores> 

###### 10150 

Solo enviar compradores cuando el concepto es 1 – PRODUCTO <CbteAsoc><Cuit> 10151 Si informa Cuit en comprobantes asociados, no informar en blanco, el mismo debe ser un valor de 11 caracteres numéricos. Para comprobante del tipo MiPyMEs (FCE) del tipo débito o crédito es 

,**Campo / Grupo Código de error Descripción de la validación** obligatorio informar el campo. <CbteFch>/<Concepto> 10152 Si informa fecha de comprobante <CbteFch> para el Concepto del tipo “01 – Productos” con fecha superior a la fecha de envío de autorización, el mes de la fecha del comprobante <CbteFch> debe coincidir con el mes de la fecha de envío de autorización. Si informa fecha de comprobante <CbteFch> para comprobantes del tipo MiPyMEs (FCE) con fecha superior a la fecha de envío de autorización, el mes de la fecha del comprobante <CbteFch> debe coincidir con el mes de la fecha de envío de autorización. <FeCabReq><CbteTipo>/ <FECAEDetRequest><CbtesAsoc> 

###### 10153 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE) y corresponde a un comprobante de débito o crédito, es obligatorio informar comprobantes asociados. <FeCabReq><CbteTipo>/ <CbteAsoc><Tipo><PtoVta><Nro><Cuit> 

###### 10154 

 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE) y corresponde a un comprobante de débito o crédito. Tener en cuenta que: 

- sí el comprobante asociado se encuentra rechazado por el comprador hay que informar el código de anulación correspondiente sobre el campo "Adicionales por RG", códigos 22 - Anulación. Valor “S” 

- sí el comprobante asociado no se encuentra rechazado por el comprador hay que informar el código de no anulación correspondiente sobre el campo "Adicionales por RG", códigos 22 - Anulación. Valor “N” <Auth><Cuit> 10155 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), el 

,**Campo / Grupo Código de error Descripción de la validación** <FeCabReq><CbteTipo>/ <CbteAsoc><Cuit> CUIT del emisor del comprobante asociado debe coincidir con el CUIT del emisor del comprobante a autorizar. <FeCabReq><CbteTipo>/ <CbteAsoc><Tipo> 

###### 10156 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Débito o Crédito sin código de Anulación siempre debe asociar 1 comprobante tipo factura <FeCabReq><CbteTipo>/ <CbteAsoc><Tipo> 

###### 10157 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Débito o Crédito sin código de Anulación solo puede asociar: Para comprobantes A, asociar 201 o (91, 88, 988, 990, 991, 993, 994, 995, 996, 997). Para comprobantes B, asociar 206 o (91, 88, 988, 990, 991, 993, 994, 995, 996, 997). Para comprobantes C, asociar 211 o (91, 88, 988, 990, 991, 993, 994, 995, 996, 997). <FeCabReq><CbteTipo>/ <CbteAsoc> / <Tipo> / <PtoVta> / <Nro> / <Cuit> / <CbteFch> 

###### 10158 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Débito o Crédito, es obligatorio informar la fecha del comprobante asociado <FeCabReq><CbteTipo>/ <FeDetReq>/<CbteFch>/ <CbteAsoc> / <Tipo> / <PtoVta> / <Nro> / <Cuit> / <CbteFch> 

###### 10159 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Débito o Crédito, la fecha del comprobante asociado tiene que ser igual o menor a la fecha del comprobante que se está autorizando <FeCabReq><CbteTipo>/ <CbteAsoc> / <Tipo> / <PtoVta> / <Nro> / <Cuit> / <CbteFch> 

###### 10160 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Débito o Crédito, el comprobante debe existir autorizado en las bases de esta Administración con la misma fecha informada en el asociado. <FeCabReq><CbteTipo>/ 10161 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), el 

,**Campo / Grupo Código de error Descripción de la validación** <FECAEDetRequest><DocTipo><DocNro> receptor del comprobante debe tener habilitado el domicilio fiscal electrónico <FeCabReq><CbteTipo>/ <Opcionales> 

###### 10162 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE) es obligatorio informar <Opcionales> <FeCabReq><CbteTipo>/ <FchVtoPago> 

###### 10163 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Tipo 201 FACTURA DE CREDITO ELECTRONICA MiPyMEs (FCE) A / 206 FACTURA DE CREDITO ELECTRONICA MiPyMEs (FCE) B / 211 FACTURA DE CREDITO ELECTRONICA MiPyMEs (FCE) C, es obligatorio informar FchVtoPago <FeCabReq><CbteTipo>/ <FchVtoPago> / <FECAEDetRequest><CbteFch> 

###### 10164 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), la fecha de vencimiento de pago <FchVtoPago> debe ser posterior o igual a la fecha de emisión <CbteFch> o fecha de presentación (fecha actual), la que sea posterior <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10165 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), informa opcionales, el valor correcto para el código 2101 es un CBU numérico de 22 caracteres. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10166 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), informa opcionales, el valor correcto para el código 2102 es un ALIAS alfanumérico de 6 a 20 caracteres. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10167 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), informa opcionales, el valor correcto para el código 22 es “S” o “N”: S = Es de Anulación N = No es de Anulación <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10168 

Si el tipo de comprobante que está autorizando es Factura (201, 206, 211) del tipo MiPyMEs (FCE), informa opcionales, es obligatorio informar CBU. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10169 

 Si el tipo de comprobante que está autorizando NO es MiPyMEs (FCE), no informar los códigos 2101, 2102, 

,**Campo / Grupo Código de error Descripción de la validación** 22, 27 <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10170 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), es obligatorio informar al menos uno de los sig. códigos 2101, 22, 27. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10171 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Factura (201, 206, 211), no informar Código de Anulación <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10172 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Debito (202, 207, 212) o Crédito (203, 208, 213) No informar CBU, ALIAS y Transferencia. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10173 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), Debito (202, 207, 212) o Crédito (203, 208, 213) informar Código de Anulación <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10174 

Si el tipo de comprobante que está autorizando es factura MiPyMEs (FCE), el CBU debe estar registrado en las bases de esta administración, vigente y pertenecer al emisor del comprobante. <FeCabReq><CbteTipo>/ <FchVtoPago> 

###### 10175 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), el campo “fecha de vencimiento para el pago” <FchVtoPago> no debe informarse si NO es Factura de Crédito. En el caso de ser Débito o Crédito, solo puede informarse si es de Anulación. <FeCabReq><CbteTipo>/ <CbteTipo> / <DocNro> 

###### 10176 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), el campo DocNro para comprobantes deberá ser un valor registrado en el padrón de arca, en condición activa. <FeCabReq><CbteTipo>/ <CbteTipo> / <DocNro> 

###### 10177 

 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE) del tipo A, el receptor del comprobante informado en DocTipo y DocNro debe corresponder a un contribuyente activo en el Impuesto al Valor Agregado. 

,**Campo / Grupo Código de error Descripción de la validación** Si el tipo de comprobante que está autorizando es MiPyMEs (FCE) del tipo B, el receptor del comprobante informado en DocTipo y DocNro debe corresponder a un contribuyente activo en el Impuesto Iva, Monotributo o Exento. Si el tipo de comprobante que está autorizando es MiPyMEs (FCE) del tipo C, el receptor del comprobante informado en DocTipo y DocNro debe corresponder a un contribuyente activo en el Impuesto Iva, Monotributo o Exento. <FeCabReq><CbteTipo>/ <CbteTipo> / <DocNro> 

###### 10178 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE) no se permite informar DocNro 23000000000 (No Categorizado) <FeCabReq><CbteTipo>/ <CbteTipo> / <DocNro> 

###### 10180 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), el receptor del comprobante informado en DocTipo y DocNro debe corresponder a un contribuyente caracterizado como GRANDE o que opto por PYME. Su activida principal debe corresponderse con alguna de las alcanzadas por el régimen. <FeCabReq><CbteTipo>/<MonId> <CbteAsoc> 10181 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), débito o crédito, el mismo debe tener la misma moneda que el comprobante asociado o Pesos para ajuste en las diferencias de cambio (post aceptación/rechazo) <FeCabReq><CbteTipo>/ <FECAEDetRequest><DocTipo><DocNro>/ <CbteAsoc> 

###### 10183 

 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), es débito o crédito, deben coincidir emisores y receptores. Si el comprobante ES de anulación, para autorizar un débito, el tipo de comprobante a asociar debe ser crédito y para autorizar un crédito, 

,**Campo / Grupo Código de error Descripción de la validación** el tipo de comprobante a asociar debe ser una factura o un débito. <FeCabReq><CbteTipo>/<MonId> <CbteAsoc>/ <FeCabReq><ImpTotal> 

###### 10184 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), es crédito el monto del comprobante a autorizar no puede ser mayor o igual al saldo actual de la cuenta corriente. Ver micrositio factura de crédito <FeCabReq><CbteTipo>/ <CbteAsoc>/ 10186 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), es crédito o débito A, de anulación, solo se encuentra habilitado asociar un comprobante de crédito A. Utilizar debito para anular crédito o utilizar crédito para anular débito o factura. <FeCabReq><CbteTipo>/ <CbteAsoc>/ 10187 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), es crédito o débito B, de anulación, solo se encuentra habilitado asociar un comprobante de crédito B. Utilizar debito para anular crédito o utilizar crédito para anular débito o factura. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10189 

Puede identificar una o varias Referencias Comerciales según corresponda. Informar bajo el código 23. Campo alfanumérico de 50 caracteres como máximo. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10190 

Si informa opcionales con más de un identificador 23 – Referencia Comercial, no repetir el valor. <Auth><Cuit>/ <FeCabReq><CbteTipo>/ <FECAEDetRequest><DocNro>/ <FECAEDetRequest><ImpTotal> / <FECAEDetRequest><MonCotiz> / Tope 

###### 10192 

Según la categorización de las CUITs emisora y receptora y el monto facturado debe realizar una factura de crédito electrónica MiPyMEs (FCE). Ver micrositio. <FeCabReq><CbteTipo>/ <CbteAsoc>/ 

###### 10193 

 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), es crédito o débito C, de anulación, solo se encuentra habilitado asociar 

,**Campo / Grupo Código de error Descripción de la validación** un comprobante de crédito C. Utilizar debito para anular crédito o utilizar crédito para anular débito o factura. <FeCabReq><CbteTipo>/ <Compradores> 

###### 10194 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), no se encuentra habilitado informar compradores. <DocTipo>/ <DocNro>/ 10195 Si el tipo de documento del receptor del comprobante que está autorizando es CUIT (código Tipo de Documento 80) y la CUIT se encuentra inactiva por haber sido incluida en la consulta de facturas apócrifas. <FeCabReq><CbteTipo>/ <FECAEDetRequest><PeriodoAsoc> 

###### 10196 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), no se encuentra habilitado informar PeriodoAsoc. <FeCabReq><CbteTipo>/ <FECAEDetRequest><CbtesAsoc>/ <FECAEDetRequest><PeriodoAsoc> 

###### 10197 

Si el comprobante es Debito o Credito, se deberá informar de forma obligatoria los campos Fecha Comprobantes Asociados Desde/Hasta, o al menos un comprobante asociado. <FeCabReq><CbteTipo>/ <FECAEDetRequest><PeriodoAsoc> 

###### 10198 

Si el comprobante es Factura no se deberá informar los campos Fecha Comprobantes Asociados Desde/Hasta <FECAEDetRequest><PeriodoAsoc><FchDesde> 10199 Si envía estructura <PeriodoAsoc> es obligatorio enviar <FchDesde>. <FECAEDetRequest><PeriodoAsoc><FchHasta> 10203 Si envía estructura <PeriodoAsoc> es obligatorio enviar <FchHasta>. <FECAEDetRequest><PeriodoAsoc><FchDesde> 10204 El campo <PeriodoAsoc> <FchDesde> debe corresponder a una fecha valida con formato YYYYMMDD <FECAEDetRequest><PeriodoAsoc><FchHasta> 10205 El campo PeriodoAsoc.FchHasta debe corresponder a una fecha valida con formato YYYYMMDD <FECAEDetRequest><PeriodoAsoc><FchDesde>/ 10206 Las fechas informadas en <PeriodoAsoc> deben ser superiores 

,**Campo / Grupo Código de error Descripción de la validación** <FECAEDetRequest><PeriodoAsoc><FchHasta> a 01/01/2006 <FECAEDetRequest><PeriodoAsoc><FchDesde>/ <FECAEDetRequest><PeriodoAsoc><FchHasta> 

###### 10207 

Las fechas informadas en <PeriodoAsoc>,<FchHasta> debe ser superior o igual a <FchDesde>. <FECAEDetRequest><PeriodoAsoc><FchHasta> 10208 Las fecha informada en <PeriodoAsoc>.<FchHasta> debe ser anterior o igual a la fecha de emisión del comprobante que estamos autorizando <FECAEDetRequest><CbteFch>/ <FECAEDetRequest><CbtesAsoc><CbteFch> 

###### 10210 

Si el comprobante asociado se autorizó de forma electrónica y tiene una fecha de emisión posterior a la fecha de emisión del comprobante por el cual se está solicitando la autorización, ambos deberán ser del mismo mes/año. <FECAEDetRequest><CbtesAsoc><CbteFch> 10211 Informar de forma obligatoria la fecha de Emisión del comprobante asociado si el punto de venta del comprobante asociado es Controlador Fiscal o FactuWeb y el tipo de Comprobante asociado es Factura, Recibo, Nota de Débito/Nota de Crédito <FECAEDetRequest><CbtesAsoc><CbteFch> 10212 De informar fecha de Emisión del comprobante asociado y el punto de venta del comprobante asociado es Controlador Fiscal o FactuWeb, la fecha no puede ser posterior al día de hoy. <FECAEDetRequest><CbtesAsoc><CbteFch> 10213 Si se informan deben tener el siguiente formato yyyymmdd. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10214 

Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), informa opcionales, el tipo de dato correcto para el código 27 es un alfanumérico de 3 caracteres. <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10215 

 Si el tipo de comprobante que está autorizando es MiPyMEs (FCE), informa opcionales y el código es 27, los valores posibles son: SCA = "TRANSFERENCIA AL SISTEMA 

,**Campo / Grupo Código de error Descripción de la validación** DE CIRCULACION ABIERTA" ADC = "AGENTE DE DEPOSITO COLECTIVO" <FeCabReq><CbteTipo>/ <Opcionales><Id><Valor> 

###### 10216 

Si el tipo de comprobante que está autorizando es Factura del tipo MiPyMEs (201, 206, 211), es obligatorio informar <Opcionales> con id = 27. Los valores posibles son SCA o ADC. <FECAEDetRequest><Actividades><Actividad> 10218 Si envía estructura de Actividades, Actividad es obligatorio enviarlo. <FECAEDetRequest><Actividades><Actividad><Id> 10219 Si envía estructura de Actividades, Actividad es obligatorio enviarlo y no debe estar vacío. <FECAEDetRequest><Actividades><Actividad><Id> 10220 El identificador de actividad informado tiene que ser una de las actividades habilitadas. Consultar método FEParamGetActividades. <FECAEDetRequest><Actividades><Actividad><Id> 10221 De enviarse el tag Actividades, las actividades no deben repetirse. <FECAEDetRequest><Actividades><Actividad><Id> 10222 De enviarse actividades, las mismas no deben corresponder a distintos grupos según RG. Es decir, si informa actividades Cárnicas, no pueden estar combinadas con actividades Harineras, de Tabaco, etc. <FECAEDetRequest><Actividades><Actividad><Id> 10223 De enviarse actividades, las mismas deben encontrarse activas para el emisor del comprobante. Ver método FEParamGetActividades. <FECAEDetRequest><Actividades><Actividad><Id> / <Concepto> 

###### 10224 

De enviarse actividades pertenecientes al grupo de actividades Cárnicas, las mismas deben enviarse con comprobantes con Concepto del tipo Producto o Productos y Servicios. <FECAEDetRequest><Actividades><Actividad><Id> /<CbtesAsoc><CbteAsoc><Tipo> 

###### 10225 

Si las actividades informadas corresponden a actividades Cárnicas, informar remito asociado 995 Remito Electrónico Cárnico. <FECAEDetRequest><Actividades><Actividad><Id> 10226 Si las actividades informadas corresponden a actividades Harinas, 

,**Campo / Grupo Código de error Descripción de la validación** /<CbtesAsoc><CbteAsoc><Tipo> informar remito asociado 993 Remito Electrónico Harinero Automotor o 994 Remito Electrónico Harinero Ferroviario. <FECAEDetRequest><Actividades><Actividad><Id> /<CbtesAsoc><CbteAsoc><Tipo> 

###### 10227 

Si las actividades informadas corresponden a actividades Tabaco en Hebras, informar remito asociado 88 Remito Electrónico de Tabaco Acondicionado. <FECAEDetRequest><Actividades><Actividad><Id> /<CbtesAsoc><CbteAsoc><Tipo> 

###### 10228 

Si informa remito 995 Remito Electrónico Cárnico, es obligatorio informar una actividad Cárnica. <FECAEDetRequest><Actividades><Actividad><Id> /<CbtesAsoc><CbteAsoc><Tipo> 

###### 10229 

Si informa remito 993 Remito Electrónico Harinero Automotor o 994 Remito Electrónico Harinero – Ferroviario, es obligatorio informar una actividad Harinera. <FECAEDetRequest><Actividades><Actividad><Id> /<CbtesAsoc><CbteAsoc><Tipo> 

###### 10230 

Si informa remito 88 Remito Electrónico de Tabaco Acondicionado., es obligatorio informar una actividad correspondiente a Tabaco Acondicionado. <FECAEDetRequest><Actividades><Actividad><Id> /<CbtesAsoc><CbteAsoc 

###### 10231 

Si informa actividades indicadas en la RG, es obligatorio informar comprobantes asociados. <CbteAsoc><Tipo> / <CbteAsoc><PtoVta> / 

<CbteAsoc><Nro> (^10232) Si informa comprobantes asociados, y sus códigos corresponden a 91, 88, 988, 990, 991, 993, 994, 995, 996, 997, los mismos no deben encontrarse asociado a otro comprobante. <FECAEDetRequest> / <CanMisMonExt> 10239 Si informa el campo CanMisMonExt, los valores posibles son S o N y no debe quedar vacio. <FECAEDetRequest> / <CanMisMonExt> 10240 Si informa el campo MonCotiz, el mismo no podra superar en 1 a la cotizacion oficial. Ver Metodo FEParamGetCotizacion. <FECAEDetRequest> / <CanMisMonExt> 10241 Si informa MonId = PES, el campo 

,**Campo / Grupo Código de error Descripción de la validación** CanMisMonExt no debe informarse o informarse con el valor N. <FECAEDetRequest> / <CondicionIVAReceptorId> 10242 El campo de identificación de la Condición de IVA del receptor no es un valor permitido. Para mayor detalle consular el método FEParamGetCondicionIvaReceptor. <FECAEDetRequest> / <CondicionIVAReceptorId> 10243 El campo de identificación de Condición de IVA del receptor no es valido para la clase de comprobante informado. Para mas detalle consultar el Método: FEParamGetCondicionIvaReceptor <FECAEDetRequest> / <CondicionIVAReceptorId> 10246 Campo Condición Frente al IVA del receptor es obligatorio conforme a lo reglamentado por la Resolución General N° 5616. Para mas información consular método FEParamGetCondicionIvaReceptor. <FECAEDetRequest> / <DocNro> 10247 La CUIT receptora informada está inactiva o es inválida. Esta validación es excluyente salvo si el tipo de comprobante informado es Nota de Crédito. <FECAEDetRequest> / <DocNro> 10248 La CUIT receptora se encuentra limitada por haber sido caracterizada como sujeto no confiable en materia de Seguridad Social. Esta validación es excluyente salvo si el tipo de comprobante informado es Nota de Crédito. 

<Cuit> / <FeCabReq><CbteTipo> (^10251) Por las Condiciones de la CUIT Emisora, No corresponde realizar el Comprobante. Las entidades financieras no pueden emitir comprobantes del tipo MiPyMEs (FCE). <CbteTipo> / <DocTipo> / <DocNro> 10270 Por las condiciones de la CUIT emisora, no corresponde la utilización del tipo de documento ( DocTipo) = 31. El mismo solo esta destinado a entidades financieras. 

,**Campo / Grupo Código de error Descripción de la validación** <CbteTipo> / <DocTipo> / <DocNro> 10271 El campo DocNro es invalido. Si informa DocTipo = 31, el numero de documento debe ser numérico hasta 4 dígitos <CbteTipo> / <DocTipo> / <CondicionIVAReceptorId> 10272 Campo Condición IVA receptor no permitido. Para entidades financieras, si selecciona TipoDoc=31, el campo Condición Frente al IVA del Receptor debe completarse con el valor = 15 (IVA No Alcanzado) **Validaciones No Excluyentes** Campo / Grupo Código de Observ. **Descripción de la validación** <CbteTipo> / <DocNro> 

###### 10017 

 El campo DocNro para comprobantes Tipo “A” y “A con leyenda operación sujeta a retención” deberá ser un valor registrado en el padrón de ARCA, en condición activa. <CbteAsoc><Tipo> / <CbteAsoc><PtoVta> / <CbteAsoc><Nro> 10041 Si el punto de venta del comprobante asociado (campo <PtoVta> de <CbtesAsoc>) es electrónico, el número de comprobante debe obrar en las bases del organismo para el punto de venta y tipo de comprobante informado. DocTipo / DocNro 10063 Para comprobantes Clase “A” y “A con leyenda operación sujeta a retención” el receptor del comprobante informado en <DocTipo> y <DocNro> debe corresponder a un contribuyente activo en el Impuesto al Valor Agregado o Responsable Monotributo. <Auth><Cuit>/ <DocTipo>/ 

###### 10188 

 Si el tipo de comprobante que está autorizando es 1 Factura A o 4 Recibo A o 6 Factura B o 9 Recibo B 

,Campo / Grupo Código de Observ. **Descripción de la validación** <DocNro>/ o 11 Factura C o 15 Recibo C, por la categorización de las cuits emisora y receptora, se deberia realizar una factura de crédito electrónica. <FECAEDetRequest><Tributos><Id>/ <FECAEDetRequest><PeriodoAsoc><FchDesde>/ <FECAEDetRequest><PeriodoAsoc><FchHasta> 

###### 10209 

Si en la estructura Tributos informa percepciones, <PeriodoAsoc>.<FchDesde> y <PeriodoAsoc>.<FchHasta> deben corresponder al mismo Mes/Anio <CbteTipo> / <DocNro> 10217 Para comprobantes Clase “A” y “A con leyenda operación sujeta a retención”, donde el receptor del comprobante informado en <DocTipo> y <DocNro> se encuentra activo en el Impuesto Responsable Monotributo, “El crédito fiscal discriminado en el presente comprobante solo podrá ser computado a efectos del Procedimiento permanente de transición al Régimen General.” <CbteTipo> / <DocNro> 10234 Para comprobantes Clase “A” y “A con leyenda operación sujeta a retención”, se ha detectado que esta pendiente de presentación el formulario de habilitación de comprobantes o su fecha de presentación es anterior a la fecha de alta en IVA. Para el caso que el comprobante no sea una Nota de Crédito, se debe proceder a anular la operación clase “A” o “A con leyenda operación sujeta a retención” emitida, mediante una Nota de Crédito. <CbteTipo> / <DocNro> / <FECAEDetRequest> / ImpTotal 10235 El monto total del comprobante emitido, excede el límite establecido para la categoría máxima de Monotributo. Por tal motivo, quedarías excluido automáticamente teniendo que solicitar el alta de los tributos (impositivos y de los recursos de la seguridad social) en el régimen general de acuerdo con tu actividad. 

,Campo / Grupo Código de Observ. **Descripción de la validación** <CbteTipo> / <DocNro> / <FECAEDetRequest> / ImpTotal 10236 El monto del comprobante emitido, excede el límite establecido para su categoría de Monotributo. Tenelo en cuenta para la próxima recategorización. <FECAEDetRequest> / ImpTotal / <CbteAsoc> 10237 El importe de la nota de crédito supera el monto del comprobante asociado que estás ajustando. Verificá los montos ingresados y de tratarse de un error, tenés que efectuar el ajuste o anulación de la operación según corresponda. <FECAEDetRequest> / <DocNro> 10238 La CUIT receptora ingresada no existe. <FECAEDetRequest> / <CondicionIVAReceptorId> 10245 El campo Condición Frente al IVA del receptor resultará obligatorio conforme lo reglamentado por la Resolución General N° 5616. Para mas información consular método FEParamGetCondicionIvaReceptor. <FECAEDetRequest> / <DocNro> 10249 El número de documento informado para el sujeto receptor corresponde a un sujeto fallecido, sin sucesión indivisa registrada. **Operatoria ante errores** Para la operatoria del método FECAESolicitar se describe la metodología sugerida ante rechazos / errores de los requerimiento con múltiples comprobantes. Suponiendo que se envían 100 comprobantes por request y el mismo es de Facturas A, punto de venta 1 y los comprobantes son del 51 al 150, se nos plantean 3 situaciones. Aprobación total: donde, cada uno de los 100 comprobantes fue aprobado Rechazo total: se puede dar por dos causas, una por problemas del emisor, y otra por el rechazo del primer comprobante enviado en el bloque de comprobantes del detalle. En el primer caso el response contendrá en el tag Errors todas las causas involucradas; en el segundo caso se incluirá el tag Obs con el motivo de rechazo u ob servación de los comprobantes. Rechazo parcial: se da cuando alguno de los comprobantes incluidos en el request es rechazado. A modo de ejemplo y con los parámetros antes descriptos, se aprueban 

,los comprobantes del 51 al 100, 101 saldrá rechazado y del 102 al 150 saldrá como no procesado; esto se debe a que como debe existir correlatividad numérica y fecha, ante una inconsistencia los comprobantes subsiguientes también se rechazaran. Si se diese este caso, y para proseguir con la autorización de comprobantes se deberá subsanar los errores del 102 y así enviar un nuevo request. Operatoria con errores de comunicación: En el diseño del WsfeV1 se ha previsto que –dada la complejidad actual de las comunicacionespueden ocurrir interrupciones en la comunicación entre el cliente y el WsfeV1 básicamente, el problema podría resumirse al siguiente escenario: el cliente envía una solicitud de CAE al WsfeV1 y se queda esperando una respuesta que no llega, hasta que transcurrido algún tiempo, se produce una condición de time-out. En ese caso, el usuario no sabrá si la solicitud le llegó al WsfeV1, este asignó el CAE y la falla de comunicación se produjo durante el retorno de la información, o bien si la falla ocurrió durante el envío de la solicitud y simplemente WsfeV1 nunca la recibió. En el segundo caso, con simplemente enviar la misma solicitud todo quedaría resuelto, pero en el primer caso, si el cliente envía la misma nueva solicitud de CAE para la misma factura, WsfeV1 devolvería un error de consecutividad puesto que en la base de datos de arca esa factura ya figura como emitida. Para estos casos, se utiliza el método FECompConsultar, que dado el tipo de comprobante, punto de venta y numero de comprobante, retorna toda la información enviada en el método de autorización (FECAESolicitar) más el CAE, fecha de vencimiento del mismo. El WsfeV1 también ofrece mecanismo para la consulta del último comprobante autorizado (FECompUltimoAutorizado). **Ejemplos** Ejemplo 1 Factura A con diferentes Alícuotas de IVA y Tributos sin errores Esquema de factura FEDetRequest **Emisor Tipo Factura A** Pto Vta / Nro 0012-00000001 Fecha : 03 – Sep -2010 **Sr Cliente (destinatario) $ neto % IVA $ IVA $ totales** item1 100,00 21,0% 21,00 121 item2 50,00 10,5% 5,25 52,25 <Tributos> **Tributos Base % Importe** Base imponible 150,00 5,2 7,8 **Totales** $ 150,00 $ 26,25 $ 7,80 $ 184,05 

,<ImpNeto> <ImpIVA> <ImpTrib> <ImpTotal> **Moneda** PES **Tipo de cambio** 1 **REQUEST** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    ```xml
    
```xml
<ar:FECAESolicitar>
  <!--Optional:-->
  <ar:Auth>
    <ar:Token>
      PD94…..
    </ar:Token>
    <ar:Sign>
      tYft0….....
    </ar:Sign>
    <ar:Cuit>
      33693450239
    </ar:Cuit>
  </ar:Auth>
  
```xml
<ar:FeCAEReq>
  
```xml
<ar:FeCabReq>
  <ar:CantReg>
    **1**
  </ar:CantReg>
  <ar:PtoVta>
    **12**
  </ar:PtoVta>
  <ar:CbteTipo>
    **1**
  </ar:CbteTipo>
   FACTURA A
</ar:FeCabReq>
```

  
```xml
<ar:FeDetReq>
  
```xml
<ar:FECAEDetRequest>
  <ar:Concepto>
    **1**
  </ar:Concepto>
   Productos
  <ar:DocTipo>
    **80**
  </ar:DocTipo>
   CUIT
  <ar:DocNro>
    **20111111112**
  </ar:DocNro>
  <ar:CbteDesde>
    **1**
  </ar:CbteDesde>
  <ar:CbteHasta>
    **1**
  </ar:CbteHasta>
  <ar:CbteFch>
    **20100903**
  </ar:CbteFch>
  <ar:ImpTotal>
    **184.05**
  </ar:ImpTotal>
  <ar:ImpTotConc>
    **0**
  </ar:ImpTotConc>
  <ar:ImpNeto>
    **150**
  </ar:ImpNeto>
  <ar:ImpOpEx>
    **0**
  </ar:ImpOpEx>
  <ar:ImpTrib>
    **7.8**
  </ar:ImpTrib>
  <ar:ImpIVA>
    **26.25**
  </ar:ImpIVA>
  <ar:FchServDesde>
  </ar:FchServDesde>
  <ar:FchServHasta>
  </ar:FchServHasta>
  <ar:FchVtoPago>
  </ar:FchVtoPago>
  <ar:MonId>
    **PES**
  </ar:MonId>
  <ar:MonCotiz>
    **1**
  </ar:MonCotiz>
  <ar:CondicionIVAReceptorId>
    1
  </ar:CondicionIVAReceptorId>
  ```xml
  <ar:Tributos>
    <ar:Tributo>
      <ar:Id>
        **99**
      </ar:Id>
      <ar:Desc>
        **Impuesto Municipal Matanza**
      </ar:Desc>
      <ar:BaseImp>
        **150**
      </ar:BaseImp>
      <ar:Alic>
        **5.2**
      </ar:Alic>
      <ar:Importe>
        **7. 8**
      </ar:Importe>
    </ar:Tributo>
    ,
  </ar:Tributos>
  ```

        
```xml
  <ar:Iva>
    <ar:AlicIva>
      <ar:Id>
        **5**
      </ar:Id>
       21%
      <ar:BaseImp>
        **100**
      </ar:BaseImp>
      <ar:Importe>
        **21**
      </ar:Importe>
    </ar:AlicIva>
    <ar:AlicIva>
      <ar:Id>
        **4**
      </ar:Id>
       10.5%
      <ar:BaseImp>
        **50**
      </ar:BaseImp>
      <ar:Importe>
        **5.25**
      </ar:Importe>
    </ar:AlicIva>
  </ar:Iva>
  ```
</ar:FECAEDetRequest>
```

</ar:FeDetReq>
```

</ar:FeCAEReq>
```

</ar:FECAESolicitar>
```

    ```
  </soapenv:Body>
</soapenv:Envelope>
```
 **RESPONSE** 
```xml
<soap:Envelope xmlns:soap=”http://www.w3.org/2003/05/soap-envelope” xmlns:ar=”http://ar.gov.afip.dif.fev1/”>
  <soap:Header/>
  <soap:Body>
    <FECAESolicitarResponse>
      <FECAESolicitarResult>
        <FeCabResp>
          <PtoVta>
            **12**
          </PtoVta>
          <CbteTipo>
            **1**
          </CbteTipo>
           FACTURA A
          <FchProceso>
            **20100902**
          </FchProceso>
          <CantReg>
            **1**
          </CantReg>
          <Resultado>
            **A**
          </Resultado>
           A=APROBADO, R=RECHAZADO, P=PARCIAL
          <Reproceso>
            N
          </Reproceso>
        </FeCabResp>
        <FeDetResp>
          <FECAEDetResponse>
            <Concepto>
              **1**
            </Concepto>
            <DocTipo>
              **80**
            </DocTipo>
             CUIT
            <DocNro>
              **20111111112**
            </DocNro>
            <CbteDesde>
              **1**
            </CbteDesde>
            <CbteHasta>
              **1**
            </CbteHasta>
            <CbteFch>
              **20100903**
            </CbteFch>
            <Resultado>
              **A**
            </Resultado>
            <CAE>
              **41124578989845**
            </CAE>
            <CAEFchVto>
              **20100913**
            </CAEFchVto>
          </FECAEDetResponse>
        </FeDetResp>
      </FECAESolicitarResult>
    </FECAESolicitarResponse>
  </soap:Body>
</soap:Envelope>
```
 Ejemplo 2 Envío con 2 Facturas A con errores parciales (a nivel FEDetRequest). 

,**REQUEST** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    ```xml
    
```xml
<ar:FECAESolicitar>
  <!--Optional:-->
  <ar:Auth>
    <ar:Token>
      **PD94…..**
    </ar:Token>
    <ar:Sign>
      **tYft0….....**
    </ar:Sign>
    <ar:Cuit>
      **33693450239**
    </ar:Cuit>
  </ar:Auth>
  
```xml
<ar:FeCAEReq>
  
```xml
<ar:FeCabReq>
  <ar:CantReg>
    **2**
  </ar:CantReg>
  <ar:PtoVta>
    **12**
  </ar:PtoVta>
  <ar:CbteTipo>
    **1**
  </ar:CbteTipo>
   FACTURA A
</ar:FeCabReq>
```

  
```xml
<ar:FeDetReq>
  
```xml
<ar:FECAEDetRequest>
  <ar:Concepto>
    **1**
  </ar:Concepto>
   Productos
  <ar:DocTipo>
    **80**
  </ar:DocTipo>
   CUIT
  <ar:DocNro>
    **20111111112**
  </ar:DocNro>
  <ar:CbteDesde>
    **2**
  </ar:CbteDesde>
  <ar:CbteHasta>
    **2**
  </ar:CbteHasta>
  <ar:CbteFch>
    **20100903**
  </ar:CbteFch>
  <ar:ImpTotal>
    **184.05**
  </ar:ImpTotal>
  <ar:ImpTotConc>
    **0**
  </ar:ImpTotConc>
  <ar:ImpNeto>
    **150**
  </ar:ImpNeto>
  <ar:ImpOpEx>
    **0**
  </ar:ImpOpEx>
  <ar:ImpTrib>
    **7.8**
  </ar:ImpTrib>
  <ar:ImpIVA>
    **26.25**
  </ar:ImpIVA>
  <ar:FchServDesde>
  </ar:FchServDesde>
  <ar:FchServHasta>
  </ar:FchServHasta>
  <ar:FchVtoPago>
  </ar:FchVtoPago>
  <ar:MonId>
    **PES**
  </ar:MonId>
  <ar:MonCotiz>
    **1**
  </ar:MonCotiz>
  <ar:CondicionIVAReceptorId>
    1
  </ar:CondicionIVAReceptorId>
  ```xml
  <ar:Tributos>
    <ar:Tributo>
      <ar:Id>
        **99**
      </ar:Id>
      <ar:Desc>
        **Impuesto Municipal Matanza**
      </ar:Desc>
      <ar:BaseImp>
        **150**
      </ar:BaseImp>
      <ar:Alic>
        **5.2**
      </ar:Alic>
      <ar:Importe>
        **7.8**
      </ar:Importe>
    </ar:Tributo>
  </ar:Tributos>
  ```

        
```xml
  <ar:Iva>
    <ar:AlicIva>
      <ar:Id>
        **5**
      </ar:Id>
       21%
      <ar:BaseImp>
        **100**
      </ar:BaseImp>
      <ar:Importe>
        **21**
      </ar:Importe>
    </ar:AlicIva>
    ,
    <ar:AlicIva>
      <ar:Id>
        **4**
      </ar:Id>
       10.5%
      <ar:BaseImp>
        **50**
      </ar:BaseImp>
      <ar:Importe>
        **5.25**
      </ar:Importe>
    </ar:AlicIva>
  </ar:Iva>
  ```
</ar:FECAEDetRequest>
```

  
```xml
<ar:FECAEDetRequest>
  <ar:Concepto>
    **1**
  </ar:Concepto>
   Productos
  <ar:DocTipo>
    **80**
  </ar:DocTipo>
   CUIT
  <ar:DocNro>
    **10222222222**
  </ar:DocNro>
   no existente en Padrón arca
  <ar:CbteDesde>
    **4**
  </ar:CbteDesde>
  <ar:CbteHasta>
    **4**
  </ar:CbteHasta>
  <ar:CbteFch>
    **20100901**
  </ar:CbteFch>
  <ar:ImpTotal>
    **184.05**
  </ar:ImpTotal>
  <ar:ImpTotConc>
    **0**
  </ar:ImpTotConc>
  <ar:ImpNeto>
    **150**
  </ar:ImpNeto>
  <ar:ImpOpEx>
    **0**
  </ar:ImpOpEx>
  <ar:ImpTrib>
    **7.8**
  </ar:ImpTrib>
  <ar:ImpIVA>
    **26.25**
  </ar:ImpIVA>
  <ar:FchServDesde>
  </ar:FchServDesde>
  <ar:FchServHasta>
  </ar:FchServHasta>
  <ar:FchVtoPago>
  </ar:FchVtoPago>
  <ar:MonId>
    **PES**
  </ar:MonId>
  <ar:MonCotiz>
    **1**
  </ar:MonCotiz>
  <ar:CondicionIVAReceptorId>
    1
  </ar:CondicionIVAReceptorId>
  ```xml
  <ar:Tributos>
    <ar:Tributo>
      <ar:Id>
        **99**
      </ar:Id>
      <ar:Desc>
        **Impuesto Municipal Matanza**
      </ar:Desc>
      <ar:BaseImp>
        **150**
      </ar:BaseImp>
      <ar:Alic>
        **5.2**
      </ar:Alic>
      <ar:Importe>
        **7.8**
      </ar:Importe>
    </ar:Tributo>
  </ar:Tributos>
  ```

        
```xml
  <ar:Iva>
    <ar:AlicIva>
      <ar:Id>
        **5**
      </ar:Id>
       21%
      <ar:BaseImp>
        **100**
      </ar:BaseImp>
      <ar:Importe>
        **21**
      </ar:Importe>
    </ar:AlicIva>
    <ar:AlicIva>
      <ar:Id>
        **4**
      </ar:Id>
       10.5%
      <ar:BaseImp>
        **50**
      </ar:BaseImp>
      <ar:Importe>
        **5.25**
      </ar:Importe>
    </ar:AlicIva>
  </ar:Iva>
  ```
</ar:FECAEDetRequest>
```

</ar:FeDetReq>
```

</ar:FeCAEReq>
```

</ar:FECAESolicitar>
```

    ```
  </soapenv:Body>
</soapenv:Envelope>
```
 

,**RESPONSE** 
```xml
<soap:Envelope xmlns:soap=”http://www.w3.org/2003/05/soap-envelope” xmlns:ar=”http://ar.gov.afip.dif.fev1/”>
  <soap:Header/>
  <soap:Body>
    <FECAESolicitarResponse>
      <FECAESolicitarResult>
        <FeCabResp>
          <CantReg>
            **2**
          </CantReg>
          <PtoVta>
            **12**
          </PtoVta>
          <CbteTipo>
            **1**
          </CbteTipo>
           FACTURA A
          <FchProceso>
            **20100902**
          </FchProceso>
          <Resultado>
            **P**
          </Resultado>
           A=APROBADO, R=RECHAZADO, P=PARCIAL
          <Reproceso>
            N
          </Reproceso>
        </FeCabResp>
        <FeDetResp>
          <FECAEDetResponse>
            <Concepto>
              **1**
            </Concepto>
            <DocTipo>
              **80**
            </DocTipo>
             CUIT
            <DocNro>
              **20111111112**
            </DocNro>
            <CbteDesde>
              **2**
            </CbteDesde>
            <CbteHasta>
              **2**
            </CbteHasta>
            <CbteFch>
              **20100903**
            </CbteFch>
            <Resultado>
              **A**
            </Resultado>
            <CAE>
              **41124599989845**
            </CAE>
            <CAEFchVto>
              **20100913**
            </CAEFchVto>
          </FECAEDetResponse>
          <FECAEDetResponse>
            <Concepto>
              **1**
            </Concepto>
            <DocTipo>
              **80**
            </DocTipo>
             CUIT
            <DocNro>
              **10222222222**
            </DocNro>
            <CbteDesde>
              **4**
            </CbteDesde>
            <CbteHasta>
              **4**
            </CbteHasta>
            <CbteFch>
              **20100901**
            </CbteFch>
            <Resultado>
              **R**
            </Resultado>
            <CAE>
            </CAE>
             Sin CAE por Rechazo
            <CAEFchVto>
            </CAEFchVto>
            <Observaciones>
              <Obs>
                <Code>
                  **10030**
                </Code>
                <Msg>
                  **Cuit 10222222222 no registrada en padrón arca**
                </Msg>
              </Obs>
              <Obs>
                <Code>
                  **10016**
                </Code>
                <Msg>
                  **comp. 4 no coincide con el próximo a autorizar**
                </Msg>
              </Obs>
            </Observaciones>
          </FECAEDetResponse>
        </FeDetResp>
      </FECAESolicitarResult>
    </FECAESolicitarResponse>
  </soap:Body>
</soap:Envelope>
```
 

,Ejemplo 3 Envio con 1 Facturas A con errores generales (a nivel de FeCAEReq). **REQUEST** 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    ```xml
    
```xml
<ar:FECAESolicitar>
  <!--Optional:-->
  <ar:Auth>
    <ar:Token>
      **PD94…..**
    </ar:Token>
    <ar:Sign>
      **tYft0….....
    </ar:** Sign>
    <ar:Cuit>
      **33693450239**
    </ar:Cuit>
  </ar:Auth>
  
```xml
<ar:FeCAEReq>
  
```xml
<ar:FeCabReq>
  <ar:CantReg>
    **2**
  </ar:CantReg>
  <ar:PtoVta>
    **15**
  </ar:PtoVta>
  <ar:CbteTipo>
    **1**
  </ar:CbteTipo>
   FACTURA A
</ar:FeCabReq>
```

  
```xml
<ar:FeDetReq>
  
```xml
<ar:FECAEDetRequest>
  <ar:Concepto>
    **1**
  </ar:Concepto>
   Productos
  <ar:DocTipo>
    **80**
  </ar:DocTipo>
   CUIT
  <ar:DocNro>
    **20111111112**
  </ar:DocNro>
  <ar:CbteDesde>
    **1**
  </ar:CbteDesde>
  <ar:CbteHasta>
    **1**
  </ar:CbteHasta>
  <ar:CbteFch>
    **20100903**
  </ar:CbteFch>
  <ar:ImpTotal>
    **184.05**
  </ar:ImpTotal>
  <ar:ImpTotConc>
    **0**
  </ar:ImpTotConc>
  <ar:ImpNeto>
    **150**
  </ar:ImpNeto>
  <ar:ImpOpEx>
    **0**
  </ar:ImpOpEx>
  <ar:ImpTrib>
    **7.8**
  </ar:ImpTrib>
  <ar:ImpIVA>
    **26.25**
  </ar:ImpIVA>
  <ar:FchServDesde>
  </ar:FchServDesde>
  <ar:FchServHasta>
  </ar:FchServHasta>
  <ar:FchVtoPago>
  </ar:FchVtoPago>
  <ar:MonId>
    **PES**
  </ar:MonId>
  <ar:MonCotiz>
    **1**
  </ar:MonCotiz>
  <ar:CondicionIVAReceptorId>
    1
  </ar:CondicionIVAReceptorId>
  ```xml
  <ar:Tributos>
    <ar:Tributo>
      <ar:Id>
        **99**
      </ar:Id>
      <ar:Desc>
        **Impuesto Municipal Matanza**
      </ar:Desc>
      <ar:BaseImp>
        **150**
      </ar:BaseImp>
      <ar:Alic>
        **5.2**
      </ar:Alic>
      <ar:Importe>
        **7.8**
      </ar:Importe>
    </ar:Tributo>
  </ar:Tributos>
  ```

        
```xml
  <ar:Iva>
    <ar:AlicIva>
      ,
      <ar:Id>
        **5**
      </ar:Id>
       21%
      <ar:BaseImp>
        **100**
      </ar:BaseImp>
      <ar:Importe>
        **21**
      </ar:Importe>
    </ar:AlicIva>
    <ar:AlicIva>
      <ar:Id>
        **4**
      </ar:Id>
       10.5%
      <ar:BaseImp>
        **50**
      </ar:BaseImp>
      <ar:Importe>
        **5.25**
      </ar:Importe>
    </ar:AlicIva>
  </ar:Iva>
  ```
</ar:FECAEDetRequest>
```

</ar:FeDetReq>
```

</ar:FeCAEReq>
```

</ar:FECAESolicitar>
```

    ```
  </soapenv:Body>
</soapenv:Envelope>
```
 **RESPONSE** 
```xml
<soap:Envelope xmlns:soap=”http://www.w3.org/2003/05/soap-envelope” xmlns:ar=”http://ar.gov.afip.dif.fev1/”>
  <soap:Header/>
  <soap:Body>
    <FECAESolicitarResponse>
      <FECAESolicitarResult>
        <FeCabResp>
          <CantReg>
            **2**
          </CantReg>
          <PtoVta>
            **15**
          </PtoVta>
          <CbteTipo>
            **1**
          </CbteTipo>
           FACTURA A
          <FchProceso>
            **20100902**
          </FchProceso>
          <Resultado>
            **R**
          </Resultado>
           A=APROBADO, R=RECHAZADO, P=PARCIAL
          <Reproceso>
            N
          </Reproceso>
        </FeCabResp>
        
```xml

```xml
<Errors>
  <Err>
    <Code>
      **10002**
    </Code>
    <Msg>
      **No coincide la cantidad de registros informadas con la cantidad real enviada**
    </Msg>
  </Err>
  <Err>
    <Code>
      **1005**
    </Code>
    <Msg>
      **El punto de venta no se encuentra empadronado**
    </Msg>
  </Err>
</Errors>
```

```

      </FECAESolicitarResult>
    </FECAESolicitarResponse>
  </soap:Body>
</soap:Envelope>
```
 Ejemplo 4 Envio con 1 Factura Tipo 49 – Bienes Usados para emisor RI con errores (a nivel de FeCAEReq). **REQUEST** 

,
```xml
<soapenv:Envelope xmlns:soapenv=”http://schemas.xmlsoap.org/soap/envelope/” xmlns:ar=”http://ar.gov.afip.dif.FEV1/”>
  <soapenv:Header/>
  <soapenv:Body>
    ```xml
    
```xml
<ar:FECAESolicitar>
  <ar:Auth>
    <ar:Token>
      PD94…..
    </ar:Token>
    <ar:Sign>
      tYft0….....
    </ar:Sign>
    <ar:Cuit>
      23000000004
    </ar:Cuit>
  </ar:Auth>
  
```xml
<ar:FeCAEReq>
  
```xml
<ar:FeCabReq>
  <ar:CantReg>
    1
  </ar:CantReg>
  <ar:PtoVta>
    15
  </ar:PtoVta>
  <ar:CbteTipo>
    49
  </ar:CbteTipo>
   BIENES USADOS
</ar:FeCabReq>
```

  
```xml
<ar:FeDetReq>
  
```xml
<ar:FECAEDetRequest>
  <ar:Concepto>
    2
  </ar:Concepto>
   Servicios
  <ar:DocTipo>
    80
  </ar:DocTipo>
   CUIT
  <ar:DocNro>
    20111111112
  </ar:DocNro>
  <ar:CbteDesde>
    1
  </ar:CbteDesde>
  <ar:CbteHasta>
    1
  </ar:CbteHasta>
  <ar:CbteFch>
    20130708
  </ar:CbteFch>
  <ar:ImpTotal>
    1605
  </ar:ImpTotal>
  <ar:ImpTotConc>
    1000
  </ar:ImpTotConc>
  <ar:ImpNeto>
    500
  </ar:ImpNeto>
  <ar:ImpOpEx>
    0
  </ar:ImpOpEx>
  <ar:ImpTrib>
    0
  </ar:ImpTrib>
  <ar:ImpIVA>
    105
  </ar:ImpIVA>
  <ar:FchServDesde>
    20130708
  </ar:FchServDesde>
  <ar:FchServHasta>
    20130708
  </ar:FchServHasta>
  <ar:FchVtoPago>
    20130708
  </ar:FchVtoPago>
  <ar:MonId>
    PES
  </ar:MonId>
  <ar:MonCotiz>
    1
  </ar:MonCotiz>
  <ar:CondicionIVAReceptorId>
    1
  </ar:CondicionIVAReceptorId>
  ```xml
  <ar:Iva>
    <ar:AlicIva>
      <ar:Id>
        5
      </ar:Id>
       21%
      <ar:BaseImp>
        500
      </ar:BaseImp>
      <ar:Importe>
        105
      </ar:Importe>
    </ar:AlicIva>
  </ar:Iva>
  ```
</ar:FECAEDetRequest>
```

</ar:FeDetReq>
```

</ar:FeCAEReq>
```

</ar:FECAESolicitar>
```

    ```
  </soapenv:Body>
</soapenv:Envelope>
```
 **RESPONSE** 
```xml
<soap:Envelope xmlns:soap=”http://www.w3.org/2003/05/soap-envelope” xmlns:ar=”http://ar.gov.afip.dif.FEV1/”>
  <soap:Header/>
  ,
  <soap:Body>
    <FECAESolicitarResponse>
      <FECAESolicitarResult>
        <FeCabResp>
          <Cuit>
            23000000004
          </Cuit>
          <PtoVta>
            15
          </PtoVta>
          <CbteTipo>
            49
          </CbteTipo>
          <FchProceso>
            20130708124213
          </FchProceso>
          <CantReg>
            1
          </CantReg>
          <Resultado>
            R
          </Resultado>
          <Reproceso>
            N
          </Reproceso>
        </FeCabResp>
        <FeDetResp>
          <FECAEDetResponse>
            <Concepto>
              2
            </Concepto>
            <DocTipo>
              80
            </DocTipo>
            <DocNro>
              30000000007
            </DocNro>
            <CbteDesde>
              1
            </CbteDesde>
            <CbteHasta>
              1
            </CbteHasta>
            <CbteFch>
              20130708
            </CbteFch>
            <Resultado>
              R
            </Resultado>
            <Observaciones>
              <Obs>
                <Code>
                  10030
                </Code>
                <Msg>
                  Para comprobantes de Bienes Usados, Concepto debe ser igual a 1 – PRODUCTOS
                </Msg>
              </Obs>
              <Obs>
                <Code>
                  10076
                </Code>
                <Msg>
                  Si el comprobante es CbteTipo = 49 (Bienes Usados), es obligatorio informar opcionales. Ver método FEParamGetTiposOpcional()
                </Msg>
              </Obs>
            </Observaciones>
            <CAE/>
            <CAEFchVto/>
          </FECAEDetResponse>
        </FeDetResp>
      </FECAESolicitarResult>
    </FECAESolicitarResponse>
  </soap:Body>
</soap:Envelope>
```
 Ejemplo 5 Envio con 1 Factura Tipo 49 – Bienes Usados para emisor RI. **REQUEST** 
```xml
<soapenv:Envelope xmlns:soapenv=”http://schemas.xmlsoap.org/soap/envelope/” xmlns:ar=”http://ar.gov.afip.dif.FEV1/”>
  <soapenv:Header/>
  <soapenv:Body>
    ```xml
    
```xml
<ar:FECAESolicitar>
  <!--Optional:-->
  <ar:Auth>
    ,
    <ar:Token>
      PD94…..
    </ar:Token>
    <ar:Sign>
      tYft0….....
    </ar:Sign>
    <ar:Cuit>
      23000000004
    </ar:Cuit>
  </ar:Auth>
  <!--Optional:-->
  
```xml
<ar:FeCAEReq>
  <!--Optional:-->
  
```xml
<ar:FeCabReq>
  <ar:CantReg>
    1
  </ar:CantReg>
  <ar:PtoVta>
    1114
  </ar:PtoVta>
  <ar:CbteTipo>
    49
  </ar:CbteTipo>
</ar:FeCabReq>
```

  <!--Optional:-->
  
```xml
<ar:FeDetReq>
  
```xml
<ar:FECAEDetRequest>
  <ar:Concepto>
    1
  </ar:Concepto>
  <ar:DocTipo>
    80
  </ar:DocTipo>
  <ar:DocNro>
    30000000007
  </ar:DocNro>
  <ar:CbteDesde>
    6
  </ar:CbteDesde>
  <ar:CbteHasta>
    6
  </ar:CbteHasta>
  <!–Optional: <ar:CbteFch>
  20130720
</ar:CbteFch>
<ar:ImpTotal>
  1605
</ar:ImpTotal>
<ar:ImpTotConc>
  1000
</ar:ImpTotConc>
<ar:ImpNeto>
  500
</ar:ImpNeto>
<ar:ImpOpEx>
  0
</ar:ImpOpEx>
<ar:ImpTrib>
  0
</ar:ImpTrib>
<ar:ImpIVA>
  105
</ar:ImpIVA>
<ar:MonId>
  PES
</ar:MonId>
<ar:MonCotiz>
  1
</ar:MonCotiz>
<ar:CondicionIVAReceptorId>
  1
</ar:CondicionIVAReceptorId>
```xml
<ar:Iva>
  <ar:AlicIva>
    <ar:Id>
      5
    </ar:Id>
    <ar:BaseImp>
      500
    </ar:BaseImp>
    <ar:Importe>
      105
    </ar:Importe>
  </ar:AlicIva>
</ar:Iva>
```

      
```xml
<ar:Opcionales>
  <ar:Opcional>
    <ar:Id>
      91
    </ar:Id>
    <ar:Valor>
      85 Nerina Soledad Estela
    </ar:Valor>
  </ar:Opcional>
  <ar:Opcional>
    <ar:Id>
      93
    </ar:Id>
    <ar:Valor>
      Libertad 3333 Torre A – CABA – Argentina
    </ar:Valor>
  </ar:Opcional>
</ar:Opcionales>
```
</ar:FECAEDetRequest>
```

</ar:FeDetReq>
```

</ar:FeCAEReq>
```

</ar:FECAESolicitar>
```

  ```
</soapenv:Body>
</soapenv:Envelope>
```
 **RESPONSE** 

,
```xml
<soap:Envelope xmlns:soap=”http://schemas.xmlsoap.org/soap/envelope/” xmlns:xsi=”http://www.w3.org/2001/XMLSchema-instance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema”>
  <soap:Body>
    <FECAESolicitarResponse xmlns=”http://ar.gov.afip.dif.FEV1/”>
      <FECAESolicitarResult>
        <FeCabResp>
          <Cuit>
            23000000004
          </Cuit>
          <PtoVta>
            1114
          </PtoVta>
          <CbteTipo>
            49
          </CbteTipo>
          <FchProceso>
            20130715114927
          </FchProceso>
          <CantReg>
            1
          </CantReg>
          <Resultado>
            A
          </Resultado>
          <Reproceso>
            N
          </Reproceso>
        </FeCabResp>
        <FeDetResp>
          <FECAEDetResponse>
            <Concepto>
              1
            </Concepto>
            <DocTipo>
              80
            </DocTipo>
            <DocNro>
              30000000007
            </DocNro>
            <CbteDesde>
              5
            </CbteDesde>
            <CbteHasta>
              5
            </CbteHasta>
            <CbteFch>
              20130720
            </CbteFch>
            <Resultado>
              A
            </Resultado>
            <CAE>
              63288001286615
            </CAE>
            <CAEFchVto>
              20130730
            </CAEFchVto>
          </FECAEDetResponse>
        </FeDetResp>
      </FECAESolicitarResult>
    </FECAESolicitarResponse>
  </soap:Body>
</soap:Envelope>
```
 Ejemplo 6 Envio con 1 Factura Tipo 49 – Bienes Usados para emisor Monotributista. **REQUEST** 
```xml
<soapenv:Envelope xmlns:soapenv=”http://schemas.xmlsoap.org/soap/envelope/” xmlns:ar=”http://ar.gov.afip.dif.FEV1/”>
  <soapenv:Header/>
  <soapenv:Body>
    ```xml
    
```xml
<ar:FECAESolicitar>
  <!--Optional:-->
  <ar:Auth>
    <ar:Token>
      PD94…..
    </ar:Token>
    <ar:Sign>
      tYft0….....
    </ar:Sign>
    <ar:Cuit>
      23000000004
    </ar:Cuit>
  </ar:Auth>
  <!--Optional:-->
  
```xml
<ar:FeCAEReq>
  <!--Optional:-->
  
```xml
<ar:FeCabReq>
  <ar:CantReg>
    1
  </ar:CantReg>
  ,
  <ar:PtoVta>
    2
  </ar:PtoVta>
  <ar:CbteTipo>
    49
  </ar:CbteTipo>
</ar:FeCabReq>
```

  <!--Optional:-->
  
```xml
<ar:FeDetReq>
  <!–-Zero or more repetitions:-->
  
```xml
<ar:FECAEDetRequest>
  <ar:Concepto>
    1
  </ar:Concepto>
  <ar:DocTipo>
    91
  </ar:DocTipo>
  <ar:DocNro>
    11111111111
  </ar:DocNro>
  <ar:CbteDesde>
    1
  </ar:CbteDesde>
  <ar:CbteHasta>
    1
  </ar:CbteHasta>
  <!--Optional:-->
  <ar:CbteFch>
    20130715
  </ar:CbteFch>
  <ar:ImpTotal>
    1500
  </ar:ImpTotal>
  <ar:ImpTotConc>
    1000
  </ar:ImpTotConc>
  <ar:ImpNeto>
    0
  </ar:ImpNeto>
  <ar:ImpOpEx>
    0
  </ar:ImpOpEx>
  <ar:ImpTrib>
    500
  </ar:ImpTrib>
  <ar:ImpIVA>
    0
  </ar:ImpIVA>
  <ar:MonId>
    PES
  </ar:MonId>
  <ar:MonCotiz>
    1
  </ar:MonCotiz>
  <ar:CondicionIVAReceptorId>
    1
  </ar:CondicionIVAReceptorId>
  ```xml
  <ar:Tributos>
    <ar:Tributo>
      <ar:Id>
        1
      </ar:Id>
      <ar:Desc>
        2
      </ar:Desc>
      <ar:BaseImp>
        1000
      </ar:BaseImp>
      <ar:Alic>
        25
      </ar:Alic>
      <ar:Importe>
        250
      </ar:Importe>
    </ar:Tributo>
    <ar:Tributo>
      <ar:Id>
        2
      </ar:Id>
      <ar:Desc>
        2
      </ar:Desc>
      <ar:BaseImp>
        500
      </ar:BaseImp>
      <ar:Alic>
        100
      </ar:Alic>
      <ar:Importe>
        250
      </ar:Importe>
    </ar:Tributo>
  </ar:Tributos>
  ```

        
```xml
  <ar:Opcionales>
    <ar:Opcional>
      <ar:Id>
        91
      </ar:Id>
      <ar:Valor>
        Atilio Raúl Butaraco
      </ar:Valor>
    </ar:Opcional>
    <ar:Opcional>
      <ar:Id>
        92
      </ar:Id>
      <ar:Valor>
        225
      </ar:Valor>
    </ar:Opcional>
    <ar:Opcional>
      <ar:Id>
        93
      </ar:Id>
      <ar:Valor>
        Av. Benito Blanco 50 piso 3 – Cuidad de Montevideo – Uruguay
      </ar:Valor>
    </ar:Opcional>
  </ar:Opcionales>
  ```
</ar:FECAEDetRequest>
```

</ar:FeDetReq>
```

</ar:FeCAEReq>
```

  ,
</ar:FECAESolicitar>
```

    ```
  </soapenv:Body>
</soapenv:Envelope>
```
 **RESPONSE** 
```xml
<soap:Envelope xmlns:soap=”http://schemas.xmlsoap.org/soap/envelope/” xmlns:xsi=”http://www.w3.org/2001/XMLSchema-instance” xmlns:xsd=”http://www.w3.org/2001/XMLSchema”>
  <soap:Body>
    <FECAESolicitarResponse xmlns=”http://ar.gov.afip.dif.FEV1/”>
      <FECAESolicitarResult>
        <FeCabResp>
          <Cuit>
            23000000004
          </Cuit>
          <PtoVta>
            2
          </PtoVta>
          <CbteTipo>
            49
          </CbteTipo>
          <FchProceso>
            20130715130307
          </FchProceso>
          <CantReg>
            1
          </CantReg>
          <Resultado>
            A
          </Resultado>
          <Reproceso>
            N
          </Reproceso>
        </FeCabResp>
        <FeDetResp>
          <FECAEDetResponse>
            <Concepto>
              1
            </Concepto>
            <DocTipo>
              91
            </DocTipo>
            <DocNro>
              11111111111
            </DocNro>
            <CbteDesde>
              1
            </CbteDesde>
            <CbteHasta>
              1
            </CbteHasta>
            <CbteFch>
              20130715
            </CbteFch>
            <Resultado>
              A
            </Resultado>
            <CAE>
              63288001286628
            </CAE>
            <CAEFchVto>
              20130725
            </CAEFchVto>
          </FECAEDetResponse>
        </FeDetResp>
      </FECAESolicitarResult>
    </FECAESolicitarResponse>
  </soap:Body>
</soap:Envelope>
```
 
