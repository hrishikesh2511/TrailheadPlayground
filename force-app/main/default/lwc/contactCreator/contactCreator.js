import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {
    @api fields=[FIRST_NAME_FIELD,LAST_NAME_FIELD,EMAIL_FIELD];
    @api objectApiName=CONTACT_OBJECT;

    handleSuccess(event){
        const SToast=new ShowToastEvent({
            title: "Contact Created",
            message:"Record Id:" + event.detail.id,
            variant:"success"

        });

        this.dispatchEvent(SToast);
    }
}