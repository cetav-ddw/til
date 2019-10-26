## Para crear un post
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

- Cloná el repositorio ```git clone https://github.com/cetav-ddw/til```
- Recordá entrar al directorio del proyecto
  ```cd til```
- En el ambiente local cambiá a un branch basado en `master`.
  ```git checkout -b elNombreDeMiBrach master```
- Si querés correr el proyecto para ver tu post solo tenés que escribir en la consola ```npm run  develop```. Luego, la consola te guiará sobre qué puerto local que tenés que usar, lo normal es que se abra en el ```http://localhost:8000```.
- El blog usa archivos Markdown como fuente de datos, aquí una guía: https://www.markdownguide.org

- Andá al directorio `/src/posts` y añadí un archivo de `.md` nuevo.
- El nombre del archivo debe tener este formato: ```nombreDeUsuarioEnGithub-fecha.md``` **(formato de la fecha: yyyy-mm-dd)**
- Los siguientes datos son requeridos, y deben estar al inicio del archivo:

```---```

```path: "/path-unico-en-minuscula-sin-caracteres-especiales"```

```date: "2019-10-02"```

```title: "Cualquier título"```

```author: "nombreExactoDeUsuarioDeGithub"```

```---```

6. Una vez tengás todo listo, debes hacer un pull request a ```master``` y esperá a que el administrador del repositorio te de feedback o haga un mergee de los cambios a master.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://codepen.io/LuisArmando-TC"><img src="https://avatars3.githubusercontent.com/u/37167842?v=4" width="100px;" alt="LuisArmando-TestCoder"/><br /><sub><b>LuisArmando-TestCoder</b></sub></a><br /><a href="https://github.com/cetav-ddw/til/commits?author=LuisArmando-TestCoder" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/hillaryCF"><img src="https://avatars2.githubusercontent.com/u/39503176?v=4" width="100px;" alt="hillaryCF"/><br /><sub><b>hillaryCF</b></sub></a><br /><a href="https://github.com/cetav-ddw/til/commits?author=hillaryCF" title="Code">💻</a> <a href="#design-hillaryCF" title="Design">🎨</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!