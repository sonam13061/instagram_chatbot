let puppeteer = require("puppeteer");
let cFile=process.argv[2];

let fs = require("fs");
(async function () {
  // browser open => visible 
 
//   
 

  let newbrowser=await puppeteer.launch({
    headless:false,
    defaultViewport:null, 
    
    args:["--start-maximized","--disable-notifications"]
  });
  let newpages = await newbrowser.pages();
  let newpage = newpages[0];
  let data=await fs.promises.readFile(cFile);
    let{url,pwd,user}=JSON.parse(data);
    await newpage.goto(url,{waitUntil:"networkidle2"});
    await newpage.waitForSelector("input[name=username]",{visible:true})
    await newpage.type("input[name=username]",user,{delay:20});
    await newpage.type("input[name=password]",pwd,{delay:20});
    await Promise.all([newpage.click("button[type=submit]"),newpage.waitForNavigation({waitUntil:"networkidle2"})]);
    await newpage.waitForSelector("svg[aria-label=Direct]");
    await Promise.all([newpage.click("svg[aria-label=Direct]"),newpage.waitForNavigation({waitUntil:"networkidle2"})]);
    await newpage.waitForSelector("._41V_T.Sapc9.Igw0E.IwRSH.eGOV_._4EzTm");
    let recentschats=await newpage.$$("._41V_T.Sapc9.Igw0E.IwRSH.eGOV_._4EzTm");
    console.log(recentschats.length);
    let k=recentschats.length;
    for(let i=0;i<k;i++){
             recentschats=await newpage.$$("._41V_T.Sapc9.Igw0E.IwRSH.eGOV_._4EzTm");
       await recentschats[0].click();
        
       await newpage.waitForSelector("._7UhW9.vy6Bb.qyrsm.KV-D4.fDxYl");
       let  element=await newpage.$("._7UhW9.vy6Bb.qyrsm.KV-D4.fDxYl");
        name=await newpage.evaluate(element => element.textContent, element);
        msg="Hi "+name+" ,What Kind of videos would you like to see?";
       await newpage.type(".Igw0E.IwRSH.eGOV_.vwCYk.ItkAi",msg);
       await newpage.keyboard.press("Enter");
       let c2time=Date.now();
        while(Date.now()<=c2time+20000)
        {
        }
        await newpage.waitForSelector("._7UhW9.xLCgt.MMzan.KV-D4.p1tLr.hjZTB span");
            let allmsgs=await newpage.$$("._7UhW9.xLCgt.MMzan.KV-D4.p1tLr.hjZTB span");
        let lastmsg=await allmsgs[allmsgs.length-1];
        let msgtext=await newpage.evaluate(lastmsg => lastmsg.textContent, lastmsg);
        console.log(msgtext);
        let browser = await puppeteer.launch();
    if(msgtext!=msg){
     let pages = await browser.pages();
    let page = pages[0];
   //let page= await newbrowser.newPage();
   await page.goto("https://www.youtube.com/");
   await page.waitForSelector("input[id=search]");
   await page.type("input[id=search]",msgtext+" Videos");
   await page.keyboard.press("Enter");
   //await page.waitForNavigation({waitUntil:"networkidle2"});
   await page.waitForSelector("#title-wrapper h3 a");
   let cards= await page.$$("#title-wrapper h3 a");
   let link="https://www.youtube.com"+await page.evaluate(function(ele){
     return ele.getAttribute("href");
   },cards[0]);
   console.log(link);
   
 
   await page.close();
   await newpage.type(".Igw0E.IwRSH.eGOV_.vwCYk.ItkAi",link);
   await newpage.keyboard.press("Enter");
   await newpage.type(".Igw0E.IwRSH.eGOV_.vwCYk.ItkAi","Check out this video. You would love it");
   await newpage.keyboard.press("Enter");
  }
  else{
    await newpage.type(".Igw0E.IwRSH.eGOV_.vwCYk.ItkAi","No reply from you!.Have a Good Day.");
    await newpage.keyboard.press("Enter");
  }
    }
//     await newpage.waitForSelector("._41V_T.Sapc9.Igw0E.IwRSH.eGOV_._4EzTm");
//     recentschats=await newpage.$$("._41V_T.Sapc9.Igw0E.IwRSH.eGOV_._4EzTm");
//     for(let i=0;i<recentschats.length;i++){
//         await recentschats[i].click();
//        await newpage.waitForSelector("._7UhW9.xLCgt.MMzan.KV-D4.p1tLr.hjZTB span");
//        let allmsgs=await newpage.$$("._7UhW9.xLCgt.MMzan.KV-D4.p1tLr.hjZTB span");
//        let lastmsg=await allmsgs[allmsgs.length-1];
//        let msgtext=await newpage.evaluate(lastmsg => lastmsg.textContent, lastmsg);
//        console.log(msgtext);
//        let browser = await puppeteer.launch();
   
//     let pages = await browser.pages();
//    let page = pages[0];
//   //let page= await newbrowser.newPage();
//   await page.goto("https://www.youtube.com/");
//   await page.waitForSelector("input[id=search]");
//   await page.type("input[id=search]",msgtext+" Videos");
//   await page.keyboard.press("Enter");
//   await page.waitForNavigation({waitUntil:"networkidle2"});
//   await page.waitForSelector("#title-wrapper h3 a");
//   let cards= await page.$$("#title-wrapper h3 a");
//   let link="https://www.youtube.com"+await page.evaluate(function(ele){
//     return ele.getAttribute("href");
//   },cards[0]);
//   console.log(link);
  

//   await page.close();
//   await newpage.type(".Igw0E.IwRSH.eGOV_.vwCYk.ItkAi",link);
//   await newpage.keyboard.press("Enter");
//   await newpage.type(".Igw0E.IwRSH.eGOV_.vwCYk.ItkAi","Check out this video.You will love it");
//   await newpage.keyboard.press("Enter");
//}


     
    

     


  


  
  
  
})();
 