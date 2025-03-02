import Styles from './Loader.module.css'
const Loader = () => {
    
    return(
        <div className={Styles.loadercon}>
            <div className='layer'></div>
            <span className={Styles.loader}></span>
            {/* <p>Loading</p> */}
        </div>
    )
}

export default Loader;