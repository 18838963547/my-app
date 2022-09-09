import { OPERCTION} from "../const"
const {ADD_PERSON,DEL_PERSON} = OPERCTION

export function addPersonUserName(data){
    return {type:ADD_PERSON,data}
}

export function delPersonUserName(data){
    return {type:DEL_PERSON,data}
}