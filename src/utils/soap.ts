export async function sendSoapRequest(url: string, action: string, xmlBody: string): Promise<string> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      "SOAPAction": action,
    },
    body: xmlBody,
  });

  const responseText = await response.text();
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}: ${responseText}`);
  }
  return responseText;
}
