import { Component, OnInit, AfterViewInit } from '@angular/core';
import  { Injectable } from "@angular/core"
import { Http } from '@angular/http';

declare let $:any;
// import * as $ from 'jquery';

@Injectable()
@Component({
  selector: 'app-form',
  templateUrl: './-form.component.html',
  styleUrls: ['./-form.component.less']
})
export class FormComponent implements OnInit, AfterViewInit {

  constructor(private http: Http) { }

  ngAfterViewInit(){}

  ngOnInit() {
    // $(document).ready(function(){

      var app = {
        initialize : function (){
          app.setUpListeners();
        },
        setUpListeners: function () {
          $('#form_confirm').on('click', app.submitForm);
          $('#form').on('keydown', 'input,textarea', app.removeError);
        },
        submitForm: function (e) {
          e.preventDefault();
          var form = $('#form');
          var submitBtn = $('#form_confirm');
          if(app.validateForm(form) === false) return false;
          submitBtn.attr('disabled', 'disabled');//выключить повторное нажатие
          var ansver = $('#ansver_server');
          var str = form.serialize();
console.log(str);
          $.ajax({
            url: 'js/post.php',
            type: 'POST',
            data: str
          })
            .done(function (msg) {
              switch (msg){
                case '0':
                  var result = "<div>Спасибо, мы Вам перезвоним!</div>";
                  ansver.html(result);
                  form[0].reset();  //очистить форму
                  break;
                case '1':
                  var phoneError = "<div>Номер введен неправильно!</div>";
                  $('#edit-number').addClass('has-error').removeClass('has-success');
                  ansver.html(phoneError);
                  break;
                case '11':
                  var emailError = "<div>Email введен неправильно!</div>";
                  $('#edit-email').addClass('has-error').removeClass('has-success');
                  ansver.html(emailError);
                  break;
                case '111':
                  var phoneEmailError = "<div>Номер и email введенны неправильно!</div>";
                  $('#edit-number').addClass('has-error').removeClass('has-success');
                  $('#edit-email').addClass('has-error').removeClass('has-success');
                  ansver.html(phoneEmailError);
                  break;
                default:
                  ansver.html(msg);
                  break;
              }
            })
            .fail(function (msg) {
              console.log('fail',msg);
            })
            .always(function (msg) {
              submitBtn.removeAttr('disabled'); //включить кнопку
            })



        },
        validateForm: function (form) {
          var inputs =  form.find('input'),
            valid = true;
          $.each(inputs, function(index, val) {
            var input = $(val),
              val = input.val(),
              formGroup = input,
              label = formGroup.attr('placeholder').toLowerCase(),
              textError = 'Введите ' + label;
            if (val.length === 0 ) {
              formGroup.addClass('has-error').removeClass('has-success');
              input.tooltip({
                trigger: 'manual',
                placement: 'top',
                title: textError
              }).tooltip('show');
              valid = false;
            }else{
              formGroup.addClass('has-success').removeClass('has-error');
            }
          });
          var textarea =  form.find('textarea'),
            val1 = textarea.val(),
            formGroup1 =  textarea,
            // label1 = formGroup1.parents('.form-item').find('label').text().toLowerCase(),
            label1 = formGroup1.attr('placeholder').toLowerCase(),
            textError1 = 'Введите ' + label1;
          // textarea.tooltip('destroy');
          if (val1.length === 0 ) {
            formGroup1.addClass('has-error').removeClass('has-success');
            textarea.tooltip({
              trigger: 'manual',
              placement: 'top',
              title: textError1
            }).tooltip('show');
            valid = false;
          }else{
            formGroup1.addClass('has-success').removeClass('has-error');
          }
          return valid;
        },
        removeError: function () {
          $(this).tooltip();
          $(this).removeClass('has-error').tooltip('destroy');
          $(this).tooltip();
        }
      };
      app.initialize();
    // });
  }
}
