# Data Directory

Questa cartella contiene i dati statici utilizzati dall'applicazione.

## File

### `carousel/links.ts`
Array di URL per le immagini del carosello di sfondo nella sezione Hero.
- Fonte: Google Photos (link pubblici)
- Formato: URL diretti con parametri di dimensione dinamici

### `insurance-companies.ts`
Database centralizzato delle compagnie assicurative italiane.
- **20+ compagnie**: Allianz, Generali, UnipolSai, Zurich, AXA, Reale Mutua, etc.
- **Loghi**: URL da Wikipedia Commons e siti ufficiali (ottimizzati per SEO)
- **Partnership**: Flag `partnered` indica convenzioni attive
- **Keywords**: Array di termini di ricerca per ogni compagnia
- **Funzioni helper**: 
  - `getPartneredCount()` - Conta compagnie convenzionate
  - `getTotalCount()` - Totale compagnie
  - `searchInsuranceByKeyword()` - Ricerca per keyword

#### Esempio utilizzo:
```typescript
import { INSURANCE_COMPANIES, searchInsuranceByKeyword } from '@/data/insurance-companies'

// Usa tutte le compagnie
const companies = INSURANCE_COMPANIES

// Cerca per keyword
const results = searchInsuranceByKeyword('generali')
```

## Aggiornamento dati

### Aggiungere una nuova compagnia assicurativa:
1. Trova il logo ufficiale (preferibilmente SVG da Wikipedia o sito ufficiale)
2. Aggiungi entry nell'array `INSURANCE_COMPANIES` in `insurance-companies.ts`
3. Specifica se `partnered: true/false`
4. Aggiungi keywords SEO rilevanti

### Aggiornare immagini carousel:
1. Ottieni URL pubblico da Google Photos o altra fonte
2. Aggiungi URL all'array in `carousel/links.ts`
3. L'URL verrà automaticamente ottimizzato per risoluzione 1920px

## SEO Keywords

Le keywords nelle compagnie assicurative aiutano:
- Ricerca interna futura
- Ottimizzazione motori di ricerca
- Targeting Google Ads / Social Ads

Termini chiave: `sinistro stradale`, `RC auto`, `gestione sinistri`, `carrozzeria convenzionata`, `riparazione auto assicurazione`
