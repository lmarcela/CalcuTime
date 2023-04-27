# CalcuTime

Aplicacion para sumar, restar, multiplicar y dividir tiempo con el fin de aplicar conocimientos en React Native con Expo y elaboración de pruebas unitarias. 

Tecnologías: React Native, React Testing Library, Expo.


## Uso

```bash
npm install // Solo se debe hacer la primera vez
```

```bash
npm run start // Para correr la aplicacion
```

```bash
npm run test:coverage // Para correr las pruebas
```


## Generar apk
1. En package.json se debe cambiar devDependencies por devDependencies2 (De lo contrario va a generar errores por las versiones de las librerias que se usan para test)

2. eas build -p android --profile preview 

## Enlaces importantes

Instalador (.apk para Android): <a href="https://expo.dev/accounts/marcela9409/projects/CalcuTime/builds/e4ddf11c-5e53-47d6-897f-29596de7b399" title="apk" target="_blank">Descargar</a>

Iconos: <a href="https://www.flaticon.com/free-icons/time-and-date" title="time and date icons" target="_blank">Time and date icons created by Smashicons - Flaticon</a>
