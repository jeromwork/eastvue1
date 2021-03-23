<template>
    <div class="panel panel-default">
        <div class="panel-collapse" >
            <div class="panel-body">
                <fieldset>
                    <legend>Размеры стен {{size1}}</legend>
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="wall1"></label>
                        <div class="col-md-4">
                            <div class="input-group">
                                <span class="input-group-addon">стена 1 (метров)</span>
                                <input id="wall11" name="wall1" class="form-control" placeholder="в метрах. от 0.5 до 15" v-model="size1">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="wall2"></label>
                        <div class="col-md-4">
                            <div class="input-group">
                                <span class="input-group-addon">стена 2 (метров)</span>
                                <input id="wall21" name="wall2" class="form-control" placeholder="в метрах. от 0.5 до 15"  v-model="size2">
                            </div>
                        </div>
                    </div>

                </fieldset>

                <select v-model="selected">
                    <option disabled value="">Выберите доктора</option>
                    <option v-for="doctor in listDoctors" :key="doctor.id" :value="doctor.id">{{doctor.name}}</option>
                </select>
                <span>Выбрано: {{ currentDoctorId }}</span>

                <p>{{ currentDoctorId }}</p>


            </div>
        </div>
    </div>
</template>

<script>

    import { mapGetters , mapMutations } from "vuex";
    export default {
        name: 'doctorSettings',

        props: {
            idDoctor:{
                type: Number,
                default: 2,
            }
        },
        components: {

            //accordion: () => import('./accordion.vue')
        },
        data(){return{
            name: 'doctorSettings',
            selected:'',
        }
        },
        created(){
            console.log('created');
            this.$store.dispatch('doctorSettings/GET_DOCTORS_AJAX', {limit:10});
            // this.$store.commit('doctorSettings/CREATE_ROOM',
            //     {id:this.idDoctor,
            //         size1: 2000,
            //         size2: 3000,
            //         height: 2500
            //     });
            //console.log(this.idDoctor);
        },
        methods: {

        },
        computed:{
            //====================================================================
            ...mapGetters({getDoctors:'doctorSettings/getDoctors'
            ,currentDoctorId:'doctorSettings/currentDoctorId'
                ,size1:'doctorSettings/size1'
            }),
            //====================================================================
            ...mapMutations({SET_CURRENT_DOCTOR_ID:'doctorSettings/SET_CURRENT_DOCTOR_ID'
                //,currentDoctorId:'doctorSettings/getDoctors'
            }),
            //====================================================================
            size1:{
                // get(){ console.log(this.$store);
                //                 return this.size1(this.idDoctor)/1000;
                //                 },
                set(val){        this.$store.commit('doctorSettings/SET_PARAMETERS', {id:this.idDoctor,  size1: Number(val)*1000})    }//this.SET_PARAMETERS({            size1: Number(val)        })
            },
            // size2:{
            //     get(){        return this.$store.getters["doctorSettings/size2"](this.idDoctor)/1000;    },
            //     set(val){   this.$store.commit('doctorSettings/SET_PARAMETERS', {id:this.idDoctor,   size2: Number(val)*1000})},
            // },
            currentDoctorId:{
                get(){        return this.currentDoctorId();    },
                set(val){
                    this.SET_CURRENT_DOCTOR_ID(val);
                    //this.$store.commit('doctorSettings/SET_PARAMETERS', {id:this.idDoctor,   size2: Number(val)*1000})
                },
            },
            // height:{
            //     get(){        return this.$store.getters["doctorSettings/height"](this.idDoctor)/1000;    },
            //     set(val){   this.$store.commit('doctorSettings/SET_PARAMETERS', {id:this.idDoctor,   height: Number(val)*1000})},
            // },
            listDoctors(){                return this.getDoctors;                }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
