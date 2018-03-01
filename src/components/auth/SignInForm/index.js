import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router';
import { translate } from 'react-i18next';
import s from './styles.css';

import { namedRoutes } from '../../../routes';
import { emailValidate, passwordValidate } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';
import RenderPassword from '../../forms/RenderPassword';
import Button from '../../common/Button';

const SignInForm = (props) => {
  const {
    t,
    spinner,
    handleSubmit,
    invalid,
    error
  } = props;

  return (
    <div>
      <div className={s.title}>{t('signIn')}</div>

      {error && <div className={s.error}>{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className={s.field}>
          <Field
            component={RenderInput}
            name="email"
            type="text"
            placeholder={t('email')}
            validate={emailValidate}/>
        </div>

        <div className={s.field}>
          <Field
            component={RenderPassword}
            name="password"
            type="password"
            placeholder={t('password')}
            validate={passwordValidate}/>
        </div>

        <div className={s.password}>
          <Link to={namedRoutes.password}>{t('forgotPasswordMessage')}</Link>
        </div>

        <Button type="submit" className="pt-button pt-fill pt-large pt-intent-primary" spinner={spinner} disabled={invalid}>{t('signIn')}</Button>
      </form>

      <div className={s.footer}>
        <Link to={namedRoutes.signUp}>{t('signUp')}</Link> {t('ifNoAccount')}
      </div>
    </div>
  );
};

const FormComponent = reduxForm({
  form: 'signIn',
  initialValues: {
    email: '',
    password: ''
  }
})(SignInForm);

const TranslatedComponent = translate('auth')(FormComponent);

export default TranslatedComponent;
