export const ClearLocalStorage = () => {
    localStorage.removeItem('name')
    localStorage.removeItem('description')
    localStorage.removeItem('country')
}