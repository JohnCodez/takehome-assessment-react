import styles from '../styles/Alert.module.css'

const AlertWindow = ({response, clearResponse}) => {
    return (
        <>
            {response.status
            ?<div className={styles.main}>
                {response.status === 202 
                ? <div className={styles.success}>Success!</div> 
                : <div className={styles.failed}>Failed</div>}<br/>

                <div>Status: {response.status}</div>
                <div>Timeout: {response.timeout} ms</div><br/>

                {response.message 
                    ? <div>Message: {response.message}</div>
                    : <>
                        <div>First Name: {response.name[0]}</div>
                        <div>Last Name: {response.name[1]}</div>
                        <div>Description: {response.description}</div>
                        <div>Country: {response.country}</div>
                    </>
                }
                <button className={styles.clear} onClick={() => clearResponse()}>Clear</button>
            </div>
            : null}
        </>
    )
}

export default AlertWindow
