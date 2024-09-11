import React, { useState } from 'react'
import Styles from './Technologies.module.css'

const Technologies = ({sections}) => {

    const [activeSection, setActiveSection] = useState(Object.keys(sections)[0])
    
    const webBody =  <div className={Styles.techs}>
                    <div><img src="images/tech2.png"/></div>
                    <div><img src="images/tech3.png"/></div>
                    <div><img src="images/tech4.png"/></div>
                    <div><img src="images/tech5.png"/></div>
                    <div><img src="images/tech6.png"/></div>
                    <div><img src="images/tech1.png"/></div>
                    <div><img src="images/tech7.webp"/></div>
                </div>
    const appBody =  <div className={Styles.techs}>
                    <div>2</div>
                    <div>2</div>
                    <div>2</div>
                    <div>2</div>
                    <div>2</div>
                    <div>2</div>
                </div>
    const backendBody =  <div className={Styles.techs}>
                    <div>3</div>
                    <div>3</div>
                    <div>3</div>
                    <div>3</div>
                    <div>3</div>
                    <div>3</div>
                </div>
    const apiBody =  <div className={Styles.techs}>
                    <div>4</div>
                    <div>4</div>
                    <div>4</div>
                    <div>4</div>
                    <div>4</div>
                    <div>4</div>
                </div>
    const otherBody =  <div className={Styles.techs}>
                    <div>5</div>
                    <div>5</div>
                    <div>5</div>
                    <div>5</div>
                    <div>5</div>
                    <div>5</div>
                </div>
    
    const generateTechBody = () => {
        switch(sections[activeSection]){
            case sections.web : return webBody;
            case sections.app : return appBody;
            case sections.backend : return backendBody;
            case sections.api : return apiBody;
            case sections.others : return otherBody;
            default : return null;
        }
    }
    return (
    <>
        <section className={Styles.Technologies}>
            <h3 className='gt'>Technologies we Use</h3>

            <div className={Styles.list}>
                <ul>
                    {
                        Object.keys(sections)?.map((key)=>{
                            return <li key={key}
                            className={activeSection === key ? Styles.active : ''}
                            onClick={()=> setActiveSection(key)}
                            >{sections[key]}</li>
                        })
                    }
                </ul>
            </div>

           {generateTechBody()}
        </section>
    </>
  )
}

export default Technologies