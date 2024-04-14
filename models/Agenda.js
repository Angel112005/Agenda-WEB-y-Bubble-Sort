import {LinkedList} from "./LinkedList.js"

export class Agenda {
    constructor() {
        this.contacts = new LinkedList();
    }

    addContact(contact) {
        this.contacts.add(contact);
    }

    removeContact() {
        return this.contacts.remove();
    }

    getContactCount() {
        return this.contacts.getCount();
    }
}