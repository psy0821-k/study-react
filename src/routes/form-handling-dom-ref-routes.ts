import type { RouteObject } from 'react-router-dom';
import { PATHS } from './paths';
import { lazyPage } from './lazy-page';

const formHandlingDomRefRoutes: RouteObject = {
  path: PATHS.FORM_HANDLING_DOM_REF.HOME,
  children: [
    { index: true, ...lazyPage(() => import('../pages/form-handling-dom-ref')) },
    { path: PATHS.FORM_HANDLING_DOM_REF.MULTI_INPUT_FORM, ...lazyPage(() => import('../pages/form-handling-dom-ref/MultiInputForm/MultiInputForm')) },
    { path: PATHS.FORM_HANDLING_DOM_REF.FORM_SUBMISSION, ...lazyPage(() => import('../pages/form-handling-dom-ref/FormSubmission/FormSubmission')) },
    { path: PATHS.FORM_HANDLING_DOM_REF.FILE_UPLOAD, ...lazyPage(() => import('../pages/form-handling-dom-ref/FileUpload/FileUpload')) },
    { path: PATHS.FORM_HANDLING_DOM_REF.REF_STUDY, ...lazyPage(() => import('../pages/form-handling-dom-ref/RefStudy/RefStudy')) },
    { path: PATHS.FORM_HANDLING_DOM_REF.MULTI_FILES_UPLOAD, ...lazyPage(() => import('../pages/form-handling-dom-ref/MultiFilesUpload/MultiFilesUpload')) },
  ],
};

export default formHandlingDomRefRoutes;
