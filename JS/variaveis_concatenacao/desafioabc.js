1 <script>
2
3 var a = 10
4 var b = 20
5 var c = null //variável auxiliar utilizada na lógica
6
7 document.write('A: ' + a + '<br />')
8 document.write('B: ' + b + '<br />')
9 document.write('C: ' + c + '<br />')
10
11 document.write('<hr />')
12
13 //lógica de inversão dos valores das variáveis A e B
14
15 c = a //utilizada a variável C para armazenar temporariamente o valor da
variável A
16 a = b //sobrepõe o valor da variável A com o valor da variável B
17 b = c //sobrepóe o valor da variável B com o valor da variável C (C nesse
momento contém o valor da variável A)
18 c = null //opcional: remove o valor contido na variável C
19
20
21 //
22 document.write('A: ' + a + '<br />')
23 document.write('B: ' + b + '<br />')
24 document.write('C: ' + c + '<br />')
25
26
27 </script>