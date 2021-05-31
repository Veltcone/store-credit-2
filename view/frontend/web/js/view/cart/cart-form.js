/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
/* eslint-disable max-nested-callbacks, no-undef */
define([
    'jquery',
    'Magento_Checkout/js/action/get-totals'
], function ($, getTotalsAction) {
    'use strict';

    return {

        calculateCredit : function () {
            var idvalue=1;
            sessionStorage.setItem('AdminId', idvalue);
            $.ajax({
                url: saveUrl,
                type: "POST",
                data: {
                    checked: true,
                    quote_id: quote
                },
                showLoader: true,
                success:function(data) {
                    var deferred = jQuery.Deferred();
                    getTotalsAction([], deferred);
                }
            });
        },

        reCalulateCredit : function () {
            var idvalue=0;
            sessionStorage.setItem('AdminId', idvalue);
            $.ajax({
                url: saveUrl,
                type: "POST",
                data: {
                    checked: false,
                    quote_id: quote
                },
                showLoader: true,
                success:function(data) {
                var deferred = jQuery.Deferred();
                getTotalsAction([], deferred);
                }
            });
        }
    }
});
