import { SubmitFetch } from "./SubmitFetch"

export const SubmitForm = (event, clearForm, toggleLoading, setResponse) => {
    event.preventDefault()

    const formData = event.target
    const name = formData.name.value.split(' ').filter(word => word !== "")
    const description = formData.description.value
    const country = formData.country.value

    if (name.length === 2) {
        if (description.split(' ').filter(word => word !== "").length > 0){
            if (country) {
                toggleLoading(true)
                const data = {
                    name: name,
                    description: description,
                    country: country
                }
                SubmitFetch(data, () => toggleLoading(false), (response) => setResponse(response), () => clearForm())
            } else {
                alert('Please select a country')
            }
        } else {
            alert('Please enter a description')
        }
    } else {
        alert('Please enter your First AND Last names')
    }
}