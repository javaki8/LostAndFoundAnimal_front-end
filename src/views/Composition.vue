<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-title>
          <span class="headline">분실/보호동물 게시글 작성</span>
        </v-card-title>

        <v-card-text>
          <v-select
            :items="['개', '고양이', '기타']"
            :rules="[() => !!name || '필수항목입니다.']"
            :error-messages="errorMessages"
            label="축종*"
            required
          ></v-select>

          <v-select
            :items="['분실', '보호']"
            :rules="[() => !!name || '필수항목입니다.']"
            :error-messages="errorMessages"
            label="분실/보호*"
            required
          ></v-select>

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

          <v-text-field
            :rules="[() => !!name || '필수항목입니다.']"
            :error-messages="errorMessages"
            label="털색*"
            required
          >
          </v-text-field>

          <v-text-field
            :rules="[() => !!name || '필수항목입니다.']"
            :error-messages="errorMessages"
            label="특징*"
            required
          >
          </v-text-field>

          <v-text-field
            :rules="[() => !!name || '필수항목입니다.']"
            :error-messages="errorMessages"
            label="연락처*"
            hint="010-1234-5678"
            persistent-hint
            required
          >
          </v-text-field>

          <v-select
            :items="['서울', '경기', '강원', '제주']"
            :rules="[() => !!name || '필수항목입니다.']"
            :error-messages="errorMessages"
            label="지역*"
            required
          >
          </v-select>

          <v-select
            :rules="[() => !!name || '필수항목입니다.']"
            :error-messages="errorMessages"
            :items="['암컷', '수컷', '모름']"
            label="성별*"
            required
          >
          </v-select>

          <v-autocomplete
            :items="[
              'Skiing',
              'Ice hockey',
              'Soccer',
              'Basketball',
              'Hockey',
              'Reading',
              'Writing',
              'Coding',
              'Basejump',
            ]"
            label="Interests"
            multiple
          >
          </v-autocomplete>
          <small>*작성한 글은 관리자 승인 후 등록됩니다.</small>
        </v-card-text>

        <v-btn color="primary"> 등록 </v-btn>

        <v-btn color="primary" text @click="animalList()"> 취소 </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    date: new Date().toISOString().substr(0, 10),
    //menu2 -> 캘린더
    menu2: false,
    errorMessages: "",
    name: null,
    files: [],
  }),

  computed: {
    form() {
      return {
        name: this.name,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
    animalList() {
      this.$router.push("/LostAndFoundAnimal");
    },
  },
};
</script>