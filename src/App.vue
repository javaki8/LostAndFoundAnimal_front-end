<template>
  <v-app>
    <div width="100%" height="250" flat>
      <v-img src="./assets/bg_cropped.jpg" />
      <v-btn icon color="#f2f2f2" absolute right top
        ><v-icon>mdi-cog-outline</v-icon></v-btn
      >
    </div>
    <v-main>
      <v-row justify="center">
        <v-btn
          value="left"
          v-for="(item, i) in items"
          :key="i"
          @click="navigateTo(item)"
          width="20%"
          height="70px"
          text
        >
          <h2 v-text="item.text"></h2>
        </v-btn>
      </v-row>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    drawer: false, // drawer의 기본 값
    selectedItem: 0,
    items: [
      { text: "유기동물", icon: "mdi-home", path: "/" },
      {
        text: "분실/보호동물",
        icon: "mdi-contacts",
        path: "/LostAndFoundAnimal",
      },
      { text: "입양후기", icon: "mdi-forum", path: "/ReviewMain" },
      { text: "동물병원", path: "hospital" },
    ],
  }),

  methods: {
    navigateTo(item) {
      if (this.$route.path != item.path) {
        // 라우터에 경로 추가
        this.$router.push(item.path);
      }
    },
  },
};
</script>
