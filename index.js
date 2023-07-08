const {
    listContacts,
    getContactById,
    removeContact,
    addContact
} = require('./contacts');

const argv = require('yargs').argv;


const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const allListContacts = await listContacts()
            console.table(allListContacts)
            break;

        case 'get':
            const getContactId = await getContactById(id)
            console.table(getContactId)
            break;

        case 'add':
            const addNewContact = await addContact(name, email, phone)
            console.table(addNewContact)
            break;

        case 'remove':
            const remove = await removeContact(id)
            console.table(remove)
            break;

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

invokeAction(argv);