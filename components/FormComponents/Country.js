import formStyles from '../../styles/Form.module.css'
import CountryList from '../helpers/CountryList'

const Country = ({country, setCountry}) => {

    function updateCountry(event) {
        let newCountry = event.target.value
        setCountry(newCountry)
        localStorage.setItem('country', newCountry)
    }

    return (
        <>
            <label htmlFor='country'>Country</label>
            <select id='country' value={country} onChange={updateCountry} className={formStyles.countries}>
                <option value='' disabled>Select a country</option>
                <CountryList />
            </select>
        </>
    )
}

export default Country
