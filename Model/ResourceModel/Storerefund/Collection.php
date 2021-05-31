<?php
namespace Excellence\StoreCredit\Model\ResourceModel\Storerefund;

class Collection extends \Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection
{
    protected function _construct()
    {
        $this->_init('Excellence\StoreCredit\Model\Storerefund','Excellence\StoreCredit\Model\ResourceModel\Storerefund');
    }
}
