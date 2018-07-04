# Exercice

faire des extension de ce que propose lucca-front

## un select-feeder qui ping gmap

creer ce qu'il faut pour avoir un select qui ping l'api de gmap

celle-ci https://maps.googleapis.com/maps/api/geocode/json?address=13-rue-martin-bernard

cf. [moqup](https://github.com/lucienbertin/formation-lucca-front/blob/td.6/moqup-select.png)

## le composant cc-user

reprendre ce qui a ete fait en TD4, mais en faire un composant

la chose importante c'est qu'il faut remplacer ca
```html
<span [luPopoverTriggerFor]="popover">{{ xxx | luUserDisplay: format }}</span>
<lu-popover #popover="LuPopover" trigger-on="hover">
	<lu-user-tile [user]="xxx"></lu-user-tile>
</lu-popover>
```
par ca
```html
<span [luPopoverTriggerFor]="popover">{{ xxx | luUserDisplay: format }}</span>
<cc-user-popover #popover="CcUserPopover" [user]="xxx"></lu-popover>
```

## surcouche formly

rajouter un champ de type address qui utilise ce qu'on a fait sur le select

# resources

- les slides sont [ici](https://docs.google.com/presentation/d/1HT1uh4trkkjgoT-IagpyhO-0yy57h1YqLKUTC7p5FiM/edit?usp=sharing)
- la demo est [ici](https://latest-lucca-front-luccasa.surge.sh/)
- la maquette est [ici](https://github.com/lucienbertin/formation-lucca-front/blob/td.6/moqup.png)
- [formly](https://github.com/formly-js/ngx-formly)
- [ng-material](https://material.angular.io/)
- la version de [tproj](https://github.com/LuccaSA/ilucca/tree/rc/static/timmi/packages/project/libraries/common/src/lib/project/draft/components/select) d'un select feeder custom
- la version de [tproj](https://github.com/LuccaSA/ilucca/tree/rc/static/timmi/packages/project/libraries/common-formly/src/lib) de la surcouche formly
- la version de [tproj](https://github.com/LuccaSA/ilucca/tree/rc/static/timmi/packages/project/apps/tproj/src/app/track/components/status-popover) de l'extension de popover

# marche a suivre

l'idee c'est de creer un select feeder.

un select feeder c;est un composant (ou service) qu'on passe a un `lu-select`