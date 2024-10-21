var a;
a = 1;

var b = 2;
var c = a + b;

b = true;
c = a + b;
b = false;
c = a + b;
a = true;
c = a + b;
b = true;
c = a + b;
a = "hola";
c = a + b;
b = 10;
c = a + b;
c = b + a;

//console.log(d)
var d = function () {
    return "hola mundo";
};
//function d() { return 'hola mundo'}

//fullname es un propiedad, un String.//

//console.log(d.fullname)
d.fullname = "Peter Pan";
//console.log(d.fullname)
//console.dir(d)

// console.dir es para ver la función por dentro.//

b.fullname = "Wendy Darling";
//console.dir(b)

var e = d;
//console.dir(e)

//e.fullname = 'James Hook'
e["fullname"] = "Pepito Grillo";
e.name = "e";
//console.dir(d)
//console.log(d())
//console.log(e())

d = function (name) {
    return "Hello, " + name + "!";
};
//console.dir(d)

//console.log(d('Peter'))
//console.log(d('Wendy'))
//console.log(d())

var a = []; // new Array
a["0"] = 100;
a[1] = 200;
a[5] = 600;
//console.dir(a)

/* NEW es un operador que te permite contruir un objeto
y aplicar una contructora que es un funcion, que permite aplicar propiedades.*/

var b = { length: 0 }; // new Object
b[0] = 100;
b[1] = 200;
b[5] = 600;
b["length"] = 6;
//console.dir(b)

/*
for (var i = 0; i < b.length; i++) {
    var elem = b[i]
    console.log(elem)
}
*/

/* For tiene 3 partes:
1. Para inicializar la variable "var i = 0"
2. Se evalua la condición de continuidad. Se comparara el valor de i con la longitud de a " i < a.length "
3. Hasta qur no termine cada cuerpo de ejecución, no se ejecuta.
*/

window.name = "Window";
window.image = "🪟";

var peter = { name: "Peter", image: "🥶" };
var wendy = { name: "Wendy", image: "🥵" };

function hello() {
    return this.image + " " + this.name + ": Hello!";
}

/*
console.log(window.hello())
console.log(hello())
console.log(hello.call(peter))
console.log(hello.call(wendy))
*/

wendy.hi = hello;
//console.log(wendy.hi === hello)
console.log(wendy.hi());

peter.yo = hello;
console.log(peter.yo());

a.hello = hello;
a.name = "Array";
a.image = "📦";
console.log(a.hello());

a[10] = peter;
console.log(a.length);

b[10] = wendy;
console.log(b.length);
b.length = 11;

peter.partner = wendy;
wendy.partner = peter;

console.log(peter.yo());
console.log(a[10].yo());
console.log(b[10].partner.yo());
console.log(b[10].partner.partner.partner.yo());

var oswald = {
    name: "Oswald",
    getPeter: function () {
        return peter;
    },
};

b[11] = oswald;
b.length = 12;

a[3] = b;

console.log(a[3][10].partner.yo());
console.log(a[3][11].getPeter().yo());

var f = function a() {
    return function b() {
        return [, , function c() {
            return {
                o: {
                    hi: function () { return 'hi!' }
                }
            }
        }]
    }
}

console.log(f()()[2]().o.hi())


var g = ['hola', 1, true, {

},
    {
        0: [, , , , {
            b: function () {
                return {
                    c: function () {
                        return [function () { return 'yo' }]

                    }
                }

            }

        }],

    }]

console.log(g[4][0][4].b().c()[0]())

var x = ["patata", "calabaza", [1, 2, 3], {
    cd: [4, 5, 6], j: {
        p: function () {
            return {
                h: {
                    hi: function () { return "jaja no, que ha pasao" }

                }
            }

        }

    }
}

]
console.log(x[3].j.p().h.hi())

//prueba de modificación//