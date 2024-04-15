import { agenda, bubbleSort, toArray } from '../controllers/dependencies.js';

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('guardarBtn');
    const showButton = document.getElementById('mostrarBtn');
    const ordenarNombreButton = document.getElementById('ordenarNombreBtn');
    const ordenarApellidosButton = document.getElementById('ordenarApellidosBtn');

    addButton.addEventListener('click', addContact);
    showButton.addEventListener('click', showContacts);
    ordenarNombreButton.addEventListener('click', ordenarPorNombre);
    ordenarApellidosButton.addEventListener('click', ordenarPorApellidos);
});

function addContact() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const telefono = document.getElementById('telefono').value;

    if (nombre !== '' && apellidos !== '' && telefono !== '') {
        const contact = { nombre, apellidos, telefono };
        agenda.addContact(contact);

        alert('Contacto agregado con éxito!');
        clearForm();
    } else {
        alert('Por favor, ingresa nombre, apellidos y teléfono del contacto.');
    }
}

function showContacts() {
    const listaContactos = document.getElementById('listaContactos');
    listaContactos.innerHTML = ''; 

    if (agenda.getContactCount() === 0) {
        listaContactos.textContent = "No hay contactos para mostrar";
    } else {
        let currentContact = agenda.contacts.head;
        while (currentContact) {
            listaContactos.innerHTML += "Nombre (s): " + currentContact.data.nombre + "<br>";
            listaContactos.innerHTML += "Apellidos: " + currentContact.data.apellidos + "<br>";
            listaContactos.innerHTML += "Teléfono: " + currentContact.data.telefono + "<br><br>";
            currentContact = currentContact.next;
        }
    }
}

function clearForm() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('telefono').value = '';
}

function ordenarPorNombre() {
    const contactsArray = toArray(agenda.contacts);
    const sortedContacts = bubbleSort(contactsArray, 'nombre');
    mostrarContactosOrdenados(sortedContacts);
}

function ordenarPorApellidos() {
    const contactsArray = toArray(agenda.contacts);
    const sortedContacts = bubbleSort(contactsArray, 'apellidos');
    mostrarContactosOrdenados(sortedContacts);
}



function mostrarContactosOrdenados(contacts) {
    const listaContactos = document.getElementById('listaContactos');
    listaContactos.innerHTML = ''; // Limpiar la lista antes de mostrar los contactos

    if (contacts.length === 0) {
        listaContactos.textContent = "No hay contactos para mostrar";
    } else {
        for (let i = 0; i < contacts.length; i++) {
            listaContactos.innerHTML += "Nombre (s): " + contacts[i].nombre + "<br>";
            listaContactos.innerHTML += "Apellidos: " + contacts[i].apellidos + "<br>";
            listaContactos.innerHTML += "Teléfono: " + contacts[i].telefono + "<br><br>";
        }
    }
}
