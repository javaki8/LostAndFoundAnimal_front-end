<template>
  <v-container grid-list-xl>
    <MenuItem />
    <v-col sm="5">
      <h3>휴대폰 번호</h3>
      <v-spacer />
      <v-text-field
        v-model="keyword"
        label="010-0000-0000"
        outlined
        clearable
      ></v-text-field>
      <v-btn @click="checkMatchNumber(keyword)">
        조회
        <v-dialog v-model="dialog" width="500"></v-dialog>
      </v-btn>
    </v-col>
  </v-container>
</template>
<script>
import MenuItem from "@/components/MenuItem.vue";
import api from "@/api/lostandfound";
export default {
  components: {
    MenuItem,
  },
  data: () => ({
    keyword: "",
    dialog: false,
  }),

  methods: {
    async checkMatchNumber(keyword) {
      console.log(keyword);
      const result = await api.keyword(keyword);

      console.log(result);

      if (result.status == 200) {
        this.$router.push("/Modify");
      } else {
        this.dialog;
      }
    },
  },
};
//     ask() {
//       this.$router.push("/Progress");
//     },
//   },
//   //     ask() {
//   //  if() {this.$router.push("/Page");
//   //}
//   // },
// };
</script>

