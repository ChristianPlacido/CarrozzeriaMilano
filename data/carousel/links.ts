/**
 * Configurazione carosello home - Immagini + Video
 * Supporta sia immagini (string) che video (oggetto con type e src)
 * I video sono DISTANZIATI tra le immagini (non consecutivi)
 */

export type CarouselSlide = 
  | string  // Immagine (URL)
  | { type: 'video'; src: string; durationMs?: number }  // Video

export const CAROUSEL_LINKS: CarouselSlide[] = [
  // IMMAGINI (Google Photos)
  'https://lh3.googleusercontent.com/p/AF1QipONNV2jPqO1l3f6SFt9_6XXcehRPVEqBk3Z0pka=s680-w680-h510-rw',
  'https://lh3.googleusercontent.com/p/AF1QipN4gUNCE3dsmgTc_Ur7Gqz8y3TjxdHXNO7Nd55d=s680-w680-h510-rw',
  
  // VIDEO 1 (dopo 2 immagini - distanziato)
  { type: 'video', src: '/CarrozzeriaMilano/videos/Commercial_Script_for_Carrozzeria_Milano.mp4', durationMs: 6000 },
  
  'https://lh3.googleusercontent.com/p/AF1QipP7_kXUzFjsmsSlPmdAyyb-XsxYOaDM9ZLooKva=s680-w680-h510-rw',
  'https://lh3.googleusercontent.com/p/AF1QipMcvzNrZ_Z2SynAV7PWf9uFNq_CqNiSbPoy4Viu=s680-w680-h510-rw',
  
  // VIDEO 2 (dopo altre 2 immagini - distanziato, non consecutivo)
  { type: 'video', src: '/CarrozzeriaMilano/videos/Creazione_video_pubblicitario_carrozzeria.mp4', durationMs: 6000 },
  
  'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy5_2h6JGS0Xelj1BvMBSNd_7JIoMbX3LeqfdLNOeyJ44BVtctIy_S3rbzz8xTPmGak1ToMhK6_BVtNyUS7O5y7uWGMxdZFPZnThAAjT5Gzu3azdvpphzIcfghNi3Ri9Rs4jCRP=s680-w680-h510-rw',
  'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy1-uj1byJSyh7CEAflNEWN5VWghsJCzhF0hHA15Sw_UCanGtVqax-x50lfT2NTagRR6GxRDoMeixgh536Z2lhCUPR_uUDm6NmrcFdsBxnmmS5D5CvR2BMw_EPTO8zVmsVEeCLF=s680-w680-h510-rw',
  'https://lh3.googleusercontent.com/p/AF1QipPpgDSvV0COqpJ6kqtj27KdlYsmvQ8LmYpV1IWv=s680-w680-h510-rw',
  'https://lh3.googleusercontent.com/p/AF1QipN_IVGV1pbMzzhvA6WardU3YkGRgh_eURt1GPgr=s680-w680-h510-rw',
];
