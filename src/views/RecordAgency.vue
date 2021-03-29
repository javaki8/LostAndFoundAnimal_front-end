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
            <v-select :items="addr" label="시/도" />
            <v-select :items="addrDtl" label="구/군" />
            <v-btn>
              <v-icon>fas fa-search</v-icon>
            </v-btn>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>    

<script>
import MenuItem from "@/components/MenuItem.vue";
export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      search: "",
      tab: null,
      addr: [
        "서울",
        "경기",
        "부산",
        "대구",
        "인천",
        "광주",
        "세종",
        "대전",
        "울산",
        "강원",
        "충청북도",
        "충청남도",
        "전라북도",
        "전라북도",
        "전라남도",
        "경상북도",
        "경상남도",
        "제주",
      ],
      addrDtl: ["Dog", "Cat", "Rabbit", "Turtle", "Snake"],
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
      ],
    };
  },
};
</script>