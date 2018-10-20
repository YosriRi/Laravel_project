import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class About extends Component {
	constructor(props) {
		super(props);
	}

  

	render() {
		return (
            <div className="container">
            
			<div className="row ">
			<div className="col-9 center">
			<h2>Qui Somme Nous?</h2>
            <div className="border_devider"></div>
			<div>
			<h4>Notre histoire</h4>
			<p>So'Extreme est née en juin 2013, avec les beaux jours : normal quand on vend des activités de plein air !
			À l'origine, il y a une petite équipe d'esprits curieux, autant attachés à leur liberté que passionnés d'activités outdoor et de sensations, qui ont tout naturellement décidé de créer leur propre entreprise dans un secteur qu'ils connaissaient déjà : celui de la vente de loisirs sur Internet.
			Ce qui les réunit aussi depuis le départ, c'est l'envie de vivre une vie plus intense et de partager ce plaisir avec le plus grand nombre : pour eux, tout le monde a droit à sa part de frissons et de sensations !
			</p>
			</div>
			<div className="separator"></div>
			<div>
			<h4>Notre ambition</h4>
			<span>
			La mission de So'Extreme est d'offrir à chacun, grand ou petit, sportif ou non, la possibilité de découvrir ou pratiquer les activités qui l'ont toujours fait rêver.
			Et parce que la vie est déjà bien assez compliquée par ailleurs, on a décidé que, chez So'Extreme, ce serait simple et sans prise de tête : trouver la bonne activité, réserver, changer d'avis... c'est facile ; et à la moindre hésitation, vous appelez et on vous aide ! 
			</span>
			</div>
			<div className="separator"></div>
			<p>
			So'Extreme est une agence de réservation d’activités de loisirs et d'activités extrêmes. 
			Sur So'Extreme vous trouverez plus de 20 activités à effectuer seul, en famille ou entre amis, 
			partout en France. Sur So-Extreme.fr, plusieurs choix s’offrent à vous selon votre recherche : 
			vous pouvez soit réserver directement l’activité de votre choix soit offrir un bon cadeau à un proche pour 
			qu’il effectue lui-même la réservation en toute liberté et selon ses envies So'Extreme est donc un excellent 
			moyen pour trouver des idées de cadeaux originales et faire plaisir à coup sûr. La diversité des activités proposées 
			vous assure de trouver LE cadeau unique, qui change et laissera un souvenir inoubliable à son bénéficiaire. 
			Sur So'Extreme, les bons cadeaux sont personnalisés selon votre convenance et plusieurs options sont disponibles : 
			l’envoi du bon cadeau par mail, l’envoi postal dans un étui cadeau et le coffret prestige métal pour en mettre plein 
			la vue !
			</p>
			
			<h4>NOS ENGAGEMENTS</h4>
			<p>
			Parce que tout le monde a droit à sa part de frissons et de sensations, nous nous engageons à :


			<br/><br/>1. proposer le plus large choix d’activités, pour que chacun puisse trouver celle qui lui convient. Avec une sélection unique en France de plus de 20 activités, nous sommes sûrs que chacun, petit ou grand, sportif ou non, trouvera celle qui le fera vibrer. 


			<br/><br/>2. sélectionner les meilleurs partenaires, pour que vous profitiez de votre activité les yeux fermés. Nos activités ont été triées sur le volet, et vous garantissent professionnalisme, sécurité, et ce petit supplément d’âme qui rendra votre expérience inoubliable. 


			<br/><br/>3. vous offrir les meilleurs prix, grâce aux relations de confiance que nous nouons avec tous nos partenaires. 


			<br/><br/>4. vous permettre de réserver quand vous voulez, où vous voulez.
			<br/><br/>Notre site est disponible 24 h / 24, 7 j / 7, et sa version mobile est tout aussi performante.


			<br/><br/>5. nous tenir à votre écoute, et chercher à toujours mieux vous servir.
			<br/><br/>Pour toute demande, contactez-nous par email contact@soextreme.com ou par téléphone au 0892 233 616 (0,35 €/min). Notre équipe de conseillers est à votre disposition et sera ravie de répondre à vos questions de 9 h à 18 h, du lundi au samedi. 


			<br/><br/>6. que vous soyez satisfait... ou satisfait !
			<br/><br/>Rien ne nous fera plus plaisir que de savoir que vous avez aimé votre expérience, et que nous pouvons espérer vous revoir très vite. 

			</p>
            </div>
			</div>
			</div>
            );
	}
}

if (document.getElementById('aboutComponent')) {
	ReactDOM.render(<About />, document.getElementById('aboutComponent'));
}
