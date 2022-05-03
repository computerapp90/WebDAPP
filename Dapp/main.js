/* Moralis init code */
const serverUrl = "https://agzrgcb3ttec.usemoralis.com:2053/server";
const appId = "PfgFk4CIbdAeQ8WB3H6nCLevQM5hYDDdtFBl8Ihf";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({
      signingMessage: "Redeem ETH claim",
    })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;