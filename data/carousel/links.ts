/**
 * Configurazione carosello home - Immagini + Video
 * Supporta sia immagini (string) che video (oggetto con type e src)
 * I video sono DISTANZIATI tra le immagini (non consecutivi)
 */

export type CarouselSlide = 
  | string  // Immagine (URL)
  | { type: 'video'; src: string; durationMs?: number }  // Video

export const CAROUSEL_LINKS: CarouselSlide[] = [
  // 1. IMMAGINE
  'https://lh3.googleusercontent.com/p/AF1QipONNV2jPqO1l3f6SFt9_6XXcehRPVEqBk3Z0pka=s680-w680-h510-rw',
  
  // 2. VIDEO 1 (Commercial Script - 5 secondi)
  { type: 'video', src: '/CarrozzeriaMilano/videos/Commercial_Script_for_Carrozzeria_Milano.mp4', durationMs: 5000 },
  
  // 3. IMMAGINE
  'https://lh3.googleusercontent.com/p/AF1QipN4gUNCE3dsmgTc_Ur7Gqz8y3TjxdHXNO7Nd55d=s680-w680-h510-rw',
  
  // 4. VIDEO 2 (Persone - 5 secondi)
  { type: 'video', src: '/CarrozzeriaMilano/videos/Creazione_video_pubblicitario_carrozzeria.mp4', durationMs: 5000 },
  
  // 5. IMMAGINE - Auto posteriore
  '/CarrozzeriaMilano/images/2025-08-28.jpg',
  
  // 6. IMMAGINE - Ferrari Roma
  '/CarrozzeriaMilano/images/FerrariROma.webp',
  
  // 7. IMMAGINE - Porsche
  '/CarrozzeriaMilano/images/unnamed.webp',
  
  // 8-13. IMMAGINI
  'https://lh3.googleusercontent.com/p/AF1QipP7_kXUzFjsmsSlPmdAyyb-XsxYOaDM9ZLooKva=s680-w680-h510-rw',
  'https://lh3.googleusercontent.com/p/AF1QipMcvzNrZ_Z2SynAV7PWf9uFNq_CqNiSbPoy4Viu=s680-w680-h510-rw',
  'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy5_2h6JGS0Xelj1BvMBSNd_7JIoMbX3LeqfdLNOeyJ44BVtctIy_S3rbzz8xTPmGak1ToMhK6_BVtNyUS7O5y7uWGMxdZFPZnThAAjT5Gzu3azdvpphzIcfghNi3Ri9Rs4jCRP=s680-w680-h510-rw',
  'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy1-uj1byJSyh7CEAflNEWN5VWghsJCzhF0hHA15Sw_UCanGtVqax-x50lfT2NTagRR6GxRDoMeixgh536Z2lhCUPR_uUDm6NmrcFdsBxnmmS5D5CvR2BMw_EPTO8zVmsVEeCLF=s680-w680-h510-rw',
  'https://lh3.googleusercontent.com/p/AF1QipPpgDSvV0COqpJ6kqtj27KdlYsmvQ8LmYpV1IWv=s680-w680-h510-rw',
  'https://lh3.googleusercontent.com/p/AF1QipN_IVGV1pbMzzhvA6WardU3YkGRgh_eURt1GPgr=s680-w680-h510-rw',
];
