<template>
  <div align="center">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title> ref no.A00001 </v-card-title>
            <v-card-text>
              신청이 완료되었습니다. 심사에 1~2일 소요됩니다.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-btn @click="animal()">목록</v-btn>
    </v-container>
  </div>
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
