<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-title>
          <span class="headline text-center">분실/보호동물 게시글 작성</span>
        </v-card-title>

        <v-card-text>
          <v-file-input
            v-model="files"
            multiple
            chips
            truncate-length="15"
            label="사진을 등록해주세요."
            prepend-icon="mdi-camera"
            counter
            :rules="[(files) => !!files || '필수 입력사항입니다.']"
          >
          </v-file-input>
          <v-row align="center" class="mx-0">
            <v-col>
              <v-radio-group v-model="newList.state" row>
                <v-radio label="분실" value="분실"></v-radio>
                <v-radio label="보호" value="보호"></v-radio>
              </v-radio-group>
            </v-col>
            <v-col>
              <v-select
                :items="filters.options.sidoOption"
                v-model="newList.area"
                label="지역"
                :rules="[(area) => !!area || '필수 입력사항입니다.']"
              ></v-select>
            </v-col>
          </v-row>
          <v-row align="center" class="mx-0">
            <v-col>
              <v-select
                v-model="newList.type"
                :items="['강아지', '고양이', '기타축종']"
                label="축종*"
                required
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                v-model="newList.gender"
                :items="['암컷', '수컷', '모름']"
                label="성별*"
                required
              >
              </v-select>
            </v-col>
          </v-row>

          <v-row align="center" class="mx-0">
            <v-col>
              <v-menu
                v-model="newList.menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="newList.date"
                    label="Data"
                    hint="MM/DD/YYYY"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>

                <v-date-picker
                  v-model="newList.date"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-text-field v-model="newList.color" label="털색*" required>
              </v-text-field>
            </v-col>
          </v-row>

          <v-spacer></v-spacer>
          <v-row align="center" class="mx-0">
            <v-col>
              <v-text-field v-model="newList.name" label="성함*" required>
              </v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="newList.number"
                label="연락처*"
                hint=" 특수문자 '-' 제외 숫자만 입력해주세요."
                persistent-hint
                required
                maxlength="11"
                :rules="[(number) => !!number || '필수 입력사항입니다.']"
                @keyup="getPhoneMask(newList.number)"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-col>
            <v-textarea v-model="newList.content" label="특징*" outlined>
            </v-textarea>
          </v-col>

          <small>*작성한 글은 관리자 승인 후 등록됩니다.</small>
        </v-card-text>

        <v-btn class="ma-2" outlined @click="share"> 등록 </v-btn>

        <v-btn class="ma-2" outlined text @click="animalList()"> 취소 </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import api from "@/api/lostandfound";
import filters from "../assets/js/RecordAgencyFilter";

export default {
  data: () => ({
    filters,
    newList: {
      date: new Date().toISOString().substr(0, 10),
      //menu2 -> 캘린더
      menu2: false,
      area: "",
    },
    files: [],
  }),
  watch: {
    name() {
      this.errorMessages = "";
    },
  },
  methods: {
    getPhoneMask(val) {
      this.newList.number = this.getMask(val);
    },
    getMask(phoneNumber) {
      if (!phoneNumber) return phoneNumber;
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

      let res = this.number;

      if (phoneNumber.length < 3) {
        res = phoneNumber;
      } else {
        if (phoneNumber.substr(0, 2) == "02") {
          if (phoneNumber.length <= 5) {
            res = phoneNumber.substr(0, 2) + "-" + phoneNumber.substr(2, 3);
            console.log(res);
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

    async share() {
      const lostandfound = {
        name: this.newList.name,
        area: this.newList.area,
        color: this.newList.color,
        gender: this.newList.gender,
        number: this.newList.number,
        date: this.newList.date,
        content: this.newList.content,
        type: this.newList.type,
        state: this.newList.state,
      };

      if (this.files.length && this.newList.number && this.newList.area) {
        const sidoArr = this.filters.options.sidoOption.filter(
          (o) => o.value == this.newList.area
        );

        lostandfound.area = sidoArr[0].text;

        const result = await api.post(lostandfound);

        if (result.status == 200) {
          const list = result.data;
          list.files = [];

          if (this.files && this.files.length > 0) {
            const lostandfoundId = list.id;

            for (let file of this.files) {
              const form = new FormData();
              form.append("data", file);
              const result = await api.uploadFile(lostandfoundId, form);

              list.files.push({
                ...result.data,
              });
            }
          }

          this.$router.push("/Page");
        }
      } else {
        alert("사진, 전화번호, 지역은 필수 입력사항입니다.");
      }
    },
    animalList() {
      this.$router.push("/LostAndFoundAnimal");
    },
  },
};
</script>
