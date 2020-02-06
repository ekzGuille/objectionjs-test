const { Model } = require('objection');
const { knex } = require('./../utils/database');

Model.knex(knex);

export default class Claim extends Model {
  static get tableName() {
    return 'CLAIM';
  }

  static get idColumn() {
    return 'ID';
  }

/*
  get avatar() {
    return 'AVATAR';
  }

  get idnetificationDocumentId() {
    return 'IDENTIFICATION_DOCUMENT_ID';
  }

  get idnetificationDocumentNumber() {
    return 'IDENTIFICATION_DOCUMENT_NUMBER';
  }

  get name() {
    return 'NAME';
  }

  get surneme1() {
    return 'SURNAME1';
  }

  get surneme2() {
    return 'SURNAME2';
  }

  get roadTypeId() {
    return 'ROAD_TYPE_ID';
  }

  get roadName() {
    return 'ROAD_NAME';
  }

  get roadNumber() {
    return 'ROAD_NUMBER';
  }

  get cityId() {
    return 'CITY_ID';
  }

  get provinceId() {
    return 'PROVINCE_ID';
  }

  get countryId() {
    return 'COUNTRY_ID';
  }

  get zipCode() {
    return 'ZIP_CODE';
  }

  get mail() {
    return 'MAIL';
  }

  get mailDaytimeSlotId() {
    return 'MAIL_DAYTIME_SLOT_ID';
  }

  get phone() {
    return 'PHONE';
  }

  get phoneDaytimeSlotId() {
    return 'PHONE_DAYTIME_SLOT_ID';
  }

  get preferenceId() {
    return 'PREFERENCE_ID';
  }

  get password() {
    return 'PASSWORD';
  }

  get remainingAttemps() {
    return 'REMAINING_ATTEMPS';
  }

  get preferenceLanguage() {
    return 'PREFERRED_LANGUAGE';
  }
*/
}
