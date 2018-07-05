# Exercice

la va falloir utiliser la lib comme une lib tierce standard

## afficher les utilisateurs convenablement

tous les utilisateurs sont centralises dans ce bout de [code](https://github.com/lucienbertin/formation-lucca-front/blob/td.4/projects/cc/src/app/user/user.bogus.ts)

ensuite ils sont affiches sous la forme de json dans

 - la section contact (/app/detail)
 - la section "environnement bloque" (/app/lock)
 - l'historique (/app/history)

l'idee c'est d'utiliser ce qui est dipo dan `@lucca-front/ng` pour afficher les utilisateurs, a savoir le `luUserDisplay` pipe et le composant `lu-user-tile`

cf la [maquette](https://github.com/lucienbertin/formation-lucca-front/blob/td.4/moqup.png)

## utiliser le popover

pour l'historique, afficher un popover au hover sur les noms d'utilisateurs une `lu-user-tile` avec le mec dedans

cf la [maquette](https://github.com/lucienbertin/formation-lucca-front/blob/td.4/moqup-hover.png)

# resources

les slides sont [ici](https://docs.google.com/presentation/d/1HT1uh4trkkjgoT-IagpyhO-0yy57h1YqLKUTC7p5FiM/edit?usp=sharing)
la demo est [ici](https://latest-lucca-front-luccasa.surge.sh/)
la maquette est [ici](https://github.com/lucienbertin/formation-lucca-front/blob/td.3/moqup.png)

# marche a suivre

## importer la lib

commencer par remplir les prerequis de lucca-front/ng

- import de la feuille de style
- includePaths

## utiliser le luUserUserDisplay

dans le module du composant dans lequel vous voulez utiliser le user-display, ajouter un import vers `LuUserDisplayModule` ou `LuUserModule` et ensuite y'a plus qu'a l'utiliser dans le html
y'a pas de format par defaut (pr en cours) donc faut preciser un format

## utiliser d'autres composants de la lib

refaire la meme chose, c'est du angular basique ca normalement, [le monde est votre huitre](https://www.collinsdictionary.com/dictionary/english/the-world-is-your-oyster)