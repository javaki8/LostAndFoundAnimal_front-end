<template>
  <v-container grid-list-xl>
    <MenuItem />
    <v-row justify="center" class="ma-10">
      <v-col cols="12" sm="5">
        <v-row>
          <v-chip class="ma-5" color="primary" label outlined> 연락처 </v-chip>
          <v-text-field
            v-model="keyword"
            label="특수문자 '-' 제외"
            outlined
            clearable
            maxlength="11"
            @keyup="getPhoneMask(keyword)"
          ></v-text-field>
        </v-row>
        <div class="text-center">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="checkMatchNumber(keyword)"
                class="ma-2"
                outlined
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
                <v-btn class="ma-2" outlined @click="dialog = false">
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
    getPhoneMask(val) {
      let res = this.getMask(val);
      this.keyword = res;
    },
    getMask(phoneNumber) {
      if (!phoneNumber) return phoneNumber;
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

      let res = "";
      if (phoneNumber.length < 3) {
        res = phoneNumber;
      } else {
        if (phoneNumber.substr(0, 2) == "02") {
          if (phoneNumber.length <= 5) {
            res = phoneNumber.substr(0, 2) + "-" + phoneNumber.substr(2, 3);
          } else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {
            res =
              phoneNumber.substr(0, 2) +
              "-" +
              phoneNumber.substr(2, 3) +
              "-" +
              phoneNumber.substr(5);
          } else if (phoneNumber.length > 9) {
            res =
              phoneNumber.substr(0, 2) +
              "-" +
              phoneNumber.substr(2, 4) +
              "-" +
              phoneNumber.substr(6);
          }
        } else {
          if (phoneNumber.length < 8) {
            res = phoneNumber;
          } else if (phoneNumber.length == 8) {
            res = phoneNumber.substr(0, 4) + "-" + phoneNumber.substr(4);
          } else if (phoneNumber.length == 9) {
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 3) +
              "-" +
              phoneNumber.substr(6);
          } else if (phoneNumber.length == 10) {
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 3) +
              "-" +
              phoneNumber.substr(6);
          } else if (phoneNumber.length > 10) {
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 4) +
              "-" +
              phoneNumber.substr(7);
          }
        }
      }

      return res;
    },

    async checkMatchNumber(keyword) {
      const result = await api.keyword(keyword);

      if (result.status == 200) {
        this.$router.push({ name: "InquiryPage", params: { keyword } });
        this.dialog = true;
      }
    },
  },
};
</script>

