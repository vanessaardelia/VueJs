new Vue({
    el: '#app',
    data: {
        gradientStops: ['#e1eec3', '#f05053']
    },
    methods: {
        AddNewGradient(){
            this.gradientStops.push('');
        },
        removeGradient(index){
            this.gradientStops.splice(index, 1);
        }
    },
    computed: {
        gradient(){
            return `linear-gradient(${this.gradientStops.join(', ')})`;
        }
    }
});