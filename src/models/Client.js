const { Model } = require('objection');
const { knex } = require('./../utils/database');

Model.knex(knex);

export default class Client extends Model {
  static get tableName() {
    return 'CLIENT';
  }

  static get idColumn() {
    return 'ID';
  }
/*
  get riskType() {
    return 'RISK_TYPE';
  }

  get claimTypeId() {
    return 'CLAIM_TYPE_ID';
  }
*/
}
