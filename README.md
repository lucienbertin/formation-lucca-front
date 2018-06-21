# Exercice

le but est de bidouiller avec les mixins for the lulz

## rajouter un laoder

j'ai rajoute dans app-component `ready$` qui est un Observable<boolean> qui emet `true` au bout de 2 secondes. fare en sorte que tant que c'est pas le cas, ca affiche un loader

cf. la mixin loading

cf la [maquette](https://github.com/lucienbertin/formation-lucca-front/blob/td.3/moqup.png)


## ne pas etre responsive

pour pas avoir a gerer le responsive, juste afficher un callout quand l'ecran est trop petit

cf. les mixins `media_lager/smaller_than`

# note

c'est un peu bidon et pas specialement utiules poru vos dans la vie de tous les hjours en tant que dev lucca, mais maintenant vous savez que ca existe au cas ou

# resources

les slides sont [ici](https://docs.google.com/presentation/d/1HT1uh4trkkjgoT-IagpyhO-0yy57h1YqLKUTC7p5FiM/edit?usp=sharing)
la demo est [ici](https://latest-lucca-front-luccasa.surge.sh/)
le code source des mixins est [ici](https://github.com/LuccaSA/lucca-front/tree/master/packages/scss/src/mixins)
la maquette est [ici](https://github.com/lucienbertin/formation-lucca-front/blob/td.3/moqup.png)
