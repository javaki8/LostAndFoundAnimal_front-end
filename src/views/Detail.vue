<template>
  <v-container fluid>
    <v-row justify="center" class="ma-10">
      <v-col cols="6">
        <v-card>
          <v-carousel cycle hide-delimiter-background>
            <v-carousel-item
              v-for="(slide, i) in files"
              :key="i"
              :src="slide.dataUrl"
            >
              <v-chip class="headline ma-5 orange" text-color="white">
                {{ list.state }}
              </v-chip>
            </v-carousel-item>
          </v-carousel>
          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                성 별
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
                털 색
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
                이 름
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
                날 짜
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
                지 역
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
                특 징
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.content }} </v-card-title>
            </v-col>
          </v-row>
        </v-card>
        <v-col />
        <v-btn class="ma-2" outlined color="primary" @click="animal"
          >이전</v-btn
        >
        <v-btn class="ma-2" outlined color="primary" @click="makePDF(list.id)"
          >전단지 제작</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/api/lostandfound";

export default {
  name: "Detail",
  data: () => ({
    list: [],
    files: [],
  }),
  mounted() {
    this.getDetails();
  },

  methods: {
    async getDetails() {
      let id = this.$route.params.id;
      const result = await api.details(id);
      console.log("디테일");
      console.log(result);
      if (result.status == 200) {
        this.list = result.data;
        this.files = result.data.files;
        console.log(this.files);
      }
    },
    animal() {
      return this.$router.go(-1);
    },
    makePDF(id) {
      this.$router.push({ name: "Pdf", params: { id } });
      console.log("id----");
      console.log(id);
    },
  },
};
</script>