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