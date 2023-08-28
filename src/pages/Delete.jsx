import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBarToDelete from "../components/DeleteSearch";
import Header from "../components/Header";
import { fetchCountriesData, deleteCountry } from "../data/Slicer";
import "./Delete.css";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function DeletePage(props) {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [countryToDelete, setCountryToDelete] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const dispatch = useDispatch();
  const countries = useSelector((state) => {
    return state.counter.countries;
  });
  const countriesLength = useSelector((state) => state.counter.countries.length);
  /*
  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);
  */
  const renderUnfilteredList = () => {
    setFilteredCountries(countries);
  };

  const handleFilter = (inputValue) => {
    setInputValue(inputValue);
    const lowerCaseInput = inputValue.toLowerCase();

    const filteredData = countries.filter((country) => {
      const lowerCaseCountryName = country.name.common.toLowerCase();
      return (
        lowerCaseCountryName.includes(lowerCaseInput)
      );
    });

    setFilteredCountries(filteredData);
  };

  const handleTrashClick = (country) => {
    setShowDeleteConfirmation(true);
    setCountryToDelete(country);
    setOpen(true);
    console.log("set Ettim")
  };

  const handleCrossClick = () => {
    setShowDeleteConfirmation(false);
    setCountryToDelete(null);
  };


/**
 *  Handle delete fonksiyonu parametre almasına gerek yok
 *  countryToDelete stateti silinecek country nesnesini tutuyor zaten
 *  Eğer handleDelete fonksiyonu arguman alacaksa örneğin 
 *  const handleDelete = (country) => {// do something }
 *  bunu çağırırken bu nesneyi vererek çağırmalısın mesela
 *  onClick ={ () => handleDelete(country)}
 */
const handleDelete = () => {
  dispatch(deleteCountry(countryToDelete.name.common)); // Pass the country name as payload
  setInputValue("");
  setShowDeleteConfirmation(false);
  setCountryToDelete(null);

  // Update the filteredCountries state
  setFilteredCountries(filteredCountries.filter(c => c.name.common !== countryToDelete.name.common));
};
  /*
function onClick(functionToBeExecuted){

  functionToBeExecuted(element)
}*/
  return (
    <div>
      <div><Header renderUnfilteredList={renderUnfilteredList} width={100} /></div>
      <Link to={'/'}>back</Link><br />
      <div>Number Of Countries {countriesLength}</div>
      <SearchBarToDelete placeholder="Country to delete" onInputChange={handleFilter} />
      <div className='long_container'>
        {filteredCountries.map(country => (
          <div className="individual_box" key={country.name.common}>
            <p>{country.name.common}</p>
            {/* Conditionally render the content based on state */}
            {showDeleteConfirmation && country === countryToDelete ? (
              
            <Modal 
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className='modal'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Are sure you want to delete the country {country.name.common}?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  This cannot be undone
                </Typography>
                <div className="trash-content">
                <CheckIcon onClick={handleDelete} />
                <CloseIcon onClick={handleCrossClick} />
              </div> 
              </Box>
            </Modal>
        
            /*  */
            ) : (
              <DeleteIcon className="trash" onClick={() => handleTrashClick(country)} />
            )}
          </div>
        ))}
        <br />
      </div>
    </div>
  );
}

export default DeletePage;
