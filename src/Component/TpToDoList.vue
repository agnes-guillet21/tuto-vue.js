<template>  

<!-- On affiche un message si il n'y a pas de tâches à faire. => ok
Un champ texte accompagné d'un bouton "Ajouter" sera présent au dessus de la liste et permettra d'ajouter une nouvelle tâche.
Pour chaque tâche, une case à cocher permettra de marquer la tâche comme faite.
Une tâche terminée sera barrée (à l'aide de CSS).
Les tâches à faire seront toujours affichées en premier.
Une case, en bas de liste, permettra de masquer les tâches terminées. -->



<div>
    <h1>TP TodoList</h1>
    <router-link to="/">Retour à l’accueil</router-link>
    <br>

    <form action ="" @submit="addTask" class="task-form">
        <div class="form-group">
            <input type="text" placeholder="Nouvelle tâches"> 
        </div>
        <div class="form-group">
           <label for=""> <input type="checkbox" id="completed" name="completed"> Completée </input> </label> 
           <label> <input type="checkbox" id="toDo" name="toDo"> A faire </input> </label> 
        </div>
        <div class="form-group">
            <label>Date de création</label>
            <input type="date" name="taskDate" id="">    
         </div>

      <button>Ajouter une nouvelle tâche</button>
    </form>
    <hr>


    <div v-if="toDoList.length">
        <ul>  
            <li v-for="task in toDoList"
            :key="task">
            {{ task.title }}, {{ task.completed }}, {{ formatDate(task.date) }}
            </li>
         
        </ul>   
    </div>
    <div v-else>la liste est vide </div>    

</div>


</template>


<script setup>
    import { ref } from "vue";
    const toDoList = ref([
    { "title": "Faire des courses", "completed": false, "date": 20240730 },
    { "title": " Se former sur Kafka", "completed": false, "date": 20240730 },
    { "title": "Poncer", "completed": false, "date": 20240730 }
    ]) 

    const newTask =  ref([
        "title",
        "completed",
        "date",
    ]);
    
    const formatDate = (rawDate) => {
        const dateStr = rawDate.toString();
        const year = dateStr.slice(0, 4);
        const month = dateStr.slice(4, 6);
        const day = dateStr.slice(6, 8);
        return `${day}/${month}/${year}`;
    };



    const addTask = (event) => {
        event.preventDefault();
        console.log(newTask.value)
        toDoList.value.push([
        ]);

    }
</script>