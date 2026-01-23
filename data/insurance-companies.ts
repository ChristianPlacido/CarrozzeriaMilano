/**
 * Database delle compagnie assicurative italiane
 * Loghi ottimizzati per SEO - Carrozzeria Milano Seregno
 * Keywords: assicurazione auto, sinistro stradale, RC auto, gestione sinistri, convenzioni assicurative
 */

export type InsuranceCompany = {
  id: number
  name: string
  logo: string
  partnered: boolean
  keywords?: string[]
}

export const INSURANCE_COMPANIES: InsuranceCompany[] = [
  { 
    id: 1, 
    name: 'Allianz', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Allianz_logo.svg/1200px-Allianz_logo.svg.png', 
    partnered: true,
    keywords: ['allianz', 'allianz assicurazioni', 'allianz auto']
  },
  { 
    id: 2, 
    name: 'Generali', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Generali_logo.svg/1200px-Generali_logo.svg.png', 
    partnered: true,
    keywords: ['generali', 'assicurazioni generali', 'generali italia']
  },
  { 
    id: 3, 
    name: 'UnipolSai', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/UnipolSai_logo.svg/1200px-UnipolSai_logo.svg.png', 
    partnered: true,
    keywords: ['unipolsai', 'unipol', 'sai assicurazioni']
  },
  { 
    id: 4, 
    name: 'Zurich', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Zurich_Logo.svg/1200px-Zurich_Logo.svg.png', 
    partnered: true,
    keywords: ['zurich', 'zurich assicurazioni', 'zurich connect']
  },
  { 
    id: 5, 
    name: 'AXA', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/AXA_Logo.svg/1200px-AXA_Logo.svg.png', 
    partnered: false,
    keywords: ['axa', 'axa assicurazioni', 'axa auto']
  },
  { 
    id: 6, 
    name: 'Reale Mutua', 
    logo: 'https://www.realemutua.it/content/dam/rmua/logo/reale-mutua-logo.png', 
    partnered: true,
    keywords: ['reale mutua', 'reale assicurazioni', 'mutua']
  },
  { 
    id: 7, 
    name: 'Cattolica', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Logo_Gruppo_Cattolica.svg/1200px-Logo_Gruppo_Cattolica.svg.png', 
    partnered: false,
    keywords: ['cattolica', 'cattolica assicurazioni', 'società cattolica']
  },
  { 
    id: 8, 
    name: 'Sara Assicurazioni', 
    logo: 'https://www.sara.it/documents/10181/4579350/logo-sara-positive.svg', 
    partnered: true,
    keywords: ['sara', 'sara assicurazioni', 'sara auto']
  },
  { 
    id: 9, 
    name: 'HDI', 
    logo: 'https://www.hdi.it/o/hdi-theme/images/hdi-logo.svg', 
    partnered: false,
    keywords: ['hdi', 'hdi assicurazioni', 'hdi italia']
  },
  { 
    id: 10, 
    name: 'Linear', 
    logo: 'https://www.linear.it/etc.clientlibs/linearsite/clientlibs/clientlib-base/resources/images/linear-logo.svg', 
    partnered: true,
    keywords: ['linear', 'linear assicurazioni', 'linear unipol']
  },
  { 
    id: 11, 
    name: 'ConTe.it', 
    logo: 'https://www.conte.it/documents/12926/0/logo-conte.svg', 
    partnered: false,
    keywords: ['conte', 'conte.it', 'conte assicurazioni']
  },
  { 
    id: 12, 
    name: 'Direct Line', 
    logo: 'https://www.directline.it/wps/wcm/connect/it/direct-line/Shared/Logo.png', 
    partnered: true,
    keywords: ['direct line', 'directline', 'direct line assicurazioni']
  },
  { 
    id: 13, 
    name: 'Vittoria Assicurazioni', 
    logo: 'https://www.vittoriaassicurazioni.com/documents/10180/14697/vittoria-logo.png', 
    partnered: true,
    keywords: ['vittoria', 'vittoria assicurazioni', 'gruppo vittoria']
  },
  { 
    id: 14, 
    name: 'Verti', 
    logo: 'https://www.verti.it/content/dam/verti/it/images/logo/logo-verti.svg', 
    partnered: false,
    keywords: ['verti', 'verti assicurazioni', 'verti auto']
  },
  { 
    id: 15, 
    name: 'Itas Mutua', 
    logo: 'https://www.gruppoitas.it/o/itas-theme/images/itas-logo.svg', 
    partnered: true,
    keywords: ['itas', 'itas mutua', 'itas assicurazioni']
  },
  { 
    id: 16, 
    name: 'Groupama', 
    logo: 'https://www.groupama.it/o/groupama-theme/images/groupama-logo.svg', 
    partnered: false,
    keywords: ['groupama', 'groupama assicurazioni', 'groupama italia']
  },
  { 
    id: 17, 
    name: 'Poste Italiane', 
    logo: 'https://www.posteitaliane.it/etc/designs/poste/img/logo-posteitaliane.png', 
    partnered: true,
    keywords: ['poste italiane', 'posteassicura', 'poste assicurazioni']
  },
  { 
    id: 18, 
    name: 'Intesa Sanpaolo Assicura', 
    logo: 'https://www.intesasanpaoloassicura.com/o/ispa-theme/images/logo-intesa-sanpaolo-assicura.png', 
    partnered: false,
    keywords: ['intesa sanpaolo', 'intesa sanpaolo assicura', 'intesa assicurazioni']
  },
  { 
    id: 19, 
    name: 'UniCredit Allianz', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Allianz_logo.svg/1200px-Allianz_logo.svg.png', 
    partnered: true,
    keywords: ['unicredit', 'unicredit allianz', 'unicredit assicurazioni']
  },
  { 
    id: 20, 
    name: 'Prima Assicurazioni', 
    logo: 'https://www.prima.it/images/prima-logo.svg', 
    partnered: false,
    keywords: ['prima', 'prima assicurazioni', 'prima.it']
  },
]

/**
 * Statistiche compagnie convenzionate
 */
export const getPartneredCount = () => {
  return INSURANCE_COMPANIES.filter(company => company.partnered).length
}

export const getTotalCount = () => {
  return INSURANCE_COMPANIES.length
}

/**
 * Ricerca compagnia per keyword
 */
export const searchInsuranceByKeyword = (keyword: string): InsuranceCompany[] => {
  const searchTerm = keyword.toLowerCase()
  return INSURANCE_COMPANIES.filter(company => 
    company.name.toLowerCase().includes(searchTerm) ||
    company.keywords?.some(kw => kw.includes(searchTerm))
  )
}
