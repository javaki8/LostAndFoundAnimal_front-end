<template>
  <v-container fluid>
    <v-row justify="center" class="ma-10">
      <v-col cols="6">
        <div ref="pdfarea" align="center">
          <v-card max-width="610" justify="center">
            <h1 class="bgred" align="center">{{ list.type }}를 찾습니다.</h1>
            <v-img
              max-height="550"
              :alt="list.name"
              v-if="list.files"
              :src="list.files[0].dataUrl"
            >
            </v-img>
            <h3 class="bgred" align="center">
              여러분의 제보가 큰 힘이 됩니다.
            </h3>
            <v-row class="bgwhite">
              <v-col>
                <v-card-title>
                  <v-chip style="background-color: orange; color: white" label>
                    지 역
                  </v-chip>
                  {{ list.area }}
                </v-card-title>
              </v-col>
              <v-col>
                <v-card-title>
                  <v-chip style="background-color: orange; color: white" label>
                    축 종
                  </v-chip>
                  {{ list.type }}
                </v-card-title>
              </v-col>
              <v-col>
                <v-card-title>
                  <v-chip style="background-color: orange; color: white" label>
                    날 짜
                  </v-chip>
                  {{ list.date }}
                </v-card-title>
              </v-col>
            </v-row>

            <v-row class="bgwhite">
              <v-col>
                <v-card-title>
                  <v-chip style="background-color: orange; color: white" label>
                    성 별
                  </v-chip>
                  {{ list.gender }}
                </v-card-title>
              </v-col>
              <v-col>
                <v-card-title>
                  <v-chip style="background-color: orange; color: white" label>
                    털 색
                  </v-chip>
                  {{ list.color }}</v-card-title
                >
              </v-col>
              <v-col />
            </v-row>

            <v-row class="bgwhite">
              <v-col>
                <v-card-title>
                  <v-chip style="background-color: orange; color: white" label>
                    특 징
                  </v-chip>
                  {{ list.content }}
                </v-card-title>
              </v-col>
            </v-row>
            <div class="solid" />
            <v-col class="bgwhite">
              <v-card-title>
                <v-chip style="background-color: orange; color: white" label>
                  TEL )
                </v-chip>
                {{ list.number }}
              </v-card-title>
            </v-col>
            <div class="solid" />
          </v-card>
        </div>
        <v-btn class="ma-2" outlined color="primary" @click="animal"
          >이전</v-btn
        >
        <v-btn class="ma-2" outlined color="primary" @click="exportToPDF"
          >PDF다운로드</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import html2pdf from "html2pdf.js";
import api from "@/api/lostandfound";

export default {
  name: "Pdf",
  data: () => ({
    list: [],
    files: [],
  }),
  mounted() {
    this.getPDF();
  },
  methods: {
    async getPDF() {
      let id = this.$route.params.id;
      console.log(id);
      const result = await api.details(id);
      if (result.status == 200) {
        this.list = result.data;
        this.files = result.data.files;
      }
    },
    animal() {
      this.$router.push("/LostAndFoundAnimal");
    },
    exportToPDF() {
      //window.scrollTo(0, 0);
      html2pdf(this.$refs.pdfarea, {
        margin: 2,
        filename: "mongyang.pdf",
        image: { type: "jpg", quality: 0.95 },
        //	allowTaint 옵션추가
        html2canvas: {
          useCORS: true,
          scrollY: 0,
          scale: 1,
          dpi: 300,
          letterRendering: true,
          allowTaint: false, //useCORS를 true로 설정 시 반드시 allowTaint를 false처리 해주어야함
        },
        jsPDF: {
          orientation: "portrait",
          unit: "mm",
          format: "a4",
          compressPDF: true,
        },
      });
    },
  },
};
</script>
<style>
.bgred {
  background-color: red;
}
.bgwhite {
  background-color: white;
}
.solid {
  border-top: 2px solid rgb(151, 148, 148);
}
</style>

