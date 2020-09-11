import { Component, ViewChild, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AnyMxRecord } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('form',{static:true}) form: NgForm;
  isCollapsed = false;
  tweet: any = {};
  tweetgrid: any ={};
  temp: any = {};
ngOnInit()
{
  
   this.tweetgrid = JSON.parse(localStorage.getItem('tweet') || '[]');

   var systemDate = new Date();
   for(var i = 0; i < this.tweetgrid.length; i++) {
     
    var receivedDate = new Date(Date.parse(this.tweetgrid[i].date));
    if(receivedDate > systemDate)
    {
      this.temp+= '<tr><td>' + this.tweetgrid[i].value + '</td>';
      this.temp+= '<td>' + this.tweetgrid[i].date+ '</td></tr>';

    }
   }
  
   document.getElementById("tablegrid").innerHTML = this.temp;
   document.getElementById("tablegrid").innerHTML=document.getElementById("tablegrid").innerHTML.replace("[object Object]","");
   
 
}



  onSubmit(){
  alert("Tweet added successfully!!");
  
  const tweet = JSON.parse(localStorage.getItem('tweet') || '[]');

  if (!tweet.includes(this.tweet)) {
    tweet.push(this.tweet);
    localStorage.setItem('tweet', JSON.stringify(tweet));
  }
  window.location.reload();
  

  }
}
