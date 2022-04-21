import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fade from 'ember-animated/transitions/fade';

export default class AnimateBugComponent extends Component {
  @tracked
  isOpen = true;
  transition=fade;


  @action
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
