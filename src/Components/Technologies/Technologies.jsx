import React, { useEffect, useState } from 'react'
import Styles from './Technologies.module.css'
import Link from 'next/link';

const Technologies = ({sections}) => {

    const [wvalue, setwvalue] = useState('');
    useEffect(()=> {
        setwvalue(document.body.clientWidth);
    }, [])

    const [activeSection, setActiveSection] = useState(Object.keys(sections)[0])
    
    const webBody =  <div className={Styles.techs}>
                    <div><img src="images/tech2.png"/></div>
                    <div><img src="images/tech3.png"/></div>
                    <div><img src="images/tech4.png"/></div>
                    <div><img src="images/tech5.png"/></div>
                    <div><img src="images/tech6.png"/></div>
                    <div><img src="images/tech1.png"/></div>
                    <div><img src="images/tech7.webp"/></div>
                    <div><img src="images/angular.png"/></div>
                </div>
    const appBody =  <div className={Styles.techs}>
                    <div><img src="images/native.svg"/></div>
                    <div><img src="images/kotlin.svg"/></div>
                    <div><img src="images/flutter.png"/></div>
                    <div><img src="images/ios.png"/></div>
                    
                </div>
    const backendBody =  <div className={Styles.techs}>
                    <div><img src="images/python.png"/></div>
                    <div><img src="images/node.png"/></div>
                    <div><img src="images/java.png"/></div>
                    <div><img src="images/net.png"/></div>
                    <div><img src="images/php.png"/></div>
                </div>
    const databaseBody =  <div className={Styles.techs}>
                    <div><img src="images/mysql.png"/></div>
                    <div><img src="images/mongodb.png"/></div>
                    <div><img src="images/postgre.png"/></div>
                    <div><img src="images/dynamodb.png"/></div>
                    <div><img src="images/aws.svg"/></div>
                    <div><img src="images/s3.png"/></div>
                    <div><img src="images/cloud.png"/></div>
                </div>
    
    const generateTechBody = () => {
        switch(sections[activeSection]){
            case sections.web : return webBody;
            case sections.app : return appBody;
            case sections.backend : return backendBody;
            case sections.database : return databaseBody;
            case sections.cloud : return cloudBody;
            default : return null;
        }
    }
    return (
    <>
        <section className={Styles.Technologies}>
            <h3 className='gt'>Our Tech Stack: Powering Innovation</h3>
            {
                wvalue < 1000 ?
                <p>Our solutions are powered by cutting-edge technologies that ensure efficiency, scalability, and innovation. From advanced programming languages to robust cloud computing platforms, we utilize the best tools to...... <Link href='/services'>Read more</Link></p>
                :
                <p>Our solutions are powered by cutting-edge technologies that ensure efficiency, scalability, and innovation. From advanced programming languages to robust cloud computing platforms, we utilize the best tools to deliver high-performance solutions. Our tech stack includes AI-driven automation, secure databases, and modern development frameworks that enhance reliability and speed. By leveraging the latest in machine learning, cybersecurity, and DevOps, we create seamless, future-ready applications. Our commitment to staying ahead with emerging technologies allows us to provide smart, adaptable, and scalable solutions tailored to meet evolving business needs. With a strong technological foundation, we drive success and digital transformation.</p>

            }
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