import { Injectable } from '@angular/core';
import { Lesson } from '../../Models/Lesson';
@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  l49:Lesson={
    Id: '0',
    IdCourse: '0',
    IdStudent: '987654321',
    isExecution: true
    , exe: "כתוב את מילות האשאלה באנגלית"
    , url: "jqRw-GndINE"
    , answer: "why, what, where", mark:-1}
    l51:Lesson={
      Id: '2',
      IdCourse: '0',
      IdStudent: '987654321',
      isExecution: false
      , exe: "כתוב את מילות האשאלה באנגלית"
      , url: "jqRw-GndINE"
      , answer: "", mark:-1}
      l52:Lesson={
        Id: '3',
        IdCourse: '0',
        IdStudent: '987654321',
        isExecution: false
        , exe: "כתוב את מילות האשאלה באנגלית"
        , url: "jqRw-GndINE"
        , answer: "", mark:-1}

  l0: Lesson = {
    Id: '0',
    IdCourse: '0',
    IdStudent: '12345678',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "jqRw-GndINE"
    , answer: "" ,mark:-1
  }

  l3: Lesson = {
    Id: '1',
    IdCourse: '0',
    IdStudent: '12345678',
    isExecution: true
    , exe: "כתוב את מילות האשאלה באנגלית"
    , url: "jqRw-GndINE"
    , answer: "why, what, where", mark:-1
  }

  l4: Lesson = {
    Id: '2',
    IdCourse: '0',
    IdStudent: '12345678',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: ""
    , mark: -1
  }
  l5: Lesson = {
    //אנגלית
    Id: '0',
    IdCourse: '0',
    IdStudent: '859658745',
    isExecution: true
    , exe: "כתבתי את כל אותיות האנגלית"
    , url: "wz3nsLpIWCI"
    , answer: "a, b, c, d, e", mark:-1
  }

  l6: Lesson = {
    Id: '1',
    IdCourse: '0',
    IdStudent: '859658745',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l7: Lesson = {
    Id: '2',
    IdCourse: '0',
    IdStudent: '859658745',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l8: Lesson = {
    Id: '0',
    IdCourse: '0',
    IdStudent: '254522356',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "jqRw-GndINE"
    , answer: "", mark: -1
  }
  l9: Lesson = {
    Id: '1',
    IdCourse: '0',
    IdStudent: '254522356',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l20: Lesson = {
    Id: '2',
    IdCourse: '0',
    IdStudent: '254522356',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l21: Lesson = {
    Id: '0',
    IdCourse: '1',
    IdStudent: '24681358',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l22: Lesson = {
    Id: '1',
    IdCourse: '1',
    IdStudent: '24681358',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l23: Lesson = {
    Id: '0',
    IdCourse: '1',
    IdStudent: '896589584',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l24: Lesson = {
    Id: '1',
    IdCourse: '1',
    IdStudent: '896589584',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l25: Lesson = {
    Id: '0',
    IdCourse: '1',
    IdStudent: '9856558799',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l26: Lesson = {
    Id: '1',
    IdCourse: '1',
    IdStudent: '9856558799',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }

  l29: Lesson = {
    // Id: '0',
    // IdCourse: '2',
    // IdStudent: '012345678',
    // isExecution: false
    // , exe: "סכם את השיעור בקצרה"
    // , url: "wgnBHidte6I"
    // , answer: "", mark: -1
    Id: '2',
    IdCourse: '2',
    IdStudent: '012345678',
    isExecution: true
    , exe: "?אילו צעדים ניתן לנקות מחשב מווירוסים ותוכנות זדוניות"
    , url: "FKQPzby8w2g"
    , answer: "שדרוג חומרתי"
    , mark: -1
    
  }
  l30: Lesson = {
    // Id: '1',
    // IdCourse: '2',
    // IdStudent: '012345678',
    // isExecution: false
    // , exe: "סכם את השיעור בקצרה"
    // , url: "C3GGyrtp9ks"
    // , answer: "", mark: -1
    Id: '0',
    IdCourse: '2',
    IdStudent: '012345678',
    isExecution: true
    , exe: "?אילו כלים ותהליכים ניתן להשתמש בהם עבור תחזוקה קבועה של מחשב"
    , url: "wgnBHidte6I"
    , answer: "ביצוע גיבוי אחת לתקופה על כל החומר החשוב השמור במחשב"
    ,mark:-1
  }
  l31: Lesson = {
    Id: '0',
    IdCourse: '2',
    IdStudent: '254522356',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l32: Lesson = {
    Id: '1',
    IdCourse: '2',
    IdStudent: '254522356',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "v=2rpWmIlT6Zw"
    , answer: "", mark: -1
  }

  l33: Lesson = {
    Id: '0',
    IdCourse: '3',
    IdStudent: '012345678',
    isExecution: false
    , exe: "בנה מערך ושלוף את המספר המקסימלי "
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l34: Lesson = {
    Id: '1',
    IdCourse: '3',
    IdStudent: '012345678',
    isExecution: false
    , exe: "בנה פונקציה שמקבלת מספר ומחזירה במערך את העשך של הספרות"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l35: Lesson = {
    // Id: '2',
    // IdCourse: '3',
    // IdStudent: '012345678',
    // isExecution: false
    // , exe: "סכם את השיעור בקצרה"
    // , url: "rwSCm-bcVwQ"
    // , answer: "", mark:-1

    Id: '1',
    IdCourse: '2',
    IdStudent: '012345678',
    isExecution: true
    , exe: "?מהם האופציות המומלצות לתחזוקת מחשבים כדי לשמור על ביצועים מיטביים"
    , url: "2rpWmIlT6Zw"
    , answer: "עדכון דרייברים ותוכנות, פירוק וניקוי תקופתי"
    , mark: -1

  }


  l36: Lesson = {
    Id: '0',
    IdCourse: '3',
    IdStudent: '859658745',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l37: Lesson = {
    Id: '1',
    IdCourse: '3',
    IdStudent: '859658745',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l38: Lesson = {
    Id: '2',
    IdCourse: '3',
    IdStudent: '859658745',
    isExecution: false
    , exe: "סכם את השיעור בקצרה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }

  l39: Lesson = {
    Id: '0',
    IdCourse: '4',
    IdStudent: '987654321',
    isExecution: false
    , exe: "?מהי תקופת האמנות האהובה עליך ולמה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l40: Lesson = {
    Id: '1',
    IdCourse: '4',
    IdStudent: '987654321',
    isExecution: false
    , exe: "?אילו יצירות אמנות מסוימות משפיעות עליך בצורה חזקה ומדוע"
    , url: "C3GGyrtp9ks"
    , answer: "",
     mark: -1
  }
  l41: Lesson = {
    Id: '2',
    IdCourse: '4',
    IdStudent: '987654321',
    isExecution: false
    , exe: "?איזו יצירת אמנות, אם תכוננו למראה בביתך, היית רוצה שתהיה ולמה"
    , url: "C3GGyrtp9ks"
    , answer: "", mark: -1
  }
  l27: Lesson = {
    Id: '0',
    IdCourse: '2',
    IdStudent: '987654321',
    isExecution: true
    , exe: "?אילו כלים ותהליכים ניתן להשתמש בהם עבור תחזוקה קבועה של מחשב"
    , url: "wgnBHidte6I"
    , answer: "גיבוי, עדכוני תוכנה, סריקת וירוסים, ניקוי דיסק"
    ,mark:-1
  }
  l28: Lesson = {
    Id: '1',
    IdCourse: '2',
    IdStudent: '987654321',
    isExecution: true
    , exe: "?מהם האופציות המומלצות לתחזוקת מחשבים כדי לשמור על ביצועים מיטביים"
    , url: "2rpWmIlT6Zw"
    , answer: "עדכון דרייברים ותוכנות, פירוק וניקוי תקופתי"
    , mark: -1
  }
  l42: Lesson = {
    Id: '2',
    IdCourse: '2',
    IdStudent: '987654321',
    isExecution: false
    , exe: "?אילו צעדים ניתן לנקות מחשב מווירוסים ותוכנות זדוניות"
    , url: "FKQPzby8w2g"
    , answer: ""
    , mark: -1
  }
  l43: Lesson = {
    Id: '3',
    IdCourse: '2',
    IdStudent: '987654321',
    isExecution: false
    , exe: "?מהם התקלות הנפוצות במערכת ההפעלה ואילו פתרונות קיימים עבורן"
    , url: "gspn0cfiafE"
    , answer: ""
    , mark: -1
  }
  l44: Lesson = {
    Id: '4',
    IdCourse: '2',
    IdStudent: '987654321',
    isExecution: false
    , exe: "?איך ניתן לשפר את ביצועי המחשב באמצעות עדכון התוכנה והדרייברים"
    , url: "C3GGyrtp9ks"
    , answer: ""
    , mark: -1
  }
  l45: Lesson = {
    Id: '5',
    IdCourse: '2',
    IdStudent: '987654321',
    isExecution: false
    , exe: "?מהם הסימנים המאפיינים לבעיות חומרה או תוכנה במחשב ואיך ניתן לזהותן?"
    , url: "p96jjjou9a4&t=1s"
    , answer: ""
    , mark: -1
  }
  l46:Lesson={
    Id: '3',
    IdCourse: '2',
    IdStudent: '012345678',
    isExecution: false
    , exe: "?מהם התקלות הנפוצות במערכת ההפעלה ואילו פתרונות קיימים עבורן"
    , url: "gspn0cfiafE"
    , answer: ""
    , mark: -1
  }
  l47:Lesson={
    Id: '4',
    IdCourse: '2',
    IdStudent: '012345678',
    isExecution: false
    , exe: "?איך ניתן לשפר את ביצועי המחשב באמצעות עדכון התוכנה והדרייברים"
    , url: "C3GGyrtp9ks"
    , answer: ""
    , mark: -1
  }
  l48:Lesson={
    Id: '5',
  IdCourse: '2',
  IdStudent: '012345678',
  isExecution: false
  , exe: "?מהם הסימנים המאפיינים לבעיות חומרה או תוכנה במחשב ואיך ניתן לזהותן?"
  , url: "p96jjjou9a4&t=1s"
  , answer: ""
  , mark: -1}

  l50:Lesson={
    Id: '1',
    IdCourse: '0',
    IdStudent: '987654321',
    isExecution: true
    , exe: "כתבתי את כל אותיות האנגלית"
    , url: "jqRw-GndINE"
    , answer: "a, b, c, d, e", mark:-1}
 




  constructor() { }

  arrLesson = [this.l0, this.l3, this.l4, this.l5, this.l6, this.l7, this.l8, this.l9, this.l20, this.l21, this.l22, this.l23, this.l24, this.l25, this.l26, this.l27, this.l28, this.l29, this.l30, this.l31, this.l32, this.l33, this.l34, this.l35, this.l36, this.l37, this.l38, this.l39, this.l40, this.l41, this.l42, this.l43, this.l44, this.l45, this.l46, this.l47, this.l48, this.l49, this.l50, this.l51,this.l52]
}
