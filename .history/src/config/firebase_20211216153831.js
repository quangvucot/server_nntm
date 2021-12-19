const admin = require("firebase-admin");
const serviceAccount = require("./fir-notification-554d4-firebase-adminsdk-8sc3v-1faaaa5c22.json");

const connectionFire = (body, title) => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  const token =
    "f5Ud-UNxQE6iUmHLtrSyDJ:APA91bEIOaa3C0rIAlOl-ejAlRysTazJupAIQP9FHcwAUMUIzzYdvaIAEfMISD0RPNP03PM9CoEVKt2jRAEtOlTp0Nuapmx4TAShBVsXX2jE3veZqWH7X_YYT8O8yDgzffOK_R4N6Hzd";
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
