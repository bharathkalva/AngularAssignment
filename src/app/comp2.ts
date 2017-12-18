import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: ``,
    styles: [`.className{
        font-size:40px;`]
})
export class SecondComponent {
  title = 'SecondComponent';
  public content = 'this is the text of second component';
  public imglink = 'http://keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg';
  public forClass = 'true';
  public colorRed = 'true';
  public fname;
  public lname;
  public show = 'true';
  public case = 'today';
  public pens = ['cello', 'ximi', 'auro'];
  fn(value) {
            console.log(value);
  }
  keyfn(value) {
      console.log(value);
  }

}
