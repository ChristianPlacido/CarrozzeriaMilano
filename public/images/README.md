# Istruzioni per il Logo

Inserisci il logo della Carrozzeria Milano in questa cartella.

## File richiesti:
- `logo.png` o `logo.svg` - Logo principale
- `logo-white.png` - Versione bianca del logo (per sfondi scuri)
- `favicon.ico` - Favicon per il browser
 - `mani-giuste.jpg` - Immagine della consegna chiavi per la sezione "La Tua Auto / Nelle Mani Giuste"

## Dimensioni consigliate:
- Logo principale: minimo 512x512px
- Favicon: 32x32px o 64x64px

## Note:
Dopo aver aggiunto il logo, aggiorna i riferimenti nei seguenti file:
- `components/Navbar.tsx` - Sostituisci il placeholder "CM" con l'immagine del logo
- `app/layout.tsx` - Aggiungi il link al favicon
 - `components/About.tsx` - Usa il file `mani-giuste.jpg` per mostrare l'immagine nella sezione "Chi Siamo"
