import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
@Component({
  selector: 'app-e-mat-login',
  templateUrl: './e-mat-icons.component.html',
  styleUrls: ['./e-mat-icons.component.scss']
})
export class EMatIconsComponent {
  username: string;
  password: string;
  code:any;
  constructor(private eShareDataService : EShareDataService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  iconRegistry.addSvgIcon('accessibility',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-accessibility-24px.svg'));
  iconRegistry.addSvgIcon('accessible_forward',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-accessible_forward-24px.svg'));
  iconRegistry.addSvgIcon('accessible',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-accessible-24px.svg'));
  iconRegistry.addSvgIcon('account_balance_wallet',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-account_balance_wallet-24px.svg'));
  iconRegistry.addSvgIcon('account_balance',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-account_balance-24px.svg'));
  iconRegistry.addSvgIcon('account_box',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-account_box-24px.svg'));
   iconRegistry.addSvgIcon('account_circle',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-account_circle-24px.svg'));
  iconRegistry.addSvgIcon('add_shopping_cart',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-add_shopping_cart-24px.svg'));
  iconRegistry.addSvgIcon('alarm_add',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-alarm_add-24px.svg'));
  iconRegistry.addSvgIcon('alarm_off',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-alarm_off-24px.svg'));
  iconRegistry.addSvgIcon('alarm_on',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-alarm_on-24px.svg'));
  iconRegistry.addSvgIcon('accessible',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-alarm-24px.svg'));
  iconRegistry.addSvgIcon('all_inbox',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-all_inbox-24px.svg'));
  iconRegistry.addSvgIcon('all_out',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-all_out-24px.svg'));
  iconRegistry.addSvgIcon('android',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-android-24px.svg'));
  iconRegistry.addSvgIcon('announcement',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-announcement-24px.svg'));
  iconRegistry.addSvgIcon('arrow_right_alt',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-arrow_right_alt-24px.svg'));
  iconRegistry.addSvgIcon('aspect_ratio',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-aspect_ratio-24px.svg'));
  iconRegistry.addSvgIcon('assessment',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-assessment-24px.svg'));
  iconRegistry.addSvgIcon('assignment_ind',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-assignment_ind-24px.svg'));
  iconRegistry.addSvgIcon('assignment_late',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-assignment_late-24px.svg'));
  iconRegistry.addSvgIcon('assignment_return',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-assignment_return-24px.svg'));
  iconRegistry.addSvgIcon('assignment_returned',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-assignment_returned-24px.svg'));
  iconRegistry.addSvgIcon('assignment_turned_in',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-assignment_turned_in-24px.svg'));
  iconRegistry.addSvgIcon('assignment',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-assignment-24px.svg'));
  iconRegistry.addSvgIcon('autorenew',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-autorenew-24px.svg'));
  iconRegistry.addSvgIcon('backup',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-backup-24px.svg'));
  iconRegistry.addSvgIcon('bookmarks',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-bookmarks-24px.svg'));
  iconRegistry.addSvgIcon('bug_report',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-bug_report-24px.svg'));
  iconRegistry.addSvgIcon('build',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-build-24px.svg'));
  iconRegistry.addSvgIcon('cached',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-cached-24px.svg'));
  iconRegistry.addSvgIcon('calendar_today',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-calendar_today-24px.svg'));
  iconRegistry.addSvgIcon('calendar_view_day',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-calendar_view_day-24px.svg'));
  iconRegistry.addSvgIcon('calendar_view_day',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-commute-24px.svg'));
  iconRegistry.addSvgIcon('calendar_view_day',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-code-24px.svg'));
  iconRegistry.addSvgIcon('calendar_view_day',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-class-24px.svg'));
  iconRegistry.addSvgIcon('calendar_view_day',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-chrome_reader_mode-24px.svg'));
  iconRegistry.addSvgIcon('calendar_view_day',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-check_circle-24px.svg'));
  iconRegistry.addSvgIcon('calendar_view_day',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-check_circle_outline-24px.svg'));
  iconRegistry.addSvgIcon('calendar_view_day',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-change_history-24px.svg'));
  iconRegistry.addSvgIcon('calendar_view_day',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-card_travel-24px.svg'));
  iconRegistry.addSvgIcon('calendar_view_day',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-card_membership-24px.svg'));
  iconRegistry.addSvgIcon('calendar_view_day',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-card_giftcard-24px.svg'));
  iconRegistry.addSvgIcon('compare_arrows',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-compare_arrows-24px.svg'));
  iconRegistry.addSvgIcon('contact_support',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-contact_support-24px.svg'));
  iconRegistry.addSvgIcon('copyright',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-copyright-24px.svg'));
  iconRegistry.addSvgIcon('date_range',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-date_range-24px.svg'));
  iconRegistry.addSvgIcon('delete_forever',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-delete_forever-24px.svg'));
  iconRegistry.addSvgIcon('delete_outline',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-delete_outline-24px.svg'));
  iconRegistry.addSvgIcon('delete',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-delete-24px.svg'));
  iconRegistry.addSvgIcon('dns',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-dns-24px.svg'));
  iconRegistry.addSvgIcon('done_all',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-done_all-24px.svg'));
  iconRegistry.addSvgIcon('done_outline',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-done_outline-24px.svg'));
  iconRegistry.addSvgIcon('donut_large',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-donut_large-24px.svg'));
  iconRegistry.addSvgIcon('donut_small',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-donut_small-24px.svg'));
  iconRegistry.addSvgIcon('drag_indicator',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-drag_indicator-24px.svg'));
  iconRegistry.addSvgIcon('eject',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-eject-24px.svg'));
  iconRegistry.addSvgIcon('euro_symbol',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-euro_symbol-24px.svg'));
  iconRegistry.addSvgIcon('event_seat',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-event_seat-24px.svg'));
  iconRegistry.addSvgIcon('event',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-event-24px.svg'));
  iconRegistry.addSvgIcon('exit_to_app',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-exit_to_app-24px.svg'));
  iconRegistry.addSvgIcon('explore_off',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-explore_off-24px.svg'));
  iconRegistry.addSvgIcon('explore',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-explore-24px.svg'));
  iconRegistry.addSvgIcon('extension',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-extension-24px.svg'));

  iconRegistry.addSvgIcon('flip_to_back',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-flip_to_back-24px.svg'));
  iconRegistry.addSvgIcon('face',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-face-24px.svg'));
  iconRegistry.addSvgIcon('favorite_border',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-favorite_border-24px.svg'));
  iconRegistry.addSvgIcon('favorite',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-favorite-24px.svg'));
  iconRegistry.addSvgIcon('feedback',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-feedback-24px.svg'));
  iconRegistry.addSvgIcon('find_in_page',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-find_in_page-24px.svg'));
  iconRegistry.addSvgIcon('find_replace',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-find_replace-24px.svg'));
  iconRegistry.addSvgIcon('fingerprint',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-fingerprint-24px.svg'));
  iconRegistry.addSvgIcon('flight_land',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-flight_land-24px.svg'));
  iconRegistry.addSvgIcon('flight_takeoff',
  sanitizer.bypassSecurityTrustResourceUrl('assets/icons-component/baseline-flight_takeoff-24px.svg'));



   }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
    }else {
      alert("Invalid credentials");
    }
  }
}
