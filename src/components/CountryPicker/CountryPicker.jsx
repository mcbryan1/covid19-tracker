import React, {useState, useEffect} from 'react'
import './CountryPicker.css'
import {fetchCountries} from '../../api'


const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);


    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]); 


    return (
        <div>
            <div className="container-fluid selector">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div>
                            <select 
                                class="custom-select"   
                                id="inputGroupSelect02"
                                defaultValue=""
                                onChange={(e)=> handleCountryChange(e.target.value) }
                                >
                                <option selected value="">Global</option>
                                {fetchedCountries.map((country, i) =><option key={i} value={country}>{country}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    )
}

export default CountryPicker