# Exercice

le but maintenant est defaire quelques trucs assez basiques avec les sources scss

## importer les sources plutot que la distrib

pour ca faut aller taper sur @lf/scss/src/main.scss et pas @lf/scss/dis/lucca-front.css

## overrider du theme

reussir a mettre la couleur de cc comme palette principale

opur reference c'est ca les couleurs

```scss
	"primary": (
			"color": #FB7F89,
			"text": #FFF,
			"accent": #C354A4,
			"transparent": rgba(#FB7F89, .3),
			"dark": darken(#FB7F89, 5%),
			"darker": darken(#FB7F89, 20%),
			"light": lighten(#FB7F89, 5%),
			"lighter": lighten(#FB7F89, 20%)
	),
```

pro-tip : va falloir bidouiller avec les includePaths

apres ca faudrait overrider la nav 

## recuperation d'une variable de theme dans un style encapsule

dans client.component.scss, y'a ce code commente

```scss
:host {
	// h3 {
	// 	color: recuperer la couleur 'primary' ici
	// }
}
```

faut le faire marcher

# resources

- les slides sont [ici](https://docs.google.com/presentation/d/1HT1uh4trkkjgoT-IagpyhO-0yy57h1YqLKUTC7p5FiM/edit?usp=sharing)
- la demo est [ici](https://latest-lucca-front-luccasa.surge.sh/)
- la maquette est [ici](https://github.com/lucienbertin/formation-lucca-front/blob/td.2/moqup.png)

# marche a suivre

## recuperer les sources scss et pas la distribution css

dans style.scss importer `@lucca-front/scss/src/main`.
ensuite faut choisir si vous souhaitez utiliser les vas css ou non.
- si non faut mettre avant l'import `$noCssVars: true;`
- si oui faut denerer les vars css a partir du theme

## override

en important `@lucca-front/scss/src/main.overridable` vous allez peter la transpil scss ; ce qui est normal vu qu'il cherche un fichier `palettes.override` et ne trouve rien.
faut donc rajouter le bon include path dans le angular.json (cf slides)

ensuite vous allez vouloir definire vos override, faut toutes les mettre dans un dossier, rajouter le path de ce dossier en premier dans les include paths et creez votre fichieer `_palettes.override.scss` dans ce dossier.

ensuite faite un fichier `_components.override.scss` pour pouvoir overrider la nav en particulier

## style encapsule

dans le composant vous voulez recuperer la map `$theme`, ce qui veut dire importer `@lucca-front/scss/src/theming` ou `@lucca-front/scss/src/theming.overridable`

vous pouvez choisir d'utiliser ou non les variables css, toutefois il faut les generer une seule fois et c'est normalement deja fait dans `style.scss` et faut surtout pas le refaire dans chaque component au style encapsule