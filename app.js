let app = new Vue({
    el: '#app',

    data:{
        message: '',
        carName: '',
        cars: [
            {name: 'ford', count: 1, active: 0},
            {name: 'tesla', count: 1, active: 0},
            {name: 'toyota', count: 1, active: 0},
            {name: 'bmw', count: 1, active: 0},
        ],
    },
    methods:{
        add()
        {
            if (this.carName.length !== 0)
            {
                this.cars.unshift({
                    name: this.carName,
                    count: 1,
                    active: 0,
                });
            }
            this.carName = '';
        },
        remove(index)
        {
                this.cars.splice(index, 1);
        },
        active(index)
        {
            let el = this.cars[index];
            if (el.active == 0 ) {
                el.active = 1;
            }else{
                el.active = 0;
            }
        }
    },
})
