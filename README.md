# Exercice

y'a du html tout a fait basique dans app.component.html

l'objectif est de le mettre sous la forme de la maquette (moqup.png) en utilisant **uniquement** les classes mises a disposition par LF

 - importer la distribution de LF css (dans le index.html ou angular.json, idc)
 - utiliser le classes du framework
 - interdiction formelle d'ecrire du css

# comment que je fais les choses ?

fork me or whatever, c'est un repo public

```
yarn
yarn start
```

apres faut ecrire du code

# resources

les slides sont [ici](https://docs.google.com/presentation/d/1HT1uh4trkkjgoT-IagpyhO-0yy57h1YqLKUTC7p5FiM/edit?usp=sharing)

la demo est [ici](https://latest-lucca-front-luccasa.surge.sh/)

la maquette est [ici](https://github.com/lucienbertin/formation-lucca-front/blob/td.1/moqup.png)

# marche a suivre

## documentation

commencer par se balader sur la demo de lucca-front/scss pour s'impregner de ce qui est dispo.

y'a plusieurs type de ressources

ce qui permet de faire de la mise en page
 - `grid`
 - le template `navside` + `header`

ensuite les conteneurs qui permettent de separer les differents blocs du html, comme `card`, `callout`, `section`, `box` ou `list`

les micro composants comme `button` ou `textfield` ou `chip` qui permettent d'ajouter la derniere touche

et enfin y'a yun peu d'utilitaires ou de trucs comme `collapse` qui permettent d'enrichir une section par exemple.

## navside

recuperer le template `compact menu with header` et l'appliquer dans notre cas

```html
<main>
	<aside>...</aside>
	<div>
		<header>...</header>
		<section>...</section>
		<section>...</section>
	</div>
</main>
```
devient
```html
<main class="main">
	<aside class="navSide mod-compact">
		<nav class="navSide-scrollWrapper">
			<div class="navSide-item is-active">
				<a href="#" class="navSide-item-link is-active">
					<i class="lucca-icon">jumping_cc</i>
					<span class="navSide-item-link-title">Clients</span>
				</a>
			</div>
			...
		</nav>
	</aside>
	<div class="main-content">
		<header class="header">
			<div class="header-contentLeft">...</div>
			<div class="header-contentRight">...</div>
		</header>
		<div class="container">le contenu principal ici</div>
	</div>
</main>
```

## grid

appliquer la grid dans le content principal
```html
<div class="grid">
	<div class="grid-md8">
		<section>...</section>
		<section>...</section>
		<section>...</section>
	</div>
	<div class="grid-md4">
		<section>...</section>
		<section>...</section>
		<section>...</section>
	</div>
</div>
```

## conteneurs

appliquer les classes `card`, `section` ou `callout` aux differents tags `<section>`

## boutons, inputs

appliquer les synthaxes pour les boutons, les inputs (ca s'appelle textfield dans lucca-front)