import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import Card from '../../components/Card';
import Map from '../../components/Map';
import OrderForm from '../../components/OrderForm';
import { ROUTE_NAMES } from '../../router';
import style from './mapPage.module.scss';

class MapPage extends PureComponent {
  render() {
    const { card } = this.props;

    return (
      <div className={style.mapPage__wrapper}>
        <Map />
        {card ? (
          <div className={style.mapPage__orderForm}>
            <Card>
              <OrderForm />
            </Card>
          </div>
        ) : (
          <div className={style.mapPage__toProfileBox}>
            <div className={style.mapPage__toProfileCard}>
              <Card>
                <Typography variant="h6" style={{ marginBottom: '25px' }}>
                  Для оформления заказа необходимо добавить банковскую карту
                </Typography>
                <Button variant="contained" color="primary" component={Link} to={ROUTE_NAMES.PROFILE}>
                  Перейти в профиль
                </Button>
              </Card>
            </div>
          </div>
        )}
      </div>
    );
  }
}

MapPage.defaultProps = {
  card: null,
};

MapPage.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string,
    cardNumber: PropTypes.string,
    expiryDate: PropTypes.string,
    cardName: PropTypes.string,
    cvc: PropTypes.string,
  }),
};

function mapStateToProps(state) {
  return {
    card: state.profile.card,
  };
}

export default connect(mapStateToProps, null)(MapPage);
