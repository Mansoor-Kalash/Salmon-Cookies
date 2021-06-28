'use strict';
let time = ['6am','7am','8am','9am','10am','11am','12pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let div = document.getElementById('s');
let img = document.createElement('img');
img.setAttribute('src', '/img/salmon.png');
div.appendChild(img);
let seattel ={
  nameShop:'Seattel',
  min: 23,
  max: 65,
  avrc: 6.3,
  rand: [],
  avCookisph : [],
  total: 0,
  calrandCph: function ()
  {
    for (let i =0; i<time.length; i++)
    {
      let min = Math.ceil(this.min);
      let max = Math.floor(this.max);
      let random = Math.floor(Math.random()*(max-min+1)+min);
      this.rand.push(random);


    }

  },

  calAvrage : function()
  {
    for (let i=0;i<time.length;i++)
    {
      for (let i = 0; i < time.length; i++) {
        this.avCookisph[i] = Math.ceil(this.rand[i] * this.avrc);
        this.total += this.avCookisph[i];
      }
    }
  },
  render : function(){
    let section = document.getElementById('s');
    let h2 = document.createElement('h2');
    h2.textContent = this.nameShop;
    section.appendChild(h2);


    let ul = document.createElement('ul');
    section.appendChild(ul);
    for (let i = 0; i < time.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${time[i]} ${this.avCookisph[i]} cookies`;
      ul.appendChild(li);
    }
    let tota = document.createElement('li');
    tota.textContent = 'Total ' + this.total + ' cookies';
    ul.appendChild(tota);
  },

};

seattel.calrandCph();
seattel.calAvrage();
seattel.render();

let tokyo ={
  nameShop:'tokyo',
  min: 3,
  max: 24,
  avrc: 1.2,
  rand: [],
  avCookisph : [],
  total: 0,
  calrandCph: function ()
  {
    for (let i =0; i<time.length; i++)
    {
      let min = Math.ceil(this.min);
      let max = Math.floor(this.max);
      let random = Math.floor(Math.random()*(max-min+1)+min);
      this.rand.push(random);


    }

  },

  calAvrage : function()
  {
    for (let i=0;i<time.length;i++)
    {
      for (let i = 0; i < time.length; i++) {
        this.avCookisph[i] = Math.ceil(this.rand[i] * this.avrc);
        this.total += this.avCookisph[i];
      }
    }
  },
  render : function(){
    let section = document.getElementById('s');
    let h2 = document.createElement('h2');
    h2.textContent = this.nameShop;
    section.appendChild(h2);


    let ul = document.createElement('ul');
    section.appendChild(ul);
    for (let i = 0; i < time.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${time[i]} ${this.avCookisph[i]} cookies`;
      ul.appendChild(li);
    }
    let tota = document.createElement('li');
    tota.textContent = 'Total ' + this.total + ' cookies';
    ul.appendChild(tota);
  },

};

tokyo.calrandCph();
tokyo.calAvrage();
tokyo.render();




let dobia ={
  nameShop:'Dobia',
  min: 11,
  max: 38,
  avrc: 3.7,
  rand: [],
  avCookisph : [],
  total: 0,
  calrandCph: function ()
  {
    for (let i =0; i<time.length; i++)
    {
      let min = Math.ceil(this.min);
      let max = Math.floor(this.max);
      let random = Math.floor(Math.random()*(max-min+1)+min);
      this.rand.push(random);


    }

  },

  calAvrage : function()
  {
    for (let i=0;i<time.length;i++)
    {
      for (let i = 0; i < time.length; i++) {
        this.avCookisph[i] = Math.ceil(this.rand[i] * this.avrc);
        this.total += this.avCookisph[i];
      }
    }
  },
  render : function(){
    let section = document.getElementById('s');
    let h2 = document.createElement('h2');
    h2.textContent = this.nameShop;
    section.appendChild(h2);


    let ul = document.createElement('ul');
    section.appendChild(ul);
    for (let i = 0; i < time.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${time[i]} ${this.avCookisph[i]} cookies`;
      ul.appendChild(li);
    }
    let tota = document.createElement('li');
    tota.textContent = 'Total ' + this.total + ' cookies';
    ul.appendChild(tota);
  },

};

dobia.calrandCph();
dobia.calAvrage();
dobia.render();







let paris ={
  nameShop:'Paris',
  min: 20,
  max: 38,
  avrc: 2.3,
  rand: [],
  avCookisph : [],
  total: 0,
  calrandCph: function ()
  {
    for (let i =0; i<time.length; i++)
    {
      let min = Math.ceil(this.min);
      let max = Math.floor(this.max);
      let random = Math.floor(Math.random()*(max-min+1)+min);
      this.rand.push(random);


    }

  },

  calAvrage : function()
  {
    for (let i=0;i<time.length;i++)
    {
      for (let i = 0; i < time.length; i++) {
        this.avCookisph[i] = Math.ceil(this.rand[i] * this.avrc);
        this.total += this.avCookisph[i];
      }
    }
  },
  render : function(){
    let section = document.getElementById('s');
    let h2 = document.createElement('h2');
    h2.textContent = this.nameShop;
    section.appendChild(h2);


    let ul = document.createElement('ul');
    section.appendChild(ul);
    for (let i = 0; i < time.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${time[i]} ${this.avCookisph[i]} cookies`;
      ul.appendChild(li);
    }
    let tota = document.createElement('li');
    tota.textContent = 'Total ' + this.total + ' cookies';
    ul.appendChild(tota);
  },

};

paris.calrandCph();
paris.calAvrage();
paris.render();





let lima ={
  nameShop:'Lima',
  min: 2,
  max: 16,
  avrc: 4.6,
  rand: [],
  avCookisph : [],
  total: 0,
  calrandCph: function ()
  {
    for (let i =0; i<time.length; i++)
    {
      let min = Math.ceil(this.min);
      let max = Math.floor(this.max);
      let random = Math.floor(Math.random()*(max-min+1)+min);
      this.rand.push(random);


    }

  },

  calAvrage : function()
  {
    for (let i=0;i<time.length;i++)
    {
      for (let i = 0; i < time.length; i++) {
        this.avCookisph[i] = Math.ceil(this.rand[i] * this.avrc);
        this.total += this.avCookisph[i];
      }
    }
  },
  render : function(){
    let section = document.getElementById('s');
    let h2 = document.createElement('h2');
    h2.textContent = this.nameShop;
    section.appendChild(h2);


    let ul = document.createElement('ul');
    section.appendChild(ul);
    for (let i = 0; i < time.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${time[i]} ${this.avCookisph[i]} cookies`;
      ul.appendChild(li);
    }
    let tota = document.createElement('li');
    tota.textContent = 'Total ' + this.total + ' cookies';
    ul.appendChild(tota);
  },

};

lima.calrandCph();
lima.calAvrage();
lima.render();



