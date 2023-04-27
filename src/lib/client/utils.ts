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
      location: 'TVH',
      asset: 'Cargador de Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'DVH',
      asset: 'Cargador Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'TVH',
      asset: 'Cargador de Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'DVH',
      asset: 'Cargador Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'TVH',
      asset: 'Cargador de Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'DVH',
      asset: 'Cargador Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'TVH',
      asset: 'Cargador de Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'DVH',
      asset: 'Cargador Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'TVH',
      asset: 'Cargador de Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'DVH',
      asset: 'Cargador Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'TVH',
      asset: 'Cargador de Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'DVH',
      asset: 'Cargador Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'TVH',
      asset: 'Cargador de Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'DVH',
      asset: 'Cargador Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'TVH',
      asset: 'Cargador de Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'DVH',
      asset: 'Cargador Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'TVH',
      asset: 'Cargador de Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'DVH',
      asset: 'Cargador Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'TVH',
      asset: 'Cargador de Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'DVH',
      asset: 'Cargador Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'TVH',
      asset: 'Cargador de Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'DVH',
      asset: 'Cargador Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'TVH',
      asset: 'Cargador de Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    },
    {
      location: 'DVH',
      asset: 'Cargador Desecante Automático',
      url: 'https://app.getmaintainx.com/request-portal/0edd8330-c730-43e6-81a4-0ee385a443aa'
    }
  ]
}
