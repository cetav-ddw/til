*Digamos que se tiene esta variable*

```
let poema = `
    Un par de años
    de madrugar intentos,
    crear proyectos,
    un editor de texto,
    navegador y terminal
    verde con negro
    o negro con temas,
    como el monokai.
`;
```

*Y queremos cambiar todas las palabras que digan `negro` por `azul marino`, entonces solo hay que hacer esto:*

```
let nuevoPoema = poema.replace(/negro/gm, 'azul marino');
```

### Y eso es todo

![código de ejemplo de string replace con referencias a Doctor Strange](https://appdividend.com/wp-content/uploads/2018/09/String-Replace-method-in-Javascript.png)