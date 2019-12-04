---
title: Proyecto Informático I
---

# Programa

[html](programa.html) - [pdf](pdf/programa.pdf)

# TP Vacaciones de invierno

[html](tp-vacaciones.html) - [pdf](pdf/tp-vacaciones.pdf)

# Apuntes

## Unidad 1 - Dirección de proyectos

[html](unidad-1.html) - [pdf](pdf/unidad-1.pdf)

## Unidad 2 - Bash y Git

[html](unidad-2.html) - [pdf](pdf/unidad-2.pdf)

## Unidad 3 - HTML y CSS

[html](unidad-3.html) - [pdf](pdf/unidad-3.pdf)

## Unidad 4 - JavaScript

[html](unidad-4.html) - [pdf](pdf/unidad-4.pdf)

### Evaluacion Unidad 4 (Resuelta)

Implementar las siguientes funciones en JavaScript.

1. Una función que devuelve un _array_ con los primeros _n_ números de Fibonacci. Sea _F_ la sucesión de Fibonacci, _F_<sub>0</sub> = 0 y _F_<sub>1</sub> = 1 se define _F_<sub>n</sub> = _F_<sub>n-1</sub> + _F_<sub>n-2</sub>. Es decir, a partir del tercer número, cada número es la suma de los dos anteriores. La cantidad de números _n_ es el único argumento de la función.

```js
function fibonacci(n) {
  if (n == 0) return null;
  let result = [0];
  if (n == 1) return result;
  result.push(1);
  if (n == 2) return result;
  for (let i = 2; i < n; i++)
    result.push(result[i - 1] + result[i - 2]);
  return result;
}
```

2. Una función que recibe tres argumentos de tipo _string_ que son nombres de colores de una resistencia de cuatro bandas. Los argumentos son los dos primeros dígitos y el multiplicador. La función tiene que devolver el valor numérico en Ohms de la resistencia. Los colores en orden del 0 al 9 son: negro, marrón, rojo, naranja, amarillo, verde, azul, violeta, gris y blanco. No se puede usar `if ... else`.

```js
function parseResistanceValue(first, second, multiplier) {
  const COLORS = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  };
  let value = COLORS[second];
  value += COLORS[first] * 10;
  value *= Math.pow(10, COLORS[multiplier]);
  return value;
}
```

3. Una función que reciba como argumento un año y devuelva verdadero si el año es bisiesto o falso en lo contrario. Un año es bisiesto si es divisible por 4 pero no por 100, al menos que sea divisible por 400.

```js
function isLeap(year) {
  if(year % 4 === 0) {
    if(year % 100 === 0) {
      if(year % 400 === 0) {
        return true
      }
      return false
    }
    return true
  }
  return false
}
```

4. Una función que use internamente el método `setInterval(callback, delay)` para mostrar por consola un reloj digital con horas, minutos y segundos.

```js
function clock(h, m, s) {
  setInterval(() =>{
    s++;
    if (s == 60) {
      s = 0;
      m++;
    }
    if (m == 60) {
      m = 0;
      h++;
    }
    if (h == 24) h = 0;
    console.log(`${h}:${m}:${s}`);
  }, 1000);
}
```

### Actividad 1

[html](javascript.html) - [pdf](pdf/javascript.pdf)

#### Solución

[js](solucion-js-1.js)

### Actividad 2

[html](javascript-2.html) - [pdf](pdf/javascript-2.pdf)

## Unidad 5 - Backend

[html](unidad-5.html) - [pdf](pdf/unidad-5.pdf)

## Unidad 6 - Frontend

[html](unidad-6.html) - [pdf](pdf/unidad-6.pdf)

# Materiales de otros años

## Informe técnico de MERVA (FNIE 2018)

[pdf](old/2018/informe_merva.pdf)
