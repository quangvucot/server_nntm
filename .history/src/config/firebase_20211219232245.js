const admin = require("firebase-admin");
const serviceAccount = require("./fir-notification-554d4-firebase-adminsdk-8sc3v-1faaaa5c22.json");

const connectionFire = (body, title) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
  const token =
    "fkWUoMkySV-Gxa1s-1_8bM:APA91bEVteSSMRiaCJkifDOehhRU89WeHMYvAuxhoutmnvCDWw45-3_QX-zNlQobG4uFSGqyaEu08SAMKVLA6969Yv8Cg0bKkoTanHOKy6EP6v7Vra8vlt_NXREUcOPg-LZnwwMtaH6m";
  admin
    .messaging()
    .send({
      token: token,
      data: {
        customData: "Hello",
        id: "1",
        ad: "Xin Chao",
        subTitle: "Node js passing",
      },
      android: {
        notification: {
          body: body,
          title: title,
          sound: "default",
          color: "#FCB542",
          vibrateTimingsMillis: [255, 500, 800],
          priority: "high",
        },
      },
    })
    .then((mgs) => {
      console.log(mgs);
    });
};

module.exports = connectionFire;
