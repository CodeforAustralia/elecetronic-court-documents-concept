var express = require('express');
var router = express.Router();

var common = require('./common');
var config = (process.env.NODE_ENV == "development") ? common.config() : process.env;

/* GET home page. */
router.post('/', function(req, res, next) {
  var client = require('twilio')(config.TWILIO_ACCOUNT, config.TWILIO_TOKEN);
  //Send an SMS text message
  client.sendMessage({

      to: req.body.to, // Any number Twilio can deliver to
      from: config.TWILIO_SMS_NUMBER, // A number you bought from Twilio and can use for outbound communication
      body: req.body.message // body of the SMS message

  }, function(err, responseData) { //this function is executed when a response is received from Twilio

      if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."
        // return the data
        res.json({
          sms: req.body,
          response: responseData
        });
      }
      else {
        console.log("ERROR");
        console.log(err);
        res.sendStatus(400).send(err);
      }
  });

});

module.exports = router;
