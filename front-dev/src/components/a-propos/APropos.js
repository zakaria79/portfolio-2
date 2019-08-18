import React from 'react';
import './APropos.css';

const APropos = props => {

  return (
    <div className="APropos">
      <h1>Mon Parcours</h1>
      <h2>Formations</h2>
      <h3>2015 - 2016 : Formation en ligne</h3>
      <p>
        Comme tous les <em>autodidactes</em>, j'ai commencé à me former (<em>2015</em>)
        en ligne à l'aide de plateformes telles que :
      </p>
        <ul>
          <li>
            <a href="https://openclassrooms.com" target="_blank" rel="noopener noreferrer">
              openclassrooms.com
            </a>
          </li>
          <li><a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer">codecademy.com</a></li>
          <li><a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer">udemy.com</a></li>
          <li><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">developer.mozilla.org</a></li>
          <li><a href="https://www.php.net" target="_blank" rel="noopener noreferrer">php.net</a></li>
          <li style={{color: 'gray', fontStyle: 'italic'}}>&nbsp;et beaucoup d'autres...</li>
        </ul>
        <p>
          J'ai pu acquérir de bonnes bases dans le développement web
          (<i>PHP, SQL, Javascript, HTML, CSS</i>)
          ainsi que dans l'environement Linux (<i>Bash, ssh...</i>)
        </p>

        <h3>2016 - 2017 :&nbsp;
          <a
            href="https://diplome.3wa.fr/othmane-zakaria"
            target="_blank"
            rel="noopener noreferrer"
          >3W Academy</a> (Paris)
        </h3>
        <p>Puis j'ai suivi une formation de
          <a
            href="https://diplome.3wa.fr/othmane-zakaria"
            target="_blank"
            rel="noopener noreferrer"
          > Développeur Intégrateur en réalisation d'Applications Web
          </a> (<strong>2016</strong>) à la 3W Academy de Paris.
        </p>
        <p>Formation intensive basée sur la pratique</p>
        <h3>2015 - 2019 : Veille constante</h3>
        <p>
          Je fait beaucoup de veille technologique.
          Le Web évolue à une très grande vitesse.
          De nouveaux frameworks apparaîssent tous les jours et
          Il est très facile de s'y perdre.
        </p>
        <p>
          J'essaie de tester les technos et solutions qui parraîssent le plus intéressantes
          (<em>Docker, Devops, IA, AWS...</em>)
          et de m'y intéresser de plus près quand je pense qu'elles sont pertinantes
          (ce qui n'est pas le cas avec tout ce qui est nouveau !)
        </p>
        <h2>Experience</h2>
        <h3>2016 - 2017 :&nbsp;
          <a
            href="https://www.lesitedelassurance.fr"
            target="_blank"
            rel="noopener noreferrer"
          >lesitedelassurance</a></h3>
        <p>
          J'ai créé un&nbsp;
          <a
            href="https://www.lesitedelassurance.fr"
            target="_blank"
            rel="noopener noreferrer"
          >site</a> pour un courtier en assurance.
          Un projet que j'ai présenté pour obtenir mon diplôme de fin de fomation (<em>Titre RNCP équivalent BAC+2</em>)
        </p>
        <p>
          J'ai du d'ailleurs utiliser beaucoup de code natif (PHP, JS, SQL...) dans ce projet puisque c'était ce qui était
          demandé par le jury.
        </p>
        <p>
          J'y ai créé un calendrier/agenda avec gestion de RDVs, événements récurrents, vues multiples (jour, semaine, mois),
          entièrement en code natif. Ce qui m'a fait considérablement monter en compétence.
        </p>
        <h3>2018 - 2019 :&nbsp;
        <a
            href="https://www.i2si.fr"
            target="_blank"
            rel="noopener noreferrer"
          >I2SI</a>
        </h3>
        <p>
          <a
              href="https://www.i2si.fr"
              target="_blank"
              rel="noopener noreferrer"
            >I2SI</a> crée des logiciels pour les courtiers, assureurs, et autres professionnels des métiers de la construction.
        </p>
        <p>
          J'ai travailler sur le projet CapData (développement, maintenance, assistance...),
          créé par&nbsp;
        <a
            href="https://www.i2si.fr"
            target="_blank"
            rel="noopener noreferrer"
          >I2SI</a>.
        </p>
        <p>
          La réglementation des contrats de construction (<em>CMI</em>) étant très strict (<em>loi-1990</em>), CapData permet de faciliter
          et d'automatiser au maximum les processus :
        </p>
        <ul style={{listStyle: 'initial'}}>
          <li>Suivi des chantiers</li>
          <li>Délivrance des attestations</li>
          <li>Accès aux dossiers par les différents acteurs concernés
            (compagnies d'assurance, courtiers, partenaires, distributeurs, constructeurs, commerciaux...)
          </li>
          <li>
            Plusieurs passerelles (API) entre CapData et les IDE et logiciels des différents acteurs (compagnies, courtiers, constructeurs...)
            permettant plus d'automatisation
          </li>
          <li>
            Configuration très poussée (permissions, fonctionnalités, produits...)
          </li>
          <li>Gestion des signatures électroniques</li>
          <li>GED</li>
          <li>...</li>
        </ul>
        <h3>Technologies utilisées par&nbsp;
        <a
            href="https://www.i2si.fr"
            target="_blank"
            rel="noopener noreferrer"
        >I2SI</a>
        </h3>
        <p>
        <a
            href="https://www.i2si.fr"
            target="_blank"
            rel="noopener noreferrer"
          >I2SI</a> Développe principalement avec son propre framework (PHP, JS, SQL), créé et maintenu par son équipe de développeurs.
        </p>
        <p>
          Cela permet de répondre à des besoins importants de performances,
          et de moins dépendre d'autres technologies qui évoluent très vite,
          parfois sans rétrocompatibilité,
          et qui risquent ne plus être maintenues.
        </p>
        <h3>Août 2019</h3>
        <p>Développeur Fullstack Indépendant</p>
    </div>
  );
};

export default APropos;
