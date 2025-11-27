console.log("Hello world");

import express from "express";
import cors from "cors";

const app = express();

// cors 설정
app.use(cors());

//서버 실행(가장 마지막 줄)
app.listen(8080, () => {
  console.log("서버 ON");
}); //실행시킬 포트 번호
