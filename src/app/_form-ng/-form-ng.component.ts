import { Component, OnInit } from '@angular/core';
import { ServiceForm } from "../shared/-service.form";


@Component({
  selector: 'app--form-ng',
  templateUrl: './-form-ng.component.html',
  styleUrls: ['./-form-ng.component.less'],
  providers: [ServiceForm]
})
export class FormNgComponent implements OnInit {

  newName = '';
  newEmail = '';
  newNumber = '';
  newComment = '';
  receivedUser = '';
  connect: boolean = false;

  constructor(private httpService: ServiceForm) { }


  emailVal = {
    name:this.newEmail,
    valid:''
  };
  numberVal = {
    name:this.newNumber,
    valid:false
  };

  ngOnInit() {
  }

  onSumbit(value:any) {


    this.httpService.postData(value)
        .subscribe(
            data => {data = data.text();this.receivedUser = data;this.connect = true;
              switch (data){
                case '0':
                  this.receivedUser = "Спасибо, мы Вам перезвоним!";
                  break;
                case '1':
                  this.receivedUser = "Номер введен неправильно!";
                  this.numberVal.valid = false;
                  // $('#edit-number').addClass('has-error').removeClass('has-success');
                  break;
                case '11':
                  this.receivedUser = "Email введен неправильно!";
                  // $('#edit-email').addClass('has-error').removeClass('has-success');
                  break;
                case '111':
                  this.receivedUser = "Номер и email введенны неправильно!";
                  // $('#edit-number').addClass('has-error').removeClass('has-success');
                  // $('#edit-email').addClass('has-error').removeClass('has-success');
                  break;
                default:
                  this.receivedUser = 'произошла ошибка ' + data ;
                  break;
              }
            },
            error =>  console.log("Error happened" + error),
            () =>  console.log("the subscription is completed")
        );

  }
}
