export const initialStore = () => {
  return {
    contacts: []
  }
}


export default function storeReducer(store = initialStore, action = {}) {
  switch (action.type) {
    case 'sync_contacts':
      const contactsData = action.payload.contacts
      return {
        ...store,
        contacts: contactsData
      }
    case 'delete_contact':

      const contactId = action.payload;

      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== contactId)
      }

    case 'edit_contact':

      const idContact = action.payload;
      console.log(idContact)

      const contactFound = store.contacts.filter(contact => contact.id == idContact)
      console.log(contactFound)

      return {
        ...store,
        contacts: contactFound[0]
      }

    default:
      throw Error('Unknown action.');
  }
}
