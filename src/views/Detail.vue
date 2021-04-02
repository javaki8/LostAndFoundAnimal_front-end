<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="7" lg="6">
      <v-card max-width="450">
        <v-img :alt="list.name" v-if="list.files" :src="list.files[0].dataUrl">
          <v-chip class="headline ma-5 orange" text-color="white">
            {{ list.state }}
          </v-chip></v-img
        >

        <v-row>
          <v-col>
            <v-chip class="ma-2" color="orange" text-color="white">
              <v-icon> mdi-paw </v-icon>
              성별
            </v-chip>
          </v-col>
          <v-col>
            <v-card-title>{{ list.gender }} </v-card-title>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-chip class="ma-2" color="orange" text-color="white">
              <v-icon> mdi-paw </v-icon>
              색깔
            </v-chip>
          </v-col>
          <v-col>
            <v-card-title>{{ list.color }} </v-card-title>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-chip class="ma-2" color="orange" text-color="white">
              <v-icon> mdi-paw </v-icon>
              이름
            </v-chip>
          </v-col>
          <v-col>
            <v-card-title>{{ list.name }} </v-card-title>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-chip class="ma-2" color="orange" text-color="white">
              <v-icon> mdi-paw </v-icon>
              연락처
            </v-chip>
          </v-col>
          <v-col>
            <v-card-title>{{ list.number }} </v-card-title>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-chip class="ma-2" color="orange" text-color="white">
              <v-icon> mdi-paw </v-icon>
              날짜
            </v-chip>
          </v-col>
          <v-col>
            <v-card-title>{{ list.date }} </v-card-title>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-chip class="ma-2" color="orange" text-color="white">
              <v-icon> mdi-paw </v-icon>
              지역
            </v-chip>
          </v-col>
          <v-col>
            <v-card-title>{{ list.area }} </v-card-title>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-chip class="ma-2" color="orange" text-color="white">
              <v-icon> mdi-paw </v-icon>
              특징
            </v-chip>
          </v-col>
          <v-col>
            <v-card-title>{{ list.content }} </v-card-title>
          </v-col>
        </v-row>
      </v-card>
      <v-btn class="ma-2" outlined color="indigo" @click="animal">목록</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import api from "@/api/lostandfound";
export default {
  name: "Detail",
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