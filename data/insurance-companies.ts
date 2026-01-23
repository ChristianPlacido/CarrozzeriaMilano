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
    logo: 'https://logo.clearbit.com/allianz.it', 
    partnered: true,
    keywords: ['allianz', 'allianz assicurazioni', 'allianz auto']
  },
  { 
    id: 2, 
    name: 'Generali', 
    logo: 'https://logo.clearbit.com/generali.com', 
    partnered: true,
    keywords: ['generali', 'assicurazioni generali', 'generali italia']
  },
  { 
    id: 3, 
    name: 'UnipolSai', 
    logo: 'https://logo.clearbit.com/unipolsai.it', 
    partnered: true,
    keywords: ['unipolsai', 'unipol', 'sai assicurazioni']
  },
  { 
    id: 4, 
    name: 'Zurich', 
    logo: 'https://logo.clearbit.com/zurich.it', 
    partnered: true,
    keywords: ['zurich', 'zurich assicurazioni', 'zurich connect']
  },
  { 
    id: 5, 
    name: 'AXA', 
    logo: 'https://logo.clearbit.com/axa.it', 
    partnered: false,
    keywords: ['axa', 'axa assicurazioni', 'axa auto']
  },
  { 
    id: 6, 
    name: 'Reale Mutua', 
    logo: 'https://logo.clearbit.com/realemutua.it', 
    partnered: true,
    keywords: ['reale mutua', 'reale assicurazioni', 'mutua']
  },
  { 
    id: 7, 
    name: 'Cattolica', 
    logo: 'https://logo.clearbit.com/cattolica.it', 
    partnered: false,
    keywords: ['cattolica', 'cattolica assicurazioni', 'società cattolica']
  },
  { 
    id: 8, 
    name: 'Sara Assicurazioni', 
    logo: 'https://logo.clearbit.com/sara.it', 
    partnered: true,
    keywords: ['sara', 'sara assicurazioni', 'sara auto']
  },
  { 
    id: 9, 
    name: 'HDI', 
    logo: 'https://logo.clearbit.com/hdi.it', 
    partnered: false,
    keywords: ['hdi', 'hdi assicurazioni', 'hdi italia']
  },
  { 
    id: 10, 
    name: 'Linear', 
    logo: 'https://logo.clearbit.com/linear.it', 
    partnered: true,
    keywords: ['linear', 'linear assicurazioni', 'linear unipol']
  },
  { 
    id: 11, 
    name: 'ConTe.it', 
    logo: 'https://logo.clearbit.com/conte.it', 
    partnered: false,
    keywords: ['conte', 'conte.it', 'conte assicurazioni']
  },
  { 
    id: 12, 
    name: 'Direct Line', 
    logo: 'https://logo.clearbit.com/directline.it', 
    partnered: true,
    keywords: ['direct line', 'directline', 'direct line assicurazioni']
  },
  { 
    id: 13, 
    name: 'Vittoria Assicurazioni', 
    logo: 'https://logo.clearbit.com/vittoriaassicurazioni.com', 
    partnered: true,
    keywords: ['vittoria', 'vittoria assicurazioni', 'gruppo vittoria']
  },
  { 
    id: 14, 
    name: 'Verti', 
    logo: 'https://logo.clearbit.com/verti.it', 
    partnered: false,
    keywords: ['verti', 'verti assicurazioni', 'verti auto']
  },
  { 
    id: 15, 
    name: 'Itas Mutua', 
    logo: 'https://logo.clearbit.com/gruppoitas.it', 
    partnered: true,
    keywords: ['itas', 'itas mutua', 'itas assicurazioni']
  },
  { 
    id: 16, 
    name: 'Groupama', 
    logo: 'https://logo.clearbit.com/groupama.it', 
    partnered: false,
    keywords: ['groupama', 'groupama assicurazioni', 'groupama italia']
  },
  { 
    id: 17, 
    name: 'Poste Italiane', 
    logo: 'https://logo.clearbit.com/posteitaliane.it', 
    partnered: true,
    keywords: ['poste italiane', 'posteassicura', 'poste assicurazioni']
  },
  { 
    id: 18, 
    name: 'Intesa Sanpaolo Assicura', 
    logo: 'https://logo.clearbit.com/intesasanpaoloassicura.com', 
    partnered: false,
    keywords: ['intesa sanpaolo', 'intesa sanpaolo assicura', 'intesa assicurazioni']
  },
  { 
    id: 19, 
    name: 'UniCredit Allianz', 
    logo: 'https://logo.clearbit.com/allianz.it', 
    partnered: true,
    keywords: ['unicredit', 'unicredit allianz', 'unicredit assicurazioni']
  },
  { 
    id: 20, 
    name: 'Prima Assicurazioni', 
    logo: 'https://logo.clearbit.com/prima.it', 
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
