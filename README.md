# Projet Citoyen

Site web statique realise dans le cadre d'un projet citoyen sur les inegalites entre les hommes et les femmes dans le secteur du numerique.

Le site a pour objectif de sensibiliser le public aux questions de representation, d'egalite professionnelle, de stereotypes de genre et d'inclusion dans les metiers du digital, en s'appuyant sur du contexte, des donnees, une chronologie, des interviews et des pistes de solution.

## Presentation du projet

Ce projet explore la place des femmes dans l'univers numerique et technologique a travers plusieurs angles complementaires :

- le contexte general de la thematique ;
- l'evolution historique de la presence feminine dans le numerique ;
- des statistiques et constats documentes ;
- des temoignages issus d'interviews et d'un questionnaire ;
- des solutions concretes pour favoriser un secteur plus inclusif.

Le site adopte un format editorial simple, accessible depuis un navigateur, sans backend ni base de donnees. Il repose sur des pages HTML reliees entre elles, une feuille de style unique et un script JavaScript pour les interactions et animations.

## Problematique traitee

La problematique mise en avant sur la page d'accueil est la suivante :

> Comment les relations entre hommes et femmes se manifestent-elles et evoluent-elles dans le domaine du numerique en termes d'inegalites professionnelles, de representation dans les metiers et de dynamiques au sein des environnements de travail ?

Le site repond a cette question en combinant contenus explicatifs, illustrations, chiffres cles et retours d'experience.

## Objectifs

- Sensibiliser a la sous-representation des femmes dans la tech.
- Mettre en lumiere les stereotypes et discriminations encore presents.
- Donner de la visibilite a des temoignages et avis recueillis.
- Presenter des donnees et exemples historiques pour contextualiser le sujet.
- Proposer des solutions et initiatives pour faire evoluer les pratiques.

## Public vise

Le projet s'adresse principalement :

- aux etudiants ;
- aux enseignants et encadrants pedagogiques ;
- aux personnes souhaitant mieux comprendre les enjeux de mixite dans le numerique ;
- a toute personne interessee par les questions d'egalite femmes-hommes.

## Contenu du site

Le site est compose de plusieurs pages thematiques.

### Accueil

La page d'accueil introduit le sujet, la problematique et la motivation du groupe. Elle sert de point d'entree au projet et pose le cadre general de la reflexion.

### Contexte

Cette page explique pourquoi cette thematique a ete choisie. Elle insiste sur l'importance sociale, professionnelle et citoyenne du sujet, ainsi que sur la persistance des inegalites dans les secteurs numeriques.

### Chronologie

La page chronologie retrace l'evolution de la place des femmes dans le numerique. Elle met notamment en avant :

- la baisse de la feminisation de certains metiers techniques ;
- l'evolution de la part des femmes diplomees dans le secteur ;
- la persistance des ecarts salariaux.

### Interview

Cette section presente plusieurs temoignages et avis recueillis autour de questions liees a l'egalite professionnelle, au sexisme dans la tech, a l'eSport, a la legitimite professionnelle et a la sous-representation des femmes.

Une page complementaire, questionnaire.html, centralise l'ensemble des questions et les captures des reponses associees.

### Statistiques

La page statistiques rassemble plusieurs donnees et constats sur la place des femmes dans le secteur numerique, notamment autour :

- de leur presence dans les formations ;
- de leur representation dans les emplois du secteur ;
- de leur acces aux postes techniques et de direction ;
- de l'existence de comportements sexistes dans l'environnement professionnel.

### Solutions

Cette page propose des pistes d'action a plusieurs niveaux :

- initiatives institutionnelles et internationales ;
- programmes nationaux ;
- solutions concretes a l'echelle individuelle ou organisationnelle.

Parmi les axes mis en avant :

- mentorat et reseautage ;
- reduction des biais dans le recrutement ;
- formations et ateliers ;
- valorisation de modeles feminins inspirants.

### A propos de nous

La page contact.html presente les credits du projet et l'equipe ayant participe a sa realisation, avec les liens GitHub et LinkedIn de plusieurs membres du groupe.

## Fonctionnalites

Le projet reste volontairement simple sur le plan technique, mais inclut plusieurs elements d'interface :

- barre de navigation fixe en haut de page ;
- menu responsive avec ouverture/fermeture sur petit ecran ;
- animations d'apparition au chargement et au defilement ;
- mise en page adaptee aux ecrans desktop et mobile ;
- sections visuelles basees sur des images, infographies et captures d'ecran.

## Technologies utilisees

- HTML5
- CSS3
- JavaScript vanilla
- Font Awesome via CDN pour les icones
- Google Fonts via import CSS pour la typographie

Le projet ne necessite pas d'installation de dependances JavaScript ni d'outil de build.

## Structure du projet

```text
Projet-Citoyen/
├── Assets/                 # Images, captures et visuels utilises dans le site
├── chronologie.html        # Frise, evolution historique et constats
├── contact.html            # Credits et presentation de l'equipe
├── contexte.html           # Justification du choix de la thematique
├── index.html              # Page d'accueil
├── interview.html          # Synthese des interviews et acces au questionnaire
├── questionnaire.html      # Ensemble des questions/reponses en captures
├── script.js               # Animations et comportements JS globaux
├── solutions.html          # Initiatives et recommandations
├── stat.html               # Donnees et chiffres cles
├── style.css               # Styles globaux et responsivite
└── README.md               # Documentation du projet
```

## Organisation technique

### HTML

Chaque page HTML suit une structure commune :

- un header avec navigation principale ;
- un menu deroulant pour mobile ;
- une section hero avec titre et introduction ;
- une ou plusieurs sections de contenu ;
- un footer commun.

Le site est construit comme un ensemble de pages statiques reliees entre elles par des liens internes.

### CSS

Le fichier style.css centralise :

- les styles globaux ;
- la charte visuelle du site ;
- la navigation ;
- les animations ;
- les composants de type section, interview, solution, credits et reseaux sociaux ;
- les regles responsive.

La direction artistique repose sur un contraste fort entre :

- un fond sombre ;
- des accents rose vif et cyan ;
- des titres en capitales ;
- des blocs de contenu card-like.

### JavaScript

Le fichier script.js gere principalement :

- l'apparition des elements au scroll ;
- l'ajout/retrait de l'etat sticky de la navbar ;
- l'animation des elements au chargement ;
- la logique liee a un bouton de retour en haut de page.

En complement, plusieurs pages embarquent aussi un petit script inline pour l'ouverture et la fermeture du menu mobile.

## Ressources et contenu medias

Le dossier Assets contient l'ensemble des ressources visuelles du projet :

- images d'illustration ;
- infographies ;
- captures de statistiques ;
- captures d'interviews et de reponses au questionnaire.

Une partie importante du contenu interview/questionnaire est integree sous forme d'images exportees, ce qui permet de conserver la presentation originale des reponses recueillies.

## Lancer le projet en local

Comme il s'agit d'un site statique, plusieurs options sont possibles.

### Option 1 : ouverture directe

1. Ouvrir le dossier Projet-Citoyen.
2. Double-cliquer sur index.html.
3. Naviguer entre les pages via le menu.

### Option 2 : serveur local recommande

L'utilisation d'un serveur local est preferable pour reproduire un contexte de navigation plus proche d'un hebergement web.

Exemples :

- avec VS Code et l'extension Live Server ;
- avec Python :

```bash
python -m http.server 8000
```

Puis ouvrir dans le navigateur :

```text
http://localhost:8000
```

## Points forts du projet

- Sujet de societe clairement identifie et utile pedagogiquement.
- Parcours de navigation simple et lisible.
- Contenu riche, organise en pages thematiques.
- Presence simultanee de contexte, chiffres, chronologie, temoignages et solutions.
- Design coherent et responsive base sur une charte visuelle marquee.

## Limites actuelles

Le projet etant un site statique, certaines limites peuvent etre notees :

- absence de formulaire ou d'interactions dynamiques cote utilisateur ;
- contenu principalement editorial, sans moteur de recherche ni filtrage ;
- plusieurs scripts de menu sont dupliques dans les pages HTML ;
- la logique du bouton back-to-top est presente dans le JavaScript, mais l'element correspondant n'apparait pas dans la structure actuelle des pages.

## Pistes d'amelioration

- mutualiser davantage le JavaScript commun dans un seul script proprement reutilise ;
- ajouter un vrai bouton de retour en haut de page ;
- ameliorer l'accessibilite des images avec des textes alternatifs plus descriptifs ;
- factoriser les parties communes avec un systeme de templates si le projet evolue ;
- enrichir le README avec les sources documentaires detaillees si necessaire ;
- ajouter une section dediee aux references bibliographiques et statistiques.

## Equipe

La page a propos de nous mentionne notamment les membres suivants :

- Yohann Miller
- Richard Dizon
- Stefan Chitoroaga
- Lucas Stamper
- Pierre Guesdon
- Maxim Joly

## Cadre pedagogique

Ce projet semble avoir ete realise dans un cadre scolaire ou universitaire autour d'une demarche citoyenne, de recherche documentaire et de sensibilisation. Il combine production web, analyse de donnees, travail d'interview et reflexion sur les enjeux sociaux du numerique.

## Resume

Projet Citoyen est un site web statique de sensibilisation consacre aux inegalites femmes-hommes dans le numerique. Il s'appuie sur une approche a la fois informative, visuelle et argumentative pour presenter le contexte, les faits, les temoignages et des pistes d'action concretes.