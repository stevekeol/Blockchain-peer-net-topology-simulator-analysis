# Bugs

+ container里面渲染了两个canvas
+ 源代码每复制一次，就多渲染出两个canvas
+ 在A组件内部需要获取某个HTML Element的id，但这个元素在这之前不存在。

> 以上三个问题，均在CanvasTest/index.tsx中解决;