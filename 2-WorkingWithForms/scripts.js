members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {} // o v-model já cria as propriedades, não preciso definir elas necessariamente
        }
    },
    methods: {
        addMember: function() {
            if (this.newMember.fname && this.newMember.lname && this.newMember.instrument) {
                this.members.push(this.newMember);
                this.newMember = {};
            } else {
                alert('All fields must be filled');
            }
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
