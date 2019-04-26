import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationStart } from '@angular/router';
import { memoize } from 'lodash-decorators';
import { Subscription } from 'rxjs';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { EShareDataService } from '../../e-shared/e-sharedata.service';
import { Code } from './code'
@Component({
  selector: 'e-layout',
  templateUrl: './e-layout.component.html',
  styleUrls: ['./e-layout.component.scss']
})
export class ELayoutComponent implements OnInit {

  componentName: string = "";
  componentType: String = "";
  code_subscription: Subscription;
  code: any;
  activeUrl:any;
  focusElement:any;
  constructor(
    private _ActivatedRoute: ActivatedRoute, public fb: FormBuilder, private eShareDataService: EShareDataService, private router: Router,
  ) {
    this.code_subscription = this.eShareDataService.getCode().subscribe(
      code => {
        this.code = code;
        this.eShareDataService.set('code', this.code);
      });
    this._ActivatedRoute.url.subscribe(() => {

      // console.log(this.route.snapshot.url);
      this.componentName = this._ActivatedRoute.snapshot.children[0].data.name;
      this.componentType = this._ActivatedRoute.snapshot.children[0].data.type;

        this.router.events.subscribe(event => {

          if(event instanceof NavigationStart) {
              this.activeUrl = event.url.replace('/', '');

              this.focusElement = this.activeUrl;
              console.log(this.activeUrl+' : This is Focus Element');
              // this.focusElement.focus();

          }

        })
    });


  }

  ngOnInit() {
    if (this.eShareDataService.get('code')) {
      this.code = this.eShareDataService.get('code');
    } else {
      this.code = Code;
    }

  }


  copyToClipboard(content: string) {
    const el = document.createElement('textarea');
    el.value = content;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
