export function getPWADisplayMode() {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches
  if (document.referrer.startsWith('android-app://')) {
    return 'twa' // android trusted web activity
    // @ts-expect-error -iOS Safari only
  } else if (navigator.standalone || isStandalone) {
    return 'standalone'
  }

  return 'browser'
}

export function getPortalsData() {
  return [
    {
      location: 'Almacén Inteligente',
      asset: 'Cargador Aéreo',
      url: 'https://app.getmaintainx.com/request-portal/022f3b21-fa68-4c29-9bfc-e6318c49c412'
    },
    {
      location: 'Almacén Inteligente',
      asset: 'Mesa de Carga MAM',
      url: 'https://app.getmaintainx.com/request-portal/ec2194ec-b57a-4f20-9888-29fe648d66ab'
    },
    {
      location: 'Corte FLOAT',
      asset: 'Mesa de Corte RUBI 516AC',
      url: 'https://app.getmaintainx.com/request-portal/e428b0bc-c68d-4401-b2fa-8ce8679d26ea'
    },
    {
      location: 'Corte Mixto',
      asset: 'Mesa de Carga MC 300B',
      url: 'https://app.getmaintainx.com/request-portal/3d9b0a85-ad0d-43dc-94ab-a71794571d90'
    },
    {
      location: 'Corte Mixto',
      asset: 'Mesa de Corte LAM 304',
      url: 'https://app.getmaintainx.com/request-portal/3b41e016-5dd8-4624-9683-cc0f35069f3c'
    },
    {
      location: 'Corte Mixto',
      asset: 'Mesa de Corte LAM 504',
      url: 'https://app.getmaintainx.com/request-portal/1e0cfe79-320a-45ed-a300-8895913db091'
    },
    {
      location: 'Corte Mixto',
      asset: 'Mesa de Corte RUBI 406AC',
      url: 'https://app.getmaintainx.com/request-portal/2e381183-718a-4557-ac37-37f6b73ce097'
    },
    {
      location: 'Corte Mixto',
      asset: 'Mesa de Transporte AFC 504',
      url: 'https://app.getmaintainx.com/request-portal/d3fd310d-5343-4738-85fe-ed2717a7fda3'
    },
    {
      location: 'DVH y TVH',
      asset: 'Aplicador Distanciadores de Corcho',
      url: 'https://app.getmaintainx.com/request-portal/5bf4c8a9-a61b-413f-a2de-8532d3dcdf3e'
    },
    {
      location: 'DVH y TVH',
      asset: 'Cargador de Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'DVH y TVH',
      asset: 'Estación de Posicionamiento de Marco e Inspección',
      url: 'https://app.getmaintainx.com/request-portal/e4512cab-f57f-47fc-b853-03f9038ddc78'
    },
    {
      location: 'DVH y TVH',
      asset: 'Lavadora Vertical P19364',
      url: 'https://app.getmaintainx.com/request-portal/af364d13-0749-4efa-8f24-532e1f11b2e9'
    },
    {
      location: 'DVH y TVH',
      asset: 'Plegadora de Perfiles Automática',
      url: 'https://app.getmaintainx.com/request-portal/942cb9aa-8d87-435c-bd67-ef2db5ca2efb'
    },
    {
      location: 'DVH y TVH',
      asset: 'Prensa Acoplador de Planos',
      url: 'https://app.getmaintainx.com/request-portal/1fdf2d99-8197-42cb-8921-bbe1663ff5b1'
    },
    {
      location: 'DVH y TVH',
      asset: 'Selladora',
      url: 'https://app.getmaintainx.com/request-portal/d70eceb4-f8c5-46b6-b55f-4ae0b40657db'
    },
    {
      location: 'Matado de Filo',
      asset: 'Canteadora Doble',
      url: 'https://app.getmaintainx.com/request-portal/aec4a446-ebaa-43d6-bb12-9a164d0010a2'
    },
    {
      location: 'Matado de Filo',
      asset: 'Escáner de Vidrio 02/21/534021',
      url: 'https://app.getmaintainx.com/request-portal/d85f49ec-24ad-4f4c-93a6-631fdb87c1af'
    },
    {
      location: 'Matado de Filo',
      asset: 'Estación de Inspección P19351',
      url: 'https://app.getmaintainx.com/request-portal/30914261-e345-4d21-9281-88f91d993576'
    },
    {
      location: 'Matado de Filo',
      asset: 'Lavadora Vertical P19349',
      url: 'https://app.getmaintainx.com/request-portal/23b97ec6-3d81-41d6-ae44-67f5bd890e09'
    },
    {
      location: 'Pulido / Mecanizado',
      asset: 'Canteadora Simple',
      url: 'https://app.getmaintainx.com/request-portal/4386a750-c6f1-45a2-b63c-500a32d0e2f7'
    },
    {
      location: 'Pulido / Mecanizado',
      asset: 'Escáner de Vidrio 01/21/534021',
      url: 'https://app.getmaintainx.com/request-portal/a6c058eb-eb7e-4973-9a3c-446d483312bf'
    },
    {
      location: 'Pulido / Mecanizado',
      asset: 'Estación de Inspección P19359',
      url: 'https://app.getmaintainx.com/request-portal/0b499f84-098f-4a19-a72d-fea41e81a7c0'
    },
    {
      location: 'Pulido / Mecanizado',
      asset: 'Lavadora Vertical P19357',
      url: 'https://app.getmaintainx.com/request-portal/a0b859a8-cdae-445f-b23b-f1edcaec0ded'
    },
    {
      location: 'Pulido / Mecanizado',
      asset: 'Taladro Fresadora Vertical',
      url: 'https://app.getmaintainx.com/request-portal/19cb86d4-dcce-4fb6-9218-2b422bf951d0'
    },
    {
      location: 'Pulido Bilateral',
      asset: 'Lavadora Secadora Horizontal Golive',
      url: 'https://app.getmaintainx.com/request-portal/24a34122-bcc1-4f47-9f37-f3a4404a7860'
    },
    {
      location: 'Pulido Bilateral',
      asset: 'Mesa Basculante de Entrada  Golive',
      url: 'https://app.getmaintainx.com/request-portal/d36fcdf2-cc4c-40c1-a8c4-7e720b8a3563'
    },
    {
      location: 'Pulido Bilateral',
      asset: 'Mesa Basculante de Salida  Golive',
      url: 'https://app.getmaintainx.com/request-portal/ed4e8554-ca1e-4819-bbaa-b48bd5a8949c'
    },
    {
      location: 'Pulido Bilateral',
      asset: 'Mesa de Transferencia Rotativa Entrada  Golive',
      url: 'https://app.getmaintainx.com/request-portal/2c1549e1-8953-4020-b114-7e7709929213'
    },
    {
      location: 'Pulido Bilateral',
      asset: 'Mesa de Transferencia Rotativa Salida  Golive',
      url: 'https://app.getmaintainx.com/request-portal/995e9189-ca86-494e-974f-a5684c7fe785'
    },
    {
      location: 'Pulido Bilateral',
      asset: 'Pulidora Bilateral Entrada',
      url: 'https://app.getmaintainx.com/request-portal/ce6964fe-b4b2-4d77-9963-56b0c47a25ec'
    },
    {
      location: 'Pulido Bilateral',
      asset: 'Pulidora Bilateral Salida',
      url: 'https://app.getmaintainx.com/request-portal/af060dde-fe61-4a6f-b724-1a0548fe4b0d'
    },
    {
      location: 'Sala de Máquinas',
      asset: 'Planta de Tratamiento de Agua',
      url: 'https://app.getmaintainx.com/request-portal/3da8bbe4-9997-4271-8d74-edc5c3f28d75'
    },
    {
      location: 'Sorting 1',
      asset: 'Sorting #1',
      url: 'https://app.getmaintainx.com/request-portal/5994f1cd-0e2d-4809-9fe4-fdaa355ea016'
    },
    {
      location: 'Sorting 2',
      asset: 'Sorting #2',
      url: 'https://app.getmaintainx.com/request-portal/3dbfb4d4-4322-41b0-a5a6-5842796c648f'
    },
    {
      location: 'Templado',
      asset: 'Horno de Templado',
      url: 'https://app.getmaintainx.com/request-portal/635e902d-2ca5-432f-96f9-a192639124c0'
    },
    {
      location: 'Templado',
      asset: 'Mesa Basculante 11024',
      url: 'https://app.getmaintainx.com/request-portal/1a74d34b-320e-47ff-8854-f2c0dd7b1f29'
    },
    {
      location: 'Templado',
      asset: 'Mesa Basculante 11025',
      url: 'https://app.getmaintainx.com/request-portal/b8b1b031-c981-43e0-91ed-70ea0c3c24d2'
    },
    {
      location: 'Laminado',
      asset: 'Compresor GA90',
      url: 'https://app.getmaintainx.com/request-portal/1da105e6-14c6-4d48-8ea0-e6605fca577a'
    },
    {
      location: 'Laminado',
      asset: 'Secadora F335',
      url: 'https://app.getmaintainx.com/request-portal/c13eb90b-75e2-4634-af7b-bc974d111cde'
    },
    {
      location: 'Laminado',
      asset: 'Autoclave',
      url: 'https://app.getmaintainx.com/request-portal/1a625b71-c4fd-41ff-abdd-e9b5f12f48a8'
    },
    {
      location: 'Laminado',
      asset: 'Lavadora Horizontal de Laminado',
      url: 'https://app.getmaintainx.com/request-portal/437b7326-124b-4578-9749-f3566d79bc9b'
    },
    {
      location: 'Laminado',
      asset: 'Sala Blanca de Ensamble',
      url: 'https://app.getmaintainx.com/request-portal/056408d3-93d2-4f45-be00-1c7f881045f2'
    },
    {
      location: 'Laminado',
      asset: 'Horno de Pre-prensado',
      url: 'https://app.getmaintainx.com/request-portal/cf5ab3f1-cda8-410d-acac-33ee0a4f7337'
    },
    {
      location: 'Laminado',
      asset: 'Apilador Automático de Vidrio Laminado',
      url: 'https://app.getmaintainx.com/request-portal/d4fe2eb1-a42a-4e17-890d-a0f27eb4aed9'
    },
    {
      location: 'Corte FLOAT',
      asset: 'Tronzadora',
      url: 'https://app.getmaintainx.com/request-portal/578e6b72-c8dd-4d1c-8d62-22595538441f'
    },
    {
      location: 'Corte FLOAT',
      asset: 'Mesa de Carga MT 600',
      url: 'https://app.getmaintainx.com/request-portal/fd871770-5f7e-4fc7-9fb0-0c7db540eb8d'
    },
    {
      location: 'Templado',
      asset: 'Grabadora Láser',
      url: 'https://app.getmaintainx.com/request-portal/85f6506e-6f8b-499b-9331-3420031188dd'
    },
    {
      location: 'Impresión Digital',
      asset: 'Impresora Digital Vitrio Jet',
      url: 'https://app.getmaintainx.com/request-portal/5b4a91a6-115e-4ab3-bd60-f699fc3c5042'
    },
    {
      location: 'Impresión Digital',
      asset: 'Horno Vitro HST',
      url: 'https://app.getmaintainx.com/request-portal/b7777284-17f8-42d2-84cd-9eb06eeae81b'
    },
    {
      location: 'Impresión Digital',
      asset: 'Lavadora Vitro Wash',
      url: 'https://app.getmaintainx.com/request-portal/60de4839-e8e1-44eb-9635-c21c836f20ab'
    },
    {
      location: 'Impresión Digital',
      asset: 'Sala Blanca Vitro Clima',
      url: 'https://app.getmaintainx.com/request-portal/c6d32794-1093-48ca-a28b-791f68d69a90'
    },
    {
      location: 'DVH y TVH',
      asset: 'Aplicador de Perfil Termoplástico TPS',
      url: 'https://app.getmaintainx.com/request-portal/112e292e-0e79-4c32-954b-b15998cba2f3'
    },
    {
      location: 'Laminado',
      asset: 'Equipo Deshumificador',
      url: 'https://app.getmaintainx.com/request-portal/abc7ef8b-a842-4033-b6f6-5b970d964c1f'
    },
    {
      location: 'Laminado',
      asset: 'Equipo de Aire Acondicionado',
      url: 'https://app.getmaintainx.com/request-portal/112c3acb-0faf-41fd-a5c0-492e2ce9825b'
    },
    {
      location: 'Sala de Máquinas',
      asset: 'Compresor 70196',
      url: 'https://app.getmaintainx.com/request-portal/73742d56-7722-4e8d-9ea2-0983e68d6121'
    },
    {
      location: 'Sala de Máquinas',
      asset: 'Compresor 70142',
      url: 'https://app.getmaintainx.com/request-portal/6330aa47-aca7-4435-b480-bf8366aa09d8'
    },
    {
      location: 'Sala de Máquinas',
      asset: 'Secadora #1',
      url: 'https://app.getmaintainx.com/request-portal/60f4ac70-918c-4682-8e8a-3a2c35f28b50'
    },
    {
      location: 'Sala de Máquinas',
      asset: 'Secadora #2',
      url: 'https://app.getmaintainx.com/request-portal/f485d17d-2d8e-4bf9-a6f1-3e9752abcda4'
    },
    {
      location: 'Sala de Máquinas',
      asset: 'Filtroprensa de Eliminación de Lodos',
      url: 'https://app.getmaintainx.com/request-portal/6c4e1b6d-d86a-42f4-9983-4d624fb305e3'
    },
    {
      location: 'General',
      asset: 'Guía Monorraíl 3.2 Tn - 55977',
      url: 'https://app.getmaintainx.com/request-portal/c97d750c-b745-4029-bcab-6c1560e01028'
    },
    {
      location: 'General',
      asset: 'Guía Monorraíl 3.2 Tn - 55978',
      url: 'https://app.getmaintainx.com/request-portal/5fbfc41b-f94f-4414-9dd6-ef4b6f9c6aab'
    },
    {
      location: 'General',
      asset: 'Guía Monorraíl 3.2 Tn - 55979',
      url: 'https://app.getmaintainx.com/request-portal/6213d094-a90a-48dc-abdd-872908329e6a'
    },
    {
      location: 'General',
      asset: 'Puente Grúa Birraíl - 55531-20',
      url: 'https://app.getmaintainx.com/request-portal/68297c74-5e66-4c6f-a294-6a96e2bc1c75'
    },
    {
      location: 'General',
      asset: 'Puente Grúa Birraíl - 55531-21',
      url: 'https://app.getmaintainx.com/request-portal/a60c12b2-6463-43a6-9c8e-5fd411a05963'
    },
    {
      location: 'Laminado',
      asset: 'Mesa de Descarga Manual de Salida',
      url: 'https://app.getmaintainx.com/request-portal/213fb7de-a005-4fa7-96fa-b284e951a3ba'
    },
    {
      location: 'Laminado',
      asset: 'Mesa de Carga Manual de Entrada',
      url: 'https://app.getmaintainx.com/request-portal/75b3e90e-b2d8-4c7e-bc84-37ebaf6ce3d7'
    },
    {
      location: 'Laminado',
      asset: 'Mesa de Transferencia a Horno',
      url: 'https://app.getmaintainx.com/request-portal/963f1931-8a4f-4f47-8c7d-652c31d9ec19'
    },
    {
      location: 'Laminado',
      asset: 'Mesa de Encuadre de Ingreso',
      url: 'https://app.getmaintainx.com/request-portal/910515e7-77cd-46fc-8c93-ab9cb93d3b31'
    },
    {
      location: 'Laminado',
      asset: 'Mesa Regulable de Inspección',
      url: 'https://app.getmaintainx.com/request-portal/40ef2485-1bd1-4ddc-b071-036556a007d0'
    },
    {
      location: 'Laminado',
      asset: 'Puente de Sujeción',
      url: 'https://app.getmaintainx.com/request-portal/fff8c588-9254-49aa-96e2-8f2bb90f7459'
    },
    {
      location: 'Laminado',
      asset: 'Sistema de Extrusión de Rollo',
      url: 'https://app.getmaintainx.com/request-portal/85622eb1-4ecb-4fde-82a1-b16a3ac7a4c2'
    },
    {
      location: 'DVH y TVH',
      asset: 'Butiladora',
      url: 'https://app.getmaintainx.com/request-portal/f0d2f4ae-2cc5-4cab-a909-41a873249286'
    },
    {
      location: 'Corte Mixto',
      asset: 'Mesa Basculante 11026',
      url: 'https://app.getmaintainx.com/request-portal/cca3a251-de20-4195-a613-0dd8b11ca384'
    },
    {
      location: 'Templado',
      asset: 'Mesa Transportadora Ashton',
      url: 'https://app.getmaintainx.com/request-portal/23545717-9d1b-4451-9ebf-fda41dcd8ed7'
    }
  ]
}
