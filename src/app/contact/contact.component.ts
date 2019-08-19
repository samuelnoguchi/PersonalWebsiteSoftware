import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database'
import { fromValue } from 'long';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('f') formValue;
  
  constructor(private db : AngularFireDatabase,private toastr: ToastrService) { }

  ngOnInit() {
  }

  submit(info){
    this.formValue.resetForm();
    this.toastr.success('Thank you!', '', {timeOut: 1500, positionClass: 'toast-bottom-right'});
    
    return this.db.list('/forms').push(info);
    
  }


}
