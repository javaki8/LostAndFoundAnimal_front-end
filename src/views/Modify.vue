<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="7" lg="6">
      <v-card>
        <v-img height="300" v-if="list.files" :src="list.files[0].dataUrl">
          <v-card-title class="headline white--text"
            >{{ list.status }} 승인 진행중</v-card-title
          >
        </v-img>

        <v-card-title>{{ list.state }} 중 입니다.</v-card-title>
        <v-card-title>성별: {{ list.gender }} </v-card-title>
        <v-card-title>색깔 : {{ list.color }} </v-card-title>
        <v-card-title> 이름 : {{ list.name }} </v-card-title>
        <v-text-field v-model="list.number" label="연락처*" required>
        </v-text-field>
        <v-card-title>날짜: {{ list.date }} </v-card-title>
        <v-card-title>지역: {{ list.area }} </v-card-title>
        <v-col>
          <v-card-title>특징:</v-card-title>
          <v-text-field v-model="list.content" label="특징*" required>
          </v-text-field>
        </v-col>
      </v-card>
      <v-btn class="ma-2" outlined color="indigo" @click="backPage()"
        >목록</v-btn
      >
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            @click="modifyList(list)"
            class="ma-2"
            outlined
            color="indigo"
            v-bind="attrs"
            v-on="on"
          >
            수정완료
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline indigo lighten-5"> </v-card-title>
          <v-card-text class="text-center"> 수정되었습니다. </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="ma-2" outlined color="indigo" @click="dialog = false">
              확인
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import api from "@/api/lostandfound";
export default {
  name: "Modify",
  data: () => ({
    list: [],
    files: [],
    dialog: false,
  }),
  mounted() {
    this.getList();
  },

  methods: {
    async getList() {
      let id = this.$route.params.id;
      const result = await api.details(id);

      if (result.status == 200) {
        this.list = result.data;
      }
      const getId = this.list.id;
      this.getAnimal(getId);
    },

    async getAnimal(getId) {
      const result = await api.details(getId);
      if (result.status == 200) {
        this.list = result.data;
      }
    },
    async modifyList(list) {
      const id = this.list.id;
      console.log("----------modifyList ");
      console.log(id);
      const result = await api.modify(id, list);
      console.log("-----수정-------");
      console.log(result);
      if (result.status == 200) {
        this.list = result.data;
        this.dialog = true;
      }
      this.$router.push("/Inquiry");
    },

    backPage() {
      this.$router.push("/Inquiry");
    },
  },
};
</script>