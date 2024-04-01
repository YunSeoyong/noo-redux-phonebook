let initialState = {
    contactList: [],
    search: '',
};

function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case "ADD_CONTACT" : {
            return {
                ...state,
                contactList: [
                    ...state.contactList,
                    {
                        name: payload.name, 
                        phoneNumber:  payload.phoneNumber,
                        id: payload.id
                    }
                ]
            }
        }
        case "DELETE_CONTACT": {
            return {
                ...state,
                contactList: state.contactList.filter(contact => 
                    contact.id !== payload.id
                )
            }
        }
        case "SEARCH" : {
            return {
                ...state,
                search: payload.search
            }
        }
        default: {
            return {...state}
        }
    };
};

export default reducer;