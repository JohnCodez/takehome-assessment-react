import formStyles from '../../styles/Form.module.css'

const Name = ({name, setName}) => {
    
    function updateName(event) {
        let newName = event.target.value
        setName(newName)
        localStorage.setItem('name', newName)
    }

    return (
        <>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' value={name} placeholder='First Last' onChange={updateName} className={formStyles.name}/>
        </>
    )
}

export default Name
