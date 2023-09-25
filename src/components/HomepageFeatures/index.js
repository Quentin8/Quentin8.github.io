import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Malta & Italy',
    Img: require('@site/static/img/italy_presentation.jpg').default,
    description: (
      <>
        A 4 weeks trip with a friend discovering Malta and Italy cultures. 
      </>
    ),
    vertical: false,
    link: "/blog/malta-italy",
  },
  {
    title: 'Portugal',
    Img: require('@site/static/img/portugal_pres.jpg').default,
    description: (
      <>
        A 2 weeks trip alone to discover Portugal way of life in Lisboa and Porto.
      </>
    ),
    vertical: true,
    link: "/blog/portugal",
  },
  {
    title: 'Greece',
    Img: require('@site/static/img/greece_pres.jpg').default,
    description: (
      <>
        A 3 weeks adventure in the Greek history and beauty.
      </>
    ),
    vertical: false,
    link: "/blog/greece",
  },
];

function Feature({Img, title, description, vertical, link}) {
  let image = <img src={Img} className={styles.tripPresentationPictureHoriz} role="img" />
  if (vertical) image = <img src={Img} className={styles.tripPresentationPictureVert} role="img" />
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
          {image}
        </a>
        
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
