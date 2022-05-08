const router = require("express").Router();
const needle = require("needle");
const token = process.env.TWIITER_BEARER_TOKEN;
const endpointUrl =
  "https://api.twitter.com/1.1/search/tweets.json?q=%23hackNeog";
// const endpointUrl = "https://api.twitter.com/2/tweets/search/recent?query=neogcamp&max_results=10";

async function getRequest() {
  // const params = {
  //   'query': 'from:twitterdev -is:retweet',
  //   'tweet.fields': 'author_id'
  // }
  try {
    const res = await needle("get", endpointUrl, {
      headers: {
        "User-Agent": "v2RecentSearchJS",
        authorization: `Bearer ${token}`,
      },
    });
    if (res.body) {
      return res.body;
    } else {
      throw new Error("Unsuccessful request");
    }
  } catch (err) {
    console.log(err);
  }
}

router.get("/tweets", async (req, res, next) => {
  try {
    const response = await getRequest();
    res.send(response);
  } catch (e) {
    console.log(e);
    next(error);
  }
});

module.exports = router;
