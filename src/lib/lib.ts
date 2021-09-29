import { keyBoardMapping } from "../data/keyboardMappings"
import { INoteNameObj, INoteNameObjInverted, KeyStringObject, NoteName } from "../types/types"

export function keyDownListerner(keyPress: KeyboardEvent) {
    const { key } = keyPress
    const id = getId(key)
    if (id) {
        const element = getElement(id)
        if (element) {
            mouseEvent(element, 'click')
            setTimeout(function moveOut() {
                mouseEvent(element, 'mouseout')
            }, 100)
        }
    }

}

function getId(key: string) { return keyBoardMapping[key] }

function getElement(id: NoteName) { return document.getElementById(id) }

function mouseEvent(element: HTMLElement, event: string) {
    var mEvent = new MouseEvent(event, {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });


    element.dispatchEvent(mEvent);
}