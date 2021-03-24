<template>
  <v-container grid-list-xl>
    <v-toolbar color="cyan" dark flat height="15px">
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab v-for="(menu, i) in menus" :key="i" @click="navigateTo(menu)">
            {{ menu.text }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items>
      <v-tab-item>
        <v-card flat>
          <v-card-text></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { text: "분실/보호동물", path: "/LostAndFoundAnimal" },
        { text: "반려동물 등록대행업체", path: "/RecordAgency" },
        { text: "글 승인 조회", path: "/Inquiry" },
      ],
    };
  },

  methods: {
    navigateTo(menu) {
      if (this.$route.path != menu.path) {
        // 라우터에 경로 추가
        this.$router.push(menu.path);
      }
    },
  },
};
</script>
