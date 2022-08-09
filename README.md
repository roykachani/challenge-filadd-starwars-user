# Challenge Filadd - Star wars user

<p>Challenge Front-end realizado en React Js con Typscript, Next Js, React-Query y Material UI</p>

[Demo on Vercel server](http://challenge-filadd-starwars-user.vercel.app/)

Esta WebApp consume datos de [SWAPI The star wars API](https://swapi.dev)

## Funcionabilides

1. Home: "/"

   - Permite seleccionar película y muestra pequña sinopsis con imagen
   - Permite ordenar alfabeticamente y por fecha de creada, ambos casos incluyendo la forma inversa

    </br>

2. Película individual: "movie/[id]"
   - Busqueda de personajes con autocomplete que participan en la película.

## Comenzando

```bash
git clone https://github.com/roykachani/challenge-filadd-starwars-user
cd [proyecto]
```

Crear un archivo `.env.local` la carperta `./src/env.local`

```
NEXT_PUBLIC_API_URL="https://swapi.dev/api/films/"
```

<br>
Una vez en la terminal, corre el comando para instalar las dependencias:

```bash
npm i
```

Luego hacer un build del proyecto para modo producion:

```bash
npm run build
```

Inicia el servidor:

```bash
npm start
# ||
yarn start
```

o inicia el servidor en modo desarrollo:

```bash
npm run dev
# ||
yarn run dev
```

Abrí [http://localhost:3000](http://localhost:3000) con tu navegador y listo🧘‍♂️.

## Agradecimientos

<p>Gracias Filadd por la oportunidad</p>
