<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-title>
          <span class="headline">분실/보호동물 게시글 작성</span>
        </v-card-title>

        <v-card-text>
          <v-select
            v-model="type"
            :items="['개', '고양이', '기타']"
            label="축종*"
            required
          ></v-select>

          <v-checkbox v-model="lost" label="분실"></v-checkbox>
          <v-checkbox v-model="found" label="보호"></v-checkbox>

          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Data"
                hint="MM/DD/YYYY"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>

            <v-date-picker
              v-model="date"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>

          <v-file-input
            v-model="files"
            multiple
            chips
            small-chips
            truncate-length="15"
            label="사진을 등록해주세요"
          >
          </v-file-input>

          <v-spacer></v-spacer>

          <v-text-field v-model="color" label="털색*" required> </v-text-field>

          <v-text-field v-model="content" label="특징*" required>
          </v-text-field>

          <v-text-field
            v-model="number"
            label="연락처*"
            hint="XXX-XXXX-XXXX 연락처를 입력해주세요"
            persistent-hint
            required
          >
          </v-text-field>
          <v-text-field v-model="name" label="이름*" required> </v-text-field>
          <v-select
            v-model="area"
            :items="['서울', '경기', '강원', '제주']"
            label="지역*"
            required
          >
          </v-select>

          <v-select
            v-model="gender"
            :items="['암컷', '수컷', '모름']"
            label="성별*"
            required
          >
          </v-select>

          <small>*작성한 글은 관리자 승인 후 등록됩니다.</small>
        </v-card-text>

        <v-btn color="primary" @click="share()"> 등록 </v-btn>

        <v-btn color="primary" text @click="animalList()"> 취소 </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import api from "@/api/lostandfound";

export default {
  data: () => ({
    dialog: false,
    date: new Date().toISOString().substr(0, 10),
    //menu2 -> 캘린더
    menu2: false,
    name: null,
    area: null,
    color: null,
    gender: null,
    number: null,
    lost: null,
    found: null,
    content: null,
    type: null,
    files: [],
  }),

  methods: {
    async share() {
      const lostandfound = {
        name: this.name,
        area: this.area,
        color: this.color,
        gender: this.gender,
        number: this.number,
        lost: this.lost,
        found: this.found,
        date: this.date,
        content: this.content,
        type: this.type,
      };

      const result = await api.post(lostandfound);
      console.log(result);
      console.log(result.data);

      if (result.status == 200) {
        this.lists = result.data;
      }
    },
    animalList() {
      this.$router.push("/LostAndFoundAnimal");
    },
  },

  apply(id) {
    console.log("----글등록 버튼 클릭 id 넘겨주기----");
    console.log(id);
    this.$router.push({ name: "progress", params: { id } });
  },
};
</script>


