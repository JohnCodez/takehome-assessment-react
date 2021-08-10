export const SubmitFetch = (data, toggleLoadingOff, setResponse, clearForm) => {
    let status

    fetch(`/api/parrot`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => {
        status = res.status
        if (status === 202) {
            clearForm()
        }
        return res.json()
    })
    .then(res => {
        let response = res
        response.status = status
        setResponse(response)
        toggleLoadingOff()
    })
}