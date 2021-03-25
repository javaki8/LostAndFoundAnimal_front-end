<template>
  <v-container grid-list-xl>
    <MenuItem />
    <v-col sm="5">
      <h3>휴대폰 번호</h3>
      <v-spacer />
      <v-text-field label="010-0000-0000" outlined clearable></v-text-field>
      <v-btn @click="ask()"> 조회 </v-btn>
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
  methods: {
    ask() {
      this.$router.push("/Progress");
    },
    //     ask() {
    //  if() {this.$router.push("/Page");
    //}
    // },
  },
};
</script>

