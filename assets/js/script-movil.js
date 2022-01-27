Vue.component('movil-aside', {
    template: `
    <div class="cart-celular med sombra-gra marg-0">
        <div class="bloq-contenido cur-puntero">
            <!--============================================
            =            interfaz de aplicacion            =
            =============================================-->

            <div v-bind:class="['cortina tarj', iten.id]" v-for="iten of cortina" v-bind:key="iten.id">
                <div class="bloq-contenedor alin-centro">
                    <div class="bloq-icono tam-med borde-todo bord-claro">
                        <i v-bind:class="iten.icon"></i>
                    </div>
                    <div class="bloq marg-izq-med">
                        <span class="t-peq">{{ iten.dato }}</span>
                    </div>
                </div>
                <span v-if="iten.subs != null" class="bloq-flo detalles-subs sombra-peq">
                    <i class="icon-user marg-der-peq texto-cielo"></i> {{ iten.subs }}
                </span>
            </div>
            <nav class="nav-contenedor sombra-peq just-entre fondo-claro">
                <ul class="nav-hor">
                    <li>
                        <a class="nav-enlace" href="#">
                            <i class="li-icono icon-mobile"></i>
                            <span>Navegación</span>
                        </a>
                    </li>
                </ul>
                <ul class="nav-hor">
                    <li>
                        <a class="nav-enlace icono" v-on:click="open = !open">
                            <i class="icon-menu"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="flexcol alin-centro just-centro rell-med tex-claro">
                <h3>12:00 <span class="t-med">a.m</span></h3>
                <span  class="t-peq">Colombia</span>
            </div>
            <div class="celda-col-3 sep-med rell-hor-med alin-cen tex-claro botones-menu">

                <a
                    v-bind:target="iten.target ? '_black' : '_self'"
                    v-bind:href="iten.url"
                    v-for="iten of botones"
                    v-bind:id="iten.id"
                    class="cart alin-centro"
                >
                    <div v-bind:class="['bloq-icono redon-med tam-med sombra-gra', iten.tema]">
                        <i v-bind:class="iten.icon"></i>
                    </div>
                    <span class="t-peq marg-arr-min">{{ iten.titulo }}</span>
                </a>

            </div>
            <!--====  End of interfaz de aplicacion  ====-->
            <div v-bind:class="['pos-absoluta nav', { openMenu : open }]">
                <nav class="nav-contenedor">
                    <div class="cart-usuario-sidebar sombra-min">
                        <div class="bloq-cel">
                            <div class="bloq-avatar tam-gra borde-sombra-min">
                                <img src="assets/img/AG-Desing.png" alt="">
                            </div>
                            <div class="blo-auto">
                                <button type="button" class="boton-cir tema-claro efecto-clic efecto-neg"  v-on:click="open = !open">
                                    <i class="icon-arrow-left2"></i>
                                </button>
                            </div>
                        </div>
                        <div class="bloq-contenido">
                            <h4 class="f-titulo">Navegación</h4>
                            <ul class="bloq-ul direccion-fila sep-barr">
                                <li class="bloq-li">Autor</li>
                                <li class="bloq-li">Obras</li>
                            </ul>
                        </div>
                    </div>
                    <ul class="nav-ver nav-dividido">
                        <li><a v-bind:href="iten.id" class="nav-enlace" v-for="iten of navegacion" :key="iten">
                            <i v-bind:class="['li-icono', iten.icon]"></i> {{ iten.ancla }}
                        </a></li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="bloq-flo botones">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    `,
    data(){
        return {
            open: false,
            botones: [
                {
                    id: 'iten-1',
                    target: true,
                    url: 'https://www.facebook.com/ApockGraficos',
                    tema: 'tema-facebook',
                    icon: 'icon-facebook',
                    titulo: 'facebook'
                },
                {
                    id: 'iten-2',
                    target: true,
                    url: 'https://www.instagram.com/apockgraficos',
                    tema: 'tema-instagram',
                    icon: 'icon-instagram',
                    titulo: 'instagram'
                },
                {
                    id: 'iten-3',
                    target: true,
                    url: 'https://www.youtube.com/channel/UC15DkMZQ80aoW_Rqk4n2T_w',
                    tema: 'tema-peligro',
                    icon: 'icon-youtube',
                    titulo: 'youtube'
                },
                {
                    id: 'iten-4',
                    target: false,
                    url: '#',
                    tema: 'tema-info',
                    icon: 'icon-location',
                    titulo: 'Ubicacion'
                },
                {
                    id: 'iten-5',
                    target: true,
                    url: 'https://twitter.com/ApockGraficos',
                    tema: 'tema-twitter',
                    icon: 'icon-twitter',
                    titulo: 'twitter'
                },
                {
                    id: 'iten-6',
                    target: false,
                    url: '#seleccion',
                    tema: 'tema-acierto',
                    icon: 'icon-whatsapp',
                    titulo: 'whatsapp'
                }
            ],
            cortina: [
                {
                    id: 'iten-3',
                    titulo: 'youtube',
                    icon: 'icon-youtube',
                    dato: 'Visita nuestro canal con gran contenido!',
                    subs: 'mas de 100 subs'
                },
                {
                    id: 'iten-6',
                    titulo: 'whatsapp',
                    icon: 'icon-whatsapp',
                    dato: 'Contactanos para tener el gusto de atenderte',
                    subs: null
                },
                {
                    id: 'iten-2',
                    titulo: 'instagram',
                    icon: 'icon-instagram',
                    dato: 'Sigueme en isntagra! diseño, demos, recursos',
                    subs: '31 seguidores'
                },
                {
                    id: 'iten-1',
                    titulo: 'facebook',
                    icon: 'icon-facebook',
                    dato: 'Sumate a nuestra pagina de facebook',
                    subs: '24 seguidores'
                },
            ],
            navegacion: [
                {
                    id: '#conocenos',
                    icon: 'icon-music',
                    ancla: 'Conocenos'
                },
                {
                    id: '#Dominamos',
                    icon: 'icon-stats-bars',
                    ancla: 'Dominamos'
                },
                {
                    id: '#galeria',
                    icon: 'icon-image',
                    ancla: 'Galería'
                },
            ]
        };
    }
});

const cel = new Vue({
    el: '#app-movil'
});