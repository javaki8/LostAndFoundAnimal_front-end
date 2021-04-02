<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="7" lg="6">
      <v-card>
        <v-card-text>
          신청이 완료되었습니다. 글 등록 심사에 1~2일 소요됩니다.
        </v-card-text>
      </v-card>
      <v-row>
        <v-col>
          <v-btn @click="animal()">목록</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  methods: {
    animal() {
      this.$router.push("/LostAndFoundAnimal");
    },
  },
};
</script>
