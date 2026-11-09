Title:
    Differences between type aliases and interface in TypeScript

Introduction:
    both type alises and interfacc used to define object type and a appropiate 
    data stracture. but there are some different use case for different object.
    it depend what is the archtecture of code. the core different of interface and type need to know the developer to write the code.

Core difference
    Marging:
        Interface:  it is good for marging . when we need marging same interface it marging atomaticaly all property togather.
        type aliases:  it doesnot allow redeclaration of any object.if we go to combine two object it through an error.
    Keyword:
        Interface: it use extent keyword . to marge two variable.
        type : it use & oprator.
interface User {
  id: number;
}
interface User { 
  name: string; -> Interface Declaration Merging (Valid)
}
const user: User = { id: 1, name: "Rakib" }
type Product = { id: number };
type Product = { name: string } -> Error: Duplicate identifier 'Product'.