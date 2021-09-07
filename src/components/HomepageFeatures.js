import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Este documento está pensado para organizar toda la información de una forma fácil y sencilla.
      </>
    ),
  },
  {
    title: 'Barra de navegación',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        La documentación de esta página cuenta con una barra de navegación que permite encontrar el contenido fácilmente.
      </>
    ),
  },
  {
    title: 'Modo oscuro',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        La página soporta modo oscuro para facilitar la lectura de la información con poca luz.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
