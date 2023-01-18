  - Descarga reverseWords.ts
  - Colocalo en el folder del repositorio que hemos estado utilizando (debugging-typescript)
  - Buscar problemas en el código siguiendo las recomendaciones discutidas en clase
  - Corrige los problemas


Nota: Para poder ejecutar un programa escrito en TS debemos 'transpilar' (transpile) a JS y luego ejecutar. Podemos hacer esto utilizando el directorio donde clonamos el repositorio (debugging-typescript), si colocamos el archivo en ese directorio podremos hacerlo en VS Code siguiendo estos pasos:
  - Presiona Ctrl+Shitf+B, o haz click en el menú Terminal -> Run Build Task 
  - Luego de que el build termine en el terminal (tsc: build - tsconfig.json), veremos un nuevo directorio llamado 'dir' y dentro de este estarán todos nuestros archivos de JavaScript transpilados.
 - Podemos correr nuestro código ejecutando este comando desde el directorio principal: node.exe .\dir\reverseWords.js