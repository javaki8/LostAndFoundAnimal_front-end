<template>
  <v-container grid-list-xl>
    <MenuItem/>
      <v-chip width="40%" class="ma-2" color="primary" outlined pill>
        반려동물등록 대행업체 조회
      </v-chip>
    <v-row>
      <div style="width: 10%">
        <v-select
          v-model="variant"
          :items="addr"
          clearable
          label="시/도"
        ></v-select>
      </div>
      <div style="width: 10%">
        <v-select v-model="variant" :items="addrDtl" clearable label="구/군">
        </v-select>
      </div>
    </v-row>
  </v-container>
</template>    


<script>
import MenuItem from "@/components/MenuItem.vue";
export default {
  components: {
    MenuItem
  },
  data() {
    return {
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
    };
  },
};
</script>