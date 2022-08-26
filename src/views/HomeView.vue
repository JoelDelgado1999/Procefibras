<template>
  <v-app id="inspire">
    <v-system-bar app >
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="green "
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div>joel.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text,url] in links"
          @click="redireccionar(url)"

          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


  export default {
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'solicitudes','about'],
        ['mdi-send', 'Ranking'],
        ['mdi-delete', 'Centros de Acopios','AgregarCentros'],
        ['mdi-alert-octagon', 'cerrar cesion'],
      ],
    }),
    methods:{
      redireccionar:function(link){
        this.$router.push(link)
      }
     
    }
  }
</script>