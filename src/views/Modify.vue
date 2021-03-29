<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="7" lg="6">
      <v-card>
        <v-img
          height="300"
          v-if="list.files"
          :src="list.files[0].dataUrl"
        ></v-img>
        <v-card-title>{{ list.state }} 중 입니다.</v-card-title>
        <v-card-title>성별: {{ list.gender }} </v-card-title>
        <v-card-title>색깔 : {{ list.color }} </v-card-title>
        <v-card-title>
          이름 : {{ list.name }} / 연락처 : {{ list.number }}
        </v-card-title>
        <v-card-title>날짜: {{ list.date }} </v-card-title>
        <v-card-title>지역: {{ list.area }} </v-card-title>
        <v-card-title>특징: {{ list.content }} </v-card-title>
      </v-card>
      <v-btn class="ma-2" outlined color="indigo" @click="animal">목록</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import api from "@/api/lostandfound";
export default {
  name: "Modify",
  data: () => ({
    list: [],
  }),
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      let id = this.$route.params.id;
      const result = await api.details(id);
      console.log("---Detail data----");
      console.log(result.data);
      if (result.status == 200) {
        this.list = result.data;
      }
    },

    animal() {
      return this.$router.go(-1);
    },
  },
};
</script>