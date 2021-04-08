<template>
  <v-container fluid>
    <v-row justify="center" class="ma-10">
      <v-col cols="6">
        <v-card>
          <v-carousel cycle hide-delimiter-background>
            <v-carousel-item
              v-for="(slide, i) in files"
              :key="i"
              :src="slide.dataUrl"
            >
              <v-chip class="headline ma-5 orange" text-color="white">
                {{ list.state }}
              </v-chip>
            </v-carousel-item>
          </v-carousel>
          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                성 별
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.gender }} </v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                털 색
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.color }} </v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                이 름
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.name }} </v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                연락처
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.number }} </v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                날 짜
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.date }} </v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                지 역
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.area }} </v-card-title>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-chip class="ma-2" color="orange" text-color="white">
                <v-icon> mdi-paw </v-icon>
                특 징
              </v-chip>
            </v-col>
            <v-col>
              <v-card-title>{{ list.content }} </v-card-title>
            </v-col>
          </v-row>
        </v-card>
        <v-col />
        <v-btn class="ma-2" outlined color="primary" @click="animal"
          >목록</v-btn
        >

        <v-dialog v-model="dialog" max-width="650">
          <template v-slot:activator="{ on, attrs }">
            <v-btn outlined color="primary" v-bind="attrs" v-on="on">
              전단지</v-btn
            >
          </template>

          <v-card max-width="630">
            <v-img
              max-height="400"
              :alt="list.name"
              v-if="list.files"
              :src="list.files[0].dataUrl"
            >
              <v-card-title class="headline white font-weight-black">
                {{ list.type }}를 찾습니다.
              </v-card-title></v-img
            >
            <h3 class="green darken-1" align="center">
              여러분의 제보가 큰 힘이 됩니다.
            </h3>
            <v-row>
              <v-col>
                <v-card-title>
                  <v-chip color="orange" label text-color="white">
                    지 역
                  </v-chip>
                  {{ list.area }}
                </v-card-title>
              </v-col>
              <v-col>
                <v-card-title>
                  <v-chip color="orange" label text-color="white">
                    축 종
                  </v-chip>
                  {{ list.type }}
                </v-card-title>
              </v-col>
              <v-col>
                <v-card-title>
                  {{ list.date }}
                </v-card-title>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card-title>
                  <v-chip color="orange" label text-color="white">
                    성 별
                  </v-chip>
                  {{ list.gender }}
                </v-card-title>
              </v-col>
              <v-col>
                <v-card-title>
                  <v-chip color="orange" label text-color="white">
                    털 색
                  </v-chip>
                  {{ list.color }}</v-card-title
                >
              </v-col>
              <v-col />
            </v-row>

            <v-row>
              <v-col>
                <v-card-title>
                  <v-chip color="orange" label text-color="white">
                    특 징
                  </v-chip>
                  {{ list.content }}
                </v-card-title>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-title>
              <v-chip class="ma-2" color="orange" label text-color="white">
                TEL )
              </v-chip>
              {{ list.number }}
            </v-card-title>

            <v-divider></v-divider>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/api/lostandfound";

export default {
  name: "Detail",
  data: () => ({
    list: [],
    dialog: false,
    files: [],
  }),
  mounted() {
    this.getDetails();
  },

  methods: {
    async getDetails() {
      let id = this.$route.params.id;
      const result = await api.details(id);

      if (result.status == 200) {
        this.list = result.data;
        this.files = result.data.files;
        console.log(this.files);
      }
    },
    animal() {
      return this.$router.go(-1);
    },
  },
};
</script>