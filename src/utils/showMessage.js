/**
 * 
 * @param {String} content 
 * @param {String} type 
 * @param {Number} duration 
 * @param {HTMLElement} container 
 */
import getComponentRootDom from "./getComponentRootDom";
import Icon from '@/components/Icon'
import styles from './showMessage.module.less'
export default function showMessage(content, type='info', duration=2000, container){
    const div = document.createElement('div');
    const iconDom = getComponentRootDom(Icon, {type});
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
    // div.className = `${styles.message} ${styles["message-"+type]}`;
    div.className = `${styles.message} ${styles[`message-${type}`]}`;
    if(!container){
        container = document.body;
    }
    else{
        if(getComputedStyle(container).position === 'static'){
            container.style.position = "relative"
        }
    }
    container.appendChild(div);
}