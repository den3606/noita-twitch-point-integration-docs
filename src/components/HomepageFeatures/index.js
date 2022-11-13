import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Step1 Twitch登録',
    image: require('@site/static/img/settings.png').default,
    description: (
      <>
        Twitchのアカウントを連携させます。
      </>
    ),
  },
  {
    title: 'Step2 Config設定',
    image: require('@site/static/img/settings.png').default,
    description: (
      <>
        チャンネル名、Twitchイベントを受け取るサーバーホスト名、を入力します。
      </>
    ),
  },
  {
    title: 'Step3 準備完了です！',
    image: require('@site/static/img/randomSpellx10.png').default,
    description: (
      <>
        Normalでも、Nightmareでも、プレイすればTwitchPointと連携された状態で始まります。
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImage} src={image} />
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
