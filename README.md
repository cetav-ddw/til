## Para crear un post

1. Cloná el repositorio.
2. En tu ambiente local cambiá el branch a `master` y crea un branch nuevo basado en `master`.
3. El blog usa archivos Markdown como fuente de datos, aquí una guía: https://www.markdownguide.org. Andá al directorio `/src/posts` y añadí un archivo de extensi&oacute;n `.md` nuevo.
4. El nombre del archivo debe tener este formato: nombreUsuario-fecha.md **(formato de la fecha: yyyy-mm-dd)**
5. Los siguientes datos son requeridos, y deben estar al inicio del archivo:

```
---
path: "/path-unico-en-minuscula-sin-caracteres-especiales"
date: "2019-10-02"
title: "Cualquier título, donde el path idealmente esté relacionado"
author: "usuarioGithub"
---
```

6. Una vez tengás todo listo, debes hacer un pull request; esperá a que el administrador del repositorio te de feedback o mergee los cambios en master.
