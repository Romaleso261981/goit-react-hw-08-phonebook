import { createSlice, createReducer } from '@reduxjs/toolkit'
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { getContactList, createContact, removeContact } from './operations';



export const filterSlice = createSlice({
    name: 'filter',
    initialState: "",   
    reducers: {
        filterContacts: (state, { payload }) => {
            console.log(state)
            return payload;
        }
    }
})

const itemsReducer = createReducer([],{
    [getContactList.pending]: (_, { payload }) => { Loading.pulse() },
    [getContactList.fulfilled]: (state, { payload }) => {
        Loading.remove();
        return payload;
    },
    [getContactList.rejected]: (_, { payload }) => {
        console.log(payload)
        Loading.remove();        
        Report.failure(`${payload.response.data} ${payload.response.status}`, 'Sorry, an error has occurred ', 'Close', {           
            width: '500px',
            svgSize: '50px',
            backOverlayClickToClose: true,
            backOverlayColor: 'pink',
            borderRadius: '10px',
        });
    },  
    
    [createContact.pending]: (state, { payload }) => {
        console.log(state);
        Loading.pulse()
    },
    [createContact.fulfilled]: (state, action) => {
        Loading.remove();
        console.log(state);
        // state.items.push(payload);
        return [...state, action.payload];
    },
    [createContact.rejected]: (state, {payload} ) => {
        Loading.remove();
        Report.failure(`${payload.response.data} ${payload.response.status}`, 'Sorry, an error has occurred ', 'Close', {           
            svgSize: '50px',
            backOverlayClickToClose: true,
            backOverlayColor: 'pink',
            borderRadius: '10px',   
        });       
    },
    [removeContact.pending]: (state, { payload }) => { Loading.pulse() },
    [removeContact.fulfilled]: (state,  {payload} ) => {
        const contactList = state.filter(item => {
            return item.id !== payload;
        })
        Loading.remove();
        console.log(contactList)
        return contactList;
    },
    [removeContact.rejected]: (state, { payload }) => { Loading.remove() 
    Report.failure(`${payload.response.data} ${payload.response.status}`, 'Sorry, an error has occurred ', 'Close', {           
        svgSize: '50px',
        backOverlayClickToClose: true,
        backOverlayColor: 'pink',
        borderRadius: '10px',   
    }); 
    }
})

export const itemsSlice = createSlice({
    name: 'slice',
    initialState: [],
    extraReducers: {

    }
})

export const { filterContacts } = filterSlice.actions;
export const items = itemsReducer;
export const filter = filterSlice.reducer;

Loading.init({
    svgSize: '300px',
    svgColor: 'grey',
});