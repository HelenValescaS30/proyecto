const express = require('express');
const server = express();
const bodyParser = require("body-parser");
const cors = require('cors');


const PORT = process.env.PORT || 4000;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(cors({
    origin: '*'
}));

const showRoutes = require("./routes/index.js");
server.use("/api", showRoutes(server));
server.get('/', async (req, res) => {

    res.send("funciona");
});


const { chromium,firefox } = require('playwright');
//const { trapEventsOnPage } = require("../playwrightHelper");

const WHATSAPP_WEB_URL = "https://web.whatsapp.com/"

//const urlTest="https://sistemageneral.azurewebsites.net/index.php/login/index"
//const whatsappContact = "Hele Trabajo"

const message = "My message from the WhatsApp robot"

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
(async () => {
    
  const browser = await chromium.launch({ headless: false })
  //onst context = await browser.newContext()
  const page = await browser.newPage();

  await page.goto(urlTest);

  //const email =await page.$('#usuario')
/*
  const user=page.locator("[name=usuario]")

  if(user){
    console.log("existe",user)
    await user.type('usuario helend',{delay:50})
  }else{
    console.log("no existe ")
  }*/
  //.select_option("foo")

  //await email.type('testtest',{delay:50})

  // wait for element search box
  //await page.waitForSelector('._1awRl')  //_3sHED
//  await page.waitForSelector('._3sHED')  //
    // Configure the navigation timeout
   // await page.setDefaultNavigationTimeout(1000000000000);


 // page .waitForSelector('.landing-title _2K09Y').then(() => console.log('First URL with image: ' + currentURL));
  // enter name of contact in search box
 // await page.fill('._1awRl', whatsappContact);
 //await page.fill('._3sHED', whatsappContact);

  // page filters list of contacts
  //await page.waitForSelector(`span[title="${whatsappContact}"]`)
  // click on the contact - this refreshes the right pane with recent messages and a box for sending new messages
  //await page.click(`span[title="${whatsappContact}"]`)
  
  // wait for the field to send a message
  //await page.waitForSelector('text=Type a message')
  // type the message to send
  //await page.type('text=Type a message', message)
  // click button to send message
  //await page.click('button._2Ujuu')

  await sleep(50000000) // 1000* 50 seconds
  //await browser.close()
})()

function handleErrors(err, req, res, next) {
    console.log(err);


    res.status(500).send('An internal server error occurred');
};

server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on ${PORT}`);
});

