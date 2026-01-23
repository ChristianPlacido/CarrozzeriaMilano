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
    logo: 'https://logos.brandfetch.com/allianz.com?c=tdFFFFFF&w=256&h=256', 
    partnered: true,
    keywords: ['allianz', 'allianz assicurazioni', 'allianz auto']
  },
  { 
    id: 2, 
    name: 'Generali', 
    logo: 'https://logos.brandfetch.com/generali.com?c=tdFFFFFF&w=256&h=256', 
    partnered: true,
    keywords: ['generali', 'assicurazioni generali', 'generali italia']
  },
  { 
    id: 3, 
    name: 'UnipolSai', 
    logo: 'https://logos.brandfetch.com/unipolsai.it?c=tdFFFFFF&w=256&h=256', 
    partnered: true,
    keywords: ['unipolsai', 'unipol', 'sai assicurazioni']
  },
  { 
    id: 4, 
    name: 'Zurich', 
    logo: 'https://logos.brandfetch.com/zurich.it?c=tdFFFFFF&w=256&h=256', 
    partnered: true,
    keywords: ['zurich', 'zurich assicurazioni', 'zurich connect']
  },
  { 
    id: 5, 
    name: 'AXA', 
    logo: 'https://logos.brandfetch.com/axa.com?c=tdFFFFFF&w=256&h=256', 
    partnered: false,
    keywords: ['axa', 'axa assicurazioni', 'axa auto']
  },
  { 
    id: 6, 
    name: 'Reale Mutua', 
    logo: 'https://logos.brandfetch.com/realemutua.it?c=tdFFFFFF&w=256&h=256', 
    partnered: true,
    keywords: ['reale mutua', 'reale assicurazioni', 'mutua']
  },
  { 
    id: 7, 
    name: 'Cattolica', 
    logo: 'https://logos.brandfetch.com/cattolica.it?c=tdFFFFFF&w=256&h=256', 
    partnered: false,
    keywords: ['cattolica', 'cattolica assicurazioni', 'società cattolica']
  },
  { 
    id: 8, 
    name: 'Sara Assicurazioni', 
    logo: 'https://logos.brandfetch.com/sara.it?c=tdFFFFFF&w=256&h=256', 
    partnered: true,
    keywords: ['sara', 'sara assicurazioni', 'sara auto']
  },
  { 
    id: 9, 
    name: 'HDI', 
    logo: 'https://logos.brandfetch.com/hdi.de?c=tdFFFFFF&w=256&h=256', 
    partnered: false,
    keywords: ['hdi', 'hdi assicurazioni', 'hdi italia']
  },
  { 
    id: 10, 
    name: 'Linear', 
    logo: 'https://logos.brandfetch.com/linear.it?c=tdFFFFFF&w=256&h=256', 
    partnered: true,
    keywords: ['linear', 'linear assicurazioni', 'linear unipol']
  },
  { 
    id: 11, 
    name: 'ConTe.it', 
    logo: 'https://logos.brandfetch.com/conte.it?c=tdFFFFFF&w=256&h=256', 
    partnered: false,
    keywords: ['conte', 'conte.it', 'conte assicurazioni']
  },
  { 
    id: 12, 
    name: 'Direct Line', 
    logo: 'https://logos.brandfetch.com/directline.com?c=tdFFFFFF&w=256&h=256', 
    partnered: true,
    keywords: ['direct line', 'directline', 'direct line assicurazioni']
  },
  { 
    id: 13, 
    name: 'Vittoria Assicurazioni', 
    logo: 'https://logos.brandfetch.com/vittoriaassicurazioni.com?c=tdFFFFFF&w=256&h=256', 
    partnered: true,
    keywords: ['vittoria', 'vittoria assicurazioni', 'gruppo vittoria']
  },
  { 
    id: 14, 
    name: 'Verti', 
    logo: 'https://logos.brandfetch.com/verti.it?c=tdFFFFFF&w=256&h=256', 
    partnered: false,
    keywords: ['verti', 'verti assicurazioni', 'verti auto']
  },
  { 
    id: 15, 
    name: 'Itas Mutua', 
    logo: 'https://logos.brandfetch.com/gruppoitas.it?c=tdFFFFFF&w=256&h=256', 
    partnered: true,
    keywords: ['itas', 'itas mutua', 'itas assicurazioni']
  },
  { 
    id: 16, 
    name: 'Groupama', 
    logo: 'https://logos.brandfetch.com/groupama.fr?c=tdFFFFFF&w=256&h=256', 
    partnered: false,
    keywords: ['groupama', 'groupama assicurazioni', 'groupama italia']
  },
  { 
    id: 17, 
    name: 'Poste Italiane', 
    logo: 'https://logos.brandfetch.com/posteitaliane.it?c=tdFFFFFF&w=256&h=256', 
    partnered: true,
    keywords: ['poste italiane', 'posteassicura', 'poste assicurazioni']
  },
  { 
    id: 18, 
    name: 'Intesa Sanpaolo Assicura', 
    logo: 'https://logos.brandfetch.com/intesasanpaoloassicura.com?c=tdFFFFFF&w=256&h=256', 
    partnered: false,
    keywords: ['intesa sanpaolo', 'intesa sanpaolo assicura', 'intesa assicurazioni']
  },
  { 
    id: 19, 
    name: 'UniCredit Allianz', 
    logo: 'https://logos.brandfetch.com/allianz.com?c=tdFFFFFF&w=256&h=256', 
    partnered: true,
    keywords: ['unicredit', 'unicredit allianz', 'unicredit assicurazioni']
  },
  { 
    id: 20, 
    name: 'Prima Assicurazioni', 
    logo: 'https://logos.brandfetch.com/prima.it?c=tdFFFFFF&w=256&h=256', 
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
