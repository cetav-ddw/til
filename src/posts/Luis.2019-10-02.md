---
path: "/hacer-deploy-de-un-app-de-node-con-netlify"
date: "2019-10-02"
title: "Hacer deploy de un app de Node con Netlify"
author: "LuisArmando-TestCoder"
tags: ["node", "netlify"]
---

![Construí y desplegá tu primera función lambda, por Netlify](https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/v1540855168/ermj3lsrmxi2ryd0vp28.png)

Debido a que Heroku tiene este problema
de quedarse dormido en el trabajo
después de un tiempo de inactividad
resulta mejor hacer un deploy de una app
en una plataforma como Netlify.

[Así que aquí va un video que dice cómo hacerlo](https://www.youtube.com/watch?v=hQAu0YEIF0g)

*El siguiente código es parte de lo que se escribió en el video*
```javascript
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        success: true,
        error: null,
        data: 'BUMP OF CHICKEN「Hello,world!」'
    });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
```