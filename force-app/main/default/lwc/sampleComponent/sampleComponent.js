import { LightningElement } from 'lwc';

export default class SampleComponent extends LightningElement {
    name="World"
    handleChange(e){
        
        this.name=e.target.value;

    }
}