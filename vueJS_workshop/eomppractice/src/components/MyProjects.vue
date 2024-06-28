<template>
   
    <div class="container">
        <div class="container">
        <div class="row">
            <h2 class="display-2">Projects</h2>
        </div>
        <div class="row gap-2 justify-content-center" v-if="project.length">
            <Card v-for="project in  projects" :key="project.id">
                <template #cardHeader>
                    <img :src="project.image1" :alt=" projects.project1" class="img-fluid" loading="lazy">
                </template>
                <template #cardBody>
                    <p class="lead">{{ projects.description1 }}</p>
                </template>

            </Card>
        </div>
        <Spinner v-else />
    </div>
    </div








