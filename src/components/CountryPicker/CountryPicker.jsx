import React, {useState, useEffect} from 'react';
import { fetchCountries } from "../../api";
import {FormControl, NativeSelect} from '@material-ui/core';
import styles from './CountryPicker.module.css'

const CountryPicker = () => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
          setFetchedCountries(await fetchCountries());
        };
        fetchAPI();
      });

    return ( 
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="daily-us">Daily US</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        );
}
 
export default CountryPicker;