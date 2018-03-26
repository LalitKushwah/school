import {Component, ViewChild} from '@angular/core';
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
  options;

  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {
    this.dd = {
      header: {text:'Name of School ___________________  \n Session 2018-19', style: 'header'},
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
    this.options=[1,2,3,4];

    for(let question of this.questionList) {
      this.dd.content.push({text: question.question, style: 'question'}, {
        ol: [{text: question.option1},
          {text: question.option2},
          {text: question.option3},
          {text: question.option4}], style: 'options'
      });
    }
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
          placeholder: 'Enter First option',

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

    this.questionList.forEach( item => {
    this.dd.content.push({text: item.question, style: 'question'}, {ol: [{text: item.options[0]},
      {text: item.options[1]},
      {text: item.options[2]},
      {text: item.options[3]}], style: 'options'});
    });
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(this.dd).download();
  }

  ionViewDidEnter() {
    console.log('IonViewDidEnter');
    this.questionList = [
      {question: 'I am ____ years old.', options:['6','7','8','9']},
      {question: 'We love to play with friends and _________', options:['Boys','Girls','All of the above','None of the above']},
      {question: 'The color of browny is ___________', options:['Black','Brown','Red','White']},
      {question: 'Nonu was _______ months old', options:['3','4','5','6']},
      {question: 'Chunky loved to jump from ____________', options:['Building','Tree','All of the above','None of the above']},
      {question: 'Opposite of "GOOD" is : ', options:['Bad','Better','Worse','Doog']},
      {question: 'Opposite of "COME" is : ', options:['Go','Went','In','Out']},
      {question: 'Opposite of "EAST" is : ', options:['West','North','South','None']}
      ];
  }

  getData(question,one,two,three,four, index) {
    console.log(question);
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    let data = {};
    data['question'] = question;
    data['options'] = [one, two, three, four];
    this.questionList[index] = data;
  }
}
