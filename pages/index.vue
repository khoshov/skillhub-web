<template>
  <v-app-bar flat="true">
    <v-container>
      <v-row>
        <v-col class="d-flex align-center justify-center">
          <v-avatar
              class="me-4 "
              color="grey-darken-1"
              size="32"
          ></v-avatar>

          <v-btn
              v-for="link in links"
              :key="link"
              :text="link"
              variant="text"
          ></v-btn>

          <v-spacer></v-spacer>

          <v-responsive max-width="160">
            <v-text-field
                density="compact"
                flat="true"
                hide-details
                label="Search"
                rounded="lg"
                single-line="true"
                variant="solo-filled"
            ></v-text-field>
          </v-responsive>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <h2 class="text-h2">Все онлайн-курсы frontend разработки</h2>
          <p class="mt-8">Мы собрали для вас лучшие курсы frontend разработки в одном месте. Вы можете сравнить курсы по трем направлениям во фронтенд разработке. Здесь есть подходящие курсы фронтенд разработчика для обучения с нуля. Также найдутся курсы, чтобы углубить знания в конкретной области, пройти повышение квалификации или переподготовку. В каталоге курсов есть все ― от элементарной верстки сайта до веб-разработки на React</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <!--courses-->
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
const links = [
  'Dashboard',
  'Messages',
  'Profile',
  'Updates',
]
</script>

<script>
export default {
  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
}
</script>
