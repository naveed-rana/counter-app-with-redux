export const SHOW_SATE = 'SHOW_SATE';
export const ADD_COUNT = 'ADD_COUNT';
export const DEC_COUNT = 'DEC_COUNT';

export function showState(){
    const  actions = {
        type:SHOW_SATE
    }
    return actions;
}

export function addCount(){
    const  action = {
        type:ADD_COUNT
    }
    return action;
}
export function decCount(){
    const  action = {
        type:DEC_COUNT
    }
    return action;
}