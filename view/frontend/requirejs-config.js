var config = {
    map: {
        '*': {
            'Magento_Tax/js/view/checkout/summary/grand-total':'Excellence_StoreCredit/js/view/checkout/summary/grand-total',
            'cart-form': "Excellence_StoreCredit/js/view/cart/cart-form"
        }
    },  
   shim: {
        'cart-form': {
            deps: ['jquery','Magento_Checkout/js/action/get-totals']
        }
   }
};