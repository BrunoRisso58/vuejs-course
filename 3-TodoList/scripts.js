const handleTasks = {
    data() {
        return {
            tasks: [],
            newTask: {}
        }
    },
    methods: {
        clearAll: function() {
            this.tasks = [];
        },
        addTask: function() {
            if (this.newTask.name) {
                this.tasks.push({ name: this.newTask.name, done: false });
                this.newTask = {};
                localStorage.setItem('tasks', JSON.stringify(this.tasks)); // transforma o objeto em json, pois o localstorage só guarda strings
            } else {
                alert('Preencha o nome da tarefa');
            }
        }
    },
    created() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')); // transforma o json em objeto
    },
    updated() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks)); // atualiza o item tasks no localStorage
    }
}

Vue.createApp(handleTasks).mount('#app');

// Lifecycle hooks
// beforeCreate: chamado quando a instância é inicializada mas antes de processar data()
// created: chamado quando data() etc é processada (ainda não gerou o html)
// beforeUpdate: imediatamente antes de alguma alteração ser feita
// updated: quando uma alteração é feita
// cada componente tem o seu ciclo de vida individualmente