const { Model } = require('objection');
const { knex } = require('./../utils/database');

Model.knex(knex);

export default class Asistance extends Model {
  static get tableName() {
    return 'ASISTANCE';
  }

  static get idColumn() {
    return 'ID';
  }
/*
  get claimId() {
    return 'CLAIM_ID';
  }

  get type() {
    return 'TYPE';
  }

  get description() {
    return 'DESCRIPTION';
  }

  get number() {
    return 'NUMBER';
  }

  get date() {
    return 'DATE';
  }

  get location() {
    return 'LOCATION';
  }

  get estimatedTime() {
    return 'ESTIMATED_TIME';
  }

  get state() {
    return 'STATE';
  }

  get user() {
    return 'USER';
  }
*/
}
