var tasks = [
    {
        name: "Aprender a cozinhar",
        done: false
    },
]

const handleTasks = {
    data() {
        return {
            tasks: window.tasks,
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
            } else {
                alert('Preencha o nome da tarefa');
            }
        }
    }
}

Vue.createApp(handleTasks).mount('#app');