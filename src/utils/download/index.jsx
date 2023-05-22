function downloadVideo(url) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        // Créer un objet URL pour le blob
        const videoUrl = URL.createObjectURL(blob);
  
        // Créer un élément <a> pour le téléchargement
        const a = document.createElement('a');
        a.href = videoUrl;
        a.download = 'video.mp4';
  
        // Ajouter l'élément <a> à la page et déclencher le téléchargement
        document.body.appendChild(a);
        a.click();
  
        // Nettoyer
        document.body.removeChild(a);
        URL.revokeObjectURL(videoUrl);
      })
      .catch(error => {
        console.error('Erreur lors du téléchargement de la vidéo:', error);
      });
  }
  
export default downloadVideo
  