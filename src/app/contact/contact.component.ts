import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database'
import { fromValue } from 'long';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('f') formValue;
  
  constructor(private db : AngularFireDatabase) { }

  ngOnInit() {
  }

  submit(info){
    this.formValue.resetForm();
    return this.db.list('/forms').push(info);
  }

}
