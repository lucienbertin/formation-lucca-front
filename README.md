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
	// 	color: recuperer la couleur primary ici
	// }
}
```

faut le faire marcher

# comment que je fais les choses ?



# resources

les slides sont [ici](https://docs.google.com/presentation/d/1HT1uh4trkkjgoT-IagpyhO-0yy57h1YqLKUTC7p5FiM/edit?usp=sharing)
la demo est [ici](https://latest-lucca-front-luccasa.surge.sh/)
la maquette est [ici](https://github.com/lucienbertin/formation-lucca-front/blob/td.2/moqup.png)
