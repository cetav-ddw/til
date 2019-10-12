## To post something

**These steps are a must**

1. Cloná el repositorio
2. En el ambiente local cambiá el branch a develop
3. Andá al directorio /src/posts y añadí un archivo de markdown
4. Que el archivo tenga este formato: tu-nombre.fecha.md **(formato de la fecha: yyyy-mm-dd)**
5. Dentro del archivo escribí los datos que tengan un cuerpo como el que aparece a continuación
```
---
path: "/path-unico-en-minuscula-sin-caracteres-especiales"
date: "2019-10-02"
title: "Cualquier título, donde el path idealmente esté relacionado"
author: "Tu usuario de Github justo como se escribe"
---
```
6. Lo siguiente es añadir datos con el formato de markdown, aquí una guía: https://www.markdownguide.org
7. Una vez tengás todo listo, git add, commit, push a origin develop
8. En Github, hacé un pull request y esperá a que el administrador del repositorio te de feedback o mergee los cambios en master

Nota: Te podés servir de ejemplo con el primer post de todos -> /src/posts/Luis.2019-10-02.md