import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  questionList:any=[];
  question:any={};


  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {
  }

  addQuestion() {
    let prompt = this.alertCtrl.create({
      title: 'Add Question',
      inputs: [
        {
          name: 'question',
          placeholder: 'Please Enter question here',
        },
        {
          name: 'option1',
          placeholder: 'Enter First option'
        },
        {
          name:'option2',
          placeholder: 'Enter second option'
        },
        {
          name:'option3',
          placeholder:'Enter third option'
        },
        {
          name:'option4',
          placeholder:'Enter fourth option'
        }

      ],
      buttons: [
        {
          text: 'Discard',
          handler: data => {

          }
        },
        {
          text: 'Add',
          handler: data => {
            this.question = {'question':data.question,'option1':data.option1,'option2':data.option2,'option3':data.option3,'option4':data.option4}
            this.questionList.push(this.question);
            console.log(this.questionList);
            this.downloadPDF();
          }
        }
      ]
    });
   prompt.present();

   }


  downloadPDF() {

      for(let question of this.questionList) {

        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        let dd = {
          content: [
            {text: 'Test Paper', style: 'header'},
            {text: question.question}
          ],

          styles: {
            header: {
              fontSize: 22,
              alignment:'center',
              bold: true
            }
          }
        };
        pdfMake.createPdf(dd).download();
      }
  }





}
