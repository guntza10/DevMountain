'use strict';

/**
 * contract-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contract-info.contract-info');
