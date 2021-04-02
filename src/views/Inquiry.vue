<template>
  <v-container grid-list-xl>
    <MenuItem />
    <v-row justify="center">
      <v-col cols="12" sm="5">
        <v-row>
          <v-chip class="ma-5" label outlined> 연락처 </v-chip>
          <v-text-field
            v-model="keyword"
            label="연락처를 입력해주세요."
            outlined
            clearable
          ></v-text-field>
        </v-row>
        <div class="text-center">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="checkMatchNumber(keyword)"
                class="ma-2"
                outlined
                color="indigo"
                v-bind="attrs"
                v-on="on"
              >
                조회
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="headline indigo lighten-5"> </v-card-title>
              <v-card-text class="text-center">
                잘못된 연락처입니다. 다시 입력해주세요.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="ma-2"
                  outlined
                  color="indigo"
                  @click="dialog = false"
                >
                  확인
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
    </v-row>
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
    files: [],
  }),

  methods: {
    async checkMatchNumber(keyword) {
      console.log(keyword);
      const result = await api.keyword(keyword);

      console.log(result);

      if (result.status == 200) {
        this.dialog = true;
        this.$router.push({ name: "InquiryPage", params: { keyword } });
      }
    },
  },
};
</script>

