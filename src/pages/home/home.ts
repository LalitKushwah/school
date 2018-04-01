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
  firstValue;
  secondValue;
  thirdValue;
  vowelconsonantfirst;
  vowelconsonantsecond;
  circlethevowelsfirst;
  circlethevowelssecond;
  translateinhindifirst;
  translateinhindisecond;
  matchthecolumnfirst;
  matchthecolumnsecond;
  matchthecolumnthird;
  matchthecolumnfourth;


  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {
    // this.dd = {
    //   header: {text:'Name of School ___________________  \n Session 2018-19', style: 'header'},
    //   content: [],
    //
    //   styles: {
    //     header: {
    //       fontSize: 22,
    //       alignment:'center',
    //       bold: true,
    //
    //     },
    //     question: {
    //       fontSize: 18,
    //       alignment: 'left',
    //       margin: [0, 20, 0, 20]
    //     },
    //     options: {
    //       fontSize: 16,
    //       alignment: 'left'
    //     }
    //   }
    // };
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

    this.dd = {
      content: [
        {text: 'Name of school ___________________________________________', style: 'header', margin: [0,20]},
        {text: 'Class Ist (Evaluation/Term - I)', margin: [0,20]},
        {text: 'Session 2017-18', margin: [0,20]},
        {text: 'Type Written Exam/Test', margin: [0,20]},
        {
          style: 'tableExample',
          table: {
            body: [
              ['Subject', 'Skills', 'Asspects','Max Marks','Marks Obtained'],
              ['English', 'Writing Skills', 'Creative Writing','',''],
              ['English', 'Writing Skills', 'Grammer','',''],
              ['English', 'Writing Skills', 'Vocabulary','',''],
              ['English', 'Writing Skills', 'Hand Writing','',''],
              ['English', 'Writing Skills', 'Spellings','','']
            ]
          }
        },
        {text: 'Roll No:________    Class: ________    Section:________    Duration:________', margin: [0,20]},
        {text: 'Name of Student: _____________________________________________________________', margin: [0,20]},
        {text: 'Name and sign of invigilator:_________________________________________________', margin: [0,20]},

        {
          style: 'tableExample',
          table: {
            widths: ['auto', 'auto', 'auto'],
            headerRows: 1,
            body: [
              [{text: 'Q.No', style: 'tableHeader'}, {text: 'Question', style: 'tableHeader'}, {text: 'M.O/M.M', style: 'tableHeader'}],
              [{text: 'Creative Writing', colSpan: 2},{},{}],
              [{text: '1', rowSpan:13},{ text: 'Write 5 lines (Any 1 out of 3 ) \n' +
              '1 '+this.firstValue+'\n' +
                '2 '+this.secondValue+'\n' +
                '3 '+this.thirdValue+'\n' +
              '_________________________________________________________________________________\n' +
              '_________________________________________________________________________________\n' +
              '_________________________________________________________________________________\n' +
              '_________________________________________________________________________________\n' +
              '_________________________________________________________________________________\n' +
              '_________________________________________________________________________________\n' +
              '_________________________________________________________________________________\n' +
              '_________________________________________________________________________________\n' +
              '_________________________________________________________________________________\n', rowSpan:13},{text: '',rowSpan:13}],
              [{},{text: 'Total (Creative Writing)'},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{text: 'Total (Creative Writing)', alignment: 'right'},{}],

            ]
          }
        }, // Question 1 Creative Writing

        {
          style: 'tableExample',
          table: {
            widths: ['auto', 400, 'auto'],
            headerRows: 1,
            body: [
              [{text: 'Q.No', style: 'tableHeader'}, {text: 'Question', style: 'tableHeader'}, {text: 'M.O/M.M', style: 'tableHeader'}],
              [{text: 'Grammar', colSpan: 2},{},{}],
              [{text: '1'},{ text: 'Write Vowels and Consonants separately. \n\n\n  \n ' +
              '1. '+ this.vowelconsonantfirst +'\n ' +
              'V: _________________\n' +
              'C: _________________' +
              '\n\n 2. '+this.vowelconsonantsecond+' \n ' +
              'V: __________________\n' +
              'C: ___________________'},{text: ''}],


              [{text: '2'},{ text: 'Circle the Vowels:  \n\n\n\n ' +
              '1. ' + this.circlethevowelsfirst +
              '\n\n2. '+this.circlethevowelssecond+'\n '},{text: ''}],


              [{text: '3'},{ text: 'Translate the words in Hindi:   \n\n\n\n ' +
              '1. '+ this.translateinhindifirst+' \n ' +
              '\n\n2.'+ this.translateinhindisecond +'\n '},{text: ''}],


              [{text: '4', rowSpan: 10},{ text: 'Match the words with their Meanings:  \n\n\n\n ' +
              '1. '+ this.matchthecolumnfirst+'\n ' +
              '2. '+ this.matchthecolumnsecond+'\n' +
              '3. '+ this.matchthecolumnthird+'\n' +
              '4. '+ this.matchthecolumnfourth+'\n\n\n\n\n\n\n\n\n\n\n\n', rowSpan: 10},{text: '', rowSpan: 10}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{},{}],
              [{},{text: 'Total (Grammar)', alignment: 'right'},{}],

            ]
          }
        },

        {
          style: 'tableExample',
          table: {
            widths: ['auto', 400, 'auto'],
            headerRows: 1,
            body: [
              [{text: 'Q.No', style: 'tableHeader'}, {text: 'Question', style: 'tableHeader'}, {text: 'M.O/M.M', style: 'tableHeader'}],
              [{text: '5'},[ 'Put the words in 4 different heads of name, place, animal and thing. \n\n\n' +
              'Amit       Pot     India     Mitu     Rabbit  \n '
                , {	table: {
                body: [
                  ['Name', 'Place', 'Animal', 'Thing'],
                  ['\n\n\n', '\n\n\n', '\n\n\n', '\n\n\n'],
                  ['\n\n\n', '\n\n\n', '\n\n\n', '\n\n\n']
                ]
              }}],{text: ''}],


              [{text: '6'},{ text: 'Give Opposites of:  \n\n\n\n ' +
              '1. Good : _______________' +
              '\n\n2.  Come : _________________' +
              '\n\n 3. East : ___________________ '},{text: ''}],


              [{text: '7'},{ text: 'Answer the following Questions:  \n\n\n\n ' +
              '1. Are you a Boy or Girl ? \n\n __________________________________________\n' +
              '\n\n2. List any 2 items that pets like to eat ? \n\n ________________________________________\n' +
              '\n\n 3. Write names of any 2 pet animals. \n\n __________________________________________\n' +
              '\n\n 4. Where did Nonu live? \n\n __________________________________________\n' +
              '\n\n 5. Who took out Sheena\'s Kite. \n\n __________________________________________\n\n\n'},{text: ''}],

              [{text: '8'},{ text: 'Fill in the blanks:  \n\n\n\n ' +
              '1. I am ___________ years old ? \n\n ' +
              '\n\n2. We love to play with friends and _________ \n\n' +
              '\n\n 3. The color of browny is ___________ \n\n ' +
              '\n\n 4. Nonu was _______ months old \n\n' +
              '\n\n 5. Chunky loved to jump from ____________ \n\n'},{text: ''}],


              [{text: '9'},{ text: '\nGood Handwriting \n\n\n Students should write in good handwriting because marks will be allotted for good handwriting'},{text: ''}],

              [{text: '10'},{ text: '\nCorrect Spellings \n\n\n Students should write with correct spellings'},{text: ''}]

            ]
          }
        },
        ]};
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(this.dd).open();
    // pdfMake.createPdf(this.dd).download();
  }

  ionViewDidEnter() {
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

  getValue(index,value) {
    if(index === '1') {
      this.firstValue = value;
    } else {
      if(index === '2') {
        this.secondValue = value;
      }
      else {
        this.thirdValue = value;
      }
    }
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

  getVowelsConsonants(index,value) {
    if(index === '1') {
      this.vowelconsonantfirst = value ;
    }
    else {
      this.vowelconsonantsecond = value;
    }
  }

  circleTheVowels(index,value) {
    if(index === '1') {
      this.circlethevowelsfirst = value;
    }
    else {
      this.circlethevowelssecond = value;
    }
  }

  translateInHindi(index,value) {
    if(index === '1') {
      this.translateinhindifirst = value;
    }
    else {
      this.translateinhindisecond = value;
    }
  }

  matchTheColumn(index,value) {
    if(index === '1') {
      this.matchthecolumnfirst = value;
    }
    else {
      if(index === '2') {
        this.matchthecolumnsecond = value;
      }
      else {
        if(index === '3') {
          this.matchthecolumnthird = value;
        }
        else {
          this.matchthecolumnfourth = value
        }
      }
    }

  }


}
