//Slicer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  filteredCountries: [],
};

export const counterSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    //asagidakiler action
    deleteCountry: (state, action) => {
      const countryToDelete = action.payload;
      state.countries = state.countries.filter(
        (country) => country.name.common !== countryToDelete
      );
      state.filteredCountries = state.filteredCountries.filter(
        (country) => country.name.common !== countryToDelete
      );
    },
    insertCountry: (state, action) => {
      const countryToInsert = action.payload;
      state.countries.push(countryToInsert);
      state.filteredCountries.push(countryToInsert);
    },
    setCountriesData: (state, action) => {
      const fetchedCountries = action.payload;
      state.countries = fetchedCountries;
      state.filteredCountries = fetchedCountries;
    },
  },
});

export const { deleteCountry, insertCountry, setCountriesData } = counterSlice.actions;

export default counterSlice.reducer;



// Redux Thunk kullanarak API'den verileri çekme
//bunu yapamamıştım chatgpt verdi tam bilmiyorum
export const fetchCountriesData = () => async (dispatch) => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    dispatch(setCountriesData(data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
