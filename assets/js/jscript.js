const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailRegex.test(email)) {
        return true;
    }  else {
        return false;
    }
};
const validarTexto = (username) => {
    //Alphanumeric string that may include _ and – having a length of 3 to 16 characters –
    const usernameRegex = /^[a-z0-9 _-]{3,}$/;
    if(usernameRegex.test(username)) {
        return true;
    }  else {
        return false;
    }
};

const conocenos = new Vue({
    el: '#conocenos',
    data: {
        skillsYener: ['Diseñador','Front-end','Creativo','Gamer'],
        skillsYela: ['Diseñador','Back-end','UI UX','Gamer'],
    }
})

const dominamos = new Vue({
    el: '#dominamos',
    data: {
        punta: false,
        yenrskills: [
            {
                tema: 'nivel-verde',
                icon: 'devicon-nodejs-plain',
                titulo: 'Node js',
                texto: 'Manejo de modulos',
                porcentaje: 45
            },
            {
                tema: 'nivel-naranja',
                icon: 'devicon-html5-plain',
                titulo: 'HTM5',
                texto: 'Conocimeinto del 90% de las etiquetas HTML y SEO',
                porcentaje: 90
            },
            {
                tema: 'nivel-cielo',
                icon: 'devicon-css3-plain',
                titulo: 'CSS3',
                texto: 'Conocimiento en flexbox, grid, animations, transitions, efectos visuales, esta pagina esta hecha con mi conocimiento XD en CSS',
                porcentaje: 90
            },
            {
                tema: 'nivel-violeta',
                icon: 'devicon-sass-original',
                titulo: 'SASS',
                texto: 'Facilito el diseño css con el preprocesador-sass',
                porcentaje: 65
            },
            {
                tema: 'nivel-amarillo',
                icon: 'devicon-javascript-plain',
                titulo: 'Javascript',
                texto: 'Conocimiento de ES5 y sus versiones actuales, creador de pluggins, conocimiento en API, drag and drop, formData, LocalStorage, session, eventos en el DOMString',
                porcentaje: 85
            },
            {
                tema: 'nivel-cielo',
                icon: 'devicon-typescript-plain',
                titulo: 'typescript',
                texto: 'Manejo typescript para aplicaciones a gran escala orientada a objetos',
                porcentaje: 80
            },
            {
                tema: 'nivel-cia',
                icon: 'devicon-vuejs-plain',
                titulo: 'VUE JS',
                texto: 'Mi framework favorito a nivel personal <3. creo aplicaciones pequeñas o a gran escala, Como muestra esta pagina hecha en Vue-3',
                porcentaje: 70
            },
            {
                tema: 'nivel-rojo',
                icon: 'devicon-angularjs-plain',
                titulo: 'Angular',
                texto: 'Mi segunda libreria favorita ya que usa typescript <3. gran conocimiento de sus librerias como NgRx, Material, ',
                porcentaje: 72
            },
        ],
        yelaskills: [
            {
                tema: 'nivel-rojo',
                icon: 'devicon-java-plain',
                titulo: 'Java',
                texto: 'Creo aplicaciones escalables, multiplataforma',
                porcentaje: 70
            },
            {
                tema: 'nivel-cielo',
                icon: 'devicon-mysql-plain',
                titulo: 'Mysql',
                texto: 'Manejo base de datos relacionales escalables para cualquier entorno de desarrollo',
                porcentaje: 80
            },
            {
                tema: 'nivel-morado',
                icon: 'devicon-csharp-plain',
                titulo: 'C#',
                texto: 'Arquitectura MVC y desarrollo de aplicaciones windows',
                porcentaje: 65
            },
            {
                tema: 'nivel-verde',
                icon: 'devicon-spring-plain',
                titulo: 'Sprin boot',
                texto: 'Desarrollo aplicaciones web con arquitectura MVC, generalmente para backend.',
                porcentaje: 70
            },
            {
                tema: 'nivel-cielo',
                icon: 'devicon-ionic-original',
                titulo: 'ionic',
                texto: 'Creo aplicaciones hibridas ionic con el framework angular.',
                porcentaje: 75
            },
            {
                tema: 'nivel-violeta',
                icon: 'devicon-xd-plain',
                titulo: 'UX UI',
                texto: 'Diseñador enfocado a la experiencia de usuario, enfocado mas que todo en aplicaciones web, móviles y de escritorio',
                porcentaje: 95
            },
            {
                tema: 'nivel-naranja',
                icon: 'devicon-illustrator-plain',
                titulo: 'Ilustrador gráfico',
                texto: 'Me encargo de elaborar ideas, conceptos y situaciones que serán parte central gráfica, una ventaja es que dibujo desde que tengo memoria y soy creativo en cada ilustración que hago',
                porcentaje: 90
            },
        ],
        perfiles: [
            {
                id: 0,
                name: 'yener',
                img: 'assets/img/yenerson-avatar.png'
            },
            {
                id: 1,
                name: 'yela',
                img: 'assets/img/yelainer-avatar.png'
            }
        ]
    },
    methods: {
        perfilskills(id){
            if(id === 'yela') {
                this.punta = true;
                this.skills = this.yelaskills
            } else {
                this.punta = false;
                this.skills = this.yenrskills
            }
        }
    },
    created(){
        this.skills = this.yenrskills
    }
})

const seleccion = new Vue({
    el: '#seleccion',
    data: {
        colorTexto: 'tema-acierto',
        activo: false,
        formDato: {
            nombre: '',
            correo: '',
            asunto: '',
            descripcion: '',
        },
        seleccion: [
            {
                icon: 'icon-paint-format',
                titulo: 'Diseño de App'
            },
            {
                icon: 'icon-files-empty',
                titulo: 'app web'
            },
            {
                icon: 'icon-file-play',
                titulo: 'Animacion grafica'
            },
            {
                icon: 'icon-drive',
                titulo: 'Back-end'
            },
            {
                icon: 'icon-loop2',
                titulo: 'UX UI'
            },
            {
                icon: 'icon-display',
                titulo: 'App desktop'
            },
            {
                icon: 'icon-mobile',
                titulo: 'App movil'
            },
            {
                icon: 'icon-pencil2',
                titulo: 'Ilustraciones'
            },
            {
                icon: 'icon-film',
                titulo: 'Video edicion'
            },
        ]
    },
    computed: {
        contCaractNombre(){
            return this.formDato.nombre.length;
        },
        contCaractAsunto(){
            return this.formDato.asunto.length;
        },
        contCaractDesc(){
            let texto = this.formDato.descripcion.length;
            let res = 250 - texto;

            if (res <= 25) {
                this.colorTexto = 'tema-peligro';
            }
            else if (res <= 125) {
                this.colorTexto = 'tema-alerta';
            }
            else if (res <= 200) {
                this.colorTexto = 'tema-acierto';
            }

            return res;
        },
        canSend(){
            return validateEmail(this.formDato.correo) &&
                    validarTexto(this.formDato.nombre) &&
                    this.formDato.descripcion != ''
        }
    },
    methods: {
        enviarDatos() {
            let carrito = document.querySelector('#listaDos');
            let itens = carrito.querySelectorAll('h6');
            let itensCarrito = '';
            for (var i = itens.length - 1; i >= 0; i--) {
                itensCarrito += itens[i].textContent + ', ';
            }
            if (validateEmail(this.formDato.correo) && validarTexto(this.formDato.nombre)) {
                console.log('hila');
                let numero = '3178388674';
                let urlwhatsapp = 'https://api.whatsapp.com/send?phone=+57'+numero+'text=';
                let msj = urlwhatsapp +
                          '¡Un gusto ponerme en contacto con tigo!. mi nombre es: ' +
                          this.formDato.nombre +
                          ', correo: ' +
                          this.formDato.correo +
                          ', servicios que quiero: ' +
                          itensCarrito +
                          ' mensaje: ' +
                          this.formDato.descripcion;
                window.open(msj, '_blank');
            } else {
                console.log('llenar campos');
            }
            itensCarrito = '';
        }
    }
});


let botonesMovil = document.querySelector('#app-movil');
let arrayIten = botonesMovil.querySelectorAll('.cart');

let listaUno = document.querySelector('#listaUno');
let listaDos = document.querySelector('#listaDos');

let carita = document.getElementById('carita');
/* contenedor fondo animado */
let fondo_anim = document.getElementById('fondo_anim');

arrayIten.forEach(iten => {
    let cortina = botonesMovil.getElementsByClassName(iten.id);
    if (cortina[0] != undefined) {
        iten.addEventListener('mouseenter', ()=>{
            cortina[0].classList.add('abrir-cortina');
        });
        iten.addEventListener('mouseleave', ()=>{
            cortina[0].classList.remove('abrir-cortina');
        });
    }
});

/* cuadrillos de fondo animado */
let span = '';
for (var i = 12 - 1; i >= 0; i--) {
    span += '<span></span>';
}
fondo_anim.innerHTML = span;

/* sortable */
Sortable.create(listaUno, {
    animation: 150,
    group: "lista-uno",
});

Sortable.create(listaDos, {
    animation: 150,
    group: "lista-uno",
    store: {
        set: () => {
            let listaDos = document.querySelector('#listaDos');
            let lista = listaDos.querySelectorAll('.cart-seleccion');
            // caritas
            let neutral = 'icon-neutral';
            let shocked = 'icon-shocked';
            let smile = 'icon-smile';
            let happy = 'icon-happy';
            let grin = 'icon-grin';
            switch (lista.length) {
                case 0:
                    carita.setAttribute('class',neutral);
                    break;
                case 1:
                    carita.setAttribute('class',shocked);
                    break;
                case 3:
                    carita.setAttribute('class',smile);
                    break;
                case 6:
                    carita.setAttribute('class',happy);
                    break;
                case 9:
                    carita.setAttribute('class',grin);
                    break;
            }
        }
    }
});