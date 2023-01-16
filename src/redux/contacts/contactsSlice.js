import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder =>
    builder

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })

      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export default contactsSlice.reducer;

// Операции с использованием экстра-редюсера и слайса, без addMatcher
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: builder =>
//     builder
//       .addCase(fetchContacts.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.items = payload;
//         state.error = null;
//       })
//       .addCase(fetchContacts.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })
//       .addCase(addContact.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(addContact.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = [...state.items, payload];
//       })
//       .addCase(addContact.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })
//       .addCase(deleteContact.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(deleteContact.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.filter(({ id }) => id !== payload);
//       })
//       .addCase(deleteContact.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       }),
// });

// export default contactsSlice.reducer;

// Операции с использованием экстра-редюсера и слайса, без оптимизации
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: {
//     [fetchContacts.pending]: state => {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.items = payload;
//       state.error = null;
//     },
//     [fetchContacts.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//     [addContact.pending]: state => {
//       state.isLoading = true;
//     },
//     [addContact.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items = [...state.items, payload];
//     },
//     [addContact.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//     [deleteContact.pending]: state => {
//       state.isLoading = true;
//     },
//     [deleteContact.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items = state.items.filter(({ id }) => id !== payload);
//     },
//     [deleteContact.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });

// export default contactsSlice.reducer;
