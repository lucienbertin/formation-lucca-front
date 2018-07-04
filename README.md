# Exercice

la va falloir utiliser material et formly et ce qu'offre les entryu points `/mterial` et `/formly`

## Ouvrir une modale de creation de client

j'ai rajoute le module `create`, qui ppour l'instant n'a que le bouton de creation. ce qu'il faut c'est que

 - au click ca ouvre un `dialog`
 - avec dedans ujn formlulaire de creation de client

cf la [maquette](https://github.com/lucienbertin/formation-lucca-front/blob/td.5/moqup.png)

faut penser a recuperer l'ocverride de style qu'a fait sandy dans `@lucca-front/ng/material`

## utiliser formly pour le formulaire

et la brique `LuFormlyModule` qui est dans `@lucca-front/ng/formly`

cf la [maquette](https://github.com/lucienbertin/formation-lucca-front/blob/td.4/moqup-hover.png)

# resources

les slides sont [ici](https://docs.google.com/presentation/d/1HT1uh4trkkjgoT-IagpyhO-0yy57h1YqLKUTC7p5FiM/edit?usp=sharing)
la demo est [ici](https://latest-lucca-front-luccasa.surge.sh/)
la maquette est [ici](https://github.com/lucienbertin/formation-lucca-front/blob/td.3/moqup.png)
[formly](https://github.com/formly-js/ngx-formly)
[ng-material](https://material.angular.io/)

# marche a suivre

## @lf/ng/material

meme chose que pour le td precedent, importer la feuille de style en prenant soin de rajouter le bon includePath.

## modale

aller voir la [doc de ng-mat](https://material.angular.io/components/dialog/overview).

ce qu'offre lucca-front/ng/material est juste une surcouche css afin que si vous utilisez un composant angular-material parmis ceux supportes, le style soit pas discordant avec le reste

## @lf/ng/formly

meme chose que pour le td precedent, importer la feuille de style en prenant soin de rajouter le bon includePath.

## creer un formulaire formly

la je vous renvoies a la doc de [formly](https://github.com/formly-js/ngx-formly).

ce qu'offre lucca-front/ng/formly est la meme chose que ce qu'ils offrent par rapport a bootstrap et material, c'est a dire un ensemble de templates pour afficher un formulaire dans le style de la bibliotheque en question

### formlymodule.forRoot

faut rajouter `FormlyModule.forRoot()` dans les imports de app.module, c'est comme ca, j'y suis pour rien

### LuFormlyModule

dans le module du composant qui servira a afficher le formulaire, importer `FormlyModule` et `LuFormlyModule`. pour que ca marche faut aussi importer `ReactiveFormsModule`

### confg de formulaire

vous pouvez copy pasta cette config

```ts
fields = [
	{
		key: 'name',
		type: 'input',
		templateOptions: {
			type: 'text',
			label: 'nom',
			mod: 'mod-framed',
		},
	},
	{
		key: 'email',
		type: 'input',
		templateOptions: {
			type: 'email',
			label: 'contact',
			mod: 'mod-framed',
		},
	},
	{
		key: 'password',
		type: 'input',
		templateOptions: {
			type: 'password',
			label: 'password',
			mod: 'mod-framed',
		},
	},
	{
		key: 'startDate',
		type: 'date',
		templateOptions: {
			label: 'Date de debut',
			mod: 'mod-framed',
		},
	},
	{
		key: 'notabene',
		type: 'textarea',
		templateOptions: {
			label: 'remaqrwues en tout genre',
			mod: 'mod-framed',
		},
	},
	{
		key: 'type',
		type: 'select',
		templateOptions: {
			label: 'type de contrat',
			options: [
				{ id: 0, name: 'direct' },
				{ id: 1, name: 'indirect' },
			],
			mod: 'mod-framed',
		},
	},
];
```

mais attention, le champ date utilise le date-picker de material, ce qui necessite de rajoute les bons import dans le bon module (`MatDatepickerModule` ainsi que `MatNativeDateModule` (ou un autre dateadapter)