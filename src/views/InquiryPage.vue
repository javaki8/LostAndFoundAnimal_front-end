<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="7" lg="6">
      <v-card max-width="800" elevation="2" outlined>
        <v-img v-if="list.files" :src="list.files[0].dataUrl">
          <v-chip class="headline ma-5 orange" text-color="white">
            {{ list.status }} 진행
          </v-chip>
        </v-img>

        <v-chip class="headline ma-5 orange" text-color="white">
          {{ list.state }}
        </v-chip>

        <v-divider></v-divider>
        <v-row>
          <v-col>
            <v-card-title class="text--secondary">성 별: </v-card-title>
          </v-col>
          <v-col>
            <v-card-title>{{ list.gender }}</v-card-title>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col>
            <v-card-title class="text--secondary">털 색: </v-card-title>
          </v-col>
          <v-col>
            <v-card-title>{{ list.color }} </v-card-title>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col>
            <v-card-title class="text--secondary">이 름: </v-card-title>
          </v-col>
          <v-col>
            <v-card-title>{{ list.name }} </v-card-title>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col>
            <v-card-title class="text--secondary">연락처: </v-card-title>
          </v-col>
          <v-col>
            <v-card-title>{{ list.number }} </v-card-title>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col>
            <v-card-title class="text--secondary">날 짜: </v-card-title>
          </v-col>
          <v-col>
            <v-card-title>{{ list.date }} </v-card-title>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col>
            <v-card-title class="text--secondary">지 역: </v-card-title>
          </v-col>
          <v-col>
            <v-card-title>{{ list.area }} </v-card-title>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col>
            <v-card-title class="text--secondary">특 징: </v-card-title>
          </v-col>
          <v-col>
            <v-card-title>{{ list.content }} </v-card-title>
          </v-col>
        </v-row>
      </v-card>
      <v-btn class="ma-2" outlined @click="inquiry">목록</v-btn>
      <v-btn class="ma-2" outlined @click="modifyPage(list.id)">수정하기</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import api from "@/api/lostandfound";
export default {
  name: "InquiryPage",
  data: () => ({
    list: [],
    files: [],
  }),
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      let keyword = this.$route.params.keyword;
      const result = await api.keyword(keyword);
      if (result.status == 200) {
        this.list = result.data;
      }
    },
    modifyPage(id) {
      this.$router.push({ name: "Modify", params: { id } });
    },
    inquiry() {
      return this.$router.go(-1);
    },
  },
};
</script>