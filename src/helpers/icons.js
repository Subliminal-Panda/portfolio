import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faEnvelopeOpenText, faMapMarkedAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";


const Icons = () => {
    return library.add( faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faEnvelopeOpenText, faMapMarkedAlt, faPhoneAlt );
}

export default Icons;
