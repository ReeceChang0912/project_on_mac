
import {action, computed, observable} from 'mobx'
import daysStore from '../models/daysModel '
 
class DaysStore implements daysStore {
    @observable  public days: number = 51
 
    @computed
    public get greeting(): string {
        return `hello ${this.days}`
    }
 
    @action
    public wakeUp(): void{
        this.days=10000
    }
 
}
 
export default  DaysStore