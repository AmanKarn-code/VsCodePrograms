import { LightningElement } from 'lwc';

export default class SecondComponent extends LightningElement {
    showName = "Show";
    isShow = true;
    handleClick() {
        if (this.isShow == true) {
            this.isShow = false;
            this.showName = "Hide";
        }else{
            this.isShow = true;
            this.showName = "Show";
        }
    }
}