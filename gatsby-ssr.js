import wrapWithProvider from './providerWrapper';
import {headConsent, postBodyConsent} from './cookie-consent';

export const wrapRootElement = wrapWithProvider;
export const onRenderBody = ({setHeadComponents, setPostBodyComponents}) => {
  setHeadComponents([headConsent()]);
  setPostBodyComponents([postBodyConsent()]);
};