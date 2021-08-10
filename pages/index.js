import { useState, useEffect } from 'react'
import Head from 'next/head'
import formStyles from '../styles/Form.module.css'
import styles from '../styles/Index.module.css'
import Loading from '../functions/Loading'
import { SubmitForm } from '../functions/SubmitForm'
import { ClearLocalStorage } from '../functions/ClearLocalStorage'
import Name from '../components/FormComponents/Name'
import Description from '../components/FormComponents/Description'
import Country from '../components/FormComponents/Country'
import AlertWindow from '../components/AlertWindow'

function IndexPage() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [country, setCountry] = useState('')
  const [isLoading, toggleLoading] = useState(false)
  const [response, setResponse] = useState({})
  

  useEffect(() => {
    setName(localStorage.getItem('name') || '')
    setDescription(localStorage.getItem('description') || '')
    setCountry(localStorage.getItem('country') || '')
  }, [])

  function handleClear() {
    ClearLocalStorage()
    setName('')
    setDescription('')
    setCountry('')
  }

  function hanldeSubmit(event) {
    SubmitForm(
      event, 
      () => handleClear(), 
      (value) => toggleLoading(value), 
      (response => setResponse(response))
    )
  }

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <main>
        <h1 className={styles.title}>React Form</h1>
        {isLoading 
        ? <div className={styles.loading}><Loading /></div>
        :<div className={styles.container}>
          <form className={formStyles.form} autoComplete='off' onSubmit={hanldeSubmit}>
            <Name name={name} setName={(value) => setName(value)}/>
            <Description description={description} setDescription={(value) => setDescription(value)} />
            <Country country={country} setCountry={(value) => setCountry(value)} />
            <button className={styles.submit}>Submit</button>
            <button type='button' className={styles.clear} onClick={handleClear}>Clear</button>
          </form>
          <AlertWindow response={response} clearResponse={() => setResponse({})}/>
        </div>
        }
      </main>
    </>
  );
}

export default IndexPage;

