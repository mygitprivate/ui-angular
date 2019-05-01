export const Code = {
    html: {
        content: `
        <mat-icon svgIcon="accessibility"></mat-icon>
        <mat-icon svgIcon="accessible_forward"></mat-icon>
        <mat-icon svgIcon="accessible"></mat-icon>
        <mat-icon svgIcon="account_balance_wallet"></mat-icon>
        <mat-icon svgIcon="account_balance"></mat-icon>
        <mat-icon svgIcon="account_box"></mat-icon>
        <mat-icon svgIcon="account_circle"></mat-icon>
        <mat-icon svgIcon="alarm_add"></mat-icon>
        <mat-icon svgIcon="alarm_off"></mat-icon>
        <mat-icon svgIcon="alarm_on"></mat-icon>
        <mat-icon svgIcon="accessible"></mat-icon>
        <mat-icon svgIcon="all_inbox"></mat-icon>
        <mat-icon svgIcon="all_out"></mat-icon>
        <mat-icon svgIcon="android"></mat-icon>
        <mat-icon svgIcon="announcement"></mat-icon>
        <mat-icon svgIcon="arrow_right_alt"></mat-icon>
        <mat-icon svgIcon="aspect_ratio"></mat-icon>
        <mat-icon svgIcon="assessment"></mat-icon>
        <mat-icon svgIcon="assignment_ind"></mat-icon>
        <mat-icon svgIcon="assignment_late"></mat-icon>
        <mat-icon svgIcon="assignment_return"></mat-icon>
        <mat-icon svgIcon="assignment_returned"></mat-icon>
        <mat-icon svgIcon="assignment_turned_in"></mat-icon>
        <mat-icon svgIcon="assignment"></mat-icon>
        <mat-icon svgIcon="autorenew"></mat-icon>
        <mat-icon svgIcon="backup"></mat-icon>
        <mat-icon svgIcon="bookmarks"></mat-icon>
        <mat-icon svgIcon="bug_report"></mat-icon>
        <mat-icon svgIcon="build"></mat-icon>
        <mat-icon svgIcon="cached"></mat-icon>
        <mat-icon svgIcon="calendar_today"></mat-icon>
        <mat-icon svgIcon="calendar_view_day"></mat-icon>
        <mat-icon svgIcon="compare_arrows"></mat-icon>
        <mat-icon svgIcon="contact_support"></mat-icon>
        <mat-icon svgIcon="copyright"></mat-icon>
        <mat-icon svgIcon="date_range"></mat-icon>
        <mat-icon svgIcon="delete_forever"></mat-icon>
        <mat-icon svgIcon="delete_outline"></mat-icon>
        <mat-icon svgIcon="delete"></mat-icon>
        <mat-icon svgIcon="dns"></mat-icon>
        <mat-icon svgIcon="done_all"></mat-icon>
        <mat-icon svgIcon="done_outline"></mat-icon>
        <mat-icon svgIcon="donut_large"></mat-icon>
        <mat-icon svgIcon="donut_small"></mat-icon>
        <mat-icon svgIcon="drag_indicator"></mat-icon>
        <mat-icon svgIcon="eject"></mat-icon>
        <mat-icon svgIcon="euro_symbol"></mat-icon>
        <mat-icon svgIcon="event_seat"></mat-icon>
        <mat-icon svgIcon="event"></mat-icon>
        <mat-icon svgIcon="exit_to_app"></mat-icon>
        <mat-icon svgIcon="explore_off"></mat-icon>
        <mat-icon svgIcon="explore"></mat-icon>
        <mat-icon svgIcon="extension"></mat-icon>
        <mat-icon svgIcon="flip_to_back"></mat-icon>
        <mat-icon svgIcon="face"></mat-icon>
        <mat-icon svgIcon="favorite_border"></mat-icon>
        <mat-icon svgIcon="favorite"></mat-icon>
        <mat-icon svgIcon="find_in_page"></mat-icon>
        <mat-icon svgIcon="find_replace"></mat-icon>
        <mat-icon svgIcon="fingerprint"></mat-icon>
        <mat-icon svgIcon="flight_land"></mat-icon>
        <mat-icon svgIcon="flight_takeoff"></mat-icon>

    `,
        language: 'html'
        },
    ts: {
        content: `
import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

/**
 * @title SVG icons
 */
@Component({
  selector: 'icon-svg-example',
  templateUrl: 'icon-svg-example.html',
  styleUrls: ['icon-svg-example.css'],
})
export class IconSvgExample {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('accessibility',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-accessibility-24px.svg'));
    iconRegistry.addSvgIcon('accessible_forward',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-accessible_forward-24px.svg'));
    iconRegistry.addSvgIcon('accessible',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-accessible-24px.svg'));
    iconRegistry.addSvgIcon('account_balance_wallet',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-account_balance_wallet-24px.svg'));
    iconRegistry.addSvgIcon('account_balance',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-account_balance-24px.svg'));
    iconRegistry.addSvgIcon('account_box',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-account_box-24px.svg'));
    iconRegistry.addSvgIcon('account_circle',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-account_circle-24px.svg'));
    iconRegistry.addSvgIcon('add_shopping_cart',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-add_shopping_cart-24px.svg'));
    iconRegistry.addSvgIcon('alarm_add',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-alarm_add-24px.svg'));
    iconRegistry.addSvgIcon('alarm_off',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-alarm_off-24px.svg'));
    iconRegistry.addSvgIcon('alarm_on',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-alarm_on-24px.svg'));
    iconRegistry.addSvgIcon('accessible',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-alarm-24px.svg'));
    iconRegistry.addSvgIcon('all_inbox',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-all_inbox-24px.svg'));
    iconRegistry.addSvgIcon('all_out',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-all_out-24px.svg'));
    iconRegistry.addSvgIcon('android',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-android-24px.svg'));
    iconRegistry.addSvgIcon('announcement',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-announcement-24px.svg'));
    iconRegistry.addSvgIcon('arrow_right_alt',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-arrow_right_alt-24px.svg'));
    iconRegistry.addSvgIcon('aspect_ratio',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-aspect_ratio-24px.svg'));
    iconRegistry.addSvgIcon('assessment',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-assessment-24px.svg'));
    iconRegistry.addSvgIcon('assignment_ind',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-assignment_ind-24px.svg'));
    iconRegistry.addSvgIcon('assignment_late',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-assignment_late-24px.svg'));
    iconRegistry.addSvgIcon('assignment_return',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-assignment_return-24px.svg'));
    iconRegistry.addSvgIcon('assignment_returned',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-assignment_returned-24px.svg'));
    iconRegistry.addSvgIcon('assignment_turned_in',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-assignment_turned_in-24px.svg'));
    iconRegistry.addSvgIcon('assignment',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-assignment-24px.svg'));
    iconRegistry.addSvgIcon('autorenew',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-autorenew-24px.svg'));
    iconRegistry.addSvgIcon('backup',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-backup-24px.svg'));
    iconRegistry.addSvgIcon('bookmarks',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-bookmarks-24px.svg'));
    iconRegistry.addSvgIcon('bug_report',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-bug_report-24px.svg'));
    iconRegistry.addSvgIcon('build',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-build-24px.svg'));
    iconRegistry.addSvgIcon('cached',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-cached-24px.svg'));
    iconRegistry.addSvgIcon('calendar_today',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-calendar_today-24px.svg'));
    iconRegistry.addSvgIcon('calendar_view_day',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-calendar_view_day-24px.svg'));
    iconRegistry.addSvgIcon('calendar_view_day',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-commute-24px.svg'));
    iconRegistry.addSvgIcon('calendar_view_day',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-code-24px.svg'));
    iconRegistry.addSvgIcon('calendar_view_day',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-class-24px.svg'));
    iconRegistry.addSvgIcon('calendar_view_day',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-chrome_reader_mode-24px.svg'));
    iconRegistry.addSvgIcon('calendar_view_day',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-check_circle-24px.svg'));
    iconRegistry.addSvgIcon('calendar_view_day',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-check_circle_outline-24px.svg'));
    iconRegistry.addSvgIcon('calendar_view_day',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-change_history-24px.svg'));
    iconRegistry.addSvgIcon('calendar_view_day',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-card_travel-24px.svg'));
    iconRegistry.addSvgIcon('calendar_view_day',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-card_membership-24px.svg'));
    iconRegistry.addSvgIcon('calendar_view_day',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-card_giftcard-24px.svg'));
    iconRegistry.addSvgIcon('compare_arrows',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-compare_arrows-24px.svg'));
    iconRegistry.addSvgIcon('contact_support',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-contact_support-24px.svg'));
    iconRegistry.addSvgIcon('copyright',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-copyright-24px.svg'));
    iconRegistry.addSvgIcon('date_range',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-date_range-24px.svg'));
    iconRegistry.addSvgIcon('delete_forever',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-delete_forever-24px.svg'));
    iconRegistry.addSvgIcon('delete_outline',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-delete_outline-24px.svg'));
    iconRegistry.addSvgIcon('delete',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-delete-24px.svg'));
    iconRegistry.addSvgIcon('dns',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-dns-24px.svg'));
    iconRegistry.addSvgIcon('done_all',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-done_all-24px.svg'));
    iconRegistry.addSvgIcon('done_outline',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-done_outline-24px.svg'));
    iconRegistry.addSvgIcon('donut_large',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-donut_large-24px.svg'));
    iconRegistry.addSvgIcon('donut_small',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-donut_small-24px.svg'));
    iconRegistry.addSvgIcon('drag_indicator',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-drag_indicator-24px.svg'));
    iconRegistry.addSvgIcon('eject',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-eject-24px.svg'));
    iconRegistry.addSvgIcon('euro_symbol',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-euro_symbol-24px.svg'));
    iconRegistry.addSvgIcon('event_seat',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-event_seat-24px.svg'));
    iconRegistry.addSvgIcon('event',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-event-24px.svg'));
    iconRegistry.addSvgIcon('exit_to_app',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-exit_to_app-24px.svg'));
    iconRegistry.addSvgIcon('explore_off',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-explore_off-24px.svg'));
    iconRegistry.addSvgIcon('explore',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-explore-24px.svg'));
    iconRegistry.addSvgIcon('extension',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-extension-24px.svg'));
    iconRegistry.addSvgIcon('flip_to_back',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-flip_to_back-24px.svg'));
    iconRegistry.addSvgIcon('face',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-face-24px.svg'));
    iconRegistry.addSvgIcon('favorite_border',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-favorite_border-24px.svg'));
    iconRegistry.addSvgIcon('favorite',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-favorite-24px.svg'));
    iconRegistry.addSvgIcon('feedback',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-feedback-24px.svg'));
    iconRegistry.addSvgIcon('find_in_page',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-find_in_page-24px.svg'));
    iconRegistry.addSvgIcon('find_replace',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-find_replace-24px.svg'));
    iconRegistry.addSvgIcon('fingerprint',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-fingerprint-24px.svg'));
    iconRegistry.addSvgIcon('flight_land',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-flight_land-24px.svg'));
    iconRegistry.addSvgIcon('flight_takeoff',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-flight_takeoff-24px.svg'));
  }
}
            `,
        language: 'javascript'
        },
    css: {
        content: `
        /** No CSS for this example */

            `,
        language: 'css'
        }
    }
