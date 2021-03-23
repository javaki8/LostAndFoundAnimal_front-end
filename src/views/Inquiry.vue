<template>
  <v-container grid-list-xl>
    <MenuItem />
    <v-col sm="5">
      <h3>신청번호</h3>
      <v-spacer/>
      <v-text-field
        v-model="message4"
        label="신청번호를 입력하세요"
        outlined
        clearable
      >
      </v-text-field>

      <h3>이름</h3>
      <v-spacer/>
      <v-text-field
        v-model="message4"
        label="이름을 입력하세요"
        outlined
        clearable
      >
      </v-text-field>
      <v-btn>
        조회
      </v-btn>
    </v-col>
  </v-container>
</template>
<script>
import MenuItem from "@/components/MenuItem.vue";
export default {
  components: {
    MenuItem,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

