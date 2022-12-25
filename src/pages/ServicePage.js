import '../layout/App.css';
import { useParams } from "react-router-dom"

function ServicePage() {
    const { serviceId } = useParams()

    return (
        <>
            <h2 >
                Service with serviceId: {serviceId}
            </h2>

            <iframe title='form'
              src="https://docs.google.com/forms/d/e/1FAIpQLSeB088MIUpIM_7QQ0dZlk8qO1rRHhmiH65EwChrAHd8J7GkBA/viewform"
              width="100%" height="2203" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </>
    );
}

export default ServicePage;


// predavanje funkcii 
// garbige colector
// SQL
// Python java
