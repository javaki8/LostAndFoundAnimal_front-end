<template>
  <v-container grid-list-xl>
    <MenuItem />
    <v-row justify="center" class="ma-10">
      <v-card>
        <v-row>
          <v-col>
            <v-chip class="ma-3" color="primary" outlined>
              반려동물등록 대행업체 조회
            </v-chip>
          </v-col>
          <v-col>
            <v-select
              class="ma-2"
              :items="filters.options.sidoOption"
              v-model="filters.support.area"
              label="시도"
              dense
              outlined
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              class="ma-2"
              :items="filterArea"
              v-model="filters.items.areaId"
              label="구군"
              dense
              outlined
            ></v-select>
          </v-col>
          <v-col>
            <v-btn
              class="ma-2"
              outlined
              @click="filterData"
              v-model="filterData"
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-data-table :headers="headers" :items="agency"> </v-data-table>
      </v-card>
    </v-row>
  </v-container>
</template>    

<script>
import MenuItem from "@/components/MenuItem.vue";
import filters from "../assets/js/RecordAgencyFilter";
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
        text: "No.",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "시/도", value: "sido" },
      { text: "시/군/구", value: "gugun" },
      { text: "업체명", value: "orgNm" },
      { text: "상세주소", value: "addrDtl" },
      { text: "업체전화번호", value: "tel" },
    ],
    agency: [{}],
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

      //filter.js value와 비교
      const optSido = this.filters.options.sidoOption;
      const sidoArr = optSido.filter((o) => o.value == sidoData);

      const sido = sidoArr[0].text;

      //gugunData -> o.text와 비교
      const optGugun = this.filters.options.gugunOption;
      const gugunArr = optGugun.filter((o) => o.text == gugunData);
      const gugun = gugunArr[0].text;

      let page = 0;
      const result = await api.get(sido, gugun, page);

      //agency []안에 값을 넣고 data에서 value로 불러옴 (시도+구군)
      if (result.status == 200) {
        this.agency = result.data;
      }

      // 시도 전체 조회
      if (gugun == "전체") {
        const sidoAll = await api.getAll(sido, page);
        if (sidoAll.status == 200) {
          this.agency = sidoAll.data;
        }
      }
    },
  },
};
</script>