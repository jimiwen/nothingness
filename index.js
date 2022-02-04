  // these are the variables you can use as inputs to your algorithms
  console.log(fxhash)   // the 64 chars hex number fed to your algorithm
  console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

  // note about the fxrand() function
  // when the "fxhash" is always the same, it will generate the same sequence of
  // pseudo random numbers, always

  //----------------------
  // defining features
  //----------------------
  // You can define some token features by populating the $fxhashFeatures property
  // of the window object.
  // More about it in the guide, section features:
  // [https://fxhash.xyz/articles/guide-mint-generative-token#features]
  //
  // window.$fxhashFeatures = {
  //   "Background": "Black",
  //   "Number of lines": 10,
  //   "Inverted": true
  // }

  // this code writes the values to the DOM as an example
  // const container = document.createElement("div")
  // container.innerText = `
  //   random hash: ${fxhash}\n
  //   some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
  // `
  // document.body.prepend(container)
  let nothing = [];
  let nox = [];
  let nox2 = [];
  let nox3 = [];
  let colorsfull = {
  //   blue: ['#1E3448','#1E3998','#0E3778','#1E3008'],
  // //  red: ['#5E3448','#5E3998','#3E3778','#5E3008'],
  //  white: ['#E2E2E2','#DBDCDE','#DDD4DC','#F3EAE4'],
  //   green: ['#5B9534','#34954B','#0DAB7E','#83A74B'],
  //     pink: ['#9E3448','#9E3998','#9E3778','#9E3008']
  //RustnBlue: ['#152745','#1c1a1c','#2e1a15','#161317'],
  RustnBlue: ['#152745','#1a1919','#361812','#1b181c'],
  //  red: ['#5E3448','#5E3998','#3E3778','#5E3008'],
  BlackonMaroon: ['#210f1a','#300b15','#150e17','#0f0c0a'],
  BlackonGrey: ['#3c3b3d','#2f3030','#303133','#bdb9b9'],
  RoyalRedandBlue: ['#c74f30','#bf496f','#1f5e91','#9E3008'],
  OrangeRedandYellow: ['#ff6f2e','#fa5252','#f26d4b','#f7926d'],
  BlueGreenBrown:[ '#2a495e','#305753','#495259','#2c2e30']
  }
  let colorstyle= Xrandom(0,1);

  //console.log(colorstyle)

  if (colorstyle<0.1){
     colors = colorsfull.RustnBlue;
  }else if(colorstyle<0.2){
     colors = colorsfull.BlackonMaroon;
  }else if (colorstyle<0.24) {
   colors = colorsfull.BlackonGrey;
 }else if(colorstyle<0.5) {
    colors = colorsfull.RoyalRedandBlue;
  }else if (colorstyle<0.8){
    colors= colorsfull.OrangeRedandYellow;
  }else{
    colors= colorsfull.BlueGreenBrown;
  }





  let stampunder=Xrandom(1,8);
  let nonabstract2=Xrandom(0,1)
  let nonabstract1=Xrandom(0,3)
  let pieweight= Xrandom(8,40);

  let piestyle =Xrandom(0,1);
  let pieyinyang =Xrandom(0.1,1);


  console.log(pieweight)

  console.log(piestyle)

  let hengweight= Xrandom(13,28.2);
  let hengstyle =Xrandom(0,1);
  let hengyinyang =Xrandom(0.1,1);
  let shuweight= Xrandom(0.2,22.2);
  let shustyle =Xrandom(0,1);
  let shuyinyang =Xrandom(0.1,1);
  let dianweight= Xrandom(1.2,8.2);
  let dianstyle =Xrandom(0,1);
  let dianyinyang =Xrandom(0.1,1);

  let pieweight2= Xrandom(3,25);
  let piestyle2 =Xrandom(0,1);
  let pieyinyang2 =Xrandom(0.1,1);
  let hengweight2= Xrandom(3,12.2);
  let hengstyle2 =Xrandom(0,1);
  let hengyinyang2 =Xrandom(0.1,1);
  let shuweight2= Xrandom(12.2,32.2);
  let shustyle2 =Xrandom(0,1);
  let shuyinyang2 =Xrandom(0.1,1);
  let dianweight2= Xrandom(1.2,8.2);
  let dianstyle2 =Xrandom(0,1);
  let dianyinyang2 =Xrandom(0.1,1);

  //let shuyinyang=fxrand(0);
  //console.log(shuyinyang)

  function Xrandom(x,y){
    return (y-x)*fxrand()+x;
  }

  function getYingstyle(value){
    if (value<0.4) return "high"
    else return "low"
  }

function getPalette(colorstyle){
  if (colorstyle<0.1) return "Rust and Blue"
  else if(colorstyle<0.2) return "Black on Maroon"
  else if (colorstyle<0.24) return "Black on Grey"
  else if(colorstyle<0.5) return "Royal Red and Blue"
  else if (colorstyle<0.8) return "Orange Red and Yello"
  else return "Blue Green Brown"
}

  function getBodyBlocks(pieweight,piestyle,nonabstract1){
    if (nonabstract1<0.1) return "Not Applicable"
    else if (pieweight>20 & piestyle<0.65) return "Quiet"
    else if (pieweight>20 & piestyle>0.65) return "Bold"
    else if (pieweight<20 & piestyle>0.65) return "Busy"
    else return "Busy"
  }

  function getBodyAbstract(value){
    if (value<0.1) return "D+"
    else return "F"
  }

  function getFootnoteAbstract(value){
    if (value<0.1) return "Tasting"
    else return "Too Much"
  }

  function getdianSize(value,nonabstract1){
    if (nonabstract1<0.1) return "Not Applicable"
    else if (value<1) return "Tiny"
    else if (value<4) return "Medium"
    else return "Big"
  }

  // let feat={}
  // feat.yingstyle="high"
  // window.$$fxhashFeatures=feat;

  window.$fxhashFeatures = {
    "Legibility": getBodyAbstract(nonabstract1),
    "Wine": getFootnoteAbstract(nonabstract2),
    "Mood": getBodyBlocks(pieweight,piestyle,nonabstract1),
    "Bubble": getdianSize(dianweight,nonabstract1),
    "Palette": getPalette(colorstyle)
  }

  console.log(getBodyAbstract(nonabstract1),getFootnoteAbstract(nonabstract2))

  console.log(getBodyBlocks(pieweight,piestyle,nonabstract1),getdianSize(dianweight,nonabstract1))

console.log(getPalette(colorstyle))

  function setup() {
  //  createCanvas(windowWidth, windowHeight);
    createCanvas(1200, 1100);
  randomSeed(int(fxrand()*100000000));
  //colorMode('RGB')
  //randomSeed(1233);
    nothing.stoke = [
      "pie",
      "heng",
      "heng",
      "shu",
      "shu",
      "shu",
      "shu",
      "heng",
      "dian",
      "dian",
      "dian",
      "dian",
    ];

    nothing.xpos = [40, 50, 35, 40, 55, 70, 90, 33, 33, 50, 70, 90];
    nothing.ypos = [15, 15, 35, 30, 30, 30, 30, 50, 65, 65, 65, 62];
    nothing.r = [0.5, 0.4, 0.4, 0.4, 0.3, 0.2, 0.2, 0.5, 0.6, 0.4, 0.4, 0.6];
    nothing.theta = [320, 315, 280, 295, 305, 0, 45, 245, 225, 200, 165, 130];
    nothing.centre = [50, 55];
    nothing.width = [110+20];
    nothing.c = [255, 133];

    //十二列字
    for (p = 0; p < 12; p++) {
      // 一列十二個字
      for (i = 0; i < 12; i++) {
        let k = 0;
        let m = 0;
        // 十二筆畫
        while (k < 12) {
          if (random(0, 1) < 0.27) {
            m = round(11 * random(0, 1));
          } else {
            m = k;
          }
          nox[p * 12 * 12 + 12 * i + k] = new Caligraphy(
            nothing.r[k],
            nothing.theta[k],
            nothing.stoke[m],
            nothing.centre[0] + 1200 - 90 * p - 120,
            nothing.centre[1] + 90 * i,
            nothing.width[0],
            nothing.c[0]
          );
          //   print("p", p);
          //  print("i", i);
          //  print("k", k);

          k = k + 1;
        }
      }
    }

    //落款
    for (let p = 0; p < 1; p++) {
      for (let i = 0; i < 12; i++) {
        let k = 0;
        let m = 0;
        //十二個筆畫
        while (k < 12) {
          if (random(0, 1) < 0.7) {
            m = round(random(0, 11));
          } else {
            m = k;
          }
          nox2[12 * i + k + 12 * 12 * p] = new Caligraphy(
            nothing.r[k],
            nothing.theta[k],
            nothing.stoke[m],
            nothing.centre[0],
            nothing.centre[1] - 35 + 300 + 62 * (i + 12 * p),
            nothing.width[0] * 0.3,
            nothing.c[0]
          );
          // print("i", i);
          // print("k", k);
          k = k + 1;
        }
      }
    }
    for (let p = 0; p < 12; p++) {  // 12字 用印
      let pp = p * random(1, 100);
      let qq = p * random(1, 100);
      for (let i = 0; i < 12; i++) {  //3個字
        let k = 0;
        while (k < 12) {        // 12筆畫
          if (random(0, 1) < 0.47) {
            m = round(random(0, 11));
          } else {
            m = k;
          }
          nox3[k + 12 * i + 12 * 12 * p] = new Caligraphy(
            nothing.r[k],
            nothing.theta[k],
            nothing.stoke[m],
            nothing.centre[0] + 40  - random(-1,1)*10 * i + random(-1,1)*pp - 0.2 * qq,
            nothing.centre[1] + 950 + random(-1,1)*20 * i - random(-1,1)*qq + 0.2 * pp,
            nothing.width[0] * random(0.2, 1.5),
            nothing.c[1]
          );

          k = k + 1;
        }
      }
    }
  }

  function draw() {
    background(random([colors[0],colors[1],colors[2]]));
    // print(nothing.xpos[1]);
    // print(nothing.stoke.length);
    // print(nothing);





  //console.log(hengyinyang)
    for (i = 0; i < nothing.stoke.length; i++) {
      let k = 0;
      while (k < 12) {
        if (random(0, 1) < 0.61) {
          if (nonabstract2<0.1){
            nox2[12 * i + k].show2()
          }else{
            nox2[12 * i + k].show(pieweight2,piestyle2,pieyinyang2,hengweight2,hengstyle2,hengyinyang2,shuweight2,shustyle2,shuyinyang2,dianweight2,dianstyle2,dianyinyang2);
          }
        } else {
        }
        k = k + 1;
      }
    }




     let k_stamp = 12*12*12-1;
    while (k_stamp > stampunder*12* 12) {
      if (random(0, 1) < 0.008) {
        nox3[k_stamp].stamp();
      } else {
      }
      k_stamp = k_stamp -1;
    }



    for (p = 0; p < 12; p++) {
      for (i = 0; i < nothing.stoke.length; i++) {
        let k = 0;
        while (k < 12) {
          if (random(0, 1) < 1 - p / 32 - i / 32) {

  if(nonabstract1<0.1){
    nox[i + 12 * k + p * 12 * 12].show2()
  } else{
    nox[i + 12 * k + p * 12 * 12].show(pieweight,piestyle,pieyinyang,hengweight,hengstyle,hengyinyang,shuweight,shustyle,shuyinyang,dianweight,dianstyle,dianyinyang);

  }

          } else {
          }
          k = k + 1;
        }
      }
    }


      // for (let k=60; k<1140;k+=5){
      //   for (let p=30;p<1060;p+=5){
      //     cc=255;
      //     stroke(255);
      //     strokeWeight(random(0.3,1));
      //     noFill()
      //     ellipse(k,p,random(0,2))
      //   }
      // }


  console.log(k_stamp)
    while (k_stamp >0) {
      if (random(0, 1) < 0.008*random(0.1,0.8)) {

        nox3[k_stamp].stamp();
        //nox3[k].show();
      } else {
      }
    k_stamp = k_stamp -1;
    }



    //  print("p",p);
    //  print("i",i);
    //  print("k",k)
    noLoop();
    //print(nox[1]);
  //save("nothing");
  }

  class Caligraphy {
    constructor(r, theta, stoke, x1, y1, w, c) {
      let rr = r + randomGaussian(0, 0.1);
      let ttheta = theta + randomGaussian(0, 0.1);
      this.xpos = x1 + rr * sin((ttheta * PI) / 180) * 0.5 * w;
      this.ypos = y1 - rr * cos((ttheta * PI) / 180) * 0.5 * w;
      this.stoke = stoke;
      this.w = w;
      this.c = c;
    }
    show(pieweight,piestyle,pieyinyang,hengweight,hengstyle,hengyinyang,shuweight,shustyle,shuyinyang,dianweight,dianstyle,dianyinyang) {
      noStroke();
    //  let c = this.c;
      // if (c == 255) {
      // } else {
      //   colorMode(HSB, 100);
      //   c = color((0 * 100) / 360, 90, 70);
      //   //fill(c);
      // }
      let x, y, w;
      w = 3 + (this.w / 110) * random(0, 2) + (this.w / 110) * random(0, 2);


      if (this.stoke == "pie") {
        let gradpieX=random(1,5) //avg 2
        let gradpieY=random(1,5) //avg 2
        let bubblesize=(w*random(4,20));
        for (let i = 0; i < round(66 * (this.w / 110)); i+=4*pieweight*random(0.9,1.5)) {
          let x = this.xpos - i * gradpieX+random(0,5);
          let y = this.ypos + i * gradpieY+random(0,5);

        //
        //   if(random(0,1)<0.3){
        //     strokeWeight(random(0.1,2))
        //     noFill()
        //   } else {
        //     noFill()
        //     strokeWeight(random(0.1,2))
        //     stroke(255 )
        //   }
        //   ellipse(x, y, (round(66 * (this.w / 110))-i)/round(66 *(this.w / 110))*bubblesize);
        // }

        if(random(0,1)<pieyinyang){
          fill(colors[2])
          stroke(colors[1])
          strokeWeight(random(0.1*pieweight,0.2*pieweight))

        } else {
       noFill()
          stroke(colors[1])
          //stroke(0)
          fill(colors[0])
          strokeWeight(random(0.1*pieweight,0.2*pieweight))
        }

        if (piestyle<0.3){
          fill(colors[1])
      } else if (piestyle<0.65){
         fill(colors[2])
        }else {
          noFill()
        }
        let piesize= (round(66 * (this.w / 110))-i)/round(66 *(this.w/ 110))*(w+random(4,w*1.5*pieweight));
        rect(x, y,random(0.5,2)*piesize,random(0.5,2)*piesize);
      }
      for (let i = 0; i < round(66 * (this.w / 110)); i+=5*pieweight*random(1,1.5)){
        let x = this.xpos + i * 2+random(0,5);
        let y = this.ypos + i * 0+random(0,5);
    //    fill(255)
        strokeWeight(random(0.1,2))
      //  stroke(random([colors.normal[0],colors.normal[0]]))
        // noFill()
        rect(x, y, random(0.5,2)*(w+pieweight),random(0.5,2)*(w+pieweight));

        //  print("heng", w);
      }




        // for (let i = 0; i < round(106 * (this.w / 110)); i+=random(2,5)){
        //   let x = this.xpos - i * 2+random(0,5);
        //   let y = this.ypos + i * 2+random(0,5);
        //   //fill(0)
        //   strokeWeight(random(0.1,2))
        //   stroke(0)
        //   noFill()
        //   ellipse(x, y, 0.5*(w+random(0,38)));
        //   //  print("pie", y);
        // }


      } else if (this.stoke == "heng") {
        for (let i = 0; i < round(150 * (this.w / 110)); i+=5*hengweight*random(0.8,1.5)) {
          let x = this.xpos + i * 2+random(0,5);
          let y = this.ypos + i * 0+random(0,5);

          if(random(0,1)<hengyinyang){

            stroke(colors[0])
            strokeWeight(random(0.1*hengweight,0.2*hengweight))

          } else {
         noFill()

            stroke(colors[1])
          //  fill(0)
            strokeWeight(random(0.1*hengweight,0.2*hengweight))
          }

          if (hengstyle<0.3){
          //  fill(255)
        } else if (hengstyle<0.45){
          //  fill(0)
          }else {
            noFill()
          }
          line(x, y, x+1*(w*random(4,w+2*hengweight)),y);
        }
        for (let i = 0; i < round(150 * (this.w / 110)); i+=8*hengweight*random(0.8,1.5)){
          let x = this.xpos + i * 2+random(0,5);
          let y = this.ypos + i * 0+random(0,5);
      //    fill(255)
          strokeWeight(random(0.1,2))
    //  stroke(random([colors.normal[0],colors.normal[1]]))
          // noFill()
          line(x, y, x+1*(w*random(4,w+2*hengweight)),y);
          //  print("heng", w);
        }




      } else if (this.stoke == "shu") {
        for (let i = 0; i < round(75 * (this.w / 110));  i+=4*shuweight*random(0.8,4.5)) {
          let x = this.xpos + i * 0+random(0,5);
          let y = this.ypos + i * 2+random(0,5);


          if(random(0,1)<shuyinyang){

            stroke(colors[0])

            strokeWeight(random(0.1*shuweight,0.2*shuweight))

          } else {
         noFill()

              stroke(colors[1])

            strokeWeight(shuweight*random(0.1,1))
          }

          if (shustyle<0.3){
          //  fill(255)
        } else if (shustyle<0.65){
          //  fill(0)
          }else {
            noFill()
          }
          line(x, y,x+ 0*(w+random(4,w+2*shuweight)),y+1*(w+random(4,w+2*shuweight)));
        }

        for (let i = 0; i < round(75 * (this.w / 110))*random(0.1,1); i+=6*shuweight*random(0.8,4.5)){
          let x = this.xpos + i * 2+random(0,5);
          let y = this.ypos + i * 0+random(0,5);
      //    fill(255)
          strokeWeight(shuweight*random(0.1,1))
  //  stroke(random([colors.normal[0],colors.normal[1]]))
          // noFill()
          line(x, y,x+ 0*(w+random(4,w+2*shuweight)),y+5*(w+random(4,w+2*shuweight)));

          //   print("shu", w);
        }



      } else if (this.stoke == "dian") {
        for (let i = 0; i < round(15 * (this.w / 110)); i+=5*dianweight*random(0.8,1.5)) {
          let x = this.xpos + i * 0+random(0,5);
          let y = this.ypos + i * 2+random(0,5);


          if(random(0,1)<dianyinyang){

            stroke(colors[0])
            fill(colors[1])
            strokeWeight(random(0.1*dianweight,0.2*dianweight))

          } else {
         noFill()

            stroke(colors[1])
            fill(colors[2])
            strokeWeight(random(0.1*dianweight,0.2*dianweight))
          }

          if (dianstyle<0.15){
            fill(colors[1])
        } else if (dianstyle<0.65){
            fill(colors[2])
          }else {
            noFill()
          }
          ellipse(x, y, 1*(w+random(1,w+2*dianweight)));
        }
        for (let i = 0; i < round(15 * (this.w / 110)); i+=9*dianweight*random(0.8,1.5)){
          let x = this.xpos + i * 2+random(0,5);
          let y = this.ypos + i * 0+random(0,5);
      //    fill(255)
          strokeWeight(random(0.1,2))
        //  stroke(0)
          // noFill()
          ellipse(x, y, 1*(w+random(1,w+2*dianweight)));

          //    print("dian", w);
        }
      } else {
      }
    }



    show2() {
      noStroke();
      fill(random([colors[0],colors[1],colors[2],colors[3]]));
      //let c = this.c;
      // if (c == 255) {
      // } else {
      //   colorMode(HSB, 100);
      //   c = color(0*100/360, 90, 70);
      //   fill(c);
      // }
      let x, y, w;
      w = 3 + (this.w / 110) * random(0, 2) + (this.w / 110) * random(0, 2);
      if (this.stoke == "pie") {
        for (let i = 0; i < round(6 * (this.w / 110)); i++) {
          let x = this.xpos - i * 2;
          let y = this.ypos + i * 2;
          ellipse(x, y, w);
          //  print("pie", y);
        }
      } else if (this.stoke == "heng") {
        for (let i = 0; i < round(20 * (this.w / 110)); i++) {
          let x = this.xpos + i * 2;
          let y = this.ypos + i * 0;
          ellipse(x, y, w);
          //  print("heng", w);
        }
      } else if (this.stoke == "shu") {
        for (let i = 0; i < round(5 * (this.w / 110)); i++) {
          let x = this.xpos + i * 0;
          let y = this.ypos + i * 2;
          ellipse(x, y, w);
          //   print("shu", w);
        }
      } else if (this.stoke == "dian") {
        for (let i = 0; i < round(3 * (this.w / 110)); i++) {
          let x = this.xpos + i * 0;
          let y = this.ypos + i * 2;
          ellipse(x, y, w);
          //    print("dian", w);
        }
      } else {
      }
    }

    stamp() {
      let stampdepth= random(3,6);
      let c = this.c;
      if (c == 255) {
      } else {
        colorMode(HSB, 100);
        c = color((random(0,360) * 100) / 360, 90, 70, 128);
      }
      noStroke();
      let stampspace =60;
      let gg = random(0,1);
      let gx,gy;
      if (gg < 0.5){
         gx=1;
         gy=1;
      }
      else if (gg < 0.8) {
        gx= 3;
        gy =0;
      }
      else {
        gx=0;
        gy=3;
      }

      let m= random(0,2)
      if (m <0.6){

        stroke(c);
        strokeWeight(random(0.2,3));
        noFill(c);

        for (let k =0;k<stampdepth;k++ ){
          let  ww=this.w+random(3,20);
          let xx= this.xpos+k*stampspace*gx+random(1,130);
          let yy=this.ypos-k*stampspace*gy+random(1,130);
          circle(xx , yy, ww);

        }
      }
      else if (m<1&m>0.4){
        stroke(c);
        strokeWeight(random(0.2,3))
        noFill(c);
        for (let k =0;k<stampdepth;k++ ){
          let  ww=this.w+random(3,20);
          let xx= this.xpos+k*stampspace*gx+random(1,130);
          let yy=this.ypos-k*stampspace*gy+random(1,130);
          rect(xx, yy, ww,ww);
        }
      }
      else {
        noStroke();
      }

      let x, y, w;
      w = 3 + (this.w / 110) * random(0, 2) + (this.w / 110) * random(0, 2);
      if (this.stoke == "pie") {
        for (let i = 0; i < round(6 * (this.w / 110)); i++) {
          let x = this.xpos - i * 2;
          let y = this.ypos + i * 2;


          //  erase();

          for (let k=0; k<stampdepth; k++ ){
          let xx = x+ gx*stampspace*k+random(0,3);
          let yy = y- gy*stampspace*k+random(0,3);
          let ww = w ;
          ellipse(xx, yy, ww+random(0,1),ww+random(0,1));
        }

          // noErase();
          //  print("pie", y);
        }
      } else if (this.stoke == "heng") {
        for (let i = 0; i < round(20 * (this.w / 110)); i++) {
          let x = this.xpos + i * 2;
          let y = this.ypos + i * 0;

          fill(c);
          //  erase();
          for (let k=0; k<stampdepth; k++ ){
          let xx = x+ gx*stampspace*k+random(0,3);
          let yy = y- gy*stampspace*k+random(0,3);
          let ww = w ;
          ellipse(xx, yy, ww+random(0,1),ww+random(0,1));
        }
          //  noErase();
          //  print("heng", w);
        }
      } else if (this.stoke == "shu") {
        for (let i = 0; i < round(5 * (this.w / 110)); i++) {
          let x = this.xpos + i * 0;
          let y = this.ypos + i * 2;

          fill(c);
          //  erase();
          for (let k=0; k<stampdepth; k++ ){
          let xx = x+ gx*stampspace*k+random(0,3);
          let yy = y- gy*stampspace*k+random(0,3);
          let ww = w ;
          ellipse(xx, yy, ww+random(0,1),ww+random(0,1));
        }
          //   noErase();
          //   print("shu", w);
        }
      } else if (this.stoke == "dian") {
        for (let i = 0; i < round(3 * (this.w / 110)); i++) {
          let x = this.xpos + i * 0;
          let y = this.ypos + i * 2;

          fill(c);
          //  erase();
          for (let k=0; k<stampdepth; k++ ){
          let xx = x+ gx*stampspace*k+random(0,3);
          let yy = y- gy*stampspace*k+random(0,3);
          let ww = w ;
          ellipse(xx, yy, ww+random(0,1),ww+random(0,1));
        }
          // noErase();
          //    print("dian", w);
        }
      } else {
      }
    }
  }
