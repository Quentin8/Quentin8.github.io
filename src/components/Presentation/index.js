import React from 'react';

import clsx from 'clsx';
import styles from './styles.module.css';



export default function Presentation(){
  let image = require('@site/static/img/me.jpg').default
  let name = "Fournier Quentin"
  let myDescription = "My name is Quentin Fournier and I am 23 years old. I studied at ISEN Nantes engineering school."
  let description = `
  I'm passionate about travel, because for me it's all about adventures and discoveries. Travelling offers the opportunity to 
  immer ourself to other cultures, try new things and meet people from all around the world.
  Furthermore I wished to improve my spoken english.
  `

  return (
    <div style={{widht: "100%"}}>
      <div class="card">

        <div>
          <img src={image} alt={name} className='cardImage'/>
        </div>
        <h2 className='cardTitle'>Who am I ?</h2>
        <div className={styles.cardBody}>
            {myDescription}
            <br />
        </div>
        <br />
        <div className={styles.cardBody}>
          <h3 className={styles.cardDescTitle}>Motivations</h3>
            {description}
            <br />
        </div>
      </div>
    </div>
    
  )
}

// function Feature({Img, title, description, vertical}) {
//   let image = <img src={Img} className={styles.tripPresentationPictureHoriz} role="img" />
//   if (vertical) image = <img src={Img} className={styles.tripPresentationPictureVert} role="img" />
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         {image}
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
