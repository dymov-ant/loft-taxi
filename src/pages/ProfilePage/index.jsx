import React, { PureComponent } from 'react';
import Card from '../../components/Card';
import ProfileForm from '../../components/ProfileForm';
import style from './profilePage.module.scss';

class ProfilePage extends PureComponent {
  render() {
    return (
      <div className={style.profile}>
        <div className={style.profile__card}>
          <Card>
            <ProfileForm />
          </Card>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
