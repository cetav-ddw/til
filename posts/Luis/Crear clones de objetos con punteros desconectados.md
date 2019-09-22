*Digamos que se tiene este objeto*

```
const a = {
    x: 0,
    y: 1,
    z: 3
};
```

*Así se clona*

```
const b = JSON.parse(JSON.stringify(a));
```

**Explicación**

1. Se convierte el objeto en un string
2. Se [parsea](https://www.google.com/search?sxsrf=ACYBGNQk9mDT4nF8xFm36AsONVyLTCmcug%3A1569186670735&ei=buOHXd-9LIuWsgWA2Y6wCw&q=parse+meaning&oq=+parse&gs_l=psy-ab.3.1.35i39j0i67l3j0l4j0i203j0i10.2889.7711..9433...3.2..0.305.1261.0j7j0j1......0....1..gws-wiz.....10..0i71j35i362i39j0i131j35i39i19.uQ5myZpOtng) el string en un dato
3. Y ahora el origen del objeto se pierde, teniendo que crear un puntero nuevo en memoria

Y eso es todo amigos

![Ilustración de clones de star wars vestidos de ovejas](https://miro.medium.com/max/1200/1*8cT7mUmJbG7aoYlMSyJjrg.jpeg)