import { PitchStyled } from "../styled";


function Pitch() {
    return(
        <div class=" p-md-5 mb-4 rounded pitch" >
            <div class="col-md-6 px-5">
                <h1 class="display-4 fst-italic">
                    <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Vídeo Pitch </font>
                    </font>
                </h1>
                <p class="lead my-3"><a href="https://www.canva.com/design/DAFlKF5MQtA/view ">
                    Acesse o documento.</a>                    
                </p><iframe width="560" height="315" src="https://www.youtube.com/embed/er1ISyWMur8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
        </div>

    )
}

export default Pitch
