import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Perfil',
    Svg: require('@site/static/img/perfil.svg').default,
    description: (
      <>
        Estudante no Instituto de Tecnologia e Liderança,
 apaixonada por programação, tecnologia e mercado financeiro.
      </>
    ),

    
  },
  {
    title: 'Experiência',
    Svg: require('@site/static/img/experiencia.svg').default,
    description: (
      <>
        Experiência com linguagens de programação, como Python, JavaScript, C++, HTML, CSS, SQL, entre outras, além de parceira com clientes de diversos segmentos, como financeiro, saúde, educação, entre outros.
      </>
    ),
  },
  {
    title: '+ Informações',
    Svg: require('@site/static/img/info.svg').default,
    description: (
      <>
        Idiomas, habilidades, e mais informações de contato.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
