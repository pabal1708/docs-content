const footerData = {
  columns: [
    {
      title: 'Productos',
      links: [
        {
          title: 'Cards',
          href: 'https://pomelo.la/ar/tarjetas-de-credito-debito-prepago/'
        },
        {
          title: 'Core',
          href: 'https://pomelo.la/ar/cuentas-digitales-fintech/'
        },
        {
          title: 'Identity',
          href: 'https://pomelo.la/ar/verificacion-de-identidad-de-usuarios/'
        }
      ]
    }
  ],
  address: {
    AR: 'Av. del Libertador 8620, 13th floor. CABA. Buenos Aires.',
    BR: 'Av. Presidente Juscelino Kubitschek, 2041 - 17º andar. Vila Olímpia. São Paulo.'
  },
  social: {
    copyright: '© 2022 Pomelo. Todos los derechos reservados',
    twitter: 'https://twitter.com/pomelo_latam',
    linkedin: 'https://www.linkedin.com/company/pomelo-latam',
    slogan: 'go fintech',
    regulation: {
      text:
        'Pomelo Fintech Services S.A.S. (CUIT 30-71714070-9) se limita a ofrecer servicios de pago y no se encuentra autorizado a operar como entidad financiera por el Banco Central de la República Argentina. Los fondos depositados en cuentas de pago no constituyen depósitos en una entidad financiera, ni cuentan con ninguna de las garantías que tales depósitos puedan gozar de acuerdo con la legislación y reglamentación aplicables en materia de depósitos en entidades financieras.',
      image: 'https://static.pomelo.la/common/developer-experience/data-fiscal.png',
      link: 'http://qr.afip.gob.ar/?qr=Lb_H-HUr8-gbS_Oo2LXA3Q,,',
      alt: 'AFIP',
      target: '_F960AFIPInfo'
    }
  }
};

const footerLiteData = {
  social: {
    copyright: '© 2022 Pomelo. Todos los derechos reservados',
    twitter: 'https://twitter.com/pomelo_latam',
    linkedin: 'https://www.linkedin.com/company/pomelo-latam',
    slogan: 'go fintech'
  }
};

export { footerData, footerLiteData };
