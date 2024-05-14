/* Ping the project sites to wake up the project app servers */
function ping(url) {
  //console.log("Ping " + url);
  fetch(url, { mode: "no-cors" })
    .then((response) => {
      //console.log("Pong!");
    })
    .catch((e) => {
      //console.log(e);
    });
}

const ping_urls = ["https://password-manager-pliu.fly.dev"];

ping_urls.forEach((url) => {
  ping(url + "/health_check");
});
