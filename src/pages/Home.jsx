import styled from "styled-components";
import { useState } from "react";
import downloadVideo from "../utils/download";


const Container = styled.div`
  height: 100%;
  width: 100%;
`

function Home() {

  const [videoUrl, setVideoUrl] = useState(""); // État pour stocker l'URL de la vidéo

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    // Appeler la fonction de téléchargement de la vidéo avec l'URL
    downloadVideo(videoUrl);
  };

  return (
    <Container className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={videoUrl}
          onChange={(event) => setVideoUrl(event.target.value)}
          placeholder="URL de la vidéo YouTube"
        />
        <button type="submit">Télécharger</button>
      </form>
    </Container>
  );
}

export default Home;