'use strict';
let time = ['6am','7am','8am','9am','10am','11am','12pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let div = document.getElementById('s');
let img = document.createElement('img');
img.setAttribute('src', '/img/salmon.png');
div.appendChild(img);
let arrStore=[];
function Store ( nameShop, min,max,avrc,rand=[],avCookisph=[]){
  this.nameShop=nameShop;
  this.min=min;
  this.max=max;
  this.avrc=avrc;
  this.rand=rand;
  this.avCookisph=avCookisph;
  this.total= 0,
  arrStore.push(this);
}
Store.prototype.calcRanCustPh=function(){
  for (let i =0; i<time.length; i++)
  {
    let min = Math.ceil(this.min);
    let max = Math.floor(this.max);
    let random = Math.floor(Math.random()*(max-min+1)+min);
    this.rand.push(random);
  }
};
Store.prototype.calavrage=function(){

  for (let i=0;i<time.length;i++)
  {
    for (let i = 0; i < time.length; i++) {
      this.avCookisph[i] = Math.ceil(this.rand[i] * this.avrc);
      this.total += this.avCookisph[i];
    }
  }



};


let section = document.getElementById('s');
let tableEl = document.createElement('table');
section.appendChild(tableEl);

function createTableHeader() {
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let thEl1 = document.createElement('th');
  thEl1.textContent = 'Name';
  trEl.appendChild(thEl1);
  for (let i = 0 ;i<time.length;i++)
  {
    thEl1 = document.createElement('th');
    thEl1.textContent = time[i];
    trEl.appendChild(thEl1);

  }
  thEl1 = document.createElement('th');
  thEl1.textContent = 'total';
  trEl.appendChild(thEl1);

  // let thEl1 = document.createElement('th');
  // thEl1.textContent = 'Name';
  // trEl.appendChild(thEl1);
  // let thEl2 = document.createElement('th');
  // thEl2.textContent = 'age';
  // trEl.appendChild(thEl2);
  // let thEl3 = document.createElement('th');
  // thEl3.textContent = 'is good with kids';
  // trEl.appendChild(thEl3);
  // let thEl4 = document.createElement('th');
  // thEl4.textContent = 'is good with dogs';
  // trEl.appendChild(thEl4);
  // let thEl5 = document.createElement('th');
  // thEl5.textContent = 'is good with cats';
  // trEl.appendChild(thEl5);
}
Store.prototype.conTablel=function(){
  let trEl = document.createElement('tr');

  let thEl1=document.createElement('td');
  thEl1.textContent = this.nameShop;
  trEl.appendChild(thEl1);
  for (let i = 0 ;i<this.rand.length;i++)
  {
    thEl1 = document.createElement('td');
    thEl1.textContent = this.rand[i];
    trEl.appendChild(thEl1);

  }
  thEl1 = document.createElement('td');
  thEl1.textContent = this.total;
  trEl.appendChild(thEl1);
  tableEl.appendChild(trEl);
};
createTableHeader();

let seattel=new Store('Seattel',23,65,6.3);

seattel.calcRanCustPh();
seattel.calavrage();
seattel.conTablel();

let tokyo=new Store('Tokyo',3,24,1.2);

tokyo.calcRanCustPh();
tokyo.calavrage();
tokyo.conTablel();


let dobia=new Store('Dobia',11,38,2.1);

dobia.calcRanCustPh();
dobia.calavrage();
dobia.conTablel();


let paris=new Store('Paris',20,38,2.3);

paris.calcRanCustPh();
paris.calavrage();
paris.conTablel();




let lima=new Store('Paris',2,16,4.6);

lima.calcRanCustPh();
lima.calavrage();
lima.conTablel();


// let seattel ={
//   nameShop:'Seattel',
//   min: 23,
//   max: 65,
//   avrc: 6.3,
//   rand: [],
//   avCookisph : [],
//   total: 0,
//   calrandCph: function ()
//   {
//     for (let i =0; i<time.length; i++)
//     {
//       let min = Math.ceil(this.min);
//       let max = Math.floor(this.max);
//       let random = Math.floor(Math.random()*(max-min+1)+min);
//       this.rand.push(random);


//     }

//   },

//   calAvrage : function()
//   {
//     for (let i=0;i<time.length;i++)
//     {
//       for (let i = 0; i < time.length; i++) {
//         this.avCookisph[i] = Math.ceil(this.rand[i] * this.avrc);
//         this.total += this.avCookisph[i];
//       }
//     }
//   },
//   render : function(){
//     let section = document.getElementById('s');
//     let h2 = document.createElement('h2');
//     h2.textContent = this.nameShop;
//     section.appendChild(h2);


//     let ul = document.createElement('ul');
//     section.appendChild(ul);
//     for (let i = 0; i < time.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${time[i]} ${this.avCookisph[i]} cookies`;
//       ul.appendChild(li);
//     }
//     let tota = document.createElement('li');
//     tota.textContent = 'Total ' + this.total + ' cookies';
//     ul.appendChild(tota);
//   },

// };

// seattel.calrandCph();
// seattel.calAvrage();
// seattel.render();

// let tokyo ={
//   nameShop:'tokyo',
//   min: 3,
//   max: 24,
//   avrc: 1.2,
//   rand: [],
//   avCookisph : [],
//   total: 0,
//   calrandCph: function ()
//   {
//     for (let i =0; i<time.length; i++)
//     {
//       let min = Math.ceil(this.min);
//       let max = Math.floor(this.max);
//       let random = Math.floor(Math.random()*(max-min+1)+min);
//       this.rand.push(random);


//     }

//   },

//   calAvrage : function()
//   {
//     for (let i=0;i<time.length;i++)
//     {
//       for (let i = 0; i < time.length; i++) {
//         this.avCookisph[i] = Math.ceil(this.rand[i] * this.avrc);
//         this.total += this.avCookisph[i];
//       }
//     }
//   },
//   render : function(){
//     let section = document.getElementById('s');
//     let h2 = document.createElement('h2');
//     h2.textContent = this.nameShop;
//     section.appendChild(h2);


//     let ul = document.createElement('ul');
//     section.appendChild(ul);
//     for (let i = 0; i < time.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${time[i]} ${this.avCookisph[i]} cookies`;
//       ul.appendChild(li);
//     }
//     let tota = document.createElement('li');
//     tota.textContent = 'Total ' + this.total + ' cookies';
//     ul.appendChild(tota);
//   },

// };

// tokyo.calrandCph();
// tokyo.calAvrage();
// tokyo.render();




// let dobia ={
//   nameShop:'Dobia',
//   min: 11,
//   max: 38,
//   avrc: 3.7,
//   rand: [],
//   avCookisph : [],
//   total: 0,
//   calrandCph: function ()
//   {
//     for (let i =0; i<time.length; i++)
//     {
//       let min = Math.ceil(this.min);
//       let max = Math.floor(this.max);
//       let random = Math.floor(Math.random()*(max-min+1)+min);
//       this.rand.push(random);


//     }

//   },

//   calAvrage : function()
//   {
//     for (let i=0;i<time.length;i++)
//     {
//       for (let i = 0; i < time.length; i++) {
//         this.avCookisph[i] = Math.ceil(this.rand[i] * this.avrc);
//         this.total += this.avCookisph[i];
//       }
//     }
//   },
//   render : function(){
//     let section = document.getElementById('s');
//     let h2 = document.createElement('h2');
//     h2.textContent = this.nameShop;
//     section.appendChild(h2);


//     let ul = document.createElement('ul');
//     section.appendChild(ul);
//     for (let i = 0; i < time.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${time[i]} ${this.avCookisph[i]} cookies`;
//       ul.appendChild(li);
//     }
//     let tota = document.createElement('li');
//     tota.textContent = 'Total ' + this.total + ' cookies';
//     ul.appendChild(tota);
//   },

// };

// dobia.calrandCph();
// dobia.calAvrage();
// dobia.render();







// let paris ={
//   nameShop:'Paris',
//   min: 20,
//   max: 38,
//   avrc: 2.3,
//   rand: [],
//   avCookisph : [],
//   total: 0,
//   calrandCph: function ()
//   {
//     for (let i =0; i<time.length; i++)
//     {
//       let min = Math.ceil(this.min);
//       let max = Math.floor(this.max);
//       let random = Math.floor(Math.random()*(max-min+1)+min);
//       this.rand.push(random);


//     }

//   },

//   calAvrage : function()
//   {
//     for (let i=0;i<time.length;i++)
//     {
//       for (let i = 0; i < time.length; i++) {
//         this.avCookisph[i] = Math.ceil(this.rand[i] * this.avrc);
//         this.total += this.avCookisph[i];
//       }
//     }
//   },
//   render : function(){
//     let section = document.getElementById('s');
//     let h2 = document.createElement('h2');
//     h2.textContent = this.nameShop;
//     section.appendChild(h2);


//     let ul = document.createElement('ul');
//     section.appendChild(ul);
//     for (let i = 0; i < time.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${time[i]} ${this.avCookisph[i]} cookies`;
//       ul.appendChild(li);
//     }
//     let tota = document.createElement('li');
//     tota.textContent = 'Total ' + this.total + ' cookies';
//     ul.appendChild(tota);
//   },

// };

// paris.calrandCph();
// paris.calAvrage();
// paris.render();





// let lima ={
//   nameShop:'Lima',
//   min: 2,
//   max: 16,
//   avrc: 4.6,
//   rand: [],
//   avCookisph : [],
//   total: 0,
//   calrandCph: function ()
//   {
//     for (let i =0; i<time.length; i++)
//     {
//       let min = Math.ceil(this.min);
//       let max = Math.floor(this.max);
//       let random = Math.floor(Math.random()*(max-min+1)+min);
//       this.rand.push(random);


//     }

//   },

//   calAvrage : function()
//   {
//     for (let i=0;i<time.length;i++)
//     {
//       for (let i = 0; i < time.length; i++) {
//         this.avCookisph[i] = Math.ceil(this.rand[i] * this.avrc);
//         this.total += this.avCookisph[i];
//       }
//     }
//   },
//   render : function(){
//     let section = document.getElementById('s');
//     let h2 = document.createElement('h2');
//     h2.textContent = this.nameShop;
//     section.appendChild(h2);


//     let ul = document.createElement('ul');
//     section.appendChild(ul);
//     for (let i = 0; i < time.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${time[i]} ${this.avCookisph[i]} cookies`;
//       ul.appendChild(li);
//     }
//     let tota = document.createElement('li');
//     tota.textContent = 'Total ' + this.total + ' cookies';
//     ul.appendChild(tota);
//   },

// };

// lima.calrandCph();
// lima.calAvrage();
// lima.render();



