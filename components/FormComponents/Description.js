import formStyles from '../../styles/Form.module.css'

const Description = ({description, setDescription}) => {

    function updateDescription(event) {
        let newDescription = event.target.value
        setDescription(newDescription)
        localStorage.setItem('description', newDescription)
      }

    return (
        <>
            <label htmlFor='description'>Description</label>
            <textarea id='description' value={description} placeholder='. . .' onChange={updateDescription} className={formStyles.description}></textarea>
        </>
    )
}

export default Description
