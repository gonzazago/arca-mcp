const resText = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<loginTicketResponse version="1.0">
    <header>
        <source>CN=wsaahomo, O=AFIP, C=AR, SERIALNUMBER=CUIT 33693450239</source>
        <destination>SERIALNUMBER=CUIT 20369486021, CN=empresatest</destination>
        <uniqueId>331588984</uniqueId>
        <generationTime>2026-08-21T08:50:23.663-03:00</generationTime>
        <expirationTime>2026-08-21T20:50:23.663-03:00</expirationTime>
    </header>
    <credentials>
        <token>PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pgo8c3NvIHZlcnNpb249IjIuMCI+CiAgICA8aWQgc3JjPSJDTj13c2FhaG9tbywgTz1BRklQLCBDPUFSLCBTRVJJQUxOVU1CRVI9Q1VJVCAzMzY5MzQ1MDIzOSIgZHN0PSJDTj13c2ZlLCBPPUFGSVAsIEM9QVIiIHVuaXF1ZV9pZD0iMjM2NzY3ODc0NCIgZ2VuX3RpbWU9IjE3ODczMTI5NjMiIGV4cF90aW1lPSIxNzg3MzU2MjIzIi8+CiAgICA8b3BlcmF0aW9uIHR5cGU9ImxvZ2luIiB2YWx1ZT0iZ3JhbnRlZCI+CiAgICAgICAgPGxvZ2luIGVudGl0eT0iMzM2OTM0NTAyMzkiIHNlcnZpY2U9IndzZmUiIHVpZD0iU0VSSUFMTlVNQkVSPUNVSVQgMjAzNjk0ODYwMjEsIENOPWVtcHJlc2F0ZXN0IiBhdXRobWV0aG9kPSJjbXMiIHJlZ21ldGhvZD0iMjIiPgogICAgICAgICAgICA8cmVsYXRpb25zPgogICAgICAgICAgICAgICAgPHJlbGF0aW9uIGtleT0iMjAzNjk0ODYwMjEiIHJlbHR5cGU9IjQiLz4KICAgICAgICAgICAgPC9yZWxhdGlvbnM+CiAgICAgICAgPC9sb2dpbj4KICAgIDwvb3BlcmF0aW9uPgo8L3Nzbz4K</token>
        <sign>dlQMEOTXWdaOqyb7jcFctj+eplJdDhf6wC7Wp41Vk+O4bKrOgcI+si27kVd+pOMWD4U+gnBDe9K4Ulw3SbT0pDmzqNsZhE84PrxaWB6iRg3SCJvx9vNLFFce34EpBBKSA5uabcp1brXlcI2pEzd8vJubih65Ng+mSHobs3Oj1lw=</sign>
    </credentials>
</loginTicketResponse>`;

const tokenMatch = resText.match(/<token>([^<]+)<\/token>/);
const signMatch = resText.match(/<sign>([^<]+)<\/sign>/);

console.log("tokenMatch:", tokenMatch ? tokenMatch[1] : "null");
console.log("signMatch:", signMatch ? signMatch[1] : "null");
