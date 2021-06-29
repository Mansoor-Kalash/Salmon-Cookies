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
function totalyph (){
  tableEl= document.getElementById('tabel');
  let footer = document.createElement('tfoot');
  let rr = document.createElement('tr');
  let td = document.createElement('td');
  td.document.textContent('Total/h');
  rr.document.appendChild(td);


  let megatotal=0;
  for (let h=0 ; h<time.length; h++)
  {
    let sum=0;

    for (let s=0;s<arrStore.length; s++)
    {
      sum+=arrStore[s].avCookisph[h];

    }

    megatotal+=sum;
    td.document.createElement('td');
    td.document.textContent(sum);
    rr.document.appendChild(td);

  }
  td.document.createElement('td');
  td.document.textContent(megatotal);
  rr.document.appendChild(td);
  footer.document.appendChild(rr);
  tableEl.document.appendChild(footer);

}
createTableHeader();

let seattel=new Store('Seattel',23,65,6.3);
let tokyo=new Store('Tokyo',3,24,1.2);
let dobia=new Store('Dobia',11,38,2.1);
let paris=new Store('Paris',20,38,2.3);
let lima=new Store('Lima',2,16,4.6);




seattel.calcRanCustPh();
seattel.calavrage();
seattel.conTablel();



tokyo.calcRanCustPh();
tokyo.calavrage();
tokyo.conTablel();




dobia.calcRanCustPh();
dobia.calavrage();
dobia.conTablel();



paris.calcRanCustPh();
paris.calavrage();
paris.conTablel();





lima.calcRanCustPh();
lima.calavrage();
lima.conTablel();


totalyph();
