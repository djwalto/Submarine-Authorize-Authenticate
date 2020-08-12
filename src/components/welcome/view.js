
import view from '../../base/view';
import template from './template';

export default class WelcomeView extends view {
    constructor(el, context) {
        super(el, template, context, null);

        this.context.api.generateInterviewId();
    }
}
