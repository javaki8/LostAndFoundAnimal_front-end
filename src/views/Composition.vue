<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-title>
          <span class="headline">분실/보호동물 게시글 작성</span>
        </v-card-title>

        <v-card-text>
          <v-select
            v-model="newList.type"
            :items="['개', '고양이', '기타']"
            label="축종*"
            required
          ></v-select>

          <v-checkbox v-model="newList.lost" label="분실"></v-checkbox>
          <v-checkbox v-model="newList.found" label="보호"></v-checkbox>

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

          <v-text-field v-model="newList.color" label="털색*" required>
          </v-text-field>

          <v-text-field v-model="newList.content" label="특징*" required>
          </v-text-field>

          <v-text-field
            v-model="newList.number"
            label="연락처*"
            hint="XXX-XXXX-XXXX 연락처를 입력해주세요"
            persistent-hint
            required
          >
          </v-text-field>
          <v-text-field v-model="newList.name" label="이름*" required>
          </v-text-field>
          <v-select
            v-model="newList.area"
            :items="['서울', '경기', '강원', '제주']"
            label="지역*"
            required
          >
          </v-select>

          <v-select
            v-model="newList.gender"
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
    newList: {
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
    },
    files: [],
  }),
  methods: {
    async share() {
      const lostandfound = {
        name: this.newList.name,
        area: this.newList.area,
        color: this.newList.color,
        gender: this.newList.gender,
        number: this.newList.number,
        lost: this.newList.lost,
        found: this.newList.found,
        date: this.newList.date,
        content: this.newList.content,
        type: this.newList.type,
      };
      const result = await api.post(lostandfound);
      console.log(result);
      console.log("글쓰기 result.data");
      console.log(result.data);
      if (result.status == 200) {
        const lists = result.data;
        lists.files = [];

        if (this.files && this.files.length > 0) {
          const lostandfoundId = lists.id;

          for (let file of this.files) {
            const form = new FormData();
            form.append("data", file);
            const result = await api.uploadFile(lostandfoundId, form);
            console.log("----image----");
            console.log(result.data);
            lists.files.push({
              ...result.data,
            });
          }
        }
        console.log("----파일 업로드 lists");
        console.log(lists.files[0].dataUrl);
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
