# Video per Carosello Home

## File necessari

Inserisci in questa cartella i seguenti video:

1. **Commercial_Script_for_Carrozzeria_Milano.mp4**
2. **Creazione_video_pubblicitario_carrozzeria.mp4**

## Specifiche tecniche

- **Formato**: MP4 (H.264)
- **Audio**: Non necessario (i video vengono riprodotti muted per autoplay)
- **Risoluzione consigliata**: 1920x1080 (Full HD)
- **Durata**: 5-10 secondi ciascuno (ottimale per carosello)
- **Peso**: Max 5MB per video (per velocità caricamento)

## Note

- I video sono configurati con `muted`, `loop`, `playsInline` per autoplay compatibile con tutti i browser
- I video vengono messi in pausa quando non sono visibili (ottimizzazione performance)
- La durata di visualizzazione nel carosello è configurabile in `/data/carousel/links.ts`

## Path nel progetto

I video devono essere accessibili a:
```
/CarrozzeriaMilano/videos/Commercial_Script_for_Carrozzeria_Milano.mp4
/CarrozzeriaMilano/videos/Creazione_video_pubblicitario_carrozzeria.mp4
```

## Compressione video (opzionale)

Per ridurre la dimensione mantenendo qualità:

```bash
# Con FFmpeg
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a copy output.mp4
```
