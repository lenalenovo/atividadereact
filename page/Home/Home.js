import Card from "../../componentes/Card/Card";

function Home(props) {
  console.log(props.reproduz);
  return (
    <section class="painel-de-videos">
      <Card
        reproduz={props.reproduz}
        link={"https://picsum.photos/400/400?a=1"}
        titulo={"Título vídeo um"}
      />

      <Card
        link={"https://picsum.photos/400/400?a=2"}
        reproduz={props.reproduz}
        titulo={"Título vídeo dois"}
      />
      <Card
        link={"https://picsum.photos/400/400?a=3"}
        reproduz={props.reproduz}
        titulo={"Titulo vídeo tres"}
      />
      <Card
        link={"https://picsum.photos/400/400?a=4"}
        reproduz={props.reproduz}
        titulo={"Titulo vídeo quatro"}
      />
      <Card
        link={"https://picsum.photos/400/400?a=5"}
        reproduz={props.reproduz}
        titulo={"Titulo vídeo cinco"}
      />
      <Card
        link={"https://picsum.photos/400/400?a=6"}
        reproduz={props.reproduz}
        titulo={"Titulo vídeo seis"}
      />
      <Card
        link={"https://picsum.photos/400/400?a=7"}
        reproduz={props.reproduz}
        titulo={"Titulo vídeo sete"}
      />
      <Card
        link={"https://picsum.photos/400/400?a=8"}
        reproduz={props.reproduz}
        titulo={"Titulo vídeo oito"}
      />

      {/* <div class="box-pagina-principal media1" onClick={props.reproduz}>
        <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
        <h4>Título do vídeo</h4>
      </div>
      <div class="box-pagina-principal media2" onClick={props.reproduz}>
        <img src="https://picsum.photos/400/400?a=2 " alt=""></img>
        <h4>Título do vídeo</h4>
      </div>
      <div class="box-pagina-principal media3" onClick={props.reproduz}>
        <img src="https://picsum.photos/400/400?a=3 " alt=""></img>
        <h4>Título do vídeo</h4>
      </div>
      <div class="box-pagina-principal media4" onClick={props.reproduz}>
        <img src="https://picsum.photos/400/400?a=4 " alt=""></img>
        <h4>Título do vídeo</h4>
      </div>
      <div class="box-pagina-principal media5" onClick={props.reproduz}>
        <img src="https://picsum.photos/400/400?a=5 " alt=""></img>
        <h4>Título do vídeo</h4>
      </div>
      <div class="box-pagina-principal media6" onClick={props.reproduz}>
        <img src="https://picsum.photos/400/400?a=6 " alt=""></img>
        <h4>Título do vídeo</h4>
      </div>
      <div class="box-pagina-principal media7" onClick={props.reproduz}>
        <img src="https://picsum.photos/400/400?a=7 " alt=""></img>
        <h4>Título do vídeo</h4>
      </div>
      <div class="box-pagina-principal media8" onClick={props.reproduz}>
        <img src="https://picsum.photos/400/400?a=8 " alt=""></img>
        <h4>Título do vídeo</h4>
      </div> */}
    </section>
  );
}

export default Home;
