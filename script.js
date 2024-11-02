const inst={
    data(){
        return{
            tareas : ['Estudiar', 'Barrer', 'Salir a correr','Jugar videojuegos'],
            newTareas: "",
            sIndex:null,
            cantidad:0,
            aumento:0,
            decrecer:0,
            selectedIndices:[],
        }
    },
    methods:{
        add(){
            this.tareas.push(this.newTareas);
            this.newTareas = "";
        },

        eliminar(i){
            this.tareas.splice(i,1);
        },
        addLineas(i){
          
                const idx = this.selectedIndices.indexOf(i);
                if (idx === -1) {
                    this.selectedIndices.push(i);
                } else {
                    this.selectedIndices.splice(idx, 1);
                }
            
            },
            incrementar() {
                if (this.cantidad < 100) {
                    this.cantidad += 10;
                }
            },
            decrementar() {
                if (this.cantidad > 0) {
                    this.cantidad -= 10;
                }
            }   
        },
    computed:{
          progressColor() {
                    if (this.cantidad < 50) return 'bg-success'; // Verde
                    else if (this.cantidad < 80) return 'bg-warning'; // Amarillo
                    else return 'bg-danger'; // Rojo
                },
            
            devolverCant(){
                return this.selectedIndices.length;
            }
    }
    }
const app = Vue.createApp(inst).mount('#seccion')