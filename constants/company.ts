/**
 * MKG Elektromekanik Otomasyon - Company Information Constants
 * Merkezi şirket bilgileri - Tüm değişiklikler buradan yönetilir
 */

export const COMPANY_INFO = {
  name: 'MKG Elektromekanik Otomasyon',
  legalName: 'MKG Elektromekanik ve Otomasyon Taahhüt Ltd. Şti.',
  
  contact: {
    email: 'info@mkgelektromekanik.com',
    phone: '+90 530 119 12 77',
    phoneFormatted: '+90 530 119 12 77',
    supportEmail: 'info@mkgelektromekanik.com',
    salesEmail: 'info@mkgelektromekanik.com',
    hrEmail: 'info@mkgelektromekanik.com',
    securityEmail: 'security@mkg.com',
    legalEmail: 'legal@mkg.com'
  },
  
  address: {
    street: 'DAP Vadisi, Merkez, A Blok, Ofis No: 49',
    district: 'Kağıthane',
    city: 'İstanbul',
    postalCode: '34406',
    country: 'Türkiye',
    countryCode: 'TR',
    full: 'DAP Vadisi, Merkez, A Blok, Ofis No: 49, 34406 Kağıthane/İstanbul, Türkiye'
  },
  
  coordinates: {
    latitude: '41.0822',
    longitude: '28.9784'
  },
  
  social: {
    linkedin: 'https://www.linkedin.com/company/mkg-elektromekanik',
    twitter: '@mkg_otomasyon'
  },
  
  business: {
    founded: '2015',
    yearsOfExperience: '10+',
    projectsCompleted: '28+',
    serviceAreas: '10',
    securityScore: 'A+'
  },
  
  website: {
    url: 'https://mkgelektromekanik.com',
    domain: 'mkgelektromekanik.com'
  },
  
  workingHours: {
    days: 'Pazartesi - Cuma',
    hours: '09:00 - 18:00',
    timezone: 'GMT+3'
  }
} as const;

export type CompanyInfo = typeof COMPANY_INFO;