import Content from './Content'

const Inicio = () => {
    return ( 


<div className="content_box">
    <div className="content_box_inner">
        <div className="row justify-content-center">
            <div className="grid-item branding  col-lg-5">
                <br></br>
                <br></br>
                <h3>Bienvenido a Corporation</h3>                                    
                <h2>Acme</h2>
                <br></br>
                <p>
                Acme Corporation es una organización formada con el objeto de comprar y vender toda clase de
                vehiculos usados,  que con lleven a satisfacer las necesidades y expectativas de todos nuestros
                clientes, mediante procesos administrativos eficientes y un talento humano calificado, capacitado, responsable, 
                comprometido.
                </p>
               <br></br>
               <br></br>
                <Content/>
            </div>
        </div>
    </div>
</div>



     );
}
 
export default Inicio;