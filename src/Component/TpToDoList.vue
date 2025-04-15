<template>  

<!-- On affiche un message si il n'y a pas de tâches à faire. => ok
Un champ texte accompagné d'un bouton "Ajouter" sera présent au dessus de la liste et permettra d'ajouter une nouvelle tâche.
Pour chaque tâche, une case à cocher permettra de marquer la tâche comme faite.
Les tâches à faire seront toujours affichées en premier.
Une case, en bas de liste, permettra de masquer les tâches terminées. -->



<div>
    <h1>TP TodoList</h1>
    <router-link to="/">Retour à l’accueil</router-link>
    <br>

    <form action ="" @submit.prevent="addTask" class="task-form">
        <div class="form-group">
            <input type="text" placeholder="Nouvelle tâches" v-model="newTask"> 
        </div>

      <button>Ajouter une nouvelle tâche</button>
    </form>
    <hr>


    <div v-if="taskList.length">
        <ul>  
            <li v-for="task in sortedTask()"
            :key="task.date">
                <label><input type="checkbox" v-model="task.completed">  {{ task.title }}</label>
            </li>
           
        </ul>    
        <div>
            <label><input type="checkbox" v-model="hideTaskCompleted"> Masquer les taches complétées </label>
        </div>
    </div>
 
    <div v-else>la liste est vide </div>    

</div>


</template>


<script setup>
    import { ref } from "vue";

    const taskList = ref([
        {
            title: "tache de test",
            completed:true,
            date:662025

        },
        {
            title: "tache a faire",
            completed:false,
            date:882025
        }
      
    ]) 

    const newTask =  ref('');
    const hideTaskCompleted = ref(false);

    const addTask = () => {
        taskList.value.push({
            title: newTask.value,
            completed: false,
            date: Date.now() 
        });

    }

    const sortedTask = () => {
       const taskSorted = taskList.value.toSorted((a,b)=> a.completed > b.completed? 1 :-1);
       if (hideTaskCompleted.value == true) {
            return taskSorted.filter(t => t.completed == false)       
        }
    return taskSorted;
    }
</script>