//import addNewContact to send it to post request and make it available in Routes
import { addNewContact ,getContacts, getContactWithID , UpdateContact,deleteContact} from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
    .get((req,res,next)=>{
        console.log(`request from ${req.originalUrl}`)
        console.log(`request type: ${req.method}`)
        next(); // passing to the next statement
    },
        getContacts)
    .post(addNewContact);

    app.route('/contact/:contactId')
    //get specific contact by id
    .get(getContactWithID)
    .put(UpdateContact)
    .delete(deleteContact)
}

export default routes;