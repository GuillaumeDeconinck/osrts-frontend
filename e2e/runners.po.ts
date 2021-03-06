// Open Source Race Timing System - Front-end
// Wojciech Grynczel & Guillaume Deconinck

import { browser, element, by, Key} from 'protractor';

export class RunnersPage {
    navigateTo() {
        return browser.get('/#/admin/runners');
    }

    getTab(row, col) {
        return element.all(by.css('tbody tr:nth-child(' + (row + 1) + ') td')).get(col);
    }

    edit(row) {
        element.all(by.name('edit-runner')).get(row).click();
        browser.sleep(500)
    }

    getValue(name) {
        return element(by.name(name)).getAttribute('value');
    }

    setValue(name, val) {
        element(by.name(name)).clear();
        element(by.name(name)).sendKeys(val);
    }

    clearValue(name) {
        element(by.name(name)).clear();
        element(by.name(name)).sendKeys(' ')
        element(by.name(name)).sendKeys(Key.BACK_SPACE) //Protractor bug, we have to update the model this way
    }

    save() {
        element(by.css('.save-modal')).click();
        browser.sleep(2000);
    }
    countTable() {
        return element.all(by.css('tbody > tr')).count();
    }

    sortBy(val) {
        element(by.css('.sort-' + val)).click();
        browser.sleep(500)
    }

    filterBy(val, text) {
        element(by.name('filter-' + val)).sendKeys(text);
        element(by.css('tfoot [type=submit]')).click();
        browser.sleep(500);
    }

    resetFilter(name) {
        element(by.name('filter-' + name)).clear();
        element(by.name('filter-' + name)).sendKeys(" ");
        element(by.name('filter-' + name)).sendKeys(Key.BACK_SPACE) //Protractor bug, we have to update the model this way
        element(by.css('tfoot [type=submit]')).click();
        browser.sleep(500);
    }

    getSweetTitle() {
        return element(by.css('.swal2-title')).getText();
    }

    getSweetContent() {
        return element(by.css('.swal2-content')).getText();
    }

    closeSweet() {
        element.all(by.css('.swal2-confirm')).first().click();
        browser.sleep(1000);
    }

    getTitle() {
        return element(by.css('.text-title')).getText();
    }
}
