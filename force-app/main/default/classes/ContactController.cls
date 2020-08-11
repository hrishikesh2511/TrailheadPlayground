public with sharing class ContactController {

    public ContactController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return [select FirstName,LastName,Email from contact with security_enforced  ];    
      //throw new AuraHandledException('Forced error');
    }
    
}
