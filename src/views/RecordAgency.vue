<template>
  <v-container grid-list-xl>
    <MenuItem />
    <v-row justify="center">
      <v-col cols="12" sm="10">
        <v-card>
          <v-card-title>
            <v-chip width="40%" class="ma-2" color="primary" outlined pill>
              반려동물등록 대행업체 조회
            </v-chip>

            <v-select
              :items="filters.options.sidoOption"
              v-model="filters.support.area"
              label="시도"
              dense
              outlined
              class="ma-2"
            ></v-select>

            <v-select
              :items="filterArea"
              v-model="filters.items.areaId"
              label="구군"
              dense
              outlined
              class="ma-2"
            ></v-select>

            <v-btn @click="filterData()">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-card-title>
          <v-data-table :headers="headers"></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>    

<script>
import MenuItem from "@/components/MenuItem.vue";
import filters from "../data/RecordAgencyFilter";
import api from "@/api/agency";

export default {
  components: {
    MenuItem,
  },

  data: () => ({
    filters,
    tab: null,
    headers: [
      {
        text: "시/도",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "업체명" },
      { text: "업체전화번호" },
      { text: "시/군/구" },
      { text: "주소" },
    ],
  }),
  computed: {
    filterArea() {
      let options = this.filters.options.gugunOption;

      return options.filter((o) => o.gugun == this.filters.support.area);
    },
  },

  methods: {
    async filterData() {
      const sidoData = this.filters.support.area;
      const gugunData = this.filters.items.areaId;
      console.log("시도데이터--" + sidoData + "--구군데이터--" + gugunData);
      const optSido = this.filters.options.sidoOption;
      const sidoArr = optSido.filter((o) => o.value == sidoData);

      const sido = sidoArr[0].text;
      console.log("시도-----" + sido);

      const optGugun = this.filters.options.gugunOption;
      console.log(optGugun);
      const gugunArr = optGugun.filter((o) => o.text == gugunData);
      const gugun = gugunArr[0].text;

      console.log("---gugun---" + gugun);
      let page = 1;
      const result = await api.sido(sido, gugun, page);
      console.log(result);
      if (result.status == 200) {
        this.list = result.data;
      }
    },
  },
};
</script>