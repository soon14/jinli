<?php
Doo::loadModel('AppModel');

class  BlackappBase extends AppModel{

    /**
     * @var int Max length is 10.
     */
    public $id;

    /**
     * @var varchar Max length is 64.
     */
    public $appkey;

    /**
     * @var int Max length is 12.
     */
    public $created;

    /**
     * @var int Max length is 12.
     */
    public $updated;

    public $_table = 'blackapp';
    public $_primarykey = 'id';
    public $_fields = array('id','appkey','created','updated');

    public function getVRules() {
        return array(
                'id' => array(
                        array( 'integer' ),
                        array( 'maxlength', 10 ),
                        array( 'optional' ),
                ),

                'appkey' => array(
                        array( 'maxlength', 64 ),
                        array( 'notnull' ),
                ),

                'created' => array(
                        array( 'integer' ),
                        array( 'maxlength', 12 ),
                        array( 'optional' ),
                ),

                'updated' => array(
                        array( 'integer' ),
                        array( 'maxlength', 12 ),
                        array( 'optional' ),
                )
            );
    }

}