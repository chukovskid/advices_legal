import '../layout/App.css';
import { useParams } from "react-router-dom"

function PersonalPage() {
    const { serviceId } = useParams()

    return (
        <>
            <h2 >
                Perosnal services with serviceId: {serviceId}
            </h2>
        </>
    );
}

export default PersonalPage;
