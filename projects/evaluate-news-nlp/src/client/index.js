import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import { analyzeText } from './js/formHandler';
import { updateUI } from './js/formHandler';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/form.scss';
import './styles/footer.scss';
import './styles/header.scss';

console.log(checkForName);

/*alert("I BELIEVE")*/

export {
    checkForName,
    handleSubmit,
    updateUI,
    analyzeText
}
