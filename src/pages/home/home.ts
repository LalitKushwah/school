import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import  pdfMake from 'pdfmake/build/pdfmake';
import  pdfFonts from 'pdfmake/build/vfs_fonts';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  questionList:any=[];
  question:any={};
  dd;


  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {
    this.dd = {
      header: {text:'Test Paper', style: 'header'},
      content: [],

      styles: {
        header: {
          fontSize: 22,
          alignment:'center',
          bold: true,

        },
        question: {
          fontSize: 18,
          alignment: 'left',
          margin: [0, 20, 0, 20]
        },
        options: {
          fontSize: 16,
          alignment: 'left'
        }
      }
    };
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
            this.dd.content.push({text: this.question.question, style: 'question'}, {ol: [{text: this.question.option1},
              {text: this.question.option2},
              {text: this.question.option3},
              {text: this.question.option4}], style: 'options'});
          }
        }
      ]
    });
    prompt.present();

  }

  downloadPDF() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(this.dd).download();
  }
}
