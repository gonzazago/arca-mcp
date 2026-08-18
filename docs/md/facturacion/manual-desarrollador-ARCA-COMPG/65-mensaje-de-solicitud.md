##### Mensaje de solicitud 

Recibe la información del comprobante o lote de comprobantes. 
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="http://ar.gov.afip.dif.FEV1/">
  <soapenv:Header/>
  <soapenv:Body>
    
```xml

```xml
<ar:FECAEARegInformativo>
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
  <ar:FeCAEARegInfReq>
    
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
  <ar:FECAEADetRequest>
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
    <ar:ImpIVA>
      **double**
    </ar:ImpIVA>
    <ar:ImpTrib>
      **double**
    </ar:ImpTrib>
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
          **long**
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
      ,
      <ar:Opcional>
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
    <ar:PeriodoAsoc>
      <ar:FchDesde>
        **string**
      </ar:FchDesde>
      <ar:FchHasta>
        **string**
      </ar:FchHasta>
    </ar:PeriodoAsoc>
    ```
    <ar:CAEA>
      **string**
    </ar:CAEA>
    <ar:CbteFchHsGen>
      **string**
    </ar:CbteFchHsGen>
    ```xml
    <ar:Actividades>
      <ar:Actividad>
        <ar:Id>
          **Long**
        </ar:Id>
      </ar:Actividad>
    </ar:Actividades>
    ```
  </ar:FECAEADetRequest>
</ar:FeDetReq>
```

  </ar:FeCAEARegInfReq>
</ar:FECAEARegInformativo>
```

```

  </soapenv:Body>
</soapenv:Envelope>
```
 Dónde: **Campo Detalle Obligatorio** Auth Información de la autenticación. Contiene los datos de Token, Sign y Cuit 

###### S 

 Token Token devuelto por el WSAA S Sign Sign devuelto por el WSAA S Cuit Cuit contribuyente (representado o Emisora) S Campo Detalle Obligatorio FeCAEARegInfReq Información del comprobante o lote de comprobantes de ingreso. Contiene los datos de FeCabReq y FeDetReq 

###### S 

 FeCabReq Información de la cabecera del comprobante o lote de comprobantes de ingreso 

###### S 

 FeDetReq / FECAEADetRequest Información del detalle del comprobante o lote de comprobantes de ingreso. 

###### S 

**FeCabReq** : La cabecera del comprobante o lote de comprobantes de ingreso está compuesta por los siguientes campos: **Campo Tipo Detalle Obligatorio** CantReg Int (4) Cantidad de registros del detalle del comprobante o lote de comprobantes de ingreso 

###### S 

CbteTipo Int (3) (^) Tipo de comprobante que se está informando. Si se S 

, informa más de un comprobante, todos deben ser del mismo tipo. PtoVta Int (5) Punto de Venta del comprobante que se está informando. Si se informa más de un comprobante, todos deben corresponder al mismo punto de venta. 

###### S 

**FeDetReq** : El detalle del comprobante o lote de comprobantes de ingreso esta compuesto por los siguientes campos: **Campo Tipo Detalle Obligatorio** Concepto Int (2) Concepto del comprobante. Valores permitidos 1 Productos 2 Servicios 3 Productos y Servicios 

###### S 

 DocTipo Int (2) Código de documento identificatorio del comprador 

###### S 

 DocNro Long (11) Nro. De identificación del comprador S CbteDesde Long (8) Nro. De comprobante desde Rango 199999999 

###### S 

 CbteHasta Long (8) Nro. De comprobante registrado hasta Rango 199999999 

###### S 

 CbteFch String (8) Fecha del comprobante (yyyymmdd). Para Concepto igual a 1, la fecha de emisión del comprobante puede ser hasta más 5 días respecto de la fecha de generación. La misma no podrá exceder el mes de presentación. Si se indica Concepto igual a 2 ó 3 puede ser hasta 10 días anteriores o posteriores a la fecha de generación 

###### N 

 ImpTotal Double (13+2) Importe total del comprobante, Debe ser igual a Importe neto no gravado + Importe exento + Importe neto gravado + todos los campos de IVA al XX% + Importe de tributos 

###### S 

 ImpTotConc Double (13+2) Importe neto no gravado. Debe ser menor o igual a Importe total y no puede ser menor a cero. 

###### S 

 ImpNeto Double (13+2) Importe neto gravado. Debe ser menor o igual a Importe total y no puede ser menor a cero. 

###### S 

ImpOpEx (^) Double Importe exento. Debe ser menor o igual a S 

,**Campo Tipo Detalle Obligatorio** (13+2) Importe total y no puede ser menor a cero. ImpIVA Double (13+2) Suma de los importes del array de IVA S ImpTrib Double (13+2) Suma de los importes del array de tributos S FchServDesde String (8) Fecha de inicio del abono para el servicio a facturar. Dato obligatorio para concepto 2 o 3 (Servicios / Productos y Servicios). Formato yyyymmdd 

###### N 

FchServHasta String (8) Fecha de fin del abono para el servicio a facturar. Dato obligatorio para concepto 2 o 3 (Servicios / Productos y Servicios). Formato yyyymmdd. FchServHasta no puede ser menor a FchServDesde 

###### N 

FchVtoPago String (8) Fecha de vencimiento del pago servicio a facturar. Dato obligatorio para concepto 2 o 3 (Servicios / Productos y Servicios). Formato yyyymmdd. Debe ser igual o posterior a la fecha del comprobante. 

###### N 

MonId String (3) Código de moneda del comprobante. Consultar método FEParamGetMonedas para valores posibles 

###### S 

MonCotiz Double (4+6) Cotización de la moneda informada. Para PES, pesos argentinos la misma debe ser 1. De informar el campo, el mismo no puede quedar vacío. 

###### N 

CanMisMonExt String (1) Marca que identifica si el comprobante se cancela en misma moneda del comprobante (moneda extranjera). Valores posibles S o N. 

###### N 

CondicionIVARec eptorId Int (2) Condición Frente al IVA del receptor. Consultar método “FEParamGetCondicionIvaReceptor” Campo obligatorio. Si el valor informado no es valido, para CAE rechazará y en CAEA observará. Si el valor no existe rechazará en ambos casos. 

###### N 

CbtesAsoc Array Array para informar los comprobantes asociados <CbteAsoc> 

###### N 

Tributos Array Array para informar los tributos asociados a un comprobante <Tributo>. 

###### N 

IVA Array Array para informar las alícuotas y sus importes asociados a un comprobante. 

###### N 

, Campo Tipo Detalle Obligatorio Opcionales Array Array de campos auxiliares. Reservado usos futuros. Adicionales por R.G. 

###### N 

 PeriodoAsoc Periodo Estructura compuesta por la fecha desde y la fecha hasta del periodo que se quiere identificar 

###### N 

 CAEA String (14) Código de Autorización electrónico anticipado S CbteFchHsGen String(14) Fecha y Hora de generación del comprobante por contingencia. Formato yyyymmddhhmiss 

###### N 

 Actividades Actividad Array para informar las actividades asociadas a un comprobante. 

###### N 

**CbteAsoc** : Detalle de los comprobantes relacionados con el comprobante que se está informando (array). **Campo Tipo Detalle Obligatorio** Tipo Int (3) Código de tipo de comprobante. Consultar método FEParamGetTiposCbte 

###### S 

 PtoVta Int (5) Punto de venta S Nro Long (8) Numero de comprobante S Cuit Long (11) Cuit Emisor del comprobante N CbteFch String(8) Fecha del comprobante asociado. Formato yyyymmdd 

###### N 

**Tributos** : Detalle de tributos relacionados con el comprobante que se está informando (array). **Campo Tipo Detalle Obligatorio** Id Int Código tributo según método FEParamGetTiposTributos 

###### S 

 Desc String (80) Descripción del tributo. N BaseImp Double (13+2) Base imponible para la determinación del tributo. 

###### S 

Alic Double (3+2) Alícuota S Importe Double (13+2) Importe del tributo S **IVA:** Detalle de alícuotas relacionadas con el comprobante que se está informando (array). 

, Campo Tipo Detalle Obligatorio Id Int (2) Código de tipo de iva. Consultar método FEParamGetTiposIva 

###### S 

 BaseImp Double (13+2) Base imponible para la determinación de la alícuota. 

###### S 

Importe Double (13+2) Importe S **Opcionales:** Campos auxiliares (array). Adicionales por R.G. Los datos opcionales sólo deberán ser incluidos si el emisor pertenece al conjunto de emisores habilitados a informar opcionales. En ese caso podrá incluir el o los datos opcionales que correspondan, especificando el identificador de dato opcional de acuerdo a la situación del emisor. El listado de tipos de datos opcionales se puede consultar con el método FEParamGetTiposOpcional. Ejemplo: si el emisor está incluido en el “Régimen de Promoción Industrial”, deberá incluir un array de opcionales con un registro como el sig 
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
 **Campo Tipo Detalle Obligatorio** Id String(4) Código de Opcional, consultar método FEParamGetTiposOpcional 

###### S 

Valor String (250) Valor S **Periodo** : Estructura que permite soportar un rango de fechas. **Campo Tipo Detalle Obligatorio** FchDesde String(8) Fecha correspondiente al inicio del periodo de los comprobantes que se quiere identiricar 

###### S 

 FchHasta String(8) Fecha correspondiente al fin del periodo de los comprobantes que se quiere identificar 

###### S 

,**Actividad** : Detalle de la actividad relacionada con las actividades (array) que se indican en el comprobante a autorizar. **Campo Tipo Detalle Obligatorio** Id Long (6) Código actividad según método FEParamGetActividades 

###### S 
